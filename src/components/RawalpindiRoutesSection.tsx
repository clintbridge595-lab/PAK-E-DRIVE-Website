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
      className="py-12 sm:py-16 bg-neutral-900 text-white border-y border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Rawalpindi / Islamabad Fixed Intercity Routes
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+923002512201"
              className="inline-flex items-center bg-neutral-800 px-4 py-2 rounded-lg border border-neutral-700 hover:bg-neutral-700 transition-colors"
            >
              <span className="text-xs font-bold text-neutral-100 tracking-wide">
                Call Dispatch: 0300 2512201
              </span>
            </a>
          </div>
        </div>

        {/* Active Group Details Card */}
        <div className="bg-neutral-950 rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Vehicle Visual & Highlights */}
          <div className="lg:col-span-4 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-neutral-800 flex flex-col justify-start gap-4 bg-gradient-to-b from-neutral-900 to-neutral-950">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {currentGroup.vehicleName}
              </h3>
              <p className="text-xs text-neutral-400 mt-2 font-normal leading-relaxed">
                Clean interior, seasoned highway chauffeur, high-output AC chillers, and fully serviced for smooth intercity cruising.
              </p>

              <div className="mt-4 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
                <img
                  src={currentGroup.image}
                  alt={currentGroup.vehicleName}
                  className="w-full h-44 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() =>
                  openWhatsApp(
                    `Assalam-o-Alaikum PAK E DRIVE, I would like to book ${currentGroup.vehicleName} from Rawalpindi. Please share driver and booking confirmation.`
                  )
                }
                className="w-full btn-whatsapp h-11 text-xs font-bold tracking-wide transition-colors cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <span>Book Vehicle on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column: Destination Rate Cards */}
          <div className="lg:col-span-8 p-6 sm:p-8 bg-neutral-900/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4 font-sans">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Destination &amp; Fixed Rates
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentGroup.rates.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 hover:border-amber-400/50 transition-colors flex items-center justify-between group"
                  >
                    <div className="pr-2">
                      <span className="font-extrabold text-sm text-white block leading-tight">
                        {item.destination}
                      </span>
                      {(item.distance || item.time) && (
                        <span className="text-xs text-neutral-400 font-medium block mt-1">
                          {item.distance} {item.time ? `• ${item.time}` : ''}
                        </span>
                      )}
                    </div>

                    <div className="text-right flex flex-col items-end gap-2 shrink-0">
                      <span className="text-sm font-extrabold text-amber-400 tracking-tight">
                        {item.price}
                      </span>
                      <button
                        onClick={() =>
                          handleBookFixedRate(
                            currentGroup.vehicleName,
                            item.destination,
                            item.price
                          )
                        }
                        className="btn-gold text-xs font-bold px-3.5 py-2 rounded-lg cursor-pointer transition-colors shadow-2xs"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
