'use client';

import React from 'react';

export function TheWorldOfVasundhara() {
  return (
    <section className="relative py-28 px-6 sm:px-12 bg-[#0A0A0A] text-[#F7F3EC] overflow-hidden border-b border-[#B89B5E]/15">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <span className="text-[10px] sm:text-xs font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase block">
          THE WORLD OF VASUNDHARA
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-helvetica font-light tracking-wide leading-tight uppercase max-w-4xl mx-auto">
          “Jewellery that carries a story.”
        </h2>

        <p className="text-xs sm:text-sm font-serif-luxury text-[#F7F3EC]/70 max-w-2xl mx-auto leading-relaxed">
          Behind every facet lies an indelible memory. From hand-selected D-flawless solitaires to royal Nizami emeralds, Vasundhara transforms rare gems into living heirlooms.
        </p>

        {/* Editorial Parallax Hero Photograph */}
        <div className="relative w-full h-[450px] sm:h-[600px] mt-12 rounded-2xl overflow-hidden shadow-2xl border border-[#B89B5E]/20">
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2000&auto=format&fit=crop"
            alt="Vasundhara High Jewellery World"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-8 left-8 text-left">
            <p className="text-[10px] font-sans-refined tracking-[0.25em] text-[#B89B5E] uppercase">
              HIGH JEWELLERY ATELIER
            </p>
            <p className="text-sm font-helvetica text-[#F7F3EC] uppercase tracking-wider font-light mt-1">
              HYDERABAD • VIJAYAWADA • VISAKHAPATNAM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
