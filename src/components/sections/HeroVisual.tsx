'use client';

/**
 * Hero visual — a glass "mission control" panel with GSAP entrance
 * choreography, floating accent cards and orbiting service icons.
 */

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  ExternalLink, Globe, ShoppingCart, Smartphone,
  Activity, Zap,
} from 'lucide-react';
import Counter from '@/components/motion/Counter';
import TiltCard from '@/components/motion/TiltCard';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

const stats = [
  { value: '80+', label: 'Projects Delivered' },
  { value: '100+', label: 'Happy Clients' },
  { value: '10+', label: 'Years Experience' },
  { value: '24/7', label: 'Support Available' },
];

const floatingServices = [
  { icon: Globe, label: 'Web Development', color: 'from-cyan-400 to-blue-500' },
  { icon: ShoppingCart, label: 'E-Commerce', color: 'from-emerald-400 to-teal-500' },
  { icon: WhatsAppIcon, label: 'WhatsApp Platform', color: 'from-green-400 to-emerald-600' },
  { icon: Smartphone, label: 'Mobile Apps', color: 'from-violet-400 to-purple-500' },
];

export default function HeroVisual() {
  const scope = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      // clearProps on completion removes inline styles, so even if a tween is
      // interrupted (fast refresh, strict mode remount) content ends visible.
      gsap.from('[data-hero-panel]', {
        y: 48,
        opacity: 0,
        scale: 0.96,
        duration: 1.1,
        ease: 'expo.out',
        delay: 0.35,
        clearProps: 'opacity,transform',
      });
      gsap.from('[data-hero-item]', {
        y: 26,
        opacity: 0,
        stagger: 0.09,
        duration: 0.8,
        ease: 'expo.out',
        delay: 0.65,
        clearProps: 'opacity,transform',
      });
      gsap.from('[data-hero-float]', {
        scale: 0,
        opacity: 0,
        duration: 0.9,
        ease: 'back.out(1.6)',
        delay: 1.15,
        stagger: 0.15,
        clearProps: 'opacity,transform',
      });
      gsap.to('[data-hero-float]', {
        y: -10,
        duration: 2.6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 2,
        stagger: { each: 0.4, from: 'random' },
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scope} className="relative">
      {/* Ambient glow backing */}
      <div className="absolute -inset-2 rounded-[2rem] bg-brand-gradient opacity-20 blur-2xl animate-pulse-slow" aria-hidden />

      <TiltCard max={5} className="group">
        <div
          data-hero-panel
          className="relative rounded-3xl border border-white/10 bg-void-100/70 p-7 shadow-2xl backdrop-blur-xl overflow-hidden"
        >
          {/* Inner sheen */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" aria-hidden />

          {/* Window chrome */}
          <div data-hero-item className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
              <Activity size={11} className="text-primary-400" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Live Dashboard</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="mb-6 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-hero-item
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 transition-all duration-300 hover:border-primary-500/30 hover:bg-white/[0.05]"
              >
                <div className="mb-1 font-heading text-3xl font-bold tracking-tight text-white">
                  <Counter value={stat.value} />
                </div>
                <div className="text-xs font-medium uppercase tracking-wider text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Service chips */}
          <div data-hero-item className="mb-6 flex flex-wrap gap-2.5">
            {floatingServices.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 transition-all hover:border-primary-500/30"
              >
                <div className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${color} shadow-sm`}>
                  <Icon size={12} className="text-white" />
                </div>
                <span className="text-xs font-semibold tracking-wide text-white/80">{label}</span>
              </div>
            ))}
          </div>

          <div data-hero-item className="rounded-2xl border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/5 p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-green-500 shadow-lg shadow-green-500/25">
                  <WhatsAppIcon size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">WhatsApp Business Solutions</p>
                  <p className="mt-0.5 text-xs font-medium text-green-400">Official API Setup & Automation</p>
                </div>
              </div>
              <a
                href="https://wa.skwebtech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-xl bg-green-500 px-4 py-2.5 text-xs font-extrabold text-white shadow-md shadow-green-500/10 transition-all hover:scale-[1.03] hover:bg-green-600 hover:shadow-lg"
              >
                Try Now <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </TiltCard>

      {/* Floating rating card */}
      <div
        data-hero-float
        className="absolute -top-4 -right-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-void-100/90 px-4 py-3 shadow-glow-sm backdrop-blur-xl"
      >
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="leading-none">
          <div className="text-xs font-bold text-white">5.0 Star Agency</div>
          <div className="mt-0.5 text-[9px] font-medium text-slate-500">Verified Reviews</div>
        </div>
      </div>

      {/* Floating uptime chip */}
      <div
        data-hero-float
        className="absolute -bottom-5 -left-5 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-void-100/90 px-4 py-3 shadow-glow-violet backdrop-blur-xl"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-secondary-500/20">
          <Zap size={15} className="text-secondary-400" />
        </div>
        <div className="leading-none">
          <div className="text-xs font-bold text-white">99.9% Uptime</div>
          <div className="mt-0.5 text-[9px] font-medium text-slate-500">Managed Hosting & Care</div>
        </div>
      </div>
    </div>
  );
}
