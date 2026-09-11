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
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 w-full">
        {badges.map((b, idx) => {
          let metricStyle: React.CSSProperties = {};
          let containerStyle: React.CSSProperties = {};

          if (idx === 0) {
            metricStyle = { fontSize: '29px', color: '#433d3d' };
          } else if (idx === 1) {
            metricStyle = { fontSize: '29px', color: '#3f3b3b' };
          } else if (idx === 2) {
            metricStyle = { fontSize: '28px', color: '#282727' };
          } else if (idx === 3) {
            containerStyle = { color: '#3b3434' };
            metricStyle = { fontSize: '29px', color: '#443f3f' };
          }

          return (
            <div 
              key={idx} 
              style={containerStyle}
              className={`pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-6' : ''} text-left flex flex-col justify-center`}
            >
              <div 
                style={metricStyle}
                className="font-extrabold tracking-tight"
              >
                {b.metric}
              </div>
              <div className="text-xs sm:text-sm font-bold text-neutral-800 mt-1 uppercase tracking-wide">
                {b.title}
              </div>
              <div className="text-xs text-neutral-500 mt-0.5 font-medium">
                {b.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
