import React from 'react';
import { openWhatsApp } from '../utils/whatsapp';

interface GrandCabinHighlightProps {
  onOpenBooking?: () => void;
}

export const GrandCabinHighlight: React.FC<GrandCabinHighlightProps> = ({ onOpenBooking }) => {
  const handleReserve = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      openWhatsApp(
        'Assalam-o-Alaikum PAK E DRIVE, I would like to reserve the 14-passenger Toyota HiAce Grand Cabin for Karachi to Hyderabad / Group Travel.'
      );
    }
  };

  const handleWhatsApp = () => {
    openWhatsApp(
      'Assalam-o-Alaikum, I need inquiry for 14-seater Toyota HiAce Grand Cabin with dual chiller AC and highway driver.'
    );
  };

  return (
    <div id="grand-cabin-highlight-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
      <div 
        style={{
          backgroundColor: '#1b1717',
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          fontSize: '15px',
        }}
        className="text-white rounded-2xl overflow-hidden border border-neutral-800 shadow-xl p-6 sm:p-10 lg:p-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Karachi to Hyderabad Express &amp; Group Travel
              </h2>
            </div>

            <p 
              style={{
                fontFamily: '"Times New Roman", Times, serif',
                fontSize: '12px',
              }}
              className="text-neutral-300 leading-relaxed font-normal"
            >
              Travel across Pakistan's highways with total comfort and peace of mind. Our 14 passenger Toyota HiAce Grand Cabin offers walk-through cooling, individual reclining velvet seats, dual chiller AC, and licensed highway chauffeurs.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="reserve-grand-cabin-btn"
                onClick={handleReserve}
                style={{ backgroundColor: '#d5d530' }}
                className="flex items-center justify-center text-neutral-950 font-black text-xs uppercase px-7 py-3.5 rounded-lg shadow-lg tracking-wider transition-all cursor-pointer font-sans"
              >
                <span>RESERVE GRAND CABIN</span>
              </button>

              <button
                id="grand-cabin-whatsapp-inquiry-btn"
                onClick={handleWhatsApp}
                className="flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs uppercase px-7 py-3.5 rounded-lg shadow-md tracking-wider transition-all cursor-pointer font-sans"
              >
                <span>WHATSAPP INQUIRY</span>
              </button>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-neutral-700/80 shadow-2xl bg-neutral-950">
              <img
                src="/cars/hiace_grand_cabin.jpg"
                alt="Toyota HiAce Grand Cabin"
                className="w-full h-72 sm:h-80 object-cover object-center"
                referrerPolicy="no-referrer"
              />

              <div 
                style={{
                  height: '65.3229px',
                }}
                className="absolute bottom-3 left-3 right-3 bg-black/90 backdrop-blur-md px-3 rounded-lg border border-neutral-800 flex flex-col justify-center"
              >
                <div className="text-sm font-extrabold text-white">
                  Toyota HiAce Grand Cabin
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  M-9 Highway • Karachi • Hyderabad • Interior Sindh
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
