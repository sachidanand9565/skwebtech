'use client';

import { useState, useMemo } from 'react';
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
      <section className="relative pt-24 md:pt-32 pb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

        <div className="container-custom relative z-10 text-center">
          <span className="inline-block px-3 py-1.5 bg-white/10 border border-white/20 text-white/80 text-xs font-medium rounded-full mb-5 backdrop-blur-sm">
            Our Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-5 leading-tight">
            Insights &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Resources
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
            Stay updated with the latest trends, tips, and best practices in web development, SEO, e-commerce, and digital marketing.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:bg-white/15 transition-all text-sm"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors">
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === 'all' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/20'}`}
            >
              All Posts
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'bg-indigo-600 text-white shadow-md' : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/20'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {(activeCategory !== 'all' || searchQuery) && (
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="text-slate-400 text-sm">{filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''}</span>
              <button onClick={() => { setActiveCategory('all'); setSearchQuery(''); }} className="text-indigo-400 text-sm hover:text-indigo-300 underline underline-offset-2">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* No results */}
      {filteredPosts.length === 0 && (
        <section className="py-20 bg-white">
          <div className="container-custom text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3">No articles found</h2>
            <p className="text-gray-500 mb-6">Try adjusting your search or browse all posts.</p>
            <button onClick={() => { setActiveCategory('all'); setSearchQuery(''); }} className="btn-primary">
              View All Posts
            </button>
          </div>
        </section>
      )}

      {/* Featured */}
      {displayedFeatured.length > 0 && (
        <section className="py-14 bg-white">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-heading font-bold text-gray-900">
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
        <section className="py-14 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-8">
              {activeCategory === 'all' && !searchQuery ? 'Latest Articles' : searchQuery ? 'Search Results' : `${activeCategory} Articles`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedRegular.map((post) => <BlogCard key={post.id} post={post} />)}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-slate-950 to-indigo-950 rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl -translate-y-1/2" />
            <div className="relative z-10">
              <h2 className="text-2xl font-heading font-bold text-white mb-3">Subscribe to Our Newsletter</h2>
              <p className="text-slate-400 text-sm mb-7">Get the latest articles, tips, and insights delivered to your inbox. No spam, unsubscribe anytime.</p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400 text-sm"
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
