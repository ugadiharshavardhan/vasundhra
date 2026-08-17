import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { AppointmentCTASection } from '@/components/sections/AppointmentCTASection';
import { Footer } from '@/components/sections/Footer';
import { ArrowRight, Video, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Occasion Jewellery | Vasundhara Diamond Roof',
  description:
    'Jewellery for moments worth remembering. Explore royal Nizami chokers, grand emerald cascades, and solitaire bridal suites.',
};

export default function OccasionJewelleryPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F7F3EC] font-helvetica pt-24">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 px-6 sm:px-12 text-center border-b border-[#B89B5E]/20">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase flex items-center justify-center space-x-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B89B5E]" />
            <span>HERITAGE & CEREMONIES</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-helvetica font-light tracking-wide uppercase">
            OCCASION JEWELLERY
          </h1>
          <p className="text-sm sm:text-lg font-serif-luxury text-[#F7F3EC]/80 max-w-xl mx-auto italic">
            “Jewellery for moments worth remembering.”
          </p>
        </div>
      </section>

      {/* Featured Collection Banner */}
      <section className="py-20 px-6 sm:px-12 border-b border-[#B89B5E]/15">
        <div className="max-w-7xl mx-auto space-y-8">
          <span className="text-[10px] font-sans-refined tracking-[0.3em] text-[#B89B5E] uppercase block">
            FEATURED COLLECTION
          </span>
          <div className="relative w-full h-[480px] rounded-2xl overflow-hidden border border-[#B89B5E]/30 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2000&auto=format&fit=crop"
              alt="Occasion High Jewellery Suite"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <span className="text-[9px] font-sans-refined text-[#B89B5E] tracking-[0.2em] bg-[#0A0A0A]/80 px-3 py-1 rounded-full border border-[#B89B5E]/30 uppercase">
                  NIZAMI HERITAGE
                </span>
                <h3 className="text-2xl sm:text-3xl font-helvetica text-[#F7F3EC] uppercase font-light tracking-wide mt-2">
                  THE ROYAL NIZAM CHOKER SUITE
                </h3>
              </div>
              <div className="flex items-center space-x-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-[#B89B5E] text-[#0A0A0A] text-xs font-sans-refined tracking-[0.2em] hover:bg-[#F7F3EC] transition-colors uppercase"
                >
                  REQUEST DETAILS
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full border border-[#B89B5E]/40 text-[#F7F3EC] text-xs font-sans-refined tracking-[0.2em] hover:bg-[#B89B5E]/10 transition-colors uppercase flex items-center space-x-2"
                >
                  <Video className="w-3.5 h-3.5 text-[#B89B5E]" />
                  <span>BOOK A VIDEO CALL</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Jewels Grid */}
      <section className="py-20 px-6 sm:px-12 border-b border-[#B89B5E]/15">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="border-b border-[#B89B5E]/20 pb-4">
            <h2 className="text-2xl font-helvetica font-light text-[#F7F3EC] uppercase tracking-wide">
              CURATED OCCASION JEWELS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'ZAMBIAN EMERALD CASCADE',
                desc: 'Multi-strand Zambian emerald neckpiece with diamond halo motifs.',
                img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'POLKI & RUBY SAAT LADA',
                desc: 'Seven-layer royal Polki neckpiece interspersed with natural Burmese rubies.',
                img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'GRAND CHANDBALI EARRINGS',
                desc: 'Intricate gold crescent earrings set with uncut diamonds and South Sea pearl drops.',
                img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-[#161616] border border-[#B89B5E]/20 rounded-2xl p-6 space-y-4 hover:border-[#B89B5E] transition-all"
              >
                <div className="relative w-full h-[280px] rounded-xl overflow-hidden">
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
