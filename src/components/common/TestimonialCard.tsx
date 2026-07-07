/**
 * Testimonial Card Component
 * Displays customer testimonials with rating and avatar
 */

import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  avatar,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="card relative p-8">
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-primary-500/15">
        <Quote size={48} fill="currentColor" />
      </div>

      {/* Rating Stars */}
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className={`${
              index < rating
                ? 'text-amber-400 fill-amber-400'
                : 'text-slate-700'
            }`}
          />
        ))}
      </div>

      {/* Testimonial Content */}
      <p className="text-slate-300 leading-relaxed mb-6 relative z-10">
        &ldquo;{content}&rdquo;
      </p>

      {/* Author Info */}
      <div className="flex items-center space-x-4">
        {/* Avatar */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary-500/15 border border-primary-500/25">
          {avatar ? (
            <Image
              src={avatar}
              alt={`${name}'s photo`}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center
                          text-primary-300 font-semibold text-lg">
              {name.charAt(0)}
            </div>
          )}
        </div>

        {/* Name & Role */}
        <div>
          <h4 className="font-heading font-semibold text-white">{name}</h4>
          <p className="text-sm text-slate-500">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
