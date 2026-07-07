/**
 * Service Card Component
 * Reusable card for displaying individual services
 */

import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  featured?: boolean;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href = '/services',
  featured = false,
}: ServiceCardProps) {
  return (
    <div
      className={`card group relative overflow-hidden ${
        featured ? 'border-primary-500/40 bg-brand-gradient-soft' : ''
      }`}
    >
      {/* Icon Container */}
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5
                  transition-transform duration-300 group-hover:scale-110 ${
                    featured
                      ? 'bg-primary-500/20 border border-primary-500/30'
                      : 'bg-white/[0.06] border border-white/10'
                  }`}
      >
        <Icon size={28} className="text-primary-400" />
      </div>

      {/* Title */}
      <h3 className="font-heading font-semibold text-xl mb-3 text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="leading-relaxed mb-5 text-slate-400">
        {description}
      </p>

      {/* Learn More Link */}
      <Link
        href={href}
        className="inline-flex items-center font-medium text-sm group/link text-primary-400 hover:text-primary-300"
      >
        Learn More
        <ArrowRight
          size={16}
          className="ml-1 transition-transform duration-200 group-hover/link:translate-x-1"
        />
      </Link>

      {/* Decorative gradient blob */}
      {featured && (
        <div className="absolute -bottom-10 -right-10 w-40 h-40
                      bg-primary-500/15 rounded-full blur-2xl" />
      )}
    </div>
  );
}
