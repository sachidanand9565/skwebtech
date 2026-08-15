import { Metadata } from 'next';
import PortfolioContent from '@/components/sections/PortfolioContent';
import CTASection from '@/components/common/CTASection';
import Counter from '@/components/motion/Counter';
import Reveal from '@/components/motion/Reveal';
import { getProjects } from '@/lib/db';

// ISR: DB-driven content (admin panel edits) refreshes within 5 minutes
export const revalidate = 300;


export const metadata: Metadata = {
  title: 'Our Portfolio - Web Development & IT Projects | SK WebTech',
  description:
    "Explore SK WebTech's portfolio of successful web development, e-commerce, mobile app, and IT projects. See how we've helped businesses transform their digital presence.",
  keywords: ['web development portfolio', 'IT project showcase', 'e-commerce projects', 'mobile app portfolio', 'web design examples'],
  alternates: { canonical: 'https://www.skwebtech.in/portfolio' },
  openGraph: {
    title: 'Our Portfolio | SK WebTech',
    description: 'Explore our portfolio of successful web development, e-commerce, and IT projects.',
    type: 'website',
    url: 'https://www.skwebtech.in/portfolio',
  },
};

const stats = [
  { value: '80+', label: 'Projects Delivered' },
  { value: '100+', label: 'Happy Clients' },
  { value: '15+', label: 'Industries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default async function PortfolioPage() {
  const initialProjects = await getProjects();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-28 pb-10 bg-void overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 mask-radial-fade pointer-events-none" />
        <div className="glow-orb top-[15%] right-1/4 w-96 h-96 bg-primary-500/[0.08]" />
        <div className="glow-orb bottom-0 left-1/4 w-72 h-72 bg-secondary-500/[0.09]" style={{ animationDelay: '4s' }} />

        <div className="container-custom relative z-10 text-center">
          <Reveal y={16}>
            <span className="badge-chip mb-6">Our Portfolio</span>
          </Reveal>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-5 leading-tight">
            <span>Projects We&apos;re</span>{' '}
            <span className="gradient-text">Proud Of</span>
          </h1>
          <Reveal delay={0.45}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
              Explore our diverse portfolio of successful projects across various industries. Each project represents our commitment to quality, performance, and innovation.
            </p>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.55}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map(({ value, label }) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 backdrop-blur-sm transition-colors duration-300 hover:border-primary-500/30">
                  <div className="text-3xl font-heading font-bold text-slate-900 mb-1">
                    <Counter value={value} />
                  </div>
                  <div className="text-slate-500 text-xs">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Portfolio Grid */}
      <PortfolioContent initialProjects={initialProjects} />

      <CTASection
        title="Have a Project in Mind?"
        subtitle="Let's discuss how we can bring your vision to life with our expertise and innovative solutions."
        primaryCTA={{ text: 'Start Your Project', href: '/contact' }}
      />
    </>
  );
}
