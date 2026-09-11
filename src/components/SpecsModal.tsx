import React from 'react';
import { Vehicle } from '../types';
import { X, ShieldCheck, Users, Gauge, Fuel, Briefcase, Wind, CheckCircle2 } from 'lucide-react';
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
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="vehicle-specs-modal-container"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 animate-scaleIn text-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-48 sm:h-56 bg-neutral-900 overflow-hidden">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="inline-block bg-amber-400 text-black text-[10px] font-black uppercase px-2 py-0.5 rounded-sm tracking-wider mb-1">
              {vehicle.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-black">{vehicle.name}</h2>
            <p className="text-xs text-neutral-300 font-normal">{vehicle.subtitle}</p>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-6 max-h-[60vh] overflow-y-auto space-y-6">
          
          {/* Top Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-neutral-50 p-3.5 rounded-xl border border-neutral-200 text-center">
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-400">CAPACITY</span>
              <div className="text-xs font-bold text-neutral-900 flex items-center justify-center gap-1 mt-0.5">
                <Users className="w-3.5 h-3.5 text-amber-500" />
                <span>{vehicle.seats} Seats</span>
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-400">GEARBOX</span>
              <div className="text-xs font-bold text-neutral-900 flex items-center justify-center gap-1 mt-0.5">
                <Gauge className="w-3.5 h-3.5 text-amber-500" />
                <span>{vehicle.gear}</span>
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-400">FUEL TYPE</span>
              <div className="text-xs font-bold text-neutral-900 flex items-center justify-center gap-1 mt-0.5">
                <Fuel className="w-3.5 h-3.5 text-amber-500" />
                <span>{vehicle.fuel}</span>
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-400">LUGGAGE</span>
              <div className="text-xs font-bold text-neutral-900 flex items-center justify-center gap-1 mt-0.5">
                <Briefcase className="w-3.5 h-3.5 text-amber-500" />
                <span>{vehicle.bags} Bags</span>
              </div>
            </div>
          </div>

          {/* Detailed Technical Specifications Table */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-neutral-700 mb-2.5">
              TECHNICAL SPECIFICATIONS
            </h4>
            <div className="divide-y divide-neutral-200 border border-neutral-200 rounded-lg overflow-hidden text-xs">
              <div className="grid grid-cols-3 p-2.5 bg-neutral-50/70">
                <span className="font-bold text-neutral-500">Engine &amp; Performance</span>
                <span className="col-span-2 font-medium text-neutral-900">{vehicle.specs.engine}</span>
              </div>
              <div className="grid grid-cols-3 p-2.5">
                <span className="font-bold text-neutral-500">Transmission</span>
                <span className="col-span-2 font-medium text-neutral-900">{vehicle.specs.transmission}</span>
              </div>
              <div className="grid grid-cols-3 p-2.5 bg-neutral-50/70">
                <span className="font-bold text-neutral-500">Air Conditioning</span>
                <span className="col-span-2 font-medium text-neutral-900 flex items-center gap-1">
                  <Wind className="w-3 h-3 text-cyan-600" />
                  {vehicle.specs.acType}
                </span>
              </div>
              <div className="grid grid-cols-3 p-2.5">
                <span className="font-bold text-neutral-500">Interior Seating</span>
                <span className="col-span-2 font-medium text-neutral-900">{vehicle.specs.seatingLayout}</span>
              </div>
              <div className="grid grid-cols-3 p-2.5 bg-neutral-50/70">
                <span className="font-bold text-neutral-500">Luggage Space</span>
                <span className="col-span-2 font-medium text-neutral-900">{vehicle.specs.luggageSpace}</span>
              </div>
              <div className="grid grid-cols-3 p-2.5">
                <span className="font-bold text-neutral-500">Infotainment</span>
                <span className="col-span-2 font-medium text-neutral-900">{vehicle.specs.entertainment}</span>
              </div>
            </div>
          </div>

          {/* Safety & Protocol Features */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-neutral-700 mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>SAFETY &amp; DRIVER PROTOCOL</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {vehicle.specs.safetyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-neutral-700 bg-neutral-50 p-2 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transparent Rental Package Rates */}
          <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-900 mb-2">
              ESTIMATED PACKAGE RATES (INCLUDES LICENSED CHAUFFEUR)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-neutral-500 block">10-Hour City Chauffeur:</span>
                <strong className="text-sm text-neutral-950 font-extrabold">{vehicle.rates.tenHoursCity}</strong>
              </div>
              <div>
                <span className="text-neutral-500 block">Intercity Highway Travel:</span>
                <strong className="text-sm text-neutral-950 font-extrabold">{vehicle.rates.intercityPerKm}</strong>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-neutral-500 text-center sm:text-left">
            Need urgent dispatch? We respond on WhatsApp within <strong className="text-neutral-900">5 minutes</strong>.
          </div>
          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs uppercase px-6 py-3 rounded-lg shadow-sm tracking-wider transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>BOOK THIS VEHICLE ON WHATSAPP</span>
          </button>
        </div>
      </div>
    </div>
  );
};
