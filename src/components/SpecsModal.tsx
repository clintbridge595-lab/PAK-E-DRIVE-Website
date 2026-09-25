import React from 'react';
import { Vehicle } from '../types';
import { X, Users, Gauge, Fuel, Briefcase, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface SpecsModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export const SpecsModal: React.FC<SpecsModalProps> = ({ vehicle, onClose }) => {
  if (!vehicle) return null;

  const handleWhatsApp = () => {
    openWhatsApp(
      `Assalam-o-Alaikum PAK E DRIVE, I am interested in booking the ${vehicle.name} (${vehicle.category}) with chauffeur. Please share exact availability and pricing.`
    );
  };

  return (
    <div 
      id="vehicle-specs-modal-overlay"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="vehicle-specs-modal-container"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E5E5E5] animate-scaleIn text-[#222222]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-48 sm:h-56 bg-neutral-900 overflow-hidden">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Close specifications modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="inline-block bg-[#0D919C] text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-[4px] tracking-wider mb-1">
              {vehicle.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold">{vehicle.name}</h2>
            <p className="text-xs text-neutral-200 font-normal">{vehicle.subtitle}</p>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-6 max-h-[60vh] overflow-y-auto space-y-5">
          
          {/* Top Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-neutral-50 p-3 rounded-xl border border-[#E5E5E5] text-center">
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-500">Capacity</span>
              <div className="text-xs font-bold text-[#111111] flex items-center justify-center gap-1 mt-0.5">
                <Users className="w-3.5 h-3.5 text-[#0D919C]" />
                <span>{vehicle.seats} Seats</span>
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-500">Gearbox</span>
              <div className="text-xs font-bold text-[#111111] flex items-center justify-center gap-1 mt-0.5">
                <Gauge className="w-3.5 h-3.5 text-[#0D919C]" />
                <span>{vehicle.gear}</span>
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-500">Fuel Type</span>
              <div className="text-xs font-bold text-[#111111] flex items-center justify-center gap-1 mt-0.5">
                <Fuel className="w-3.5 h-3.5 text-[#0D919C]" />
                <span>{vehicle.fuel}</span>
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-500">Luggage</span>
              <div className="text-xs font-bold text-[#111111] flex items-center justify-center gap-1 mt-0.5">
                <Briefcase className="w-3.5 h-3.5 text-[#0D919C]" />
                <span>{vehicle.bags} Bags</span>
              </div>
            </div>
          </div>

          {/* Detailed Technical Specifications Table */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
              Technical Specifications
            </h4>
            <div className="divide-y divide-[#E5E5E5] border border-[#E5E5E5] rounded-lg overflow-hidden text-xs">
              <div className="grid grid-cols-3 p-2.5 bg-neutral-50">
                <span className="font-bold text-neutral-600">Engine</span>
                <span className="col-span-2 text-[#222222] font-medium">{vehicle.specs.engine}</span>
              </div>
              <div className="grid grid-cols-3 p-2.5 bg-white">
                <span className="font-bold text-neutral-600">Transmission</span>
                <span className="col-span-2 text-[#222222] font-medium">{vehicle.specs.transmission}</span>
              </div>
              <div className="grid grid-cols-3 p-2.5 bg-neutral-50">
                <span className="font-bold text-neutral-600">Climate Control</span>
                <span className="col-span-2 text-[#222222] font-medium">{vehicle.specs.acType}</span>
              </div>
              <div className="grid grid-cols-3 p-2.5 bg-white">
                <span className="font-bold text-neutral-600">Seating Layout</span>
                <span className="col-span-2 text-[#222222] font-medium">{vehicle.specs.seatingLayout}</span>
              </div>
              <div className="grid grid-cols-3 p-2.5 bg-neutral-50">
                <span className="font-bold text-neutral-600">Luggage Space</span>
                <span className="col-span-2 text-[#222222] font-medium">{vehicle.specs.luggageSpace}</span>
              </div>
            </div>
          </div>

          {/* Safety & Comfort Highlights */}
          {vehicle.specs.safetyFeatures && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                Safety &amp; Protocol Equipment
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {vehicle.specs.safetyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-neutral-700 bg-neutral-50 p-2 rounded-md border border-[#E5E5E5]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D919C] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rates Breakdown */}
          <div className="p-4 bg-teal-50/60 rounded-xl border border-[#0D919C]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#0D919C] block">
                Standard Chauffeur Rental Rate
              </span>
              <div className="text-base font-extrabold text-[#111111]">
                {vehicle.rates?.tenHoursCity || 'Custom Quotation'}
              </div>
              <div className="text-[11px] text-neutral-500 mt-0.5">
                Includes verified chauffeur &amp; mechanical maintenance
              </div>
            </div>

            <button
              onClick={handleWhatsApp}
              style={{ backgroundColor: '#3ca19a' }}
              className="w-full sm:w-auto inline-flex items-center justify-center hover:bg-[#328e88] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-[7px] transition-colors cursor-pointer shadow-xs whitespace-nowrap"
            >
              <span>Book via WhatsApp</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
