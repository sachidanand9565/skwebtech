/**
 * Blog Post Detail Page
 * Dynamic page for individual blog posts
 */

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Tag,
} from 'lucide-react';
import BlogCard from '@/components/common/BlogCard';
import CTASection from '@/components/common/CTASection';
import CopyLinkButton from '@/components/common/CopyLinkButton';
import { getPostBySlug, getRelatedPosts, getAllPosts } from '@/data/blog';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      url: `https://skwebtech.in/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(params.slug, 3);
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Social share URLs
  const shareUrl = `https://skwebtech.in/blog/${post.slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(post.title);

  return (
    <>
      {/* Article Header */}
      <article>
        <header className="pt-32 pb-12 bg-gradient-to-br from-gray-50 to-primary-50">
          <div className="container-custom">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-600 hover:text-primary-600 
                       font-medium mb-8 transition-colors duration-200"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Blog
            </Link>

            <div className="max-w-4xl">
              {/* Category & Read Time */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1.5 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm flex items-center">
                  <Clock size={14} className="mr-1" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Author & Date */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                    <span className="text-primary-600 font-semibold text-lg">
                      {post.author.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{post.author.name}</div>
                    <div className="text-sm text-gray-500">{post.author.role}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-500">
                  <Calendar size={18} className="mr-2" />
                  {formattedDate}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="container-custom -mt-4">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-soft-lg">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-8">
                <div
                  className="prose prose-lg max-w-none
                           prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900
                           prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                           prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                           prose-p:text-gray-600 prose-p:leading-relaxed
                           prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline
                           prose-strong:text-gray-900
                           prose-ul:text-gray-600 prose-ol:text-gray-600
                           prose-li:marker:text-primary-500
                           prose-blockquote:border-primary-500 prose-blockquote:text-gray-700
                           prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                           prose-pre:bg-gray-900"
                  dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center flex-wrap gap-2">
                    <Tag size={18} className="text-gray-400" />
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full 
                                 hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share Section */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-heading font-semibold text-gray-900 mb-4">
                    Share this article
                  </h3>
                  <div className="flex items-center gap-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center
                               text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
                      aria-label="Share on Facebook"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center
                               text-gray-600 hover:bg-sky-500 hover:text-white transition-all duration-200"
                      aria-label="Share on Twitter"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center
                               text-gray-600 hover:bg-blue-700 hover:text-white transition-all duration-200"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <CopyLinkButton url={shareUrl} />
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                <div className="sticky top-24 space-y-8">
                  {/* Author Card */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-heading font-semibold text-gray-900 mb-4">
                      About the Author
                    </h3>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                        <span className="text-primary-600 font-semibold text-2xl">
                          {post.author.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{post.author.name}</div>
                        <div className="text-sm text-gray-500">{post.author.role}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Passionate about helping businesses succeed in the digital world 
                      through innovative technology and strategic solutions.
                    </p>
                  </div>

                  {/* Newsletter */}
                  <div className="bg-primary-50 rounded-2xl p-6">
                    <h3 className="font-heading font-semibold text-gray-900 mb-2">
                      Stay Updated
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Subscribe to get the latest articles delivered to your inbox.
                    </p>
                    <form className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 
                                 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 
                                 transition-all duration-200 outline-none text-sm"
                      />
                      <button type="submit" className="btn-primary w-full text-sm py-2.5">
                        Subscribe
                      </button>
                    </form>
                  </div>

                  {/* Table of Contents Placeholder */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <h3 className="font-heading font-semibold text-gray-900 mb-4">
                      Quick Links
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/services"
                          className="text-gray-600 hover:text-primary-600 text-sm transition-colors duration-200"
                        >
                          Our Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/portfolio"
                          className="text-gray-600 hover:text-primary-600 text-sm transition-colors duration-200"
                        >
                          View Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          className="text-gray-600 hover:text-primary-600 text-sm transition-colors duration-200"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        subtitle="Let's discuss how we can help you achieve your digital goals."
        primaryCTA={{ text: 'Get Free Consultation', href: '/contact' }}
      />
    </>
  );
}

// Helper function to format markdown content to HTML
function formatContent(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // Unordered lists
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    // Ordered lists
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    // Checkboxes
    .replace(/- \[x\] (.*$)/gim, '<li>✓ $1</li>')
    .replace(/- \[ \] (.*$)/gim, '<li>☐ $1</li>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    // Line breaks
    .replace(/\n/g, '<br>')
    // Wrap in paragraphs
    .replace(/^(.+)$/gm, (match) => {
      if (
        match.startsWith('<h') ||
        match.startsWith('<li') ||
        match.startsWith('<ul') ||
        match.startsWith('<ol') ||
        match.trim() === ''
      ) {
        return match;
      }
      return match;
    });
}
