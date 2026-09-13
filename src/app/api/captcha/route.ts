import { NextResponse } from 'next/server';
import { createChallenge } from '@/lib/captcha';

// Har request par fresh challenge — cache nahi hona chahiye
export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(createChallenge(), {
    headers: { 'Cache-Control': 'no-store' },
  });
}
