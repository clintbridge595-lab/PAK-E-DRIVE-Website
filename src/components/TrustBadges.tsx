import React from 'react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      metric: '100% Inspected',
      title: 'Fleet Condition',
      desc: 'Serviced before every dispatch',
    },
    {
      metric: '5.0 ★ Google',
      title: 'Customer Rating',
      desc: 'Verified traveller reviews',
    },
    {
      metric: 'Across Pakistan',
      title: 'Service Coverage',
      desc: 'Karachi to Northern Areas',
    },
    {
      metric: '< 5 Minutes',
      title: 'Booking Response',
      desc: 'Direct WhatsApp assistance',
    },
  ];

  return (
    <div 
      id="trust-badges-section" 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-b border-neutral-200/80 mb-4 sm:mb-6"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 w-full">
        {badges.map((b, idx) => (
          <div 
            key={idx} 
            className={`pt-3 sm:pt-0 ${idx > 0 ? 'sm:pl-6' : ''} text-left flex flex-col justify-center`}
          >
            <div 
              className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight leading-tight"
            >
              {b.metric}
            </div>
            <div className="text-xs font-bold text-neutral-800 mt-1 uppercase tracking-wide">
              {b.title}
            </div>
            <div className="text-xs text-neutral-500 mt-0.5 font-medium">
              {b.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
