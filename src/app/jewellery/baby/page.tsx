import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { AppointmentCTASection } from '@/components/sections/AppointmentCTASection';
import { Footer } from '@/components/sections/Footer';
import { Sparkles, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Baby Jewellery | Vasundhara Diamond Roof',
  description:
    'Celebrating the arrival of a new light, happiness, and joy. Delicate 18K gold bangles, pearl Nazariyas, and sentimental heirlooms.',
};

export default function BabyJewelleryPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#161616] font-helvetica pt-24">
      <Navbar />

      {/* Hero */}
      <section className="py-24 px-6 sm:px-12 text-center border-b border-[#B89B5E]/20 bg-[#E8E3DA]/40">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase flex items-center justify-center space-x-2">
            <Heart className="w-3.5 h-3.5 text-[#B89B5E]" />
            <span>CELEBRATING NEW LIGHT & JOY</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-helvetica font-light tracking-wide uppercase text-[#161616]">
            BABY JEWELLERY
          </h1>
          <p className="text-sm sm:text-lg font-serif-luxury text-[#161616]/80 max-w-xl mx-auto italic">
            “Celebrating the arrival, happiness, and light of a new life.”
          </p>
        </div>
      </section>

      {/* A New Beginning Section */}
      <section className="py-20 px-6 sm:px-12 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[10px] font-sans-refined text-[#B89B5E] tracking-[0.3em] uppercase block">
              A NEW BEGINNING
            </span>
            <h2 className="text-3xl font-helvetica font-light uppercase text-[#161616]">
              DELICATE TREASURES FOR THE LITTLE ONE
            </h2>
            <p className="text-sm font-serif-luxury text-[#161616]/80 leading-relaxed">
              Crafted with warm 18K smooth gold, natural Basra pearls, and protective Nazariya beads. Every piece is meticulously hand-rounded for utmost tenderness and heirloom beauty.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-[#B89B5E] text-[#0A0A0A] text-xs font-sans-refined tracking-[0.2em] uppercase font-medium hover:bg-[#161616] hover:text-[#F7F3EC] transition-colors"
              >
                REQUEST DETAILS
              </Link>
            </div>
          </div>

          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl border border-[#B89B5E]/30">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600&auto=format&fit=crop"
              alt="Baby Jewellery Gold & Pearl Collection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Baby Collection Grid */}
      <section className="py-20 px-6 sm:px-12 bg-[#E8E3DA]/30 border-t border-[#B89B5E]/20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-sans-refined text-[#B89B5E] tracking-[0.3em] uppercase block">
              SENTIMENTAL HEIRLOOMS
            </span>
            <h2 className="text-3xl font-helvetica font-light uppercase text-[#161616]">
              THE BABY COLLECTION
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'SMOOTH GOLD KADA BANGLES',
                desc: 'Softly rounded 18K yellow gold bangles designed for sensitive skin.',
                img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'PEARL NAZARIYA BRACELETS',
                desc: 'Basra pearl and black onyx protective bead bracelets set in pure gold.',
                img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'FIRST SOLITAIRE PENDANT',
                desc: 'A tiny floating diamond charm celebrating baby’s milestone arrival.',
                img: 'https://images.unsplash.com/photo-1611591475179-62cd347a1576?q=80&w=1200&auto=format&fit=crop',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white border border-[#B89B5E]/30 rounded-2xl p-6 space-y-4 shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative w-full h-[260px] rounded-xl overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-helvetica text-[#161616] uppercase tracking-wider font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs font-serif-luxury text-[#161616]/70">{item.desc}</p>
                </div>
                <div className="pt-4 border-t border-[#B89B5E]/20 flex justify-between items-center text-xs">
                  <Link
                    href="/contact"
                    className="text-[#B89B5E] font-sans-refined hover:text-[#161616] transition-colors"
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
