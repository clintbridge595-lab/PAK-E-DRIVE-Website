import React, { useState } from 'react';
import { Logo } from './Logo';
import { Calendar, Menu, X } from 'lucide-react';

export type NavPage = 'home' | 'about' | 'services' | 'fleet' | 'routes' | 'contact' | 'privacy';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavPage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'fleet', label: 'Our Fleet' },
    { id: 'routes', label: 'Routes' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-xs border-b border-neutral-200">
      {/* Main Navbar Bar */}
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center bg-white"
      >
        <div className="flex items-center justify-between w-full h-full">
          {/* Logo */}
          <Logo onClick={() => handleNavClick('home')} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 font-bold text-xs tracking-wide">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`py-2 relative transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-neutral-950 font-bold' : 'text-neutral-600 hover:text-neutral-950 font-medium'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-amber-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-book-rental-btn"
              onClick={onOpenBooking}
              className="btn-gold flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg shadow-xs text-xs font-bold tracking-wide transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-neutral-950" />
              <span>Book a Rental</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="btn-gold text-xs font-bold px-3 py-2 rounded-md sm:hidden"
            >
              Book
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-800 hover:text-black focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left py-2.5 px-3 rounded-md text-sm font-semibold tracking-wide transition-colors ${
                currentPage === item.id 
                  ? 'bg-amber-400/20 text-neutral-950 font-bold border-l-4 border-amber-400' 
                  : 'text-neutral-700 hover:bg-neutral-100'
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
              className="btn-gold w-full flex items-center justify-center gap-2 text-sm font-bold py-3 rounded-lg shadow-xs tracking-wide transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Rental</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
