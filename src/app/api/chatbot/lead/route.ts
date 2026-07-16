import { NextRequest, NextResponse } from 'next/server';
import { getContacts, saveContacts, ContactMessage } from '@/lib/db';

/**
 * Public chatbot API — creates a lead from the WhatsApp flow.
 * The lead lands in the same `contacts` table as the website contact form,
 * so it shows up in Admin → Leads alongside everything else.
 */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const mobile = typeof body.mobile === 'string' ? body.mobile.trim() : '';

    if (!name || !mobile) {
      return NextResponse.json(
        { success: false, error: 'Name and mobile are required.' },
        { status: 400 }
      );
    }

    const serviceName =
      typeof body.service_name === 'string' && body.service_name.trim()
        ? body.service_name.trim()
        : typeof body.service === 'string'
          ? body.service.trim()
          : '';
    const requirement = typeof body.requirement === 'string' ? body.requirement.trim() : '';
    const emailRaw = typeof body.email === 'string' ? body.email.trim() : '';
    const email = emailRaw && emailRaw.toLowerCase() !== 'skip' ? emailRaw : '';
    const source = typeof body.source === 'string' && body.source.trim() ? body.source.trim() : 'WhatsApp Bot';

    const newContact: ContactMessage = {
      id: Date.now().toString(),
      name,
      email,
      phone: mobile,
      service: serviceName,
      message: `[${source}] ${requirement}`.trim(),
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };

    const contacts = await getContacts();
    contacts.unshift(newContact);
    await saveContacts(contacts);

    return NextResponse.json({ success: true, lead_id: newContact.id });
  } catch (error) {
    console.error('Chatbot lead API error:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
