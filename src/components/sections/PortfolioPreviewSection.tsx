/**
 * Portfolio Preview Section Component
 * Shows a preview of featured portfolio projects
 */

import Link from 'next/link';
import SectionHeader from '@/components/common/SectionHeader';
import PortfolioCard from '@/components/common/PortfolioCard';
import { ArrowRight } from 'lucide-react';

// Featured projects data
const featuredProjects = [
  {
    title: 'AI-Powered Automation Platform',
    category: 'Web Application',
    description:
      'A comprehensive SaaS platform for project management with real-time collaboration features.',
    image: '/images/portfolio/limbuai.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    href: '/portfolio',
  },
  {
    title: 'Affiliate marketing website',
    category: 'Education',
    description:
      'e-commerce store with advanced filtering, wishlist, and seamless checkout.',
    image: '/images/portfolio/profitway.png',
    tags: ['Next.js', 'vercel', 'mysql'],
    href: '/portfolio',
  },
 
  {
    title: 'E-commerce Services booking website',
    category: 'website',
    description:
      'Real-time energy monitoring dashboard with analytics and predictive maintenance alerts.',
    image: '/images/portfolio/rocare.png',
    tags: ['next.js', 'Aws', 'mysql'],
    href: '/portfolio',
  },

];

interface PortfolioPreviewSectionProps {
  showAll?: boolean;
  limit?: number;
}

export default function PortfolioPreviewSection({
  showAll = false,
  limit = 3,
}: PortfolioPreviewSectionProps) {
  const displayedProjects = showAll
    ? featuredProjects
    : featuredProjects.slice(0, limit);

  return (
    <section className="py-16 md:py-20 bg-gray-50" id="portfolio">
      <div className="container-custom">
        {/* Section Header */}
        <SectionHeader
          badge="Our Portfolio"
          title="Projects That Speak for Themselves"
          subtitle="Explore our recent work and see how we've helped businesses transform 
                   their digital presence with innovative solutions."
        />

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {displayedProjects.map((project) => (
            <PortfolioCard
              key={project.title}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              tags={project.tags}
              href={project.href}
            />
          ))}
        </div>

        {/* View All Button - Only show on homepage preview */}
        {!showAll && (
          <div className="text-center mt-10">
            <Link href="/portfolio" className="btn-primary inline-flex">
              View All Projects
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
