/**
 * Blog Content Component
 * Client-side component for blog filtering and search
 */

'use client';

import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import BlogCard from '@/components/common/BlogCard';
import { BlogPost } from '@/data/blog';

interface BlogContentProps {
  allPosts: BlogPost[];
  featuredPosts: BlogPost[];
  categories: string[];
}

export default function BlogContent({
  allPosts,
  featuredPosts,
  categories,
}: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    // Filter by category
    if (activeCategory !== 'all') {
      posts = posts.filter((post) => post.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          post.category.toLowerCase().includes(query)
      );
    }

    return posts;
  }, [allPosts, activeCategory, searchQuery]);

  // Get featured posts for the current filter
  const displayedFeaturedPosts = useMemo(() => {
    if (activeCategory === 'all' && !searchQuery.trim()) {
      return featuredPosts;
    }
    return filteredPosts.filter((post) => post.featured);
  }, [featuredPosts, filteredPosts, activeCategory, searchQuery]);

  // Get regular posts (non-featured) for the current filter
  const displayedRegularPosts = useMemo(() => {
    if (activeCategory === 'all' && !searchQuery.trim()) {
      return filteredPosts.filter((post) => !post.featured);
    }
    return filteredPosts.filter((post) => !post.featured);
  }, [filteredPosts, activeCategory, searchQuery]);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Stay updated with the latest trends, tips, and best practices in
              web development, SEO, e-commerce, and digital marketing.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-10 py-3 rounded-full border border-gray-200 
                           focus:ring-2 focus:ring-primary-500 focus:border-primary-500 
                           transition-all duration-200 outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 
                             hover:text-gray-600 transition-colors duration-200"
                    aria-label="Clear search"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Active filters info */}
          {(activeCategory !== 'all' || searchQuery) && (
            <div className="flex items-center justify-center gap-2 mt-6">
              <span className="text-gray-500 text-sm">
                Showing {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''}
              </span>
              {(activeCategory !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                  className="text-primary-600 text-sm font-medium hover:text-primary-700 
                           underline underline-offset-2"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <section className="py-20 bg-white">
          <div className="container-custom text-center">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-gray-400" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                No articles found
              </h2>
              <p className="text-gray-600 mb-6">
                We couldn&apos;t find any articles matching your criteria. Try adjusting
                your search or browse all posts.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="btn-primary"
              >
                View All Posts
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Featured Posts */}
      {displayedFeaturedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8">
              {activeCategory === 'all' && !searchQuery
                ? 'Featured Articles'
                : `Featured in ${activeCategory}`}
            </h2>
            <div className="space-y-8">
              {displayedFeaturedPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      {displayedRegularPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8">
              {activeCategory === 'all' && !searchQuery
                ? 'Latest Articles'
                : searchQuery
                ? 'Search Results'
                : `${activeCategory} Articles`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedRegularPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Get the latest articles, tips, and insights delivered directly to
              your inbox. No spam, unsubscribe anytime.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 
                         focus:ring-2 focus:ring-primary-500 focus:border-primary-500 
                         transition-all duration-200 outline-none"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
