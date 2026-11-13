import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Clock,
  UtensilsCrossed,
  Sparkles,
  Users,
  Award,
  ArrowRight,
  Flame,
  CheckCircle,
} from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';
import { ChalkDivider } from '@/components/ChalkDivider';
import { BrochureModal } from '@/components/BrochureModal';
import { SpaceGallery } from '@/components/SpaceGallery';

export const metadata = {
  title: 'About Us | The Biryani Drop | Our Story & Journey',
  description:
    'Learn about The Biryani Drop — A 2-year established QSR in Bhubaneswar bringing flavorful biryanis, rolls, chowmein and starters with great quality and affordability.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Top Banner */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#1A090D] via-[#230E13] to-[#100507] border-b border-[#E5B842]/20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#6B1422]/20 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          {/* Logo Badge */}
          <div className="inline-block p-1.5 rounded-full bg-[#230E13] border-2 border-[#E5B842] shadow-gold-glow mb-2">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-[#100507]">
              <Image
                src="/logo.jpg"
                alt="The Biryani Drop Official Logo"
                fill
                sizes="96px"
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#E5B842]">
              Eat • Relish • Repeat
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white">
              Our Story
            </h1>
          </div>

          <p className="text-base sm:text-xl text-[#FFF7EA]/90 max-w-2xl mx-auto font-light leading-relaxed">
            The Biryani Drop is a Quick Service Restaurant (QSR) that has been successfully operating for the past 2 years, offering customers a diverse selection of delicious, affordable and satisfying food options.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <BrochureModal />
          </div>
        </div>
      </section>

      {/* Main Narrative & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <ChalkDivider label="The Journey" align="left" />
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Flavour-Packed Food, <br />
              <span className="gold-gradient-text">Affordable for Everyone.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#FFF7EA]/85 leading-relaxed">
              <p>
                The business focuses on serving freshly prepared, flavourful meals that cater to different tastes and food preferences.
              </p>
              <p>
                Its menu features aromatic biryanis, delicious rolls, Indo-Chinese favourites like chowmein and Manchurian, crispy starters and refreshing beverages.
              </p>
              <p>
                The brand aims to bring together great taste, quality ingredients, generous portions and convenient service under one roof.
              </p>
            </div>

            {/* Highlights List */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-white">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1A090D] border border-[#3A181E]">
                <CheckCircle className="w-4 h-4 text-[#E5B842] flex-shrink-0" />
                <span>2 Years of QSR Experience</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1A090D] border border-[#3A181E]">
                <CheckCircle className="w-4 h-4 text-[#E5B842] flex-shrink-0" />
                <span>Dum Biryani from ₹99</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1A090D] border border-[#3A181E]">
                <CheckCircle className="w-4 h-4 text-[#E5B842] flex-shrink-0" />
                <span>Fresh Griddled Rolls</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1A090D] border border-[#3A181E]">
                <CheckCircle className="w-4 h-4 text-[#E5B842] flex-shrink-0" />
                <span>Convenient Takeaway & Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Image Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#E5B842]/30 shadow-xl">
              <Image
                src="/crops/biryani.jpg"
                alt="Aromatic Biryani"
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#E5B842]/30 shadow-xl">
                <Image
                  src="/crops/rolls.jpg"
                  alt="Delicious Rolls"
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#E5B842]/30 shadow-xl">
                <Image
                  src="/crops/beverages.jpg"
                  alt="Refreshing Beverages"
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Community Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1A090D] border border-[#E5B842]/25">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <ChalkDivider label="Our Community" />
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white">
              Who We Serve
            </h2>
            <p className="text-sm text-[#C4B4A8] mt-2">
              Strategically located in Maitri Vihar near RCM College, we take immense joy in serving diverse groups daily.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#230E13] border border-[#3A181E] text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#100507] border border-[#E5B842]/30 text-[#E5B842] flex items-center justify-center mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-white text-base">Students & Youth</h3>
              <p className="text-xs text-[#C4B4A8] leading-relaxed">
                Budget-friendly mini biryanis and rolls starting at ₹69, perfect for daily college breaks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#230E13] border border-[#3A181E] text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#100507] border border-[#E5B842]/30 text-[#E5B842] flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-white text-base">Working Professionals</h3>
              <p className="text-xs text-[#C4B4A8] leading-relaxed">
                Quick service takeaway and speedy meal packs during busy office lunch hours and evenings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#230E13] border border-[#3A181E] text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#100507] border border-[#E5B842]/30 text-[#E5B842] flex items-center justify-center mx-auto">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-white text-base">Families & Gatherings</h3>
              <p className="text-xs text-[#C4B4A8] leading-relaxed">
                Generous portions of biryani, crispy starters and Indo-Chinese chowmein for family dinners.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#230E13] border border-[#3A181E] text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#100507] border border-[#E5B842]/30 text-[#E5B842] flex items-center justify-center mx-auto">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-white text-base">Everyday Food Lovers</h3>
              <p className="text-xs text-[#C4B4A8] leading-relaxed">
                Anyone passionate about rich dum spices, spicy Chicken 65, and refreshing mojitos.
              </p>
            </div>
          </div>
        </div>
      </section>

     

      {/* CTA Bottom Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#230E13] to-[#1A090D] border border-[#E5B842]/40 space-y-5">
          <h2 className="font-display text-3xl font-black text-white">
            Ready to taste the difference?
          </h2>
          <p className="text-sm text-[#FFF7EA]/85 max-w-xl mx-auto">
            Order your favourites now or drop by our kitchen in Maitri Vihar, Bhubaneswar.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/menu"
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#F5CE68] via-[#E5B842] to-[#C59424] text-[#100507] font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110"
            >
              Explore Full Menu
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3 rounded-xl bg-[#100507] text-[#FFF7EA] border border-[#3A181E] hover:border-[#E5B842] text-xs font-semibold"
            >
              Contact Us & Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
