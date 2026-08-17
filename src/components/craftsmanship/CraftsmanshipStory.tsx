'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap, initGSAP } from '@/lib/gsap';
import { CRAFTSMANSHIP_STAGES } from '@/lib/data';
import { ShieldCheck, Compass, Sparkles, Layers, ChevronRight, Award } from 'lucide-react';

export function CraftsmanshipStory() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollTrackRef = useRef<HTMLDivElement | null>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    initGSAP();

    const ctx = gsap.context(() => {
      const track = scrollTrackRef.current;
      const container = containerRef.current;
      if (!track || !container) return;

      // Horizontal pin & scroll animation for desktop
      const totalWidth = track.scrollWidth - window.innerWidth;

      if (window.innerWidth >= 1024) {
        gsap.to(track, {
          x: -totalWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${track.scrollWidth}`,
            onUpdate: (self) => {
              const stageIdx = Math.min(
                3,
                Math.floor(self.progress * CRAFTSMANSHIP_STAGES.length)
              );
              setActiveStage(stageIdx);
            },
          },
        });
      } else {
        // Vertical scroll trigger for mobile
        gsap.from('.craft-mobile-card', {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="craftsmanship"
      className="relative bg-[#050505] text-[#FDFBF7] py-24 lg:py-0 overflow-hidden border-t border-[#a57b53]/20"
    >
      {/* Editorial Header Bar */}
      <div className="lg:absolute top-12 left-12 right-12 z-20 flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 sm:px-12 pointer-events-none">
        <div className="space-y-1">
          <span className="font-sans-refined text-xs tracking-[0.4em] text-[#a57b53] uppercase block">
            CINEMATIC ARCHITECTURE • SAVOIR-FAIRE
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#FDFBF7]">
            THE CRAFTSMANSHIP STORY
          </h2>
        </div>

        {/* Stage Navigation Pills (Desktop) */}
        <div className="hidden lg:flex items-center space-x-3 pointer-events-auto bg-[#161616]/80 backdrop-blur-md p-2 rounded-full border border-[#a57b53]/30">
          {CRAFTSMANSHIP_STAGES.map((stg, idx) => (
            <button
              key={stg.id}
              onClick={() => {
                setActiveStage(idx);
                // Scroll into view logic handled gracefully
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-sans-refined tracking-[0.2em] transition-all ${
                activeStage === idx
                  ? 'bg-[#a57b53] text-[#050505] font-semibold'
                  : 'text-[#FDFBF7]/60 hover:text-[#FDFBF7]'
              }`}
            >
              {stg.stageNumber}. {stg.title}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Horizontal Scroll Track */}
      <div className="hidden lg:block h-screen w-full overflow-hidden relative">
        <div
          ref={scrollTrackRef}
          className="flex h-full w-[400vw] items-center pt-24 pb-12"
        >
          {CRAFTSMANSHIP_STAGES.map((stage, idx) => (
            <div
              key={stage.id}
              className="w-screen h-full flex-shrink-0 flex items-center justify-center px-16 relative"
            >
              <div className="max-w-6xl w-full grid grid-cols-12 gap-12 items-center bg-[#0D0D0D] border border-[#a57b53]/25 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
                {/* Stage Watermark Number */}
                <span className="absolute -top-10 -right-10 font-editorial text-[220px] font-bold text-[#a57b53]/5 select-none pointer-events-none">
                  {stage.stageNumber}
                </span>

                {/* Left Macro Imagery Showcase */}
                <div className="col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#a57b53]/30 group">
                  <img
                    src={stage.macroImage}
                    alt={stage.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 bg-[#050505]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#a57b53]/40 text-xs font-sans-refined tracking-[0.2em] text-[#a57b53]">
                    STAGE {stage.stageNumber} — {stage.technique}
                  </div>
                </div>

                {/* Right Editorial Story & Details */}
                <div className="col-span-6 space-y-6 relative z-10">
                  <div className="space-y-2">
                    <span className="font-sans-refined text-xs tracking-[0.3em] text-[#a57b53] uppercase">
                      {stage.subtitle}
                    </span>
                    <h3 className="font-editorial text-4xl text-[#FDFBF7]">
                      {stage.title}
                    </h3>
                  </div>

                  <p className="font-serif text-lg text-[#FDFBF7]/85 leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Craft Callout Card */}
                  <div className="p-6 rounded-2xl bg-[#161616] border border-[#a57b53]/25 space-y-3">
                    <div className="flex items-center space-x-3 text-[#a57b53]">
                      <Award className="w-5 h-5" />
                      <span className="font-sans-refined text-xs tracking-[0.2em] uppercase font-semibold">
                        CRAFTSMANSHIP DETAIL
                      </span>
                    </div>
                    <p className="font-serif text-sm text-[#FDFBF7]/90">
                      {stage.craftDetail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Stacked Editorial Flow */}
      <div className="lg:hidden px-6 space-y-12">
        {CRAFTSMANSHIP_STAGES.map((stage) => (
          <div
            key={stage.id}
            className="craft-mobile-card bg-[#0D0D0D] border border-[#a57b53]/25 rounded-2xl p-6 space-y-6"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#a57b53]/30">
              <img
                src={stage.macroImage}
                alt={stage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#050505]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#a57b53]/40 text-[10px] font-sans-refined text-[#a57b53]">
                {stage.stageNumber} • {stage.technique}
              </div>
            </div>

            <div className="space-y-3">
              <span className="font-sans-refined text-[10px] tracking-[0.3em] text-[#a57b53] uppercase block">
                {stage.subtitle}
              </span>
              <h3 className="font-editorial text-2xl text-[#FDFBF7]">
                {stage.title}
              </h3>
              <p className="font-serif text-sm text-[#FDFBF7]/80 leading-relaxed">
                {stage.description}
              </p>
              <div className="p-4 rounded-xl bg-[#161616] border border-[#a57b53]/20 text-xs font-serif text-[#a57b53]">
                ✦ {stage.craftDetail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
