/**
 * GET /api/gateway/test-status?txn=...
 * Companion to /api/gateway/test-initiate — checks the real PhonePe status
 * for a test transaction so the result page can show what actually happened.
 */
import { NextRequest, NextResponse } from 'next/server';
import { checkPhonePeStatus } from '@/lib/phonepe';

export async function GET(req: NextRequest) {
  const txn = req.nextUrl.searchParams.get('txn');
  if (!txn) return NextResponse.json({ error: 'txn is required' }, { status: 400 });

  try {
    const status = await checkPhonePeStatus(txn);
    return NextResponse.json(status);
  } catch (e) {
    console.error('[gateway/test-status]', e);
    const message = e instanceof Error ? e.message : 'Failed to check status';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
