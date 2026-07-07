import { NextRequest, NextResponse } from 'next/server';
import { getServices, saveServices } from '@/lib/db';
import { verifySessionToken } from '@/lib/session';

async function checkAuth(req: NextRequest) {
  const token = req.cookies.get('sk_admin_session')?.value;
  return await verifySessionToken(token);
}

export async function GET(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json(await getServices());
}

export async function POST(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const service = await req.json();
    const services = await getServices();

    if (!service.id) {
      service.id = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }

    services.push(service);
    await saveServices(services);
    return NextResponse.json({ success: true, service });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const updatedService = await req.json();
    const services = await getServices();
    const index = services.findIndex((s) => s.id === updatedService.id);

    if (index === -1) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    services[index] = { ...services[index], ...updatedService };
    await saveServices(services);
    return NextResponse.json({ success: true, service: services[index] });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update service' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { id } = await req.json();
    const services = await getServices();
    const filtered = services.filter((s) => s.id !== id);

    if (filtered.length === services.length) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    await saveServices(filtered);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
  }
}
