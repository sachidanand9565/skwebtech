import { NextRequest, NextResponse } from 'next/server';
import { addContact, hasContactWithEmail } from '@/lib/db';
import { createRateLimiter, clientIp } from '@/lib/rateLimit';

const isLimited = createRateLimiter(3, 15 * 60 * 1000);

// Rendered-at timestamp from the form; a human needs more than this to type an email
const MIN_FILL_MS = 2000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Blog newsletter signup. Subscribers land in the contacts table (service
 * "newsletter") so they show up in Admin → Leads without a separate screen.
 */
export async function POST(req: NextRequest) {
  try {
    const { email, website, renderedAt } = await req.json();

    // Honeypot: only bots fill the hidden field. Pretend success so they move on.
    if (website) return NextResponse.json({ success: true });

    if (typeof renderedAt === 'number' && Date.now() - renderedAt < MIN_FILL_MS) {
      return NextResponse.json({ success: true });
    }

    if (isLimited(clientIp(req))) {
      return NextResponse.json(
        { error: 'Too many attempts. Please try again in a few minutes.' },
        { status: 429 }
      );
    }

    const clean = typeof email === 'string' ? email.trim().toLowerCase() : '';
    if (!EMAIL_RE.test(clean) || clean.length > 254) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    // Re-subscribing is a no-op, not a duplicate lead
    if (await hasContactWithEmail(clean, 'newsletter')) {
      return NextResponse.json({ success: true, alreadySubscribed: true });
    }

    const saved = await addContact({
      id: Date.now().toString(),
      name: 'Newsletter subscriber',
      email: clean,
      phone: '',
      service: 'newsletter',
      message: '[Newsletter] Subscribed from the blog page',
      status: 'Pending',
      createdAt: new Date().toISOString(),
    });

    if (!saved) {
      return NextResponse.json({ error: 'Could not subscribe right now. Please try again.' }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Newsletter API error:', err);
    return NextResponse.json({ error: 'Could not subscribe right now. Please try again.' }, { status: 500 });
  }
}
