import { NextRequest, NextResponse } from 'next/server';
import { getContacts, saveContacts } from '@/lib/db';
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
    const contacts = await getContacts();
    const index = contacts.findIndex((c) => c.id === id);

    if (index === -1) {
      return NextResponse.json({ error: 'Contact submission not found' }, { status: 404 });
    }

    contacts[index].status = status;
    await saveContacts(contacts);
    return NextResponse.json({ success: true, contact: contacts[index] });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update contact submission' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { id } = await req.json();
    const contacts = await getContacts();
    const filtered = contacts.filter((c) => c.id !== id);

    if (filtered.length === contacts.length) {
      return NextResponse.json({ error: 'Contact submission not found' }, { status: 404 });
    }

    await saveContacts(filtered);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete contact submission' }, { status: 505 });
  }
}
