'use client';

import React from 'react';
import Link from 'next/link';

export function AppointmentCTASection() {
  return (
    <section className="py-32 px-6 sm:px-12 bg-[#0A0A0A] text-[#F7F3EC] text-center border-b border-[#B89B5E]/15">
      <div className="max-w-4xl mx-auto space-y-8">
        <span className="text-[10px] sm:text-xs font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase block">
          PRIVATE SANCTUARY
        </span>

        <h2 className="text-4xl sm:text-6xl font-helvetica font-light tracking-wide uppercase">
          FIND YOUR JEWEL
        </h2>

        <div className="space-y-2 text-sm sm:text-base font-serif-luxury text-[#F7F3EC]/80 italic max-w-xl mx-auto">
          <p>A private conversation.</p>
          <p>A personal experience.</p>
          <p>A jewel chosen for your story.</p>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#B89B5E] text-[#0A0A0A] text-xs font-sans-refined tracking-[0.2em] font-medium hover:bg-[#F7F3EC] transition-colors uppercase"
          >
            BOOK AN APPOINTMENT
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#B89B5E]/50 text-[#F7F3EC] text-xs font-sans-refined tracking-[0.2em] hover:border-[#B89B5E] hover:bg-[#B89B5E]/10 transition-colors uppercase"
          >
            REQUEST DETAILS
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#B89B5E]/50 text-[#F7F3EC] text-xs font-sans-refined tracking-[0.2em] hover:border-[#B89B5E] hover:bg-[#B89B5E]/10 transition-colors uppercase"
          >
            BOOK A VIDEO CALL
          </Link>
        </div>
      </div>
    </section>
  );
}
