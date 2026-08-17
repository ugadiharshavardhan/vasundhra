import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navigation/Navbar';
import { JewelleryCollectionsSection } from '@/components/sections/JewelleryCollectionsSection';
import { FeaturedJewelleryShowcase } from '@/components/sections/FeaturedJewelleryShowcase';
import { JewelDetailsSection } from '@/components/sections/JewelDetailsSection';
import { AppointmentCTASection } from '@/components/sections/AppointmentCTASection';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'High Jewellery Collections | Vasundhara Diamond Roof',
  description:
    'Explore the high jewellery domains of Vasundhara Diamond Roof: Occasion, Daily, Baby, and Cocktail creations set with D-flawless solitaires, emeralds, and pearls.',
};

export default function JewelleryPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F7F3EC] font-helvetica pt-24">
      <Navbar />

      <section className="py-20 px-6 sm:px-12 text-center border-b border-[#B89B5E]/20">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase block">
            THE ATELIER COLLECTIONS
          </span>
          <h1 className="text-4xl sm:text-6xl font-helvetica font-light tracking-wide uppercase">
            HIGH JEWELLERY
          </h1>
          <p className="text-sm sm:text-base font-serif-luxury text-[#F7F3EC]/70 max-w-xl mx-auto">
            From monumental ceremony chokers to fluid daily diamond lines, discover jewellery crafted with a story.
          </p>
        </div>
      </section>

      <JewelleryCollectionsSection />
      <FeaturedJewelleryShowcase />
      <JewelDetailsSection />
      <AppointmentCTASection />
      <Footer />
    </main>
  );
}
