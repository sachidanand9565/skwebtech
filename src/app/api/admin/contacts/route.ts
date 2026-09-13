import { NextRequest, NextResponse } from 'next/server';
import { getContacts, updateContactStatus, deleteContact, deleteAllContacts } from '@/lib/db';
import { verifySessionToken } from '@/lib/session';

async function checkAuth(req: NextRequest) {
  const token = req.cookies.get('sk_admin_session')?.value;
  return await verifySessionToken(token);
}

export async function GET(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json(await getContacts());
}

export async function PUT(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { id, status } = await req.json();
    const updated = await updateContactStatus(id, status);

    if (!updated) {
      return NextResponse.json({ error: 'Contact submission not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update contact submission' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { id, all } = await req.json();

    // Bulk clear — spam flood ke baad saari leads ek saath hatane ke liye
    if (all === true) {
      const deleted = await deleteAllContacts();
      return NextResponse.json({ success: true, deleted });
    }

    const deleted = await deleteContact(id);
    if (!deleted) {
      return NextResponse.json({ error: 'Contact submission not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete contact submission' }, { status: 500 });
  }
}
