'use client';

import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { CinematicExteriorHero } from '@/components/hero/CinematicExteriorHero';
import { SignatureJewellery } from '@/components/sections/SignatureJewellery';
import { JewelleryCollectionsSection } from '@/components/sections/JewelleryCollectionsSection';
import { WeddingSection } from '@/components/sections/WeddingSection';
import { StoryBehindTheJewel } from '@/components/sections/StoryBehindTheJewel';
import { ArtOfCraftSection } from '@/components/sections/ArtOfCraftSection';
import { JewelDetailsSection } from '@/components/sections/JewelDetailsSection';
import { FeaturedJewelleryShowcase } from '@/components/sections/FeaturedJewelleryShowcase';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { AppointmentCTASection } from '@/components/sections/AppointmentCTASection';
import { BoutiquesSection } from '@/components/sections/BoutiquesSection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-[#F7F3EC] selection:bg-[#B89B5E] selection:text-[#0A0A0A] overflow-x-hidden font-helvetica">
      {/* Editorial Floating Navbar with Hover Mega Menus */}
      <Navbar />

      {/* 01. Seamless Entrance Sequence (Frames 01-08 -> Frame 09 Dark Interior -> World of Vasundhara Reveal) */}
      <section id="hero">
        <CinematicExteriorHero />
      </section>

      {/* 02. Signature Jewellery Asymmetric Magazine Layout */}
      <section id="signature">
        <SignatureJewellery />
      </section>

      {/* 03. Jewellery Collections (Occasion, Daily, Baby, Cocktail) */}
      <section id="jewellery-collections">
        <JewelleryCollectionsSection />
      </section>

      {/* 04. Royal Wedding Atelier (Bride, Groom, Engagement) */}
      <section id="wedding-collections">
        <WeddingSection />
      </section>

      {/* 05. The Story Behind The Jewel (Pillars & Factual Beginnings) */}
      <section id="story">
        <StoryBehindTheJewel />
      </section>

      {/* 06. The Art of Craft (Macro Craftsmen Metallurgy) */}
      <section id="craft">
        <ArtOfCraftSection />
      </section>

      {/* 07. The Details Matter (Gold, Diamonds, Pearls, Kundan, Polki) */}
      <section id="details">
        <JewelDetailsSection />
      </section>

      {/* 08. Featured Jewellery Atelier Selection */}
      <section id="featured">
        <FeaturedJewelleryShowcase />
      </section>

      {/* 09. Verified Patron Testimonials */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>

      {/* 10. Find Your Jewel - Private Suite Appointment CTA */}
      <section id="appointment">
        <AppointmentCTASection />
      </section>

      {/* 11. Boutique Sanctuaries (Hyderabad, Vijayawada, Visakhapatnam) */}
      <section id="boutiques">
        <BoutiquesSection />
      </section>

      {/* 12. Premium Editorial Footer */}
      <Footer />
    </main>
  );
}
