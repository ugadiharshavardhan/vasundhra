import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navigation/Navbar';
import { ABOUT_BRAND_STORY } from '@/lib/vasundhara-data';
import { AppointmentCTASection } from '@/components/sections/AppointmentCTASection';
import { Footer } from '@/components/sections/Footer';
import { Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — Brand Story & Philosophy | Vasundhara Diamond Roof',
  description:
    'Discover the story of Vasundhara Diamond Roof — founded more than two decades ago with a single customized gold armlet project.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F7F3EC] font-helvetica pt-24">
      <Navbar />

      {/* Hero */}
      <section className="py-24 px-6 sm:px-12 text-center border-b border-[#B89B5E]/20 bg-[#161616]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase flex items-center justify-center space-x-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B89B5E]" />
            <span>HERITAGE & CRAFTSMANSHIP</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-helvetica font-light tracking-wide uppercase">
            OUR STORY
          </h1>
          <p className="text-sm sm:text-lg font-serif-luxury text-[#F7F3EC]/80 max-w-xl mx-auto italic">
            “{ABOUT_BRAND_STORY.headline}”
          </p>
        </div>
      </section>

      {/* Large Editorial Photograph */}
      <section className="py-16 px-6 sm:px-12 border-b border-[#B89B5E]/15">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[520px] rounded-2xl overflow-hidden border border-[#B89B5E]/30 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2000&auto=format&fit=crop"
              alt="Vasundhara High Jewellery Atelier"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* The Story Behind the Jewel */}
      <section className="py-20 px-6 sm:px-12 border-b border-[#B89B5E]/15">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <span className="text-xs font-sans-refined tracking-[0.3em] text-[#B89B5E] uppercase block">
            THE STORY BEHIND THE JEWEL
          </span>
          <p className="text-base sm:text-xl font-serif-luxury text-[#F7F3EC]/90 leading-relaxed italic">
            {ABOUT_BRAND_STORY.philosophy}
          </p>
        </div>
      </section>

      {/* The Beginning */}
      <section className="py-20 px-6 sm:px-12 border-b border-[#B89B5E]/15 bg-[#161616]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 space-y-4">
            <span className="text-[10px] font-sans-refined text-[#B89B5E] tracking-[0.3em] uppercase block">
              MORE THAN TWO DECADES AGO
            </span>
            <h2 className="text-3xl font-helvetica font-light uppercase">
              THE BEGINNING
            </h2>
            <p className="text-sm font-serif-luxury text-[#F7F3EC]/80 leading-relaxed">
              {ABOUT_BRAND_STORY.beginningStory}
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-6">
            {ABOUT_BRAND_STORY.pillars.map((pillar, idx) => (
              <div key={idx} className="bg-[#0A0A0A] border border-[#B89B5E]/20 p-6 rounded-xl space-y-2">
                <h3 className="text-xs font-helvetica font-medium tracking-wider text-[#B89B5E] uppercase">
                  {pillar.title}
                </h3>
                <p className="text-xs font-serif-luxury text-[#F7F3EC]/60 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Vasundhara Philosophy */}
      <section className="py-24 px-6 sm:px-12 text-center border-b border-[#B89B5E]/15">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase block">
            THE VASUNDHARA PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-5xl font-helvetica font-light uppercase">
            “Every jewel has a story.”
          </h2>
          <p className="text-sm font-serif-luxury text-[#F7F3EC]/70 max-w-xl mx-auto leading-relaxed">
            We honor the intimacy of personal milestones. Every custom commission is treated with individual reverence, turning life's sacred moments into timeless treasures.
          </p>
        </div>
      </section>

      <AppointmentCTASection />
      <Footer />
    </main>
  );
}
