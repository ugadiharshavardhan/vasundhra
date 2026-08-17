'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap, initGSAP } from '@/lib/gsap';
import { BRAND_STORY_TIMELINE } from '@/lib/data';
import { Compass, Sparkles, BookOpen } from 'lucide-react';

export function BrandStoryTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  useEffect(() => {
    initGSAP();

    const ctx = gsap.context(() => {
      // Animate timeline nodes on scroll
      gsap.from('.timeline-item', {
        y: 50,
        opacity: 0,
        duration: 1.1,
        stagger: 0.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="story"
      className="relative min-h-screen bg-[#050505] text-[#FDFBF7] py-28 px-6 sm:px-12 md:px-20 overflow-hidden border-t border-[#a57b53]/20"
    >
      {/* Background Soft Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#a57b53]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-sans-refined tracking-[0.4em] text-[#a57b53] uppercase">
            <BookOpen className="w-4 h-4 text-[#a57b53]" />
            <span>EDITORIAL CHRONICLE • OUR JOURNEY</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl tracking-tight text-[#FDFBF7]">
            THE VASUNDHARA STORY
          </h2>
          <p className="font-serif text-lg text-[#FDFBF7]/75">
            An authentic legacy built on architectural diamond selection, master metallurgy, and generational trust.
          </p>
          <div className="w-16 h-[1px] bg-[#a57b53] mx-auto mt-4" />
        </div>

        {/* Timeline Grid Flow */}
        <div className="relative border-l border-[#a57b53]/30 pl-6 sm:pl-12 ml-4 sm:ml-12 space-y-16">
          {BRAND_STORY_TIMELINE.map((stage, idx) => (
            <div
              key={stage.id}
              className="timeline-item relative group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[55px] top-6 w-5 h-5 rounded-full bg-[#050505] border-2 border-[#a57b53] group-hover:bg-[#a57b53] transition-colors flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a57b53] group-hover:bg-[#050505]" />
              </div>

              {/* Text & Content (Left 7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="font-editorial text-2xl font-bold text-[#a57b53]">
                    {stage.stageNumber}
                  </span>
                  <span className="font-sans-refined text-xs tracking-[0.3em] text-[#FDFBF7]/50 uppercase">
                    • {stage.subtitle}
                  </span>
                </div>

                <h3 className="font-editorial text-3xl sm:text-4xl text-[#FDFBF7]">
                  {stage.title}
                </h3>

                <p className="font-serif text-base text-[#FDFBF7]/80 leading-relaxed">
                  {stage.description}
                </p>

                <div className="p-4 rounded-xl bg-[#161616]/80 border border-[#a57b53]/20 font-serif italic text-sm text-[#a57b53]">
                  “{stage.highlightText}”
                </div>
              </div>

              {/* Photo Showcase (Right 5 Cols) */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#a57b53]/30 shadow-xl group-hover:border-[#a57b53] transition-colors">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
