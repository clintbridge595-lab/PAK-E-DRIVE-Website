import React, { useState } from 'react';
import { FLEET_VEHICLES } from '../data/fleetData';
import { Vehicle } from '../types';
import { ChevronLeft, ChevronRight, Eye, Sun, Moon, Sparkles } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface Fleet3DShowroomProps {
  onSelectVehicle?: (vehicle) => void;
  onOpenSpecs?: (vehicle: Vehicle) => void;
}

export const Fleet3DShowroom: React.FC<Fleet3DShowroomProps> = ({ onSelectVehicle, onOpenSpecs }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [angle, setAngle] = useState<'threeQuarter' | 'front' | 'side' | 'interior'>('threeQuarter');
  const [lighting, setLighting] = useState<'day' | 'studio' | 'night'>('studio');
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

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
    if (currentVehicle.imagesByAngle && currentVehicle.imagesByAngle[angle]) {
      return currentVehicle.imagesByAngle[angle];
    }
    return currentVehicle.image;
  };

  return (
    <section 
      id="fleet-3d-showroom-section" 
      className="bg-white text-[#222222] py-12 sm:py-16 border-y border-[#E5E5E5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D919C] uppercase tracking-wider mb-1.5">
            <Eye className="w-4 h-4 text-[#0D919C]" />
            <span>Interactive Visualizer</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111111] mb-2">
            Inspect Our Fleet in Multi-Angle View
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
            Switch perspectives and lighting environments to view interior details and exterior stance across our executive fleet.
          </p>
        </div>

        {/* Selected Vehicle Showcase Card: White card with thin light-grey border #E5E5E5 */}
        <div className="bg-white rounded-2xl border border-[#E5E5E5] p-5 sm:p-8 shadow-xs overflow-hidden">
          {/* Vehicle Title & Details */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E5E5E5]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D919C]">
                {currentVehicle.categoryLabel || currentVehicle.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight mt-0.5">
                {currentVehicle.name}
              </h3>
              <p className="text-neutral-500 text-xs sm:text-sm mt-0.5 font-normal">
                {currentVehicle.subtitle}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-neutral-500 block">Daily / 10-Hr Rate</span>
              <span className="text-lg sm:text-xl font-black text-[#111111]">
                {currentVehicle.rates?.tenHoursCity || 'Custom Quote'}
              </span>
            </div>
          </div>

          {/* Main Visual Display Frame */}
          <div className="relative w-full h-72 sm:h-96 lg:h-[420px] rounded-xl overflow-hidden bg-neutral-900 flex items-center justify-center">
            {/* Ambient Lighting Overlay */}
            {lighting === 'studio' && (
              <div className="absolute inset-0 bg-radial from-[#0D919C]/15 via-transparent to-black/60 pointer-events-none" />
            )}
            {lighting === 'night' && (
              <div className="absolute inset-0 bg-radial from-blue-900/25 via-transparent to-black/80 pointer-events-none" />
            )}

            <img
              src={getDisplayImage()}
              alt={currentVehicle.name}
              className="w-full h-full object-cover transition-opacity duration-300"
              referrerPolicy="no-referrer"
            />

            {/* Left & Right Car Cycler Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
              aria-label="Previous Vehicle"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
              aria-label="Next Vehicle"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* View Angle Pill Switcher */}
            <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-1.5 bg-black/70 backdrop-blur-xs p-1 rounded-lg border border-white/20">
              <button
                onClick={() => setAngle('threeQuarter')}
                className={`text-xs px-2.5 py-1 rounded-[5px] font-semibold transition-colors cursor-pointer ${
                  angle === 'threeQuarter' ? 'bg-[#0D919C] text-white' : 'text-neutral-300 hover:text-white'
                }`}
              >
                3/4 View
              </button>
              <button
                onClick={() => setAngle('front')}
                className={`text-xs px-2.5 py-1 rounded-[5px] font-semibold transition-colors cursor-pointer ${
                  angle === 'front' ? 'bg-[#0D919C] text-white' : 'text-neutral-300 hover:text-white'
                }`}
              >
                Front
              </button>
              <button
                onClick={() => setAngle('side')}
                className={`text-xs px-2.5 py-1 rounded-[5px] font-semibold transition-colors cursor-pointer ${
                  angle === 'side' ? 'bg-[#0D919C] text-white' : 'text-neutral-300 hover:text-white'
                }`}
              >
                Profile
              </button>
            </div>

            {/* Lighting Environment Switcher */}
            <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/70 backdrop-blur-xs p-1 rounded-lg border border-white/20">
              <button
                onClick={() => setLighting('day')}
                className={`p-1.5 rounded-[5px] transition-colors cursor-pointer ${
                  lighting === 'day' ? 'bg-white text-[#111111]' : 'text-neutral-300 hover:text-white'
                }`}
                title="Natural Daylight"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setLighting('studio')}
                className={`p-1.5 rounded-[5px] transition-colors cursor-pointer ${
                  lighting === 'studio' ? 'bg-[#0D919C] text-white' : 'text-neutral-300 hover:text-white'
                }`}
                title="Studio Glow"
              >
                <Sparkles className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setLighting('night')}
                className={`p-1.5 rounded-[5px] transition-colors cursor-pointer ${
                  lighting === 'night' ? 'bg-white text-[#111111]' : 'text-neutral-300 hover:text-white'
                }`}
                title="Evening Mode"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>
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
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#111111] hover:bg-[#252525] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-[7px] transition-colors cursor-pointer shadow-xs"
              >
                <span>Book Now</span>
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="mt-6 flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar">
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
