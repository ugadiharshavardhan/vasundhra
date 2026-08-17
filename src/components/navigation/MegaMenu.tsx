'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { JEWELLERY_CATEGORIES, WEDDING_CATEGORIES } from '@/lib/vasundhara-data';
import { ArrowRight, Sparkles } from 'lucide-react';

interface MegaMenuProps {
  type: 'jewellery' | 'wedding';
  onClose: () => void;
}

export function MegaMenu({ type, onClose }: MegaMenuProps) {
  const [activeJewelleryIdx, setActiveJewelleryIdx] = useState(0);
  const [activeWeddingIdx, setActiveWeddingIdx] = useState(0);

  if (type === 'jewellery') {
    const currentCategory = JEWELLERY_CATEGORIES[activeJewelleryIdx];

    return (
      <div
        onMouseLeave={onClose}
        className="absolute top-full left-0 w-full bg-[#161616]/95 backdrop-blur-2xl border-b border-[#B89B5E]/20 text-[#F7F3EC] shadow-2xl transition-all duration-300 z-50 animate-fadeIn"
      >
        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-12 gap-10 items-center">
          {/* Left Column: Category Links */}
          <div className="col-span-4 border-r border-[#B89B5E]/20 pr-8 space-y-6">
            <div className="flex items-center space-x-2 text-[10px] font-sans-refined text-[#B89B5E] tracking-[0.25em]">
              <Sparkles className="w-3 h-3 text-[#B89B5E]" />
              <span>HIGH JEWELLERY COLLECTIONS</span>
            </div>

            <div className="space-y-4">
              {JEWELLERY_CATEGORIES.map((cat, idx) => {
                const isActive = activeJewelleryIdx === idx;
                return (
                  <Link
                    key={cat.id}
                    href={`/jewellery/${cat.slug}`}
                    onMouseEnter={() => setActiveJewelleryIdx(idx)}
                    onClick={onClose}
                    className={`group flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-[#B89B5E]/15 border-l-2 border-[#B89B5E] pl-4 text-[#F7F3EC]'
                        : 'text-[#F7F3EC]/60 hover:text-[#F7F3EC] hover:translate-x-1'
                    }`}
                  >
                    <div>
                      <h4 className="font-helvetica text-sm tracking-[0.15em] font-medium uppercase">
                        {cat.title}
                      </h4>
                      <p className="text-[11px] text-[#F7F3EC]/50 font-serif-luxury mt-0.5">
                        {cat.subtitle}
                      </p>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 transition-all duration-300 ${
                        isActive ? 'text-[#B89B5E] opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            <Link
              href="/jewellery"
              onClick={onClose}
              className="inline-flex items-center space-x-2 text-[11px] font-sans-refined text-[#B89B5E] hover:text-[#F7F3EC] transition-colors pt-2"
            >
              <span>VIEW ALL JEWELLERY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Middle Column: Large Featured Image & Description */}
          <div className="col-span-5 space-y-4">
            <div className="relative w-full h-[280px] rounded-xl overflow-hidden group shadow-lg">
              <img
                src={currentCategory.heroImage}
                alt={currentCategory.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[9px] font-sans-refined text-[#B89B5E] tracking-[0.2em] bg-[#161616]/80 px-2.5 py-1 rounded-full border border-[#B89B5E]/30 backdrop-blur-md">
                  {currentCategory.tagline}
                </span>
                <h3 className="text-lg font-helvetica font-light text-[#F7F3EC] tracking-wider uppercase pt-1">
                  {currentCategory.title}
                </h3>
              </div>
            </div>

            <p className="text-xs text-[#F7F3EC]/70 leading-relaxed font-serif-luxury line-clamp-2">
              {currentCategory.description}
            </p>
          </div>

          {/* Right Column: Small Supporting Editorial Image */}
          <div className="col-span-3 space-y-3">
            <div className="relative w-full h-[200px] rounded-xl overflow-hidden border border-[#B89B5E]/20">
              <img
                src={currentCategory.supportingImage}
                alt={currentCategory.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <Link
                href={`/jewellery/${currentCategory.slug}`}
                onClick={onClose}
                className="inline-block text-[10px] font-sans-refined text-[#B89B5E] uppercase tracking-[0.2em] hover:underline"
              >
                DISCOVER {currentCategory.title} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // WEDDING MEGA MENU
  const currentWeddingCat = WEDDING_CATEGORIES[activeWeddingIdx];

  return (
    <div
      onMouseLeave={onClose}
      className="absolute top-full left-0 w-full bg-[#161616]/95 backdrop-blur-2xl border-b border-[#B89B5E]/20 text-[#F7F3EC] shadow-2xl transition-all duration-300 z-50 animate-fadeIn"
    >
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#B89B5E]/20">
          <div>
            <span className="text-[10px] font-sans-refined text-[#B89B5E] tracking-[0.25em] block uppercase">
              ROYAL WEDDING ATELIER
            </span>
            <h3 className="text-xl font-helvetica text-[#F7F3EC] tracking-wide font-light">
              BRIDAL, GROOM & ENGAGEMENT HEIRLOOMS
            </h3>
          </div>
          <Link
            href="/wedding"
            onClick={onClose}
            className="text-[11px] font-sans-refined text-[#B89B5E] hover:text-[#F7F3EC] transition-colors"
          >
            EXPLORE WEDDING WORLD →
          </Link>
        </div>

        {/* 3 Editorial Image Panels */}
        <div className="grid grid-cols-3 gap-6">
          {WEDDING_CATEGORIES.map((item, idx) => {
            const isActive = activeWeddingIdx === idx;
            return (
              <Link
                key={item.id}
                href={`/wedding/${item.slug}`}
                onMouseEnter={() => setActiveWeddingIdx(idx)}
                onClick={onClose}
                className={`group relative rounded-xl overflow-hidden border transition-all duration-500 flex flex-col justify-end p-6 h-[320px] ${
                  isActive
                    ? 'border-[#B89B5E] shadow-2xl scale-[1.02]'
                    : 'border-[#B89B5E]/20 opacity-80 hover:opacity-100'
                }`}
              >
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/40 to-transparent" />

                <div className="relative z-10 space-y-1">
                  {item.traditionalName && (
                    <span className="text-[10px] font-sans-refined text-[#B89B5E] tracking-[0.25em]">
                      {item.traditionalName}
                    </span>
                  )}
                  <h4 className="text-lg font-helvetica text-[#F7F3EC] tracking-wider uppercase font-medium">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#F7F3EC]/70 font-serif-luxury line-clamp-2">
                    {item.description}
                  </p>
                  <div className="pt-2 flex items-center space-x-1 text-[10px] font-sans-refined text-[#B89B5E]">
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
