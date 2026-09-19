import React from 'react';
import { Logo } from './Logo';
import { ShieldCheck, Phone, MapPin, ArrowUpRight } from 'lucide-react';
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
    <footer id="main-footer" className="bg-[#0c0d0e] text-white border-t border-neutral-800">
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo lightMode onClick={() => handleNav('home')} />
            
            <p className="text-xs text-neutral-400 leading-relaxed font-normal pt-1">
              Pakistan's trusted car rental, wedding car, and intercity chauffeur service. Serving travellers, corporate executives, and families from Karachi to Hyderabad, Lahore, Islamabad, and Northern Areas.
            </p>

            <div className="space-y-2 pt-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Verified Chauffeurs &amp; Inspected Vehicles</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Roadside Assistance &amp; Booking Desk</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm tracking-wide text-white font-bold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs text-neutral-400 font-semibold">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-amber-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-amber-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('fleet')} className="hover:text-amber-400 transition-colors">
                  Our Fleet &amp; Rates
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-amber-400 transition-colors">
                  All Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('routes')} className="hover:text-amber-400 transition-colors">
                  Intercity Routes
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-amber-400 transition-colors">
                  Contact &amp; Location
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('privacy')} className="hover:text-amber-400 transition-colors text-amber-400/90 font-bold">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Rental Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm tracking-wide text-white font-bold mb-4">
              Rental Services
            </h3>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Wedding &amp; Bridal Car Decor</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Executive SUV &amp; V8 Protocol</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Karachi Airport Pick &amp; Drop</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Karachi to Hyderabad Express</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>14-Seater HiAce Grand Cabin</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Northern Areas Tour Packages</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact Desk (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm tracking-wide text-white font-bold mb-4">
              Direct Contact Desk
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <a href="tel:+923152292493" className="text-white font-bold hover:text-amber-400">
                  {WHATSAPP_DISPLAY}
                </a>
                <div className="text-xs text-neutral-400 mt-0.5">Main Booking Hotline</div>
              </div>

              <div>
                <a href={`tel:+92${PHONE_DISPATCH.replace(/[^0-9]/g, '')}`} className="text-white font-bold hover:text-amber-400">
                  {PHONE_DISPATCH}
                </a>
                <div className="text-xs text-neutral-400 mt-0.5">Fleet Dispatch Desk</div>
              </div>

              <div>
                <div className="text-neutral-300">
                  Main Korangi Road &amp; DHA Phase 6, Karachi, Sindh, Pakistan
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="footer-quick-inquiry-btn"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center btn-outline text-xs px-5 py-2.5 rounded-lg tracking-wide transition-colors cursor-pointer"
              >
                <span>Quick Inquiry / Quote</span>
              </button>
            </div>
          </div>

        </div>

        {/* Copyright & Sub-bar */}
        <div className="mt-12 pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-medium">
          <div className="flex flex-wrap items-center gap-2">
            <span>&copy; 2026 PAK E DRIVE — Rent A Car. All rights reserved.</span>
            <span>•</span>
            <button
              onClick={() => handleNav('privacy')}
              className="text-amber-400 hover:text-amber-300 underline font-semibold transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
          <div className="flex items-center gap-4 text-neutral-400 text-xs">
            <span>Karachi • Hyderabad • Lahore • Islamabad</span>
            <span>•</span>
            <span className="text-amber-400 font-bold">Chauffeur Luxury Rentals</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
