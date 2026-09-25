import React, { useState } from 'react';
import { openWhatsApp } from '../utils/whatsapp';

interface FixedRateRoute {
  destination: string;
  distance: string;
  time: string;
  corollaRate: string;
  grandCabinRate: string;
  pradoRate: string;
}

const KARACHI_INTERCITY_FARES: FixedRateRoute[] = [
  {
    destination: 'Karachi to Hyderabad (M-9)',
    distance: '160 km',
    time: '2.5 Hrs',
    corollaRate: 'Rs. 9,500',
    grandCabinRate: 'Rs. 18,000',
    pradoRate: 'Rs. 25,000',
  },
  {
    destination: 'Karachi to Sukkur (M-5)',
    distance: '480 km',
    time: '6 Hrs',
    corollaRate: 'Rs. 24,000',
    grandCabinRate: 'Rs. 38,000',
    pradoRate: 'Rs. 55,000',
  },
  {
    destination: 'Karachi to Multan (M-5)',
    distance: '890 km',
    time: '10-11 Hrs',
    corollaRate: 'Rs. 38,000',
    grandCabinRate: 'Rs. 58,000',
    pradoRate: 'Rs. 85,000',
  },
  {
    destination: 'Karachi to Faisalabad (M-4)',
    distance: '1,100 km',
    time: '13-14 Hrs',
    corollaRate: 'Rs. 46,000',
    grandCabinRate: 'Rs. 68,000',
    pradoRate: 'Rs. 98,000',
  },
  {
    destination: 'Karachi to Lahore (M-5 & M-3)',
    distance: '1,215 km',
    time: '14-16 Hrs',
    corollaRate: 'Rs. 50,000',
    grandCabinRate: 'Rs. 75,000',
    pradoRate: 'Rs. 110,000',
  },
  {
    destination: 'Karachi to Rawalpindi & Islamabad (M-2)',
    distance: '1,410 km',
    time: '16-18 Hrs',
    corollaRate: 'Rs. 58,000',
    grandCabinRate: 'Rs. 85,000',
    pradoRate: 'Rs. 130,000',
  },
];

const ROUTE_HEADING_STYLES: React.CSSProperties[] = [
  { fontFamily: 'Georgia, serif', fontSize: '16px' },
  { fontFamily: 'Times New Roman, serif', fontSize: '18px' },
  { fontFamily: 'Times New Roman, serif', fontSize: '18px' },
  { fontFamily: 'Times New Roman, serif', fontSize: '17px' },
  { fontFamily: 'Times New Roman, serif', fontSize: '17px' },
  { fontFamily: 'Georgia, serif', fontSize: '16px' },
];

export const RawalpindiRoutesSection: React.FC = () => {
  const [selectedVehicleType, setSelectedVehicleType] = useState<'corolla' | 'grandCabin' | 'prado'>('corolla');

  const handleBookFixedRate = (destination: string, rate: string) => {
    const vName = 
      selectedVehicleType === 'corolla' 
        ? 'Toyota Corolla Altis Grande' 
        : selectedVehicleType === 'grandCabin' 
          ? 'Toyota HiAce Grand Cabin 14-Seater' 
          : 'Toyota Land Cruiser Prado TX';

    openWhatsApp(
      `Assalam-o-Alaikum PAK E DRIVE, I would like to book a trip for ${destination} in ${vName} for ${rate} (Includes verified chauffeur). Please confirm driver dispatch.`
    );
  };

  return (
    <section
      id="karachi-fixed-routes-section"
      style={{
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic',
      }}
      className="py-12 sm:py-16 bg-neutral-50/70 text-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 
              style={{
                fontFamily: 'Georgia, serif',
              }}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111111]"
            >
              Karachi Intercity Motorway Fares
            </h2>
            <p 
              style={{
                fontFamily: 'Times New Roman, serif',
                fontSize: '12px',
              }}
              className="text-neutral-600 mt-1.5 max-w-xl font-normal"
            >
              Fixed rate fares from Karachi to Sindh and Punjab cities. Includes professional highway chauffeur and air-conditioned vehicle.
            </p>
          </div>

          {/* Vehicle Tab Switcher */}
          <div 
            style={{
              fontFamily: 'Times New Roman, serif',
            }}
            className="flex items-center gap-1.5 p-1 bg-white rounded-lg border border-[#E5E5E5] shadow-2xs self-start md:self-auto"
          >
            <button
              onClick={() => setSelectedVehicleType('corolla')}
              style={{
                fontFamily: 'Times New Roman, serif',
                backgroundColor: selectedVehicleType === 'corolla' ? '#3ca19a' : undefined,
              }}
              className={`text-xs px-3 py-1.5 rounded-[5px] font-bold transition-colors cursor-pointer ${
                selectedVehicleType === 'corolla'
                  ? 'text-white shadow-xs'
                  : 'text-[#222222] hover:text-[#3ca19a]'
              }`}
            >
              Corolla Sedan
            </button>
            <button
              onClick={() => setSelectedVehicleType('grandCabin')}
              style={{
                backgroundColor: selectedVehicleType === 'grandCabin' ? '#3ca19a' : undefined,
              }}
              className={`text-xs px-3 py-1.5 rounded-[5px] font-bold transition-colors cursor-pointer ${
                selectedVehicleType === 'grandCabin'
                  ? 'text-white shadow-xs'
                  : 'text-[#222222] hover:text-[#3ca19a]'
              }`}
            >
              14-Seat Grand Cabin
            </button>
            <button
              onClick={() => setSelectedVehicleType('prado')}
              style={{
                backgroundColor: selectedVehicleType === 'prado' ? '#3ca19a' : undefined,
              }}
              className={`text-xs px-3 py-1.5 rounded-[5px] font-bold transition-colors cursor-pointer ${
                selectedVehicleType === 'prado'
                  ? 'text-white shadow-xs'
                  : 'text-[#222222] hover:text-[#3ca19a]'
              }`}
            >
              Prado SUV
            </button>
          </div>
        </div>

        {/* 6 Route Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {KARACHI_INTERCITY_FARES.map((item, idx) => {
            const currentRate = 
              selectedVehicleType === 'corolla' 
                ? item.corollaRate 
                : selectedVehicleType === 'grandCabin' 
                  ? item.grandCabinRate 
                  : item.pradoRate;

            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E5E5E5] p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span 
                      style={{ backgroundColor: '#ffffff' }}
                      className="text-[10px] font-bold uppercase tracking-wider text-[#3ca19a] px-2 py-0.5 rounded-[4px] border border-[#E5E5E5]"
                    >
                      From Karachi
                    </span>
                    <span className="text-xs text-neutral-500 font-medium">
                      {item.distance} • {item.time}
                    </span>
                  </div>

                  <h3 
                    style={ROUTE_HEADING_STYLES[idx] || {}}
                    className="font-bold text-[#111111] tracking-tight group-hover:text-[#3ca19a] transition-colors"
                  >
                    {item.destination}
                  </h3>

                  <div className="mt-3 pt-3 border-t border-[#E5E5E5] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-neutral-500 block">
                        Estimated Fare
                      </span>
                      <span className="text-lg font-black text-[#111111]">
                        {currentRate}
                      </span>
                    </div>

                    <button
                      onClick={() => handleBookFixedRate(item.destination, currentRate)}
                      style={{ backgroundColor: '#3ca19a' }}
                      className="hover:bg-[#328e88] text-white text-xs font-bold px-4 py-2 rounded-[7px] transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                    >
                      Book Fare
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
