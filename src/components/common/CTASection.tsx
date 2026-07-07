import Link from 'next/link';
import { ArrowRight, Phone, Star } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import MagneticButton from '@/components/motion/MagneticButton';
import ParticleField from '@/components/motion/ParticleField';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  variant?: 'primary' | 'gradient';
}

export default function CTASection({
  title = 'Ready to Transform Your Digital Presence?',
  subtitle = "Let's discuss your project and see how we can help your business grow. Get a free consultation today!",
  primaryCTA = { text: 'Get Free Consultation', href: '/contact' },
  secondaryCTA = { text: 'Call Us Now', href: 'tel:9654603750' },
}: CTASectionProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-void">
      {/* Layered ambience */}
      <ParticleField density={0.55} lines={false} />
      <div className="glow-orb top-0 left-1/4 w-[520px] h-[520px] bg-primary-500/[0.1] -translate-y-1/2 animate-aurora" />
      <div className="glow-orb bottom-0 right-1/4 w-96 h-96 bg-secondary-500/[0.12] translate-y-1/3 animate-aurora" style={{ animationDelay: '5s' }} />
      <div className="absolute inset-0 bg-grid opacity-40 mask-radial-fade pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Star rating badge */}
          <Reveal y={16}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.05] border border-white/10 rounded-full mb-8 backdrop-blur-sm">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-white/70 text-sm">Trusted by 100+ businesses across India</span>
            </div>
          </Reveal>

          {/* Title */}
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-5 leading-tight text-balance">
              {title.includes('?') ? (
                <>
                  {title.split('?')[0]}
                  <span className="gradient-text">?</span>
                </>
              ) : (
                <span>{title}</span>
              )}
            </h2>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={0.18}>
            <p className="text-base md:text-lg text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto">
              {subtitle}
            </p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={0.26}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <MagneticButton className="w-full sm:w-auto">
                <Link
                  href={primaryCTA.href}
                  className="btn-accent w-full sm:w-auto px-8 py-4 text-lg group"
                >
                  {primaryCTA.text}
                  <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.2} className="w-full sm:w-auto">
                <a
                  href={secondaryCTA.href}
                  className="btn-secondary w-full sm:w-auto px-8 py-4 text-base gap-2"
                >
                  <Phone size={18} />
                  {secondaryCTA.text}
                </a>
              </MagneticButton>
            </div>
          </Reveal>

          {/* WhatsApp quick link */}
          <Reveal delay={0.34}>
            <a
              href="https://wa.me/919654603750?text=Hi%20SK%20WebTech!%20I%20would%20like%20to%20get%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm transition-colors"
            >
              <WhatsAppIcon size={16} />
              Or chat directly on WhatsApp - we reply in minutes
            </a>
          </Reveal>

          {/* Trust row */}
          <Reveal delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-white/[0.07]">
              {[
                '🚀 Fast Delivery',
                '💰 Transparent Pricing',
                '🛡️ 24/7 Support',
                '✅ Free Consultation',
              ].map((item) => (
                <span key={item} className="text-slate-500 text-sm">{item}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
