'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { VegNonVegBadge } from './VegNonVegBadge';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    totalItems,
    subtotal,
    updateQuantity,
    removeFromCart,
    clearCart,
    setIsCheckoutOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const handleOpenCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#1A090D] border-l border-[#E5B842]/30 shadow-2xl flex flex-col justify-between">
          {/* Top Bar */}
          <div className="p-5 sm:p-6 bg-[#230E13] border-b border-[#3A181E] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E5B842]/15 border border-[#E5B842]/30 flex items-center justify-center text-[#E5B842]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-lg">Your Cart</h3>
                <p className="text-xs text-[#FFF7EA]/75">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  title="Clear entire cart"
                  className="p-2 rounded-lg text-red-400 hover:bg-red-950/40 text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Clear</span>
                </button>
              )}
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cart Table Header: Product | Price | Quantity | Total */}
          {cart.length > 0 && (
            <div className="px-5 py-2.5 bg-[#100507] border-b border-[#2B1015] grid grid-cols-12 text-[11px] font-bold text-[#C4B4A8] uppercase tracking-wider">
              <span className="col-span-5">Product</span>
              <span className="col-span-2 text-center">Price</span>
              <span className="col-span-3 text-center">Qty</span>
              <span className="col-span-2 text-right">Total</span>
            </div>
          )}

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-[#2B1015]">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#230E13] border border-[#3A181E] flex items-center justify-center text-[#C4B4A8]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-display text-white font-bold text-base mb-1">
                    Your cart is empty
                  </h4>
                  <p className="text-xs text-[#C4B4A8] max-w-xs">
                    Drop into our menu and choose from our aromatic biryanis, rolls, and starters.
                  </p>
                </div>
                <Link
                  href="/menu"
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#F5CE68] to-[#E5B842] text-[#100507] text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-110"
                >
                  Explore Menu
                </Link>
              </div>
            ) : (
              cart.map((item) => {
                const lineTotal = item.price * item.quantity;
                return (
                  <div key={item.id} className="py-4 grid grid-cols-12 items-center gap-2">
                    {/* Col: Product info */}
                    <div className="col-span-5 flex items-center gap-2.5">
                      <div className="relative w-11 h-11 rounded-lg overflow-hidden flex-shrink-0 bg-[#100507] border border-[#3A181E]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="44px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <VegNonVegBadge isVeg={item.isVeg} size="sm" />
                          <h4 className="text-xs font-bold text-white truncate">
                            {item.name}
                          </h4>
                        </div>
                        <span className="text-[10px] text-[#C4B4A8]">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Col: Unit Price */}
                    <div className="col-span-2 text-center text-xs font-medium text-[#FFF7EA]">
                      ₹{item.price}
                    </div>

                    {/* Col: Quantity Controls */}
                    <div className="col-span-3 flex items-center justify-center gap-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded bg-[#230E13] text-[#E5B842] hover:bg-[#E5B842] hover:text-[#100507] flex items-center justify-center text-xs font-bold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center text-xs font-bold text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded bg-[#230E13] text-[#E5B842] hover:bg-[#E5B842] hover:text-[#100507] flex items-center justify-center text-xs font-bold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Col: Line Total */}
                    <div className="col-span-2 text-right">
                      <span className="font-display text-sm font-bold text-[#E5B842]">
                        ₹{lineTotal}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Bottom Checkout Section */}
          {cart.length > 0 && (
            <div className="p-5 sm:p-6 bg-[#230E13] border-t border-[#3A181E] space-y-4">
              {/* Subtotal Display */}
              <div className="space-y-1.5 pb-3 border-b border-[#3A181E]">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#FFF7EA]/85">Item Subtotal</span>
                  <span className="font-display text-xl font-black text-[#E5B842]">
                    ₹{subtotal}
                  </span>
                </div>
                <p className="text-[11px] text-[#C4B4A8] italic">
                  * Note: Additional delivery charges (if any) are confirmed directly by the restaurant.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={handleOpenCheckout}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 hover:brightness-110 active:scale-[0.98] text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(16,185,129,0.3)] transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>ORDER ON WHATSAPP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex gap-2">
                  <Link
                    href="/cart"
                    onClick={() => setIsCartOpen(false)}
                    className="flex-1 py-2 rounded-lg bg-[#1A090D] text-[#FFF7EA] hover:text-[#E5B842] border border-[#3A181E] text-xs font-semibold text-center"
                  >
                    View Full Cart Page
                  </Link>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="py-2 px-4 rounded-lg bg-transparent text-neutral-400 hover:text-white text-xs font-semibold"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
