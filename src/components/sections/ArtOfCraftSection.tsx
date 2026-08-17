'use client';

import React from 'react';

const CRAFT_STEPS = [
  {
    step: '01',
    title: 'GEOLOGICAL SELECTION',
    description: 'Fewer than 0.1% of global rough diamonds meet Vasundhara standards for refractive clarity and spectral color.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop',
  },
  {
    step: '02',
    title: 'GOUACHE BLUEPRINTING',
    description: 'Every jewel begins as a hand-drawn Gouache painting calculating light refraction and structural weight.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
  },
  {
    step: '03',
    title: 'HERITAGE METALLURGY',
    description: 'Generational Hyderabad goldsmiths hand-forge platinum and 18K/22K gold backings under magnification.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop',
  },
  {
    step: '04',
    title: 'MIRROR POLISHING',
    description: 'Hand-finished over hundreds of hours until gold and platinum achieve living mirror brilliance.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
  },
];

export function ArtOfCraftSection() {
  return (
    <section className="py-28 px-6 sm:px-12 bg-[#0A0A0A] text-[#F7F3EC] border-b border-[#B89B5E]/15">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <span className="text-[10px] font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase block">
            SAVOIR-FAIRE
          </span>
          <h2 className="text-3xl sm:text-5xl font-helvetica font-light tracking-wide uppercase">
            THE ART OF CRAFT
          </h2>
          <p className="text-xs sm:text-sm font-serif-luxury text-[#F7F3EC]/70 max-w-xl mx-auto">
            A quiet dedication to metallurgical mastery. Hand-crafted in our Hyderabad atelier by master artisans.
          </p>
        </div>

        {/* 4 Macro Craft Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CRAFT_STEPS.map((craft) => (
            <div
              key={craft.step}
              className="group space-y-4 rounded-2xl p-6 bg-[#161616] border border-[#B89B5E]/20 hover:border-[#B89B5E] transition-all duration-500 shadow-lg"
            >
              <div className="relative w-full h-[220px] rounded-xl overflow-hidden">
                <img
                  src={craft.image}
                  alt={craft.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#0A0A0A]/80 px-2.5 py-1 rounded-md text-xs font-helvetica font-light text-[#B89B5E] border border-[#B89B5E]/30 backdrop-blur-sm">
                  {craft.step}
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-helvetica font-medium tracking-wider text-[#F7F3EC] uppercase group-hover:text-[#B89B5E] transition-colors">
                  {craft.title}
                </h3>
                <p className="text-xs font-serif-luxury text-[#F7F3EC]/60 leading-relaxed">
                  {craft.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
