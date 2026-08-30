import React, { useState } from 'react';
import { SeatingArea, Reservation } from '../types';
import { SEATING_AREAS } from '../data/mockData';
import { X, Calendar, Clock, Users, Sparkles, Check, Download, MapPin, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { CafeLogo } from './CafeLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { formatReservationWhatsAppMessage, openWhatsAppChat, CAFE_DISPLAY_PHONE } from '../utils/whatsapp';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSeatingAreaId?: string;
  onReservationConfirmed?: (res: Reservation) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  initialSeatingAreaId,
  onReservationConfirmed
}) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [selectedAreaId, setSelectedAreaId] = useState(initialSeatingAreaId || 'greenhouse');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('10:30 AM (Peak Brunch)');
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState('Casual Garden Brunch');
  const [guestName, setGuestName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [confirmedReservation, setConfirmedReservation] = useState<Reservation | null>(null);

  // Sync initial area
  React.useEffect(() => {
    if (initialSeatingAreaId) {
      setSelectedAreaId(initialSeatingAreaId);
    }
  }, [initialSeatingAreaId]);

  if (!isOpen) return null;

  const timeSlots = [
    '08:00 AM (Sunrise Coffee)',
    '09:15 AM (Morning Sun)',
    '10:30 AM (Peak Brunch)',
    '11:45 AM (Midday Sun)',
    '01:00 PM (Garden Lunch)',
    '02:30 PM (Afternoon Tea)',
    '04:00 PM (Garden Reading)',
    '05:30 PM (Golden Hour)',
    '07:00 PM (Aperitivo & Stars)'
  ];

  const occasions = [
    'Casual Garden Brunch',
    'Romantic Date / Anniversary',
    'Birthday Celebration',
    'Work & Coffee Session',
    'Family Gathering',
    'Private Tea Tasting'
  ];

  const handleClose = () => {
    setStep('form');
    onClose();
  };

  const createReservationData = (): Reservation | null => {
    if (!guestName || !phone) {
      alert('Please fill out your contact details (Name and Phone number).');
      return null;
    }

    const selectedArea = SEATING_AREAS.find(a => a.id === selectedAreaId) || SEATING_AREAS[0];
    const code = `HG-${Math.floor(10000 + Math.random() * 90000)}`;

    const newRes: Reservation = {
      id: `res_${Date.now()}`,
      referenceCode: code,
      guestName,
      email: email || 'visitor@garden.cafe',
      phone,
      date,
      timeSlot,
      guests,
      seatingAreaId: selectedArea.id,
      seatingAreaName: selectedArea.name,
      occasion,
      specialRequests: specialRequests.trim() || undefined,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    setConfirmedReservation(newRes);
    setStep('confirmed');
    if (onReservationConfirmed) {
      onReservationConfirmed(newRes);
    }

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#38533E', '#5C8363', '#B7CEB2', '#D8E4D5', '#D3C5AE']
      });
    } catch {
      // ignore
    }

    return newRes;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createReservationData();
  };

  const handleReserveViaWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!guestName || !phone) {
      alert('Please provide your Name and Phone Number to continue to WhatsApp.');
      return;
    }

    const selectedArea = SEATING_AREAS.find(a => a.id === selectedAreaId) || SEATING_AREAS[0];
    const code = `HG-${Math.floor(10000 + Math.random() * 90000)}`;

    const message = formatReservationWhatsAppMessage({
      referenceCode: code,
      guestName,
      phone,
      email: email || undefined,
      date,
      timeSlot,
      guests,
      seatingAreaName: selectedArea.name,
      occasion,
      specialRequests: specialRequests.trim() || undefined
    });

    openWhatsAppChat(message);

    // Close the reservation modal immediately without showing the confirmation tab
    setStep('form');
    onClose();
  };

  const handleSendConfirmedToWhatsApp = () => {
    if (!confirmedReservation) return;
    const message = formatReservationWhatsAppMessage({
      referenceCode: confirmedReservation.referenceCode,
      guestName: confirmedReservation.guestName,
      phone: confirmedReservation.phone,
      email: confirmedReservation.email,
      date: confirmedReservation.date,
      timeSlot: confirmedReservation.timeSlot,
      guests: confirmedReservation.guests,
      seatingAreaName: confirmedReservation.seatingAreaName,
      occasion: confirmedReservation.occasion,
      specialRequests: confirmedReservation.specialRequests
    });

    openWhatsAppChat(message);
  };

  const handleDownloadIcs = () => {
    if (!confirmedReservation) return;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Cafe Hidden Garden//Table Reservation//EN
BEGIN:VEVENT
SUMMARY:Table at Café Hidden Garden (${confirmedReservation.seatingAreaName})
DESCRIPTION:Reservation #${confirmedReservation.referenceCode} for ${confirmedReservation.guests} guests in ${confirmedReservation.seatingAreaName}.
LOCATION:Café Hidden Garden, 428 Wisteria Lane, Historic Botanical Conservatory
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `CafeHiddenGarden_Reservation_${confirmedReservation.referenceCode}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div id="reservation-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm overflow-y-auto">
        <motion.div
          id="reservation-modal-card"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#F5F2ED] border border-[#1A1A1A] text-[#1A1A1A] my-8 overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="bg-[#1A1A1A] text-[#F5F2ED] p-6 sm:p-8 relative border-b border-[#1A1A1A] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <CafeLogo variant="dark" size="sm" showTagline={false} />
              <div>
                <div className="flex items-center gap-2 text-[#C2BDAF] text-[10px] uppercase tracking-[0.25em] font-semibold mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Table Concierge
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight">
                  {step === 'form' ? 'Reserve a Conservatory Table' : 'Your Reservation is Confirmed'}
                </h2>
                <p className="text-xs text-[#888888] mt-1 font-light">
                  {step === 'form'
                    ? 'Select your preferred seating oasis, arrival time, and party requirements.'
                    : 'We look forward to welcoming you into our botanical sanctuary.'}
                </p>
              </div>
            </div>
            <button
              id="close-res-modal-btn"
              onClick={handleClose}
              aria-label="Close modal"
              className="p-2 border border-white/20 hover:bg-white/10 text-white transition-all cursor-pointer shrink-0 self-start"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              {/* 1. Seating Area Selector */}
              <div>
                <label className="text-[10px] uppercase font-semibold tracking-[0.25em] text-[#1A1A1A] block mb-3">
                  1. Choose Your Botanical Seating Oasis
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SEATING_AREAS.map(area => {
                    const isSelected = selectedAreaId === area.id;
                    return (
                      <div
                        key={area.id}
                        onClick={() => setSelectedAreaId(area.id)}
                        className={`relative border p-3 cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-white border-[#1A1A1A] ring-1 ring-[#1A1A1A]'
                            : 'bg-[#EAE7E2] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={area.image}
                            alt={area.name}
                            className="w-14 h-14 object-cover border border-[#1A1A1A]/20"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-serif font-medium text-sm text-[#1A1A1A] truncate">
                              {area.name}
                            </h4>
                            <p className="text-xs text-[#666666] font-light truncate">{area.subtitle}</p>
                            <span className="inline-block mt-1 text-[10px] font-medium text-[#1A1A1A] bg-white px-2 py-0.5 border border-[#1A1A1A]/20">
                              {area.capacity}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 2. Date, Time, Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="res-date" className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#1A1A1A] flex items-center gap-1.5 mb-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#1A1A1A]" />
                    Date
                  </label>
                  <input
                    id="res-date"
                    type="date"
                    required
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white text-xs border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <div>
                  <label htmlFor="res-time" className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#1A1A1A] flex items-center gap-1.5 mb-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#1A1A1A]" />
                    Time Slot
                  </label>
                  <select
                    id="res-time"
                    value={timeSlot}
                    onChange={e => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white text-xs border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A]"
                  >
                    {timeSlots.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="res-guests" className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#1A1A1A] flex items-center gap-1.5 mb-1.5">
                    <Users className="w-3.5 h-3.5 text-[#1A1A1A]" />
                    Guests
                  </label>
                  <select
                    id="res-guests"
                    value={guests}
                    onChange={e => setGuests(Number(e.target.value))}
                    className="w-full px-3 py-2.5 bg-white text-xs border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 3. Occasion */}
              <div>
                <label className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#1A1A1A] block mb-1.5">
                  Occasion & Ambience
                </label>
                <div className="flex flex-wrap gap-2">
                  {occasions.map(occ => (
                    <button
                      key={occ}
                      type="button"
                      onClick={() => setOccasion(occ)}
                      className={`px-3 py-1.5 text-xs border transition-all cursor-pointer font-medium ${
                        occasion === occ
                          ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                          : 'bg-white text-[#666666] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                      }`}
                    >
                      {occ}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Contact Details */}
              <div className="space-y-3 bg-[#EAE7E2] p-4 border border-[#1A1A1A]/15">
                <h4 className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#1A1A1A]">
                  Primary Guest Contact Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label htmlFor="res-name" className="text-xs font-semibold text-[#1A1A1A] block mb-1">
                      Full Name *
                    </label>
                    <input
                      id="res-name"
                      type="text"
                      required
                      value={guestName}
                      onChange={e => setGuestName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 text-xs bg-white border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                  <div>
                    <label htmlFor="res-email" className="text-xs font-semibold text-[#1A1A1A] block mb-1">
                      Email Address *
                    </label>
                    <input
                      id="res-email"
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full px-3 py-2 text-xs bg-white border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                  <div>
                    <label htmlFor="res-phone" className="text-xs font-semibold text-[#1A1A1A] block mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="(555) 123-4567"
                      className="w-full px-3 py-2 text-xs bg-white border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="res-requests" className="text-xs font-semibold text-[#1A1A1A] block mb-1">
                    Special Seating Requests / Dietary Notes
                  </label>
                  <input
                    id="res-requests"
                    type="text"
                    value={specialRequests}
                    onChange={e => setSpecialRequests(e.target.value)}
                    placeholder="e.g., quiet table near wisteria arbor, anniversary celebration..."
                    className="w-full px-3 py-2 text-xs bg-white border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>
              </div>

              {/* Submit / WhatsApp Booking Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-3 border-t border-[#1A1A1A]/10">
                <div className="text-xs text-[#666666] font-light flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#1A1A1A] shrink-0" />
                  <span>Instant confirmation • WhatsApp Concierge: <strong>{CAFE_DISPLAY_PHONE}</strong></span>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-2.5">
                  <button
                    type="button"
                    id="reserve-via-whatsapp-btn"
                    onClick={handleReserveViaWhatsApp}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#1EBE5D] shadow-xs hover:shadow-md transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>Book via WhatsApp</span>
                  </button>
                  <button
                    type="submit"
                    id="confirm-table-booking-btn"
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#1A1A1A] hover:bg-black text-[#F5F2ED] font-semibold text-xs uppercase tracking-wider border border-[#1A1A1A] transition-all cursor-pointer"
                  >
                    Confirm in App
                  </button>
                </div>
              </div>
            </form>
          ) : (
            /* Confirmed Pass */
            <div className="p-6 sm:p-8 space-y-6">
              <div className="bg-[#EAE7E2] p-6 border border-[#1A1A1A] text-center space-y-4">
                <div className="flex justify-center">
                  <CafeLogo size="md" showTagline={false} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-semibold">
                    Reservation Reference Pass
                  </span>
                  <h3 className="font-serif text-3xl font-normal text-[#1A1A1A] tracking-wider mt-1">
                    {confirmedReservation?.referenceCode}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 border border-[#1A1A1A]/15 text-left text-xs">
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase tracking-wider">Guest</span>
                    <strong className="text-[#1A1A1A] font-medium">{confirmedReservation?.guestName}</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase tracking-wider">Date</span>
                    <strong className="text-[#1A1A1A] font-serif">{confirmedReservation?.date}</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase tracking-wider">Time</span>
                    <strong className="text-[#1A1A1A] font-serif">{confirmedReservation?.timeSlot}</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase tracking-wider">Party</span>
                    <strong className="text-[#1A1A1A] font-medium">{confirmedReservation?.guests} Guests</strong>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-[#1A1A1A]">
                  <MapPin className="w-4 h-4 text-[#1A1A1A]" />
                  <span>Zone: <strong className="font-medium">{confirmedReservation?.seatingAreaName}</strong></span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  id="send-res-whatsapp-btn"
                  onClick={handleSendConfirmedToWhatsApp}
                  className="py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white border border-[#1EBE5D] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Send to WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={handleDownloadIcs}
                  className="py-3 px-4 bg-white hover:bg-[#EAE7E2] text-[#1A1A1A] border border-[#1A1A1A] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Add to Calendar</span>
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="py-3 px-4 bg-[#1A1A1A] hover:bg-black text-[#F5F2ED] font-semibold text-xs uppercase tracking-wider border border-[#1A1A1A] transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
