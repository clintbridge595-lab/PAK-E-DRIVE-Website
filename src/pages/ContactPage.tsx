import React, { useState } from 'react';
import { FLEET_VEHICLES } from '../data/fleetData';
import { WHATSAPP_DISPLAY, PHONE_DISPATCH, openWhatsApp } from '../utils/whatsapp';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: 'Toyota Corolla Altis (Grande 1.8 CVT)',
    serviceType: '10-Hour City Chauffeur Rental',
    pickupDate: '',
    pickupLocation: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*PAK E DRIVE - Web Booking Inquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Vehicle:* ${formData.vehicle}%0A*Service:* ${formData.serviceType}%0A*Date:* ${formData.pickupDate}%0A*Pickup Location:* ${formData.pickupLocation}%0A*Notes:* ${formData.notes || 'None'}`;
    openWhatsApp(decodeURIComponent(msg));
    setSubmitted(true);
  };

  return (
    <div id="contact-page-wrapper" className="animate-fadeIn bg-white text-[#222222]">
      {/* Reusable Section Header */}
      <SectionHeader title="Contact Us" currentPageName="Contact" />

      {/* Main Content Grid */}
      <div 
        style={{
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Contact info blocks with solid teal filled circle icon (phone/email/location icon in white) next to text, on white card with #E5E5E5 border */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '31px',
                }}
                className="font-extrabold text-[#111111]"
              >
                Always Ready to Assist You
              </h2>
              <p 
                style={{
                  fontFamily: 'Times New Roman, serif',
                  fontSize: '13px',
                }}
                className="text-neutral-600 mt-2 font-normal"
              >
                Our fleet managers and dispatch coordinators are available 24/7 for immediate bookings, flight arrivals, and wedding protocols.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Contact Block 1: Phone Hotline */}
              <div className="bg-white p-5 rounded-xl border border-[#E5E5E5] shadow-2xs flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#0D919C] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold block mb-0.5">
                    MAIN BOOKING HOTLINE
                  </span>
                  <a href="tel:+923152292493" className="text-base font-extrabold text-[#111111] hover:text-[#0D919C] transition-colors">
                    {WHATSAPP_DISPLAY}
                  </a>
                  <div className="text-xs text-neutral-500 mt-0.5">Voice Calls &amp; WhatsApp Coordination</div>
                </div>
              </div>

              {/* Contact Block 2: Fleet Dispatch */}
              <div className="bg-white p-5 rounded-xl border border-[#E5E5E5] shadow-2xs flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#0D919C] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold block mb-0.5">
                    FLEET DISPATCH DESK
                  </span>
                  <a href="tel:+923152398490" className="text-base font-extrabold text-[#111111] hover:text-[#0D919C] transition-colors">
                    {PHONE_DISPATCH}
                  </a>
                  <div className="text-xs text-neutral-500 mt-0.5">Urgent Night Airport Dispatch &amp; Highway Support</div>
                </div>
              </div>

              {/* Contact Block 3: Location */}
              <div className="bg-white p-5 rounded-xl border border-[#E5E5E5] shadow-2xs flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#0D919C] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold block mb-0.5">
                    CENTRAL OFFICE &amp; DEPOT
                  </span>
                  <div className="text-sm font-bold text-[#111111]">
                    Main Korangi Road &amp; DHA Phase 6, Karachi, Sindh, Pakistan
                  </div>
                  <div className="text-xs text-neutral-500 mt-0.5">Minutes from Clifton, DHA, Airport, and M-9</div>
                </div>
              </div>

              {/* Contact Block 4: Hours */}
              <div className="bg-white p-5 rounded-xl border border-[#E5E5E5] shadow-2xs flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#0D919C] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold block mb-0.5">
                    OPERATING HOURS
                  </span>
                  <div className="text-sm font-bold text-[#111111]">
                    24 Hours / 7 Days a Week
                  </div>
                  <div className="text-xs text-neutral-500 mt-0.5">Round-the-clock chauffeur dispatches</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Reservation Inquiry Form in White Card */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E5E5] shadow-xs">
            <h3 className="text-xl font-extrabold text-[#111111] mb-1">
              Send an Online Booking Request
            </h3>
            <p className="text-xs text-neutral-600 mb-6 font-normal">
              Submit your itinerary below for a quick rate quote delivered directly via WhatsApp.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-lg bg-teal-50 border border-[#0D919C] text-xs text-[#0D919C] font-semibold">
                Thank you! Your inquiry was prepared for our official WhatsApp desk. Our manager will reply in under 5 minutes.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tariq Mehmood"
                    className="w-full bg-white border border-[#E5E5E5] focus:border-[#0D919C] focus:ring-1 focus:ring-[#0D919C] text-xs font-semibold rounded-[7px] p-3 text-[#222222] outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0300 1234567"
                    className="w-full bg-white border border-[#E5E5E5] focus:border-[#0D919C] focus:ring-1 focus:ring-[#0D919C] text-xs font-semibold rounded-[7px] p-3 text-[#222222] outline-hidden transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                    Select Vehicle *
                  </label>
                  <select
                    value={formData.vehicle}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    className="w-full bg-white border border-[#E5E5E5] focus:border-[#0D919C] focus:ring-1 focus:ring-[#0D919C] text-xs font-semibold rounded-[7px] p-3 text-[#222222] outline-hidden transition-colors cursor-pointer"
                  >
                    {FLEET_VEHICLES.map((v) => (
                      <option key={v.id} value={v.name}>
                        {v.name} ({v.category})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                    Service Required *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-white border border-[#E5E5E5] focus:border-[#0D919C] focus:ring-1 focus:ring-[#0D919C] text-xs font-semibold rounded-[7px] p-3 text-[#222222] outline-hidden transition-colors cursor-pointer"
                  >
                    <option value="10-Hour City Chauffeur Rental">10-Hour City Chauffeur Rental</option>
                    <option value="Intercity Highway Transfer">Intercity Highway Transfer</option>
                    <option value="Wedding / Barat VIP Protocol">Wedding / Barat VIP Protocol</option>
                    <option value="Bulletproof B6+ Escort">Bulletproof B6+ Escort</option>
                    <option value="Karachi Airport Pick & Drop">Karachi Airport Pick &amp; Drop</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                    Pickup Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.pickupDate}
                    onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                    className="w-full bg-white border border-[#E5E5E5] focus:border-[#0D919C] focus:ring-1 focus:ring-[#0D919C] text-xs font-semibold rounded-[7px] p-3 text-[#222222] outline-hidden transition-colors cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                    Pickup Location / Area *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    placeholder="e.g. DHA Phase 5, Karachi"
                    className="w-full bg-white border border-[#E5E5E5] focus:border-[#0D919C] focus:ring-1 focus:ring-[#0D919C] text-xs font-semibold rounded-[7px] p-3 text-[#222222] outline-hidden transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-1.5">
                  Trip Notes / Special Requests (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Specify luggage quantity, destination city, or special arrangements..."
                  className="w-full bg-white border border-[#E5E5E5] focus:border-[#0D919C] focus:ring-1 focus:ring-[#0D919C] text-xs font-semibold rounded-[7px] p-3 text-[#222222] outline-hidden transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  style={{ backgroundColor: '#42813c' }}
                  className="w-full inline-flex items-center justify-center gap-2 hover:opacity-90 text-white font-bold text-xs sm:text-sm py-3.5 rounded-[7px] shadow-xs tracking-wide transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Send Booking Request on WhatsApp</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};
