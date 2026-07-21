/**
 * POST /api/gateway/webhook
 * Transparent relay: PhonePe's Business Dashboard has this (approved-domain)
 * URL configured as the webhook target. We forward the exact body + auth
 * header to wa.skwebtech.in's real handler, which does the actual signature
 * verification and crediting — this route does no processing of its own.
 */
import { NextRequest, NextResponse } from 'next/server';

const TARGET = 'https://wa.skwebtech.in/api/phonepe/webhook';

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const auth = req.headers.get('authorization') || '';

    const res = await fetch(TARGET, {
      method:  'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:  auth,
      },
      body: rawBody,
    });

    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.status });
  } catch (e) {
    console.error('[gateway/webhook] relay failed', e);
    return NextResponse.json({ success: false }, { status: 502 });
  }
}
