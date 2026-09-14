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
        style={{
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
        }}
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
            <h4 className="text-xs font-sans uppercase tracking-widest text-white font-bold mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-semibold">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-amber-400 transition-colors uppercase">
                  HOME
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-amber-400 transition-colors uppercase">
                  ABOUT US
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('fleet')} className="hover:text-amber-400 transition-colors uppercase">
                  OUR FLEET &amp; RATES
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-amber-400 transition-colors uppercase">
                  ALL SERVICES
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('routes')} className="hover:text-amber-400 transition-colors uppercase">
                  INTERCITY ROUTES
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-amber-400 transition-colors uppercase">
                  CONTACT &amp; LOCATION
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('privacy')} className="hover:text-amber-400 transition-colors uppercase text-amber-400/90 font-bold">
                  PRIVACY POLICY
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Rental Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-widest text-white font-bold mb-4">
              RENTAL SERVICES
            </h4>
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
            <h4 className="text-xs font-sans uppercase tracking-widest text-white font-bold mb-4">
              DIRECT CONTACT DESK
            </h4>

            <div className="space-y-3 text-xs">
              <div>
                <a href="tel:+923152292493" className="text-white font-bold hover:text-amber-400">
                  {WHATSAPP_DISPLAY}
                </a>
                <div className="text-[10px] text-neutral-400">Main Booking Hotline</div>
              </div>

              <div>
                <a href={`tel:+92${PHONE_DISPATCH.replace(/[^0-9]/g, '')}`} className="text-white font-bold hover:text-amber-400">
                  {PHONE_DISPATCH}
                </a>
                <div className="text-[10px] text-neutral-400">Fleet Dispatch Desk</div>
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
                style={{
                  backgroundColor: '#2a2828',
                  height: '36.3333px',
                  width: '226.333px',
                  maxWidth: '100%',
                }}
                className="flex items-center justify-center text-amber-400 border border-neutral-700 font-extrabold text-xs uppercase py-1.5 rounded-lg tracking-wider transition-colors cursor-pointer"
              >
                <span>QUICK INQUIRY / QUOTE</span>
              </button>
            </div>
          </div>

        </div>

        {/* Copyright & Sub-bar */}
        <div 
          style={{
            minHeight: '63.6667px',
          }}
          className="mt-12 pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-medium"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span>&copy; 2026 PAK E DRIVE — RENT A CAR. All rights reserved.</span>
            <span>•</span>
            <button
              onClick={() => handleNav('privacy')}
              className="text-amber-400 hover:text-amber-300 underline font-semibold transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
          <div className="flex items-center gap-4 text-neutral-400 text-[11px]">
            <span>Karachi • Hyderabad • Lahore • Islamabad</span>
            <span>•</span>
            <span className="text-amber-500 font-bold">Chauffeur Luxury Rentals</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
