'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MegaMenu } from './MegaMenu';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { JEWELLERY_CATEGORIES, WEDDING_CATEGORIES } from '@/lib/vasundhara-data';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'jewellery' | 'wedding' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileJewelleryOpen, setMobileJewelleryOpen] = useState(false);
  const [mobileWeddingOpen, setMobileWeddingOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-none outline-none transition-all duration-300 ${
          scrolled || activeMegaMenu
            ? 'py-3.5 bg-[#161616]/95 backdrop-blur-xl text-[#F7F3EC]'
            : 'py-5 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent text-[#F7F3EC]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between relative">
          {/* Official Brand Logo */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none"
            onMouseEnter={() => setActiveMegaMenu(null)}
          >
            <img
              src="/vasundhara-logo-gold.svg"
              alt="Vasundhara Diamond Roof"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter brightness-110 drop-shadow"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-10 text-xs font-sans-refined tracking-[0.2em]">
            {/* JEWELLERY Dropdown Trigger */}
            <div
              className="relative py-2 cursor-pointer"
              onMouseEnter={() => setActiveMegaMenu('jewellery')}
            >
              <Link
                href="/jewellery"
                className={`flex items-center space-x-1.5 transition-colors ${
                  activeMegaMenu === 'jewellery' ? 'text-[#B89B5E]' : 'text-[#F7F3EC]/85 hover:text-[#B89B5E]'
                }`}
              >
                <span>JEWELLERY</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#B89B5E]" />
              </Link>
            </div>

            {/* WEDDING Dropdown Trigger */}
            <div
              className="relative py-2 cursor-pointer"
              onMouseEnter={() => setActiveMegaMenu('wedding')}
            >
              <Link
                href="/wedding"
                className={`flex items-center space-x-1.5 transition-colors ${
                  activeMegaMenu === 'wedding' ? 'text-[#B89B5E]' : 'text-[#F7F3EC]/85 hover:text-[#B89B5E]'
                }`}
              >
                <span>WEDDING</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#B89B5E]" />
              </Link>
            </div>

            {/* ABOUT US Link */}
            <Link
              href="/about"
              onMouseEnter={() => setActiveMegaMenu(null)}
              className="text-[#F7F3EC]/85 hover:text-[#B89B5E] transition-colors py-2"
            >
              ABOUT US
            </Link>

            {/* CONTACT Link */}
            <Link
              href="/contact"
              onMouseEnter={() => setActiveMegaMenu(null)}
              className="text-[#F7F3EC]/85 hover:text-[#B89B5E] transition-colors py-2"
            >
              CONTACT
            </Link>
          </nav>

          {/* Right Controls: Search Icon */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#F7F3EC]/85 hover:text-[#B89B5E] transition-colors focus:outline-none"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Mobile-only Hamburger Menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F7F3EC]/85 hover:text-[#B89B5E] transition-colors focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#B89B5E]" />
              ) : (
                <Menu className="w-5 h-5 text-[#F7F3EC]" />
              )}
            </button>
          </div>

          {/* Hover Mega Menu Overlay for Desktop */}
          {activeMegaMenu && (
            <MegaMenu type={activeMegaMenu} onClose={() => setActiveMegaMenu(null)} />
          )}
        </div>

        {/* Search Input Drawer */}
        {searchOpen && (
          <div className="w-full bg-[#161616] border-b border-[#B89B5E]/30 py-4 px-8 flex justify-center items-center space-x-4 animate-fadeIn">
            <div className="relative max-w-xl w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Solitaires, Emerald Chokers, Bridal Harams..."
                className="w-full bg-[#0A0A0A] border border-[#B89B5E]/30 rounded-full px-6 py-2.5 text-xs text-[#F7F3EC] placeholder-[#F7F3EC]/40 focus:outline-none focus:border-[#B89B5E]"
              />
              <Search className="absolute right-4 top-3 w-4 h-4 text-[#B89B5E]" />
            </div>
            <button
              onClick={() => setSearchOpen(false)}
              className="text-xs text-[#F7F3EC]/60 hover:text-[#F7F3EC]"
            >
              Close
            </button>
          </div>
        )}
      </header>

      {/* Fullscreen Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A0A0A]/98 text-[#F7F3EC] p-8 flex flex-col justify-between overflow-y-auto animate-fadeIn">
          <div className="flex justify-between items-center pb-6 border-b border-[#B89B5E]/20">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <img
                src="/vasundhara-logo-gold.svg"
                alt="Vasundhara Diamond Roof"
                className="h-8 w-auto object-contain filter brightness-110"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-full border border-[#B89B5E]/30 text-[#B89B5E]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="my-auto py-8 space-y-6">
            {/* JEWELLERY Accordion */}
            <div className="border-b border-[#B89B5E]/20 pb-4">
              <button
                onClick={() => setMobileJewelleryOpen(!mobileJewelleryOpen)}
                className="w-full flex justify-between items-center text-lg font-sans-refined text-[#F7F3EC]"
              >
                <span>JEWELLERY</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#B89B5E] transition-transform ${
                    mobileJewelleryOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileJewelleryOpen && (
                <div className="mt-4 space-y-3 pl-4">
                  {JEWELLERY_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/jewellery/${cat.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-[#F7F3EC]/70 hover:text-[#B89B5E] uppercase tracking-wider"
                    >
                      {cat.title}
                    </Link>
                  ))}
                  <Link
                    href="/jewellery"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-[#B89B5E] font-sans-refined pt-2"
                  >
                    VIEW ALL JEWELLERY →
                  </Link>
                </div>
              )}
            </div>

            {/* WEDDING Accordion */}
            <div className="border-b border-[#B89B5E]/20 pb-4">
              <button
                onClick={() => setMobileWeddingOpen(!mobileWeddingOpen)}
                className="w-full flex justify-between items-center text-lg font-sans-refined text-[#F7F3EC]"
              >
                <span>WEDDING</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#B89B5E] transition-transform ${
                    mobileWeddingOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileWeddingOpen && (
                <div className="mt-4 space-y-3 pl-4">
                  {WEDDING_CATEGORIES.map((wCat) => (
                    <Link
                      key={wCat.id}
                      href={`/wedding/${wCat.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-[#F7F3EC]/70 hover:text-[#B89B5E] uppercase tracking-wider"
                    >
                      {wCat.title} ({wCat.traditionalName})
                    </Link>
                  ))}
                  <Link
                    href="/wedding"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-[#B89B5E] font-sans-refined pt-2"
                  >
                    EXPLORE WEDDING WORLD →
                  </Link>
                </div>
              )}
            </div>

            {/* ABOUT US */}
            <div className="border-b border-[#B89B5E]/20 pb-4">
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-sans-refined text-[#F7F3EC] hover:text-[#B89B5E]"
              >
                ABOUT US
              </Link>
            </div>

            {/* CONTACT */}
            <div className="border-b border-[#B89B5E]/20 pb-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-sans-refined text-[#F7F3EC] hover:text-[#B89B5E]"
              >
                CONTACT & BOUTIQUES
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-[#B89B5E]/20 text-center text-xs text-[#F7F3EC]/60 space-y-1">
            <p>Jubilee Hills, Hyderabad • Vijayawada • Visakhapatnam</p>
            <p className="text-[#B89B5E] italic">“Jewellery with a story.”</p>
          </div>
        </div>
      )}
    </>
  );
}
