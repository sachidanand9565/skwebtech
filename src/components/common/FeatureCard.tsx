/**
 * Feature Card Component
 * Used for "Why Choose Us" section features
 */

import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  stat?: string;
  statLabel?: string;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  stat,
  statLabel,
}: FeatureCardProps) {
  return (
    <div className="text-center group">
      {/* Icon */}
      <div className="w-16 h-16 mx-auto mb-5 bg-primary-100 rounded-2xl 
                    flex items-center justify-center
                    group-hover:bg-primary-600 transition-colors duration-300">
        <Icon
          size={32}
          className="text-primary-600 group-hover:text-white transition-colors duration-300"
        />
      </div>

      {/* Stat (optional) */}
      {stat && (
        <div className="mb-3">
          <span className="text-4xl font-heading font-bold text-primary-600">
            {stat}
          </span>
          {statLabel && (
            <span className="text-gray-600 text-sm ml-1">{statLabel}</span>
          )}
        </div>
      )}

      {/* Title */}
      <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
