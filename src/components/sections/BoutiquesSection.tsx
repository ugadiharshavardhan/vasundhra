'use client';

import React from 'react';
import Link from 'next/link';
import { BOUTIQUE_LOCATIONS } from '@/lib/vasundhara-data';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

export function BoutiquesSection() {
  return (
    <section className="py-28 px-6 sm:px-12 bg-[#0A0A0A] text-[#F7F3EC] border-b border-[#B89B5E]/15">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <span className="text-[10px] font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase block">
            PHYSICAL SANCTUARIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-helvetica font-light tracking-wide uppercase">
            VISIT OUR BOUTIQUES
          </h2>
          <p className="text-xs sm:text-sm font-serif-luxury text-[#F7F3EC]/70 max-w-xl mx-auto">
            Experience our high jewellery collections in private viewing suites across Hyderabad, Vijayawada, and Visakhapatnam.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BOUTIQUE_LOCATIONS.map((boutique) => (
            <div
              key={boutique.id}
              className="group rounded-2xl overflow-hidden bg-[#161616] border border-[#B89B5E]/20 hover:border-[#B89B5E] transition-all duration-500 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-[220px] overflow-hidden">
                  <img
                    src={boutique.image}
                    alt={boutique.city}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {boutique.isFlagship && (
                    <div className="absolute top-3 left-3 bg-[#B89B5E] text-[#0A0A0A] px-3 py-1 rounded-full text-[9px] font-sans-refined font-semibold uppercase">
                      FLAGSHIP SANCTUARY
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-helvetica text-[#F7F3EC] uppercase tracking-wider font-medium group-hover:text-[#B89B5E] transition-colors">
                      {boutique.city}
                    </h3>
                    <p className="text-xs font-serif-luxury text-[#B89B5E] mt-0.5">
                      {boutique.tagline}
                    </p>
                  </div>

                  <div className="space-y-2.5 text-xs text-[#F7F3EC]/80 font-serif-luxury border-t border-[#B89B5E]/20 pt-4">
                    <div className="flex items-start space-x-2.5">
                      <MapPin className="w-4 h-4 text-[#B89B5E] shrink-0 mt-0.5" />
                      <div>
                        <p>{boutique.address}</p>
                        {boutique.landmark && (
                          <p className="text-[11px] text-[#B89B5E] mt-0.5">{boutique.landmark}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <Phone className="w-4 h-4 text-[#B89B5E] shrink-0" />
                      <p>{boutique.phone}</p>
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <Mail className="w-4 h-4 text-[#B89B5E] shrink-0" />
                      <p className="truncate">{boutique.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#B89B5E]/10 mt-4 flex items-center justify-between">
                <Link
                  href="/contact"
                  className="text-xs font-sans-refined text-[#B89B5E] hover:text-[#F7F3EC] transition-colors flex items-center space-x-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>GET DIRECTIONS</span>
                </Link>
                <Link
                  href="/contact"
                  className="text-xs font-sans-refined text-[#F7F3EC] hover:text-[#B89B5E] transition-colors"
                >
                  BOOK VISIT →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
