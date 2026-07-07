/**
 * Call Now Button Component
 * Mobile-only floating call button for quick phone access
 */

'use client';

import { Phone } from 'lucide-react';

export default function CallButton() {
  const phoneNumber = '9654603750'; // Replace with actual number

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-6 left-6 z-40 md:hidden
               flex items-center justify-center w-14 h-14
               bg-brand-gradient text-void rounded-full shadow-glow
               hover:shadow-glow-lg
               transition-all duration-300 active:scale-95"
      aria-label="Call us now"
    >
      <Phone size={24} />

      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-20" />
    </a>
  );
}
