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
  const [pickupDate, setPickupDate] = useState('2026-09-10');
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
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="booking-modal-container"
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 text-neutral-900 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#121316] text-white p-5 sm:p-6 flex items-center justify-between">
          <div>
            <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">
              Reservation Desk
            </span>
            <h3 className="text-xl font-extrabold text-white">
              Reserve Your Chauffeur Driven Vehicle
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close booking modal"
            className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1">
              Select Vehicle
            </label>
            <div className="relative">
              <Car className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full text-xs font-semibold pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-amber-400 cursor-pointer"
              >
                {FLEET_VEHICLES.map((v) => (
                  <option key={v.id} value={v.name}>
                    {v.name} ({v.category}) — {v.rates.tenHoursCity}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
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
                  className="w-full text-xs pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Destination / Drop-off
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  required
                  value={dropoffCity}
                  onChange={(e) => setDropoffCity(e.target.value)}
                  placeholder="e.g. Hyderabad, Clifton, Thatta"
                  className="w-full text-xs pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-amber-400"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Pickup Date
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="date"
                  required
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full text-xs pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-amber-400 cursor-pointer"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Pickup Time
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  required
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  placeholder="e.g. 09:00 AM"
                  className="w-full text-xs pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-amber-400"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Full Name"
                className="w-full text-xs px-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="0300 1234567"
                  className="w-full text-xs pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-amber-400"
                />
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 btn-whatsapp font-bold text-xs py-3.5 rounded-lg shadow-sm tracking-wide transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Booking Details via WhatsApp</span>
            </button>
            <p className="text-xs text-neutral-500 text-center mt-2 font-normal">
              We never charge advance fees before verifying driver and car dispatch.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
