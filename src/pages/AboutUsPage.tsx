import React from 'react';
import { openWhatsApp, WHATSAPP_DISPLAY, PHONE_DISPATCH } from '../utils/whatsapp';

interface AboutUsPageProps {
  onOpenBooking: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onOpenBooking }) => {
  return (
    <div id="about-us-page-wrapper" className="animate-fadeIn">
      {/* Hero Banner */}
      <div 
        className="bg-neutral-900 text-white py-16 sm:py-20 border-b border-neutral-800"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Setting the Benchmark in Pakistani Chauffeur Mobility
          </h1>
          <p 
            className="text-neutral-300 text-xs sm:text-sm sm:leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Founded in Karachi, PAK E DRIVE has grown into one of Sindh's most reliable vehicle rental networks—connecting families, business leaders, and travellers across Pakistan with uncompromising safety and transparent pricing.
          </p>
        </div>
      </div>

      {/* Our Philosophy Section */}
      <section 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 leading-tight">
                Punctuality, Spotless Hygiene &amp; Respectful Service
              </h2>
            </div>

            <p className="text-neutral-600 leading-relaxed font-normal text-xs sm:text-sm">
              In a crowded market where hidden charges, broken air conditioners, and unreliable drivers are all too common, PAK E DRIVE was established on a single premise: <strong className="text-neutral-900 font-bold">treat every journey as our own family's journey.</strong>
            </p>

            <p className="text-neutral-600 leading-relaxed font-normal text-xs sm:text-sm">
              From our operational depot in Korangi Industrial Area and client desk in DHA Phase 6, our fleet is mechanically inspected before every dispatch. Our vehicles feature high-output air conditioning systems tuned for the intense Pakistani summer, sanitized interiors, and polite chauffeurs in formal attire.
            </p>

            {/* Badges Grid - Clean */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                <div className="text-2xl font-black text-neutral-900">100%</div>
                <div className="text-xs font-bold text-neutral-900 uppercase mt-0.5">
                  Verified Chauffeurs
                </div>
                <div className="text-xs text-neutral-500 mt-0.5">
                  CNIC &amp; police background checked
                </div>
              </div>

              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                <div className="text-2xl font-black text-neutral-900">
                  5.0 / 5.0
                </div>
                <div className="text-xs font-bold text-neutral-900 uppercase mt-0.5">
                  Google Reviews
                </div>
                <div className="text-xs text-neutral-500 mt-0.5">
                  Real feedback from actual clients
                </div>
              </div>
            </div>
          </div>

          {/* Right Image with Zero Hidden Surcharges Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-900">
              <img
                src="/cars/land_cruiser_v8.jpg"
                alt="Executive Chauffeur Vehicle"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />

              <div 
                className="absolute bottom-4 left-4 right-4 bg-neutral-900/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-neutral-700 text-white flex flex-col justify-center"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Zero Hidden Surcharges
                </div>
                <div className="text-xs text-neutral-300 truncate font-normal">
                  Clear fuel, toll tax, and driver night stay policy agreed upfront in writing.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* The PAK E DRIVE Quality Guarantee */}
      <section 
        className="bg-neutral-50 py-14 sm:py-20 border-y border-neutral-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950">
              The PAK E DRIVE Quality Guarantee
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm mt-1">
              Every detail is engineered to protect your comfort, safety, and business reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-2xs">
              <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
                Climate Standard
              </div>
              <h3 className="text-sm font-bold uppercase text-neutral-900 mb-2">
                Chilled AC Guaranteed
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Dual evaporator cooling tested to withstand 45°C+ Sindh and Punjab highway heatwave conditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-2xs">
              <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
                Fleet Inspection
              </div>
              <h3 className="text-sm font-bold uppercase text-neutral-900 mb-2">
                Zero Breakdown Promise
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Mechanically verified engine, suspension, fresh tires, and emergency spare before every long dispatch.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-2xs">
              <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
                Arrival Protocol
              </div>
              <h3 className="text-sm font-bold uppercase text-neutral-900 mb-2">
                Punctual Chauffeurs
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Our drivers arrive 15-30 minutes prior to scheduled pickup time with clean suits and route knowledge.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-2xs">
              <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
                Honest Policies
              </div>
              <h3 className="text-sm font-bold uppercase text-neutral-900 mb-2">
                Exact Agreed Pricing
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Transparent toll and fuel calculations with no awkward bargaining or surprise chauffeur claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Hub Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div 
          className="bg-neutral-900 text-white rounded-2xl p-8 sm:p-12 border border-neutral-800 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Centrally Positioned in Karachi, Connected to All Pakistan
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl font-normal">
                Our main depot in Korangi and executive client office in DHA enable rapid dispatch to Jinnah International Airport (20 mins), Clifton, Gulshan, Malir Cantt, and the M-9 Motorway within minutes.
              </p>

              <div className="pt-2 text-xs text-neutral-300 space-y-1">
                <div><strong className="text-white">Depot &amp; Office:</strong> Main Korangi Road &amp; DHA Phase 6, Karachi, Sindh, Pakistan</div>
                <div><strong className="text-white">Direct Hotlines:</strong> {WHATSAPP_DISPLAY} / {PHONE_DISPATCH}</div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenBooking}
                className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs uppercase py-3.5 px-6 rounded-lg tracking-wide transition-colors cursor-pointer"
              >
                <span>Book With Us</span>
              </button>

              <button
                onClick={() => openWhatsApp('Assalam-o-Alaikum, I want to inquire about PAK E DRIVE vehicle rentals.')}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase py-3.5 px-6 rounded-lg tracking-wide transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp Inquiries</span>
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
