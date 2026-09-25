import React from 'react';
import { TESTIMONIALS } from '../data/fleetData';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section 
      id="testimonials-section" 
      style={{
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic',
      }}
      className="bg-neutral-50/50 py-12 sm:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          {/* Subtitle tag span removed as requested in Selector 26 */}
          <h2 
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '30px',
              color: '#4fa9a3',
            }}
            className="font-extrabold tracking-tight mb-2"
          >
            Trusted by Karachi Travellers &amp; Families
          </h2>
          <p 
            style={{
              fontSize: '13px',
            }}
            className="text-neutral-600 font-normal"
          >
            Real reviews from business leaders, wedding clients, and intercity travellers.
          </p>
        </div>

        {/* 4 Review Cards: White card with thin light-grey border #E5E5E5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              id={`review-card-${item.id}`}
              className="bg-white rounded-xl p-6 border border-[#E5E5E5] shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars styled with #441414 as requested in Selector 30 */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#441414] text-[#441414]" />
                  ))}
                </div>

                {/* Quote (Selectors 31-34) */}
                <p 
                  style={{
                    fontFamily: 'Times New Roman, serif',
                    fontSize: '13px',
                  }}
                  className="text-[#222222] leading-relaxed"
                >
                  "{item.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 mt-4 border-t border-[#E5E5E5]">
                <div className="text-xs font-bold uppercase text-[#111111] tracking-wider">
                  {item.name}
                </div>
                <div className="text-[11px] text-[#0D919C] mt-0.5 font-medium">
                  {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
