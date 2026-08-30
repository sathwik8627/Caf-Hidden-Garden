import React, { useState, useEffect } from 'react';
import { ShoppingBag, Volume2, VolumeX, Menu, X, CalendarCheck, Sparkles, MapPin, Clock, Instagram } from 'lucide-react';
import { gardenAudio } from '../utils/audioSoundscape';
import { CafeLogo } from './CafeLogo';
import { CAFE_MAPS_LINK } from '../utils/whatsapp';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = gardenAudio.toggle();
    setIsPlayingAudio(active);
  };

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Seating Oasis', href: '#seating' },
    { label: 'Reservations', href: '#reservations' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Our Story', href: '#story' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Hours & Visit', href: '#visit' }
  ];

  return (
    <>
      {/* Top Atmospheric Banner */}
      <div className="bg-[#1A1A1A] text-[#EAE7E2] text-[11px] py-2 px-4 text-center font-medium tracking-[0.2em] uppercase border-b border-[#1A1A1A] flex items-center justify-center gap-4 flex-wrap">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#C2BDAF]" />
          <span>Vol. IV — Seasonal Harvest: Wild Lavender Honey & Uji Matcha</span>
        </span>
        <span className="hidden sm:inline-block text-stone-500">/</span>
        <span className="hidden sm:flex items-center gap-1">
          <Clock className="w-3 h-3 text-[#C2BDAF]" />
          <span>Open Today: 7:30 AM – 8:00 PM</span>
        </span>
        <span className="hidden md:inline-block text-stone-500">/</span>
        <a
          href={CAFE_MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1 text-[#C2BDAF] hover:text-white transition-colors"
          title="Open Café Hidden Garden in Google Maps"
        >
          <MapPin className="w-3 h-3 text-[#C2BDAF]" />
          <span>Tirupati, AP</span>
        </a>
        <span className="hidden sm:inline-block text-stone-500">/</span>
        <a
          href="https://www.instagram.com/cafe_hidden_garden_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[#C2BDAF] hover:text-white transition-colors"
        >
          <Instagram className="w-3.5 h-3.5 text-pink-400" />
          <span>Follow @cafe_hidden_garden_</span>
        </a>
      </div>

      {/* Main Navbar */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5F2ED]/95 backdrop-blur-md shadow-xs border-b border-[#1A1A1A]/20 py-3'
            : 'bg-[#F5F2ED] border-b border-[#1A1A1A]/15 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="shrink-0 transition-transform group-hover:scale-105">
              <CafeLogo size="sm" showTagline={false} />
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-2xl font-normal tracking-tight text-[#1A1A1A] block leading-none">
                Café Hidden Garden
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase font-semibold text-[#666666] block mt-0.5">
                • Hide Away and Find Nature •
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] font-semibold text-[#1A1A1A]/80 hover:text-[#1A1A1A] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#1A1A1A] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions & Sound Control */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Ambient Soundscape Toggle */}
            <button
              type="button"
              id="ambient-sound-toggle-btn"
              onClick={toggleSound}
              title={isPlayingAudio ? 'Mute Garden Soundscape' : 'Play Ambient Garden Soundscape'}
              className={`p-2.5 border text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                isPlayingAudio
                  ? 'bg-[#1A1A1A] text-[#F5F2ED] border-[#1A1A1A]'
                  : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A] hover:bg-[#EAE7E2]'
              }`}
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 className="w-4 h-4 animate-pulse text-[#EAE7E2]" />
                  <span className="hidden sm:inline text-[10px]">Sounds: On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-[#888888]" />
                  <span className="hidden sm:inline text-[10px]">Garden Sounds</span>
                </>
              )}
            </button>

            {/* Instagram Link Button */}
            <a
              href="https://www.instagram.com/cafe_hidden_garden_/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit our Instagram @cafe_hidden_garden_"
              className="p-2.5 bg-white hover:bg-[#EAE7E2] text-[#1A1A1A] border border-[#1A1A1A]/20 hover:border-[#1A1A1A] transition-all hidden md:flex items-center gap-1.5 text-xs font-semibold"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Shopping Bag Trigger */}
            <button
              type="button"
              id="open-bag-btn"
              onClick={onOpenCart}
              aria-label="View shopping bag"
              className="relative p-2.5 bg-white hover:bg-[#EAE7E2] text-[#1A1A1A] border border-[#1A1A1A]/20 hover:border-[#1A1A1A] transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#1A1A1A]" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#1A1A1A] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Book Table Primary CTA */}
            <button
              type="button"
              id="header-book-table-btn"
              onClick={onOpenReservation}
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-[#1A1A1A] hover:bg-black text-[#F5F2ED] font-semibold text-xs uppercase tracking-[0.15em] border border-[#1A1A1A] transition-all cursor-pointer"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Book Table</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2.5 bg-white text-[#1A1A1A] border border-[#1A1A1A]/20 hover:bg-[#EAE7E2] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="lg:hidden bg-[#F5F2ED] border-b border-[#1A1A1A]/20 px-6 py-5 space-y-4 shadow-xl">
            <div className="flex items-center justify-center pb-3 border-b border-[#1A1A1A]/10">
              <CafeLogo size="md" showTagline={true} />
            </div>
            <div className="flex flex-col space-y-3">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1A1A1A] hover:text-[#666666] py-1.5 border-b border-[#1A1A1A]/10"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.instagram.com/cafe_hidden_garden_/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1A1A1A] hover:text-[#666666] py-1.5 border-b border-[#1A1A1A]/10 flex items-center justify-between"
              >
                <span>Instagram Feed</span>
                <span className="text-[10px] text-pink-600 font-bold lowercase">@cafe_hidden_garden_</span>
              </a>
              <a
                href={CAFE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1A1A1A] hover:text-[#666666] py-1.5 border-b border-[#1A1A1A]/10 flex items-center justify-between"
              >
                <span>Google Maps Location</span>
                <span className="text-[10px] text-[#1A1A1A] font-bold">Tirupati ↗</span>
              </a>
            </div>
            <div className="pt-2">
              <button
                type="button"
                id="mobile-book-table-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs uppercase tracking-[0.2em] border border-[#1A1A1A] flex items-center justify-center gap-2 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Reserve a Garden Table</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
