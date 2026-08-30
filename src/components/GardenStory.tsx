import React from 'react';
import { Leaf, Sprout, Coffee, Recycle, HeartHandshake, ShieldCheck } from 'lucide-react';
import { CafeLogo } from './CafeLogo';

export const GardenStory: React.FC = () => {
  const pillars = [
    {
      icon: Coffee,
      title: 'Direct-Trade Micro-Roasting',
      description: 'We partner directly with family coffee estates in Ethiopia, Colombia, and Guatemala, paying 40% above fair-trade prices to roast small batches weekly.'
    },
    {
      icon: Sprout,
      title: 'Living Herbology & On-Site Vine',
      description: 'Our lavender, rosemary, lemon thyme, and micro-herbs are harvested fresh every morning from the raised greenhouse beds you dine next to.'
    },
    {
      icon: Recycle,
      title: 'Closed-Loop Zero Single-Use Plastic',
      description: '100% of our coffee chaff and food scraps are composted back into our botanical soil. Every cup, straw, and box is plant-based and biodegradable.'
    },
    {
      icon: HeartHandshake,
      title: 'Historic Botanical Restoration',
      description: 'Originally constructed in 1894, our Victorian glass conservatory was meticulously restored to protect endangered plant species and nurture community.'
    }
  ];

  return (
    <section id="story" className="py-16 sm:py-24 bg-[#EAE7E2] border-b border-[#1A1A1A]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Collage */}
          <div className="lg:col-span-6 relative space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-[#1A1A1A]/20 overflow-hidden shadow-xs aspect-square bg-[#F5F2ED]">
                <img
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=80"
                  alt="Espresso Barista pulling a botanical brew"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="border border-[#1A1A1A]/20 overflow-hidden shadow-xs aspect-square bg-[#F5F2ED] mt-6">
                <img
                  src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80"
                  alt="Living Botanical plants in greenhouse"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Quote badge */}
            <div className="bg-[#1A1A1A] text-white p-6 border border-[#1A1A1A] shadow-md space-y-2">
              <p className="font-serif italic font-light text-base sm:text-lg leading-relaxed text-[#F5F2ED]">
                "We wanted to build a sanctuary where city life slows down, where the perfume of fresh espresso harmonizes with blooming jasmine and damp earth."
              </p>
              <div className="flex items-center justify-between text-xs text-[#C2BDAF] pt-1">
                <span>— Elena & Mateo, Founders & Horticulturists</span>
                <span className="flex items-center gap-1 uppercase tracking-wider text-[10px]"><Leaf className="w-3.5 h-3.5" /> Est. 1894</span>
              </div>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#1A1A1A]">
                  Living Heritage
                </span>
                <div className="w-8 h-[1px] bg-[#1A1A1A]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#666666]">
                  Our Philosophy
                </span>
              </div>
              <div className="hidden sm:block">
                <CafeLogo size="xs" showTagline={false} />
              </div>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] tracking-tighter leading-tight">
              A Living Breathing Oasis Born From <span className="italic font-normal">Coffee and Care.</span>
            </h2>

            <p className="text-base text-[#666666] leading-relaxed font-light">
              Café Hidden Garden began as an abandoned Victorian plant nursery tucked away between historic cobblestone streets. Today, it stands as a thriving living sanctuary—home to over 120 botanical flora species, rare monstera vines, and a passionate team of artisan coffee roasters and chefs.
            </p>

            <p className="text-sm text-[#666666] leading-relaxed font-light">
              We believe great food and coffee are inseparable from the natural environment. From the organic milk sourced from local pasture-raised herds to our cold-pressed herbal syrups steeped in-house with real Damask roses and French lavender, every detail is treated with reverence.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-2 border border-[#1A1A1A]/15">
                <ShieldCheck className="w-4 h-4 text-[#1A1A1A]" /> Certified Organic Kitchen
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-2 border border-[#1A1A1A]/15">
                <Leaf className="w-4 h-4 text-[#1A1A1A]" /> 100% Wind-Powered Roastery
              </span>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {pillars.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 border border-[#1A1A1A]/15 shadow-xs space-y-3 hover:border-[#1A1A1A] transition-all"
              >
                <div className="w-10 h-10 border border-[#1A1A1A]/20 bg-[#F5F2ED] text-[#1A1A1A] flex items-center justify-center">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-normal text-lg text-[#1A1A1A]">
                  {p.title}
                </h3>
                <p className="text-xs text-[#666666] leading-relaxed font-light">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
