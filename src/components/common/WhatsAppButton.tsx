/**
 * WhatsApp Floating Button Component
 * Provides quick WhatsApp contact access across all pages
 */

'use client';

import { useState } from 'react';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

const WHATSAPP_URL = `https://wa.me/919654603750?text=${encodeURIComponent('Hi SK WebTech! I would like to inquire about your web or IT services.')}`;

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
        <div className="rounded-xl border border-white/10 bg-void-100/95 backdrop-blur-xl shadow-soft-lg px-4 py-3 min-w-[180px]">
          <p className="text-white font-semibold text-sm">Chat with us!</p>
          <p className="text-slate-500 text-xs mt-0.5">Typically reply in minutes</p>
          <div className="absolute bottom-0 right-5 translate-y-full">
            <div className="border-8 border-transparent border-t-void-100" />
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
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/25 hover:bg-green-600 hover:scale-110 transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsAppIcon size={28} />
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
      </a>
    </div>
  );
}
