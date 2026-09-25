import React, { useState } from 'react';
import { Logo } from './Logo';
import { ChevronDown, ArrowRight, Menu, X, Calendar } from 'lucide-react';

export type NavPage = 'home' | 'about' | 'services' | 'fleet' | 'routes' | 'contact' | 'privacy';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-xs border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between bg-white">
        
        {/* Brand Logo on Left */}
        <Logo onClick={() => handleNavClick('home')} />

        {/* Desktop Navigation Links with Dropdowns (DEINFA Style) */}
        <nav className="hidden lg:flex items-center space-x-6 text-[13px] font-semibold text-[#111111]">
          
          {/* Home */}
          <button
            onClick={() => handleNavClick('home')}
            className={`py-2 transition-colors cursor-pointer ${
              currentPage === 'home' ? 'text-[#B91C1C] font-bold' : 'hover:text-[#B91C1C]'
            }`}
          >
            Home
          </button>

          {/* About us with dropdown */}
          <div 
            className="relative py-2"
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('about')}
              className={`flex items-center gap-1 transition-colors cursor-pointer ${
                currentPage === 'about' ? 'text-[#B91C1C] font-bold' : 'hover:text-[#B91C1C]'
              }`}
            >
              <span>About us</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
            </button>

            {activeDropdown === 'about' && (
              <div className="absolute top-full left-0 w-48 bg-white border border-neutral-200 rounded-lg shadow-lg py-2 z-50 animate-fadeIn text-xs">
                <button
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-50 hover:text-[#B91C1C] transition-colors"
                >
                  Who We Are
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-50 hover:text-[#B91C1C] transition-colors"
                >
                  Why Choose Us
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-50 hover:text-[#B91C1C] transition-colors"
                >
                  Fleet Standards
                </button>
              </div>
            )}
          </div>

          {/* Services with dropdown */}
          <div 
            className="relative py-2"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('services')}
              className={`flex items-center gap-1 transition-colors cursor-pointer ${
                currentPage === 'services' ? 'text-[#B91C1C] font-bold' : 'hover:text-[#B91C1C]'
              }`}
            >
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
            </button>

            {activeDropdown === 'services' && (
              <div className="absolute top-full left-0 w-52 bg-white border border-neutral-200 rounded-lg shadow-lg py-2 z-50 animate-fadeIn text-xs">
                <button
                  onClick={() => handleNavClick('services')}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-50 hover:text-[#B91C1C] transition-colors"
                >
                  Chauffeur Drive Services
                </button>
                <button
                  onClick={() => handleNavClick('services')}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-50 hover:text-[#B91C1C] transition-colors"
                >
                  Self-Drive Daily &amp; Monthly
                </button>
                <button
                  onClick={() => handleNavClick('services')}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-50 hover:text-[#B91C1C] transition-colors"
                >
                  Wedding &amp; VIP Barat Protocol
                </button>
                <button
                  onClick={() => handleNavClick('services')}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-50 hover:text-[#B91C1C] transition-colors"
                >
                  Airport Pick &amp; Drop
                </button>
              </div>
            )}
          </div>

          {/* Vehicles / Fleet with dropdown */}
          <div 
            className="relative py-2"
            onMouseEnter={() => setActiveDropdown('fleet')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('fleet')}
              className={`flex items-center gap-1 transition-colors cursor-pointer ${
                currentPage === 'fleet' ? 'text-[#B91C1C] font-bold' : 'hover:text-[#B91C1C]'
              }`}
            >
              <span>Vehicles</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
            </button>

            {activeDropdown === 'fleet' && (
              <div className="absolute top-full left-0 w-52 bg-white border border-neutral-200 rounded-lg shadow-lg py-2 z-50 animate-fadeIn text-xs">
                <button
                  onClick={() => handleNavClick('fleet')}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-50 hover:text-[#B91C1C] transition-colors"
                >
                  Luxury SUVs &amp; Prado / V8
                </button>
                <button
                  onClick={() => handleNavClick('fleet')}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-50 hover:text-[#B91C1C] transition-colors"
                >
                  Sedans (Corolla / Civic / Yaris)
                </button>
                <button
                  onClick={() => handleNavClick('fleet')}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-50 hover:text-[#B91C1C] transition-colors"
                >
                  Bulletproof B6+ Armored
                </button>
                <button
                  onClick={() => handleNavClick('fleet')}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-50 hover:text-[#B91C1C] transition-colors"
                >
                  14-Seater Grand Cabin Vans
                </button>
              </div>
            )}
          </div>

          {/* Routes */}
          <button
            onClick={() => handleNavClick('routes')}
            className={`py-2 transition-colors cursor-pointer ${
              currentPage === 'routes' ? 'text-[#C8102E] font-bold' : 'hover:text-[#C8102E]'
            }`}
          >
            Routes
          </button>

          {/* Resources with dropdown (DEINFA Style) */}
          <div 
            className="relative py-2"
            onMouseEnter={() => setActiveDropdown('resources')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className="flex items-center gap-1 transition-colors cursor-pointer hover:text-[#C8102E]"
            >
              <span>Resources</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
            </button>

            {activeDropdown === 'resources' && (
              <div className="absolute top-full left-0 w-44 bg-white border border-neutral-200 rounded-lg shadow-lg py-2 z-50 animate-fadeIn text-xs">
                <button
                  onClick={() => {
                    handleNavClick('home');
                    setTimeout(() => {
                      document.getElementById('testimonials-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-50 hover:text-[#C8102E] transition-colors"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => handleNavClick('services')}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-50 hover:text-[#C8102E] transition-colors"
                >
                  FAQs
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-50 hover:text-[#C8102E] transition-colors"
                >
                  Fleet Guide &amp; Blogs
                </button>
              </div>
            )}
          </div>

          {/* Clientele */}
          <button
            onClick={() => handleNavClick('about')}
            className="py-2 transition-colors cursor-pointer hover:text-[#C8102E]"
          >
            Clientele
          </button>

          {/* Contact Us */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`py-2 transition-colors cursor-pointer ${
              currentPage === 'contact' ? 'text-[#C8102E] font-bold' : 'hover:text-[#C8102E]'
            }`}
          >
            Contact Us
          </button>

        </nav>

        {/* Right CTA Button: DEINFA style "Book An Appointment ->" */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="header-book-rental-btn"
            onClick={onOpenBooking}
            style={{
              backgroundColor: '#ffffff',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              color: '#000000',
            }}
            className="inline-flex items-center justify-center gap-2 hover:bg-neutral-50 text-[#000000] font-bold text-xs sm:text-[13px] px-5 py-2.5 rounded-[6px] border border-neutral-800 transition-all duration-200 cursor-pointer shadow-2xs group"
          >
            <span>Book An Appointment</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="bg-[#B91C1C] text-white text-xs font-bold px-3 py-2 rounded-[6px] sm:hidden cursor-pointer"
          >
            Book
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#111111] hover:text-[#B91C1C] focus:outline-hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn text-sm">
          {[
            { id: 'home' as NavPage, label: 'Home' },
            { id: 'about' as NavPage, label: 'About Us' },
            { id: 'services' as NavPage, label: 'Services' },
            { id: 'fleet' as NavPage, label: 'Vehicles & Fleet' },
            { id: 'routes' as NavPage, label: 'Intercity Routes' },
            { id: 'contact' as NavPage, label: 'Contact Us' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left py-2.5 px-3 rounded-md font-semibold transition-colors ${
                currentPage === item.id
                  ? 'bg-red-50 text-[#B91C1C] font-bold border-l-4 border-[#B91C1C]'
                  : 'text-[#222222] hover:bg-neutral-50 hover:text-[#B91C1C]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#B91C1C] hover:bg-[#991B1B] text-white flex items-center justify-center gap-2 text-sm font-bold py-3 rounded-[6px] shadow-xs tracking-wide transition-colors cursor-pointer"
            >
              <span>Book An Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
