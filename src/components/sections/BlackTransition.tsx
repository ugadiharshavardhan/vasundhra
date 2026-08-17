'use client';

import React, { useEffect, useRef } from 'react';
import { gsap, initGSAP } from '@/lib/gsap';
import { Sparkles, Diamond } from 'lucide-react';

export function BlackTransition() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const emblemRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    initGSAP();

    const ctx = gsap.context(() => {
      // Animate central emblem light reveal
      gsap.fromTo(
        emblemRef.current,
        { scale: 0.7, opacity: 0, filter: 'blur(20px)' },
        {
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate text reveal with subtle delay
      gsap.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#050505] flex flex-col items-center justify-center px-6 py-24 text-center z-30 overflow-hidden"
    >
      {/* Subtle Warm Radial Ambient Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(165,123,83,0.15)_0%,rgba(5,5,5,0)_70%)] pointer-events-none" />

      {/* Center Golden Emblem Reveal */}
      <div
        ref={emblemRef}
        className="relative z-10 flex flex-col items-center justify-center space-y-6 mb-8"
      >
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-[#a57b53]/40 bg-[#161616]/60 backdrop-blur-xl flex items-center justify-center shadow-[0_0_80px_rgba(165,123,83,0.25)]">
          <Diamond className="w-10 h-10 sm:w-14 sm:h-14 text-[#a57b53] animate-pulse" />
          <div className="absolute inset-0 rounded-full border border-[#f0f2f0]/20 animate-ping opacity-20" />
        </div>

        <div className="flex items-center space-x-3 text-[#a57b53]">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#a57b53]/60" />
          <Sparkles className="w-4 h-4 text-[#a57b53]" />
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#a57b53]/60" />
        </div>
      </div>

      {/* Editorial Text Reveal */}
      <div ref={textRef} className="relative z-10 max-w-3xl space-y-6">
        <span className="font-sans-refined text-xs tracking-[0.4em] text-[#a57b53] uppercase block">
          WELCOME TO THE INTERIOR SANCTUARY
        </span>
        <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#f0f2f0] tracking-wide leading-tight">
          Where Heritage Meets High Jewellery Architecture
        </h2>
        <p className="font-serif text-lg sm:text-xl text-[#f0f2f0]/85 italic max-w-2xl mx-auto font-light leading-relaxed">
          Beyond the historic facade lies a private world of diamond artistry, timeless Indian craftsmanship, and uncompromised luxury.
        </p>

        <div className="pt-8">
          <div className="inline-flex items-center space-x-2 text-xs font-sans-refined tracking-[0.3em] text-[#f0f2f0]/70 border-b border-[#a57b53]/40 pb-1">
            <span>EXPLORE THE ATELIER COLLECTIONS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
