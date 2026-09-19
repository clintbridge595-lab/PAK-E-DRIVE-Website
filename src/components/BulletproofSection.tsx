import React from 'react';
import { FLEET_VEHICLES } from '../data/fleetData';
import { Vehicle } from '../types';
import { openWhatsApp } from '../utils/whatsapp';

interface BulletproofSectionProps {
  onOpenSpecs: (vehicle: Vehicle) => void;
  onOpenBooking: (vehicleName?: string) => void;
}

export const BulletproofSection: React.FC<BulletproofSectionProps> = ({
  onOpenSpecs,
  onOpenBooking,
}) => {
  const bulletproofVehicles = FLEET_VEHICLES.filter((v) => v.category === 'BULLETPROOF');

  const handleWhatsAppInquiry = (vehicle: Vehicle) => {
    openWhatsApp(
      `Assalam-o-Alaikum PAK E DRIVE, I want to inquire about renting: ${vehicle.name} (B6+ Armored Ballistic Vehicle). Please provide availability, escort protocol terms, and quotation.`
    );
  };

  return (
    <section
      id="bulletproof-b6-section"
      className="bg-gradient-to-b from-[#111215] via-[#1a1b20] to-[#111215] text-white py-14 sm:py-20 border-y border-neutral-800 relative overflow-hidden"
    >
      {/* Background Tactical Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
          <h2 style={{ fontFamily: 'Georgia, serif' }} className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase mb-2 sm:mb-3 leading-tight text-neutral-100">
            Bulletproof <span className="text-white font-black">B6+</span>
          </h2>

          <div className="mt-1 sm:mt-2 text-sm sm:text-lg lg:text-xl font-bold tracking-wide uppercase text-neutral-200">
            Contact to Rent Armored & Luxury Vehicles
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6">
            <a
              href="tel:+923002512201"
              style={{ backgroundColor: '#aa842b' }}
              className="inline-flex items-center justify-center text-white hover:opacity-90 font-bold text-xs px-5 py-2.5 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <span>Call 0300 2512201</span>
            </a>
            <button
              onClick={() => openWhatsApp('Assalam-o-Alaikum, I am inquiring to rent Bulletproof B6+ armored vehicles in Pakistan. Please share rates and details.')}
              className="btn-whatsapp"
            >
              <span>WhatsApp Security Desk</span>
            </button>
          </div>
        </div>

        {/* 4 Bulletproof Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bulletproofVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              id={`bulletproof-card-${vehicle.id}`}
              className="bg-[#232323] rounded-xl border border-neutral-700/80 hover:border-amber-400/60 shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
            >
              {/* Image Box */}
              <div className="relative h-48 w-full bg-[#1c1c1f] overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white tracking-tight leading-tight min-h-[2.5rem] flex items-center">
                    {vehicle.name}
                  </h3>

                  {/* Specs Row */}
                  <div className="grid grid-cols-3 gap-2 my-3 py-2.5 border-y border-neutral-700/80 bg-[#1c1c1f]/80 rounded-md text-center">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-xs uppercase font-bold text-neutral-400 mb-0.5">Seats</span>
                      <span className="text-xs font-bold text-white">{vehicle.seats}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-xs uppercase font-bold text-neutral-400 mb-0.5">Armor</span>
                      <span className="text-xs font-bold text-white">B6 / B7</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-xs uppercase font-bold text-neutral-400 mb-0.5">Gear</span>
                      <span className="text-xs font-bold text-white">{vehicle.gear}</span>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="pt-2 border-t border-neutral-700/80">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenSpecs(vehicle)}
                      style={{ backgroundColor: '#c8c8c8' }}
                      className="text-neutral-950 hover:bg-white text-xs font-bold py-2 rounded-lg tracking-wide transition-colors cursor-pointer text-center"
                    >
                      Specs
                    </button>
                    <button
                      onClick={() => handleWhatsAppInquiry(vehicle)}
                      className="btn-whatsapp text-white text-xs font-bold py-2 rounded-lg tracking-wide transition-colors cursor-pointer text-center"
                    >
                      <span>Book B6+</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Specifications Guarantee Banner */}
        <div 
          className="mt-10 sm:mt-12 bg-neutral-900/60 rounded-xl p-5 sm:px-6 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <h4 className="text-sm font-bold text-white leading-tight">
              Certified Anti-Ambush & High-Risk Escort Drivers
            </h4>
            <p className="text-xs text-neutral-400 mt-1 max-w-xl">
              All bulletproof vehicles are piloted by vetted, tactically trained chauffeurs with clean security clearances.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('Bulletproof B6+ Vehicle')}
            className="w-full sm:w-auto whitespace-nowrap bg-neutral-100 hover:bg-white text-neutral-950 font-bold text-xs px-5 py-2.5 rounded-lg tracking-wide transition-all cursor-pointer shrink-0 text-center"
          >
            Request Protocol Quote
          </button>
        </div>
      </div>
    </section>
  );
};
