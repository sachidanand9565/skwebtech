import { NextRequest, NextResponse } from 'next/server';
import { verifySessionToken } from '@/lib/session';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('sk_admin_session')?.value;
  const isValid = await verifySessionToken(token);

  if (isValid) {
    return NextResponse.json({ authenticated: true });
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}
