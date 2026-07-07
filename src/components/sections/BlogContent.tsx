'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import BlogCard from '@/components/common/BlogCard';
import { BlogPost } from '@/data/blog';

interface BlogContentProps {
  allPosts: BlogPost[];
  featuredPosts: BlogPost[];
  categories: string[];
}

export default function BlogContent({ allPosts, featuredPosts, categories }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPosts = useMemo(() => {
    let posts = allPosts;
    if (activeCategory !== 'all') posts = posts.filter((p) => p.category === activeCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter((p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q)
      );
    }
    return posts;
  }, [allPosts, activeCategory, searchQuery]);

  const displayedFeatured = useMemo(() => {
    if (activeCategory === 'all' && !searchQuery.trim()) return featuredPosts;
    return filteredPosts.filter((p) => p.featured);
  }, [featuredPosts, filteredPosts, activeCategory, searchQuery]);

  const displayedRegular = useMemo(() => filteredPosts.filter((p) => !p.featured), [filteredPosts]);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-16 bg-void overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 mask-radial-fade pointer-events-none" />
        <div className="glow-orb top-[20%] right-1/4 w-96 h-96 bg-primary-500/[0.08] animate-aurora" />
        <div className="glow-orb bottom-0 left-1/4 w-72 h-72 bg-secondary-500/[0.09] animate-aurora" style={{ animationDelay: '4s' }} />

        <div className="container-custom relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="badge-chip mb-6 inline-flex"
          >
            Our Blog
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl font-heading font-bold text-white mb-5 leading-tight"
          >
            Insights & <span className="gradient-text">Resources</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-slate-400 max-w-xl mx-auto mb-10"
          >
            Stay updated with the latest trends, tips, and best practices in web development, SEO, e-commerce, and digital marketing.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md mx-auto mb-8"
          >
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-11 pr-10 py-3.5 rounded-full bg-white/[0.05] backdrop-blur-sm border border-white/10 text-white placeholder-slate-500
                           focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-primary-500/20 transition-all text-sm"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors">
                  <X size={16} />
                </button>
              )}
            </div>
          </motion.div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center gap-2"
          >
            <button
              onClick={() => setActiveCategory('all')}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'text-void'
                  : 'bg-white/[0.05] text-white/70 hover:bg-white/[0.1] border border-white/10'
              }`}
            >
              {activeCategory === 'all' && (
                <motion.span
                  layoutId="blog-filter-pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-primary-500 shadow-glow-sm"
                />
              )}
              <span className="relative z-10">All Posts</span>
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'text-void'
                    : 'bg-white/[0.05] text-white/70 hover:bg-white/[0.1] border border-white/10'
                }`}
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="blog-filter-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-primary-500 shadow-glow-sm"
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </motion.div>

          {(activeCategory !== 'all' || searchQuery) && (
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="text-slate-400 text-sm">{filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''}</span>
              <button onClick={() => { setActiveCategory('all'); setSearchQuery(''); }} className="text-primary-400 text-sm hover:text-primary-300 underline underline-offset-2">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* No results */}
      {filteredPosts.length === 0 && (
        <section className="py-20 bg-void">
          <div className="container-custom text-center">
            <div className="w-20 h-20 bg-white/[0.05] border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-slate-500" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-white mb-3">No articles found</h2>
            <p className="text-slate-400 mb-6">Try adjusting your search or browse all posts.</p>
            <button onClick={() => { setActiveCategory('all'); setSearchQuery(''); }} className="btn-primary">
              View All Posts
            </button>
          </div>
        </section>
      )}

      {/* Featured */}
      {displayedFeatured.length > 0 && (
        <section className="relative py-14 bg-void">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-brand-gradient" />
              <h2 className="text-xl font-heading font-bold text-white">
                {activeCategory === 'all' && !searchQuery ? 'Featured Articles' : `Featured in ${activeCategory}`}
              </h2>
            </div>
            <div className="space-y-6">
              {displayedFeatured.map((post) => <BlogCard key={post.id} post={post} featured />)}
            </div>
          </div>
        </section>
      )}

      {/* All posts */}
      {displayedRegular.length > 0 && (
        <section className="relative py-14 bg-void-50">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-brand-gradient" />
              <h2 className="text-xl font-heading font-bold text-white">
                {activeCategory === 'all' && !searchQuery ? 'Latest Articles' : searchQuery ? 'Search Results' : `${activeCategory} Articles`}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedRegular.map((post) => <BlogCard key={post.id} post={post} />)}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="relative py-16 bg-void overflow-hidden">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto relative overflow-hidden rounded-3xl border border-white/10 bg-void-100/80 p-10 text-center border-glow">
            <div className="glow-orb top-0 right-0 w-40 h-40 bg-primary-500/[0.15] -translate-y-1/2" />
            <div className="glow-orb bottom-0 left-0 w-40 h-40 bg-secondary-500/[0.15] translate-y-1/2" />
            <div className="relative z-10">
              <h2 className="text-2xl font-heading font-bold text-white mb-3">Subscribe to Our Newsletter</h2>
              <p className="text-slate-400 text-sm mb-7">Get the latest articles, tips, and insights delivered to your inbox. No spam, unsubscribe anytime.</p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-full bg-white/[0.06] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 text-sm transition-all"
                />
                <button type="submit" className="btn-accent whitespace-nowrap flex items-center gap-2 text-sm">
                  Subscribe <ArrowRight size={15} />
                </button>
              </form>
              <p className="text-xs text-slate-500 mt-4">By subscribing, you agree to our Privacy Policy.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
