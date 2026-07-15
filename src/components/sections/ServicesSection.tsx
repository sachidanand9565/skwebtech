import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import { StaggerContainer, StaggerItem } from '@/components/motion/Stagger';
import { getServices } from '@/lib/db';

export default async function ServicesSection() {
  const dynamicServices = await getServices();

  const getIconComponent = (iconName: string) => {
    // Map string names to Lucide icons
    const Icon = (LucideIcons as any)[iconName];
    return Icon || LucideIcons.Globe;
  };

  return (
    <section className="relative py-20 md:py-28 bg-void overflow-hidden" id="services">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-dots opacity-20 mask-radial-fade pointer-events-none" />
      <div className="glow-orb top-0 right-[10%] w-[420px] h-[420px] bg-secondary-500/[0.06]" />
      <div className="glow-orb bottom-0 left-[8%] w-[380px] h-[380px] bg-primary-500/[0.06]" />

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Our Services"
          title="Comprehensive Digital Solutions for Your Business"
          subtitle="From websites and e-commerce stores to WhatsApp automation and mobile apps - we cover every aspect of your digital growth."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {dynamicServices.map((service) => {
            // WhatsApp gets the real brand glyph; everything else maps to a lucide icon
            const IconComponent = service.id === 'whatsapp-business'
              ? WhatsAppIcon
              : getIconComponent(service.id === 'web-development' ? 'Globe' : service.id === 'ecommerce' ? 'ShoppingCart' : service.id === 'seo' ? 'Search' : service.id === 'app-development' ? 'Smartphone' : service.id === 'uiux' ? 'Palette' : 'Settings');

            const isFeatured = service.featured;
            const linkHref = service.href || `/services#${service.id}`;
            const isExternal = linkHref.startsWith('http');

            const content = (
              <div
                className={`relative h-full flex flex-col rounded-2xl border bg-white/[0.03] p-7 backdrop-blur-sm
                            transition-all duration-300 ease-out-expo group-hover:-translate-y-1.5
                            group-hover:bg-white/[0.05] group-hover:shadow-card-hover ${
                  isFeatured
                    ? 'border-green-500/30 group-hover:border-green-400/50'
                    : 'border-white/[0.08] group-hover:border-primary-500/40'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg shadow-green-500/25">
                      ✦ New Platform
                    </span>
                  </div>
                )}

                {/* Icon tile with glow */}
                <div className="relative mb-5 w-12 h-12">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color || 'from-cyan-500 to-blue-600'} opacity-40 blur-lg transition-opacity duration-300 group-hover:opacity-70`} />
                  <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color || 'from-cyan-500 to-blue-600'} flex items-center justify-center shadow-sm`}>
                    <IconComponent size={22} className="text-white" />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-white text-lg mb-2 transition-colors group-hover:text-primary-300">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{service.description}</p>

                {/* Starting price (admin panel se editable) */}
                {service.price ? (
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">Starting at</span>
                    <span className="font-heading text-lg font-bold gradient-text">{service.price}</span>
                  </div>
                ) : null}

                <div className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-primary-400 group-hover:gap-3 transition-all duration-300">
                  {isExternal ? 'Launch Platform' : 'Learn More'}
                  <ArrowRight size={15} />
                </div>

                {/* Corner accent */}
                <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-tr-2xl bg-gradient-to-bl from-primary-500/[0.07] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            );

            return (
              <StaggerItem key={service.id} className="h-full">
                {isExternal ? (
                  <a href={linkHref} target="_blank" rel="noopener noreferrer" className="block h-full group">
                    {content}
                  </a>
                ) : (
                  <Link href={linkHref} className="block h-full group">
                    {content}
                  </Link>
                )}
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="text-center mt-14">
          <Link href="/services" className="btn-primary group">
            View All Services
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
