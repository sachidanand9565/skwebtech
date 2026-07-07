import { NextRequest, NextResponse } from 'next/server';
import { getServicePageTemplates, saveServicePageTemplates } from '@/lib/db';
import { verifySessionToken } from '@/lib/session';

async function checkAuth(req: NextRequest) {
  const token = req.cookies.get('sk_admin_session')?.value;
  return await verifySessionToken(token);
}

export async function GET(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json(await getServicePageTemplates());
}

export async function POST(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const template = await req.json();
    const templates = await getServicePageTemplates();

    if (!template.id) template.id = template.slug;

    templates.push(template);
    await saveServicePageTemplates(templates);
    return NextResponse.json({ success: true, template });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create template' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const updatedTemplate = await req.json();
    const templates = await getServicePageTemplates();
    const index = templates.findIndex((t) => t.id === updatedTemplate.id);

    if (index === -1) {
      return NextResponse.json({ error: 'Template not found' }, { status: 404 });
    }

    templates[index] = { ...templates[index], ...updatedTemplate };
    await saveServicePageTemplates(templates);
    return NextResponse.json({ success: true, template: templates[index] });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update template' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { id } = await req.json();
    const templates = await getServicePageTemplates();
    const filtered = templates.filter((t) => t.id !== id);

    if (filtered.length === templates.length) {
      return NextResponse.json({ error: 'Template not found' }, { status: 404 });
    }

    await saveServicePageTemplates(filtered);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete template' }, { status: 500 });
  }
}
