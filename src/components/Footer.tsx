import React, { useState } from 'react';
import { Leaf, Mail, Check, Instagram, Facebook, Twitter, MapPin, Phone, Heart } from 'lucide-react';
import { CafeLogo } from './CafeLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { openWhatsAppChat, formatGeneralInquiryWhatsAppMessage, CAFE_DISPLAY_PHONE, CAFE_MAPS_LINK, CAFE_ADDRESS } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#C2BDAF] border-t border-[#1A1A1A] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Newsletter Section */}
        <div className="bg-[#242424] p-8 sm:p-10 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-2 text-[10px] uppercase font-semibold tracking-[0.25em] text-[#C2BDAF]">
              <Leaf className="w-3.5 h-3.5" />
              The Garden Gazette
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
              Receive 10% Off Your First Visit
            </h3>
            <p className="text-xs sm:text-sm text-[#888888] leading-relaxed font-light">
              Subscribe for early access to monthly botanical masterclasses, secret seasonal menus, and harvest journals.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-4 bg-white/5 border border-white/20 text-white flex items-center gap-3">
                <Check className="w-5 h-5 text-white" />
                <span className="text-xs font-light">
                  Welcome to the Garden family. Use promo code <strong className="font-semibold text-white">GARDEN10</strong> at checkout.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full pl-10 pr-4 py-3 bg-[#1A1A1A] text-white text-xs border border-white/20 focus:outline-none focus:border-white"
                  />
                </div>
                <button
                  type="submit"
                  id="newsletter-subscribe-btn"
                  className="px-6 py-3 bg-white hover:bg-[#EAE7E2] text-[#1A1A1A] font-semibold text-xs uppercase tracking-wider border border-white transition-all cursor-pointer whitespace-nowrap"
                >
                  Join Gazette
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-6 border-t border-white/10 text-xs">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-4">
              <CafeLogo variant="dark" size="sm" showTagline={false} />
              <div>
                <span className="font-serif text-2xl font-normal text-white tracking-wide block">
                  Café Hidden Garden
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A2BCAB] font-semibold block mt-0.5">
                  • Hide Away and Find Nature •
                </span>
              </div>
            </div>
            <p className="text-[#888888] leading-relaxed max-w-sm font-light">
              An artisanal coffee sanctuary and botanical bistro nestled inside a restored 1894 Victorian glass conservatory.
            </p>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3 text-white">
                <button
                  type="button"
                  onClick={() => openWhatsAppChat(formatGeneralInquiryWhatsAppMessage('Reservations & Menu'))}
                  className="p-2 border border-[#25D366]/40 bg-[#25D366]/10 hover:bg-[#25D366] hover:text-white transition-all flex items-center gap-2 text-xs font-semibold text-[#25D366] hover:text-white cursor-pointer"
                  aria-label="Order or reserve via WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>WhatsApp: {CAFE_DISPLAY_PHONE}</span>
                </button>
                <a
                  href="https://www.instagram.com/cafe_hidden_garden_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-white/20 bg-white/5 hover:bg-white hover:text-[#1A1A1A] transition-all flex items-center gap-2 text-xs font-semibold"
                  aria-label="Follow Cafe Hidden Garden on Instagram"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>@cafe_hidden_garden_</span>
                </a>
              </div>
              <p className="text-[11px] text-[#888888]">
                Follow us for daily garden specials & stories: <a href="https://www.instagram.com/cafe_hidden_garden_/" target="_blank" rel="noopener noreferrer" className="text-[#C2BDAF] underline hover:text-white">@cafe_hidden_garden_</a>
              </p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm text-white uppercase tracking-wider">
              Explore Garden
            </h4>
            <ul className="space-y-2 text-[#888888] font-light">
              <li><a href="#menu" className="hover:text-white transition-colors">Seasonal Menu</a></li>
              <li><a href="#seating" className="hover:text-white transition-colors">Seating Oasis Zones</a></li>
              <li><a href="#reservations" className="hover:text-white transition-colors">Table Reservations</a></li>
              <li><a href="#workshops" className="hover:text-white transition-colors">Greenhouse Workshops</a></li>
              <li><a href="#story" className="hover:text-white transition-colors">Our Philosophy</a></li>
            </ul>
          </div>

          {/* Col 3: Botanical Zones */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm text-white uppercase tracking-wider">
              Garden Zones
            </h4>
            <ul className="space-y-2 text-[#888888] font-light">
              <li>The Glass Conservatory</li>
              <li>Secret Wisteria Courtyard</li>
              <li>Cozy Fern Atrium</li>
              <li>Heated Pergola Terrace</li>
              <li>Living Plant Nursery Bar</li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm text-white uppercase tracking-wider">
              Contact & Address
            </h4>
            <div className="space-y-2 text-[#888888] font-light">
              <a
                href={CAFE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-1.5 hover:text-white transition-colors group"
              >
                <MapPin className="w-4 h-4 shrink-0 text-white mt-0.5 group-hover:text-[#25D366] transition-colors" />
                <span className="group-hover:underline">{CAFE_ADDRESS.full}</span>
              </a>
              <p className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 shrink-0 text-white" />
                <span>{CAFE_DISPLAY_PHONE}</span>
              </p>
              <button
                type="button"
                onClick={() => openWhatsAppChat(formatGeneralInquiryWhatsAppMessage('Reservations'))}
                className="flex items-center gap-1.5 text-[#25D366] hover:underline cursor-pointer"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0" />
                <span>WhatsApp Desk Active</span>
              </button>
              <p className="pt-2 text-stone-500 font-serif">
                Mon-Thu: 7:30am - 7:30pm<br />
                Fri-Sat: 7:30am - 9:00pm<br />
                Sun: 8:00am - 8:00pm
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
          <p>© 2026 Café Hidden Garden. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Editorial Edition</span>
            <span>•</span>
            <span>Crafted with botanical care</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
