import React from 'react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      metric: '100% Inspected',
      title: 'Fleet Condition',
      desc: 'Sanitized & inspected before dispatch',
      metricColor: '#555151',
      titleColor: '#40a091',
    },
    {
      metric: '5.0 ★ Google',
      title: 'Customer Rating',
      desc: 'Verified traveller reviews in Pakistan',
      metricColor: '#424040',
      titleColor: '#10c8c4',
    },
    {
      metric: 'Across Pakistan',
      title: 'Service Coverage',
      desc: 'Karachi to twin cities & north',
      metricColor: '#413c3c',
      titleColor: '#49d1c3',
    },
    {
      metric: '< 5 Minutes',
      title: 'Booking Response',
      desc: 'Direct WhatsApp booking desk',
      metricColor: '#3e3c3c',
      titleColor: '#10c1c8',
    },
  ];

  return (
    <div 
      id="trust-badges-section" 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 mb-4 sm:mb-6 bg-white"
    >
      <div 
        style={{
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          fontWeight: 'bold',
        }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full"
      >
        {badges.map((b, idx) => (
          <div 
            key={idx} 
            className="pt-2 sm:pt-0 text-left flex flex-col justify-center"
          >
            <div 
              style={{ color: b.metricColor }}
              className="text-xl sm:text-2xl font-black tracking-tight leading-tight"
            >
              {b.metric}
            </div>
            <div 
              style={{ color: b.titleColor }}
              className="text-xs font-bold mt-1 uppercase tracking-wide"
            >
              {b.title}
            </div>
            <div className="text-xs text-neutral-500 mt-0.5 font-normal">
              {b.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
