'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, X, Sparkles, MapPin } from 'lucide-react';
import { restaurantSpaces, restaurantInfo } from '@/data/restaurant';

export const SpaceGallery: React.FC = () => {
  const [selectedSpace, setSelectedSpace] = useState<(typeof restaurantSpaces)[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Front of House', 'Kitchen Specialty', 'Live Cooking', 'Dining Space'];

  const filteredSpaces = activeCategory === 'All'
    ? restaurantSpaces
    : restaurantSpaces.filter((s) => s.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-[#F5CE68] via-[#E5B842] to-[#C59424] text-[#100507] font-bold shadow-md'
                : 'bg-[#230E13] text-[#FFF7EA]/80 hover:text-white hover:bg-[#2E131A] border border-[#3A181E]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Spaces */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSpaces.map((space) => (
          <div
            key={space.id}
            onClick={() => setSelectedSpace(space)}
            className="group relative rounded-2xl overflow-hidden bg-[#230E13] border border-[#E5B842]/20 hover:border-[#E5B842] transition-all duration-300 shadow-card-dark hover:shadow-gold-glow cursor-pointer flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-[#1A090D]">
              <Image
                src={space.image}
                alt={space.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#230E13] via-black/35 to-transparent" />

              {/* Top Highlight Tag */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#100507]/90 text-[#E5B842] border border-[#E5B842]/30 backdrop-blur-md">
                  {space.category}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-2 rounded-full bg-[#100507]/85 text-[#E5B842] border border-[#E5B842]/40 shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Feature Pill */}
              <div className="absolute bottom-3 left-3 z-10">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-gradient-to-r from-[#F5CE68] to-[#E5B842] text-[#100507] shadow-md">
                  <Sparkles className="w-3 h-3 text-[#100507]" />
                  <span>{space.highlight}</span>
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-[#E5B842] transition-colors">
                  {space.title}
                </h3>
                <p className="text-xs text-[#FFF7EA]/85 mt-2 leading-relaxed">
                  {space.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#3A181E] flex items-center justify-between text-[11px] text-[#C4B4A8]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#E5B842]" />
                  <span>Chandrasekharpur Outlet</span>
                </span>
                <span className="text-[#E5B842] font-semibold group-hover:translate-x-1 transition-transform">
                  View Space →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedSpace && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedSpace(null)}
          />

          <div className="relative max-w-4xl w-full bg-[#1A090D] border-2 border-[#E5B842]/50 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col">
            <div className="p-4 sm:p-5 bg-[#230E13] border-b border-[#3A181E] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E5B842]">
                  {selectedSpace.category} • The Biryani Drop
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  {selectedSpace.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSpace(null)}
                className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full h-80 sm:h-[450px] bg-[#100507]">
              <Image
                src={selectedSpace.image}
                alt={selectedSpace.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#100507]/90 backdrop-blur-md border border-[#E5B842]/30">
                <p className="text-sm text-[#FFF7EA] leading-relaxed">
                  {selectedSpace.description}
                </p>
                <p className="text-xs text-[#E5B842] font-semibold mt-1">
                  Location: {restaurantInfo.address.full}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
