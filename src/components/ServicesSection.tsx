import React, { useState } from 'react';
import { TAILORED_SERVICES, FAQS, FLEET_VEHICLES } from '../data/fleetData';
import { ArrowRight, ChevronDown, ChevronUp, PhoneCall } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { Vehicle } from '../types';

interface ServicesSectionProps {
  isFullPage?: boolean;
  onOpenSpecs?: (vehicle: Vehicle) => void;
  onOpenBooking?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  isFullPage = false,
  onOpenSpecs,
  onOpenBooking,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleBookService = (serviceTitle: string) => {
    openWhatsApp(
      `Assalam-o-Alaikum PAK E DRIVE, I would like to book or inquire about your '${serviceTitle}' service.`
    );
  };

  const handleVehicleSpecsClick = (vehicleName: string) => {
    const found = FLEET_VEHICLES.find(
      (v) =>
        v.name.toLowerCase().includes(vehicleName.toLowerCase()) ||
        v.subtitle.toLowerCase().includes(vehicleName.toLowerCase())
    );
    if (found && onOpenSpecs) {
      onOpenSpecs(found);
    } else if (onOpenBooking) {
      onOpenBooking();
    }
  };

  return (
    <div id="services-section-wrapper">
      {/* If full page: Hero Banner matching video (00:08 - 00:12 of video 2) */}
      {isFullPage && (
        <div 
          className="bg-[#121316] text-white py-14 sm:py-20 border-b border-neutral-800"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
              Tailored Mobility for Weddings, Executives &amp; Intercity Travel
            </h1>
            <p className="text-neutral-300 text-xs sm:text-sm sm:leading-relaxed font-normal">
              Every vehicle in our fleet is accompanied by an experienced, licensed chauffeur. We handle traffic, parking, and highway navigation while you arrive in style and complete peace of mind.
            </p>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        
        {/* On Home page: Standard Section Heading */}
        {!isFullPage && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-950">
              Tailored Car Rental Services in Pakistan
            </h2>
            <p 
              className="text-xs sm:text-sm text-neutral-500 mt-2 font-normal"
            >
              From wedding entrances to decorated roadsters to airport VIP pickups and long-distance intercity touring.
            </p>
          </div>
        )}

        {/* If Not Full Page: 5/6 Card Grid layout matching Home page video (01:31 - 01:36) */}
        {!isFullPage ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TAILORED_SERVICES.map((serv) => (
              <div
                key={serv.id}
                id={`service-card-${serv.id}`}
                className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-extrabold text-neutral-900 tracking-tight">
                    {serv.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    {serv.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-1.5 mt-3 pt-2.5 border-t border-neutral-100">
                    {serv.bullets.slice(0, 2).map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                        <span className="text-neutral-400 font-bold select-none">•</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-800">
                    {serv.startingPrice}
                  </span>
                  <button
                    onClick={() => handleBookService(serv.title)}
                    className="inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-md transition-all cursor-pointer shadow-xs"
                  >
                    <span>Explore</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Full Services Page Layout with Detailed Rows and Car Recommendations (video 2: 00:12 - 00:18) */
          <div className="space-y-10">
            {TAILORED_SERVICES.map((serv) => (
              <div
                key={serv.id}
                id={`service-detail-${serv.id}`}
                className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 lg:p-10 shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Description & Bullets */}
                  <div className="lg:col-span-8 space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-black text-neutral-950">
                      {serv.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {serv.description}
                    </p>

                    {/* All Bullets without clutter icons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {serv.bullets.map((b, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                          <span className="text-neutral-400 font-bold select-none">•</span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3">
                      <button
                        onClick={() => handleBookService(serv.title)}
                        className="flex items-center gap-2 bg-[#1b4d2e] hover:bg-[#153e24] text-white font-extrabold text-xs uppercase px-6 py-3 rounded-lg shadow-sm tracking-wider cursor-pointer transition-colors"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                        <span>BOOK ON WHATSAPP</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Recommended Vehicles matching video (00:13 - 00:17) */}
                  <div className="lg:col-span-4 space-y-3 bg-neutral-50 p-4 rounded-xl border border-neutral-200">
                    <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider block mb-1">
                      RECOMMENDED FLEET FOR THIS SERVICE
                    </span>

                    {serv.suitableVehicles && serv.suitableVehicles.length > 0 ? (
                      serv.suitableVehicles.map((car, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-neutral-200 shadow-2xs hover:border-neutral-300 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={car.image}
                              alt={car.name}
                              className="w-14 h-11 object-cover rounded-md border border-neutral-100"
                              referrerPolicy="no-referrer"
                            />
                            <div>
                              <div className="text-xs font-bold text-neutral-900 leading-tight">
                                {car.name}
                              </div>
                              <div className="text-[10px] text-emerald-700 font-medium italic">
                                Chauffeur Included
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => handleVehicleSpecsClick(car.name)}
                            className="bg-[#f5f1e8] hover:bg-[#ebe3d3] text-neutral-800 text-[10px] font-black uppercase px-3 py-1.5 rounded-md tracking-wider border border-[#e2d8c3] cursor-pointer transition-colors"
                          >
                            SPECS
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="p-3 bg-white rounded-lg border border-neutral-200 text-xs text-neutral-600 font-medium flex items-center gap-2">
                        <span className="text-emerald-700 font-bold">•</span>
                        <span>All vehicles in fleet can be assigned with driver.</span>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* If Full Page: Frequently Asked Questions matching video (00:18 - 00:20 of video 2) */}
        {isFullPage && (
          <div 
            className="mt-16 pt-12 border-t border-neutral-200"
          >
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm mt-1">
                Clear, honest answers about rates, booking procedures, and chauffeur guidelines.
              </p>
            </div>

            <div className="max-w-3xl mx-auto divide-y divide-neutral-200 border-y border-neutral-200">
              {FAQS.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id} className="py-4">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between text-left gap-4 font-bold text-sm sm:text-base text-neutral-900 hover:text-neutral-700 cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-neutral-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed pr-6 animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Custom Event Callout Banner matching video (00:20) */}
            <div 
              style={{
                backgroundColor: '#2f2f36',
              }}
              className="mt-12 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-neutral-800"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  Need a Custom Event or Corporate Transportation Plan?
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  We cater to wedding motorcades, embassy convoys, corporate multi-day conferences, and factory employee charters.
                </p>
              </div>

              <button
                onClick={() => openWhatsApp('Assalam-o-Alaikum, I need to discuss a custom event / corporate transportation plan with the fleet manager.')}
                className="shrink-0 flex items-center gap-2 bg-[#1b4d2e] hover:bg-[#153e24] text-white font-extrabold text-xs uppercase px-6 py-3 rounded-lg shadow-sm tracking-wider transition-colors cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>TALK TO FLEET MANAGER</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

