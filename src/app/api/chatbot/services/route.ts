import { NextRequest, NextResponse } from 'next/server';
import { getServices } from '@/lib/db';

/**
 * Public chatbot API — services for WhatsApp flow nodes.
 *
 * GET / POST (no body)   -> list for dynamic_list nodes: [{ id, name, price }]
 * POST { "id": "..." }   -> single service detail for api nodes:
 *                           { id, name, price, description, features, technologies }
 * Everything comes straight from the database, so admin panel edits
 * (including prices) show up in the bot automatically.
 */

export const dynamic = 'force-dynamic';

async function listHandler() {
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

async function detailHandler(id: string) {
  try {
    const services = await getServices();
    const s = services.find((x) => x.id === id);
    if (!s) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }
    return NextResponse.json({
      id: s.id,
      name: s.title,
      price: s.price ? `Starting at ${s.price}` : 'Custom pricing — ask us for a free quote',
      description: s.description || s.shortDesc || '',
      // WhatsApp-ready bullet list
      features: (s.features || []).slice(0, 6).map((f: string) => `• ${f}`).join('\n'),
      technologies: (s.technologies || []).join(', '),
    });
  } catch (error) {
    console.error('Chatbot service detail API error:', error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}

export async function GET() {
  return listHandler();
}

// The flow builder's dynamic_list nodes default to POST — support both.
// With { id } in the body this returns that service's full details instead.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (body && typeof body.id === 'string' && body.id.trim()) {
    return detailHandler(body.id.trim());
  }
  return listHandler();
}
