import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { createSessionToken } from '@/lib/session';
import { getAdminUser } from '@/lib/db';

// Hashed against this when the username doesn't exist, so response timing
// doesn't reveal whether a username is valid.
const DUMMY_HASH = bcrypt.hashSync('timing-equalizer-guard', 12);

// In-memory brute-force guard: 5 failed attempts locks an IP for 15 minutes.
// Resets on server restart, which is acceptable at this scale.
const MAX_ATTEMPTS = 5;
const LOCK_MS = 15 * 60 * 1000;
const failedAttempts = new Map<string, { count: number; lockedUntil: number }>();

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.ip ||
    'unknown'
  );
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);

    const entry = failedAttempts.get(ip);
    if (entry && entry.lockedUntil > Date.now()) {
      const minutesLeft = Math.ceil((entry.lockedUntil - Date.now()) / 60000);
      return NextResponse.json(
        { error: `Too many failed attempts. Try again in ${minutesLeft} minute${minutesLeft > 1 ? 's' : ''}.` },
        { status: 429 }
      );
    }

    const body = await req.json();
    const password = typeof body.password === 'string' ? body.password : '';
    // Default to 'admin' so older clients that only send a password keep working
    const username =
      typeof body.username === 'string' && body.username.trim()
        ? body.username.trim()
        : 'admin';

    if (!password) {
      return NextResponse.json({ error: 'Password is required.' }, { status: 400 });
    }

    const user = await getAdminUser(username);

    // Always run a bcrypt compare so valid and invalid usernames take the same time
    const isValid = user
      ? await bcrypt.compare(password, user.passwordHash)
      : (await bcrypt.compare(password, DUMMY_HASH), false);

    if (isValid) {
      failedAttempts.delete(ip);

      const token = await createSessionToken();
      const response = NextResponse.json({ success: true });

      // Set HttpOnly cookie
      response.cookies.set('sk_admin_session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24, // 24 hours
      });

      return response;
    }

    // Record the failure and lock the IP once it crosses the threshold
    const count = (entry?.count || 0) + 1;
    failedAttempts.set(ip, {
      count,
      lockedUntil: count >= MAX_ATTEMPTS ? Date.now() + LOCK_MS : 0,
    });

    return NextResponse.json({ error: 'Invalid username or password.' }, { status: 401 });
  } catch (error) {
    console.error('Login API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
