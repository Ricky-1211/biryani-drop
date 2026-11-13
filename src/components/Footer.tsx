import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#100507] border-t border-[#E5B842]/25 text-[#C4B4A8] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-[#6B1422]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-10 w-64 h-28 bg-[#E5B842]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#E5B842] shadow-[0_0_15px_rgba(229,184,66,0.35)] bg-[#1A090D] flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="The Biryani Drop Logo"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-lg tracking-wide">
                  THE BIRYANI DROP
                </h3>
                <p className="text-xs text-[#E5B842] font-medium tracking-wider uppercase">
                  {restaurantInfo.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#C4B4A8]">
              {restaurantInfo.secondaryTagline} A vibrant QSR serving aromatic dum biryanis, crispy rolls, chowmein, starters, and refreshing beverages for the past 2 years.
            </p>

            <div className="pt-2">
              <a
                href={restaurantInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600/30 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-white text-base font-bold tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E5B842]" />
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#E5B842] transition-colors flex items-center gap-2">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#E5B842] transition-colors flex items-center gap-2">
                  <span>Our Menu (7 Categories)</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E5B842] transition-colors flex items-center gap-2">
                  <span>About Us & Our Story</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E5B842] transition-colors flex items-center gap-2">
                  <span>Contact & Location</span>
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-[#E5B842] transition-colors flex items-center gap-2">
                  <span>View Cart & Checkout</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Timings */}
          <div className="space-y-4">
            <h4 className="font-display text-white text-base font-bold tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E5B842]" />
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:+91${restaurantInfo.phone}`}
                  className="flex items-center gap-3 hover:text-[#E5B842] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#230E13] border border-[#3A181E] text-[#E5B842] group-hover:border-[#E5B842]/40">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#FFF7EA]/60 uppercase">Phone</span>
                    <span className="font-semibold text-white">{restaurantInfo.phoneFormatted}</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${restaurantInfo.email}`}
                  className="flex items-center gap-3 hover:text-[#E5B842] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#230E13] border border-[#3A181E] text-[#E5B842] group-hover:border-[#E5B842]/40">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#FFF7EA]/60 uppercase">Email</span>
                    <span className="font-semibold text-white break-all text-xs sm:text-sm">{restaurantInfo.email}</span>
                  </div>
                </a>
              </li>

              <li className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#230E13] border border-[#3A181E] text-[#E5B842]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-[#FFF7EA]/60 uppercase">Hours</span>
                  <span className="font-semibold text-white">11:30 AM – 11:00 PM Daily</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Location Address */}
          <div className="space-y-4">
            <h4 className="font-display text-white text-base font-bold tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E5B842]" />
              Restaurant Location
            </h4>
            <div className="flex items-start gap-3 text-sm">
              <div className="p-2 rounded-lg bg-[#230E13] border border-[#3A181E] text-[#E5B842] flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <p className="leading-relaxed text-[#FFF7EA]/90">
                {restaurantInfo.address.full}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#230E13] hover:bg-[#2E131A] text-xs font-semibold text-[#E5B842] border border-[#E5B842]/30 hover:border-[#E5B842] transition-colors"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#2B1015] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C4B4A8]">
          <p>
            © {new Date().getFullYear()} <span className="text-[#E5B842] font-semibold">The Biryani Drop</span> (ESTD 2024). All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-neutral-400">
            <span>Freshly Prepared Quick Service Restaurant</span>
            <span>•</span>
            <span className="text-[#E5B842] font-medium">Bhubaneswar, Odisha</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
