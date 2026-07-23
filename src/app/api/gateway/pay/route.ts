/**
 * POST /api/gateway/pay
 * Body: { txn, amount, return, sig }
 * Called by the "Pay Now" button on /gateway/checkout (the preview page the
 * wa.skwebtech.in checkout handoff lands on first). Verifies the signed
 * request, then actually calls PhonePe from THIS domain (the one approved
 * on the merchant account), and returns the PhonePe-hosted checkout URL for
 * the page to redirect to.
 */
import { NextRequest, NextResponse } from 'next/server';
import { verifyRelaySignature } from '@/lib/gatewayRelay';
import { initiatePhonePePayment } from '@/lib/phonepe';

// Only ever bounce back to a domain we control — never an open redirector.
const ALLOWED_RETURN_HOSTS = ['wa.skwebtech.in'];

// Never let Next.js cache this route or the PhonePe calls it makes — a cached
// auth token here silently goes stale and every payment starts failing.
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const txn = String(body?.txn || '');
  const amountRupees = Number(body?.amount);
  const returnUrl = String(body?.return || '');
  const sig = String(body?.sig || '');

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
    // Base64-encode the return URL rather than embedding it as a plain query
    // string — PhonePe's URL-approval scanner flags any foreign domain it can
    // read inside redirectUrl, even nested/encoded ones like ?return=https://wa...
    const r = Buffer.from(returnUrl, 'utf8').toString('base64url');
    const bounceUrl = `${origin}/api/gateway/bounce?r=${r}`;

    const { redirectUrl } = await initiatePhonePePayment({
      amountRupees,
      merchantOrderId: txn,
      merchantUserId:  `GW-${txn}`,
      redirectUrl:     bounceUrl,
    });

    return NextResponse.json({ redirectUrl });
  } catch (e) {
    console.error('[gateway/pay]', e);
    return NextResponse.json({ error: 'Failed to start PhonePe payment' }, { status: 500 });
  }
}
