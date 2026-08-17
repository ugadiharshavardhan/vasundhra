'use client';

import React, { useEffect, useRef } from 'react';
import { gsap, initGSAP } from '@/lib/gsap';
import { CONFIG } from '@/lib/config';
import { ShieldCheck, Gem, Compass } from 'lucide-react';

export function BrandStory() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    initGSAP();

    const ctx = gsap.context(() => {
      gsap.from('.story-card', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="heritage"
      className="relative min-h-screen bg-[#050505] text-[#f0f2f0] py-24 px-6 sm:px-12 md:px-20 z-30 border-t border-[#a57b53]/15"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-sans-refined text-xs tracking-[0.4em] text-[#a57b53] uppercase block">
            ESTABLISHED {CONFIG.brand.established} • {CONFIG.brand.location}
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl tracking-wider text-[#f0f2f0]">
            The Pillars of Vasundhara
          </h2>
          <div className="w-16 h-[1px] bg-[#a57b53] mx-auto mt-4" />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {[
            {
              icon: Gem,
              title: 'Rare Diamond Selection',
              desc: 'Every diamond in our collection is hand-curated for extraordinary brilliance, fire, and structural perfection.',
            },
            {
              icon: ShieldCheck,
              title: 'Uncompromised Heritage',
              desc: 'Spanning decades of royal craftsmanship, creating heirlooms that carry stories across generations.',
            },
            {
              icon: Compass,
              title: 'Custom Private Atelier',
              desc: 'Collaborate directly with master artisans in Hyderabad to craft bespoke high jewellery tailored exclusively to your vision.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="story-card glass-editorial p-8 sm:p-10 rounded-2xl flex flex-col space-y-6 hover:border-[#a57b53]/50 transition-all group hover:-translate-y-2 duration-500"
            >
              <div className="w-14 h-14 rounded-full border border-[#a57b53]/40 bg-[#050505]/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-[#a57b53]" />
              </div>
              <h3 className="font-editorial text-xl sm:text-2xl text-[#f0f2f0] tracking-wide">
                {item.title}
              </h3>
              <p className="font-serif text-base text-[#f0f2f0]/75 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Brand Statement */}
        <div className="text-center pt-12 border-t border-[#a57b53]/15">
          <p className="font-serif italic text-2xl sm:text-3xl text-[#a57b53]">
            “Jewellery is not merely ornament — it is architectural legacy frozen in gold and light.”
          </p>
          <p className="font-sans-refined text-xs tracking-[0.3em] text-[#f0f2f0]/60 mt-4 uppercase">
            — Vasundhara Diamond Roof Atelier
          </p>
        </div>
      </div>
    </section>
  );
}
