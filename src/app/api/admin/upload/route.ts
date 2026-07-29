import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';
import { verifySessionToken } from '@/lib/session';

// Vercel Blob token — dashboard env name may be store-prefixed (profitway_...)
const BLOB_TOKEN =
  process.env.BLOB_READ_WRITE_TOKEN || process.env.profitway_READ_WRITE_TOKEN;

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif'];
const MAX_SIZE = 8 * 1024 * 1024; // 8MB

export async function POST(req: NextRequest) {
  // Verify authentication first
  const token = req.cookies.get('sk_admin_session')?.value;
  if (!(await verifySessionToken(token))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: 'Only image files are allowed (JPG, PNG, WebP, GIF, AVIF)' }, { status: 400 });
    }
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: 'Image must be under 8MB' }, { status: 400 });
    }

    const ext = path.extname(file.name) || '.jpg';
    const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;

    // Production (Vercel): filesystem is read-only, store on Vercel Blob
    if (BLOB_TOKEN) {
      const blob = await put(`uploads/${filename}`, file, {
        access: 'public',
        token: BLOB_TOKEN,
        contentType: file.type,
      });
      return NextResponse.json({ url: blob.url });
    }

    // Local dev fallback without a token: write to public/uploads/
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    fs.writeFileSync(path.join(uploadDir, filename), buffer);
    return NextResponse.json({ url: `/uploads/${filename}` });
  } catch (error) {
    console.error('File upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
