'use client';

import React, { useState } from 'react';
import { CollectionScene } from './CollectionScene';
import { Sparkles, Heart, Crown, ChevronRight, Gem } from 'lucide-react';

interface StageData {
  id: 'ENGAGEMENT' | 'MEHENDI' | 'WEDDING' | 'RECEPTION';
  num: string;
  teluguName: string;
  title: string;
  subtitle: string;
  desc: string;
  pieces: string[];
  goldType: string;
  diamondSpecs: string;
}

const STAGES: StageData[] = [
  {
    id: 'ENGAGEMENT',
    num: '01',
    teluguName: 'నిశ్చితార్థం',
    title: 'THE PROMISE OF FOREVER',
    subtitle: 'Solitaire Rings & Heritage Bands',
    desc: 'Pure D-color solitaire diamonds cut with 58 precision facets, mounted in 18k white gold and platinum architectural settings.',
    pieces: ['Solitaire Engagement Ring', 'Heritage Diamond Bands', 'Ear Studs'],
    goldType: '18K White Gold & Platinum',
    diamondSpecs: 'D-Color IF Solitaire • 5.2 Carats',
  },
  {
    id: 'MEHENDI',
    num: '02',
    teluguName: 'పసపు వేడుక',
    title: 'THE FLORAL KUNDAN CELEBRATION',
    subtitle: '22K Uncut Diamonds & Intricate Chokers',
    desc: 'Vibrant handcrafted Kundan and Polki chokers woven with South Sea pearls, honoring traditional royal celebratory ceremonies.',
    pieces: ['Kundan Choker Set', 'Floral Polki Earrings', 'Haath Phool'],
    goldType: '22K Yellow Gold & Uncut Polki',
    diamondSpecs: 'Hand-cut Syndicate Polki • 24.5 Carats',
  },
  {
    id: 'WEDDING',
    num: '03',
    teluguName: 'కల్యాణం',
    title: 'THE ROYAL NIZAM HARAM',
    subtitle: 'Grand Nizam Emerald & Diamond Masterpieces',
    desc: 'The pinnacle of bridal high jewellery: a multi-tier Nizam diamond haram centerpiece with Zambian emerald drops.',
    pieces: ['Grand Nizam Haram', 'Bridal Crown Vanki', 'Kanti Choker', 'Matha Patti'],
    goldType: '18K Yellow Gold & Pure Platinum',
    diamondSpecs: 'VVS1 Diamonds & Royal Emeralds • 68.4 Carats',
  },
  {
    id: 'RECEPTION',
    num: '04',
    teluguName: 'విందు వేడుక',
    title: 'THE MODERN CASCADE',
    subtitle: 'Contemporary High Jewellery & Statement Bangles',
    desc: 'Architectural diamond waterfall necklaces designed for evening elegance, catching light with every movement.',
    pieces: ['Diamond Cascade Necklace', 'Kadas & Bangles', 'Chandelier Earrings'],
    goldType: '18K Rose & White Gold',
    diamondSpecs: 'Brilliant Round & Baguette Diamonds • 42.0 Carats',
  },
];

