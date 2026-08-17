'use client';

import React from 'react';
import Link from 'next/link';
import { JEWELLERY_CATEGORIES } from '@/lib/vasundhara-data';
import { ArrowRight } from 'lucide-react';

export function JewelleryCollectionsSection() {
  return (
    <section className="py-28 px-6 sm:px-12 bg-[#0A0A0A] text-[#F7F3EC] border-b border-[#B89B5E]/15">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <span className="text-[10px] font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase block">
            CURATED DOMAINS
          </span>
          <h2 className="text-3xl sm:text-5xl font-helvetica font-light tracking-wide uppercase">
            JEWELLERY COLLECTIONS
          </h2>
          <p className="text-xs sm:text-sm font-serif-luxury text-[#F7F3EC]/70 max-w-xl mx-auto">
            Explore our four distinct jewellery worlds, thoughtfully created for grand occasions, everyday sparkle, soft new beginnings, and evening glamour.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {JEWELLERY_CATEGORIES.map((cat, idx) => (
            <Link
              key={cat.id}
              href={`/jewellery/${cat.slug}`}
              className="group relative rounded-2xl overflow-hidden border border-[#B89B5E]/20 bg-[#161616] p-8 h-[480px] flex flex-col justify-between transition-all duration-700 hover:border-[#B89B5E] shadow-xl"
            >
              <img
                src={cat.heroImage}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />

              {/* Number Badge */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-3xl font-helvetica font-extralight text-[#B89B5E]">
                  0{idx + 1}
                </span>
                <span className="text-[9px] font-sans-refined text-[#F7F3EC]/80 bg-[#0A0A0A]/80 px-3 py-1 rounded-full border border-[#B89B5E]/30 uppercase backdrop-blur-md">
                  {cat.subtitle}
                </span>
              </div>

              {/* Category Details */}
              <div className="relative z-10 space-y-3">
                <h3 className="text-2xl font-helvetica text-[#F7F3EC] uppercase tracking-wider font-light group-hover:text-[#B89B5E] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#F7F3EC]/70 font-serif-luxury leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
                <div className="pt-2 flex items-center space-x-2 text-xs font-sans-refined text-[#B89B5E] group-hover:translate-x-2 transition-transform">
                  <span>DISCOVER COLLECTION</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
