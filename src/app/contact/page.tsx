'use client';

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ExternalLink,
  Compass,
} from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';
import { ChalkDivider } from '@/components/ChalkDivider';
import { SpaceGallery } from '@/components/SpaceGallery';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) return;

    // Send via WhatsApp or log confirmation
    const msg = `Hello The Biryani Drop!\nNew Enquiry from Website:\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || 'N/A'}\nMessage: ${form.message}`;
    const waUrl = `https://wa.me/${restaurantInfo.whatsappNumber}?text=${encodeURIComponent(msg)}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <ChalkDivider label="We'd Love To Hear From You" />
        <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg text-[#FFF7EA]/85 font-normal">
          Have a question, feedback, catering inquiry or want to place an order? Get in touch with our team.
        </p>
      </div>

      {/* Main Grid: Contact Info + Enquiry Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-5">
          {/* Card 1: Restaurant Details */}
          <div className="p-6 rounded-2xl bg-[#1A090D] border border-[#E5B842]/30 space-y-4 shadow-xl">
            <h3 className="font-display font-bold text-white text-lg">
              {restaurantInfo.name}
            </h3>
            <p className="text-xs text-[#E5B842] uppercase tracking-wider font-semibold">
              {restaurantInfo.category} • 2 Years in Business
            </p>

            <div className="pt-2 space-y-4 text-sm">
              {/* Phone Link */}
              <a
                href={`tel:+91${restaurantInfo.phone}`}
                className="flex items-start gap-3.5 p-3 rounded-xl bg-[#230E13] hover:bg-[#2E131A] border border-[#3A181E] transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-[#100507] text-[#E5B842] group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-[#C4B4A8] uppercase">Phone Number</span>
                  <span className="font-bold text-white text-base">
                    {restaurantInfo.phoneFormatted}
                  </span>
                  <span className="block text-[11px] text-[#E5B842]">Tap to Call Directly</span>
                </div>
              </a>

              {/* WhatsApp Link */}
              <a
                href={restaurantInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 p-3 rounded-xl bg-[#230E13] hover:bg-[#2E131A] border border-emerald-500/30 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-emerald-950/60 text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-[#C4B4A8] uppercase">WhatsApp Ordering</span>
                  <span className="font-bold text-white text-base">
                    +91 {restaurantInfo.phone}
                  </span>
                  <span className="block text-[11px] text-emerald-400 font-medium">
                    Click to Open Chat
                  </span>
                </div>
              </a>

              {/* Email Link */}
              <a
                href={`mailto:${restaurantInfo.email}`}
                className="flex items-start gap-3.5 p-3 rounded-xl bg-[#230E13] hover:bg-[#2E131A] border border-[#3A181E] transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-[#100507] text-[#E5B842] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-[#C4B4A8] uppercase">Email Address</span>
                  <span className="font-bold text-white text-xs sm:text-sm break-all">
                    {restaurantInfo.email}
                  </span>
                  <span className="block text-[11px] text-[#E5B842]">Send an Email</span>
                </div>
              </a>

              {/* Location Address */}
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#230E13] border border-[#3A181E]">
                <div className="p-2.5 rounded-lg bg-[#100507] text-[#E5B842]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-[#C4B4A8] uppercase">Restaurant Address</span>
                  <p className="font-medium text-white text-xs leading-relaxed mt-0.5">
                    {restaurantInfo.address.full}
                  </p>
                  <a
                    href={restaurantInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#E5B842] hover:underline font-bold mt-2"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#230E13] border border-[#3A181E]">
                <div className="p-2.5 rounded-lg bg-[#100507] text-[#E5B842]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-[#C4B4A8] uppercase">Operating Hours</span>
                  <span className="font-bold text-white text-sm">
                    Monday – Sunday: 11:30 AM – 11:00 PM
                  </span>
                  <span className="block text-[11px] text-[#C4B4A8]">
                    Hot biryanis prepared fresh throughout the day
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#1A090D] border border-[#E5B842]/30 shadow-xl space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#E5B842]">
                Send a Message
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-white mt-1">
                Contact Enquiry Form
              </h2>
              <p className="text-xs sm:text-sm text-[#C4B4A8] mt-1">
                Fill out the form below. Your message will also be sent directly to our team via WhatsApp for an immediate response.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#230E13] border border-emerald-500/40 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-white text-lg">
                  Thank You for Reaching Out!
                </h3>
                <p className="text-xs text-[#FFF7EA]/80 max-w-sm mx-auto">
                  Your enquiry has been received. We have also opened WhatsApp so you can chat with us instantly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', phone: '', email: '', message: '' });
                  }}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#F5CE68] to-[#E5B842] text-[#100507] text-xs font-bold uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#FFF7EA] uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Sahoo"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#230E13] border border-[#3A181E] focus:border-[#E5B842] text-white text-sm focus:outline-none placeholder:text-[#C4B4A8]/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#FFF7EA] uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#230E13] border border-[#3A181E] focus:border-[#E5B842] text-white text-sm focus:outline-none placeholder:text-[#C4B4A8]/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#FFF7EA] uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. yourname@gmail.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#230E13] border border-[#3A181E] focus:border-[#E5B842] text-white text-sm focus:outline-none placeholder:text-[#C4B4A8]/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#FFF7EA] uppercase tracking-wider mb-1.5">
                    Your Message / Catering Request *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what you need, order query, party booking, or feedback..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#230E13] border border-[#3A181E] focus:border-[#E5B842] text-white text-sm focus:outline-none placeholder:text-[#C4B4A8]/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F5CE68] via-[#E5B842] to-[#C59424] text-[#100507] font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-[0.98] shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Embedded Location Map Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold text-white flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#E5B842]" />
            <span>Find Us on the Map</span>
          </h2>
          <a
            href={restaurantInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#E5B842] hover:underline font-bold flex items-center gap-1"
          >
            <span>Open Google Maps Directions</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="w-full h-96 rounded-3xl overflow-hidden border-2 border-[#E5B842]/30 shadow-2xl relative bg-[#1A090D]">
          <iframe
            title="The Biryani Drop Location Map"
            src="https://maps.google.com/maps?q=Regional+College+of+Management+Maitri+Vihar+Bhubaneswar&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Restaurant Space Preview */}
      <div className="space-y-6 pt-6 border-t border-[#2B1015]">
        <div className="text-center max-w-2xl mx-auto">
          <ChalkDivider label="Visit In Person" />
          <h2 className="font-display text-3xl font-black text-white">
            Our Restaurant & Counter Space
          </h2>
          <p className="text-sm text-[#C4B4A8] mt-1">
            See where the magic happens — our ordering counter, live tawa, and quick takeaway pickup station.
          </p>
        </div>

        <SpaceGallery />
      </div>
    </div>
  );
}
