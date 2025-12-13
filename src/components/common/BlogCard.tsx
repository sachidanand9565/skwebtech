/**
 * Blog Card Component
 * Displays a blog post preview in the listing
 */

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { BlogPost } from '@/data/blog';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (featured) {
    return (
      <article className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:hidden" />
          </div>

          {/* Content */}
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            {/* Category Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                {post.category}
              </span>
              <span className="px-3 py-1 bg-accent-100 text-accent-700 text-sm font-medium rounded-full">
                Featured
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-200">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            {/* Excerpt */}
            <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                {post.author.name}
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {formattedDate}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                {post.readTime}
              </div>
            </div>

            {/* Read More */}
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group/link"
            >
              Read Full Article
              <ArrowRight
                size={18}
                className="ml-2 transition-transform duration-200 group-hover/link:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1.5" />
            {formattedDate}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1.5" />
            {post.readTime}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Author & Read More */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-2">
              <span className="text-primary-600 text-sm font-medium">
                {post.author.name.charAt(0)}
              </span>
            </div>
            <span className="text-sm text-gray-600">{post.author.name}</span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center group/link"
          >
            Read More
            <ArrowRight
              size={16}
              className="ml-1 transition-transform duration-200 group-hover/link:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
