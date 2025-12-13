/**
 * WhatsApp Floating Button Component
 * Provides quick WhatsApp contact access across all pages
 */

'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  
  // WhatsApp configuration
  const phoneNumber = '1234567890'; // Replace with actual number
  const message = encodeURIComponent(
    'Hi SK WebTech! I would like to inquire about your services.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Tooltip */}
      <div
        className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
          isTooltipVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-lg shadow-soft-lg px-4 py-3 min-w-[200px]">
          <p className="text-gray-800 font-medium text-sm">
            Need help? Chat with us!
          </p>
          <p className="text-gray-500 text-xs mt-1">
            We typically reply in minutes
          </p>
          {/* Arrow */}
          <div className="absolute bottom-0 right-6 translate-y-full">
            <div className="border-8 border-transparent border-t-white" />
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        className="flex items-center justify-center w-14 h-14 bg-green-500 
                 text-white rounded-full shadow-lg hover:bg-green-600 
                 hover:shadow-xl transition-all duration-300
                 animate-bounce-subtle hover:animate-none"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
      </a>

      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
    </div>
  );
}
