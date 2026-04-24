import { Metadata } from 'next';
import PortfolioContent from '@/components/sections/PortfolioContent';
import CTASection from '@/components/common/CTASection';

export const metadata: Metadata = {
  title: 'Our Portfolio - Web Development & IT Projects | SK WebTech',
  description:
    "Explore SK WebTech's portfolio of successful web development, e-commerce, mobile app, and IT projects. See how we've helped businesses transform their digital presence.",
  keywords: ['web development portfolio', 'IT project showcase', 'e-commerce projects', 'mobile app portfolio', 'web design examples'],
  alternates: { canonical: 'https://skwebtech.in/portfolio' },
  openGraph: {
    title: 'Our Portfolio | SK WebTech',
    description: 'Explore our portfolio of successful web development, e-commerce, and IT projects.',
    type: 'website',
    url: 'https://skwebtech.in/portfolio',
  },
};

const stats = [
  { value: '80+', label: 'Projects Delivered' },
  { value: '100+', label: 'Happy Clients' },
  { value: '15+', label: 'Industries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

        <div className="container-custom relative z-10 text-center">
          <span className="inline-block px-3 py-1.5 bg-white/10 border border-white/20 text-white/80 text-xs font-medium rounded-full mb-5 backdrop-blur-sm">
            Our Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-5 leading-tight">
            Projects We&apos;re{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Proud Of
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            Explore our diverse portfolio of successful projects across various industries. Each project represents our commitment to quality, performance, and innovation.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
                <div className="text-3xl font-heading font-bold text-white mb-1">{value}</div>
                <div className="text-slate-400 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <PortfolioContent />

      <CTASection
        title="Have a Project in Mind?"
        subtitle="Let's discuss how we can bring your vision to life with our expertise and innovative solutions."
        primaryCTA={{ text: 'Start Your Project', href: '/contact' }}
      />
    </>
  );
}
