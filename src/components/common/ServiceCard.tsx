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
        featured
          ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white'
          : 'bg-white'
      }`}
    >
      {/* Icon Container */}
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5
                  transition-transform duration-300 group-hover:scale-110 ${
                    featured
                      ? 'bg-white/20'
                      : 'bg-primary-100'
                  }`}
      >
        <Icon
          size={28}
          className={featured ? 'text-white' : 'text-primary-600'}
        />
      </div>

      {/* Title */}
      <h3
        className={`font-heading font-semibold text-xl mb-3 ${
          featured ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`leading-relaxed mb-5 ${
          featured ? 'text-primary-100' : 'text-gray-600'
        }`}
      >
        {description}
      </p>

      {/* Learn More Link */}
      <Link
        href={href}
        className={`inline-flex items-center font-medium text-sm group/link ${
          featured
            ? 'text-white hover:text-primary-100'
            : 'text-primary-600 hover:text-primary-700'
        }`}
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
                      bg-white/10 rounded-full blur-2xl" />
      )}
    </div>
  );
}
