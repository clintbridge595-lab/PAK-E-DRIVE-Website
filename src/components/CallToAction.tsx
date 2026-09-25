import React from 'react';
import { openWhatsApp, WHATSAPP_DISPLAY } from '../utils/whatsapp';
import { Calendar } from 'lucide-react';

interface CallToActionProps {
  onOpenBooking: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenBooking }) => {
  return (
    <section 
      id="cta-banner-section" 
      style={{
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic',
      }}
      className="bg-[#0D919C] text-white py-12 sm:py-16 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-3xl">
          {/* Subtitle tag span removed as requested in Selector 36 */}
          <h2 
            style={{
              fontFamily: 'Georgia, serif',
            }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight"
          >
            Rent A Car with a Professional Chauffeur Today
          </h2>
          <p 
            style={{
              fontFamily: 'Times New Roman, serif',
              fontSize: '13px',
            }}
            className="text-teal-50 mt-3 leading-relaxed max-w-2xl font-normal"
          >
            Serving Karachi, Hyderabad, Sukkur, Multan, Lahore, and Islamabad. Instant quotes and verified vehicle dispatch directly on WhatsApp.
          </p>

          {/* One clear primary action per section */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-7">
            <button
              id="cta-whatsapp-btn"
              onClick={() => openWhatsApp('Assalam-o-Alaikum, I am ready to book a chauffeur rental vehicle with PAK E DRIVE.')}
              style={{ backgroundColor: '#146a34' }}
              className="inline-flex items-center justify-center gap-2 hover:bg-[#10562a] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-[7px] shadow-sm tracking-wide transition-colors cursor-pointer w-full sm:w-auto"
            >
              {/* WhatsApp icon removed as requested in Selector 40 */}
              <span>Book via WhatsApp ({WHATSAPP_DISPLAY})</span>
            </button>

            <button
              id="cta-booking-calc-btn"
              onClick={onOpenBooking}
              style={{ backgroundColor: '#3ca19a' }}
              className="inline-flex items-center justify-center gap-2 hover:bg-[#328e88] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-[7px] shadow-xs tracking-wide transition-colors cursor-pointer w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book a Rental</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
