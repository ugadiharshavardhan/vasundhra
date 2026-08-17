'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#050505] text-[#F7F3EC] border-t border-[#B89B5E]/20 pt-20 pb-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Brand Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#B89B5E]/20 pb-10 gap-6">
          <Link href="/" className="group focus:outline-none">
            <img
              src="/vasundhara-logo-gold.svg"
              alt="Vasundhara Diamond Roof"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter brightness-110 drop-shadow"
            />
          </Link>

          <p className="text-xs font-serif-luxury italic text-[#F7F3EC]/70 max-w-md">
            “Every jewel has a story — carrying the memories of gems, artisans, heritage, and sacred ceremonies.”
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-xs">
          {/* JEWELLERY */}
          <div className="space-y-4">
            <h3 className="font-helvetica font-medium tracking-[0.2em] text-[#B89B5E] uppercase text-[11px]">
              JEWELLERY
            </h3>
            <ul className="space-y-2.5 font-serif-luxury text-[#F7F3EC]/70">
              <li>
                <Link href="/jewellery/occasion" className="hover:text-[#B89B5E] transition-colors">
                  Occasion Jewellery
                </Link>
              </li>
              <li>
                <Link href="/jewellery/daily" className="hover:text-[#B89B5E] transition-colors">
                  Daily Jewellery
                </Link>
              </li>
              <li>
                <Link href="/jewellery/baby" className="hover:text-[#B89B5E] transition-colors">
                  Baby Jewellery
                </Link>
              </li>
              <li>
                <Link href="/jewellery/cocktail" className="hover:text-[#B89B5E] transition-colors">
                  Cocktail Jewellery
                </Link>
              </li>
            </ul>
          </div>

          {/* WEDDING */}
          <div className="space-y-4">
            <h3 className="font-helvetica font-medium tracking-[0.2em] text-[#B89B5E] uppercase text-[11px]">
              WEDDING
            </h3>
            <ul className="space-y-2.5 font-serif-luxury text-[#F7F3EC]/70">
              <li>
                <Link href="/wedding/bride" className="hover:text-[#B89B5E] transition-colors">
                  Bride (Vāmaṅgaṁ)
                </Link>
              </li>
              <li>
                <Link href="/wedding/groom" className="hover:text-[#B89B5E] transition-colors">
                  Groom (Prāṇanāthaḥ)
                </Link>
              </li>
              <li>
                <Link href="/wedding/engagement" className="hover:text-[#B89B5E] transition-colors">
                  Engagement Rings
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="space-y-4">
            <h3 className="font-helvetica font-medium tracking-[0.2em] text-[#B89B5E] uppercase text-[11px]">
              COMPANY
            </h3>
            <ul className="space-y-2.5 font-serif-luxury text-[#F7F3EC]/70">
              <li>
                <Link href="/about" className="hover:text-[#B89B5E] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B89B5E] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B89B5E] transition-colors">
                  Boutique Sanctuaries
                </Link>
              </li>
            </ul>
          </div>

          {/* CUSTOMER CARE */}
          <div className="space-y-4">
            <h3 className="font-helvetica font-medium tracking-[0.2em] text-[#B89B5E] uppercase text-[11px]">
              CUSTOMER CARE
            </h3>
            <ul className="space-y-2.5 font-serif-luxury text-[#F7F3EC]/70">
              <li>
                <Link href="#" className="hover:text-[#B89B5E] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#B89B5E] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#B89B5E] transition-colors">
                  Annual Return
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#B89B5E] transition-colors">
                  CSR Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT & BOUTIQUE INFO */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h3 className="font-helvetica font-medium tracking-[0.2em] text-[#B89B5E] uppercase text-[11px]">
              HEADQUARTERS
            </h3>
            <div className="space-y-2 font-serif-luxury text-[#F7F3EC]/70 leading-relaxed text-[11px]">
              <p>Plot no. 775 F, Road no. 45, Jubilee Hills, Hyderabad - 500033</p>
              <p className="text-[#B89B5E]">+91 40 2355 8888</p>
              <p className="text-[#B89B5E] truncate">concierge@vasundharadiamondroof.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 border-t border-[#B89B5E]/15 flex flex-col sm:flex-row justify-between items-center text-[10px] font-sans-refined text-[#F7F3EC]/50 gap-4">
          <p>© {new Date().getFullYear()} Vasundhara Diamond Roof. All rights reserved.</p>
          <p className="text-[#B89B5E] italic font-serif">
            Hyderabad • Vijayawada • Visakhapatnam
          </p>
        </div>
      </div>
    </footer>
  );
}
