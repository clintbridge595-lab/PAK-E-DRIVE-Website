import React from 'react';
import { openWhatsApp, WHATSAPP_DISPLAY } from '../utils/whatsapp';

interface CallToActionProps {
  onOpenBooking: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenBooking }) => {
  return (
    <section 
      id="cta-banner-section" 
      className="bg-[#121316] text-white py-12 sm:py-16 lg:py-20 border-t border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
            Rent A Car with a Professional Chauffeur Today
          </h2>
          <p 
            className="text-neutral-300 mt-3 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal"
          >
            Serving Karachi, Hyderabad, Thatta, Lahore, Islamabad, and all destinations in Pakistan. Speak with our fleet manager on WhatsApp or call our hotlines directly.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-8">
            <button
              id="cta-whatsapp-btn"
              onClick={() => openWhatsApp('Assalam-o-Alaikum, I am ready to book a chauffeur rental vehicle with PAK E DRIVE.')}
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase px-7 py-3.5 rounded-lg shadow-md tracking-wide transition-colors cursor-pointer w-full sm:w-auto"
            >
              <span>Chat on WhatsApp ({WHATSAPP_DISPLAY})</span>
            </button>

            <button
              id="cta-booking-calc-btn"
              onClick={onOpenBooking}
              className="flex items-center justify-center bg-white hover:bg-neutral-100 text-neutral-900 font-bold text-xs uppercase px-6 py-3.5 rounded-lg shadow-xs tracking-wide transition-colors cursor-pointer w-full sm:w-auto"
            >
              <span>Open Booking Calculator</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
