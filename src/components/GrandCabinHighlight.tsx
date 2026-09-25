import React, { useState } from 'react';
import { openWhatsApp } from '../utils/whatsapp';
import { Users, Wind, MapPin, CheckCircle2 } from 'lucide-react';

interface GrandCabinHighlightProps {
  onOpenBooking?: () => void;
}

const GRAND_CABIN_ROUTES = [
  { id: 'hyderabad', name: 'Karachi to Hyderabad', highway: 'M-9 Motorway', distance: '160 km', duration: '2.5 Hrs' },
  { id: 'sukkur', name: 'Karachi to Sukkur', highway: 'M-5 Motorway', distance: '480 km', duration: '6 Hrs' },
  { id: 'multan', name: 'Karachi to Multan', highway: 'M-5 Motorway', distance: '890 km', duration: '10-11 Hrs' },
  { id: 'lahore', name: 'Karachi to Lahore', highway: 'M-5 & M-3', distance: '1,215 km', duration: '14-16 Hrs' },
  { id: 'faisalabad', name: 'Karachi to Faisalabad', highway: 'M-4 Motorway', distance: '1,100 km', duration: '13-14 Hrs' },
  { id: 'islamabad', name: 'Karachi to Islamabad', highway: 'M-5 / M-2', distance: '1,410 km', duration: '16-18 Hrs' },
  { id: 'pindi', name: 'Karachi to Rawalpindi', highway: 'M-2 Motorway', distance: '1,420 km', duration: '16-18 Hrs' },
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
      `Assalam-o-Alaikum, I need a fare quote for the 14-seater Toyota HiAce Grand Cabin for route: ${selectedRoute.name} (${selectedRoute.distance}).`
    );
  };

  return (
    <div id="grand-cabin-highlight-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* White Card with thin light-grey border #E5E5E5 */}
      <div className="bg-white text-[#222222] rounded-2xl overflow-hidden border border-[#E5E5E5] shadow-xs p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text & Route Selection */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D919C] block mb-1">
                Executive Group Travel
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111111] leading-tight">
                Toyota HiAce Grand Cabin (14-Seater)
              </h2>
            </div>

            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
              High-roof walk-through passenger van with dual ceiling AC chillers, individual plush reclining velvet seats, and verified highway chauffeurs. Ideal for intercity family delegations and corporate groups.
            </p>

            {/* Selectable Intercity Routes from Karachi */}
            <div className="pt-1">
              <div className="text-xs font-bold uppercase tracking-wider mb-2 text-[#111111]">
                Select Intercity Route from Karachi:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {GRAND_CABIN_ROUTES.map((route) => {
                  const isCur = route.id === activeRouteId;
                  return (
                    <button
                      key={route.id}
                      onClick={() => setActiveRouteId(route.id)}
                      className={`text-xs px-3 py-1.5 rounded-[6px] font-semibold transition-colors cursor-pointer ${
                        isCur
                          ? 'bg-[#0D919C] text-white font-bold shadow-xs'
                          : 'bg-neutral-100 hover:bg-neutral-200 text-[#222222] border border-[#E5E5E5]'
                      }`}
                    >
                      {route.name.replace('Karachi to ', '')}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Route Info Box */}
            <div className="p-3.5 bg-neutral-50 rounded-xl border border-[#E5E5E5] flex items-center justify-between text-xs">
              <div>
                <span className="text-neutral-500 font-medium">Selected Highway:</span>
                <span className="font-bold text-[#111111] ml-1.5">{selectedRoute.name}</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-[#0D919C]">{selectedRoute.distance}</span>
                <span className="text-neutral-400 mx-1">•</span>
                <span className="text-neutral-600 font-medium">{selectedRoute.duration}</span>
              </div>
            </div>

            {/* Buttons: One primary solid black button + one WhatsApp button */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                id="reserve-grand-cabin-btn"
                onClick={handleReserve}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#111111] hover:bg-[#252525] text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-[7px] shadow-xs tracking-wide transition-all cursor-pointer"
              >
                <span>Reserve Grand Cabin</span>
              </button>

              <button
                id="grand-cabin-whatsapp-inquiry-btn"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center btn-whatsapp text-xs sm:text-sm px-6 py-3"
              >
                <span>WhatsApp Quote</span>
              </button>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E5E5E5] shadow-xs bg-neutral-100">
              <img
                src="/cars/hiace_grand_cabin.jpg"
                alt="Toyota HiAce Grand Cabin"
                className="w-full h-72 sm:h-88 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#0D919C] text-white text-xs font-bold px-3 py-1 rounded-[5px] shadow-xs">
                14 Reclining Seats
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
