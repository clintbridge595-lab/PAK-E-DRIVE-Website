import React, { useState } from 'react';
import { RAWALPINDI_FIXED_ROUTES } from '../data/fleetData';
import { openWhatsApp } from '../utils/whatsapp';

export const RawalpindiRoutesSection: React.FC = () => {
  const [selectedGroupId, setSelectedGroupId] = useState<string>('corolla-pindi');

  const currentGroup =
    RAWALPINDI_FIXED_ROUTES.find((g) => g.id === selectedGroupId) || RAWALPINDI_FIXED_ROUTES[0];

  const handleBookFixedRate = (vehicleName: string, destination: string, price: string) => {
    openWhatsApp(
      `Assalam-o-Alaikum PAK E DRIVE, I want to book: ${vehicleName} from Rawalpindi/Islamabad to ${destination} for ${price}. Please confirm availability and driver dispatch.`
    );
  };

  return (
    <section
      id="rawalpindi-fixed-routes-section"
      style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
      className="py-12 sm:py-16 bg-neutral-900 text-white border-y border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Rawalpindi / Islamabad Fixed Intercity Routes
            </h2>
            <p 
              style={{
                color: '#c4aa24',
                fontFamily: '"Times New Roman", Times, serif',
                fontSize: '10px',
              }}
              className="mt-1"
            >
              Guaranteed chauffeur fares from Rawalpindi/Islamabad to major cities and Northern areas.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+923122119299"
              className="inline-flex items-center bg-neutral-800 px-3.5 py-2 rounded-lg border border-neutral-700 hover:bg-neutral-700 transition-colors"
            >
              <span style={{ fontSize: '8px', color: '#fce5e5' }} className="font-bold tracking-wider uppercase">
                Call Dispatch: 0312 2119299
              </span>
            </a>
          </div>
        </div>

        {/* 3 Vehicle Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {RAWALPINDI_FIXED_ROUTES.map((group) => {
            const isSelected = selectedGroupId === group.id;
            return (
              <button
                key={group.id}
                onClick={() => setSelectedGroupId(group.id)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center gap-3.5 ${
                  isSelected
                    ? 'bg-amber-400 text-neutral-950 border-amber-400 shadow-lg shadow-amber-400/10 font-black'
                    : 'bg-neutral-800/80 text-neutral-300 border-neutral-700 hover:bg-neutral-800 hover:text-white'
                }`}
              >
                <img
                  src={group.image}
                  alt={group.vehicleName}
                  className="w-14 h-12 rounded-lg object-cover bg-neutral-950 shrink-0 border border-black/20"
                />
                <div className="min-w-0">
                  <span className={`text-xs block font-bold truncate font-sans ${isSelected ? 'text-neutral-900' : 'text-white'}`}>
                    {group.vehicleName}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Group Details Card */}
        <div className="bg-neutral-950 rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Vehicle Visual & Highlights */}
          <div className="lg:col-span-4 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-neutral-800 flex flex-col justify-between bg-gradient-to-b from-neutral-900 to-neutral-950">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {currentGroup.vehicleName}
              </h3>
              <p className="text-xs text-neutral-400 mt-2 font-normal leading-relaxed">
                Clean interior, seasoned highway chauffeur, high-output AC chillers, and fully serviced for smooth intercity cruising.
              </p>

              <div className="mt-5 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
                <img
                  src={currentGroup.image}
                  alt={currentGroup.vehicleName}
                  className="w-full h-44 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div 
                style={{ color: '#b9dfd4' }}
                className="text-xs font-bold"
              >
                No Hidden Charges • Fixed Doorstep Fare
              </div>
              <button
                onClick={() =>
                  openWhatsApp(
                    `Assalam-o-Alaikum PAK E DRIVE, I would like to book ${currentGroup.vehicleName} from Rawalpindi. Please share driver and booking confirmation.`
                  )
                }
                style={{
                  backgroundColor: '#275632',
                  height: '41px',
                  maxWidth: '595.333px',
                }}
                className="w-full text-white font-black text-xs uppercase rounded-lg tracking-wider transition-colors cursor-pointer text-center block shadow-lg shadow-emerald-500/10 font-sans"
              >
                BOOK THIS VEHICLE ON WHATSAPP
              </button>
            </div>
          </div>

          {/* Right Column: Destination Rate Cards */}
          <div className="lg:col-span-8 p-6 sm:p-8 bg-neutral-900/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4 font-sans">
                <span className="text-xs font-black uppercase tracking-wider text-neutral-400">
                  DESTINATION
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                  FIXED FARE
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentGroup.rates.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-neutral-900 p-3.5 rounded-xl border border-neutral-800 hover:border-amber-400/50 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <span className="font-extrabold text-sm text-white block leading-tight">
                        {item.destination}
                      </span>
                      {(item.distance || item.time) && (
                        <span className="text-[10px] text-neutral-400 font-mono block mt-0.5">
                          {item.distance} {item.time ? `• ${item.time}` : ''}
                        </span>
                      )}
                    </div>

                    <div className="text-right">
                      <div 
                        style={{ color: '#f5f6cf' }}
                        className="text-sm font-black bg-amber-400/10 border border-amber-400/30 px-2.5 py-1 rounded-md font-mono"
                      >
                        {item.price}
                      </div>
                      <button
                        onClick={() =>
                          handleBookFixedRate(
                            currentGroup.vehicleName,
                            item.destination,
                            item.price
                          )
                        }
                        className="text-[10px] font-bold text-neutral-400 group-hover:text-amber-400 mt-1 cursor-pointer transition-colors block ml-auto uppercase font-sans"
                      >
                        Book Now →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400 font-sans">
              <span>* Chauffeur, fuel, and vehicle sanitization included. Motorway tolls as per route.</span>
              <span style={{ color: '#b3a88d' }} className="font-bold">PAK E DRIVE 24/7 National Chauffeur Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
