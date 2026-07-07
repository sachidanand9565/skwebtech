import { Star, Quote } from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';
import Reveal from '@/components/motion/Reveal';
import { StaggerContainer, StaggerItem } from '@/components/motion/Stagger';

const testimonials = [
  { name: 'Sarah Johnson', role: 'CEO', company: 'TechStart Inc.', content: 'SK WebTech transformed our outdated website into a modern, high-converting platform. Their team was professional, responsive, and delivered beyond our expectations. Our online sales increased by 150% within 3 months!', rating: 5, avatar: 'SJ' },
  { name: 'Michael Chen', role: 'Marketing Director', company: 'GrowthHub', content: "The SEO services from SK WebTech have been a game-changer. We went from page 5 to the first page of Google for our main keywords. The team is knowledgeable and always keeps us updated on progress.", rating: 5, avatar: 'MC' },
  { name: 'Emily Rodriguez', role: 'Founder', company: 'StyleBoutique', content: 'Building our e-commerce store with SK WebTech was a seamless experience. They understood our vision perfectly and created a beautiful, user-friendly store. The ongoing support has been exceptional!', rating: 5, avatar: 'ER' },
  { name: 'David Thompson', role: 'CTO', company: 'FinanceFlow', content: 'We needed a complex web application with strict security requirements. SK WebTech delivered a robust, scalable solution that has become central to our operations. Highly recommended for enterprise projects!', rating: 5, avatar: 'DT' },
  { name: 'Lisa Park', role: 'Product Manager', company: 'HealthTech Solutions', content: 'The mobile app developed by SK WebTech exceeded all our expectations. The UI/UX is intuitive, and the app performance is excellent. Our users love it, and so do we!', rating: 5, avatar: 'LP' },
  { name: 'James Wilson', role: 'Owner', company: 'LocalBites', content: 'As a small business owner, I was hesitant about investing in a website. SK WebTech made the process easy and affordable. Now I get new customers every day through my website. Best investment ever!', rating: 5, avatar: 'JW' },
];

const avatarColors = [
  'from-cyan-400 to-blue-500',
  'from-violet-400 to-purple-500',
  'from-emerald-400 to-green-500',
  'from-amber-400 to-orange-500',
  'from-pink-400 to-rose-500',
  'from-teal-400 to-cyan-500',
];

interface Props { limit?: number; }

export default function TestimonialsSection({ limit = 3 }: Props) {
  const displayed = testimonials.slice(0, limit);

  return (
    <section className="relative py-20 md:py-28 bg-void overflow-hidden">
      {/* Ambient background */}
      <div className="glow-orb top-[15%] left-[8%] w-[380px] h-[380px] bg-secondary-500/[0.06]" />
      <div className="glow-orb bottom-[10%] right-[8%] w-[360px] h-[360px] bg-primary-500/[0.05]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our clients have to say about working with SK WebTech."
        />

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {displayed.map((t, i) => (
            <StaggerItem key={t.name} className="h-full">
              <div className="group relative h-full flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-primary-500/30 hover:bg-white/[0.05] hover:shadow-card-hover">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote icon */}
                <Quote size={28} className="text-primary-500/25 mb-3" />

                {/* Content */}
                <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">{t.content}</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.08]">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <span className="text-white text-xs font-bold">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role}, {t.company}</p>
                  </div>
                </div>

                {/* Hover corner glow */}
                <div className="pointer-events-none absolute left-0 top-0 h-20 w-20 rounded-tl-2xl bg-gradient-to-br from-primary-500/[0.08] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Overall rating */}
        <Reveal delay={0.2}>
          <div className="mt-14 text-center">
            <div className="inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-4 backdrop-blur-sm border-glow">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-left">
                <div className="font-heading font-bold text-white">5.0 Average Rating</div>
                <div className="text-sm text-slate-500">Based on 200+ client reviews</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
