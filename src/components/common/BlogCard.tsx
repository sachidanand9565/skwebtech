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
      <article className="group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm
                          transition-all duration-500 ease-out-expo hover:border-primary-500/40 hover:shadow-card-hover">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/50 to-transparent lg:bg-gradient-to-r" />
          </div>

          {/* Content */}
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            {/* Category Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary-500/10 border border-primary-500/25 text-primary-300 text-sm font-medium rounded-full">
                {post.category}
              </span>
              <span className="px-3 py-1 bg-secondary-500/10 border border-secondary-500/25 text-secondary-300 text-sm font-medium rounded-full">
                Featured
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-200">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            {/* Excerpt */}
            <p className="text-slate-400 leading-relaxed mb-6 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
              <div className="flex items-center">
                <User size={16} className="mr-2 text-primary-400" />
                {post.author.name}
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-primary-400" />
                {formattedDate}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-primary-400" />
                {post.readTime}
              </div>
            </div>

            {/* Read More */}
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-primary-400 font-medium hover:text-primary-300 group/link"
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
    <article className="group h-full flex flex-col rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm
                        transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-primary-500/40 hover:shadow-card-hover">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void/40 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-void/70 backdrop-blur-md border border-white/15 text-white text-xs font-medium rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1.5 text-primary-400" />
            {formattedDate}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1.5 text-primary-400" />
            {post.readTime}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-heading font-semibold text-white mb-3 line-clamp-2 group-hover:text-primary-300 transition-colors duration-200">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        {/* Excerpt */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        {/* Author & Read More */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500/30 to-secondary-500/30 border border-white/10 flex items-center justify-center mr-2">
              <span className="text-primary-300 text-sm font-medium">
                {post.author.name.charAt(0)}
              </span>
            </div>
            <span className="text-sm text-slate-400">{post.author.name}</span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="text-primary-400 hover:text-primary-300 font-medium text-sm flex items-center group/link"
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
