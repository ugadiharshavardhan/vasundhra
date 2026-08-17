import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navigation/Navbar';
import { WeddingSection } from '@/components/sections/WeddingSection';
import { AppointmentCTASection } from '@/components/sections/AppointmentCTASection';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Royal Wedding Atelier | Vasundhara Diamond Roof',
  description:
    'Royal Indian bridal trousseaus, groom Sarpechs, Kantha emeralds, and solitaire engagement rings by Vasundhara Diamond Roof.',
};

export default function WeddingPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F7F3EC] font-helvetica pt-24">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 px-6 sm:px-12 text-center border-b border-[#B89B5E]/20">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase block">
            THE ROYAL WEDDING ATELIER
          </span>
          <h1 className="text-4xl sm:text-6xl font-helvetica font-light tracking-wide uppercase">
            SACRED WEDDING HEIRLOOMS
          </h1>
          <p className="text-sm sm:text-base font-serif-luxury text-[#F7F3EC]/80 max-w-xl mx-auto italic">
            “Crafting timeless adornments for the Bride, Groom, and eternal Engagement promises.”
          </p>
        </div>
      </section>

      <WeddingSection />
      <AppointmentCTASection />
      <Footer />
    </main>
  );
}
