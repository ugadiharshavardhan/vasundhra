'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const FEATURED_ITEMS = [
  {
    id: 'fj-1',
    title: 'THE NIZAM SOLITAIRE CHOKER',
    category: 'OCCASION JEWELLERY',
    gemDetails: '18K Yellow Gold • Zambian Emeralds • Uncut Polki Diamonds',
    image: '/images/occasion-hero.jpg',
    link: '/jewellery/occasion',
  },
  {
    id: 'fj-2',
    title: 'EMERALD NOCTURNE COCKTAIL RING',
    category: 'COCKTAIL JEWELLERY',
    gemDetails: 'Platinum • 8.5ct Oval Emerald • Marquise Solitaire Halos',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
    link: '/jewellery/cocktail',
  },
  {
    id: 'fj-3',
    title: 'SOLARIS ESSENCE LINE BRACELET',
    category: 'DAILY JEWELLERY',
    gemDetails: '18K Rose Gold • D-Flawless Round Diamonds',
    image: 'https://images.unsplash.com/photo-1611591475179-62cd347a1576?auto=format&fit=crop&w=1200&q=80',
    link: '/jewellery/daily',
  },
];

export function FeaturedJewelleryShowcase() {
  return (
    <section className="py-28 px-6 sm:px-12 bg-[#0A0A0A] text-[#F7F3EC] border-b border-[#B89B5E]/15">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-[#B89B5E]/20 pb-6 gap-4">
          <div>
            <span className="text-[10px] font-sans-refined tracking-[0.3em] text-[#B89B5E] uppercase block">
              ATELIER HIGHLIGHTS
            </span>
            <h2 className="text-2xl sm:text-4xl font-helvetica font-light tracking-wide uppercase mt-1">
              FEATURED JEWELLERY
            </h2>
          </div>
          <Link
            href="/contact"
            className="text-xs font-sans-refined text-[#B89B5E] hover:text-[#F7F3EC] transition-colors flex items-center space-x-1"
          >
            <span>INQUIRE FOR PRIVATE APPOINTMENT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group space-y-4 rounded-2xl p-6 bg-[#161616] border border-[#B89B5E]/20 hover:border-[#B89B5E] transition-all duration-500 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative w-full h-[320px] rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/occasion-hero.jpg';
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#0A0A0A]/80 px-3 py-1 rounded-full text-[9px] font-sans-refined text-[#B89B5E] border border-[#B89B5E]/30 uppercase backdrop-blur-md">
                    {item.category}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-helvetica text-[#F7F3EC] font-light uppercase tracking-wider group-hover:text-[#B89B5E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-serif-luxury text-[#F7F3EC]/60">
                    {item.gemDetails}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#B89B5E]/20 flex items-center justify-between">
                <span className="text-[10px] font-sans-refined text-[#B89B5E] tracking-wider uppercase">
                  PRICE UPON REQUEST
                </span>
                <Link
                  href="/contact"
                  className="text-xs font-sans-refined text-[#F7F3EC] hover:text-[#B89B5E] transition-colors flex items-center space-x-1"
                >
                  <span>REQUEST DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
