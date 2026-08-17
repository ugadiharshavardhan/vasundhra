import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { AppointmentCTASection } from '@/components/sections/AppointmentCTASection';
import { Footer } from '@/components/sections/Footer';
import { Sparkles, Moon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cocktail Jewellery | Vasundhara Diamond Roof',
  description:
    'Evening glamour and statement jewels that shine brighter than gold. Zambian emerald rings, marquise solitaire halos, and nocturnal high jewellery.',
};

export default function CocktailJewelleryPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F7F3EC] font-helvetica pt-24">
      <Navbar />

      {/* Hero */}
      <section className="py-24 px-6 sm:px-12 text-center border-b border-[#B89B5E]/20 bg-[#161616]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase flex items-center justify-center space-x-2">
            <Moon className="w-3.5 h-3.5 text-[#B89B5E]" />
            <span>EVENING GLAMOUR & NOCTURNAL ALLURE</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-helvetica font-light tracking-wide uppercase">
            COCKTAIL JEWELLERY
          </h1>
          <p className="text-sm sm:text-lg font-serif-luxury text-[#F7F3EC]/80 max-w-xl mx-auto italic">
            “Statement jewels created to shine brighter than gold through the night.”
          </p>
        </div>
      </section>

      {/* After Dark Section */}
      <section className="py-20 px-6 sm:px-12 border-b border-[#B89B5E]/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[10px] font-sans-refined text-[#B89B5E] tracking-[0.3em] uppercase block">
              AFTER DARK
            </span>
            <h2 className="text-3xl sm:text-4xl font-helvetica font-light uppercase">
              STATEMENT JEWELS FOR EVENING SOIRÉES
            </h2>
            <p className="text-sm font-serif-luxury text-[#F7F3EC]/80 leading-relaxed">
              Designed with high-refraction Zambian emeralds, dark sapphires, and intense marquise solitaire halos. Made to captivate in low candlelight and ambient evening light.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-[#B89B5E] text-[#0A0A0A] text-xs font-sans-refined tracking-[0.2em] uppercase font-medium hover:bg-[#F7F3EC] transition-colors"
              >
                REQUEST DETAILS
              </Link>
            </div>
          </div>

          <div className="relative w-full h-[440px] rounded-2xl overflow-hidden border border-[#B89B5E]/30 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1600&auto=format&fit=crop"
              alt="Cocktail Emerald & Diamond Statement Ring"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Evening Collection */}
      <section className="py-20 px-6 sm:px-12 border-b border-[#B89B5E]/15">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-sans-refined text-[#B89B5E] tracking-[0.3em] uppercase block">
              NOCTURNAL COLLECTION
            </span>
            <h2 className="text-3xl font-helvetica font-light uppercase">
              EVENING COLLECTION
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'EMERALD NOCTURNE RING',
                desc: '8.5-carat Zambian emerald encased in marquise solitaire halos.',
                img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'MIDNIGHT ECLIPSE CHOKER',
                desc: 'Architectural black diamond and brilliant cut white gold necklace.',
                img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'MARQUISE CASCADE DROP EARRINGS',
                desc: 'Tiered marquise solitaire drop earrings crafted in platinum.',
                img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-[#161616] border border-[#B89B5E]/20 rounded-2xl p-6 space-y-4 shadow-xl hover:border-[#B89B5E] transition-all"
              >
                <div className="relative w-full h-[260px] rounded-xl overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-helvetica text-[#F7F3EC] uppercase tracking-wider font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs font-serif-luxury text-[#F7F3EC]/60">{item.desc}</p>
                </div>
                <div className="pt-4 border-t border-[#B89B5E]/20 flex justify-between items-center text-xs">
                  <Link
                    href="/contact"
                    className="text-[#B89B5E] font-sans-refined hover:text-[#F7F3EC] transition-colors"
                  >
                    REQUEST DETAILS →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTASection />
      <Footer />
    </main>
  );
}
