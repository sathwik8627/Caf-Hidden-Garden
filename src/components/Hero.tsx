import React from 'react';
import { Sparkles, Calendar, Utensils, Coffee, ChevronRight, Leaf, ShieldCheck, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import { CafeLogo } from './CafeLogo';

interface HeroProps {
  onOpenReservation: () => void;
  onOpenCart: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenReservation,
  onOpenCart
}) => {
  return (
    <section id="hero-section" className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-[#F5F2ED] border-b border-[#1A1A1A]/15">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#EAE7E2]/60 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Top Editorial Label & Rule */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#1A1A1A]">
                Issue No. 04 — Botanical Harvest
              </span>
              <div className="w-12 h-[1px] bg-[#1A1A1A]" />
              <a
                href="https://www.instagram.com/cafe_hidden_garden_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#1A1A1A]/20 hover:border-[#1A1A1A] text-[11px] uppercase tracking-[0.15em] font-semibold text-[#1A1A1A] transition-all shadow-2xs"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-600" />
                <span>@cafe_hidden_garden_</span>
              </a>
            </div>

            {/* Headline with Logo Beside */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 lg:gap-7">
              <div className="shrink-0 p-2 sm:p-2.5 bg-[#EDE6DA] border-2 border-[#1C3122]/30 rounded-full shadow-md hover:scale-105 transition-transform">
                <CafeLogo size="lg" showTagline={false} />
              </div>
              <div className="space-y-3 flex-1">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1A1A] tracking-tighter leading-[0.98]">
                  Where Specialty Coffee Meets <span className="italic font-normal">Living Botanical Wonders.</span>
                </h1>
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-[#2A4532]">
                  • Hide Away and Find Nature •
                </p>
              </div>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl font-light">
              Escape into a lush greenhouse cafe. Savor authentic filter coffees, aromatic elaichi teas, golden crispy fried chicken, sealed burgers, creamy pastas, kurkure momos, warm Belgian waffles, and chilled fruit mojitos.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                id="hero-reserve-btn"
                onClick={onOpenReservation}
                className="px-8 py-4 bg-[#1A1A1A] hover:bg-black text-[#F5F2ED] font-semibold text-xs uppercase tracking-[0.18em] border border-[#1A1A1A] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>

              <a
                href="#menu"
                id="hero-menu-link"
                className="px-8 py-4 bg-transparent hover:bg-[#EAE7E2] text-[#1A1A1A] font-semibold text-xs uppercase tracking-[0.18em] border border-[#1A1A1A] transition-all flex items-center justify-center gap-2"
              >
                <Utensils className="w-4 h-4 text-[#1A1A1A]" />
                <span>Explore Full Menu</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#1A1A1A]" />
              </a>
            </div>

            {/* Micro Highlights (Editorial Grid) */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#1A1A1A]/15 text-[#1A1A1A]">
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1A1A] block">
                  120+
                </span>
                <span className="text-[11px] uppercase tracking-[0.15em] text-[#666666] font-medium block">
                  Botanical Species
                </span>
              </div>
              <div className="space-y-1 border-l border-[#1A1A1A]/15 pl-6">
                <span className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1A1A] block">
                  100%
                </span>
                <span className="text-[11px] uppercase tracking-[0.15em] text-[#666666] font-medium block">
                  Organic & Local
                </span>
              </div>
              <div className="space-y-1 border-l border-[#1A1A1A]/15 pl-6">
                <span className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1A1A] block">
                  4.9 ★
                </span>
                <span className="text-[11px] uppercase tracking-[0.15em] text-[#666666] font-medium block">
                  850+ Impressions
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="border border-[#1A1A1A] overflow-hidden aspect-[4/5] relative bg-[#EAE7E2]">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
                  alt="Cafe Hidden Garden Greenhouse and Cafe"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#EAE7E2] font-semibold">
                    Plate No. 01 — Botanical Oasis
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal mt-1">
                    The Victorian Conservatory
                  </h3>
                  <p className="text-xs text-[#EAE7E2]/80 mt-1 font-light">
                    Open for sunrise roasts, leisurely brunch, and evening elixirs.
                  </p>
                </div>
              </div>

              {/* Floating Coffee & Brunch Feature Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 sm:-left-8 bg-white p-4 shadow-xl border border-[#1A1A1A] max-w-[240px] sm:max-w-[270px] flex items-center gap-3.5"
              >
                <div className="w-12 h-12 bg-[#F5F2ED] border border-[#1A1A1A]/20 flex items-center justify-center text-[#1A1A1A] shrink-0">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1A1A1A]">
                    Belgium Waffles
                  </h4>
                  <p className="text-[11px] text-[#666666]">
                    Warm golden pockets with Belgian chocolate drizzle
                  </p>
                  <span className="text-xs font-semibold text-[#1A1A1A] mt-0.5 block">
                    ₹139.00 / Fresh Bakes
                  </span>
                </div>
              </motion.div>

              {/* Floating Official Brand Emblem Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-6 -right-6 sm:-right-8 bg-[#EDE6DA] p-2.5 shadow-2xl border-2 border-[#1C3122] rounded-full hidden sm:flex items-center justify-center z-10"
              >
                <CafeLogo size="md" withBackground={false} showTagline={false} />
              </motion.div>

              {/* Floating Zero Waste & Fresh Tag */}
              <div className="absolute top-3 left-3 bg-[#1A1A1A]/90 backdrop-blur-xs text-white py-1.5 px-3.5 shadow-md flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] font-semibold border border-white/20">
                <ShieldCheck className="w-3.5 h-3.5 text-[#EAE7E2]" />
                <span>Zero Single-Use Waste</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
