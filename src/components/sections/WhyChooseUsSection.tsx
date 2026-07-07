import { Award, Clock, DollarSign, Headphones, Users, Zap, CheckCircle } from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';
import Counter from '@/components/motion/Counter';
import Reveal from '@/components/motion/Reveal';
import { StaggerContainer, StaggerItem } from '@/components/motion/Stagger';

const features = [
  { title: 'Expert Team', description: 'Seasoned developers and designers with years of industry experience across diverse domains.', icon: Users, stat: '50+', statLabel: 'Experts', color: 'from-cyan-400 to-blue-500' },
  { title: 'On-Time Delivery', description: 'We pride ourselves on meeting deadlines without compromising quality. Your time matters.', icon: Clock, stat: '98%', statLabel: 'On-time', color: 'from-green-400 to-emerald-500' },
  { title: 'Affordable Pricing', description: 'Quality solutions at competitive prices. Transparent pricing with zero hidden costs.', icon: DollarSign, stat: '40%', statLabel: 'Savings', color: 'from-amber-400 to-orange-500' },
  { title: '24/7 Support', description: "Round-the-clock support ensuring your business never faces downtime. We're always here.", icon: Headphones, stat: '24/7', statLabel: 'Available', color: 'from-violet-400 to-purple-500' },
];

const highlights = [
  '10+ years of industry experience',
  '80+ successful projects',
  'ISO-compliant development process',
  'Free post-launch support',
];

const bannerStats = [
  { v: '80+', l: 'Projects Delivered', icon: Zap },
  { v: '100+', l: 'Happy Clients', icon: Users },
  { v: '10+', l: 'Years Experience', icon: Award },
  { v: '15+', l: 'Countries Served', icon: Headphones },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-void overflow-hidden">
      <div className="glow-orb top-[20%] right-0 w-[420px] h-[420px] bg-primary-500/[0.05]" />

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Why Choose Us"
          title="The SK WebTech Advantage"
          subtitle="We combine technical excellence with a client-first approach to deliver solutions that exceed expectations every time."
        />

        {/* Feature Cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 mb-14">
          {features.map((feature) => (
            <StaggerItem key={feature.title} className="h-full">
              <div className="group h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 ease-out-expo hover:-translate-y-1.5 hover:border-primary-500/30 hover:bg-white/[0.05] hover:shadow-card-hover">
                <div className="relative mb-5 w-12 h-12">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-40 blur-lg transition-opacity duration-300 group-hover:opacity-70`} />
                  <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-sm`}>
                    <feature.icon size={22} className="text-white" />
                  </div>
                </div>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-3xl font-heading font-bold text-white">
                    <Counter value={feature.stat} />
                  </span>
                  <span className="text-xs text-slate-500 uppercase tracking-wide">{feature.statLabel}</span>
                </div>
                <h3 className="font-heading font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust Banner */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-void-100/80 p-8 md:p-12 border-glow">
            <div className="glow-orb top-0 right-0 w-64 h-64 bg-primary-500/[0.12] -translate-y-1/2" />
            <div className="glow-orb bottom-0 left-0 w-48 h-48 bg-secondary-500/[0.12] translate-y-1/2" />
            <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                  Trusted by 100+ Businesses Worldwide
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  From startups to established enterprises, businesses trust SK WebTech to deliver innovative digital solutions that drive real results.
                </p>
                <div className="flex flex-wrap gap-3">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 px-3 py-2 bg-white/[0.05] border border-white/10 rounded-xl backdrop-blur-sm">
                      <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                      <span className="text-white/70 text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {bannerStats.map(({ v, l, icon: Icon }) => (
                  <div key={l} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-sm transition-colors duration-300 hover:border-primary-500/30">
                    <Icon size={18} className="text-primary-400 mx-auto mb-2" />
                    <div className="text-2xl font-heading font-bold text-white mb-1">
                      <Counter value={v} />
                    </div>
                    <div className="text-slate-500 text-xs">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
