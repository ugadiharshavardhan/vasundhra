'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap, initGSAP } from '@/lib/gsap';
import { BESPOKE_JEWELLERY_TYPES } from '@/lib/data';
import { Sparkles, Calendar, CheckCircle2, User, Phone, MessageSquare, Tag } from 'lucide-react';

export function BespokeJewellery() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [selectedType, setSelectedType] = useState<string>('Ring');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    occasion: '',
    date: '',
    message: '',
  });

  useEffect(() => {
    initGSAP();

    const ctx = gsap.context(() => {
      gsap.from('.bespoke-animate', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="bespoke"
      className="relative min-h-screen bg-[#050505] text-[#FDFBF7] py-28 px-6 sm:px-12 md:px-20 overflow-hidden border-t border-[#a57b53]/20"
    >
      {/* Ambient Radial Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#a57b53]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Section Header */}
        <div className="bespoke-animate text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#161616] border border-[#a57b53]/40 text-xs font-sans-refined tracking-[0.3em] text-[#a57b53] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRIVATE ATELIER COMMISSIONS</span>
          </div>
          <h2 className="font-editorial text-5xl sm:text-7xl tracking-tight text-[#FDFBF7]">
            MADE FOR ONE
          </h2>
          <p className="font-serif text-xl sm:text-2xl italic text-[#a57b53]">
            “Some jewels are discovered. Some are created for you.”
          </p>
          <div className="w-20 h-[1px] bg-[#a57b53] mx-auto mt-6" />
        </div>

        {/* Hero Visual & Appointment Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Large Hero Jewellery Visual Object */}
          <div className="bespoke-animate lg:col-span-5 relative group">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-[#a57b53]/30 bg-[#0D0D0D] p-8 flex flex-col justify-between shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop"
                alt="Bespoke Jewellery Masterpiece"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

              <div className="relative z-10 flex justify-between items-start">
                <span className="font-sans-refined text-[10px] tracking-[0.3em] text-[#a57b53] uppercase bg-[#050505]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#a57b53]/30">
                  COUTURE SPECIMEN
                </span>
                <span className="font-serif text-sm italic text-[#FDFBF7]/80">
                  1-of-1 Commission
                </span>
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="font-editorial text-3xl text-[#FDFBF7]">
                  CREATE YOUR JEWEL
                </h3>
                <p className="font-serif text-sm text-[#FDFBF7]/75">
                  Collaborate directly with our master gemologists in Hyderabad to draft initial gouache sketches, hand-select rare solitaires, and forge a legacy piece.
                </p>
              </div>
            </div>
          </div>

          {/* Right Premium Appointment Form */}
          <div className="bespoke-animate lg:col-span-7">
            <div className="glass-editorial rounded-3xl p-8 sm:p-12 border border-[#a57b53]/30 shadow-2xl relative">
              {formSubmitted ? (
                <div className="text-center py-16 space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full border-2 border-[#a57b53] bg-[#a57b53]/10 flex items-center justify-center mx-auto text-[#a57b53]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-editorial text-3xl text-[#FDFBF7]">
                    CONSULTATION REQUEST RECEIVED
                  </h3>
                  <p className="font-serif text-base text-[#FDFBF7]/80 max-w-md mx-auto">
                    Thank you, <span className="text-[#a57b53] font-semibold">{formData.name}</span>. Our VIP Concierge will reach out via phone within 24 hours to confirm your private suite appointment in Hyderabad.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-[#a57b53]/40 text-xs font-sans-refined tracking-[0.2em] text-[#a57b53] hover:bg-[#a57b53]/10 transition-colors"
                  >
                    SUBMIT ANOTHER REQUEST
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2 border-b border-[#a57b53]/20 pb-6">
                    <h3 className="font-editorial text-2xl text-[#FDFBF7]">
                      BOOK A CONSULTATION
                    </h3>
                    <p className="font-serif text-xs text-[#FDFBF7]/60">
                      Reserve a private session with our senior master jeweller at the Jubilee Hills Boutique.
                    </p>
                  </div>

                  {/* Form Inputs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="font-sans-refined text-[11px] tracking-[0.2em] text-[#a57b53] uppercase flex items-center space-x-1.5">
                        <User className="w-3.5 h-3.5" />
                        <span>YOUR NAME *</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sanya Reddy"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#161616]/80 border border-[#a57b53]/30 rounded-xl px-4 py-3 text-sm text-[#FDFBF7] placeholder-[#FDFBF7]/30 focus:outline-none focus:border-[#a57b53] transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="font-sans-refined text-[11px] tracking-[0.2em] text-[#a57b53] uppercase flex items-center space-x-1.5">
                        <Phone className="w-3.5 h-3.5" />
                        <span>PHONE NUMBER *</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98490 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#161616]/80 border border-[#a57b53]/30 rounded-xl px-4 py-3 text-sm text-[#FDFBF7] placeholder-[#FDFBF7]/30 focus:outline-none focus:border-[#a57b53] transition-colors"
                      />
                    </div>

                    {/* Occasion */}
                    <div className="space-y-2">
                      <label className="font-sans-refined text-[11px] tracking-[0.2em] text-[#a57b53] uppercase flex items-center space-x-1.5">
                        <Tag className="w-3.5 h-3.5" />
                        <span>OCCASION</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Wedding, Anniversary, Gala"
                        value={formData.occasion}
                        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                        className="w-full bg-[#161616]/80 border border-[#a57b53]/30 rounded-xl px-4 py-3 text-sm text-[#FDFBF7] placeholder-[#FDFBF7]/30 focus:outline-none focus:border-[#a57b53] transition-colors"
                      />
                    </div>

                    {/* Preferred Date */}
                    <div className="space-y-2">
                      <label className="font-sans-refined text-[11px] tracking-[0.2em] text-[#a57b53] uppercase flex items-center space-x-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>PREFERRED DATE</span>
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-[#161616]/80 border border-[#a57b53]/30 rounded-xl px-4 py-3 text-sm text-[#FDFBF7] focus:outline-none focus:border-[#a57b53] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Jewellery Type Selection */}
                  <div className="space-y-3">
                    <label className="font-sans-refined text-[11px] tracking-[0.2em] text-[#a57b53] uppercase block">
                      JEWELLERY TYPE *
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {BESPOKE_JEWELLERY_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedType(type)}
                          className={`px-5 py-2.5 rounded-full text-xs font-sans-refined tracking-[0.15em] transition-all border ${
                            selectedType === type
                              ? 'bg-[#a57b53] text-[#050505] border-[#a57b53] font-semibold'
                              : 'bg-[#161616]/60 border-[#a57b53]/30 text-[#FDFBF7]/70 hover:border-[#a57b53]'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="font-sans-refined text-[11px] tracking-[0.2em] text-[#a57b53] uppercase flex items-center space-x-1.5">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>YOUR VISION / SPECIAL REQUIREMENTS</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe diamond shape preferences, carat weight, metal type, or design inspirations..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#161616]/80 border border-[#a57b53]/30 rounded-xl px-4 py-3 text-sm text-[#FDFBF7] placeholder-[#FDFBF7]/30 focus:outline-none focus:border-[#a57b53] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#a57b53] to-[#8C6438] text-[#050505] font-sans-refined text-xs tracking-[0.3em] font-bold hover:opacity-95 transition-all shadow-xl shadow-[#a57b53]/20 uppercase"
                  >
                    BOOK A CONSULTATION
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
