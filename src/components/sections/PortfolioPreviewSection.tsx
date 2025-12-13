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
    title: 'TechFlow SaaS Platform',
    category: 'Web Application',
    description:
      'A comprehensive SaaS platform for project management with real-time collaboration features.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB'],
    href: '/portfolio/techflow',
  },
  {
    title: 'StyleHub E-Commerce',
    category: 'E-Commerce',
    description:
      'Modern fashion e-commerce store with advanced filtering, wishlist, and seamless checkout.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Shopify', 'Stripe'],
    href: '/portfolio/stylehub',
  },
  {
    title: 'HealthCare Plus App',
    category: 'Mobile App',
    description:
      'Healthcare management app with appointment booking, telemedicine, and health tracking.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    tags: ['React Native', 'Firebase', 'HIPAA'],
    href: '/portfolio/healthcare-plus',
  },
  {
    title: 'GreenEnergy Dashboard',
    category: 'Dashboard',
    description:
      'Real-time energy monitoring dashboard with analytics and predictive maintenance alerts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'D3.js', 'Python'],
    href: '/portfolio/greenenergy',
  },
  {
    title: 'EduLearn Platform',
    category: 'EdTech',
    description:
      'Online learning platform with video courses, quizzes, certifications, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    tags: ['Laravel', 'Vue.js', 'AWS'],
    href: '/portfolio/edulearn',
  },
  {
    title: 'FoodieExpress App',
    category: 'Food Delivery',
    description:
      'Food delivery app with real-time tracking, multiple payment options, and restaurant dashboard.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
    tags: ['Flutter', 'Node.js', 'Google Maps'],
    href: '/portfolio/foodieexpress',
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
    <section className="py-20 md:py-28 bg-gray-50" id="portfolio">
      <div className="container-custom">
        {/* Section Header */}
        <SectionHeader
          badge="Our Portfolio"
          title="Projects That Speak for Themselves"
          subtitle="Explore our recent work and see how we've helped businesses transform 
                   their digital presence with innovative solutions."
        />

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
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
          <div className="text-center mt-12">
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
