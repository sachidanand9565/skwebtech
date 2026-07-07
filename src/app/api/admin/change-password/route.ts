import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { verifySessionToken } from '@/lib/session';
import { getAdminUser, updateAdminPassword } from '@/lib/db';

const ADMIN_USERNAME = 'admin';

export async function POST(req: NextRequest) {
  // Only a logged-in admin may change the password
  const token = req.cookies.get('sk_admin_session')?.value;
  if (!(await verifySessionToken(token))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const currentPassword = typeof body.currentPassword === 'string' ? body.currentPassword : '';
    const newPassword = typeof body.newPassword === 'string' ? body.newPassword : '';

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: 'Current and new password are required.' },
        { status: 400 }
      );
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { error: 'New password must be at least 8 characters long.' },
        { status: 400 }
      );
    }

    const user = await getAdminUser(ADMIN_USERNAME);
    if (!user) {
      return NextResponse.json({ error: 'Admin account not found.' }, { status: 404 });
    }

    const isValid = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!isValid) {
      return NextResponse.json({ error: 'Current password is incorrect.' }, { status: 401 });
    }

    const newHash = await bcrypt.hash(newPassword, 12);
    const updated = await updateAdminPassword(ADMIN_USERNAME, newHash);

    if (!updated) {
      return NextResponse.json({ error: 'Failed to update password.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Change password API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
