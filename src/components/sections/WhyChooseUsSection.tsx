import { Award, Clock, DollarSign, Headphones, Users, Zap, CheckCircle } from 'lucide-react';

const features = [
  { title: 'Expert Team', description: 'Seasoned developers and designers with years of industry experience across diverse domains.', icon: Users, stat: '50+', statLabel: 'Experts', color: 'from-blue-500 to-indigo-600' },
  { title: 'On-Time Delivery', description: 'We pride ourselves on meeting deadlines without compromising quality. Your time matters.', icon: Clock, stat: '98%', statLabel: 'On-time', color: 'from-green-500 to-emerald-600' },
  { title: 'Affordable Pricing', description: 'Quality solutions at competitive prices. Transparent pricing with zero hidden costs.', icon: DollarSign, stat: '40%', statLabel: 'Savings', color: 'from-orange-500 to-amber-500' },
  { title: '24/7 Support', description: "Round-the-clock support ensuring your business never faces downtime. We're always here.", icon: Headphones, stat: '24/7', statLabel: 'Available', color: 'from-purple-500 to-violet-600' },
];

const highlights = [
  '10+ years of industry experience',
  '80+ successful projects',
  'ISO-compliant development process',
  'Free post-launch support',
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3">
            The SK WebTech Advantage
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We combine technical excellence with a client-first approach to deliver solutions that exceed expectations every time.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => (
            <div key={feature.title} className="group bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 border border-gray-50">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-sm`}>
                <feature.icon size={22} className="text-white" />
              </div>
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-3xl font-heading font-bold text-gray-900">{feature.stat}</span>
                <span className="text-xs text-gray-400 uppercase tracking-wide">{feature.statLabel}</span>
              </div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 rounded-3xl p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2" />

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
                  <div key={h} className="flex items-center gap-2 px-3 py-2 bg-white/8 border border-white/15 rounded-xl">
                    <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { v: '80+', l: 'Projects Delivered', icon: Zap },
                { v: '100+', l: 'Happy Clients', icon: Users },
                { v: '10+', l: 'Years Experience', icon: Award },
                { v: '15+', l: 'Countries Served', icon: Headphones },
              ].map(({ v, l, icon: Icon }) => (
                <div key={l} className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
                  <Icon size={18} className="text-indigo-400 mx-auto mb-2" />
                  <div className="text-2xl font-heading font-bold text-white mb-1">{v}</div>
                  <div className="text-slate-400 text-xs">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
