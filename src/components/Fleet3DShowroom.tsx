import React, { useState } from 'react';
import { FLEET_VEHICLES } from '../data/fleetData';
import { Vehicle } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface Fleet3DShowroomProps {
  onSelectVehicle?: (vehicle: Vehicle) => void;
  onOpenSpecs?: (vehicle: Vehicle) => void;
}

export const Fleet3DShowroom: React.FC<Fleet3DShowroomProps> = ({ onSelectVehicle, onOpenSpecs }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [angle, setAngle] = useState<'threeQuarter' | 'front' | 'side' | 'interior'>('threeQuarter');
  const [lighting, setLighting] = useState<'day' | 'studio' | 'night'>('studio');

  const currentVehicle = FLEET_VEHICLES[selectedIdx];

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev - 1 + FLEET_VEHICLES.length) % FLEET_VEHICLES.length);
  };

  const handleNext = () => {
    setSelectedIdx((prev) => (prev + 1) % FLEET_VEHICLES.length);
  };

  const handleWhatsAppInquiry = () => {
    openWhatsApp(
      `Assalam-o-Alaikum PAK E DRIVE, I am inquiring about renting the ${currentVehicle.name} (${currentVehicle.subtitle}) with a verified chauffeur.`
    );
  };

  // Get angle image or fallback
  const getDisplayImage = () => {
    if (currentVehicle.imagesByAngle && currentVehicle.imagesByAngle[angle]) {
      return currentVehicle.imagesByAngle[angle];
    }
    return currentVehicle.image;
  };

  return (
    <section 
      id="fleet-3d-showroom-section" 
      style={{
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic',
      }}
      className="bg-[#0e1013] text-white py-12 sm:py-16 lg:py-20 border-y border-neutral-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-3">
            Inspect Our Fleet in 3D Showroom
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
            Rotate vehicle perspectives, test lighting conditions, and inspect specifications for every vehicle in our verified fleet.
          </p>
        </div>

        {/* Selected Vehicle Showcase Card */}
        <div className="relative">
          {/* Active Highlight Card with Yellow Accent Frame matching video */}
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-amber-400/90 via-amber-400/50 to-amber-500/20 shadow-2xl">
            <div className={`relative rounded-xl p-5 sm:p-8 transition-colors duration-500 overflow-hidden ${
              lighting === 'day' 
                ? 'bg-neutral-900/90' 
                : lighting === 'night' 
                  ? 'bg-black' 
                  : 'bg-[#14161a]'
            }`}>
              
              {/* Category Pill & Vehicle Title */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div 
                    style={{ backgroundColor: '#d4ba75' }}
                    className="inline-block text-black text-[11px] font-black uppercase px-2.5 py-1 rounded-sm tracking-wider mb-2"
                  >
                    {currentVehicle.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {currentVehicle.name}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                    {currentVehicle.subtitle}
                  </p>
                </div>

                <div className="mt-2 sm:mt-0 sm:text-right">
                  <span className="text-[11px] sm:text-xs text-neutral-400 uppercase font-semibold block">Chauffeur Service Rate</span>
                  <div className="text-lg sm:text-xl font-extrabold text-amber-400 font-sans tracking-tight">
                    {currentVehicle.rates.tenHoursCity}
                  </div>
                </div>
              </div>

              {/* Main Image with 3D Lighting and perspective effects */}
              <div className="relative w-full h-72 sm:h-96 lg:h-[420px] rounded-lg overflow-hidden bg-neutral-950 flex items-center justify-center">
                
                {/* Lighting effects overlay */}
                {lighting === 'studio' && (
                  <div className="absolute inset-0 bg-radial from-amber-400/10 via-transparent to-black pointer-events-none" />
                )}
                {lighting === 'night' && (
                  <div className="absolute inset-0 bg-radial from-blue-900/20 via-transparent to-black pointer-events-none" />
                )}

                <img
                  src={getDisplayImage()}
                  alt={currentVehicle.name}
                  className="w-full h-full object-contain sm:object-cover transform transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Left & Right Arrow controls inside the card */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white border border-neutral-700 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-lg z-10"
                  aria-label="Previous vehicle"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white border border-neutral-700 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-lg z-10"
                  aria-label="Next vehicle"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Specs and Buttons Row below Preview */}
              <div className="mt-6 pt-5 border-t border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-5">
                
                {/* 4 Specs Badges matching video */}
                <div 
                  className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full lg:w-auto"
                >
                  <div 
                    className="flex items-center justify-center bg-neutral-900 px-3 py-2.5 rounded-lg border border-neutral-800 text-center"
                  >
                    <span className="text-xs font-semibold text-neutral-200">
                      {currentVehicle.seats} Passenger Capacity
                    </span>
                  </div>

                  <div className="flex items-center justify-center bg-neutral-900 px-3 py-2.5 rounded-lg border border-neutral-800 text-center">
                    <span className="text-xs font-semibold text-neutral-200">
                      {currentVehicle.gear} Transmission
                    </span>
                  </div>

                  <div className="flex items-center justify-center bg-neutral-900 px-3 py-2.5 rounded-lg border border-neutral-800 text-center">
                    <span className="text-xs font-semibold text-neutral-200">
                      {currentVehicle.fuel} Fuel
                    </span>
                  </div>

                  <div className="flex items-center justify-center bg-neutral-900 px-3 py-2.5 rounded-lg border border-neutral-800 text-center">
                    <span className="text-xs font-semibold text-neutral-200">
                      Chauffeur Included
                    </span>
                  </div>
                </div>

                {/* 2 Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full lg:w-auto justify-end">
                  <button
                    id="showroom-whatsapp-btn"
                    onClick={handleWhatsAppInquiry}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase px-5 py-3 rounded-lg shadow-sm tracking-wider transition-colors cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>INQUIRE ON WHATSAPP</span>
                  </button>

                  <button
                    id="showroom-select-vehicle-btn"
                    onClick={() => {
                      if (onOpenSpecs) {
                        onOpenSpecs(currentVehicle);
                      } else if (onSelectVehicle) {
                        onSelectVehicle(currentVehicle);
                      }
                    }}
                    className="flex-1 sm:flex-initial flex items-center justify-center bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-black font-black text-xs uppercase px-6 py-3 rounded-lg shadow-sm tracking-wider transition-colors cursor-pointer"
                  >
                    <span>SELECT VEHICLE</span>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Vehicle Thumbnails Strip matching video (00:50 - 01:00) */}
        <div className="mt-8">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 px-1">
            <span>SCROLL &amp; SELECT ANY VEHICLE (ALL AVAILABLE IN PAKISTAN)</span>
            <span className="font-sans font-bold text-amber-400">{selectedIdx + 1} / {FLEET_VEHICLES.length}</span>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-1 scrollbar-thin scrollbar-thumb-neutral-700">
            {FLEET_VEHICLES.map((v, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={v.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`shrink-0 w-44 sm:w-48 text-left rounded-lg overflow-hidden border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'border-amber-400 ring-2 ring-amber-400/50 bg-neutral-900 scale-102'
                      : 'border-neutral-800 bg-neutral-950/70 hover:border-neutral-700 opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="h-24 w-full bg-neutral-900 overflow-hidden relative">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-1 right-1 text-[9px] font-black uppercase px-1.5 py-0.5 rounded-xs bg-black/80 text-amber-400">
                      {v.category}
                    </span>
                  </div>
                  <div className="p-2.5">
                    <div className="text-xs font-bold text-white truncate">
                      {v.name.split(' (')[0]}
                    </div>
                    <div className="text-[10px] text-neutral-400 truncate mt-0.5">
                      {v.gear} • {v.fuel}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
