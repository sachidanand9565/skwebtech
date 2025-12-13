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
    <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover 
                  transition-all duration-300 relative">
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-primary-100">
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
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Testimonial Content */}
      <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
        &ldquo;{content}&rdquo;
      </p>

      {/* Author Info */}
      <div className="flex items-center space-x-4">
        {/* Avatar */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary-100">
          {avatar ? (
            <Image
              src={avatar}
              alt={`${name}'s photo`}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center 
                          text-primary-600 font-semibold text-lg">
              {name.charAt(0)}
            </div>
          )}
        </div>

        {/* Name & Role */}
        <div>
          <h4 className="font-heading font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
