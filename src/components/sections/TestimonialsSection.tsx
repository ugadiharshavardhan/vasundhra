'use client';

import React, { useState } from 'react';
import { OFFICIAL_TESTIMONIALS } from '@/lib/vasundhara-data';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const testimonial = OFFICIAL_TESTIMONIALS[currentIdx];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % OFFICIAL_TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + OFFICIAL_TESTIMONIALS.length) % OFFICIAL_TESTIMONIALS.length);
  };

  return (
    <section className="py-28 px-6 sm:px-12 bg-[#0A0A0A] text-[#F7F3EC] border-b border-[#B89B5E]/15">
      <div className="max-w-5xl mx-auto space-y-12 text-center">
        <div className="space-y-3">
          <span className="text-[10px] font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase block">
            PATRON VOICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-helvetica font-light tracking-wide uppercase">
            VERIFIED TESTIMONIALS
          </h2>
        </div>

        {/* Editorial Single Quote Focus Layout */}
        <div className="relative bg-[#161616] border border-[#B89B5E]/30 rounded-3xl p-10 sm:p-16 shadow-2xl space-y-8 min-h-[320px] flex flex-col justify-between">
          <Quote className="w-10 h-10 text-[#B89B5E]/40 mx-auto" />

          <blockquote className="text-lg sm:text-2xl md:text-3xl font-helvetica font-light text-[#F7F3EC] leading-relaxed max-w-3xl mx-auto italic">
            “{testimonial.quote}”
          </blockquote>

          <div className="space-y-1">
            <h4 className="text-sm font-helvetica font-medium tracking-widest text-[#B89B5E] uppercase">
              {testimonial.author}
            </h4>
            <p className="text-xs font-sans-refined text-[#F7F3EC]/60">
              {testimonial.location} {testimonial.occasion ? `• ${testimonial.occasion}` : ''}
            </p>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center space-x-4 pt-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-[#B89B5E]/30 text-[#B89B5E] hover:border-[#B89B5E] hover:bg-[#B89B5E]/10 transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex space-x-2">
              {OFFICIAL_TESTIMONIALS.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIdx === idx ? 'bg-[#B89B5E] w-6' : 'bg-[#B89B5E]/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-[#B89B5E]/30 text-[#B89B5E] hover:border-[#B89B5E] hover:bg-[#B89B5E]/10 transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
