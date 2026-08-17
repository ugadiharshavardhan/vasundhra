'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap, initGSAP } from '@/lib/gsap';
import { COCKTAIL_COLLECTION_DATA } from '@/lib/data';
import { Sparkles, ArrowRight, Eye, Gem } from 'lucide-react';

export function CocktailCollection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const activeItem = COCKTAIL_COLLECTION_DATA[activeItemIndex];

  useEffect(() => {
    initGSAP();

    const ctx = gsap.context(() => {
      gsap.from('.cocktail-animate', {
        y: 45,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      // Subtle emerald aura pulsing motion
      gsap.to('.emerald-glow', {
        scale: 1.15,
        opacity: 0.7,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cocktail"
      className="relative min-h-screen bg-[#060A09] text-[#FDFBF7] py-28 px-6 sm:px-12 md:px-20 overflow-hidden border-t border-[#046A38]/30"
    >
      {/* Background Sophisticated Evening Atmosphere & Emerald Aura */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#046A38]/20 rounded-full blur-[140px] pointer-events-none emerald-glow" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-[#a57b53]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="cocktail-animate space-y-4 max-w-3xl">
          <div className="flex items-center space-x-3 text-xs font-sans-refined tracking-[0.4em] text-[#00A86B] uppercase">
            <Sparkles className="w-4 h-4 text-[#00A86B]" />
            <span>EVENING ATELIER • HIGH JEWELLERY</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl tracking-tight text-[#FDFBF7]">
            COCKTAIL
          </h2>
          <p className="font-serif text-lg text-[#FDFBF7]/75 leading-relaxed">
            Dramatic evening statement pieces crafted with deep-tinted Zambian emeralds, rare black solitaires, and precision-paved diamonds meant to command the dark.
          </p>
        </div>

        {/* Hero Editorial Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase (Hero Jewellery Card) */}
          <div className="cocktail-animate lg:col-span-7 relative group">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#00A86B]/30 bg-[#0A120E]">
              {/* Image background with luxury overlay */}
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060A09] via-transparent to-transparent opacity-80" />

              {/* Top Gem Details Tag */}
              <div className="absolute top-6 left-6 flex items-center space-x-2 bg-[#060A09]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#00A86B]/40 text-[11px] font-sans-refined tracking-[0.2em] text-[#00A86B]">
                <Gem className="w-3.5 h-3.5" />
                <span>{activeItem.tag}</span>
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8 space-y-3">
                <p className="font-sans-refined text-xs tracking-[0.3em] text-[#a57b53]">
                  {activeItem.subtitle}
                </p>
                <h3 className="font-editorial text-2xl sm:text-4xl text-[#FDFBF7]">
                  {activeItem.title}
                </h3>
                <p className="font-serif text-sm text-[#FDFBF7]/80 line-clamp-2">
                  {activeItem.gemDetails}
                </p>
              </div>
            </div>
          </div>

          {/* Details & Selector Column */}
          <div className="cocktail-animate lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-sans-refined text-[10px] tracking-[0.4em] text-[#a57b53] uppercase block">
                FEATURED PIECE
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#FDFBF7]">
                {activeItem.title}
              </h3>
              <p className="font-serif text-base text-[#FDFBF7]/85 leading-relaxed">
                {activeItem.description}
              </p>
              <div className="p-4 rounded-xl bg-[#0A120E] border border-[#00A86B]/20 text-xs font-sans-refined tracking-[0.15em] text-[#00A86B]">
                {activeItem.gemDetails}
              </div>
            </div>

            {/* Item Switcher Buttons */}
            <div className="flex items-center space-x-4 pt-4 border-t border-[#00A86B]/20">
              {COCKTAIL_COLLECTION_DATA.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveItemIndex(idx)}
                  className={`px-5 py-2.5 rounded-full text-xs font-sans-refined tracking-[0.2em] transition-all border ${
                    activeItemIndex === idx
                      ? 'bg-[#00A86B] text-[#060A09] border-[#00A86B] font-semibold shadow-lg shadow-[#00A86B]/20'
                      : 'border-[#00A86B]/30 text-[#FDFBF7]/70 hover:border-[#00A86B]'
                  }`}
                >
                  0{idx + 1} — {item.title.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Explore Action */}
            <div className="pt-2">
              <a
                href="#bespoke"
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#a57b53] to-[#8C6438] text-[#060A09] font-sans-refined text-xs tracking-[0.25em] font-semibold hover:opacity-95 transition-all shadow-xl shadow-[#a57b53]/20 group"
              >
                <span>EXPLORE COCKTAIL COLLECTION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
