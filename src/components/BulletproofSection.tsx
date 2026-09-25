import React from 'react';
import { FLEET_VEHICLES } from '../data/fleetData';
import { Vehicle } from '../types';
import { openWhatsApp, PHONE_DISPATCH } from '../utils/whatsapp';
import { ShieldCheck, Phone } from 'lucide-react';

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
      className="bg-neutral-50/70 text-[#222222] py-12 sm:py-16 border-y border-[#E5E5E5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D919C] uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-[#0D919C]" />
            <span>Diplomatic &amp; Ballistic Protection</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111111] leading-tight">
            Bulletproof <span className="text-[#0D919C]">B6+ Armored Fleet</span>
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-normal max-w-xl mx-auto">
            Certified ballistic protection against high-caliber assault rifles. Accompanied by tactically trained protocol chauffeurs for delegations, VIPs, and intercity transit.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
            <a
              href="tel:+923002512201"
              className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#252525] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-[7px] transition-colors cursor-pointer shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call 0300 2512201</span>
            </a>
            <button
              onClick={() => openWhatsApp('Assalam-o-Alaikum, I am inquiring to rent Bulletproof B6+ armored vehicles in Pakistan. Please share rates and details.')}
              className="btn-whatsapp text-xs sm:text-sm py-2.5 px-5"
            >
              <span>WhatsApp Security Desk</span>
            </button>
          </div>
        </div>

        {/* 4 Bulletproof Cards Grid: White card with thin light-grey border #E5E5E5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bulletproofVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              id={`bulletproof-card-${vehicle.id}`}
              className="bg-white rounded-xl border border-[#E5E5E5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
            >
              {/* Image Box */}
              <div className="relative h-48 w-full bg-neutral-100 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2.5 left-2.5 bg-[#0D919C] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-[4px] shadow-xs">
                  B6+ Armored
                </span>
              </div>

              {/* Card Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#111111] tracking-tight leading-snug min-h-[2.5rem] flex items-center">
                    {vehicle.name}
                  </h3>

                  {/* Specs Row */}
                  <div className="grid grid-cols-3 gap-2 my-3 py-2.5 border-y border-[#E5E5E5] bg-neutral-50/80 rounded-md text-center">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-[10px] uppercase font-bold text-neutral-500 mb-0.5">Seats</span>
                      <span className="text-xs font-bold text-[#111111]">{vehicle.seats}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-[10px] uppercase font-bold text-neutral-500 mb-0.5">Armor</span>
                      <span className="text-xs font-bold text-[#0D919C]">B6 / B7</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-[10px] uppercase font-bold text-neutral-500 mb-0.5">Gear</span>
                      <span className="text-xs font-bold text-[#111111]">{vehicle.gear}</span>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="pt-2 border-t border-[#E5E5E5]">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenSpecs(vehicle)}
                      className="bg-neutral-100 hover:bg-neutral-200 text-[#222222] text-xs font-bold py-2 rounded-[7px] tracking-wide transition-colors cursor-pointer text-center"
                    >
                      Specs
                    </button>
                    <button
                      onClick={() => handleWhatsAppInquiry(vehicle)}
                      className="bg-[#111111] hover:bg-[#252525] text-white text-xs font-bold py-2 rounded-[7px] tracking-wide transition-colors cursor-pointer text-center"
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
        <div className="mt-8 bg-white rounded-xl p-5 sm:px-6 border border-[#E5E5E5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
          <div>
            <h4 className="text-sm font-bold text-[#111111] leading-tight">
              Certified Anti-Ambush &amp; Security Protocol Drivers
            </h4>
            <p className="text-xs text-neutral-500 mt-1 max-w-xl">
              All bulletproof vehicles are operated by vetted, tactically trained chauffeurs with official security clearances.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('Bulletproof B6+ Vehicle')}
            className="w-full sm:w-auto whitespace-nowrap bg-[#0D919C] hover:bg-[#0B7D86] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-[7px] tracking-wide transition-all cursor-pointer shrink-0 text-center"
          >
            Inquire Security Escort
          </button>
        </div>
      </div>
    </section>
  );
};
