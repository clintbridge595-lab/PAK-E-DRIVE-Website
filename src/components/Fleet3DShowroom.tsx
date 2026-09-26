import React, { useState } from 'react';
import { FLEET_VEHICLES } from '../data/fleetData';
import { Vehicle } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface Fleet3DShowroomProps {
  onSelectVehicle?: (vehicle: Vehicle) => void;
  onOpenSpecs?: (vehicle: Vehicle) => void;
}

export const Fleet3DShowroom: React.FC<Fleet3DShowroomProps> = ({ onOpenSpecs }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

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

  const getDisplayImage = () => {
    return currentVehicle.image;
  };

  return (
    <section 
      id="fleet-3d-showroom-section" 
      style={{
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic',
      }}
      className="bg-white text-[#222222] py-12 sm:py-16 border-y border-[#E5E5E5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Tag span and Eye icon removed as requested in Selectors 19 & 23 */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '31px',
            }}
            className="font-extrabold tracking-tight text-[#111111] mb-2"
          >
            Inspect Our Fleet in Multi-Angle View
          </h2>
          <p 
            style={{
              fontFamily: 'Times New Roman, serif',
              fontSize: '13px',
            }}
            className="text-neutral-600 leading-relaxed font-normal"
          >
            Switch perspectives and lighting environments to view interior details and exterior stance across our executive fleet.
          </p>
        </div>

        {/* Selected Vehicle Showcase Card */}
        <div className="bg-white rounded-2xl border border-[#E5E5E5] p-5 sm:p-8 shadow-xs overflow-hidden font-sans">
          {/* Vehicle Title & Details */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E5E5E5]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D919C]">
                {currentVehicle.categoryLabel || currentVehicle.category}
              </span>
              <h3 
                style={{
                  fontFamily: 'Georgia, serif',
                }}
                className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight mt-0.5"
              >
                {currentVehicle.name}
              </h3>
              <p 
                style={{
                  fontFamily: 'Times New Roman, serif',
                  fontSize: '13px',
                }}
                className="text-neutral-500 mt-0.5 font-normal"
              >
                {currentVehicle.subtitle}
              </p>
            </div>

            <div 
              style={{ fontSize: '16px' }}
              className="text-left sm:text-right"
            >
              <span className="text-xs text-neutral-500 block">Daily / 10-Hr Rate</span>
              <span className="text-lg sm:text-xl font-black text-[#111111]">
                {currentVehicle.rates?.tenHoursCity || 'Custom Quote'}
              </span>
            </div>
          </div>

          {/* Main Visual Display Frame */}
          <div className="relative w-full h-72 sm:h-96 lg:h-[420px] rounded-xl overflow-hidden bg-neutral-900 flex items-center justify-center">
            <img
              src={getDisplayImage()}
              alt={currentVehicle.name}
              className="w-full h-full object-cover transition-opacity duration-300"
              referrerPolicy="no-referrer"
            />

            {/* Left & Right Car Cycler Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-md"
              aria-label="Previous Vehicle"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-md"
              aria-label="Next Vehicle"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Action Row */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E5E5E5]">
            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600">
              <span><strong>Seats:</strong> {currentVehicle.seats}</span>
              <span>•</span>
              <span><strong>Transmission:</strong> {currentVehicle.gear}</span>
              <span>•</span>
              <span><strong>Fuel:</strong> {currentVehicle.fuel}</span>
              <span>•</span>
              <span><strong>Chauffeur:</strong> Included</span>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              {onOpenSpecs && (
                <button
                  onClick={() => onOpenSpecs(currentVehicle)}
                  className="w-full sm:w-auto bg-neutral-100 hover:bg-neutral-200 text-[#222222] font-semibold text-xs px-4 py-2.5 rounded-[7px] border border-[#E5E5E5] transition-colors cursor-pointer"
                >
                  Full Specs
                </button>
              )}
              <button
                onClick={handleWhatsAppInquiry}
                style={{ backgroundColor: '#12b5ae' }}
                className="w-full sm:w-auto inline-flex items-center justify-center hover:opacity-90 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-[7px] transition-colors cursor-pointer shadow-xs"
              >
                <span>Book Now</span>
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="mt-6 flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar font-sans">
          {FLEET_VEHICLES.map((vehicle, idx) => {
            const isSelected = idx === selectedIdx;
            return (
              <button
                key={vehicle.id}
                onClick={() => setSelectedIdx(idx)}
                className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg border transition-all cursor-pointer text-left ${
                  isSelected
                    ? 'bg-teal-50 border-[#0D919C] text-[#0D919C] font-bold shadow-xs'
                    : 'bg-white hover:bg-neutral-50 border-[#E5E5E5] text-[#222222]'
                }`}
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-9 h-6 object-cover rounded-[4px]"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xs truncate max-w-[130px]">{vehicle.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
