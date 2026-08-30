import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { MapPin, Clock, Phone, Mail, ChevronDown, ChevronUp, Send, CheckCircle2, Sparkles, Navigation, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { openWhatsAppChat, formatGeneralInquiryWhatsAppMessage, CAFE_DISPLAY_PHONE, CAFE_MAPS_LINK, CAFE_ADDRESS } from '../utils/whatsapp';

export const LocationAndHours: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Private Event & Micro-Wedding');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const hours = [
    { day: 'Monday – Thursday', time: '7:30 AM – 7:30 PM', note: 'All Garden Zones Open' },
    { day: 'Friday', time: '7:30 AM – 9:00 PM', note: 'Acoustic Golden Hour from 6:30 PM' },
    { day: 'Saturday', time: '8:00 AM – 9:00 PM', note: 'Weekend Botanical Brunch' },
    { day: 'Sunday', time: '8:00 AM – 8:00 PM', note: 'Terrarium & Coffee Workshops' }
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail || !inquiryMessage) {
      alert('Please complete the message form.');
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setInquiryName('');
      setInquiryEmail('');
      setInquiryMessage('');
    }, 4000);
  };

  return (
    <section id="visit" className="py-16 sm:py-24 bg-[#EAE7E2] border-b border-[#1A1A1A]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#1A1A1A]">
              Visitor Guide
            </span>
            <div className="w-8 h-[1px] bg-[#1A1A1A]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#666666]">
              Hours & Access
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1A1A] tracking-tighter">
            Visit Our <span className="italic font-normal">Botanical Sanctuary</span>
          </h2>
          <p className="text-base text-[#666666] leading-relaxed font-light">
            Located in the historic conservatory district with tranquil garden paths, ample bicycle parking, and accessible greenhouse ramps.
          </p>
        </div>

        {/* Hours & Location Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Hours Card */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-[#1A1A1A]/15 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#1A1A1A]/20 bg-[#F5F2ED] text-[#1A1A1A] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-normal text-[#1A1A1A]">
                  Weekly Conservatory Hours
                </h3>
                <p className="text-xs text-[#666666] font-light">Kitchen serves until 1 hour prior to closing</p>
              </div>
            </div>

            <div className="space-y-3">
              {hours.map((h, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-[#F5F2ED] border border-[#1A1A1A]/10 text-xs sm:text-sm"
                >
                  <div>
                    <span className="font-semibold text-[#1A1A1A] block">{h.day}</span>
                    <span className="text-[11px] text-[#666666] font-light">{h.note}</span>
                  </div>
                  <span className="font-semibold text-[#1A1A1A] mt-1 sm:mt-0 font-serif">{h.time}</span>
                </div>
              ))}
            </div>

            {/* Quick Contact Line */}
            <div className="pt-4 border-t border-[#1A1A1A]/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-[#666666]">
              <button
                type="button"
                onClick={() => openWhatsAppChat(formatGeneralInquiryWhatsAppMessage('Visitor Guide & Reservations'))}
                className="flex items-center gap-2 text-[#1A1A1A] hover:text-[#1EBE5D] font-medium transition-colors cursor-pointer text-left"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#25D366] shrink-0" />
                <span>WhatsApp: {CAFE_DISPLAY_PHONE}</span>
              </button>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1A1A1A] shrink-0" />
                <span className="text-[#1A1A1A]">hello@cafehiddengarden.com</span>
              </div>
              <a
                href="https://www.instagram.com/cafe_hidden_garden_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#1A1A1A] hover:underline font-semibold"
              >
                <Instagram className="w-4 h-4 text-pink-600 shrink-0" />
                <span>@cafe_hidden_garden_</span>
              </a>
            </div>
          </div>

          {/* Location & Directions Card */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-[#1A1A1A]/15 shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-[#1A1A1A]/20 bg-[#F5F2ED] text-[#1A1A1A] flex items-center justify-center">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#1A1A1A]">
                    Location & Arrival
                  </h3>
                  <p className="text-xs text-[#666666] font-light">{CAFE_ADDRESS.full}</p>
                </div>
              </div>

              {/* Simulated Illustrated Map Preview with Clickable Link */}
              <a
                href={CAFE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-44 border border-[#1A1A1A]/20 overflow-hidden bg-[#F5F2ED] flex items-center justify-center block cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=800&q=80"
                  alt="Cafe Hidden Garden Tirupati Location"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#1A1A1A]/50 backdrop-blur-2xs flex flex-col items-center justify-center text-white p-4 text-center">
                  <MapPin className="w-7 h-7 text-white group-hover:scale-110 transition-transform mb-1" />
                  <p className="font-serif text-lg font-medium">Café Hidden Garden</p>
                  <span className="text-xs text-stone-200 font-light mt-0.5">{CAFE_ADDRESS.short}</span>
                  <span className="inline-flex items-center gap-1 mt-2 text-[11px] font-semibold uppercase tracking-wider text-white bg-black/40 px-2.5 py-1 border border-white/30">
                    <Navigation className="w-3 h-3" /> Get Live Driving Directions
                  </span>
                </div>
              </a>

              <div className="space-y-2 text-xs text-[#666666] font-light">
                <p>• <strong className="text-[#1A1A1A] font-semibold">Landmark:</strong> Beside Fortuna Women's Hospital, New Balaji Colony, Avilali, Tirupati.</p>
                <p>• <strong className="text-[#1A1A1A] font-semibold">Postal Code:</strong> 517501, Andhra Pradesh, India.</p>
                <p>• <strong className="text-[#1A1A1A] font-semibold">Parking:</strong> Dedicated visitor parking & bike parking at the café entrance.</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CAFE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#1A1A1A] hover:bg-black text-[#F5F2ED] font-semibold text-xs uppercase tracking-wider border border-[#1A1A1A] flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps / Get Directions</span>
              </a>
            </div>
          </div>

        </div>

        {/* FAQs & Contact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
          
          {/* FAQs Accordion */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif text-2xl font-normal text-[#1A1A1A]">
              Frequently Asked Questions
            </h3>
            <div className="space-y-2.5">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-[#1A1A1A]/15 overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 text-sm sm:text-base font-medium text-[#1A1A1A] hover:text-black cursor-pointer font-serif"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#1A1A1A] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                      )}
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#666666] leading-relaxed border-t border-[#1A1A1A]/10 pt-3 font-light"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Private Event / Inquiry Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-[#1A1A1A]/15 shadow-xs space-y-5">
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-[0.25em] text-[#666666]">
                Private Events & Gatherings
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#1A1A1A] mt-0.5">
                Host Your Gathering in the Garden
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] mt-1 font-light">
                From micro-weddings and bridal brunches to corporate floral retreats.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-[#F5F2ED] p-6 border border-[#1A1A1A] text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 mx-auto text-[#1A1A1A]" />
                <h4 className="font-serif text-xl font-normal text-[#1A1A1A]">
                  Inquiry Received with Warmth!
                </h4>
                <p className="text-xs text-[#666666]">
                  Our garden event coordinator will contact you within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="inquiry-name" className="text-xs font-semibold text-[#1A1A1A] block mb-1">
                      Your Name *
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      value={inquiryName}
                      onChange={e => setInquiryName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2.5 text-xs bg-[#F5F2ED] border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiry-email" className="text-xs font-semibold text-[#1A1A1A] block mb-1">
                      Email Address *
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      value={inquiryEmail}
                      onChange={e => setInquiryEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full px-3 py-2.5 text-xs bg-[#F5F2ED] border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry-type" className="text-xs font-semibold text-[#1A1A1A] block mb-1">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiry-type"
                    value={inquiryType}
                    onChange={e => setInquiryType(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs bg-[#F5F2ED] border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A]"
                  >
                    <option value="Private Event & Micro-Wedding">Private Event & Micro-Wedding</option>
                    <option value="Bridal Shower / Birthday Brunch">Bridal Shower / Birthday Brunch</option>
                    <option value="Botanical Film / Photo Shoot">Botanical Film / Photo Shoot</option>
                    <option value="Coffee Roastery Wholesale">Coffee Roastery Wholesale</option>
                    <option value="General Feedback & Press">General Feedback & Press</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="inquiry-message" className="text-xs font-semibold text-[#1A1A1A] block mb-1">
                    Event Details or Message *
                  </label>
                  <textarea
                    id="inquiry-message"
                    required
                    rows={3}
                    value={inquiryMessage}
                    onChange={e => setInquiryMessage(e.target.value)}
                    placeholder="Estimated guest count, preferred dates, catering needs..."
                    className="w-full px-3 py-2.5 text-xs bg-[#F5F2ED] border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-garden-inquiry-btn"
                  className="w-full py-3.5 bg-[#1A1A1A] hover:bg-black text-[#F5F2ED] font-semibold text-xs uppercase tracking-wider border border-[#1A1A1A] flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Garden Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
