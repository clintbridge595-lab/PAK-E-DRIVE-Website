import React, { useState } from 'react';
import { X, Calendar, MapPin, Car, Clock, Phone, Send } from 'lucide-react';
import { FLEET_VEHICLES } from '../data/fleetData';
import { openWhatsApp } from '../utils/whatsapp';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVehicle?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialVehicle,
}) => {
  const [vehicle, setVehicle] = useState(initialVehicle || FLEET_VEHICLES[0].name);
  const [pickupCity, setPickupCity] = useState('Karachi (DHA / Clifton)');
  const [dropoffCity, setDropoffCity] = useState('Karachi (City Tour 10-Hrs)');
  const [pickupDate, setPickupDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [pickupTime, setPickupTime] = useState('09:00 AM');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*PAK E DRIVE - Instant Reservation Request*%0A%0A*Customer:* ${customerName}%0A*Phone:* ${customerPhone}%0A*Vehicle:* ${vehicle}%0A*Pickup:* ${pickupCity}%0A*Dropoff / Itinerary:* ${dropoffCity}%0A*Date & Time:* ${pickupDate} at ${pickupTime}%0A%0APlease confirm chauffeur availability and final fare.`;
    openWhatsApp(decodeURIComponent(msg));
    onClose();
  };

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="booking-modal-container"
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E5E5E5] text-[#222222] animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header: Solid Teal #0D919C Bar */}
        <div className="bg-[#0D919C] text-white p-5 sm:p-6 flex items-center justify-between">
          <div>
            <span className="text-xs text-teal-100 font-bold uppercase tracking-wider block">
              Reservation Desk
            </span>
            <h3 className="text-xl font-extrabold text-white">
              Reserve Your Chauffeur Vehicle
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close booking modal"
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#111111] mb-1.5 uppercase tracking-wider">
              Select Vehicle
            </label>
            <div className="relative">
              <Car className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full text-xs font-semibold pl-9 pr-3 py-2.5 bg-white border border-[#E5E5E5] rounded-[7px] focus:outline-hidden focus:border-[#0D919C] cursor-pointer"
              >
                {FLEET_VEHICLES.map((v) => (
                  <option key={v.id} value={v.name}>
                    {v.name} ({v.category}) — {v.rates?.tenHoursCity || 'Quote on WhatsApp'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#111111] mb-1.5 uppercase tracking-wider">
                Pickup Location
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  required
                  value={pickupCity}
                  onChange={(e) => setPickupCity(e.target.value)}
                  placeholder="e.g. DHA, Karachi Airport"
                  className="w-full text-xs pl-9 pr-3 py-2.5 bg-white border border-[#E5E5E5] rounded-[7px] focus:outline-hidden focus:border-[#0D919C]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#111111] mb-1.5 uppercase tracking-wider">
                Destination / Dropoff
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  required
                  value={dropoffCity}
                  onChange={(e) => setDropoffCity(e.target.value)}
                  placeholder="e.g. Hyderabad, City 10-Hrs"
                  className="w-full text-xs pl-9 pr-3 py-2.5 bg-white border border-[#E5E5E5] rounded-[7px] focus:outline-hidden focus:border-[#0D919C]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#111111] mb-1.5 uppercase tracking-wider">
                Travel Date
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="date"
                  required
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full text-xs pl-9 pr-3 py-2.5 bg-white border border-[#E5E5E5] rounded-[7px] focus:outline-hidden focus:border-[#0D919C] cursor-pointer"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#111111] mb-1.5 uppercase tracking-wider">
                Pickup Time
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  required
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  placeholder="09:00 AM"
                  className="w-full text-xs pl-9 pr-3 py-2.5 bg-white border border-[#E5E5E5] rounded-[7px] focus:outline-hidden focus:border-[#0D919C]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#111111] mb-1.5 uppercase tracking-wider">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Asad Khan"
                className="w-full text-xs p-2.5 bg-white border border-[#E5E5E5] rounded-[7px] focus:outline-hidden focus:border-[#0D919C]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#111111] mb-1.5 uppercase tracking-wider">
                WhatsApp Phone Number *
              </label>
              <input
                type="tel"
                required
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="0300 1234567"
                className="w-full text-xs p-2.5 bg-white border border-[#E5E5E5] rounded-[7px] focus:outline-hidden focus:border-[#0D919C]"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              style={{ backgroundColor: '#3ca19a' }}
              className="w-full inline-flex items-center justify-center gap-2 hover:bg-[#328e88] text-white font-bold text-xs sm:text-sm py-3 rounded-[7px] transition-colors cursor-pointer shadow-xs"
            >
              <Send className="w-4 h-4 text-white" />
              <span>Confirm Reservation on WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
