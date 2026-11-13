'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus, Check, MessageCircle } from 'lucide-react';
import { MenuItem } from '@/data/menu';
import { useCart } from '@/context/CartContext';
import { VegNonVegBadge } from './VegNonVegBadge';
import { restaurantInfo } from '@/data/restaurant';

interface FoodCardProps {
  item: MenuItem;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  const { addToCart, updateQuantity, cart } = useCart();

  // If item has variants (e.g. Chicken Pakoda: Half ₹49, Full ₹99)
  const hasVariants = item.variants && item.variants.length > 0;
  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    hasVariants ? item.variants![0].id : ''
  );

  const activeVariant = hasVariants
    ? item.variants!.find((v) => v.id === selectedVariantId) || item.variants![0]
    : null;

  const currentPrice = activeVariant ? activeVariant.price : item.price;
  const currentCartId = activeVariant ? `${item.id}-${activeVariant.id}` : item.id;

  const cartItem = cart.find((i) => i.id === currentCartId);
  const currentQty = cartItem ? cartItem.quantity : 0;

  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAdd = () => {
    if (activeVariant) {
      addToCart(item, activeVariant.name, activeVariant.price, activeVariant.id);
    } else {
      addToCart(item);
    }
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 900);
  };

  const handleQuickWhatsApp = () => {
    const itemName = activeVariant ? `${item.name} (${activeVariant.name})` : item.name;
    const msg = `Hello The Biryani Drop!\nI want to order:\n${itemName} — ₹${currentPrice}\nPlease confirm availability and details.`;
    const url = `https://wa.me/${restaurantInfo.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="group relative rounded-2xl bg-[#230E13] border border-[#E5B842]/20 hover:border-[#E5B842]/60 transition-all duration-300 shadow-card-dark hover:shadow-gold-glow flex flex-col justify-between overflow-hidden">
      {/* Top Image Container */}
      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#1A090D]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#230E13] via-transparent to-black/40" />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
          <div className="bg-[#100507]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 shadow-md">
            <VegNonVegBadge isVeg={item.isVeg} size="sm" showLabel />
          </div>
        </div>

        {item.isPopular && (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#F5CE68] to-[#E5B842] text-[#100507] shadow-md">
              Popular
            </span>
          </div>
        )}

        {/* Category Tag pill */}
        <div className="absolute bottom-2.5 left-3 z-10">
          <span className="text-[11px] font-medium tracking-wide text-[#FFF7EA]/80 bg-[#100507]/80 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-white/10">
            {item.categoryName}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Price Header */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#E5B842] transition-colors leading-snug">
              {item.name}
            </h3>
            <div className="text-right flex-shrink-0">
              <span className="font-display text-lg sm:text-xl font-black text-[#E5B842]">
                ₹{currentPrice}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#FFF7EA]/85 line-clamp-2 leading-relaxed mb-3">
            {item.description}
          </p>

          {/* Portion or variant note */}
          {item.portionNote && (
            <div className="text-[11px] text-[#C4B4A8] italic mb-3">
              ✦ {item.portionNote}
            </div>
          )}

          {/* Variants Selector (for Chicken Pakoda Half / Full) */}
          {hasVariants && (
            <div className="mb-4">
              <span className="text-[11px] text-[#FFF7EA]/75 block mb-1.5 font-medium uppercase tracking-wider">
                Select Portion:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {item.variants!.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariantId(variant.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                      selectedVariantId === variant.id
                        ? 'bg-[#E5B842] text-[#100507] border-[#E5B842] shadow-sm font-bold'
                        : 'bg-[#1A090D] text-[#FFF7EA]/90 border-[#3A181E] hover:border-[#E5B842]/40'
                    }`}
                  >
                    {variant.name} • ₹{variant.price}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-[#3A181E] flex items-center justify-between gap-2">
          {/* Quick WhatsApp direct query */}
          <button
            onClick={handleQuickWhatsApp}
            title="Ask or order directly on WhatsApp"
            className="p-2 rounded-xl bg-[#1A090D] border border-[#3A181E] text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/40 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
          </button>

          {/* Add to Cart or Quantity Controls */}
          {currentQty > 0 ? (
            <div className="flex-1 flex items-center justify-end">
              <div className="inline-flex items-center gap-2 bg-[#1A090D] border border-[#E5B842] rounded-xl px-2 py-1">
                <button
                  onClick={() => updateQuantity(currentCartId, -1)}
                  className="w-7 h-7 rounded-lg bg-[#230E13] text-[#E5B842] hover:bg-[#E5B842] hover:text-[#100507] flex items-center justify-center font-bold text-sm transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-display font-bold text-sm text-white px-2 min-w-[20px] text-center">
                  {currentQty}
                </span>
                <button
                  onClick={() => updateQuantity(currentCartId, 1)}
                  className="w-7 h-7 rounded-lg bg-[#E5B842] text-[#100507] hover:brightness-110 flex items-center justify-center font-bold text-sm transition-transform active:scale-95"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={handleAdd}
              className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 ${
                addedAnimation
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-gradient-to-r from-[#F5CE68] via-[#E5B842] to-[#C59424] text-[#100507] hover:brightness-110 active:scale-95 shadow-[0_2px_14px_rgba(229,184,66,0.3)]'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
