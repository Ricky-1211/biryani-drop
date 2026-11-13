'use client';

import React, { useState } from 'react';
import { X, MessageCircle, MapPin, Phone, User, FileText, CheckCircle2, AlertCircle, ShoppingBag } from 'lucide-react';
import { useCart, CustomerOrderDetails } from '@/context/CartContext';
import { restaurantInfo } from '@/data/restaurant';

export const WhatsAppOrderModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    subtotal,
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

  if (!isCheckoutOpen) return null;

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

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const link = generateWhatsAppLink(form);

    setTimeout(() => {
      window.open(link, '_blank');
      setIsSubmitting(false);
      setIsCheckoutOpen(false);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={() => setIsCheckoutOpen(false)}
      />

      {/* Modal Dialog */}
      <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-xl bg-[#1A090D] border border-[#E5B842]/40 rounded-3xl shadow-2xl overflow-hidden z-10 my-8">
          {/* Top Header Banner */}
          <div className="bg-gradient-to-r from-[#230E13] via-[#2E131A] to-[#230E13] px-6 py-5 border-b border-[#E5B842]/25 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-lg">
                  Place Order via WhatsApp
                </h3>
                <p className="text-xs text-[#E5B842]">
                  Quick 1-Click Ordering directly to restaurant
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleConfirmOrder} className="p-6 space-y-5">
            {/* Required Disclaimer */}
            <div className="p-3.5 rounded-xl bg-[#230E13] border border-[#E5B842]/30 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#E5B842] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-[#FFF7EA] leading-relaxed">
                <span className="font-semibold text-[#E5B842]">Notice:</span> Your order request will be sent to the restaurant through WhatsApp. The restaurant will confirm availability and order details.
              </p>
            </div>

            {/* Order Type Toggle */}
            <div>
              <label className="block text-xs font-bold text-[#FFF7EA] uppercase tracking-wider mb-2">
                Select Order Type *
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setForm({ ...form, orderType: 'Pickup' })}
                  className={`py-3 px-4 rounded-xl border font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    form.orderType === 'Pickup'
                      ? 'bg-gradient-to-r from-[#F5CE68] to-[#E5B842] text-[#100507] border-[#E5B842] shadow-lg'
                      : 'bg-[#230E13] text-[#FFF7EA]/80 border-[#3A181E] hover:border-[#E5B842]/40'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Takeaway / Pickup</span>
                </button>

                <button
                  type="button"
                  onClick={() => setForm({ ...form, orderType: 'Delivery' })}
                  className={`py-3 px-4 rounded-xl border font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    form.orderType === 'Delivery'
                      ? 'bg-gradient-to-r from-[#F5CE68] to-[#E5B842] text-[#100507] border-[#E5B842] shadow-lg'
                      : 'bg-[#230E13] text-[#FFF7EA]/80 border-[#3A181E] hover:border-[#E5B842]/40'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  <span>Home Delivery</span>
                </button>
              </div>
              <p className="text-[11px] text-[#C4B4A8] mt-1.5">
                {form.orderType === 'Pickup'
                  ? `Pick up at: ${restaurantInfo.address.line1}, ${restaurantInfo.address.landmark}, ${restaurantInfo.address.zone}`
                  : 'Delivery subject to location & restaurant confirmation.'}
              </p>
            </div>

            {/* Customer Name */}
            <div>
              <label className="block text-xs font-bold text-[#FFF7EA] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#E5B842]" />
                <span>Your Name *</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={form.customerName}
                onChange={(e) => setForm({ ...form, customerName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#230E13] border border-[#3A181E] focus:border-[#E5B842] text-white text-sm focus:outline-none"
              />
              {errors.customerName && (
                <p className="text-red-400 text-xs mt-1">{errors.customerName}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold text-[#FFF7EA] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#E5B842]" />
                <span>Phone / WhatsApp Number *</span>
              </label>
              <input
                type="tel"
                placeholder="e.g. 9876543210"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#230E13] border border-[#3A181E] focus:border-[#E5B842] text-white text-sm focus:outline-none"
              />
              {errors.phone && (
                <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Address if delivery is selected */}
            {form.orderType === 'Delivery' && (
              <div>
                <label className="block text-xs font-bold text-[#FFF7EA] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E5B842]" />
                  <span>Delivery Address *</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Apartment, hostel, street, landmark, area (e.g. Maitri Vihar, Chandrasekharpur)"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#230E13] border border-[#3A181E] focus:border-[#E5B842] text-white text-sm focus:outline-none resize-none"
                />
                {errors.address && (
                  <p className="text-red-400 text-xs mt-1">{errors.address}</p>
                )}
              </div>
            )}

            {/* Special Instructions */}
            <div>
              <label className="block text-xs font-bold text-[#FFF7EA] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#E5B842]" />
                <span>Special Instructions (Optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Less spicy, extra onions, no cutlery needed"
                value={form.instructions}
                onChange={(e) => setForm({ ...form, instructions: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#230E13] border border-[#3A181E] focus:border-[#E5B842] text-white text-sm focus:outline-none"
              />
            </div>

            {/* Order Items Summary Box */}
            <div className="p-4 rounded-2xl bg-[#100507] border border-[#3A181E] space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-[#230E13] text-xs font-bold uppercase tracking-wider text-[#E5B842]">
                <span>Order Summary ({cart.length} unique items)</span>
                <span>Subtotal</span>
              </div>
              <div className="max-h-36 overflow-y-auto space-y-1.5 pr-1 text-xs">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-[#FFF7EA]">
                    <span className="truncate pr-2">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="font-semibold text-white">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-[#230E13] flex justify-between items-center text-sm font-bold">
                <span className="text-white">Order Subtotal:</span>
                <span className="text-[#E5B842] font-display text-lg">₹{subtotal}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2">
              <button
                type="submit"
                disabled={isSubmitting || cart.length === 0}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 hover:brightness-110 active:scale-[0.98] text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(16,185,129,0.35)] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>
                  {isSubmitting ? 'Opening WhatsApp...' : 'Confirm Order on WhatsApp'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setIsCheckoutOpen(false)}
                className="w-full py-2.5 rounded-xl text-neutral-400 hover:text-white text-xs font-semibold"
              >
                Back to Cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
