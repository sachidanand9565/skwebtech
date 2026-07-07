import Link from 'next/link';
import SectionHeader from '@/components/common/SectionHeader';
import PortfolioCard from '@/components/common/PortfolioCard';
import { ArrowRight } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/motion/Stagger';
import { getProjects } from '@/lib/db';

interface PortfolioPreviewSectionProps {
  showAll?: boolean;
  limit?: number;
}

export default async function PortfolioPreviewSection({
  showAll = false,
  limit = 3,
}: PortfolioPreviewSectionProps) {
  const allProjects = await getProjects();
  const featuredProjects = allProjects.filter(p => p.featured || showAll);

  const displayedProjects = showAll
    ? allProjects
    : featuredProjects.slice(0, limit);

  return (
    <section className="relative py-20 md:py-24 bg-void-50 overflow-hidden" id="portfolio">
      {/* Ambient background */}
      <div className="glow-orb top-[10%] left-[15%] w-[420px] h-[380px] bg-primary-500/[0.05]" />
      <div className="glow-orb bottom-0 right-[10%] w-[380px] h-[340px] bg-secondary-500/[0.06]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge="Our Portfolio"
          title="Projects That Speak for Themselves"
          subtitle="Explore our recent work and see how we've helped businesses transform their digital presence with innovative solutions."
        />

        {/* Portfolio Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {displayedProjects.map((project) => (
            <StaggerItem key={project.id} className="h-full">
              <PortfolioCard
                title={project.title}
                category={project.category === 'ecommerce' ? 'E-Commerce' : project.category === 'dashboard' ? 'Dashboard' : project.category === 'edtech' ? 'EdTech' : 'Web Application'}
                description={project.description}
                image={project.image}
                tags={project.technologies}
                href={project.liveUrl || '/portfolio'}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Button */}
        {!showAll && (
          <div className="text-center mt-14">
            <Link href="/portfolio" className="btn-primary inline-flex group">
              View All Projects
              <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
