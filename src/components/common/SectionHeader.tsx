/**
 * Section Header Component
 * Reusable section title and subtitle with optional alignment
 */

import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
  className?: string;
  children?: ReactNode;
}

export default function SectionHeader({
  title,
  subtitle,
  badge,
  align = 'center',
  className = '',
  children,
}: SectionHeaderProps) {
  const alignmentClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignmentClasses} ${className}`}>
      {/* Optional Badge */}
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 
                       text-sm font-medium rounded-full mb-4">
          {badge}
        </span>
      )}
      
      {/* Title */}
      <h2 className="section-title text-balance">{title}</h2>
      
      {/* Subtitle */}
      {subtitle && (
        <p className={`section-subtitle ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      
      {/* Optional additional content */}
      {children}
    </div>
  );
}
