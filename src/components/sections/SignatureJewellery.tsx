'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const SIGNATURE_ITEMS = [
  {
    title: 'THE NIZAMI EMERALD CASCADE',
    category: 'OCCASION JEWELLERY',
    image: '/images/occasion-hero.jpg',
    link: '/jewellery/occasion',
    width: 'lg:col-span-8',
    height: 'h-[450px] sm:h-[540px]',
  },
  {
    title: 'SOLITAIRE CROWN BAND',
    category: 'ENGAGEMENT',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
    link: '/wedding/engagement',
    width: 'lg:col-span-4',
    height: 'h-[450px] sm:h-[540px]',
  },
  {
    title: 'VĀMAṄGAṀ BRIDAL HARAM',
    category: 'BRIDE JEWELLERY',
    image: '/images/occasion-hero.jpg',
    link: '/wedding/bride',
    width: 'lg:col-span-12',
    height: 'h-[400px] sm:h-[500px]',
  },
];

export function SignatureJewellery() {
  return (
    <section className="py-28 px-6 sm:px-12 bg-[#0A0A0A] text-[#F7F3EC] border-b border-[#B89B5E]/15">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-[#B89B5E]/20 pb-6 gap-4">
          <div>
            <span className="text-[10px] font-sans-refined tracking-[0.3em] text-[#B89B5E] uppercase block">
              EDITORIAL SELECTION
            </span>
            <h2 className="text-2xl sm:text-4xl font-helvetica font-light tracking-wide uppercase mt-1">
              SIGNATURE JEWELLERY
            </h2>
          </div>
          <Link
            href="/jewellery"
            className="text-xs font-sans-refined text-[#B89B5E] hover:text-[#F7F3EC] transition-colors flex items-center space-x-1"
          >
            <span>VIEW ALL CREATIONS</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Asymmetric Magazine Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {SIGNATURE_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className={`group relative rounded-2xl overflow-hidden border border-[#B89B5E]/20 bg-[#161616] ${item.width} ${item.height} shadow-xl flex flex-col justify-end p-8 transition-transform duration-700 hover:-translate-y-1`}
            >
              <img
                src={item.image}
                alt={item.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/occasion-hero.jpg';
                }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

              <div className="relative z-10 space-y-2">
                <span className="text-[9px] font-sans-refined tracking-[0.25em] text-[#B89B5E] bg-[#0A0A0A]/80 px-3 py-1 rounded-full border border-[#B89B5E]/30 backdrop-blur-sm uppercase inline-block">
                  {item.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-helvetica text-[#F7F3EC] uppercase tracking-wider font-light">
                  {item.title}
                </h3>
                <div className="pt-2 flex items-center space-x-2 text-xs font-sans-refined text-[#B89B5E] group-hover:text-[#F7F3EC] transition-colors">
                  <span>DISCOVER</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
