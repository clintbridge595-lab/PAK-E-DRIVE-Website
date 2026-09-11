import React, { useState } from 'react';
import { FLEET_VEHICLES } from '../data/fleetData';
import { WHATSAPP_DISPLAY, PHONE_DISPATCH, openWhatsApp } from '../utils/whatsapp';

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
    <div id="contact-page-wrapper" className="animate-fadeIn">
      {/* Top Banner */}
      <div 
        style={{
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          backgroundColor: '#2c2c2f',
        }}
        className="text-white py-14 sm:py-20 border-b border-neutral-800"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h1 
            style={{ color: '#e0dede' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
          >
            Contact &amp; Reserve With PAK E DRIVE
          </h1>
          <p className="text-neutral-300 text-xs sm:text-sm sm:leading-relaxed font-normal max-w-2xl mx-auto">
            Direct dispatch desk, instant WhatsApp booking, and Karachi garage location.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div 
        style={{
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-950">
                Always Ready to Assist You
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-normal">
                Whether you have an urgent airport flight at 3 AM or an upcoming wedding procession, our dispatch coordinators are on duty 24/7.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Card 1 */}
              <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold block mb-1">
                    MAIN BOOKING HOTLINE
                  </span>
                  <a href="tel:+923152292493" className="text-base font-extrabold text-neutral-900 hover:text-amber-600">
                    {WHATSAPP_DISPLAY}
                  </a>
                  <div className="text-xs text-neutral-500 mt-0.5">Voice Calls &amp; WhatsApp Dispatch</div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold block mb-1">
                    FLEET DISPATCH DESK
                  </span>
                  <a href="tel:+923152398490" className="text-base font-extrabold text-neutral-900 hover:text-amber-600">
                    {PHONE_DISPATCH}
                  </a>
                  <div className="text-xs text-neutral-500 mt-0.5">Route Tracking &amp; Corporate Coordination</div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold block mb-1">
                    CENTRAL OFFICE &amp; DEPOT
                  </span>
                  <div className="text-sm font-bold text-neutral-900">
                    Main Korangi Road &amp; DHA Phase 6, Karachi, Sindh, Pakistan
                  </div>
                  <div className="text-xs text-neutral-500 mt-0.5">Convenient access to Clifton, DHA, Airport &amp; M-9</div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold block mb-1">
                    HOURS OF OPERATION
                  </span>
                  <div className="text-sm font-bold text-neutral-900">
                    24 Hours / 7 Days a Week
                  </div>
                  <div className="text-xs text-neutral-500 mt-0.5">Emergency chauffeur dispatch and phone inquiries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-neutral-200 shadow-md">
              <h3 
                style={{ fontSize: '26px' }}
                className="font-black text-neutral-950 mb-2"
              >
                Send a Direct Booking Inquiry
              </h3>
              <p className="text-xs text-neutral-500 mb-6">
                Fill this brief form and our system will directly format your itinerary and connect you with the dispatch manager.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl text-center space-y-3">
                  <h4 className="text-base font-extrabold text-emerald-900">
                    Inquiry Transmitted to WhatsApp
                  </h4>
                  <p className="text-xs text-emerald-700">
                    Your itinerary was pre-filled and sent to the PAK E DRIVE dispatch desk. Our representative will reply in a few moments.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-bold text-emerald-800 underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Asad Qureshi"
                        className="w-full text-xs px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0300 1234567"
                        className="w-full text-xs px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                        Desired Vehicle
                      </label>
                      <select
                        value={formData.vehicle}
                        onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-amber-400 cursor-pointer"
                      >
                        {FLEET_VEHICLES.map((v) => (
                          <option key={v.id} value={v.name}>
                            {v.name} ({v.category})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                        Service Type
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-amber-400 cursor-pointer"
                      >
                        <option value="10-Hour City Chauffeur Rental">10-Hour City Chauffeur Rental</option>
                        <option value="Karachi Airport Pick / Drop">Karachi Airport Pick / Drop</option>
                        <option value="Karachi to Hyderabad Express">Karachi to Hyderabad Express</option>
                        <option value="Wedding / Barat / Protocol Car">Wedding / Barat / Protocol Car</option>
                        <option value="Intercity Motorway Highway (Lahore/Islamabad)">Intercity Motorway Highway (Lahore/Islamabad)</option>
                        <option value="14-Seater HiAce Grand Cabin">14-Seater HiAce Grand Cabin</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                        Pickup Date &amp; Time *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.pickupDate}
                        onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                        placeholder="e.g. Tomorrow 9:00 AM"
                        className="w-full text-xs px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                        Pickup Area in Karachi *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.pickupLocation}
                        onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                        placeholder="e.g. DHA Phase 5, Clifton, Airport"
                        className="w-full text-xs px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                      Additional Notes / Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Need baby seat, floral wedding decoration, or English speaking driver..."
                      className="w-full text-xs px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-amber-400"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      style={{
                        fontFamily: 'Verdana, sans-serif',
                        fontSize: '13px',
                        backgroundColor: '#2ba155',
                        width: '439.333px',
                        maxWidth: '100%',
                      }}
                      className="flex items-center justify-center text-white font-black uppercase py-3.5 px-4 rounded-lg shadow-sm tracking-wider transition-colors cursor-pointer"
                    >
                      <span>TRANSMIT VIA WHATSAPP (INSTANT RESPONSE)</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
