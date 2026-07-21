/**
 * POST /api/gateway/test-initiate
 * Standalone test harness — verifies PhonePe checkout completes when
 * initiated from THIS (approved) domain, without touching wa.skwebtech.in
 * or any real plan/wallet data. Body: { amount }
 */
import { NextRequest, NextResponse } from 'next/server';
import { initiatePhonePePayment } from '@/lib/phonepe';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const amount = Number(body.amount);
    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'A valid amount is required' }, { status: 400 });
    }

    const txn = `TEST${Date.now()}`;
    const origin = req.nextUrl.origin;

    const { redirectUrl } = await initiatePhonePePayment({
      amountRupees:    amount,
      merchantOrderId: txn,
      merchantUserId:  'gateway-test',
      redirectUrl:     `${origin}/gateway-test/result?txn=${txn}`,
    });

    return NextResponse.json({ redirectUrl, txn });
  } catch (e) {
    console.error('[gateway/test-initiate]', e);
    const message = e instanceof Error ? e.message : 'Failed to start test payment';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
