import React, { useState } from 'react';
import { openWhatsApp } from '../utils/whatsapp';
import { Search } from 'lucide-react';

interface BookingBarProps {
  onVehicleChange?: (vehicleName: string) => void;
  onOpenModal?: () => void;
}

export const BookingBar: React.FC<BookingBarProps> = ({ onOpenModal }) => {
  const [pickup, setPickup] = useState('-Select Option-');
  const [pickupDate, setPickupDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [returnDate, setReturnDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 2);
    return date.toISOString().split('T')[0];
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const loc = pickup === '-Select Option-' ? 'Karachi City (General)' : pickup;
    const msg = `*PAK E DRIVE - Car Rental Inquiry*%0A%0A*Pickup Location:* ${loc}%0A*Pickup Date:* ${pickupDate}%0A*Return Date:* ${returnDate}%0A%0APlease share available cars with transparent daily and monthly rates.`;
    openWhatsApp(decodeURIComponent(msg));
  };

  return (
    <div id="booking-calculator-widget" className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 sm:-mt-4 mb-8 sm:mb-12 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Clean horizontal search bar */}
      <div className="w-full bg-white rounded-xl shadow-lg border border-neutral-200 p-4 sm:p-5">
        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-end">
          
          {/* 1. Pickup Location */}
          <div className="lg:col-span-4">
            <label className="block text-xs font-semibold text-neutral-800 mb-1.5 font-['Poppins',sans-serif]">
              Pickup Location
            </label>
            <div className="relative">
              <select
                id="pickup-location-select"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full bg-white hover:bg-neutral-50 border border-neutral-300 focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] text-xs sm:text-sm font-medium rounded-[6px] py-2 px-3 text-[#111111] cursor-pointer outline-hidden transition-colors"
              >
                <option value="-Select Option-">-Select Option-</option>
                <option value="Jinnah Int. Airport (KHI)">Jinnah Int. Airport (KHI)</option>
                <option value="DHA (Defence) Karachi">DHA (Defence) Karachi</option>
                <option value="Clifton & Bath Island">Clifton &amp; Bath Island</option>
                <option value="Gulshan-e-Iqbal & PECHS">Gulshan-e-Iqbal &amp; PECHS</option>
                <option value="Korangi Industrial Area">Korangi Industrial Area</option>
                <option value="Bahria Town Karachi">Bahria Town Karachi</option>
                <option value="North Nazimabad / Buffer Zone">North Nazimabad / Buffer Zone</option>
                <option value="Malir Cantt / Scheme 33">Malir Cantt / Scheme 33</option>
                <option value="Direct Doorstep Delivery (Karachi)">Doorstep Delivery (Karachi)</option>
              </select>
            </div>
          </div>

          {/* 2. Pickup Date */}
          <div className="lg:col-span-3">
            <label className="block text-xs font-semibold text-neutral-800 mb-1.5 font-['Poppins',sans-serif]">
              Pickup Date
            </label>
            <div className="relative">
              <input
                id="pickup-date-input"
                type="date"
                required
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full bg-white hover:bg-neutral-50 border border-neutral-300 focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] text-xs sm:text-sm font-medium rounded-[6px] py-2 px-3 text-[#111111] cursor-pointer outline-hidden transition-colors"
              />
            </div>
          </div>

          {/* 3. Return Date */}
          <div className="lg:col-span-3">
            <label className="block text-xs font-semibold text-neutral-800 mb-1.5 font-['Poppins',sans-serif]">
              Return Date
            </label>
            <div className="relative">
              <input
                id="return-date-input"
                type="date"
                required
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full bg-white hover:bg-neutral-50 border border-neutral-300 focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] text-xs sm:text-sm font-medium rounded-[6px] py-2 px-3 text-[#111111] cursor-pointer outline-hidden transition-colors"
              />
            </div>
          </div>

          {/* 4. Red Search Button */}
          <div className="lg:col-span-2">
            <button
              id="search-cars-btn"
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#A80D25] text-white font-bold text-xs sm:text-sm h-10 px-5 rounded-[6px] shadow-xs transition-colors cursor-pointer whitespace-nowrap font-['Poppins',sans-serif]"
            >
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
          </div>

        </form>

        {/* Quick Tags below search bar (divider line removed) */}
        <div className="mt-3 pt-2 flex flex-wrap items-center justify-between text-xs text-neutral-500 gap-2">
          <div className="flex flex-wrap items-center gap-3">
            <span>• Self-Drive or Chauffeur Driven</span>
            <span>• 100% Inspected &amp; Sanitized</span>
            <span>• Doorstep Delivery Across Karachi</span>
          </div>

          {onOpenModal && (
            <button
              type="button"
              onClick={onOpenModal}
              className="text-[#C8102E] hover:underline font-bold cursor-pointer"
            >
              Custom Rental Inquiry &rarr;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
