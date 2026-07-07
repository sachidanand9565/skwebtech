import { NextRequest, NextResponse } from 'next/server';
import { getLocations, saveLocations } from '@/lib/db';
import { verifySessionToken } from '@/lib/session';

async function checkAuth(req: NextRequest) {
  const token = req.cookies.get('sk_admin_session')?.value;
  return await verifySessionToken(token);
}

export async function GET(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json(await getLocations());
}

export async function POST(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const location = await req.json();
    const locations = await getLocations();

    if (locations.some((l) => l.slug === location.slug)) {
      return NextResponse.json({ error: 'Location with this slug already exists' }, { status: 450 });
    }

    locations.push(location);
    await saveLocations(locations);
    return NextResponse.json({ success: true, location });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create location' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const updatedLocation = await req.json();
    const locations = await getLocations();
    const index = locations.findIndex((l) => l.slug === updatedLocation.originalSlug || l.slug === updatedLocation.slug);

    if (index === -1) {
      return NextResponse.json({ error: 'Location not found' }, { status: 404 });
    }

    // Clean up temporary property if sent
    delete updatedLocation.originalSlug;

    locations[index] = { ...locations[index], ...updatedLocation };
    await saveLocations(locations);
    return NextResponse.json({ success: true, location: locations[index] });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update location' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { slug } = await req.json();
    const locations = await getLocations();
    const filtered = locations.filter((l) => l.slug !== slug);

    if (filtered.length === locations.length) {
      return NextResponse.json({ error: 'Location not found' }, { status: 404 });
    }

    await saveLocations(filtered);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete location' }, { status: 505 });
  }
}
