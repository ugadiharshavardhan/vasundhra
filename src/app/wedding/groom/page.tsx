import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { AppointmentCTASection } from '@/components/sections/AppointmentCTASection';
import { Footer } from '@/components/sections/Footer';
import { Video, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: "Prāṇanāthaḥ — The Groom's Jewellery | Vasundhara Diamond Roof",
  description:
    'Prāṇanāthaḥ — Regal groom adornments. High-grade uncut Polki and emerald turban Sarpech embellishments and Kantha bead strands.',
};

export default function GroomJewelleryPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F7F3EC] font-helvetica pt-24">
      <Navbar />

      {/* Hero */}
      <section className="py-24 px-6 sm:px-12 text-center border-b border-[#B89B5E]/20 bg-[#161616]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase flex items-center justify-center space-x-2">
            <Shield className="w-3.5 h-3.5 text-[#B89B5E]" />
            <span>PRĀṆANĀTHAḤ</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-helvetica font-light tracking-wide uppercase">
            THE GROOM'S JEWELLERY
          </h1>
          <p className="text-sm sm:text-lg font-serif-luxury text-[#F7F3EC]/80 max-w-xl mx-auto italic">
            “Sophisticated masculine grandeur forged in deep gold, uncut Polki, and emerald tones.”
          </p>
        </div>
      </section>

      {/* Groom Hero Showcase */}
      <section className="py-16 px-6 sm:px-12 border-b border-[#B89B5E]/15">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-[#B89B5E]/30 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2000&auto=format&fit=crop"
              alt="Prāṇanāthaḥ Groom Sarpech & Kantha Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <span className="text-[9px] font-sans-refined text-[#B89B5E] tracking-[0.2em] bg-[#0A0A0A]/80 px-3 py-1 rounded-full border border-[#B89B5E]/30 uppercase">
                  PRĀṆANĀTHAḤ MASTERPIECE
                </span>
                <h2 className="text-2xl sm:text-4xl font-helvetica text-[#F7F3EC] font-light uppercase tracking-wide mt-2">
                  POLKI & EMERALD TURBAN EMBELLISHMENT (SARPECH)
                </h2>
              </div>
              <div className="flex items-center space-x-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-[#B89B5E] text-[#0A0A0A] text-xs font-sans-refined tracking-[0.2em] uppercase font-medium hover:bg-[#F7F3EC] transition-colors"
                >
                  REQUEST DETAILS
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full border border-[#B89B5E]/40 text-[#F7F3EC] text-xs font-sans-refined tracking-[0.2em] uppercase hover:bg-[#B89B5E]/10 transition-colors flex items-center space-x-2"
                >
                  <Video className="w-3.5 h-3.5 text-[#B89B5E]" />
                  <span>BOOK VIDEO CALL</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Groom Items */}
      <section className="py-20 px-6 sm:px-12 border-b border-[#B89B5E]/15">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="border-b border-[#B89B5E]/20 pb-4">
            <h2 className="text-2xl font-helvetica font-light text-[#F7F3EC] uppercase tracking-wide">
              REGAL GROOM COLLECTION
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'POLKI TURBAN SARPECH',
                desc: 'Uncut Polki diamond turban ornament featuring a central cabochon emerald drop.',
                img: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'EMERALD KANTHA BEAD HARAM',
                desc: 'Five-strand Zambian emerald bead necklace with 22K gold spacer rondelles.',
                img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'HAND-ENGRAVED GOLD CUFFLINKS',
                desc: '18K yellow gold cufflinks hand-carved with ancient royal motifs and solitaires.',
                img: 'https://images.unsplash.com/photo-1611591475179-62cd347a1576?q=80&w=1200&auto=format&fit=crop',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-[#161616] border border-[#B89B5E]/20 rounded-2xl p-6 space-y-4 shadow-xl hover:border-[#B89B5E] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
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
