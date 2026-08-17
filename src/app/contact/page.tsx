'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { BOUTIQUE_LOCATIONS } from '@/lib/vasundhara-data';
import { Footer } from '@/components/sections/Footer';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredLocation: 'Hyderabad — Jubilee Hills',
    occasion: 'Royal Wedding Trousseau',
    message: '',
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F7F3EC] font-helvetica pt-24">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-6 sm:px-12 text-center border-b border-[#B89B5E]/20 bg-[#161616]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase block">
            SANCTUARIES OF LUXURY
          </span>
          <h1 className="text-4xl sm:text-6xl font-helvetica font-light tracking-wide uppercase">
            CONTACT & BOUTIQUES
          </h1>
          <p className="text-sm sm:text-base font-serif-luxury text-[#F7F3EC]/80 max-w-xl mx-auto italic">
            “Reserve a private consultation at our flagship Jubilee Hills sanctuary or regional boutiques.”
          </p>
        </div>
      </section>

      {/* Boutique Locations Section */}
      <section className="py-20 px-6 sm:px-12 border-b border-[#B89B5E]/15">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-sans-refined text-[#B89B5E] tracking-[0.3em] uppercase block">
              VISIT OUR BOUTIQUES
            </span>
            <h2 className="text-3xl font-helvetica font-light uppercase">
              SHOWROOM LOCATIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BOUTIQUE_LOCATIONS.map((boutique) => (
              <div
                key={boutique.id}
                className="bg-[#161616] border border-[#B89B5E]/20 rounded-2xl p-8 space-y-6 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-helvetica text-[#F7F3EC] uppercase tracking-wider font-medium">
                        {boutique.city}
                      </h3>
                      <p className="text-xs font-serif-luxury text-[#B89B5E] mt-0.5">
                        {boutique.tagline}
                      </p>
                    </div>
                    {boutique.isFlagship && (
                      <span className="bg-[#B89B5E] text-[#0A0A0A] px-2.5 py-1 rounded-full text-[8px] font-sans-refined font-semibold uppercase">
                        FLAGSHIP
                      </span>
                    )}
                  </div>

                  <div className="space-y-3 text-xs text-[#F7F3EC]/80 font-serif-luxury pt-4 border-t border-[#B89B5E]/20">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-[#B89B5E] shrink-0 mt-0.5" />
                      <div>
                        <p>{boutique.address}</p>
                        {boutique.landmark && (
                          <p className="text-[11px] text-[#B89B5E] mt-0.5">{boutique.landmark}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-[#B89B5E] shrink-0" />
                      <p>{boutique.phone}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-[#B89B5E] shrink-0" />
                      <p className="truncate">{boutique.email}</p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-4 h-4 text-[#B89B5E] shrink-0 mt-0.5" />
                      <p className="text-[11px] text-[#F7F3EC]/70">{boutique.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book An Appointment Form */}
      <section className="py-24 px-6 sm:px-12 bg-[#161616]">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[10px] font-sans-refined tracking-[0.35em] text-[#B89B5E] uppercase block">
              PRIVATE RESERVATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-helvetica font-light tracking-wide uppercase">
              BOOK AN APPOINTMENT
            </h2>
            <p className="text-xs sm:text-sm font-serif-luxury text-[#F7F3EC]/70 max-w-xl mx-auto">
              Please share your preferred date and occasion. Our private concierge will reach out to curate your sanctuary viewing.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#0A0A0A] border border-[#B89B5E] rounded-2xl p-12 text-center space-y-4 animate-fadeIn">
              <CheckCircle className="w-12 h-12 text-[#B89B5E] mx-auto" />
              <h3 className="text-2xl font-helvetica font-light text-[#F7F3EC] uppercase">
                APPOINTMENT REQUESTED
              </h3>
              <p className="text-xs font-serif-luxury text-[#F7F3EC]/70 max-w-md mx-auto">
                Thank you, {formData.name}. Our Vasundhara concierge will contact you shortly to confirm your private suite appointment in {formData.preferredLocation}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-[#0A0A0A] border border-[#B89B5E]/20 p-8 sm:p-12 rounded-2xl shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-sans-refined text-[#B89B5E] tracking-wider uppercase block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full bg-[#161616] border border-[#B89B5E]/30 rounded-xl px-4 py-3 text-xs text-[#F7F3EC] focus:outline-none focus:border-[#B89B5E]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-sans-refined text-[#B89B5E] tracking-wider uppercase block">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#161616] border border-[#B89B5E]/30 rounded-xl px-4 py-3 text-xs text-[#F7F3EC] focus:outline-none focus:border-[#B89B5E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-sans-refined text-[#B89B5E] tracking-wider uppercase block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full bg-[#161616] border border-[#B89B5E]/30 rounded-xl px-4 py-3 text-xs text-[#F7F3EC] focus:outline-none focus:border-[#B89B5E]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-sans-refined text-[#B89B5E] tracking-wider uppercase block">
                    Preferred Location *
                  </label>
                  <select
                    value={formData.preferredLocation}
                    onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                    className="w-full bg-[#161616] border border-[#B89B5E]/30 rounded-xl px-4 py-3 text-xs text-[#F7F3EC] focus:outline-none focus:border-[#B89B5E]"
                  >
                    <option value="Hyderabad — Jubilee Hills">Hyderabad — Jubilee Hills (Flagship)</option>
                    <option value="Vijayawada — M.G. Road">Vijayawada — M.G. Road</option>
                    <option value="Visakhapatnam — VIP Road">Visakhapatnam — VIP Road</option>
                    <option value="Virtual Video Consultation">Virtual Video Consultation</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-sans-refined text-[#B89B5E] tracking-wider uppercase block">
                  Occasion / Interest *
                </label>
                <select
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  className="w-full bg-[#161616] border border-[#B89B5E]/30 rounded-xl px-4 py-3 text-xs text-[#F7F3EC] focus:outline-none focus:border-[#B89B5E]"
                >
                  <option value="Royal Wedding Trousseau">Royal Wedding Trousseau</option>
                  <option value="Solitaire Engagement Ring">Solitaire Engagement Ring</option>
                  <option value="Occasion Jewellery Suite">Occasion Jewellery Suite</option>
                  <option value="Daily Lightweight Jewellery">Daily Lightweight Jewellery</option>
                  <option value="Baby Keepsake Collection">Baby Keepsake Collection</option>
                  <option value="Cocktail Evening Soirée">Cocktail Evening Soirée</option>
                  <option value="Custom Heirloom Redesign">Custom Heirloom Redesign</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-sans-refined text-[#B89B5E] tracking-wider uppercase block">
                  Personal Message / Request
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about your preferred dates, gemstone preferences, or specific inquiries..."
                  className="w-full bg-[#161616] border border-[#B89B5E]/30 rounded-xl px-4 py-3 text-xs text-[#F7F3EC] focus:outline-none focus:border-[#B89B5E]"
                />
              </div>

              {/* Consent text based on official requirements */}
              <div className="flex items-start space-x-3 pt-2">
                <input
                  type="checkbox"
                  required
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 accent-[#B89B5E]"
                />
                <label htmlFor="consent" className="text-[11px] font-serif-luxury text-[#F7F3EC]/70 leading-relaxed">
                  I consent to Vasundhara Diamond Roof contacting me via phone, email, or WhatsApp regarding my appointment request and concierge services in accordance with the Privacy Policy.
                </label>
              </div>

              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-12 py-4 rounded-full bg-[#B89B5E] text-[#0A0A0A] text-xs font-sans-refined tracking-[0.2em] font-semibold uppercase hover:bg-[#F7F3EC] transition-colors shadow-xl"
                >
                  CONFIRM RESERVATION REQUEST
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
