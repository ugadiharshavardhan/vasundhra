'use client';

import React, { useEffect, useRef } from 'react';
import { gsap, initGSAP } from '@/lib/gsap';
import { SHOWROOM_DATA } from '@/lib/data';
import { MapPin, Phone, Mail, Clock, ExternalLink, Compass, Calendar } from 'lucide-react';

export function ShowroomSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    initGSAP();

    const ctx = gsap.context(() => {
      gsap.from('.showroom-animate', {
        y: 45,
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

  return (
    <section
      ref={sectionRef}
      id="showroom"
      className="relative min-h-screen bg-[#050505] text-[#FDFBF7] py-28 px-6 sm:px-12 md:px-20 overflow-hidden border-t border-[#a57b53]/20"
    >
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#a57b53]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="showroom-animate text-center max-w-3xl mx-auto space-y-4">
          <span className="font-sans-refined text-xs tracking-[0.4em] text-[#a57b53] uppercase block">
            PHYSICAL SANCTUARY • JUBILEE HILLS
          </span>
          <h2 className="font-editorial text-4xl sm:text-6xl tracking-tight text-[#FDFBF7]">
            COME INTO OUR WORLD
          </h2>
          <div className="flex items-center justify-center space-x-3 text-lg sm:text-xl font-editorial tracking-[0.2em] text-[#a57b53]">
            <span>{SHOWROOM_DATA.brandTitle}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#a57b53]" />
            <span>{SHOWROOM_DATA.city}</span>
          </div>
          <p className="font-serif text-base text-[#FDFBF7]/75">
            {SHOWROOM_DATA.tagline}
          </p>
        </div>

        {/* Main Grid: Showroom Visual + Details & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Showroom Image Visual (Left 7 Cols) */}
          <div className="showroom-animate lg:col-span-7 relative group">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-[#a57b53]/30 shadow-2xl">
              <img
                src={SHOWROOM_DATA.image}
                alt={`${SHOWROOM_DATA.brandTitle} ${SHOWROOM_DATA.city} Boutique`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-70" />

              <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                  <span className="font-sans-refined text-[10px] tracking-[0.3em] text-[#a57b53] uppercase block">
                    FLAGSHIP LOCATION
                  </span>
                  <h3 className="font-editorial text-2xl text-[#FDFBF7]">
                    Jubilee Hills Private Lounge
                  </h3>
                </div>
                <a
                  href={SHOWROOM_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#050505]/80 backdrop-blur-md border border-[#a57b53]/40 text-xs font-sans-refined tracking-[0.2em] text-[#a57b53] hover:bg-[#a57b53] hover:text-[#050505] transition-all"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>GOOGLE MAPS</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Details Column (Right 5 Cols) */}
          <div className="showroom-animate lg:col-span-5 space-y-8">
            <div className="glass-editorial rounded-3xl p-8 border border-[#a57b53]/30 space-y-6 shadow-2xl">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#161616] border border-[#a57b53]/40 flex items-center justify-center flex-shrink-0 text-[#a57b53]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans-refined text-xs tracking-[0.2em] text-[#a57b53] uppercase">
                    BOUTIQUE ADDRESS
                  </h4>
                  <p className="font-serif text-sm text-[#FDFBF7]/90 mt-1">
                    {SHOWROOM_DATA.address.line1}, {SHOWROOM_DATA.address.line2}<br />
                    {SHOWROOM_DATA.address.cityState} – {SHOWROOM_DATA.address.pincode}<br />
                    {SHOWROOM_DATA.address.country}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4 pt-4 border-t border-[#a57b53]/15">
                <div className="w-10 h-10 rounded-full bg-[#161616] border border-[#a57b53]/40 flex items-center justify-center flex-shrink-0 text-[#a57b53]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans-refined text-xs tracking-[0.2em] text-[#a57b53] uppercase">
                    BOUTIQUE HOURS
                  </h4>
                  <p className="font-serif text-xs text-[#FDFBF7]/80 mt-1">
                    Mon – Sat: {SHOWROOM_DATA.hours.weekdays}<br />
                    Sun: {SHOWROOM_DATA.hours.weekends}
                  </p>
                  <p className="font-sans-refined text-[10px] tracking-[0.15em] text-[#a57b53] mt-1">
                    {SHOWROOM_DATA.hours.appointmentsOnly}
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start space-x-4 pt-4 border-t border-[#a57b53]/15">
                <div className="w-10 h-10 rounded-full bg-[#161616] border border-[#a57b53]/40 flex items-center justify-center flex-shrink-0 text-[#a57b53]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans-refined text-xs tracking-[0.2em] text-[#a57b53] uppercase">
                    TELEPHONE & CONCIERGE
                  </h4>
                  <p className="font-serif text-sm text-[#FDFBF7]/90 mt-1">
                    {SHOWROOM_DATA.contact.phone} / {SHOWROOM_DATA.contact.altPhone}
                  </p>
                  <p className="font-serif text-xs text-[#FDFBF7]/70 mt-0.5">
                    {SHOWROOM_DATA.contact.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#bespoke"
                className="flex-1 py-4 px-6 rounded-full bg-gradient-to-r from-[#a57b53] to-[#8C6438] text-[#050505] font-sans-refined text-xs tracking-[0.25em] font-bold text-center hover:opacity-95 transition-all shadow-xl shadow-[#a57b53]/20 uppercase"
              >
                BOOK AN APPOINTMENT
              </a>
              <a
                href={`tel:${SHOWROOM_DATA.contact.phone.replace(/\s+/g, '')}`}
                className="py-4 px-6 rounded-full border border-[#a57b53]/40 text-[#FDFBF7] font-sans-refined text-xs tracking-[0.2em] font-semibold text-center hover:bg-[#a57b53]/10 transition-all uppercase"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
