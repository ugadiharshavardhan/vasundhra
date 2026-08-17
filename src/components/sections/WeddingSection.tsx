'use client';

import React from 'react';
import Link from 'next/link';
import { WEDDING_CATEGORIES } from '@/lib/vasundhara-data';
import { ArrowRight } from 'lucide-react';

export function WeddingSection() {
  return (
    <section className="py-28 px-6 sm:px-12 bg-[#0A0A0A] text-[#F7F3EC] border-b border-[#B89B5E]/15">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#B89B5E]/20 pb-8 gap-4">
          <div>
            <span className="text-[10px] font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase block">
              SACRED UNION
            </span>
            <h2 className="text-3xl sm:text-5xl font-helvetica font-light tracking-wide uppercase mt-1">
              THE ROYAL WEDDING ATELIER
            </h2>
          </div>
          <Link
            href="/wedding"
            className="text-xs font-sans-refined text-[#B89B5E] hover:text-[#F7F3EC] transition-colors flex items-center space-x-1"
          >
            <span>DISCOVER ALL WEDDING HEIRLOOMS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Editorial Panels: Bride, Groom, Engagement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WEDDING_CATEGORIES.map((wCategory) => (
            <Link
              key={wCategory.id}
              href={`/wedding/${wCategory.slug}`}
              className="group relative rounded-2xl overflow-hidden border border-[#B89B5E]/20 bg-[#161616] h-[520px] flex flex-col justify-end p-8 transition-all duration-700 hover:border-[#B89B5E] hover:-translate-y-1 shadow-2xl"
            >
              <img
                src={wCategory.heroImage}
                alt={wCategory.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

              <div className="relative z-10 space-y-2">
                {wCategory.traditionalName && (
                  <span className="text-[10px] font-sans-refined text-[#B89B5E] tracking-[0.25em] uppercase block">
                    {wCategory.traditionalName}
                  </span>
                )}
                <h3 className="text-2xl font-helvetica text-[#F7F3EC] uppercase tracking-wider font-light group-hover:text-[#B89B5E] transition-colors">
                  {wCategory.title}
                </h3>
                <p className="text-xs text-[#F7F3EC]/70 font-serif-luxury leading-relaxed line-clamp-2">
                  {wCategory.description}
                </p>
                <div className="pt-2 flex items-center space-x-2 text-xs font-sans-refined text-[#B89B5E] group-hover:translate-x-2 transition-transform">
                  <span>EXPLORE {wCategory.slug.toUpperCase()}</span>
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
