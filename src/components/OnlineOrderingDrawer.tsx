import React, { useState } from 'react';
import { CartItem, Order } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, UtensilsCrossed, Tag, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { CafeLogo } from './CafeLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { formatOrderWhatsAppMessage, openWhatsAppChat, CAFE_DISPLAY_PHONE } from '../utils/whatsapp';

interface OnlineOrderingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (cartItemId: string, delta: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
  onOrderPlaced: (order: Order) => void;
}

export const OnlineOrderingDrawer: React.FC<OnlineOrderingDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOrderPlaced
}) => {
  const [orderType, setOrderType] = useState<'takeaway' | 'table_order'>('takeaway');
  const [tableNumber, setTableNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [tipPercent, setTipPercent] = useState<number>(18);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.totalPrice, 0);
  const discountAmount = (subtotal * discount) / 100;
  const taxableSubtotal = Math.max(0, subtotal - discountAmount);
  const tax = taxableSubtotal * 0.0825; // 8.25% tax
  const tip = (taxableSubtotal * tipPercent) / 100;
  const total = taxableSubtotal + tax + tip;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    if (promoCode.trim().toUpperCase() === 'GARDEN10') {
      setDiscount(10);
      setPromoApplied(true);
    } else if (promoCode.trim().toUpperCase() === 'BLOOM20') {
      setDiscount(20);
      setPromoApplied(true);
    } else {
      setPromoError('Invalid promo code. Try GARDEN10 for 10% off.');
    }
  };

  const buildOrderObject = (): Order | null => {
    if (!customerName || !phone) {
      alert('Please provide your name and phone number for the order.');
      return null;
    }
    if (orderType === 'table_order' && !tableNumber) {
      alert('Please enter your Table Number for dine-in garden delivery.');
      return null;
    }

    return {
      id: `ord_${Date.now()}`,
      orderNumber: Math.floor(1000 + Math.random() * 9000).toString(),
      items: [...cart],
      subtotal,
      tip,
      tax,
      total,
      orderType,
      tableNumber: orderType === 'table_order' ? tableNumber : undefined,
      pickupTime: orderType === 'takeaway' ? 'Ready in 15-20 Mins' : 'Table Service in 10-15 Mins',
      customerName,
      phone,
      email: email || 'visitor@garden.cafe',
      status: 'received',
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrder = buildOrderObject();
    if (!newOrder) return;

    setIsSubmitting(true);
    setTimeout(() => {
      // Confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#38533E', '#5C8363', '#B7CEB2', '#D3C5AE', '#E7DECE']
        });
      } catch {
        // ignore
      }

      onOrderPlaced(newOrder);
      onClearCart();
      setIsSubmitting(false);
      onClose();
    }, 800);
  };

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    const newOrder = buildOrderObject();
    if (!newOrder) return;

    const message = formatOrderWhatsAppMessage({
      orderNumber: newOrder.orderNumber,
      orderType: newOrder.orderType,
      tableNumber: newOrder.tableNumber,
      customerName: newOrder.customerName,
      phone: newOrder.phone,
      items: newOrder.items,
      subtotal: newOrder.subtotal,
      discount,
      discountAmount,
      tax: newOrder.tax,
      tip: newOrder.tip,
      total: newOrder.total
    });

    openWhatsAppChat(message);

    // Clear cart and close drawer immediately without showing any extra popups or trackers
    onClearCart();
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div id="ordering-drawer-backdrop" className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs">
        <div className="absolute inset-0" onClick={onClose} />
        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            id="ordering-drawer-container"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-screen max-w-md bg-[#F5F2ED] border-l border-[#1A1A1A] shadow-2xl flex flex-col justify-between text-[#1A1A1A]"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-[#1A1A1A]/15 bg-[#1A1A1A] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CafeLogo variant="dark" size="xs" showTagline={false} />
                <div>
                  <h3 className="font-serif text-xl font-normal text-white">
                    Your Botanical Bag
                  </h3>
                  <p className="text-xs text-[#888888] font-light">
                    {cart.reduce((s, i) => s + i.quantity, 0)} items selected • Café Hidden Garden
                  </p>
                </div>
              </div>
              <button
                id="close-drawer-btn"
                onClick={onClose}
                aria-label="Close bag"
                className="p-2 border border-white/20 hover:bg-white/10 text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto border border-[#1A1A1A]/20 bg-white flex items-center justify-center text-[#1A1A1A]">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-xl font-normal text-[#1A1A1A]">Your bag is empty</h4>
                  <p className="text-xs text-[#666666] max-w-xs mx-auto font-light">
                    Browse our seasonal botanical coffee, matcha elixirs, and fresh bakery treats to add to your order.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2.5 bg-[#1A1A1A] hover:bg-black text-[#F5F2ED] text-xs font-semibold uppercase tracking-wider border border-[#1A1A1A] transition-all cursor-pointer"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <>
                  {/* Order Type Toggle */}
                  <div className="bg-[#EAE7E2] p-1 border border-[#1A1A1A]/15 flex gap-1">
                    <button
                      type="button"
                      onClick={() => setOrderType('takeaway')}
                      className={`flex-1 py-2 px-3 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        orderType === 'takeaway'
                          ? 'bg-[#1A1A1A] text-white'
                          : 'text-[#666666] hover:text-[#1A1A1A]'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Takeaway</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('table_order')}
                      className={`flex-1 py-2 px-3 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        orderType === 'table_order'
                          ? 'bg-[#1A1A1A] text-white'
                          : 'text-[#666666] hover:text-[#1A1A1A]'
                      }`}
                    >
                      <UtensilsCrossed className="w-3.5 h-3.5" />
                      <span>Table Order</span>
                    </button>
                  </div>

                  {/* Cart Items List */}
                  <div className="space-y-4">
                    {cart.map(item => (
                      <div
                        key={item.cartItemId}
                        className="p-4 bg-white border border-[#1A1A1A]/15 shadow-xs space-y-3"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <img
                            src={item.menuItem.image}
                            alt={item.menuItem.name}
                            className="w-14 h-14 object-cover bg-[#EAE7E2] border border-[#1A1A1A]/15"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-serif font-medium text-sm text-[#1A1A1A] truncate">
                              {item.menuItem.name}
                            </h4>
                            <div className="text-xs text-[#666666] space-y-0.5 mt-0.5 font-light">
                              {Object.entries(item.selectedOptions).map(([k, v]) => (
                                <p key={k}>
                                  <span className="text-stone-400">{k}:</span> {v}
                                </p>
                              ))}
                              {item.specialInstructions && (
                                <p className="italic text-[#1A1A1A]">
                                  Note: "{item.specialInstructions}"
                                </p>
                              )}
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.cartItemId)}
                            aria-label="Remove item"
                            className="text-stone-400 hover:text-black p-1 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between border-t border-[#1A1A1A]/10 pt-2">
                          <div className="flex items-center gap-2 bg-[#F5F2ED] border border-[#1A1A1A]/15 px-2.5 py-1">
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.cartItemId, -1)}
                              aria-label="Decrease quantity"
                              className="text-[#1A1A1A] hover:opacity-70 p-0.5 cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-semibold w-4 text-center">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.cartItemId, 1)}
                              aria-label="Increase quantity"
                              className="text-[#1A1A1A] hover:opacity-70 p-0.5 cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-serif font-medium text-sm text-[#1A1A1A]">
                            ₹{item.totalPrice.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Promo Code */}
                  <form onSubmit={handleApplyPromo} className="space-y-1.5">
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                        <input
                          type="text"
                          value={promoCode}
                          onChange={e => setPromoCode(e.target.value)}
                          placeholder="Promo code (e.g. CAFE10)"
                          className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#1A1A1A]/20 uppercase focus:outline-none focus:border-[#1A1A1A]"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-[#1A1A1A] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                      >
                        Apply
                      </button>
                    </div>
                    {promoApplied && (
                      <p className="text-xs text-[#1A1A1A] flex items-center gap-1 font-medium">
                        <Check className="w-3.5 h-3.5" /> {discount}% Special discount applied!
                      </p>
                    )}
                    {promoError && (
                      <p className="text-xs text-stone-600 font-medium">{promoError}</p>
                    )}
                  </form>

                  {/* Guest Details Form */}
                  <div className="space-y-3 bg-[#EAE7E2] p-4 border border-[#1A1A1A]/15">
                    <h4 className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#1A1A1A]">
                      {orderType === 'takeaway' ? 'Pick-Up Guest Info' : 'Table Delivery Info'}
                    </h4>
                    {orderType === 'table_order' && (
                      <div>
                        <label className="text-xs text-[#1A1A1A] font-semibold block mb-1">
                          Table Number *
                        </label>
                        <input
                          type="text"
                          required
                          value={tableNumber}
                          onChange={e => setTableNumber(e.target.value)}
                          placeholder="e.g., Table 4 (Conservatory)"
                          className="w-full px-3 py-2 text-xs bg-white border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A]"
                        />
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <label className="text-xs text-[#1A1A1A] font-semibold block mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={customerName}
                          onChange={e => setCustomerName(e.target.value)}
                          placeholder="e.g. Priya Sharma"
                          className="w-full px-3 py-2 text-xs bg-white border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A]"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-[#1A1A1A] font-semibold block mb-1">
                          Phone (for SMS alert) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={e => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-3 py-2 text-xs bg-white border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Tip Selection */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#1A1A1A] flex justify-between">
                      <span>Barista & Staff Gratuity</span>
                      <span className="font-serif text-[#1A1A1A]">₹{tip.toFixed(2)}</span>
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[10, 15, 20, 0].map(pct => (
                        <button
                          key={pct}
                          type="button"
                          onClick={() => setTipPercent(pct)}
                          className={`py-1.5 text-xs font-semibold border transition-all cursor-pointer ${
                            tipPercent === pct
                              ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                              : 'bg-white text-[#666666] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                          }`}
                        >
                          {pct === 0 ? 'No Tip' : `${pct}%`}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Bottom Checkout Action */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-[#1A1A1A]/15 bg-white space-y-4 shadow-lg">
                <div className="space-y-1.5 text-xs text-[#666666] font-light">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-serif text-[#1A1A1A] font-normal">₹{subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-[#1A1A1A] font-medium">
                      <span>Promo Discount ({discount}%)</span>
                      <span className="font-serif">-₹{discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>GST (5.0%)</span>
                    <span className="font-serif text-[#1A1A1A] font-normal">₹{tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gratuity</span>
                    <span className="font-serif text-[#1A1A1A] font-normal">₹{tip.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base font-normal text-[#1A1A1A] pt-2 border-t border-[#1A1A1A]/15 font-serif">
                    <span>Total Due</span>
                    <span className="font-semibold">₹{total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    type="button"
                    id="order-via-whatsapp-btn"
                    onClick={handleWhatsAppOrder}
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs uppercase tracking-wider border border-[#1EBE5D] shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>Order via WhatsApp ({orderType === 'takeaway' ? 'Takeaway' : 'Table Service'})</span>
                  </button>

                  <p className="text-[11px] text-center text-[#666666] font-light">
                    Instant dispatch to Barista WhatsApp: <strong className="text-[#1A1A1A]">{CAFE_DISPLAY_PHONE}</strong>
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
