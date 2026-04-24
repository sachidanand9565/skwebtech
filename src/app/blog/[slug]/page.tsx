import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Tag } from 'lucide-react';
import BlogCard from '@/components/common/BlogCard';
import CTASection from '@/components/common/CTASection';
import CopyLinkButton from '@/components/common/CopyLinkButton';
import { getPostBySlug, getRelatedPosts, getAllPosts } from '@/data/blog';

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    alternates: { canonical: `https://skwebtech.in/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }],
      url: `https://skwebtech.in/blog/${post.slug}`,
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt, images: [post.coverImage] },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(params.slug, 3);
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const shareUrl = `https://skwebtech.in/blog/${post.slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(post.title);

  return (
    <>
      <article>
        {/* Hero header */}
        <header className="relative pt-24 md:pt-32 pb-12 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

          <div className="container-custom relative z-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium mb-8 transition-colors">
              <ArrowLeft size={16} /> Back to Blog
            </Link>

            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="px-3 py-1.5 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold rounded-full">
                  {post.category}
                </span>
                <span className="text-slate-500 text-sm flex items-center gap-1.5">
                  <Clock size={13} /> {post.readTime}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-5 leading-tight">
                {post.title}
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">{post.excerpt}</p>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                    <span className="text-indigo-300 font-bold text-sm">{post.author.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">{post.author.name}</div>
                    <div className="text-xs text-slate-400">{post.author.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                  <Calendar size={14} /> {formattedDate}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="container-custom -mt-6 relative z-10">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-soft-lg">
            <Image src={post.coverImage} alt={post.title} fill priority sizes="100vw" className="object-cover" />
          </div>
        </div>

        {/* Content */}
        <div className="py-14">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main */}
              <div className="lg:col-span-8">
                <div
                  className="prose prose-lg max-w-none
                    prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900
                    prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-gray-600 prose-p:leading-relaxed
                    prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-gray-900
                    prose-ul:text-gray-600 prose-ol:text-gray-600
                    prose-li:marker:text-indigo-500
                    prose-blockquote:border-indigo-500 prose-blockquote:text-gray-700 prose-blockquote:bg-indigo-50 prose-blockquote:rounded-r-xl prose-blockquote:py-1
                    prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-indigo-600
                    prose-pre:bg-slate-950 prose-pre:rounded-2xl"
                  dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center flex-wrap gap-2">
                    <Tag size={16} className="text-gray-400" />
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-indigo-100 hover:text-indigo-700 transition-colors cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                      <Share2 size={16} /> Share:
                    </span>
                    <div className="flex gap-2">
                      {[
                        { href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, Icon: Facebook, label: 'Facebook', hover: 'hover:bg-blue-600' },
                        { href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, Icon: Twitter, label: 'Twitter', hover: 'hover:bg-sky-500' },
                        { href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`, Icon: Linkedin, label: 'LinkedIn', hover: 'hover:bg-blue-700' },
                      ].map(({ href, Icon, label, hover }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${label}`}
                          className={`w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 ${hover} hover:text-white transition-all`}>
                          <Icon size={16} />
                        </a>
                      ))}
                      <CopyLinkButton url={shareUrl} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                <div className="sticky top-24 space-y-6">
                  {/* Author */}
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="font-heading font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">About the Author</h3>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">{post.author.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-heading font-semibold text-gray-900">{post.author.name}</div>
                        <div className="text-xs text-gray-400">{post.author.role}</div>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">Passionate about helping businesses succeed in the digital world through innovative technology and strategic solutions.</p>
                  </div>

                  {/* Newsletter */}
                  <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-6 text-white">
                    <h3 className="font-heading font-bold mb-2">Stay Updated</h3>
                    <p className="text-indigo-200 text-sm mb-4">Get the latest articles delivered to your inbox.</p>
                    <form className="space-y-3">
                      <input type="email" placeholder="Your email" className="w-full px-4 py-2.5 rounded-xl bg-white/15 border border-white/20 text-white placeholder-indigo-300 focus:outline-none focus:border-white text-sm" />
                      <button type="submit" className="w-full py-2.5 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-colors text-sm">Subscribe</button>
                    </form>
                  </div>

                  {/* Quick links */}
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card">
                    <h3 className="font-heading font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Quick Links</h3>
                    <ul className="space-y-2.5">
                      {[{ label: 'Our Services', href: '/services' }, { label: 'View Portfolio', href: '/portfolio' }, { label: 'Contact Us', href: '/contact' }].map(({ label, href }) => (
                        <li key={href}>
                          <Link href={href} className="text-gray-500 hover:text-indigo-600 text-sm transition-colors flex items-center gap-2 group">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-indigo-500 transition-colors" />
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-14 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((post) => <BlogCard key={post.id} post={post} />)}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Ready to Start Your Project?"
        subtitle="Let's discuss how we can help you achieve your digital goals."
        primaryCTA={{ text: 'Get Free Consultation', href: '/contact' }}
      />
    </>
  );
}

function formatContent(content: string): string {
  return content
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
}
