import React, { useState } from 'react';
import { openWhatsApp } from '../utils/whatsapp';

interface GrandCabinHighlightProps {
  onOpenBooking?: () => void;
}

const GRAND_CABIN_ROUTES = [
  { id: 'hyderabad', name: 'Karachi to Hyderabad', highway: 'M-9 Motorway', distance: '160 km', duration: '2.5 Hrs' },
  { id: 'sukkur', name: 'Karachi to Sukkur', highway: 'M-5 Motorway', distance: '480 km', duration: '6 Hrs' },
  { id: 'lahore', name: 'Karachi to Lahore', highway: 'M-5 & M-3', distance: '1,215 km', duration: '14-16 Hrs' },
  { id: 'islamabad', name: 'Karachi to Islamabad', highway: 'M-5 / M-2', distance: '1,410 km', duration: '16-18 Hrs' },
  { id: 'pindi', name: 'Karachi to Pindi (Rawalpindi)', highway: 'M-2 Motorway', distance: '1,420 km', duration: '16-18 Hrs' },
  { id: 'murree', name: 'Karachi to Murree', highway: 'Murree Expressway', distance: '1,480 km', duration: '18-20 Hrs' },
  { id: 'swat', name: 'Karachi to Swat', highway: 'Swat Expressway M-16', distance: '1,550 km', duration: '19-21 Hrs' },
];

export const GrandCabinHighlight: React.FC<GrandCabinHighlightProps> = ({ onOpenBooking }) => {
  const [activeRouteId, setActiveRouteId] = useState<string>('hyderabad');
  const selectedRoute = GRAND_CABIN_ROUTES.find((r) => r.id === activeRouteId) || GRAND_CABIN_ROUTES[0];

  const handleReserve = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      openWhatsApp(
        `Assalam-o-Alaikum PAK E DRIVE, I would like to reserve the 14-passenger Toyota HiAce Grand Cabin for ${selectedRoute.name} (${selectedRoute.highway}, ${selectedRoute.distance}).`
      );
    }
  };

  const handleWhatsApp = () => {
    openWhatsApp(
      `Assalam-o-Alaikum, I need fare quote for 14-seater Toyota HiAce Grand Cabin for route: ${selectedRoute.name} (${selectedRoute.distance}).`
    );
  };

  return (
    <div id="grand-cabin-highlight-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
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
          
          {/* Left Text & Route Selection */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Karachi Intercity Express &amp; Group Travel
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

            {/* Selectable Intercity Routes from Karachi */}
            <div className="pt-1">
              <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-2 font-sans">
                Select Highway Destination from Karachi:
              </div>
              <div className="flex flex-wrap gap-1.5 font-sans">
                {GRAND_CABIN_ROUTES.map((route) => {
                  const isCur = route.id === activeRouteId;
                  return (
                    <button
                      key={route.id}
                      onClick={() => setActiveRouteId(route.id)}
                      className={`text-xs px-2.5 py-1.5 rounded-md font-semibold transition-colors cursor-pointer ${
                        isCur
                          ? 'bg-amber-400 text-neutral-950 font-black shadow-sm'
                          : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800'
                      }`}
                    >
                      {route.name.replace('Karachi to ', '')}
                    </button>
                  );
                })}
              </div>

              {/* Active Route Specs Bar */}
              <div className="mt-3 p-3 bg-neutral-950/80 rounded-lg border border-neutral-800 flex items-center justify-between text-xs font-sans">
                <div>
                  <span className="text-white font-bold block">{selectedRoute.name}</span>
                  <span className="text-neutral-400 text-[11px]">{selectedRoute.highway}</span>
                </div>
                <div className="text-right">
                  <span className="text-amber-400 font-bold block">{selectedRoute.distance}</span>
                  <span className="text-neutral-400 text-[11px]">{selectedRoute.duration}</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                id="reserve-grand-cabin-btn"
                onClick={handleReserve}
                style={{ backgroundColor: '#d5d530' }}
                className="w-full sm:w-auto flex items-center justify-center text-neutral-950 font-black text-xs uppercase px-7 py-3.5 rounded-lg shadow-lg tracking-wider transition-all cursor-pointer font-sans"
              >
                <span>RESERVE GRAND CABIN</span>
              </button>

              <button
                id="grand-cabin-whatsapp-inquiry-btn"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs uppercase px-7 py-3.5 rounded-lg shadow-md tracking-wider transition-all cursor-pointer font-sans"
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
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
