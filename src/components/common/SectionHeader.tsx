/**
 * Section Header Component
 * Reusable section title and subtitle with optional alignment
 */

import { ReactNode } from 'react';
import Reveal from '@/components/motion/Reveal';

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
        <Reveal y={14}>
          <span className="badge-chip mb-4 md:mb-5">{badge}</span>
        </Reveal>
      )}

      {/* Title */}
      <Reveal delay={0.08}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white text-balance mb-3 md:mb-4">
          {title}
        </h2>
      </Reveal>

      {/* Subtitle */}
      {subtitle && (
        <Reveal delay={0.16}>
          <p className={`text-base md:text-lg text-slate-400 leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        </Reveal>
      )}

      {/* Optional additional content */}
      {children}
    </div>
  );
}
