import React, { useState } from 'react';
import { MenuItem, CartItem } from '../types';
import { X, Plus, Minus, Check, Sparkles, Leaf, Flame, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ItemDetailModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (cartItem: CartItem) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item,
  isOpen,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [addedToast, setAddedToast] = useState(false);

  // Initialize defaults when item opens
  React.useEffect(() => {
    if (item) {
      setQuantity(1);
      setSpecialInstructions('');
      setAddedToast(false);
      const defaults: Record<string, string> = {};
      if (item.customizations) {
        item.customizations.forEach(cust => {
          if (cust.options.length > 0) {
            defaults[cust.name] = cust.options[0].label;
          }
        });
      }
      setSelectedOptions(defaults);
    }
  }, [item]);

  if (!item || !isOpen) return null;

  // Calculate unit price based on customization
  let unitPrice = item.price;
  if (item.customizations) {
    item.customizations.forEach(cust => {
      const selectedLabel = selectedOptions[cust.name];
      if (selectedLabel) {
        const optionObj = cust.options.find(o => o.label === selectedLabel);
        if (optionObj) {
          unitPrice += optionObj.priceDelta;
        }
      }
    });
  }
  const totalPrice = unitPrice * quantity;

  const handleOptionSelect = (custName: string, optionLabel: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [custName]: optionLabel
    }));
  };

  const handleAdd = () => {
    const newCartItem: CartItem = {
      cartItemId: `${item.id}-${Date.now()}`,
      menuItem: item,
      quantity,
      selectedOptions,
      specialInstructions: specialInstructions.trim() ? specialInstructions.trim() : undefined,
      unitPrice,
      totalPrice
    };
    onAddToCart(newCartItem);
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      onClose();
    }, 900);
  };

  return (
    <AnimatePresence>
      <div id="item-detail-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
        <motion.div
          id="item-detail-modal-card"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#F5F2ED] border border-[#1A1A1A] text-[#1A1A1A] shadow-2xl"
        >
          {/* Close button */}
          <button
            id="close-item-modal-btn"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-20 p-2 border border-white/30 bg-black/40 hover:bg-black/70 text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image header */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#EAE7E2] border-b border-[#1A1A1A]/15">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
              <div className="flex flex-wrap gap-2 mb-2">
                {item.dietaryTags.map(tag => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold bg-white text-[#1A1A1A] border border-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-end justify-between gap-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-wide">
                  {item.name}
                </h2>
                <div className="bg-white text-[#1A1A1A] font-serif font-bold text-lg sm:text-xl px-3 py-1 shadow-lg shrink-0">
                  ₹{item.price.toFixed(2)}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Description & Botanical Notes */}
            <div>
              <p className="text-sm text-[#666666] leading-relaxed mb-4 font-light">
                {item.description}
              </p>
              <div className="bg-[#EAE7E2] p-4 border border-[#1A1A1A]/15 flex items-start gap-3">
                <Leaf className="w-5 h-5 text-[#1A1A1A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1A1A1A] mb-1">
                    Botanical Flavor Profile
                  </h4>
                  <p className="text-xs text-[#1A1A1A] italic font-serif">
                    "{item.botanicalNotes}"
                  </p>
                </div>
              </div>
            </div>

            {/* Nutrition & Specs */}
            <div className="flex flex-wrap gap-4 text-xs text-[#666666] border-y border-[#1A1A1A]/10 py-3 font-light">
              {item.calories && (
                <div className="flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-[#1A1A1A]" />
                  <span><strong className="text-[#1A1A1A] font-semibold">{item.calories}</strong> kcal</span>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#1A1A1A]" />
                <span>Made fresh to order</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#1A1A1A]" />
                <span>Organic & Locally Sourced</span>
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1A1A1A] mb-2">
                Ingredients & Sourcing
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {item.ingredients.map(ing => (
                  <span
                    key={ing}
                    className="px-2.5 py-1 text-xs bg-white text-[#1A1A1A] border border-[#1A1A1A]/15"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Customizations */}
            {item.customizations && item.customizations.length > 0 && (
              <div className="space-y-4 pt-2">
                <h3 className="font-serif text-lg font-normal text-[#1A1A1A]">
                  Customization
                </h3>
                {item.customizations.map(cust => (
                  <div key={cust.name} className="space-y-2">
                    <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]">
                      {cust.name}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cust.options.map(opt => {
                        const isSelected = selectedOptions[cust.name] === opt.label;
                        return (
                          <button
                            key={opt.label}
                            type="button"
                            onClick={() => handleOptionSelect(cust.name, opt.label)}
                            className={`flex items-center justify-between p-3 border text-xs font-medium transition-all text-left cursor-pointer ${
                              isSelected
                                ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                                : 'bg-white hover:bg-[#EAE7E2] text-[#1A1A1A] border-[#1A1A1A]/20'
                            }`}
                          >
                            <span>{opt.label}</span>
                            {opt.priceDelta > 0 && (
                              <span className={`text-[11px] ${isSelected ? 'text-[#C2BDAF]' : 'text-[#1A1A1A] font-semibold'}`}>
                                +₹{opt.priceDelta.toFixed(2)}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Special Instructions */}
            <div className="space-y-1.5">
              <label htmlFor="special-instructions" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]">
                Special Instructions / Custom Notes
              </label>
              <input
                id="special-instructions"
                type="text"
                value={specialInstructions}
                onChange={e => setSpecialInstructions(e.target.value)}
                placeholder="e.g., extra crisp, less spicy, extra dip, separate cutlery..."
                className="w-full px-4 py-2.5 text-xs bg-white border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A] text-[#1A1A1A]"
              />
            </div>

            {/* Quantity & Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#1A1A1A]/15">
              <div className="flex items-center gap-3 bg-white px-4 py-2 border border-[#1A1A1A]/20">
                <button
                  type="button"
                  id="decrease-qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                  className="p-1 text-[#1A1A1A] hover:opacity-70 cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-semibold text-sm w-6 text-center text-[#1A1A1A]">{quantity}</span>
                <button
                  type="button"
                  id="increase-qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                  className="p-1 text-[#1A1A1A] hover:opacity-70 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                id="add-item-to-order-btn"
                onClick={handleAdd}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1A1A1A] hover:bg-black text-[#F5F2ED] font-semibold text-xs uppercase tracking-wider border border-[#1A1A1A] transition-all cursor-pointer"
              >
                {addedToast ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <span>Add to Order</span>
                    <span>•</span>
                    <span className="font-serif">₹{totalPrice.toFixed(2)}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
