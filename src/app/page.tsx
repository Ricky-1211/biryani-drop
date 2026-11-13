'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Flame,
  Wallet,
  UtensilsCrossed,
  Clock,
  Sparkles,
  ArrowRight,
  MessageCircle,
  MapPin,
  Phone,
  Compass,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';
import { menuItems, menuCategories } from '@/data/menu';
import { FoodCard } from '@/components/FoodCard';
import { ChalkDivider } from '@/components/ChalkDivider';
import { BrochureModal } from '@/components/BrochureModal';
import { SpaceGallery } from '@/components/SpaceGallery';

export default function HomePage() {
  // Popular items as requested:
  // Chicken Dum Biryani, Chicken Mini Biryani, Veg Biryani, Chicken 65 Roll, American Crispy Corn, Veg Manchurian
  const popularItemIds = [
    'chicken-dum-biryani',
    'chicken-mini-biryani',
    'veg-biryani',
    'chicken-65-roll',
    'american-crispy-corn',
    'veg-manchurian',
  ];

  const popularItems = popularItemIds
    .map((id) => menuItems.find((item) => item.id === id))
    .filter(Boolean) as typeof menuItems;

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* ================= SECTION 1: HERO SECTION ================= */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden pt-6 pb-12">
        {/* Ambient Royal Burgundy & Imperial Gold Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6B1422]/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-[#E5B842]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          

              {/* Main Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
                Good Food.{' '}
                <span className="gold-gradient-text block sm:inline">
                  Great Mood.
                </span>
              </h1>

              {/* Supporting Headline */}
              <p className="text-base sm:text-lg text-[#FFF7EA]/85 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Craving something delicious? Drop into a world of flavour with freshly prepared biryanis, mouth-watering rolls, crispy starters and refreshing beverages.
              </p>

              {/* Tagline Badge */}
              <div className="flex items-center justify-center lg:justify-start gap-4 text-xs font-bold uppercase tracking-[0.25em] text-[#E5B842]">
                <span>Eat</span>
                <span>•</span>
                <span>Relish</span>
                <span>•</span>
                <span>Repeat</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/menu"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#F5CE68] via-[#E5B842] to-[#C59424] hover:brightness-110 active:scale-95 text-[#100507] font-black text-sm uppercase tracking-widest shadow-[0_6px_25px_rgba(229,184,66,0.35)] transition-all flex items-center justify-center gap-2"
                >
                  <span>EXPLORE OUR MENU</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={restaurantInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#1A090D] hover:bg-[#230E13] text-white border border-emerald-500/50 hover:border-emerald-400 font-bold text-sm tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>ORDER ON WHATSAPP</span>
                </a>
              </div>

              {/* Quick Brochure link */}
              <div className="pt-1 flex items-center justify-center lg:justify-start">
                <BrochureModal />
              </div>
            </div>

            {/* Right Hero Image Column with Authentic Chicken Dum Biryani Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md sm:max-w-lg aspect-square">
                {/* Outer Circular Glow Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6B1422]/30 via-transparent to-[#E5B842]/30 blur-2xl" />

                {/* Golden Border Frame Container */}
                <div className="relative w-full h-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden border-2 border-[#E5B842]/40 shadow-2xl bg-[#1A090D] p-2">
                  <div className="relative w-full h-full rounded-2xl sm:rounded-[2rem] overflow-hidden">
                    <Image
                      src="/hero-biryani.jpg"
                      alt="The Biryani Drop Dum Biryani with steam and chicken pieces"
                      fill
                      priority
                      sizes="(max-width: 768px) 90vw, 500px"
                      className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    {/* Floating Price Pill */}
                    <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#100507]/90 backdrop-blur-md border border-[#E5B842]/40 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="w-2 h-2 rounded-full bg-red-500" />
                          <h4 className="font-display font-bold text-white text-sm sm:text-base">
                            Chicken Dum Biryani
                          </h4>
                        </div>
                        <p className="text-[11px] text-[#C4B4A8]">
                          Slow dum cooked with aromatic spices & succulent chicken
                        </p>
                      </div>
                      <div className="text-right pl-3">
                        <span className="text-[10px] text-[#E5B842] block uppercase font-bold">Only</span>
                        <span className="font-display text-xl font-black text-[#E5B842]">₹129</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Decorative Stamp */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#F5CE68] to-[#E5B842] text-[#100507] rounded-full p-3.5 shadow-xl border-2 border-[#100507] flex flex-col items-center justify-center w-20 h-20 rotate-12">
                  <span className="text-[9px] font-black uppercase tracking-tighter">Fresh Dum</span>
                  <span className="text-sm font-black">₹129</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: BRAND INTRODUCTION ================= */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ChalkDivider label="Our Philosophy" />
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-6">
          Welcome to <span className="gold-gradient-text">The Biryani Drop</span>
        </h2>
        <div className="p-8 sm:p-10 rounded-3xl bg-[#1A090D] border border-[#E5B842]/30 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#6B1422]/20 rounded-bl-full pointer-events-none" />
          <p className="font-sans text-base sm:text-xl text-[#FFF7EA] leading-relaxed max-w-3xl mx-auto font-light">
            “Your favourite destination for delicious, affordable and satisfying food. From flavour-packed biryanis and irresistible rolls to crispy starters and refreshing drinks, we bring great taste and good vibes to every meal.”
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-[#E5B842] font-bold">
            <span>2 Years of Serving Happiness</span>
            <span>•</span>
            <span>ESTD 2024</span>
            <span>•</span>
            <span>Bhubaneswar</span>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: POPULAR MENU ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#E5B842] text-xs font-bold uppercase tracking-widest mb-2">
              <Flame className="w-4 h-4 text-[#E5B842]" />
              <span>Customer Favourites</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white">
              Most Loved Dishes
            </h2>
            <p className="text-sm text-[#C4B4A8] mt-1">
              Hand-picked bestsellers prepared fresh to order at honest prices with authentic photos.
            </p>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#E5B842] hover:text-[#FFF7EA] transition-colors group"
          >
            <span>View Full Menu ({menuItems.length} items)</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Popular Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {popularItems.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </section>

  

      {/* ================= SECTION 5: WHY CHOOSE US ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1A090D] border border-[#E5B842]/30 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <ChalkDivider label="The Biryani Drop Promise" />
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white">
              Why Choose Us
            </h2>
            <p className="text-sm text-[#C4B4A8] mt-2">
              Built on honest taste, affordability, and reliable quality every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {restaurantInfo.pillars.map((pillar, idx) => {
              const icons = [
                <Flame key="1" className="w-6 h-6 text-[#E5B842]" />,
                <Wallet key="2" className="w-6 h-6 text-[#E5B842]" />,
                <UtensilsCrossed key="3" className="w-6 h-6 text-[#E5B842]" />,
                <Clock key="4" className="w-6 h-6 text-[#E5B842]" />,
                <Sparkles key="5" className="w-6 h-6 text-[#E5B842]" />,
              ];

              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-[#230E13] border border-[#3A181E] hover:border-[#E5B842]/40 transition-all flex flex-col items-start space-y-3 group"
                >
                  <div className="p-3 rounded-xl bg-[#100507] border border-[#E5B842]/20 group-hover:scale-110 group-hover:border-[#E5B842] transition-all">
                    {icons[idx]}
                  </div>
                  <h3 className="font-display font-bold text-white text-base group-hover:text-[#E5B842] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#C4B4A8] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

   
      {/* ================= SECTION 6: CALL TO ACTION ================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-[#230E13] to-[#1A090D] border-2 border-[#E5B842]/40 shadow-2xl overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#6B1422]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-5 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E5B842]">
              Ready for a Feast?
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white">
              Your Cravings Deserve a Drop!
            </h2>
            <p className="text-sm sm:text-base text-[#FFF7EA]/85 leading-relaxed">
              Explore our menu and make your next meal a delicious one. Freshly prepared, rich in spices, and delivered or packed with love.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/menu"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#F5CE68] via-[#E5B842] to-[#C59424] text-[#100507] font-black text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 shadow-lg transition-all"
              >
                VIEW MENU
              </Link>
              <a
                href={restaurantInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#100507] hover:bg-[#1A090D] text-white border border-emerald-500/50 font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>ORDER VIA WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: LOCATION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-[#E5B842] text-xs font-bold uppercase tracking-widest">
              <Compass className="w-4 h-4 text-[#E5B842]" />
              <span>Visit Us</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white">
              Restaurant Location
            </h2>
            <p className="text-sm text-[#C4B4A8] leading-relaxed">
              Drop by for a hot, aromatic meal or quick takeaway right in the heart of Chandrasekharpur’s education & tech hub.
            </p>

            <div className="p-5 rounded-2xl bg-[#1A090D] border border-[#3A181E] space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#230E13] text-[#E5B842] flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">The Biryani Drop</h4>
                  <p className="text-xs text-[#FFF7EA]/90 mt-1 leading-relaxed">
                    {restaurantInfo.address.full}
                  </p>
                  <p className="text-[11px] text-[#E5B842] mt-1 font-semibold">
                    (Opposite / Near Regional College of Management - RCM)
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#2B1015] flex flex-wrap items-center gap-3">
                <a
                  href={`tel:+91${restaurantInfo.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs text-[#FFF7EA] hover:text-[#E5B842] font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E5B842]" />
                  <span>{restaurantInfo.phoneFormatted}</span>
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#230E13] hover:bg-[#2E131A] text-[#E5B842] border border-[#E5B842]/40 hover:border-[#E5B842] text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Google Maps interactive iframe */}
          <div className="lg:col-span-7">
            <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden border-2 border-[#E5B842]/25 shadow-2xl relative bg-[#1A090D]">
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
        </div>
      </section>
    </div>
  );
}
