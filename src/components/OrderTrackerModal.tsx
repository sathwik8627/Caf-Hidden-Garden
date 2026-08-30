import React, { useEffect, useState } from 'react';
import { Order } from '../types';
import { CheckCircle2, Clock, Coffee, PackageCheck, Sparkles, X, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { CafeLogo } from './CafeLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { formatOrderInquiryWhatsAppMessage, openWhatsAppChat, CAFE_DISPLAY_PHONE } from '../utils/whatsapp';

interface OrderTrackerModalProps {
  order: Order | null;
  isOpen: boolean;
  onClose: () => void;
}

export const OrderTrackerModal: React.FC<OrderTrackerModalProps> = ({
  order,
  isOpen,
  onClose
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [minutesRemaining, setMinutesRemaining] = useState(15);

  useEffect(() => {
    if (!isOpen || !order) return;
    setCurrentStep(1);
    setMinutesRemaining(15);

    const stepTimer1 = setTimeout(() => setCurrentStep(2), 5000);
    const stepTimer2 = setTimeout(() => {
      setCurrentStep(3);
      setMinutesRemaining(8);
    }, 14000);
    const stepTimer3 = setTimeout(() => {
      setCurrentStep(4);
      setMinutesRemaining(0);
    }, 24000);

    return () => {
      clearTimeout(stepTimer1);
      clearTimeout(stepTimer2);
      clearTimeout(stepTimer3);
    };
  }, [isOpen, order]);

  if (!isOpen || !order) return null;

  const steps = [
    { num: 1, label: 'Order Confirmed', desc: 'Received & sent to Garden Barista', icon: CheckCircle2 },
    { num: 2, label: 'Handcrafted Brewing', desc: 'Espresso pulling & steaming botanicals', icon: Coffee },
    { num: 3, label: 'Eco Packaging', desc: 'Packed with 100% compostable boxes', icon: PackageCheck },
    { num: 4, label: 'Ready at Garden Counter', desc: 'Pick up under the conservatory arch', icon: Sparkles }
  ];

  return (
    <div id="order-tracker-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
      <motion.div
        id="order-tracker-modal-card"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg bg-[#F5F2ED] border border-[#1A1A1A] text-[#1A1A1A] shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-[#1A1A1A] text-white p-6 relative border-b border-white/10">
          <button
            id="close-order-tracker-btn"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2 border border-white/20 hover:bg-white/10 text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3.5 mb-2">
            <CafeLogo variant="dark" size="xs" showTagline={false} />
            <div>
              <div className="flex items-center gap-2 text-[#888888] text-[10px] uppercase tracking-[0.2em] font-semibold mb-0.5">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                Live Order Status
              </div>
              <h2 className="font-serif text-2xl font-normal tracking-wide">
                Order #{order.orderNumber}
              </h2>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-[#888888] font-light pt-2 border-t border-white/10">
            <span>Guest: <strong className="text-white font-medium">{order.customerName}</strong></span>
            <span>Est. Ready: <strong className="text-white font-medium">{order.pickupTime}</strong></span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Estimated Time Card */}
          <div className="bg-[#EAE7E2] p-4 border border-[#1A1A1A]/15 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#1A1A1A] text-white">
                <Clock className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#666666] font-semibold">Estimated Wait</p>
                <p className="font-serif text-xl font-normal text-[#1A1A1A]">
                  {minutesRemaining > 0 ? `~${minutesRemaining} Minutes` : 'Ready for Pick-Up!'}
                </p>
              </div>
            </div>
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[#1A1A1A] text-white">
              {order.orderType === 'takeaway' ? 'Takeaway' : `Table #${order.tableNumber || 'Garden'}`}
            </span>
          </div>

          {/* Stepper */}
          <div className="space-y-4">
            {steps.map((s) => {
              const isPassed = currentStep > s.num;
              const isCurrent = currentStep === s.num;
              const IconComp = s.icon;

              return (
                <div key={s.num} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 flex items-center justify-center font-semibold text-xs transition-all duration-300 ${
                        isPassed
                          ? 'bg-[#1A1A1A] text-white border border-[#1A1A1A]'
                          : isCurrent
                          ? 'bg-white text-[#1A1A1A] border-2 border-[#1A1A1A]'
                          : 'bg-[#EAE7E2] text-stone-400 border border-[#1A1A1A]/15'
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    {s.num < 4 && (
                      <div
                        className={`w-px h-7 my-1 transition-all duration-300 ${
                          isPassed ? 'bg-[#1A1A1A]' : 'bg-[#1A1A1A]/15'
                        }`}
                      />
                    )}
                  </div>
                  <div className="pt-0.5">
                    <h4 className={`text-xs uppercase tracking-wider font-semibold ${isCurrent ? 'text-[#1A1A1A]' : isPassed ? 'text-[#1A1A1A]' : 'text-stone-400'}`}>
                      {s.label}
                    </h4>
                    <p className="text-xs text-[#666666] font-light mt-0.5">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Items Summary list */}
          <div className="border-t border-[#1A1A1A]/15 pt-4 space-y-2">
            <h4 className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#1A1A1A]">
              Order Summary ({order.items.length} items)
            </h4>
            <div className="max-h-32 overflow-y-auto space-y-1.5 pr-1">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex justify-between text-xs text-[#1A1A1A]">
                  <span>{item.quantity}x {item.menuItem.name}</span>
                  <span className="font-serif">₹{item.totalPrice.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm font-normal text-[#1A1A1A] border-t border-[#1A1A1A]/15 pt-2 font-serif">
              <span>Total Paid</span>
              <span className="font-semibold">₹{order.total.toFixed(2)}</span>
            </div>
          </div>

          {/* Pick up info & WhatsApp */}
          <div className="bg-[#EAE7E2] p-3.5 border border-[#1A1A1A]/15 text-xs text-[#666666] space-y-2 font-light">
            <div className="flex items-center gap-1.5 font-medium text-[#1A1A1A]">
              <MapPin className="w-4 h-4 text-[#1A1A1A]" />
              <span>Café Hidden Garden • Main Conservatory Bar</span>
            </div>
            <p className="pl-5 text-xs text-[#666666]">
              428 Wisteria Lane, Historic Botanical Conservatory
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-1 border-t border-[#1A1A1A]/10">
              <div className="flex items-center gap-1.5 text-xs text-[#1A1A1A]">
                <Phone className="w-3.5 h-3.5" />
                <span>Bar Hotline: <strong>{CAFE_DISPLAY_PHONE}</strong></span>
              </div>
              <button
                type="button"
                id="tracker-whatsapp-inquiry-btn"
                onClick={() => openWhatsAppChat(formatOrderInquiryWhatsAppMessage(order))}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-[11px] font-semibold uppercase tracking-wider rounded-xs transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>Chat with Barista</span>
              </button>
            </div>
          </div>

          <button
            type="button"
            id="dismiss-tracker-btn"
            onClick={onClose}
            className="w-full py-3 bg-[#1A1A1A] hover:bg-black text-[#F5F2ED] font-semibold text-xs uppercase tracking-wider border border-[#1A1A1A] transition-all cursor-pointer"
          >
            Done / Keep Order Open
          </button>
        </div>
      </motion.div>
    </div>
  );
};
