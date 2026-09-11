import React from 'react';

export const HowToBook: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'CHOOSE VEHICLE',
      desc: 'Select from our fleet of sedans, luxury SUVs, Grand Cabins, or decorated wedding cars.',
    },
    {
      num: '02',
      title: 'SHARE ITINERARY',
      desc: 'Pick your date, pickup area in Karachi (DHA, Airport, Korangi), and destination.',
    },
    {
      num: '03',
      title: 'INSTANT QUOTE',
      desc: 'Receive transparent rate confirmation within 5 minutes via WhatsApp or direct phone.',
    },
    {
      num: '04',
      title: 'CHAUFFEUR ARRIVES',
      desc: 'Your sanitized, AC-equipped vehicle arrives promptly with a polite, licensed driver.',
    },
  ];

  return (
    <section 
      id="how-to-book-section" 
      style={{
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic',
      }}
      className="bg-[#121316] text-white py-12 sm:py-16 lg:py-20 border-t border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-3">
            How to Book Your Car in 4 Simple Steps
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm font-normal">
            No needless paperwork. Guaranteed vehicle dispatch directly to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((s, idx) => (
            <div
              key={idx}
              id={`booking-step-${s.num}`}
              className="bg-neutral-900/80 border border-neutral-800 p-6 rounded-xl relative group hover:border-amber-400/50 transition-colors"
            >
              <h3 className="text-sm font-black tracking-wider uppercase text-white mb-2">
                {s.title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
