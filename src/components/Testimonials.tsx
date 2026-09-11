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
      className="bg-white py-12 sm:py-16 lg:py-20 border-t border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-950 mb-3">
            Trusted by Karachi Travellers &amp; Executives
          </h2>
        </div>

        {/* 4 Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              id={`review-card-${item.id}`}
              className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 shadow-2xs flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs text-neutral-700 italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 mt-4 border-t border-neutral-200">
                <div className="text-xs font-black uppercase text-neutral-900 tracking-wider">
                  {item.name}
                </div>
                <div className="text-[10px] text-neutral-500 mt-0.5 font-medium">
                  {item.location}
                </div>
                <div className="text-[9px] font-sans text-amber-600 font-bold uppercase mt-1 truncate">
                  {item.vehicle}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
