import React from 'react';
import { Logo } from './Logo';
import { ShieldCheck, Phone, MapPin, ArrowRight } from 'lucide-react';
import { NavPage } from './Navbar';
import { WHATSAPP_DISPLAY, PHONE_DISPATCH, openWhatsApp } from '../utils/whatsapp';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const handleNav = (page: NavPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-white text-[#222222] border-t border-[#E5E5E5]">
      <div 
        style={{
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo onClick={() => handleNav('home')} eColor="#c1cf5c" />
            
            <p className="text-xs text-neutral-600 leading-relaxed font-normal pt-1">
              Pakistan's trusted car rental, wedding car, and intercity chauffeur service. Serving travellers, corporate executives, and families from Karachi to Hyderabad, Sukkur, Multan, Lahore, and Islamabad.
            </p>

            <div className="space-y-2 pt-2 text-xs text-[#222222]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0D919C] shrink-0" />
                <span>100% Verified Chauffeurs &amp; Inspected Vehicles</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0D919C] shrink-0" />
                <span>24/7 Roadside Assistance &amp; Booking Desk</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-[#0D919C] font-bold mb-3">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs text-neutral-600 font-medium">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#0D919C] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#0D919C] transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('fleet')} className="hover:text-[#0D919C] transition-colors cursor-pointer">
                  Our Fleet &amp; Rates
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#0D919C] transition-colors cursor-pointer">
                  All Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('routes')} className="hover:text-[#0D919C] transition-colors cursor-pointer">
                  Intercity Routes
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#0D919C] transition-colors cursor-pointer">
                  Contact &amp; Location
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('privacy')} className="hover:text-[#0D919C] transition-colors text-[#0D919C] font-bold cursor-pointer">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Rental Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-[#0D919C] font-bold mb-3">
              Rental Services
            </h3>
            <ul className="space-y-2 text-xs text-neutral-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D919C]"></span>
                <span>Wedding &amp; Bridal Car Decor</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D919C]"></span>
                <span>Executive SUV &amp; V8 Protocol</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D919C]"></span>
                <span>Karachi Airport Pick &amp; Drop</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D919C]"></span>
                <span>Karachi to Hyderabad Express</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D919C]"></span>
                <span>14-Seater HiAce Grand Cabin</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D919C]"></span>
                <span>Northern Areas Tour Packages</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact Desk (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-[#0D919C] font-bold mb-3">
              Contact Us
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-[#0D919C]" />
                </div>
                <div>
                  <a href="tel:+923152292493" className="text-[#111111] font-bold hover:text-[#0D919C] transition-colors">
                    {WHATSAPP_DISPLAY}
                  </a>
                  <div className="text-neutral-500 text-[11px]">Main Booking Hotline</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-[#0D919C]" />
                </div>
                <div>
                  <a href={`tel:+92${PHONE_DISPATCH.replace(/[^0-9]/g, '')}`} className="text-[#111111] font-bold hover:text-[#0D919C] transition-colors">
                    {PHONE_DISPATCH}
                  </a>
                  <div className="text-neutral-500 text-[11px]">Fleet Dispatch Desk</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0D919C]" />
                </div>
                <div className="text-neutral-600 text-xs">
                  Main Korangi Road &amp; DHA Phase 6, Karachi, Sindh, Pakistan
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="footer-quick-inquiry-btn"
                onClick={onOpenBooking}
                style={{ backgroundColor: '#2ca3b5' }}
                className="w-full inline-flex items-center justify-center hover:opacity-90 text-white text-xs font-bold px-4 py-2.5 rounded-[7px] transition-colors cursor-pointer shadow-xs"
              >
                <span>Book a Rental</span>
              </button>
            </div>
          </div>

        </div>

        {/* Copyright & Sub-bar */}
        <div className="mt-12 pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-medium">
          <div className="flex flex-wrap items-center gap-2">
            <span>&copy; 2026 PAK E DRIVE — Rent A Car. All rights reserved.</span>
            <span>•</span>
            <button
              onClick={() => handleNav('privacy')}
              className="text-[#0D919C] hover:underline font-semibold cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span>Karachi • Hyderabad • Lahore • Islamabad</span>
            <span>•</span>
            <span className="text-[#0D919C] font-bold">Chauffeur Luxury Rentals</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
