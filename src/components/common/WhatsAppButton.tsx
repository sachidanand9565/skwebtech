/**
 * WhatsApp Floating Button Component
 * Provides quick WhatsApp contact access across all pages
 */

'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = `https://wa.me/916386103750?text=${encodeURIComponent('Hi SK WebTech! I would like to inquire about your web or IT services.')}`;

export default function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Tooltip */}
      <div
        className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
          isTooltipVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-xl shadow-soft-lg px-4 py-3 min-w-[180px]">
          <p className="text-gray-800 font-semibold text-sm">Chat with us!</p>
          <p className="text-gray-400 text-xs mt-0.5">Typically reply in minutes</p>
          <div className="absolute bottom-0 right-5 translate-y-full">
            <div className="border-8 border-transparent border-t-white" />
          </div>
        </div>
      </div>

      {/* Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={26} strokeWidth={2} fill="white" />
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
      </a>
    </div>
  );
}
