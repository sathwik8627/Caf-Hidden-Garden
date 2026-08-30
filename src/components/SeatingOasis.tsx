import React, { useState } from 'react';
import { SEATING_AREAS } from '../data/mockData';
import { SeatingArea } from '../types';
import { Sun, Sparkles, Users, Dog, Clock, CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SeatingOasisProps {
  onReserveArea: (areaId: string) => void;
}

export const SeatingOasis: React.FC<SeatingOasisProps> = ({ onReserveArea }) => {
  const [selectedAreaId, setSelectedAreaId] = useState(SEATING_AREAS[0].id);
  const activeArea = SEATING_AREAS.find(a => a.id === selectedAreaId) || SEATING_AREAS[0];

  return (
    <section id="seating" className="py-16 sm:py-24 bg-[#EAE7E2] border-b border-[#1A1A1A]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#1A1A1A]">
              Micro-Climate Architecture
            </span>
            <div className="w-8 h-[1px] bg-[#1A1A1A]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#666666]">
              Four Sanctuaries
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1A1A] tracking-tighter">
            Discover Your Perfect <span className="italic font-normal">Garden Sanctuary</span>
          </h2>
          <p className="text-base text-[#666666] leading-relaxed font-light">
            From the sun-drenched Victorian conservatory to our shaded wisteria stone fountain courtyard, find your ideal corner for morning espresso, celebratory brunch, or remote creative focus.
          </p>
        </div>

        {/* Zone Selector Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {SEATING_AREAS.map(area => {
            const isSelected = selectedAreaId === area.id;
            return (
              <button
                key={area.id}
                type="button"
                onClick={() => setSelectedAreaId(area.id)}
                className={`p-4 border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1A1A1A] text-[#F5F2ED] border-[#1A1A1A] shadow-sm'
                    : 'bg-white hover:bg-[#F5F2ED] text-[#1A1A1A] border-[#1A1A1A]/15'
                }`}
              >
                <div>
                  <span className={`text-[10px] uppercase tracking-[0.2em] font-semibold block ${isSelected ? 'text-[#C2BDAF]' : 'text-[#666666]'}`}>
                    Zone 0{SEATING_AREAS.indexOf(area) + 1}
                  </span>
                  <h3 className="font-serif font-normal text-base sm:text-lg mt-0.5 leading-snug">
                    {area.name}
                  </h3>
                </div>
                <span className={`text-xs mt-3 block font-light ${isSelected ? 'text-[#EAE7E2]' : 'text-[#666666]'}`}>
                  {area.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Zone Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeArea.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-white border border-[#1A1A1A]/20 shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Image Column */}
            <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[420px] bg-[#EAE7E2] border-b lg:border-b-0 lg:border-r border-[#1A1A1A]/15">
              <img
                src={activeArea.image}
                alt={activeArea.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#1A1A1A] text-white px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold flex items-center gap-1.5 border border-[#1A1A1A]">
                <Sparkles className="w-3 h-3 text-[#EAE7E2]" />
                <span>{activeArea.subtitle}</span>
              </div>
              {activeArea.dogFriendly && (
                <div className="absolute bottom-4 left-4 bg-white text-[#1A1A1A] px-3.5 py-1.5 text-[10px] uppercase tracking-wider font-semibold shadow-md flex items-center gap-1.5 border border-[#1A1A1A]/20">
                  <Dog className="w-3.5 h-3.5 text-[#1A1A1A]" />
                  <span>Dog Friendly Area</span>
                </div>
              )}
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-semibold">
                    Seating Oasis Details
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1A1A] mt-1">
                    {activeArea.name}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#666666] leading-relaxed font-light">
                  {activeArea.description}
                </p>

                {/* Key Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#1A1A1A]/10 text-xs text-[#1A1A1A]">
                  <div className="flex items-center gap-2 bg-[#F5F2ED] p-3 border border-[#1A1A1A]/10">
                    <Users className="w-4 h-4 text-[#1A1A1A]" />
                    <span><strong>Capacity:</strong> {activeArea.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#F5F2ED] p-3 border border-[#1A1A1A]/10">
                    <Clock className="w-4 h-4 text-[#1A1A1A]" />
                    <span><strong>Best Hours:</strong> {activeArea.bestTime}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]">
                    Atmosphere & Amenities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeArea.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-xs text-[#1A1A1A]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#666666]">
                  Recommended for: <strong className="text-[#1A1A1A]">{activeArea.recommendedFor}</strong>
                </div>

                <button
                  type="button"
                  id={`reserve-oasis-${activeArea.id}-btn`}
                  onClick={() => onReserveArea(activeArea.id)}
                  className="w-full sm:w-auto px-6 py-3 bg-[#1A1A1A] hover:bg-black text-[#F5F2ED] font-semibold text-xs uppercase tracking-[0.18em] border border-[#1A1A1A] flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve in {activeArea.name.split(' ')[1] || 'This Area'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
