import React, { useState } from 'react';
import { WORKSHOPS } from '../data/mockData';
import { Workshop } from '../types';
import { Calendar, Clock, Sparkles, User, Check, Ticket, X, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

export const WorkshopsSection: React.FC = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [tickets, setTickets] = useState(1);
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [ticketCode, setTicketCode] = useState('');

  const handleOpenBooking = (ws: Workshop) => {
    setSelectedWorkshop(ws);
    setTickets(1);
    setAttendeeName('');
    setAttendeeEmail('');
    setIsConfirmed(false);
    setIsBookingOpen(true);
  };

  const handleConfirmTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!attendeeName || !attendeeEmail) {
      alert('Please fill out your name and email.');
      return;
    }
    const code = `TIX-HG-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketCode(code);
    setIsConfirmed(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#38533E', '#5C8363', '#B7CEB2']
      });
    } catch {
      // ignore
    }
  };

  return (
    <section id="workshops" className="py-16 sm:py-24 bg-[#F5F2ED] border-b border-[#1A1A1A]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#1A1A1A]">
              Conservatory Academy
            </span>
            <div className="w-8 h-[1px] bg-[#1A1A1A]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#666666]">
              Masterclasses & Tastings
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1A1A] tracking-tighter">
            Workshops & <span className="italic font-normal">Garden Evenings</span>
          </h2>
          <p className="text-base text-[#666666] leading-relaxed font-light">
            Join our certified Q-grader baristas, master horticulturists, and resident musicians for hands-on sensory workshops inside the conservatory.
          </p>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WORKSHOPS.map(ws => (
            <div
              key={ws.id}
              className="bg-white border border-[#1A1A1A]/15 hover:border-[#1A1A1A] hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Image & Price Tag */}
              <div className="relative h-56 w-full overflow-hidden bg-[#EAE7E2]">
                <img
                  src={ws.image}
                  alt={ws.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#1A1A1A] text-white text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 border border-[#1A1A1A]">
                  {ws.level}
                </div>
                <div className="absolute bottom-3 right-3 bg-white text-[#1A1A1A] font-serif text-base px-3 py-1 border border-[#1A1A1A]/20 shadow-md">
                  ₹{ws.price} <span className="text-xs font-sans font-light text-[#666666]">/ person</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#1A1A1A] font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {ws.date}
                    </span>
                    <span className="text-stone-300">/</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {ws.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-normal text-[#1A1A1A] leading-snug">
                    {ws.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-light">
                    {ws.description}
                  </p>

                  {/* Instructor */}
                  <div className="flex items-center gap-2.5 pt-2 border-t border-[#1A1A1A]/10 text-xs">
                    <div className="w-7 h-7 bg-[#F5F2ED] border border-[#1A1A1A]/20 flex items-center justify-center text-[#1A1A1A]">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1A1A]">{ws.instructor}</p>
                      <p className="text-[11px] text-[#666666]">{ws.instructorRole}</p>
                    </div>
                  </div>

                  {/* Includes pills */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-[#888888] block">
                      Workshop Includes:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {ws.includes.map(inc => (
                        <span key={inc} className="text-[11px] bg-[#F5F2ED] text-[#1A1A1A] px-2 py-0.5 border border-[#1A1A1A]/10">
                          {inc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card footer with remaining spots & button */}
                <div className="pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                  <div className="text-xs font-semibold text-[#1A1A1A] flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>{ws.spotsLeft} spots left</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenBooking(ws)}
                    className="px-4 py-2 bg-[#1A1A1A] hover:bg-black text-[#F5F2ED] font-semibold text-xs uppercase tracking-wider border border-[#1A1A1A] transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Reserve Spot</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Workshop Booking Modal */}
      <AnimatePresence>
        {isBookingOpen && selectedWorkshop && (
          <div id="workshop-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <motion.div
              id="workshop-modal-card"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#F5F2ED] border border-[#1A1A1A] text-[#1A1A1A] shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="bg-[#1A1A1A] text-white p-6 relative border-b border-[#1A1A1A]">
                <button
                  id="close-workshop-modal-btn"
                  onClick={() => setIsBookingOpen(false)}
                  aria-label="Close modal"
                  className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2BDAF] font-semibold">
                  Workshop Ticket Pass
                </span>
                <h3 className="font-serif text-2xl font-normal mt-1">
                  {selectedWorkshop.title}
                </h3>
                <p className="text-xs text-[#C2BDAF] mt-1 font-light">
                  {selectedWorkshop.date} • {selectedWorkshop.time}
                </p>
              </div>

              {!isConfirmed ? (
                <form onSubmit={handleConfirmTicket} className="p-6 space-y-5">
                  <div className="bg-white p-3.5 border border-[#1A1A1A]/15 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[#666666] block">Instructor</span>
                      <strong className="text-[#1A1A1A]">{selectedWorkshop.instructor}</strong>
                    </div>
                    <div className="text-right">
                      <span className="text-[#666666] block">Price per ticket</span>
                      <strong className="text-[#1A1A1A] text-sm">₹{selectedWorkshop.price}</strong>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="space-y-1.5">
                    <label htmlFor="ticket-quantity" className="text-xs uppercase font-bold tracking-wider text-[#1A1A1A]">
                      Select Number of Tickets
                    </label>
                    <select
                      id="ticket-quantity"
                      value={tickets}
                      onChange={e => setTickets(Number(e.target.value))}
                      className="w-full px-3 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs font-semibold focus:outline-none focus:border-[#1A1A1A]"
                    >
                      {[1, 2, 3, 4, Math.min(6, selectedWorkshop.spotsLeft)].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Ticket' : 'Tickets'} — ₹{(num * selectedWorkshop.price).toFixed(2)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Contact */}
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="attendee-name" className="text-xs font-semibold text-[#1A1A1A] block mb-1">
                        Attendee Name *
                      </label>
                      <input
                        id="attendee-name"
                        type="text"
                        required
                        value={attendeeName}
                        onChange={e => setAttendeeName(e.target.value)}
                        placeholder="e.g. Maya Lin"
                        className="w-full px-3 py-2 text-xs bg-white border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A]"
                      />
                    </div>
                    <div>
                      <label htmlFor="attendee-email" className="text-xs font-semibold text-[#1A1A1A] block mb-1">
                        Email Address (for Digital Ticket & Directions) *
                      </label>
                      <input
                        id="attendee-email"
                        type="email"
                        required
                        value={attendeeEmail}
                        onChange={e => setAttendeeEmail(e.target.value)}
                        placeholder="maya@example.com"
                        className="w-full px-3 py-2 text-xs bg-white border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A]"
                      />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#666666] block">Total Due</span>
                      <span className="font-serif text-xl font-normal text-[#1A1A1A]">
                        ₹{(tickets * selectedWorkshop.price).toFixed(2)}
                      </span>
                    </div>
                    <button
                      type="submit"
                      id="confirm-workshop-ticket-btn"
                      className="px-6 py-3 bg-[#1A1A1A] hover:bg-black text-[#F5F2ED] font-semibold text-xs uppercase tracking-wider border border-[#1A1A1A] transition-all cursor-pointer"
                    >
                      Book Ticket Pass
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-6 space-y-6 text-center">
                  <div className="w-14 h-14 mx-auto border border-[#1A1A1A] bg-[#1A1A1A] text-white flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#666666] font-semibold">
                      Your Workshop Pass Code
                    </span>
                    <h4 className="font-serif text-3xl font-normal text-[#1A1A1A] tracking-wider mt-1">
                      {ticketCode}
                    </h4>
                    <p className="text-xs text-[#666666] mt-2">
                      Pass sent to <strong>{attendeeEmail}</strong> for {tickets} attendee(s).
                    </p>
                  </div>

                  <div className="bg-white p-4 border border-[#1A1A1A]/15 text-left text-xs space-y-1">
                    <p className="font-semibold text-[#1A1A1A]">What to bring:</p>
                    <p className="text-[#666666]">• Just your digital ticket code or name on arrival at the Conservatory front bar.</p>
                    <p className="text-[#666666]">• All materials, plant specimens, coffee flights, and tools are provided.</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsBookingOpen(false)}
                    className="w-full py-3 bg-[#1A1A1A] hover:bg-black text-white font-semibold text-xs uppercase tracking-wider border border-[#1A1A1A] transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
