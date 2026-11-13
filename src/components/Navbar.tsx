'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu as MenuIcon, X, PhoneCall } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { restaurantInfo } from '@/data/restaurant';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Menu', href: '/menu' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#100507]/95 backdrop-blur-md border-b border-[#E5B842]/25 shadow-xl'
            : 'bg-[#100507]/90 backdrop-blur-sm border-b border-[#2B1015]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Official The Biryani Drop logo */}
            <Link
              href="/"
              className="flex items-center gap-3.5 group transition-transform duration-200 hover:scale-[1.02]"
            >
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#E5B842] shadow-[0_0_15px_rgba(229,184,66,0.35)] bg-[#100507] flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="The Biryani Drop Official Logo"
                  fill
                  sizes="64px"
                  priority
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg sm:text-xl font-bold tracking-wide text-white group-hover:text-[#E5B842] transition-colors">
                  THE BIRYANI DROP
                </span>
                <span className="text-[11px] font-sans tracking-widest text-[#E5B842] uppercase font-medium">
                  {restaurantInfo.tagline}
                </span>
              </div>
            </Link>

            {/* Middle: Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-sm font-semibold tracking-wider transition-colors duration-200 py-1 ${
                      isActive
                        ? 'text-[#E5B842]'
                        : 'text-[#FFF7EA]/80 hover:text-[#E5B842]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5B842] to-transparent" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Cart icon & ORDER NOW button */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-full text-[#FFF7EA] bg-[#230E13] border border-[#E5B842]/35 hover:border-[#E5B842] hover:bg-[#2E131A] transition-all duration-200"
                aria-label={`Open shopping cart with ${totalItems} items`}
              >
                <ShoppingBag className="w-5 h-5 text-[#E5B842]" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 bg-[#E5B842] text-[#100507] text-[11px] font-black rounded-full flex items-center justify-center shadow-lg border border-[#100507]">
                    {totalItems}
                  </span>
                )}
              </button>

              <Link
                href="/menu"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F5CE68] via-[#E5B842] to-[#C59424] text-[#100507] font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 shadow-[0_4px_16px_rgba(229,184,66,0.35)] transition-all duration-200 flex items-center gap-1.5"
              >
                <span>ORDER NOW</span>
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex sm:hidden items-center gap-3">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-lg text-[#FFF7EA] bg-[#230E13] border border-[#E5B842]/30"
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5 text-[#E5B842]" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-[#E5B842] text-[#100507] text-[10px] font-black rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#FFF7EA] bg-[#230E13] border border-[#E5B842]/20 hover:text-[#E5B842]"
                aria-label="Toggle navigation drawer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 sm:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 w-[82%] max-w-sm h-full bg-[#1A090D] border-l border-[#E5B842]/25 p-6 flex flex-col justify-between shadow-2xl z-50">
            <div>
              {/* Drawer Header with Logo */}
              <div className="flex items-center justify-between pb-6 border-b border-[#2B1015]">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#E5B842]">
                    <Image
                      src="/logo.jpg"
                      alt="The Biryani Drop Logo"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base">THE BIRYANI DROP</h3>
                    <p className="text-[10px] text-[#E5B842] uppercase">{restaurantInfo.tagline}</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col gap-2 mt-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-[#F5CE68] to-[#E5B842] text-[#100507] font-bold shadow-md'
                          : 'text-[#FFF7EA] hover:bg-[#230E13] hover:text-[#E5B842]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Quick Call in mobile menu */}
              <div className="mt-8 pt-6 border-t border-[#2B1015] space-y-3">
                <a
                  href={`tel:+91${restaurantInfo.phone}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#230E13] text-xs text-[#FFF7EA] hover:text-[#E5B842] border border-[#3A181E]"
                >
                  <PhoneCall className="w-4 h-4 text-[#E5B842]" />
                  <span>Call: {restaurantInfo.phoneFormatted}</span>
                </a>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-3 pt-6 border-t border-[#2B1015]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-[#230E13] text-[#FFF7EA] border border-[#E5B842]/40 font-semibold text-sm flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-[#E5B842]" />
                <span>View Cart ({totalItems} items)</span>
              </button>

              <Link
                href="/menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F5CE68] via-[#E5B842] to-[#C59424] text-[#100507] font-black text-sm uppercase tracking-wider text-center block shadow-lg"
              >
                ORDER NOW
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
