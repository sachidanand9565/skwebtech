/**
 * Portfolio Card Component
 * Reusable card for displaying portfolio projects
 */

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  href?: string;
  tags?: string[];
}

export default function PortfolioCard({
  title,
  category,
  description,
  image,
  href = '#',
  tags = [],
}: PortfolioCardProps) {
  return (
    <div className="group relative h-full flex flex-col rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.03]
                    backdrop-blur-sm transition-all duration-500 ease-out-expo
                    hover:-translate-y-1.5 hover:border-primary-500/40 hover:shadow-card-hover">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={`${title} - ${category} project by SK WebTech`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/25 to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center
                        opacity-0 group-hover:opacity-100 transition-all duration-300
                        translate-y-4 group-hover:translate-y-0">
          <Link
            href={href}
            className="bg-primary-500 text-void px-5 py-2.5 rounded-full font-heading font-semibold text-sm
                       flex items-center space-x-2 hover:bg-primary-400 hover:shadow-glow
                       transition-all duration-200"
          >
            <span>View Project</span>
            <ExternalLink size={16} />
          </Link>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-void/70 backdrop-blur-md border border-white/15 text-white text-xs
                           font-medium px-3 py-1.5 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading font-semibold text-xl text-white mb-2
                       group-hover:text-primary-300 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-primary-500/[0.08] border border-primary-500/15 text-primary-300 px-2.5 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
