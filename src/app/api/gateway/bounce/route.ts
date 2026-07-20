/**
 * GET /api/gateway/bounce?return=...
 * PhonePe redirects the browser here once checkout is done. We don't
 * process anything — wa.skwebtech.in independently re-verifies the payment
 * via its own PhonePe Check Status call when the browser lands back there
 * (see app/api/billing/phonepe/status and .../wallet/recharge/phonepe/status).
 * This hop only exists because PhonePe needs redirectUrl to be on the
 * approved domain — so it can't point straight back at wa.skwebtech.in.
 */
import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_RETURN_HOSTS = ['wa.skwebtech.in'];

export async function GET(req: NextRequest) {
  const returnUrl = req.nextUrl.searchParams.get('return') || '';

  let parsed: URL;
  try {
    parsed = new URL(returnUrl);
  } catch {
    return NextResponse.json({ error: 'Invalid return URL' }, { status: 400 });
  }
  if (!ALLOWED_RETURN_HOSTS.includes(parsed.hostname)) {
    return NextResponse.json({ error: 'Return URL not allowed' }, { status: 400 });
  }

  return NextResponse.redirect(parsed.toString());
}
