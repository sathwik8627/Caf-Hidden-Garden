import React from 'react';
import { Calendar, Users, Clock, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { CafeLogo } from './CafeLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { openWhatsAppChat, formatGeneralInquiryWhatsAppMessage, CAFE_DISPLAY_PHONE } from '../utils/whatsapp';

interface ReservationSectionProps {
  onOpenReservationModal: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  onOpenReservationModal
}) => {
  const handleQuickWhatsAppReserve = () => {
    openWhatsAppChat('🌿 *Hello Café Hidden Garden!* I would like to book a table for our upcoming visit. Could you please share available slots? ☕✨');
  };

  return (
    <section id="reservations" className="py-16 sm:py-24 bg-[#F5F2ED] border-b border-[#1A1A1A]/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#1A1A1A] text-[#F5F2ED] p-8 sm:p-12 lg:p-16 border border-[#1A1A1A] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C2BDAF]">
                  Priority Seating
                </span>
                <div className="w-8 h-[1px] bg-[#666666]" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#888888]">
                  Table Concierge
                </span>
              </div>
              <div className="hidden sm:block">
                <CafeLogo variant="dark" size="xs" showTagline={false} />
              </div>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
              Reserve Your Table in the <span className="italic font-normal">Greenhouse Oasis</span>
            </h2>

            <p className="text-sm sm:text-base text-[#C2BDAF] leading-relaxed max-w-xl font-light">
              Whether you are planning a weekend sunrise coffee, romantic brunch, or intimate anniversary dinner, reserve in advance to secure your preferred micro-climate zone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-[#EAE7E2]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C2BDAF] shrink-0" />
                <span>Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C2BDAF] shrink-0" />
                <span>Zero Cancellation Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C2BDAF] shrink-0" />
                <span>Dog & Group Friendly</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                id="inline-reserve-table-btn"
                onClick={onOpenReservationModal}
                className="px-6 sm:px-8 py-4 bg-white hover:bg-[#EAE7E2] text-[#1A1A1A] font-semibold text-xs uppercase tracking-[0.18em] border border-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Calendar className="w-4 h-4 text-[#1A1A1A]" />
                <span>Open Reservation Concierge</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#1A1A1A]" />
              </button>

              <button
                type="button"
                id="whatsapp-direct-reserve-btn"
                onClick={handleQuickWhatsAppReserve}
                className="px-6 py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs uppercase tracking-[0.18em] border border-[#1EBE5D] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp Booking</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="overflow-hidden border border-white/20 aspect-[4/3] bg-[#2C4231]">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Courtyard table setting"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
