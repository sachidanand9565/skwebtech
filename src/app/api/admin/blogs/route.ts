import { NextRequest, NextResponse } from 'next/server';
import { getBlogs, saveBlogs } from '@/lib/db';
import { verifySessionToken } from '@/lib/session';
import { BlogPost } from '@/data/blog';

// Middleware authentication check
async function checkAuth(req: NextRequest) {
  const token = req.cookies.get('sk_admin_session')?.value;
  return await verifySessionToken(token);
}

export async function GET(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json(await getBlogs());
}

export async function POST(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  
  try {
    const post: BlogPost = await req.json();
    const blogs = await getBlogs();
    
    // Auto-generate ID and slug if not provided
    if (!post.id) post.id = Date.now().toString();
    if (!post.slug) post.slug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    post.publishedAt = new Date().toISOString().split('T')[0];

    blogs.unshift(post);
    await saveBlogs(blogs);
    return NextResponse.json({ success: true, post });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const updatedPost: BlogPost = await req.json();
    const blogs = await getBlogs();
    const index = blogs.findIndex((b) => b.id === updatedPost.id);

    if (index === -1) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    blogs[index] = { ...blogs[index], ...updatedPost };
    await saveBlogs(blogs);
    return NextResponse.json({ success: true, post: blogs[index] });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!(await checkAuth(req))) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { id } = await req.json();
    const blogs = await getBlogs();
    const filtered = blogs.filter((b) => b.id !== id);

    if (filtered.length === blogs.length) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    await saveBlogs(filtered);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 });
  }
}
