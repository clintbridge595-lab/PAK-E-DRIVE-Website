import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { WHATSAPP_DISPLAY, PHONE_DISPATCH } from '../utils/whatsapp';
import { SectionHeader } from '../components/SectionHeader';

interface PrivacyPolicyPageProps {
  onBackToHome?: () => void;
  onOpenBooking?: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  onBackToHome,
}) => {
  return (
    <div id="privacy-policy-page" className="animate-fadeIn bg-white text-[#222222] min-h-screen">
      {/* Reusable Section Header */}
      <SectionHeader 
        title="Privacy Policy" 
        currentPageName="Privacy Policy" 
        onBackToHome={onBackToHome}
      />

      {/* Main Privacy Content: White card with #E5E5E5 border */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8 text-xs sm:text-sm leading-relaxed text-neutral-600">
        
        {/* 1. Introduction & Scope */}
        <section className="bg-white rounded-xl border border-[#E5E5E5] p-6 sm:p-8 space-y-3 shadow-2xs">
          <h2 className="text-lg sm:text-xl font-bold text-[#111111] flex items-center gap-2.5">
            <span className="w-2 h-5 bg-[#0D919C] rounded-full inline-block"></span>
            1. Introduction &amp; Commitment
          </h2>
          <p>
            Welcome to <strong className="text-[#111111] font-bold">PAK E DRIVE</strong>. We operate as a premier chauffeur-driven car rental and intercity mobility service across Pakistan (Karachi, Hyderabad, Sukkur, Multan, Lahore, and Islamabad).
          </p>
          <p>
            We are fully committed to protecting your personal information and respecting your privacy across our website, mobile interface, and direct reservation hotlines.
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section className="bg-white rounded-xl border border-[#E5E5E5] p-6 sm:p-8 space-y-3 shadow-2xs">
          <h2 className="text-lg sm:text-xl font-bold text-[#111111] flex items-center gap-2.5">
            <span className="w-2 h-5 bg-[#0D919C] rounded-full inline-block"></span>
            2. Information We Collect
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
            <li><strong>Contact details:</strong> Name, phone number, and WhatsApp handle for trip confirmation.</li>
            <li><strong>Trip details:</strong> Pickup address, destination city, travel date, and vehicle choice.</li>
            <li><strong>Identity verification:</strong> Standard booking verification for chauffeur allocation.</li>
          </ul>
        </section>

        {/* 3. How We Use Information */}
        <section className="bg-white rounded-xl border border-[#E5E5E5] p-6 sm:p-8 space-y-3 shadow-2xs">
          <h2 className="text-lg sm:text-xl font-bold text-[#111111] flex items-center gap-2.5">
            <span className="w-2 h-5 bg-[#0D919C] rounded-full inline-block"></span>
            3. How We Use Your Information
          </h2>
          <p>
            Your information is used solely to dispatch vehicles, coordinate drivers, calculate transparent fare estimates, and provide 24/7 customer support. We never sell or lease customer information to third parties.
          </p>
        </section>

        {/* 4. Contact Information */}
        <section className="bg-white rounded-xl border border-[#E5E5E5] p-6 sm:p-8 space-y-3 shadow-2xs">
          <h2 className="text-lg sm:text-xl font-bold text-[#111111] flex items-center gap-2.5">
            <span className="w-2 h-5 bg-[#0D919C] rounded-full inline-block"></span>
            4. Contact Our Privacy Desk
          </h2>
          <p>
            If you have questions about our privacy policy, please contact our dispatch coordinators at:
          </p>
          <div className="pt-1 text-xs text-[#222222] font-semibold space-y-1">
            <div>Phone: {WHATSAPP_DISPLAY} / {PHONE_DISPATCH}</div>
            <div>Address: Main Korangi Road &amp; DHA Phase 6, Karachi, Sindh, Pakistan</div>
          </div>
        </section>

      </div>
    </div>
  );
};
