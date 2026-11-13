'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      {showTooltip && (
        <div className="relative bg-[#17120E] text-[#FFF2D5] border border-[#FFB51B]/40 px-3.5 py-2 rounded-2xl shadow-xl max-w-xs text-xs flex items-center gap-2 animate-bounce">
          <span>Need help or want to order? <strong>Chat with us!</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={restaurantInfo.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative p-4 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 text-white shadow-[0_6px_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border-2 border-white/20"
        aria-label="Order on WhatsApp with The Biryani Drop"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-600" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#FFB51B] border-2 border-[#0B0908] rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#FFB51B] border-2 border-[#0B0908] rounded-full" />
      </a>
    </div>
  );
};
