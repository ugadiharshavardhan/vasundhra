import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { AppointmentCTASection } from '@/components/sections/AppointmentCTASection';
import { Footer } from '@/components/sections/Footer';
import { Sparkles, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Daily Jewellery | Vasundhara Diamond Roof',
  description:
    'Bringing sparkle into everyday life. Explore fluid 18k gold diamond line bracelets, floating pendants, and stackable solitaire rings.',
};

export default function DailyJewelleryPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#161616] font-helvetica pt-24">
      <Navbar />

      {/* Hero */}
      <section className="py-24 px-6 sm:px-12 text-center border-b border-[#B89B5E]/30 bg-[#F7F3EC]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase flex items-center justify-center space-x-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B89B5E]" />
            <span>EVERYDAY SPARKLE</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-helvetica font-light tracking-wide uppercase text-[#161616]">
            DAILY JEWELLERY
          </h1>
          <p className="text-sm sm:text-lg font-serif-luxury text-[#161616]/80 max-w-xl mx-auto italic">
            “Making everyday moments sparkle with effortless grace.”
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 px-6 sm:px-12 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl border border-[#B89B5E]/20">
            <img
              src="https://images.unsplash.com/photo-1611591475179-62cd347a1576?q=80&w=2000&auto=format&fit=crop"
              alt="Daily Jewellery Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <span className="text-[10px] font-sans-refined text-[#B89B5E] tracking-[0.25em] uppercase">
                LIGHTWEIGHT LUXURY
              </span>
              <h2 className="text-2xl sm:text-3xl font-helvetica font-light uppercase tracking-wide">
                EVERYDAY ELEGANCE
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pieces */}
      <section className="py-20 px-6 sm:px-12 bg-[#F7F3EC] border-t border-[#B89B5E]/20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-sans-refined text-[#B89B5E] tracking-[0.3em] uppercase block">
              SUBTLE STATEMENTS
            </span>
            <h2 className="text-3xl font-helvetica font-light uppercase text-[#161616]">
              FEATURED DAILY PIECES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'SOLARIS DIAMOND LINE BRACELET',
                category: 'BRACELETS',
                desc: 'Fluid 18K rose gold diamond tennis bracelet for daily wear.',
                img: 'https://images.unsplash.com/photo-1611591475179-62cd347a1576?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'AURA FLOATING SOLITAIRE DROP',
                category: 'NECKLACES',
                desc: 'Understated floating solitaire pendant on silk gold chain.',
                img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'STACKABLE DIAMOND BANDS',
                category: 'RINGS',
                desc: 'Slim 18K yellow gold pave diamond rings for effortless styling.',
                img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
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
                  <div className="absolute top-3 left-3 bg-[#F7F3EC] px-3 py-1 rounded-full text-[9px] font-sans-refined text-[#B89B5E] border border-[#B89B5E]/30 uppercase">
                    {item.category}
                  </div>
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
