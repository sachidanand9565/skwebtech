/**
 * Testimonials Section Component
 * Displays customer testimonials and reviews
 */

import SectionHeader from '@/components/common/SectionHeader';
import TestimonialCard from '@/components/common/TestimonialCard';

// Testimonials data
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    content:
      'SK WebTech transformed our outdated website into a modern, high-converting platform. Their team was professional, responsive, and delivered beyond our expectations. Our online sales increased by 150% within 3 months!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'GrowthHub',
    content:
      'The SEO services from SK WebTech have been a game-changer for our business. We went from page 5 to the first page of Google for our main keywords. The team is knowledgeable and always keeps us updated on progress.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'StyleBoutique',
    content:
      'Building our e-commerce store with SK WebTech was a seamless experience. They understood our vision perfectly and created a beautiful, user-friendly store. The ongoing support has been exceptional!',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'CTO',
    company: 'FinanceFlow',
    content:
      'We needed a complex web application with strict security requirements. SK WebTech delivered a robust, scalable solution that has become central to our operations. Highly recommended for enterprise projects!',
    rating: 5,
  },
  {
    name: 'Lisa Park',
    role: 'Product Manager',
    company: 'HealthTech Solutions',
    content:
      'The mobile app developed by SK WebTech exceeded all our expectations. The UI/UX is intuitive, and the app performance is excellent. Our users love it, and so do we!',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Owner',
    company: 'LocalBites Restaurant',
    content:
      'As a small business owner, I was hesitant about investing in a website. SK WebTech made the process easy and affordable. Now I get new customers every day through my website. Best investment ever!',
    rating: 5,
  },
];

interface TestimonialsSectionProps {
  limit?: number;
}

export default function TestimonialsSection({ limit = 3 }: TestimonialsSectionProps) {
  const displayedTestimonials = testimonials.slice(0, limit);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our clients have to say 
                   about their experience working with SK WebTech."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {displayedTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              content={testimonial.content}
              rating={testimonial.rating}
            />
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-primary-50 rounded-full px-8 py-4">
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-yellow-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-left">
              <div className="font-heading font-bold text-gray-900">5.0 Rating</div>
              <div className="text-sm text-gray-600">Based on 200+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
