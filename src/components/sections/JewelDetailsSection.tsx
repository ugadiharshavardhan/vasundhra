'use client';

import React from 'react';
import { JEWEL_MATERIALS } from '@/lib/vasundhara-data';

export function JewelDetailsSection() {
  return (
    <section className="py-28 px-6 sm:px-12 bg-[#0A0A0A] text-[#F7F3EC] border-b border-[#B89B5E]/15">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <span className="text-[10px] font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase block">
            MATERIAL SPECTRUM
          </span>
          <h2 className="text-3xl sm:text-5xl font-helvetica font-light tracking-wide uppercase">
            THE DETAILS MATTER
          </h2>
          <p className="text-xs sm:text-sm font-serif-luxury text-[#F7F3EC]/70 max-w-xl mx-auto">
            Five cornerstone elements forged by nature and elevated by Nizami handcraft.
          </p>
        </div>

        {/* 5 Material Visual Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {JEWEL_MATERIALS.map((material) => (
            <div
              key={material.id}
              className="group relative rounded-2xl overflow-hidden border border-[#B89B5E]/20 bg-[#161616] h-[380px] flex flex-col justify-end p-6 transition-all duration-500 hover:border-[#B89B5E] hover:shadow-2xl"
            >
              <img
                src={material.image}
                alt={material.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-90" />

              <div className="relative z-10 space-y-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-[9px] font-sans-refined text-[#B89B5E] tracking-[0.2em] uppercase block">
                  {material.tagline}
                </span>
                <h3 className="text-xl font-helvetica text-[#F7F3EC] uppercase tracking-wider font-light group-hover:text-[#B89B5E] transition-colors">
                  {material.name}
                </h3>
                <p className="text-xs text-[#F7F3EC]/75 font-serif-luxury leading-relaxed transition-opacity duration-500 opacity-0 group-hover:opacity-100 line-clamp-3">
                  {material.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
