/**
 * Portfolio Card Component
 * Reusable card for displaying portfolio projects
 */

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';

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
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-card 
                  hover:shadow-card-hover transition-all duration-500">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={`${title} - ${category} project by SK WebTech`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 
                   group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center 
                      opacity-0 group-hover:opacity-100 transition-all duration-300 
                      translate-y-4 group-hover:translate-y-0">
          <Link
            href={href}
            className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-medium 
                     flex items-center space-x-2 hover:bg-primary-600 hover:text-white 
                     transition-colors duration-200"
          >
            <span>View Project</span>
            <ExternalLink size={16} />
          </Link>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs 
                         font-medium px-3 py-1.5 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2 
                     group-hover:text-primary-600 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md"
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
