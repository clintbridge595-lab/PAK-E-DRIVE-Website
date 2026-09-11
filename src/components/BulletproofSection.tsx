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
      style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
      className="bg-gradient-to-b from-[#111215] via-[#1a1b20] to-[#111215] text-white py-14 sm:py-20 border-y border-neutral-800 relative overflow-hidden"
    >
      {/* Background Tactical Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2
            style={{ fontSize: '46px', color: '#eddfdf' }}
            className="font-black tracking-tight uppercase mb-3 leading-tight"
          >
            BULLET PROOF <span className="text-amber-400">B6+</span>
          </h2>

          <div className="mt-2 text-xl sm:text-2xl font-bold text-amber-300 tracking-wide uppercase">
            CONTACT TO RENT ARMORED & LUXURY VEHICLES
          </div>

          <p
            style={{ fontSize: '12px' }}
            className="text-neutral-400 mt-3 max-w-2xl mx-auto leading-relaxed"
          >
            Highest security ballistic armored vehicles in Pakistan for VVIP delegations, diplomats, corporate executives, and protocol convoys. Resistant to 7.62x51mm NATO, AK-47, and underbody DM51 grenades.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href="tel:+923122119299"
              style={{ backgroundColor: '#c09b36' }}
              className="inline-flex items-center text-black font-black text-xs uppercase px-5 py-2.5 rounded-lg tracking-wider transition-all shadow-lg hover:opacity-90"
            >
              <span>CALL 0312 2119299</span>
            </a>
            <button
              onClick={() => openWhatsApp('Assalam-o-Alaikum, I am inquiring to rent BULLET PROOF B6+ armored vehicles in Pakistan. Please share rates and details.')}
              style={{ backgroundColor: '#21723d' }}
              className="inline-flex items-center text-white font-black text-xs uppercase px-5 py-2.5 rounded-lg tracking-wider transition-all shadow-lg hover:opacity-90 cursor-pointer"
            >
              <span>WHATSAPP SECURITY DESK</span>
            </button>
          </div>
        </div>

        {/* 4 Bulletproof Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bulletproofVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              id={`bulletproof-card-${vehicle.id}`}
              className="bg-neutral-900/90 rounded-xl border border-neutral-700/80 hover:border-amber-400/60 shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
            >
              {/* Image Box */}
              <div className="relative h-48 w-full bg-neutral-950 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 left-2.5 bg-amber-400 text-neutral-950 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow font-sans">
                  B6+ ARMORED
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-xs text-neutral-300 text-[10px] font-bold px-2 py-0.5 rounded border border-neutral-700 font-sans">
                  {vehicle.armorLevel || 'B6+ Certified'}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white tracking-tight leading-tight">
                    {vehicle.name}
                  </h3>
                  <p className="text-[11px] text-amber-400/90 mt-1 font-semibold">
                    {vehicle.subtitle}
                  </p>

                  {/* Clean English Notice */}
                  <div className="bg-neutral-800/80 rounded-lg p-2.5 text-center border border-neutral-700/50 my-4">
                    <span className="text-xs text-amber-300 font-bold block">
                      Contact for B6+ Ballistic Rental
                    </span>
                    <span className="text-[10px] text-neutral-400 block mt-0.5">
                      VIP Protocol & Security Escorts Available
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="space-y-2 pt-2 border-t border-neutral-800">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenSpecs(vehicle)}
                      className="bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-600 text-[11px] font-black uppercase py-2 rounded-lg tracking-wider transition-colors cursor-pointer text-center"
                    >
                      BALLISTIC SPECS
                    </button>
                    <button
                      onClick={() => handleWhatsAppInquiry(vehicle)}
                      className="flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white text-[11px] font-black uppercase py-2 rounded-lg tracking-wider transition-colors cursor-pointer"
                    >
                      <span>BOOK B6+</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Specifications Guarantee Banner */}
        <div 
          style={{ height: '79.333px' }}
          className="mt-12 bg-neutral-900/60 rounded-xl px-5 sm:px-6 border border-neutral-800 flex flex-row items-center justify-between gap-4 overflow-hidden"
        >
          <div>
            <h4 className="text-sm font-bold text-white leading-tight">
              Certified Anti-Ambush & High-Risk Escort Drivers
            </h4>
            <p className="text-xs text-neutral-400 mt-0.5 truncate max-w-xl">
              All bulletproof vehicles are piloted by vetted, tactically trained chauffeurs with clean security clearances.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('BULLET PROOF B6+ Vehicle')}
            className="whitespace-nowrap bg-neutral-100 hover:bg-white text-neutral-950 font-black text-xs uppercase px-5 py-2 rounded-lg tracking-wider transition-all cursor-pointer font-sans shrink-0"
          >
            REQUEST PROTOCOL QUOTE
          </button>
        </div>
      </div>
    </section>
  );
};
