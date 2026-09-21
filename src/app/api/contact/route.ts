import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { siteConfig } from '@/config/site';
import { addContact, ContactMessage } from '@/lib/db';
import { verifyCaptcha } from '@/lib/captcha';
import { createRateLimiter, clientIp } from '@/lib/rateLimit';

const recipient =
  process.env.CONTACT_EMAIL_RECIPIENT || siteConfig.contact.email;

// Visitor input goes into an HTML email — escape it so nobody can inject
// markup or phishing links into the admin inbox
const escapeHtml = (v: unknown) =>
  String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

// Ek IP se 15 minute me max 3 submissions
const isRateLimited = createRateLimiter(3, 15 * 60 * 1000);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, captchaToken, captchaAnswer, company } = body;

    // 🍯 Honeypot — hidden field jo sirf bots bharte hain. Silently "success"
    // return karte hain taaki bot ko pata na chale ki lead discard hui.
    if (company) {
      return NextResponse.json({ success: true });
    }

    // 🚦 Rate limit per IP
    if (isRateLimited(clientIp(request))) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again in a few minutes.' },
        { status: 429 }
      );
    }

    // 🤖 Captcha verification — direct API POST karne wale bots yahin rukte hain
    const captcha = verifyCaptcha(captchaToken, captchaAnswer);
    if (!captcha.ok) {
      return NextResponse.json(
        {
          error:
            captcha.reason === 'wrong'
              ? 'Security answer is incorrect. Please try again.'
              : captcha.reason === 'expired'
                ? 'The security question expired while the form was open. We have shown a new one — your message is still here, just answer it and send again.'
                : 'Security check failed. Please answer the verification question and try again.',
          captchaFailed: true,
        },
        { status: 400 }
      );
    }

    // ✅ Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // ✅ Save to local database
    let dbSaved = false;
    try {
      const newContact: ContactMessage = {
        id: Date.now().toString(),
        name,
        email,
        phone: phone || '',
        service: service || '',
        message,
        status: 'Pending',
        createdAt: new Date().toISOString(),
      };
      dbSaved = await addContact(newContact);
    } catch (dbErr) {
      console.error('Failed to save contact lead to database:', dbErr);
    }

    // ✅ Transporter (GMAIL SIMPLE SETUP)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // 🔥 direct gmail use
      auth: {
        user: process.env.SMTP_USER, // gmail
        pass: process.env.SMTP_PASS, // app password
      },
    });

    // ✅ HTML Template
    const htmlBody = `
      <div style="font-family:Arial,sans-serif">
        <h2>📩 New Contact Request</h2>
        <table border="1" cellpadding="10" cellspacing="0">
          <tr><td><b>Name</b></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><b>Email</b></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><b>Phone</b></td><td>${escapeHtml(phone || 'Not provided')}</td></tr>
          <tr><td><b>Service</b></td><td>${escapeHtml(service || 'Not specified')}</td></tr>
          <tr><td><b>Message</b></td><td>${escapeHtml(message).replace(/\n/g, '<br/>')}</td></tr>
        </table>
      </div>
    `;

    // ✅ Send Mail — the lead is already in the database, so an email failure
    // should not show an error to the visitor (they'd resubmit or leave).
    try {
      await transporter.sendMail({
        from: `"Website Lead" <${process.env.SMTP_USER}>`,
        to: recipient, // admin mail
        replyTo: email, // 🔥 direct reply user ko
        subject: `🚀 New Lead from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${
          phone || 'Not provided'
        }\nService: ${service || 'Not specified'}\n\nMessage:\n${message}`,
        html: htmlBody,
      });
    } catch (mailErr) {
      console.error('Mail Error:', mailErr);
      if (dbSaved) {
        // Lead captured in DB — visitor ke liye ye success hai
        return NextResponse.json({ success: true, emailSent: false });
      }
      return NextResponse.json(
        { error: 'Mail not sent. Check SMTP configuration.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mail Error:', error);

    return NextResponse.json(
      {
        error: 'Mail not sent. Check SMTP configuration.',
      },
      { status: 500 }
    );
  }
}