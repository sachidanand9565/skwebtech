/**
 * Call Now Button Component
 * Mobile-only floating call button for quick phone access
 */

'use client';

import { Phone } from 'lucide-react';

export default function CallButton() {
  const phoneNumber = '+1234567890'; // Replace with actual number

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-6 left-6 z-40 md:hidden
               flex items-center justify-center w-14 h-14 
               bg-primary-600 text-white rounded-full shadow-lg 
               hover:bg-primary-700 hover:shadow-xl 
               transition-all duration-300 active:scale-95"
      aria-label="Call us now"
    >
      <Phone size={24} />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-primary-600 animate-ping opacity-25" />
    </a>
  );
}
