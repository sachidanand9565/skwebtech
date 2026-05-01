import Link from 'next/link';
import { ArrowRight, CheckCircle, MessageSquare, ExternalLink, Globe, ShoppingCart, Smartphone } from 'lucide-react';

const trustBadges = [
  '80+ Projects Delivered',
  '100+ Happy Clients',
  '10+ Years Experience',
];

const floatingServices = [
  { icon: Globe, label: 'Web Development', color: 'bg-blue-500' },
  { icon: ShoppingCart, label: 'E-Commerce', color: 'bg-emerald-500' },
  { icon: MessageSquare, label: 'WhatsApp Platform', color: 'bg-green-500' },
  { icon: Smartphone, label: 'Mobile Apps', color: 'bg-orange-500' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-2/3 left-1/6 w-64 h-64 bg-green-500/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative z-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left - Content */}
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full mb-7">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
              <span className="text-white/80 text-sm font-medium">Trusted IT Partner Since 2014</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-6">
              Grow Your Business With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300">
                Professional Web & IT Solutions
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
              We build fast, SEO-ready websites, e-commerce stores, mobile apps, and WhatsApp Business automation for businesses across India. Trusted by 100+ clients.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contact" className="btn-accent text-base px-7 py-3.5">
                Get Free Consultation
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white/8 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg hover:bg-white/15 transition-all"
              >
                View Our Work
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-slate-400 text-sm">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Cards */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main stats card */}
              <div className="bg-white/8 backdrop-blur-md border border-white/15 rounded-3xl p-7 mb-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {[
                    { value: '80+', label: 'Projects Delivered' },
                    { value: '100+', label: 'Happy Clients' },
                    { value: '10+', label: 'Years Experience' },
                    { value: '24/7', label: 'Support Available' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/8 rounded-2xl p-4">
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-slate-400 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Services pills */}
                <div className="flex flex-wrap gap-2">
                  {floatingServices.map(({ icon: Icon, label, color }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 px-3 py-1.5 bg-white/8 border border-white/10 rounded-full"
                    >
                      <div className={`w-5 h-5 ${color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Icon size={11} className="text-white" />
                      </div>
                      <span className="text-white/70 text-xs font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp Platform highlight card */}
              <div className="bg-gradient-to-r from-green-500/15 to-emerald-500/10 border border-green-500/25 rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageSquare size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">WhatsApp Business Platform</p>
                      <p className="text-green-400 text-xs mt-0.5">Connect · Campaign · Automate</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.skwebtech.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-green-500 text-white text-xs font-bold rounded-xl hover:bg-green-600 transition-all flex-shrink-0"
                  >
                    Try Now <ExternalLink size={11} />
                  </a>
                </div>
              </div>

              {/* Floating rating badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-soft-lg px-4 py-2.5 flex items-center gap-2.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-xs">5.0 Rating</div>
                  <div className="text-gray-400 text-[10px]">200+ reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
