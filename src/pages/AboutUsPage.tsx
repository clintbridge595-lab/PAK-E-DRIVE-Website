import React from 'react';
import { openWhatsApp, WHATSAPP_DISPLAY, PHONE_DISPATCH } from '../utils/whatsapp';
import { ShieldCheck, Award, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';

interface AboutUsPageProps {
  onOpenBooking: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onOpenBooking }) => {
  return (
    <div id="about-us-page-wrapper" className="animate-fadeIn bg-white text-[#222222]">
      {/* Reusable Section Header */}
      <SectionHeader title="About Us" currentPageName="About Us" />

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D919C] block mb-1">
                Setting the Standard
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] leading-tight">
                Punctuality, Hygiene &amp; Professional Service
              </h2>
            </div>

            <p className="text-neutral-600 leading-relaxed font-normal text-xs sm:text-sm">
              PAK E DRIVE was established in Karachi to provide reliable, professional chauffeur mobility across Pakistan. We believe in treating every customer journey as our own family's journey.
            </p>

            <p className="text-neutral-600 leading-relaxed font-normal text-xs sm:text-sm">
              Our fleet is inspected before every dispatch. Every car features sanitized interiors, strong AC chillers for Pakistani summers, and courteous, licensed drivers.
            </p>

            {/* Badges Grid in White Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-[#E5E5E5] shadow-2xs">
                <div className="text-2xl font-black text-[#111111]">100%</div>
                <div className="text-xs font-bold text-[#0D919C] uppercase mt-0.5">
                  Verified Chauffeurs
                </div>
                <div className="text-xs text-neutral-500 mt-0.5 font-normal">
                  CNIC &amp; background verified drivers
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E5E5E5] shadow-2xs">
                <div className="text-2xl font-black text-[#111111]">
                  5.0 ★ Google
                </div>
                <div className="text-xs font-bold text-[#0D919C] uppercase mt-0.5">
                  Customer Satisfaction
                </div>
                <div className="text-xs text-neutral-500 mt-0.5 font-normal">
                  Trusted by families &amp; corporations
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center bg-[#111111] hover:bg-[#252525] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-[7px] transition-colors cursor-pointer shadow-xs"
              >
                Book a Rental with Us
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xs border border-[#E5E5E5] bg-neutral-100">
              <img
                src="/cars/land_cruiser_v8.jpg"
                alt="Executive Chauffeur Vehicle"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl border border-[#E5E5E5] text-[#222222] shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0D919C]">
                  Transparent Rates Guaranteed
                </div>
                <div className="text-xs text-neutral-600 mt-0.5">
                  Clear fuel, toll tax, and driver terms agreed upfront in writing.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3 Core Commitments: White card with thin light-grey border #E5E5E5 */}
      <section className="bg-neutral-50/60 py-12 sm:py-16 border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D919C] block mb-1">
              Why Choose Us
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
              Our Three Golden Promises
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#E5E5E5] shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-[#0D919C] text-white flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-base font-bold text-[#111111] mb-2">Safe &amp; Licensed Drivers</h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                Every chauffeur holds an active commercial driving license with years of highway and city navigation experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5E5E5] shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-[#0D919C] text-white flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-base font-bold text-[#111111] mb-2">Spotless Showroom Vehicles</h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                Vehicles are washed, vacuumed, and mechanically checked before arriving at your doorstep.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5E5E5] shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-[#0D919C] text-white flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-base font-bold text-[#111111] mb-2">Zero Hidden Surcharges</h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                What we quote on WhatsApp is exactly what you pay. No surprises or unexpected fuel demands.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
