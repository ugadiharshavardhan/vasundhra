'use client';

import React from 'react';
import Link from 'next/link';
import { ABOUT_BRAND_STORY } from '@/lib/vasundhara-data';
import { ArrowRight, Sparkles } from 'lucide-react';

export function StoryBehindTheJewel() {
  return (
    <section className="py-28 px-6 sm:px-12 bg-[#0A0A0A] text-[#F7F3EC] border-b border-[#B89B5E]/15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Editorial Text Column */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase flex items-center space-x-2">
              <Sparkles className="w-3 h-3 text-[#B89B5E]" />
              <span>THE BRAND PHILOSOPHY</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-helvetica font-light tracking-wide uppercase leading-tight">
              THE STORY BEHIND THE JEWEL
            </h2>
            <p className="text-lg font-helvetica text-[#B89B5E] font-light italic pt-1">
              “{ABOUT_BRAND_STORY.headline}”
            </p>
          </div>

          <p className="text-xs sm:text-sm font-serif-luxury text-[#F7F3EC]/80 leading-relaxed">
            {ABOUT_BRAND_STORY.beginningStory}
          </p>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#B89B5E]/20">
            {ABOUT_BRAND_STORY.pillars.map((pillar, idx) => (
              <div key={idx} className="space-y-1">
                <h4 className="text-xs font-helvetica font-medium tracking-wider text-[#B89B5E] uppercase">
                  {pillar.title}
                </h4>
                <p className="text-[11px] font-serif-luxury text-[#F7F3EC]/60 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center space-x-3 px-6 py-3 rounded-full border border-[#B89B5E]/40 text-xs font-sans-refined text-[#F7F3EC] hover:bg-[#B89B5E]/10 hover:border-[#B89B5E] transition-all"
            >
              <span>READ OUR FULL BRAND STORY</span>
              <ArrowRight className="w-4 h-4 text-[#B89B5E]" />
            </Link>
          </div>
        </div>

        {/* Right Large Editorial Image */}
        <div className="lg:col-span-6 relative">
          <div className="relative w-full h-[520px] rounded-2xl overflow-hidden border border-[#B89B5E]/30 shadow-2xl">
            <img
              src="/images/hero-building.jpg"
              alt="The Art of Vasundhara Jewellery"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/occasion-hero.jpg';
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
