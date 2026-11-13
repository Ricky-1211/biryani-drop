'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn, Eye } from 'lucide-react';

export const BrochureModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#211A14] hover:bg-[#2A211A] text-[#FFB51B] border border-[#FFB51B]/40 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md group"
      >
        <Eye className="w-4 h-4 text-[#FFB51B] group-hover:scale-110 transition-transform" />
        <span>View Original Menu Brochure</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative max-w-4xl w-full max-h-[90vh] bg-[#17120E] border border-[#FFB51B]/50 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col">
            <div className="p-4 bg-[#211A14] border-b border-[#2E241C] flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <ZoomIn className="w-5 h-5 text-[#FFB51B]" />
                <h3 className="font-display font-bold text-sm sm:text-base">
                  Official Menu Brochure — The Biryani Drop
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-[#0B0908]">
              <div className="relative w-full max-w-3xl aspect-[1280/853] rounded-xl overflow-hidden border border-[#2E241C] shadow-2xl">
                <Image
                  src="/whatsapp-image-menu.jpeg"
                  alt="Official The Biryani Drop Menu Brochure"
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="p-3 bg-[#17120E] border-t border-[#2E241C] text-center text-xs text-[#B8AA98]">
              Authentic restaurant menu leaflet • Chandrasekharpur, Bhubaneswar
            </div>
          </div>
        </div>
      )}
    </>
  );
};
