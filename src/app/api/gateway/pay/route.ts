/**
 * GET /api/gateway/pay?txn=...&amount=...&return=...&sig=...
 * Entry point for the wa.skwebtech.in checkout handoff. Verifies the
 * signed request, then actually calls PhonePe from THIS domain (the one
 * approved on the merchant account), and sends the browser to PhonePe's
 * hosted checkout page.
 */
import { NextRequest, NextResponse } from 'next/server';
import { verifyRelaySignature } from '@/lib/gatewayRelay';
import { initiatePhonePePayment } from '@/lib/phonepe';

// Only ever bounce back to a domain we control — never an open redirector.
const ALLOWED_RETURN_HOSTS = ['wa.skwebtech.in'];

// Never let Next.js cache this route or the PhonePe calls it makes — a cached
// auth token here silently goes stale and every payment starts failing.
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const txn = searchParams.get('txn') || '';
  const amountRupees = Number(searchParams.get('amount'));
  const returnUrl = searchParams.get('return') || '';
  const sig = searchParams.get('sig') || '';

  if (!txn || !amountRupees || amountRupees <= 0 || !returnUrl) {
    return NextResponse.json({ error: 'Invalid payment request' }, { status: 400 });
  }

  let returnHost: string;
  try {
    returnHost = new URL(returnUrl).hostname;
  } catch {
    return NextResponse.json({ error: 'Invalid return URL' }, { status: 400 });
  }
  if (!ALLOWED_RETURN_HOSTS.includes(returnHost)) {
    return NextResponse.json({ error: 'Return URL not allowed' }, { status: 400 });
  }

  if (!verifyRelaySignature({ txn, amountRupees, returnUrl }, sig)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  try {
    const origin = req.nextUrl.origin;
    const bounceUrl = `${origin}/api/gateway/bounce?return=${encodeURIComponent(returnUrl)}`;

    const { redirectUrl } = await initiatePhonePePayment({
      amountRupees,
      merchantOrderId: txn,
      merchantUserId:  `GW-${txn}`,
      redirectUrl:     bounceUrl,
    });

    return NextResponse.redirect(redirectUrl);
  } catch (e) {
    console.error('[gateway/pay]', e);
    const message = e instanceof Error ? e.message : String(e);
    // Nothing to show the user here but a plain error — send them back with a failure flag.
    // TEMP: the actual error message rides along in the URL so we can diagnose
    // without needing to dig through Vercel's function logs — remove once resolved.
    const fallback = new URL(returnUrl);
    fallback.searchParams.set('gateway_error', '1');
    fallback.searchParams.set('gateway_error_detail', message.slice(0, 200));
    return NextResponse.redirect(fallback.toString());
  }
}
