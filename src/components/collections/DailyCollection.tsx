'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap, initGSAP } from '@/lib/gsap';
import { DAILY_COLLECTION_DATA } from '@/lib/data';
import { Sun, ArrowRight, Feather } from 'lucide-react';

export function DailyCollection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const activeItem = DAILY_COLLECTION_DATA[activeItemIndex];

  useEffect(() => {
    initGSAP();

    const ctx = gsap.context(() => {
      gsap.from('.daily-animate', {
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="daily"
      className="relative min-h-screen bg-[#FDFBF7] text-[#1A1A1A] py-28 px-6 sm:px-12 md:px-20 overflow-hidden border-t border-[#a57b53]/20"
    >
      {/* Background Soft Natural Light Warm Gradients */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#F5EAD7]/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#EFE3CF]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="daily-animate space-y-4 max-w-3xl">
          <div className="flex items-center space-x-3 text-xs font-sans-refined tracking-[0.4em] text-[#a57b53] uppercase">
            <Sun className="w-4 h-4 text-[#a57b53]" />
            <span>DAYLIGHT ATELIER • ESSENTIAL LUXURY</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl tracking-tight text-[#1A1A1A]">
            DAILY
          </h2>
          <p className="font-serif text-lg text-[#1A1A1A]/75 leading-relaxed">
            Minimalist diamond lines, delicate floating solitaires, and supple rose gold creations tailored for fluid, everyday sophistication under natural light.
          </p>
        </div>

        {/* Hero Clean Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Information Column (Left) */}
          <div className="daily-animate lg:col-span-5 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="font-sans-refined text-[10px] tracking-[0.4em] text-[#a57b53] uppercase block">
                MINIMAL ARCHITECTURE
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#1A1A1A]">
                {activeItem.title}
              </h3>
              <p className="font-serif text-base text-[#1A1A1A]/80 leading-relaxed">
                {activeItem.description}
              </p>
              <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#a57b53]/20 text-xs font-sans-refined tracking-[0.15em] text-[#8C6438]">
                {activeItem.gemDetails}
              </div>
            </div>

            {/* Switcher Buttons */}
            <div className="flex items-center space-x-4 pt-4 border-t border-[#a57b53]/20">
              {DAILY_COLLECTION_DATA.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveItemIndex(idx)}
                  className={`px-5 py-2.5 rounded-full text-xs font-sans-refined tracking-[0.2em] transition-all border ${
                    activeItemIndex === idx
                      ? 'bg-[#1A1A1A] text-[#FDFBF7] border-[#1A1A1A] font-semibold'
                      : 'border-[#a57b53]/30 text-[#1A1A1A]/70 hover:border-[#1A1A1A]'
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
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#1A1A1A] text-[#FDFBF7] font-sans-refined text-xs tracking-[0.25em] font-semibold hover:bg-[#a57b53] hover:text-[#1A1A1A] transition-all shadow-xl shadow-[#1A1A1A]/10 group"
              >
                <span>EXPLORE DAILY ESSENTIALS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Visual Showcase (Right Hero Card) */}
          <div className="daily-animate lg:col-span-7 relative group order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#a57b53]/30 bg-[#F5EAD7]/50 shadow-2xl">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-transparent to-transparent opacity-60" />

              {/* Feather Tag */}
              <div className="absolute top-6 right-6 flex items-center space-x-2 bg-[#FDFBF7]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#a57b53]/30 text-[11px] font-sans-refined tracking-[0.2em] text-[#8C6438]">
                <Feather className="w-3.5 h-3.5" />
                <span>{activeItem.tag}</span>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-[#FDFBF7]/90 backdrop-blur-md border border-[#a57b53]/20 shadow-lg space-y-2">
                <p className="font-sans-refined text-[10px] tracking-[0.3em] text-[#a57b53] uppercase">
                  {activeItem.subtitle}
                </p>
                <h4 className="font-editorial text-xl sm:text-2xl text-[#1A1A1A]">
                  {activeItem.title}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
