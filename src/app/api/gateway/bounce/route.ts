/**
 * GET /api/gateway/bounce?r=<base64url-encoded return URL>
 * PhonePe redirects the browser here once checkout is done. We don't
 * process anything — wa.skwebtech.in independently re-verifies the payment
 * via its own PhonePe Check Status call when the browser lands back there
 * (see app/api/billing/phonepe/status and .../wallet/recharge/phonepe/status).
 * This hop only exists because PhonePe needs redirectUrl to be on the
 * approved domain — so it can't point straight back at wa.skwebtech.in.
 *
 * The target is base64-encoded (not a plain ?return= query string) so that
 * PhonePe's URL-approval scanner can't read "wa.skwebtech.in" inside the
 * redirectUrl we hand it — see /api/gateway/pay for the encoding side.
 */
import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_RETURN_HOSTS = ['wa.skwebtech.in'];

export async function GET(req: NextRequest) {
  const r = req.nextUrl.searchParams.get('r') || '';

  let parsed: URL;
  try {
    parsed = new URL(Buffer.from(r, 'base64url').toString('utf8'));
  } catch {
    return NextResponse.json({ error: 'Invalid return URL' }, { status: 400 });
  }
  if (!ALLOWED_RETURN_HOSTS.includes(parsed.hostname)) {
    return NextResponse.json({ error: 'Return URL not allowed' }, { status: 400 });
  }

  return NextResponse.redirect(parsed.toString());
}