export function WeddingCollection() {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const activeStage = STAGES[activeStageIdx];

  return (
    <section
      id="wedding"
      className="relative min-h-screen bg-[#050505] text-[#f0f2f0] py-24 px-6 sm:px-12 md:px-20 z-30 border-t border-[#a57b53]/15 overflow-hidden"
    >
      {/* Background Radial Light Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(165,123,83,0.12)_0%,rgba(5,5,5,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center space-x-3 text-[#a57b53]">
            <Crown className="w-5 h-5 text-[#a57b53]" />
            <span className="font-sans-refined text-xs tracking-[0.4em] uppercase text-[#a57b53]">
              THE BRIDAL JOURNEY
            </span>
            <Crown className="w-5 h-5 text-[#a57b53]" />
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl text-[#f0f2f0] tracking-wider uppercase">
            WEDDING COLLECTION
          </h2>

          <p className="font-serif text-lg sm:text-xl text-[#f0f2f0]/80 italic max-w-xl mx-auto font-light">
            Four sacred chapters of Indian bridal elegance, preserved in gold, diamonds, and royal Nizam artistry.
          </p>

          <div className="w-20 h-[1px] bg-[#a57b53] mx-auto mt-4" />
        </div>

        {/* 4-Stage Interactive Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#121212]/60 p-2 rounded-2xl border border-[#a57b53]/20 backdrop-blur-xl">
          {STAGES.map((stg, idx) => {
            const isActive = idx === activeStageIdx;
            return (
              <button
                key={stg.id}
                onClick={() => setActiveStageIdx(idx)}
                className={`py-4 px-3 rounded-xl transition-all duration-300 flex flex-col items-center justify-center space-y-1 text-center font-sans-refined text-xs tracking-[0.2em] ${
                  isActive
                    ? 'bg-[#a57b53] text-[#050505] font-semibold shadow-[0_0_20px_rgba(165,123,83,0.3)]'
                    : 'text-[#f0f2f0]/70 hover:text-[#f0f2f0] hover:bg-[#161616]/60'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] opacity-80">{stg.num}.</span>
                  <span>{stg.id}</span>
                </div>
                <span className="font-serif text-[11px] normal-case opacity-90 italic">
                  {stg.teluguName}
                </span>
              </button>
            );
          })}
        </div>

        {/* Stage Content Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-6">
          {/* Left Column: 3D Interactive Stage Jewellery Canvas */}
          <div className="lg:col-span-7 h-[450px] sm:h-[550px] w-full rounded-3xl bg-[#0a0a0a] border border-[#a57b53]/25 overflow-hidden relative shadow-[0_0_60px_rgba(165,123,83,0.1)]">
            <div className="absolute top-6 left-6 z-20 flex items-center space-x-3 bg-[#161616]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#a57b53]/30">
              <Sparkles className="w-4 h-4 text-[#a57b53]" />
              <span className="font-sans-refined text-[10px] tracking-[0.3em] text-[#f0f2f0]">
                CHAPTER {activeStage.num} • {activeStage.id}
              </span>
            </div>

            <CollectionScene stage={activeStage.id} accentColor="#a57b53" />
          </div>

          {/* Right Column: Editorial Stage Details & Pieces List */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-serif text-lg italic text-[#a57b53] block mb-1">
                {activeStage.teluguName} — {activeStage.subtitle}
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#f0f2f0] tracking-wide leading-tight uppercase">
                {activeStage.title}
              </h3>
              <div className="w-16 h-[1px] bg-[#a57b53] mt-4" />
            </div>

            <p className="font-serif text-base sm:text-lg text-[#f0f2f0]/80 leading-relaxed font-light">
              {activeStage.desc}
            </p>

            {/* Included Jewellery Pieces List */}
            <div className="space-y-3 pt-2">
              <span className="font-sans-refined text-[10px] tracking-[0.3em] text-[#a57b53] block uppercase">
                FEATURED CREATIONS IN THIS SUITE
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans-refined text-[#f0f2f0]/90">
                {activeStage.pieces.map((piece, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 p-2.5 rounded-lg bg-[#161616]/40 border border-[#a57b53]/15"
                  >
                    <Gem className="w-3.5 h-3.5 text-[#a57b53] shrink-0" />
                    <span>{piece}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Material Specifications */}
            <div className="p-4 rounded-xl bg-[#161616]/60 border border-[#a57b53]/20 flex justify-between items-center text-xs font-sans-refined">
              <div>
                <span className="text-[#a57b53] block text-[9px] tracking-widest">GOLD SPECIFICATION</span>
                <span className="text-[#f0f2f0]">{activeStage.goldType}</span>
              </div>
              <div className="text-right">
                <span className="text-[#a57b53] block text-[9px] tracking-widest">CARAT BREAKDOWN</span>
                <span className="text-[#f0f2f0]">{activeStage.diamondSpecs}</span>
              </div>
            </div>

            {/* Action */}
            <div>
              <button className="w-full py-4 bg-[#a57b53] hover:bg-[#c59d70] text-[#050505] font-sans-refined text-xs tracking-[0.25em] font-semibold rounded-full transition-all duration-300 flex items-center justify-center space-x-3 shadow-[0_0_25px_rgba(165,123,83,0.2)]">
                <span>INQUIRE FOR BRIDAL APPOINTMENT</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
