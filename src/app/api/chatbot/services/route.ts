import { NextResponse } from 'next/server';
import { getServices } from '@/lib/db';

/**
 * Public chatbot API — services list for WhatsApp flow dynamic_list nodes.
 * Returns: [{ id, name, price }] straight from the database, so whatever
 * the admin panel has (including prices) shows up in the bot automatically.
 */

export const dynamic = 'force-dynamic';

async function handler() {
  try {
    const services = await getServices();
    const list = services.map((s) => ({
      id: s.id,
      name: s.title,
      // desc line shown under the title in the WhatsApp list
      price: s.price ? `Starting at ${s.price}` : s.shortDesc || '',
    }));
    return NextResponse.json(list);
  } catch (error) {
    console.error('Chatbot services API error:', error);
    return NextResponse.json([], { status: 500 });
  }
}

export async function GET() {
  return handler();
}

// The flow builder's dynamic_list nodes default to POST — support both
export async function POST() {
  return handler();
}
