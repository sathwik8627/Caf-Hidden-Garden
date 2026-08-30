/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MenuItem, CartItem, Order, Reservation } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { SeatingOasis } from './components/SeatingOasis';
import { ReservationSection } from './components/ReservationSection';
import { ReservationModal } from './components/ReservationModal';
import { ItemDetailModal } from './components/ItemDetailModal';
import { OnlineOrderingDrawer } from './components/OnlineOrderingDrawer';
import { OrderTrackerModal } from './components/OrderTrackerModal';
import { WorkshopsSection } from './components/WorkshopsSection';
import { GardenStory } from './components/GardenStory';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationAndHours } from './components/LocationAndHours';
import { Footer } from './components/Footer';
import { Check, ShoppingBag, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [initialReservationAreaId, setInitialReservationAreaId] = useState<string | undefined>();
  const [activeOrder, setActiveOrder] = useState<Order | null>(null);
  const [isOrderTrackerOpen, setIsOrderTrackerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleSelectItem = (item: MenuItem) => {
    setSelectedMenuItem(item);
    setIsItemModalOpen(true);
  };

  const handleAddToCart = (cartItem: CartItem) => {
    setCart(prev => {
      // Check if identical item with identical options already exists
      const existingIndex = prev.findIndex(i =>
        i.menuItem.id === cartItem.menuItem.id &&
        JSON.stringify(i.selectedOptions) === JSON.stringify(cartItem.selectedOptions) &&
        i.specialInstructions === cartItem.specialInstructions
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += cartItem.quantity;
        updated[existingIndex].totalPrice += cartItem.totalPrice;
        return updated;
      } else {
        return [...prev, cartItem];
      }
    });

    showToast(`Added ${cartItem.menuItem.name} to your garden bag!`);
  };

  const handleQuickAdd = (item: MenuItem) => {
    const defaults: Record<string, string> = {};
    let unitPrice = item.price;
    if (item.customizations) {
      item.customizations.forEach(cust => {
        if (cust.options.length > 0) {
          defaults[cust.name] = cust.options[0].label;
          unitPrice += cust.options[0].priceDelta;
        }
      });
    }

    const newCartItem: CartItem = {
      cartItemId: `${item.id}-${Date.now()}`,
      menuItem: item,
      quantity: 1,
      selectedOptions: defaults,
      unitPrice,
      totalPrice: unitPrice
    };

    handleAddToCart(newCartItem);
  };

  const handleUpdateQuantity = (cartItemId: string, delta: number) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            return {
              ...item,
              quantity: newQty,
              totalPrice: item.unitPrice * newQty
            };
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCart(prev => prev.filter(i => i.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleOrderPlaced = (order: Order) => {
    setActiveOrder(order);
    setIsOrderTrackerOpen(true);
    showToast(`Order #${order.orderNumber} placed successfully!`);
  };

  const handleOpenReservation = (areaId?: string) => {
    setInitialReservationAreaId(areaId);
    setIsReservationOpen(true);
  };

  const handleReservationConfirmed = (res: Reservation) => {
    showToast(`Table confirmed! Reference: ${res.referenceCode}`);
  };

  const cartTotalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#2C332D]">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-4 z-50 bg-[#38533E] text-white px-5 py-3 rounded-2xl shadow-xl border border-white/20 text-xs sm:text-sm font-semibold flex items-center gap-2.5 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-[#B7CEB2]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Active Order Tracker pill if an order is active */}
      {activeOrder && !isOrderTrackerOpen && (
        <button
          type="button"
          onClick={() => setIsOrderTrackerOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-[#38533E] text-white px-4 py-3 rounded-2xl shadow-2xl border border-white/20 text-xs font-bold flex items-center gap-2.5 hover:bg-[#2C4231] transition-all cursor-pointer animate-bounce"
        >
          <Sparkles className="w-4 h-4 text-emerald-300" />
          <span>Active Order #{activeOrder.orderNumber} (Track)</span>
        </button>
      )}

      {/* Navigation Bar */}
      <Navbar
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => handleOpenReservation()}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          onOpenReservation={() => handleOpenReservation()}
          onOpenCart={() => setIsCartOpen(true)}
        />

        <MenuSection
          onSelectItem={handleSelectItem}
          onQuickAdd={handleQuickAdd}
        />

        <SeatingOasis
          onReserveArea={areaId => handleOpenReservation(areaId)}
        />

        <ReservationSection
          onOpenReservationModal={() => handleOpenReservation()}
        />

        <WorkshopsSection />

        <GardenStory />

        <ReviewsSection />

        <LocationAndHours />
      </main>

      {/* Footer */}
      <Footer />

      {/* Item Customization Modal */}
      <ItemDetailModal
        item={selectedMenuItem}
        isOpen={isItemModalOpen}
        onClose={() => {
          setIsItemModalOpen(false);
          setSelectedMenuItem(null);
        }}
        onAddToCart={handleAddToCart}
      />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        initialSeatingAreaId={initialReservationAreaId}
        onReservationConfirmed={handleReservationConfirmed}
      />

      {/* Online Ordering / Bag Drawer */}
      <OnlineOrderingDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOrderPlaced={handleOrderPlaced}
      />

      {/* Live Order Tracker Modal */}
      <OrderTrackerModal
        order={activeOrder}
        isOpen={isOrderTrackerOpen}
        onClose={() => setIsOrderTrackerOpen(false)}
      />
    </div>
  );
}
