import React from 'react';

export const HowToBook: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Choose Vehicle',
      desc: 'Select from our fleet of sedans, luxury SUVs, Grand Cabins, or wedding cars.',
    },
    {
      num: '02',
      title: 'Share Itinerary',
      desc: 'Pick your travel date, pickup location in Karachi, and destination city.',
    },
    {
      num: '03',
      title: 'Instant Confirmation',
      desc: 'Receive transparent rate confirmation within 5 minutes directly on WhatsApp.',
    },
    {
      num: '04',
      title: 'Chauffeur Arrives',
      desc: 'Your sanitized, air-conditioned vehicle arrives promptly with a polite, licensed driver.',
    },
  ];

  return (
    <section 
      id="how-to-book-section" 
      style={{
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic',
      }}
      className="bg-white text-[#222222] py-12 sm:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Subtitle tag span removed as requested in Selector 20 */}
          <h2 
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '31px',
            }}
            className="font-extrabold tracking-tight text-[#111111] mb-2"
          >
            How to Book Your Car in 4 Simple Steps
          </h2>
          <p 
            style={{
              fontSize: '12px',
            }}
            className="text-neutral-600 font-normal"
          >
            No complicated paperwork or hidden security deposits. Guaranteed vehicle dispatch to your doorstep.
          </p>
        </div>

        {/* 4 Step Cards: Numbers 1 2 3 4 removed 100% as requested */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              id={`booking-step-${s.num}`}
              className="bg-white border border-[#E5E5E5] p-6 rounded-xl relative shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-start"
            >
              <h3 className="text-base font-bold tracking-tight text-[#111111] mb-2">
                {s.title}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
