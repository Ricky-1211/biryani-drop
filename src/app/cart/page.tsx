'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  MessageCircle,
  MapPin,
  Phone,
  User,
  FileText,
  AlertCircle,
  ChevronLeft,
} from 'lucide-react';
import { useCart, CustomerOrderDetails } from '@/context/CartContext';
import { ChalkDivider } from '@/components/ChalkDivider';
import { VegNonVegBadge } from '@/components/VegNonVegBadge';
import { restaurantInfo } from '@/data/restaurant';

export default function CartPage() {
  const {
    cart,
    totalItems,
    subtotal,
    updateQuantity,
    removeFromCart,
    clearCart,
    generateWhatsAppLink,
  } = useCart();

  const [form, setForm] = useState<CustomerOrderDetails>({
    customerName: '',
    phone: '',
    orderType: 'Pickup',
    address: '',
    instructions: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: { [key: string]: string } = {};

    if (!form.customerName.trim()) {
      errs.customerName = 'Please enter your name';
    }

    if (!form.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (form.phone.trim().length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }

    if (form.orderType === 'Delivery' && !form.address?.trim()) {
      errs.address = 'Please provide your delivery address in Bhubaneswar';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const link = generateWhatsAppLink(form);

    setTimeout(() => {
      window.open(link, '_blank');
      setIsSubmitting(false);
    }, 400);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-[#1A090D] border border-[#E5B842]/30 flex items-center justify-center mx-auto text-[#E5B842]">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-black text-white">
          Your Cart is Empty
        </h1>
        <p className="text-sm text-[#C4B4A8] max-w-md mx-auto">
          Looks like you haven’t added any delicious food yet. Drop into our menu and choose from our aromatic dum biryanis, rolls, and crispy starters!
        </p>
        <div>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#F5CE68] via-[#E5B842] to-[#C59424] text-[#100507] font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Top Breadcrumb & Title */}
      <div className="space-y-3">
        <Link
          href="/menu"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E5B842] hover:underline"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Menu</span>
        </Link>
        <h1 className="font-display text-3xl sm:text-4xl font-black text-white">
          Your Shopping Cart
        </h1>
        <p className="text-xs sm:text-sm text-[#C4B4A8]">
          Review your items and complete your order directly through WhatsApp with the restaurant.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Cart Items Table */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-6 rounded-2xl bg-[#1A090D] border border-[#E5B842]/30 shadow-xl overflow-hidden">
            {/* Table Header: Product | Price | Quantity | Total */}
            <div className="grid grid-cols-12 pb-3 border-b border-[#2B1015] text-xs font-bold uppercase tracking-wider text-[#E5B842]">
              <span className="col-span-5">Product</span>
              <span className="col-span-2 text-center">Price</span>
              <span className="col-span-3 text-center">Quantity</span>
              <span className="col-span-2 text-right">Total</span>
            </div>

            {/* Item Rows */}
            <div className="divide-y divide-[#2B1015]">
              {cart.map((item) => {
                const lineTotal = item.price * item.quantity;
                return (
                  <div key={item.id} className="py-4 grid grid-cols-12 items-center gap-2">
                    {/* Product */}
                    <div className="col-span-5 flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#100507] border border-[#3A181E] flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <VegNonVegBadge isVeg={item.isVeg} size="sm" />
                          <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                            {item.name}
                          </h4>
                        </div>
                        <span className="text-[10px] text-[#C4B4A8]">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-2 text-center text-xs sm:text-sm font-semibold text-[#FFF7EA]">
                      ₹{item.price}
                    </div>

                    {/* Quantity */}
                    <div className="col-span-3 flex items-center justify-center gap-1.5">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-7 h-7 rounded-lg bg-[#230E13] text-[#E5B842] hover:bg-[#E5B842] hover:text-[#100507] flex items-center justify-center text-xs font-bold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs sm:text-sm font-bold text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-7 h-7 rounded-lg bg-[#230E13] text-[#E5B842] hover:bg-[#E5B842] hover:text-[#100507] flex items-center justify-center text-xs font-bold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Total */}
                    <div className="col-span-2 text-right">
                      <span className="font-display text-sm sm:text-base font-bold text-[#E5B842]">
                        ₹{lineTotal}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Clear Cart & Summary Bar */}
            <div className="pt-4 border-t border-[#2B1015] flex items-center justify-between">
              <button
                onClick={clearCart}
                className="text-xs text-red-400 hover:text-red-300 font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Cart</span>
              </button>

              <div className="text-right">
                <span className="text-xs text-[#C4B4A8] mr-2">Total Quantity:</span>
                <span className="text-sm font-bold text-white">{totalItems} items</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Checkout Form & WhatsApp Order */}
        <div className="lg:col-span-5">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#1A090D] border border-[#E5B842]/30 shadow-xl space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-[#2B1015]">
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <h2 className="font-display font-bold text-white text-lg">
                WhatsApp Order Details
              </h2>
            </div>

            {/* Disclaimer */}
            <div className="p-3.5 rounded-xl bg-[#230E13] border border-[#E5B842]/20 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#E5B842] flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-[#FFF7EA] leading-relaxed">
                Your order request will be sent to the restaurant through WhatsApp. The restaurant will confirm availability and order details.
              </p>
            </div>

            <form onSubmit={handlePlaceOrder} className="space-y-4">
              {/* Order Type Toggle */}
              <div>
                <label className="block text-xs font-bold text-[#FFF7EA] uppercase tracking-wider mb-2">
                  Order Type *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, orderType: 'Pickup' })}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                      form.orderType === 'Pickup'
                        ? 'bg-gradient-to-r from-[#F5CE68] to-[#E5B842] text-[#100507] border-[#E5B842]'
                        : 'bg-[#230E13] text-[#FFF7EA] border-[#3A181E]'
                    }`}
                  >
                    Takeaway / Pickup
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, orderType: 'Delivery' })}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                      form.orderType === 'Delivery'
                        ? 'bg-gradient-to-r from-[#F5CE68] to-[#E5B842] text-[#100507] border-[#E5B842]'
                        : 'bg-[#230E13] text-[#FFF7EA] border-[#3A181E]'
                    }`}
                  >
                    Home Delivery
                  </button>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-[#FFF7EA] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#E5B842]" />
                  <span>Your Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyadarshi Dash"
                  value={form.customerName}
                  onChange={(e) => setForm({ ...form, customerName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#230E13] border border-[#3A181E] focus:border-[#E5B842] text-white text-sm focus:outline-none"
                />
                {errors.customerName && (
                  <p className="text-red-400 text-xs mt-1">{errors.customerName}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-[#FFF7EA] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#E5B842]" />
                  <span>Phone Number *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 8079862715"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#230E13] border border-[#3A181E] focus:border-[#E5B842] text-white text-sm focus:outline-none"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Address (conditional) */}
              {form.orderType === 'Delivery' && (
                <div>
                  <label className="block text-xs font-bold text-[#FFF7EA] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E5B842]" />
                    <span>Delivery Address *</span>
                  </label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Hostel, apartment, street, landmark, area (Maitri Vihar / Chandrasekharpur)"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#230E13] border border-[#3A181E] focus:border-[#E5B842] text-white text-sm focus:outline-none resize-none"
                  />
                  {errors.address && (
                    <p className="text-red-400 text-xs mt-1">{errors.address}</p>
                  )}
                </div>
              )}

              {/* Instructions */}
              <div>
                <label className="block text-xs font-bold text-[#FFF7EA] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#E5B842]" />
                  <span>Special Cooking / Packing Instructions</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Extra raita/salan, spicy chicken pakoda"
                  value={form.instructions}
                  onChange={(e) => setForm({ ...form, instructions: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#230E13] border border-[#3A181E] focus:border-[#E5B842] text-white text-sm focus:outline-none"
                />
              </div>

              {/* Subtotal Calculation Box */}
              <div className="pt-4 border-t border-[#2B1015] space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#C4B4A8]">Item Subtotal</span>
                  <span className="font-display text-2xl font-black text-[#E5B842]">
                    ₹{subtotal}
                  </span>
                </div>
                <p className="text-[11px] text-[#C4B4A8] italic">
                  * Note: Additional delivery charges (if applicable) are confirmed directly by the restaurant.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 hover:brightness-110 active:scale-[0.98] text-white font-bold text-xs uppercase tracking-widest shadow-[0_4px_20px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>
                  {isSubmitting ? 'Opening WhatsApp...' : 'Confirm Order on WhatsApp'}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
