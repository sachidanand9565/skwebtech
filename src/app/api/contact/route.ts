import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { siteConfig } from '@/config/site';

const recipient =
  process.env.CONTACT_EMAIL_RECIPIENT || siteConfig.contact.email;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // ✅ Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
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
          <tr><td><b>Name</b></td><td>${name}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>Phone</b></td><td>${phone || 'Not provided'}</td></tr>
          <tr><td><b>Service</b></td><td>${service || 'Not specified'}</td></tr>
          <tr><td><b>Message</b></td><td>${message.replace(/\n/g, '<br/>')}</td></tr>
        </table>
      </div>
    `;

    // ✅ Send Mail
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