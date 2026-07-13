import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import TextReveal from '@/components/motion/TextReveal';
import Reveal from '@/components/motion/Reveal';
import MagneticButton from '@/components/motion/MagneticButton';
import ParticleField from '@/components/motion/ParticleField';
import Marquee from '@/components/motion/Marquee';
import HeroVisual from './HeroVisual';

const trustBadges = [
  '80+ Projects Delivered',
  '100+ Happy Clients',
  '10+ Years Experience',
];

const techStack = [
  'Next.js', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'WordPress',
  'Shopify', 'React Native', 'Flutter', 'AWS', 'MySQL', 'WhatsApp API', 'Figma',
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-void overflow-hidden">
      {/* Layered background: grid + particles + aurora orbs */}
      <div className="absolute inset-0 bg-grid opacity-60 mask-radial-fade pointer-events-none" />
      <ParticleField density={0.8} />
      <div className="glow-orb top-[8%] left-[18%] w-[560px] h-[560px] bg-primary-500/[0.09] animate-aurora" />
      <div className="glow-orb bottom-[12%] right-[12%] w-[460px] h-[460px] bg-secondary-500/[0.1] animate-aurora" style={{ animationDelay: '4s' }} />
      <div className="glow-orb top-[55%] left-[4%] w-72 h-72 bg-accent-500/[0.07] animate-pulse-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,229,255,0.06),_transparent_55%)] pointer-events-none" />

      <div className="container-custom relative z-10 pt-28 pb-12 md:pt-32 md:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left - Content */}
          <div className="flex flex-col items-start text-left">
            {/* Eyebrow pill */}
            <Reveal delay={0.05} y={16} mode="mount">
              <div className="badge-chip mb-7">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                </span>
                Trusted IT Partner Since 2014
              </div>
            </Reveal>

            {/* Headline — split-text reveal, real text in DOM for SEO */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-heading font-bold text-white leading-[1.06] mb-6 tracking-tight">
              <TextReveal text="Grow Your Business With" delay={0.15} as="span" className="block" mode="mount" />
              <TextReveal
                text="Professional Web & IT Solutions"
                delay={0.4}
                as="span"
                className="block gradient-text"
                mode="mount"
              />
            </h1>

            <Reveal delay={0.55} mode="mount">
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                We build fast, secure, and SEO-ready websites, e-commerce stores, mobile apps, and WhatsApp Business automation for businesses across India.
              </p>
            </Reveal>

            {/* CTA Controls */}
            <Reveal delay={0.7} mode="mount">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-9">
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="btn-accent text-base px-8 py-4 font-semibold tracking-wide flex items-center justify-center group"
                  >
                    Get Free Consultation
                    <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </MagneticButton>
                <MagneticButton strength={0.2}>
                  <Link href="/portfolio" className="btn-secondary text-base px-8 py-4">
                    View Our Work
                  </Link>
                </MagneticButton>
              </div>
            </Reveal>

            {/* Trust badges */}
            <Reveal delay={0.85} mode="mount">
              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-white/[0.08] w-full">
                {trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle size={16} className="text-primary-400 flex-shrink-0" />
                    <span className="font-medium text-slate-300">{badge}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right - Mission control visual */}
          <div className="hidden lg:block relative">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Tech stack marquee */}
      <div className="relative z-10 border-t border-white/[0.06] bg-void/40 backdrop-blur-sm">
        <div className="py-5">
          <Marquee duration={34}>
            {techStack.map((tech) => (
              <span key={tech} className="mx-7 flex items-center gap-3 text-sm font-heading font-medium text-slate-500 whitespace-nowrap">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
                {tech}
              </span>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-white/20 text-[10px] uppercase font-semibold tracking-[0.3em]">Scroll to Explore</span>
        <div className="w-5 h-8 border border-white/10 rounded-full flex justify-center pt-1.5 bg-white/[0.04] backdrop-blur-sm">
          <div className="w-1 h-1.5 bg-primary-400 rounded-full animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
