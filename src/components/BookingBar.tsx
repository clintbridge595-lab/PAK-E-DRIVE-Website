import React, { useState } from 'react';
import { openWhatsApp } from '../utils/whatsapp';

export type BookingServiceType = 'intercity' | 'daily' | 'wedding';

interface BookingBarProps {
  onVehicleChange?: (vehicleName: string) => void;
}

export const BookingBar: React.FC<BookingBarProps> = ({ onVehicleChange }) => {
  const [activeTab, setActiveTab] = useState<BookingServiceType>('intercity');
  const [pickup, setPickup] = useState('Jinnah Int. Airport (KHI)');
  const [destination, setDestination] = useState('Hyderabad (M-9 Motorway, 160km)');
  const [travelDate, setTravelDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [vehicle, setVehicle] = useState('Toyota HiAce Grand Cabin (14-Passenger High Roof)');

  const vehicleOptions = [
    { name: 'Toyota HiAce Grand Cabin (14-Passenger High Roof)', short: 'TOYOTA' },
    { name: 'Changan Oshan X7 (FuturSense 7-Seat)', short: 'CHANGAN' },
    { name: 'Toyota Corolla Altis (Grande 1.8 CVT)', short: 'COROLLA' },
    { name: 'Honda Civic (RS Turbo / Oriel 11th Gen)', short: 'HONDA CIVIC' },
    { name: 'Toyota Fortuner (Legender / Sigma 4 4x4)', short: 'FORTUNER' },
    { name: 'Toyota Land Cruiser V8 (ZX 200 Series)', short: 'V8 LUXURY' },
    { name: 'Toyota Land Cruiser Prado (TX / TZ Limited)', short: 'PRADO' },
    { name: 'Toyota Noah (7-Seater Luxury MPV)', short: 'TOYOTA NOAH' },
    { name: 'Honda BR-V (i-VTEC 7-Seater Crossover)', short: 'HONDA BR-V' },
    { name: 'Daihatsu Copen (Convertible Barat Wedding Car)', short: 'WEDDING COPEN' },
    { name: 'Audi A6 (Luxury Bridal Barat Sedan)', short: 'AUDI WEDDING' },
    { name: 'Toyota Yaris (ATIV X CVT 1.5)', short: 'YARIS' },
    { name: 'Suzuki Alto (VXL AGS 660cc)', short: 'ALTO' },
  ];

  const selectedShortName = vehicleOptions.find(v => v.name === vehicle)?.short || 'VEHICLE';

  const handleVehicleSelect = (val: string) => {
    setVehicle(val);
    if (onVehicleChange) {
      onVehicleChange(val);
    }
  };

  const handleConfirmWhatsApp = () => {
    const tabName = 
      activeTab === 'intercity' 
        ? 'Intercity Highway Transfer' 
        : activeTab === 'daily' 
          ? 'Daily City Chauffeur (10 Hours)' 
          : 'Wedding & VIP Barat Protocol';

    const message = `Assalam-o-Alaikum PAK E DRIVE, I would like to book a car:
• Service: ${tabName}
• Vehicle: ${vehicle}
• Pickup: ${pickup}
• Destination: ${destination}
• Travel Date: ${travelDate}
• Includes: Uniformed Professional Chauffeur

Kindly confirm availability and share the best quotation.`;

    openWhatsApp(message);
  };

  return (
    <div id="booking-calculator-widget" className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12">
      {/* Top Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        <button
          id="tab-intercity-transfer"
          onClick={() => {
            setActiveTab('intercity');
            setDestination('Hyderabad (M-9 Motorway, 160km)');
          }}
          className={`font-black px-5 py-2.5 rounded-t-lg tracking-wider text-xs uppercase transition-colors cursor-pointer flex items-center justify-center ${
            activeTab === 'intercity'
              ? 'bg-neutral-950 text-white shadow-md'
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          }`}
        >
          INTERCITY HIGHWAY TRANSFER
        </button>

        <button
          id="tab-daily-city-chauffeur"
          onClick={() => {
            setActiveTab('daily');
            setDestination('Karachi Local City (10 Hours Full Chauffeur)');
          }}
          className={`font-black px-5 py-2.5 rounded-t-lg tracking-wider text-xs uppercase transition-colors cursor-pointer flex items-center justify-center ${
            activeTab === 'daily'
              ? 'bg-neutral-950 text-white shadow-md'
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          }`}
        >
          DAILY CITY CHAUFFEUR (10 HRS)
        </button>

        <button
          id="tab-wedding-barat"
          onClick={() => {
            setActiveTab('wedding');
            setDestination('Karachi Wedding Banquet / Venue Event');
            setVehicle('Daihatsu Copen (Convertible Barat Wedding Car)');
          }}
          className={`font-black px-5 py-2.5 rounded-t-lg tracking-wider text-xs uppercase transition-colors cursor-pointer flex items-center justify-center ${
            activeTab === 'wedding'
              ? 'bg-neutral-950 text-white shadow-md'
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          }`}
        >
          WEDDING & VIP BARAT PROTOCOL
        </button>
      </div>

      {/* Booking Form Box */}
      <div 
        className="w-full bg-white rounded-b-xl rounded-tr-xl sm:rounded-tr-none shadow-2xl border border-neutral-200 p-6 sm:p-7 flex flex-col justify-between"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Pickup Point */}
          <div>
            <label className="block text-[11px] font-black uppercase tracking-wider text-neutral-600 mb-2">
              PICKUP POINT
            </label>
            <div className="relative">
              <select
                id="pickup-point-select"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 hover:border-neutral-400 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs sm:text-sm font-semibold rounded-lg p-3 text-neutral-900 cursor-pointer outline-hidden transition-colors"
              >
                <option value="Jinnah Int. Airport (KHI)">Jinnah Int. Airport (KHI)</option>
                <option value="DHA (Defence) Karachi">DHA (Defence) Karachi</option>
                <option value="Clifton & Bath Island">Clifton & Bath Island</option>
                <option value="Gulshan-e-Iqbal & PECHS">Gulshan-e-Iqbal & PECHS</option>
                <option value="Korangi Industrial Area">Korangi Industrial Area</option>
                <option value="Bahria Town Karachi">Bahria Town Karachi</option>
                <option value="North Nazimabad / Buffer Zone">North Nazimabad / Buffer Zone</option>
                <option value="Malir Cantt / Scheme 33">Malir Cantt / Scheme 33</option>
                <option value="Direct Doorstep Pickup (Karachi)">Direct Doorstep Pickup (Karachi)</option>
              </select>
            </div>
          </div>

          {/* Destination City */}
          <div>
            <label className="block text-[11px] font-black uppercase tracking-wider text-neutral-600 mb-2">
              DESTINATION CITY
            </label>
            <div className="relative">
              <select
                id="destination-city-select"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 hover:border-neutral-400 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs sm:text-sm font-semibold rounded-lg p-3 text-neutral-900 cursor-pointer outline-hidden transition-colors"
              >
                {activeTab === 'intercity' ? (
                  <>
                    <option value="Hyderabad (M-9 Motorway, 160km)">Hyderabad (M-9 Motorway, 160km)</option>
                    <option value="Thatta & Keenjhar Lake (105km)">Thatta & Keenjhar Lake (105km)</option>
                    <option value="Sukkur (M-5 Motorway, 480km)">Sukkur (M-5 Motorway, 480km)</option>
                    <option value="Lahore (M-5 & M-3 Motorway, 1215km)">Lahore (M-5 & M-3 Motorway, 1215km)</option>
                    <option value="Islamabad & Rawalpindi (1410km)">Islamabad & Rawalpindi (1410km)</option>
                    <option value="Northern Areas (Hunza, Swat, Skardu)">Northern Areas (Hunza, Swat, Skardu)</option>
                    <option value="Mirpurkhas & Interior Sindh">Mirpurkhas & Interior Sindh</option>
                  </>
                ) : activeTab === 'wedding' ? (
                  <>
                    <option value="Karachi Wedding Banquet / Venue Event">Karachi Wedding Banquet / Venue Event</option>
                    <option value="DHA to Korangi Creek Club Barat">DHA to Korangi Creek Club Barat</option>
                    <option value="Mohatta Palace / Beach Photoshoot + Barat">Mohatta Palace / Beach Photoshoot + Barat</option>
                    <option value="Avari Towers / Marriott Hotel Event">Avari Towers / Marriott Hotel Event</option>
                  </>
                ) : (
                  <>
                    <option value="Karachi Local City (10 Hours Full Chauffeur)">Karachi Local City (10 Hours Full Chauffeur)</option>
                    <option value="Corporate Full Day Meetings (DHA / Clifton / Korangi)">Corporate Full Day Meetings (DHA / Clifton / Korangi)</option>
                    <option value="Airport Pick & Multi-Stop City Tour">Airport Pick & Multi-Stop City Tour</option>
                  </>
                )}
              </select>
            </div>
          </div>

          {/* Travel Date */}
          <div>
            <label className="block text-[11px] font-black uppercase tracking-wider text-neutral-600 mb-2">
              TRAVEL DATE
            </label>
            <input
              id="travel-date-input"
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full bg-neutral-50 border border-neutral-300 hover:border-neutral-400 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs sm:text-sm font-semibold rounded-lg p-3 text-neutral-900 cursor-pointer outline-hidden transition-colors"
            />
          </div>

          {/* Vehicle Selection */}
          <div>
            <label className="block text-[11px] font-black uppercase tracking-wider text-neutral-600 mb-2">
              VEHICLE SELECTION
            </label>
            <select
              id="vehicle-select"
              value={vehicle}
              onChange={(e) => handleVehicleSelect(e.target.value)}
              className="w-full bg-neutral-50 border border-neutral-300 hover:border-neutral-400 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs sm:text-sm font-semibold rounded-lg p-3 text-neutral-900 cursor-pointer outline-hidden transition-colors"
            >
              {vehicleOptions.map((opt) => (
                <option key={opt.name} value={opt.name}>
                  {opt.name}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Bottom Banner inside Booking Box */}
        <div className="mt-6 pt-5 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-500">
                VEHICLE PACKAGE (INCLUDES UNIFORMED CHAUFFEUR)
              </div>
              <div className="text-sm font-serif italic text-neutral-900 font-bold">
                Direct Quote on WhatsApp <span className="text-amber-500 font-sans not-italic text-xs font-semibold ml-2">• Best Rate Guaranteed</span>
              </div>
            </div>
          </div>

          <button
            id="confirm-on-whatsapp-btn"
            onClick={handleConfirmWhatsApp}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-black font-extrabold text-xs uppercase px-7 py-3.5 rounded-lg shadow-md tracking-wider transition-all transform hover:scale-[1.02] cursor-pointer"
          >
            {/* WhatsApp SVG Icon */}
            <svg className="w-4 h-4 fill-current text-black" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>CONFIRM ON WHATSAPP ({selectedShortName})</span>
          </button>
        </div>
      </div>
    </div>
  );
};
