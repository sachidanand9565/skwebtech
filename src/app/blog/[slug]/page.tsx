import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Tag } from 'lucide-react';
import BlogCard from '@/components/common/BlogCard';
import CTASection from '@/components/common/CTASection';
import CopyLinkButton from '@/components/common/CopyLinkButton';
import Reveal from '@/components/motion/Reveal';
import { getPostBySlug, getRelatedPosts, getAllPosts } from '@/lib/db';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    alternates: { canonical: `https://www.skwebtech.in/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }],
      url: `https://www.skwebtech.in/blog/${post.slug}`,
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt, images: [post.coverImage] },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(params.slug, 3);
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const shareUrl = `https://www.skwebtech.in/blog/${post.slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(post.title);

  return (
    <>
      <article>
        {/* Hero header */}
        <header className="relative pt-28 md:pt-36 pb-14 bg-void overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-40 mask-radial-fade pointer-events-none" />
          <div className="glow-orb top-[20%] right-1/4 w-96 h-96 bg-primary-500/[0.08] animate-aurora" />
          <div className="glow-orb bottom-0 left-1/5 w-72 h-72 bg-secondary-500/[0.08]" />

          <div className="container-custom relative z-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium mb-8 transition-colors group">
              <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" /> Back to Blog
            </Link>

            <div className="max-w-3xl">
              <Reveal y={16}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="px-3 py-1.5 bg-primary-500/10 border border-primary-500/25 text-primary-300 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  <span className="text-slate-500 text-sm flex items-center gap-1.5">
                    <Clock size={13} /> {post.readTime}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-5 leading-tight">
                  {post.title}
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">{post.excerpt}</p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/30 to-secondary-500/30 border border-white/10 flex items-center justify-center">
                      <span className="text-primary-300 font-bold text-sm">{post.author.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-medium text-white text-sm">{post.author.name}</div>
                      <div className="text-xs text-slate-500">{post.author.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                    <Calendar size={14} /> {formattedDate}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="container-custom -mt-6 relative z-10">
          <Reveal delay={0.15} y={36}>
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-soft-lg">
              <Image src={post.coverImage} alt={post.title} fill priority sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </Reveal>
        </div>

        {/* Content */}
        <div className="py-14 bg-void">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main */}
              <div className="lg:col-span-8">
                <div
                  className="prose prose-lg prose-invert max-w-none
                    prose-headings:font-heading prose-headings:font-bold prose-headings:text-white
                    prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-slate-300 prose-p:leading-relaxed
                    prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-white
                    prose-ul:text-slate-300 prose-ol:text-slate-300
                    prose-li:marker:text-primary-400
                    prose-blockquote:border-primary-500 prose-blockquote:text-slate-200 prose-blockquote:bg-primary-500/[0.06] prose-blockquote:rounded-r-xl prose-blockquote:py-1
                    prose-code:bg-white/[0.07] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-primary-300
                    prose-pre:bg-void-100 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl
                    prose-hr:border-white/10 prose-img:rounded-2xl"
                  dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex items-center flex-wrap gap-2">
                    <Tag size={16} className="text-slate-500" />
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-white/[0.05] border border-white/10 text-slate-300 text-sm rounded-full hover:border-primary-500/40 hover:text-primary-300 transition-colors cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                      <Share2 size={16} /> Share:
                    </span>
                    <div className="flex gap-2">
                      {[
                        { href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, Icon: Facebook, label: 'Facebook', hover: 'hover:bg-blue-600' },
                        { href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, Icon: Twitter, label: 'Twitter', hover: 'hover:bg-sky-500' },
                        { href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`, Icon: Linkedin, label: 'LinkedIn', hover: 'hover:bg-blue-700' },
                      ].map(({ href, Icon, label, hover }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${label}`}
                          className={`w-9 h-9 bg-white/[0.05] border border-white/10 rounded-xl flex items-center justify-center text-slate-400 ${hover} hover:text-white hover:border-transparent transition-all`}>
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
                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm">
                    <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-[0.18em]">About the Author</h3>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-14 h-14 rounded-2xl bg-brand-gradient flex items-center justify-center flex-shrink-0">
                        <span className="text-void font-bold text-lg">{post.author.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-heading font-semibold text-white">{post.author.name}</div>
                        <div className="text-xs text-slate-500">{post.author.role}</div>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">Passionate about helping businesses succeed in the digital world through innovative technology and strategic solutions.</p>
                  </div>

                  {/* Newsletter */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-void-100/90 p-6 border-glow">
                    <div className="glow-orb -top-8 -right-8 w-32 h-32 bg-primary-500/[0.18]" />
                    <div className="relative z-10">
                      <h3 className="font-heading font-bold text-white mb-2">Stay Updated</h3>
                      <p className="text-slate-400 text-sm mb-4">Get the latest articles delivered to your inbox.</p>
                      <form className="space-y-3">
                        <input type="email" placeholder="Your email" className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500/50 text-sm transition-colors" />
                        <button type="submit" className="w-full py-2.5 bg-primary-500 text-void font-heading font-semibold rounded-xl hover:bg-primary-400 hover:shadow-glow-sm transition-all text-sm">Subscribe</button>
                      </form>
                    </div>
                  </div>

                  {/* Quick links */}
                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm">
                    <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-[0.18em]">Quick Links</h3>
                    <ul className="space-y-2.5">
                      {[{ label: 'Our Services', href: '/services' }, { label: 'View Portfolio', href: '/portfolio' }, { label: 'Contact Us', href: '/contact' }].map(({ label, href }) => (
                        <li key={href}>
                          <Link href={href} className="text-slate-400 hover:text-primary-300 text-sm transition-colors flex items-center gap-2 group">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary-400 transition-colors" />
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
        <section className="relative py-14 bg-void-50">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-brand-gradient" />
              <h2 className="text-xl font-heading font-bold text-white">Related Articles</h2>
            </div>
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
