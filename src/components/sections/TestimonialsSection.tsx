import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Sarah Johnson', role: 'CEO', company: 'TechStart Inc.', content: 'SK WebTech transformed our outdated website into a modern, high-converting platform. Their team was professional, responsive, and delivered beyond our expectations. Our online sales increased by 150% within 3 months!', rating: 5, avatar: 'SJ' },
  { name: 'Michael Chen', role: 'Marketing Director', company: 'GrowthHub', content: "The SEO services from SK WebTech have been a game-changer. We went from page 5 to the first page of Google for our main keywords. The team is knowledgeable and always keeps us updated on progress.", rating: 5, avatar: 'MC' },
  { name: 'Emily Rodriguez', role: 'Founder', company: 'StyleBoutique', content: 'Building our e-commerce store with SK WebTech was a seamless experience. They understood our vision perfectly and created a beautiful, user-friendly store. The ongoing support has been exceptional!', rating: 5, avatar: 'ER' },
  { name: 'David Thompson', role: 'CTO', company: 'FinanceFlow', content: 'We needed a complex web application with strict security requirements. SK WebTech delivered a robust, scalable solution that has become central to our operations. Highly recommended for enterprise projects!', rating: 5, avatar: 'DT' },
  { name: 'Lisa Park', role: 'Product Manager', company: 'HealthTech Solutions', content: 'The mobile app developed by SK WebTech exceeded all our expectations. The UI/UX is intuitive, and the app performance is excellent. Our users love it, and so do we!', rating: 5, avatar: 'LP' },
  { name: 'James Wilson', role: 'Owner', company: 'LocalBites', content: 'As a small business owner, I was hesitant about investing in a website. SK WebTech made the process easy and affordable. Now I get new customers every day through my website. Best investment ever!', rating: 5, avatar: 'JW' },
];

const avatarColors = [
  'from-blue-500 to-indigo-600',
  'from-purple-500 to-violet-600',
  'from-emerald-500 to-green-600',
  'from-orange-500 to-amber-500',
  'from-pink-500 to-rose-500',
  'from-teal-500 to-cyan-600',
];

interface Props { limit?: number; }

export default function TestimonialsSection({ limit = 3 }: Props) {
  const displayed = testimonials.slice(0, limit);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with SK WebTech.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((t, i) => (
            <div key={t.name} className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote size={28} className="text-indigo-100 mb-3" />

              {/* Content */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">{t.content}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <span className="text-white text-xs font-bold">{t.avatar}</span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-card">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="text-left">
              <div className="font-heading font-bold text-gray-900">5.0 Average Rating</div>
              <div className="text-sm text-gray-400">Based on 200+ client reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
