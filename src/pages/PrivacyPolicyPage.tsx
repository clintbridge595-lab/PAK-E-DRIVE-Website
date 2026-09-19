import React from 'react';
import { Shield, MapPin, Phone, Mail, Lock, CheckCircle2, ArrowLeft, Trash2, HelpCircle } from 'lucide-react';
import { openWhatsApp, WHATSAPP_DISPLAY, PHONE_DISPATCH } from '../utils/whatsapp';

interface PrivacyPolicyPageProps {
  onBackToHome?: () => void;
  onOpenBooking?: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  onBackToHome,
  onOpenBooking,
}) => {
  return (
    <div id="privacy-policy-page" className="animate-fadeIn bg-neutral-950 text-neutral-100 min-h-screen">
      {/* Hero Header Banner */}
      <div 
        className="bg-neutral-900 py-14 sm:py-18 border-b border-neutral-800 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider font-sans">
            <Shield className="w-3.5 h-3.5" />
            <span>Google Play &amp; Global Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Privacy Policy
          </h1>
          <p className="text-neutral-400 text-xs sm:text-sm font-sans max-w-2xl mx-auto">
            Effective Date &amp; Last Updated: September 2026 • PAK E DRIVE (Rent A Car &amp; Chauffeur Mobility Pakistan)
          </p>

          {onBackToHome && (
            <div className="pt-2 font-sans">
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors uppercase tracking-wider cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Privacy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 text-sm leading-relaxed text-neutral-300 font-sans">
        
        {/* 1. Introduction & Scope */}
        <section className="bg-neutral-900/90 rounded-2xl border border-neutral-800 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-3">
            <span className="w-2 h-6 bg-amber-400 rounded-full inline-block"></span>
            1. Introduction &amp; Corporate Commitment
          </h2>
          <p>
            Welcome to <strong className="text-white font-bold">PAK E DRIVE</strong> ("we", "our", or "us"). We operate as a premier chauffeur-driven car rental, executive protocol, and intercity mobility service across Pakistan (including Karachi, Hyderabad, Lahore, Rawalpindi, Islamabad, and nationwide highway corridors).
          </p>
          <p>
            This Privacy Policy governs your access to and use of the PAK E DRIVE website, mobile applications, and booking coordination channels. We are fully committed to safeguarding customer personal information and complying with global privacy benchmarks, including Google Play Store Developer Policies.
          </p>
        </section>

        {/* 2. User Data Collection */}
        <section className="bg-neutral-900/90 rounded-2xl border border-neutral-800 p-6 sm:p-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-3">
            <span className="w-2 h-6 bg-amber-400 rounded-full inline-block"></span>
            2. User Data Collection
          </h2>
          <p>
            To deliver smooth vehicle dispatch, precise highway navigation, and verified customer reservations, we collect the following categories of data:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Location Data Box */}
            <div className="bg-neutral-950 p-5 rounded-xl border border-neutral-800 space-y-2.5">
              <div className="flex items-center gap-2.5 text-amber-400 font-bold text-base">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Location Data (GPS &amp; Addresses)</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                When you initiate a booking inquiry, request airport pickup, or track an intercity chauffeur, we collect precise and approximate geographic coordinates and address locations. This enables:
              </p>
              <ul className="text-xs text-neutral-300 space-y-1.5 list-disc list-inside">
                <li>Accurate highway distance calculation (e.g., Karachi to Hyderabad M-9).</li>
                <li>Dispatching the closest verified chauffeur to your doorstep.</li>
                <li>Live ETA updates and passenger security during intercity night transit.</li>
              </ul>
            </div>

            {/* Contact Details Box */}
            <div className="bg-neutral-950 p-5 rounded-xl border border-neutral-800 space-y-2.5">
              <div className="flex items-center gap-2.5 text-amber-400 font-bold text-base">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Contact &amp; Personal Details</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We collect personal identifiers provided directly by you during reservation:
              </p>
              <ul className="text-xs text-neutral-300 space-y-1.5 list-disc list-inside">
                <li><strong className="text-white">Full Name &amp; Title:</strong> For formal chauffeur greeting and rental agreement.</li>
                <li><strong className="text-white">Mobile &amp; WhatsApp:</strong> For instant booking confirmations, driver dispatch details, and emergency contact.</li>
                <li><strong className="text-white">Email Address:</strong> For digital tax invoices, quotes, and support inquiries via <code className="text-amber-400 font-mono">support@pakedrive.com</code>.</li>
                <li><strong className="text-white">Identity Verification (CNIC/Passport):</strong> Solely required for security clearance, high-value bulletproof fleet protocol, or self-drive contracts.</li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-950 p-5 rounded-xl border border-neutral-800 space-y-2 text-xs text-neutral-400">
            <h4 className="text-white font-bold text-sm">Device &amp; Usage Information</h4>
            <p>
              We automatically log technical data such as device model, browser version, operating system, and anonymous diagnostic logs to identify technical defects, prevent fraudulent reservations, and optimize mobile responsiveness.
            </p>
          </div>
        </section>

        {/* 3. Data Usage */}
        <section className="bg-neutral-900/90 rounded-2xl border border-neutral-800 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-3">
            <span className="w-2 h-6 bg-amber-400 rounded-full inline-block"></span>
            3. How We Use Your Data
          </h2>
          <p>
            PAK E DRIVE strictly processes your data for legitimate, transparent mobility purposes:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
            <div className="flex items-start gap-2.5 bg-neutral-950 p-3 rounded-lg border border-neutral-800">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Chauffeur Assignment &amp; Dispatch:</strong> Coordinating the exact vehicle arrival time and vehicle handover.</span>
            </div>
            <div className="flex items-start gap-2.5 bg-neutral-950 p-3 rounded-lg border border-neutral-800">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Customer Support &amp; Updates:</strong> Sending real-time dispatch alerts and 24/7 WhatsApp emergency assistance.</span>
            </div>
            <div className="flex items-start gap-2.5 bg-neutral-950 p-3 rounded-lg border border-neutral-800">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Security &amp; Fraud Prevention:</strong> Preventing fraudulent vehicle bookings and ensuring passenger travel safety.</span>
            </div>
            <div className="flex items-start gap-2.5 bg-neutral-950 p-3 rounded-lg border border-neutral-800">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Invoicing &amp; Regulatory Compliance:</strong> Providing transparent billing without hidden tolls or unauthorized charges.</span>
            </div>
          </div>
        </section>

        {/* 4. Data Security & Protection */}
        <section className="bg-neutral-900/90 rounded-2xl border border-neutral-800 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-3">
            <Lock className="w-5 h-5 text-amber-400" />
            4. Data Security &amp; Storage Architecture
          </h2>
          <p>
            We implement bank-grade administrative, technical, and physical security measures to shield your data against unauthorized access, loss, or alteration:
          </p>
          <ul className="space-y-2 text-xs text-neutral-300">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span><strong className="text-white">SSL/TLS 256-bit Encryption:</strong> All communications between your device and our reservation servers are encrypted in transit.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span><strong className="text-white">Strict Role-Based Access:</strong> Only authorized fleet control officers have access to client contact records for active dispatches.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span><strong className="text-white">Zero Third-Party Data Selling:</strong> We NEVER sell, rent, monetise, or distribute your personal details to advertising networks or external data brokers.</span>
            </li>
          </ul>
        </section>

        {/* 5. User Rights & Data Deletion */}
        <section className="bg-neutral-900/90 rounded-2xl border border-neutral-800 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-3">
            <Trash2 className="w-5 h-5 text-amber-400" />
            5. User Rights &amp; Data Deletion Policy (Google Play Mandate)
          </h2>
          <p>
            In compliance with Google Play Store standards and data protection principles, you retain full ownership of your personal information. You have the right to:
          </p>
          <ul className="space-y-1.5 text-xs text-neutral-300 list-disc list-inside">
            <li>Request a copy of the personal details and booking history stored under your phone number or email.</li>
            <li>Request immediate correction of erroneous details.</li>
            <li><strong className="text-white">Request permanent deletion of your customer record, past ride records, and contact information.</strong></li>
          </ul>
          <div className="mt-4 p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-white font-bold text-xs uppercase tracking-wider">How to Request Permanent Deletion:</div>
              <p className="text-xs text-neutral-400 mt-0.5">
                Send an email to <a href="mailto:support@pakedrive.com?subject=Data%20Deletion%20Request" className="text-amber-400 underline font-semibold">support@pakedrive.com</a> with the subject line <em>"Data Deletion Request"</em>. Include your booking phone number. Your data will be expunged within 48 to 72 business hours.
              </p>
            </div>
            <a
              href="mailto:support@pakedrive.com?subject=Data%20Deletion%20Request"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>Email Support</span>
            </a>
          </div>
        </section>

        {/* 6. Children's Privacy */}
        <section className="bg-neutral-900/90 rounded-2xl border border-neutral-800 p-6 sm:p-8 space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-3">
            <span className="w-2 h-6 bg-amber-400 rounded-full inline-block"></span>
            6. Children's Privacy (COPPA)
          </h2>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Our vehicle rental, chauffeur, and executive dispatch services are directed exclusively to adults aged 18 and older. We do not knowingly solicit or collect personal identifiable data from minors under 18 years of age. If we become aware that a child has provided us with personal data, we promptly delete such records.
          </p>
        </section>

        {/* 7. Contact Information */}
        <section className="bg-neutral-900/90 rounded-2xl border border-neutral-800 p-6 sm:p-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-3">
            <Mail className="w-5 h-5 text-amber-400" />
            7. Official Privacy &amp; Contact Desk
          </h2>
          <p>
            If you have questions, feedback, or legal inquiries concerning this Privacy Policy or our operational data handling, our executive compliance team is accessible via:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-1">
              <div className="text-neutral-400 uppercase font-bold text-[10px]">Official Support Email</div>
              <a href="mailto:support@pakedrive.com" className="text-amber-400 font-bold hover:underline block text-sm">
                support@pakedrive.com
              </a>
              <div className="text-neutral-500 text-[11px]">Primary inquiry &amp; compliance desk</div>
            </div>

            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-1">
              <div className="text-neutral-400 uppercase font-bold text-[10px]">Booking &amp; WhatsApp Desk</div>
              <button 
                onClick={() => openWhatsApp('Assalam-o-Alaikum PAK E DRIVE, I have a query regarding your Privacy Policy or booking details.')}
                className="text-white font-bold hover:text-amber-400 text-sm cursor-pointer"
              >
                {WHATSAPP_DISPLAY}
              </button>
              <div className="text-neutral-500 text-[11px]">24/7 Verified Chauffeur Hotline</div>
            </div>

            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-1">
              <div className="text-neutral-400 uppercase font-bold text-[10px]">Fleet Dispatch Hub</div>
              <a href={`tel:+92${PHONE_DISPATCH.replace(/[^0-9]/g, '')}`} className="text-white font-bold hover:text-amber-400 text-sm">
                {PHONE_DISPATCH}
              </a>
              <div className="text-neutral-500 text-[11px]">Main Korangi Rd &amp; DHA Phase 6, Karachi</div>
            </div>
          </div>
        </section>

        {/* Action Button at bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-800">
          <div className="text-xs text-neutral-500">
            &copy; 2026 PAK E DRIVE — Rent A Car. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            {onBackToHome && (
              <button
                onClick={onBackToHome}
                className="px-5 py-2.5 rounded-lg border border-neutral-700 text-xs font-bold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors uppercase tracking-wider cursor-pointer"
              >
                Back to Home
              </button>
            )}
            {onOpenBooking && (
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-500 text-neutral-950 text-xs font-black uppercase tracking-wider transition-colors cursor-pointer shadow-lg"
              >
                Book a Vehicle
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
