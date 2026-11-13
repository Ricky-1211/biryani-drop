'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Search,
  SlidersHorizontal,
  X,
  UtensilsCrossed,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';
import { menuItems, menuCategories, MenuCategoryId } from '@/data/menu';
import { FoodCard } from '@/components/FoodCard';
import { ChalkDivider } from '@/components/ChalkDivider';
import { BrochureModal } from '@/components/BrochureModal';
import { useCart } from '@/context/CartContext';

function MenuContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') as MenuCategoryId | null;

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegFilter, setVegFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const { totalItems, subtotal, setIsCartOpen } = useCart();

  // Sync category param from URL if present
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  // Filter items based on activeCategory, searchQuery, and vegFilter
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      // Veg / Non-Veg filter
      if (vegFilter === 'veg' && !item.isVeg) return false;
      if (vegFilter === 'non-veg' && item.isVeg) return false;

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTags = item.tags?.some((t) => t.toLowerCase().includes(query));
        const matchesCat = item.categoryName.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesTags && !matchesCat) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, searchQuery, vegFilter]);

  const categoriesWithAll = [
    { id: 'all', name: 'All Dishes' },
    ...menuCategories.map((c) => ({ id: c.id, name: c.name })),
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <ChalkDivider label="Authentic Flavours" />
        <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
          Our Menu
        </h1>
        <p className="text-base sm:text-lg text-[#FFF7EA]/85 font-normal">
          Explore the flavours. Find your favourite. Order your happiness.
        </p>

        {/* Brochure lightbox & Quick stats */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <BrochureModal />
          <span className="text-xs text-[#C4B4A8]">
            {menuItems.length} Authentic Items Available
          </span>
        </div>
      </div>

      {/* Search & Filter Controls Toolbar */}
      <div className="p-4 sm:p-6 rounded-2xl bg-[#1A090D] border border-[#E5B842]/30 shadow-xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-7 relative">
            <Search className="w-5 h-5 text-[#E5B842] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search biryani, rolls, chowmein, chicken 65, starters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-[#230E13] border border-[#3A181E] focus:border-[#E5B842] text-white text-sm focus:outline-none placeholder:text-[#C4B4A8]/60 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Veg / Non-Veg Quick Toggles */}
          <div className="md:col-span-5 flex items-center justify-start md:justify-end gap-2">
            <button
              onClick={() => setVegFilter('all')}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                vegFilter === 'all'
                  ? 'bg-gradient-to-r from-[#F5CE68] to-[#E5B842] text-[#100507] shadow-md'
                  : 'bg-[#230E13] text-[#FFF7EA] border border-[#3A181E] hover:border-[#E5B842]/40'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setVegFilter('veg')}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                vegFilter === 'veg'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-[#230E13] text-emerald-400 border border-emerald-500/30 hover:bg-emerald-950/30'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Veg Only</span>
            </button>
            <button
              onClick={() => setVegFilter('non-veg')}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                vegFilter === 'non-veg'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-[#230E13] text-red-400 border border-red-500/30 hover:bg-red-950/30'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span>Non-Veg Only</span>
            </button>
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="pt-2 border-t border-[#2B1015] flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categoriesWithAll.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#F5CE68] via-[#E5B842] to-[#C59424] text-[#100507] font-bold shadow-md'
                  : 'bg-[#230E13] text-[#FFF7EA]/80 hover:text-white hover:bg-[#2E131A] border border-[#3A181E]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Floating/Sticky Cart Mini Bar when items exist */}
      {totalItems > 0 && (
        <div className="sticky top-24 z-30 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-[#F5CE68] via-[#E5B842] to-[#C59424] text-[#100507] shadow-2xl flex items-center justify-between border-2 border-[#100507] animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#100507] text-[#E5B842]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-xs sm:text-sm">
                {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
              </p>
              <p className="text-[11px] font-medium text-[#100507]/80">
                Subtotal: <span className="font-extrabold text-sm">₹{subtotal}</span>
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-[#100507] hover:bg-[#1A090D] text-[#E5B842] font-bold text-xs uppercase tracking-wider transition-all active:scale-95 shadow-md"
          >
            Review Cart
          </button>
        </div>
      )}

      {/* Food Cards Grid */}
      {filteredItems.length === 0 ? (
        <div className="p-16 rounded-3xl bg-[#1A090D] border border-[#3A181E] text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#230E13] flex items-center justify-center mx-auto text-[#E5B842]">
            <UtensilsCrossed className="w-8 h-8" />
          </div>
          <h3 className="font-display font-bold text-white text-xl">
            No dishes found matching your selection
          </h3>
          <p className="text-sm text-[#C4B4A8] max-w-md mx-auto">
            Try searching for something else or reset your category and veg/non-veg filters.
          </p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
              setVegFilter('all');
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#F5CE68] to-[#E5B842] text-[#100507] text-xs font-bold uppercase tracking-wider"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function MenuPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[50vh] flex items-center justify-center text-[#E5B842]">
          Loading Menu...
        </div>
      }
    >
      <MenuContent />
    </Suspense>
  );
}
