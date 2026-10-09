import React from 'react';
import newLogoIcon from '../assets/images/pakedrive_round_logo.png';

interface LogoProps {
  lightMode?: boolean;
  className?: string;
  onClick?: () => void;
  imageSrc?: string;
  eColor?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  lightMode = false, 
  className = '', 
  onClick,
  imageSrc,
}) => {
  const emblemSrc = imageSrc || newLogoIcon;

  return (
    <div 
      id="brand-logo"
      onClick={onClick}
      className={`flex items-center gap-2.5 sm:gap-3.5 select-none cursor-pointer group ${className}`}
    >
      {/* New Midnight Navy Squircle Icon Mark with White P Road Monogram */}
      <div className="relative flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-[11px] sm:rounded-[13px] overflow-hidden shrink-0 shadow-xs border border-[#101b2b]/15 bg-[#101b2b] group-hover:scale-[1.02] transition-all duration-300 aspect-square">
        <img 
          src={emblemSrc} 
          alt="PAK E DRIVE - Car Rental Logo" 
          className="w-full h-full object-contain block transform group-hover:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Brand Typography matching official 2K design */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center tracking-[-0.01em] leading-none font-black text-lg sm:text-[22px] md:text-[24px]">
          <span className={lightMode ? 'text-white' : 'text-[#101b2b]'}>
            PAK E DRIVE
          </span>
        </div>
        <div className="flex items-center mt-1">
          <span className={`text-[9px] sm:text-[10px] md:text-[11px] uppercase font-bold tracking-[0.28em] sm:tracking-[0.32em] leading-none ${lightMode ? 'text-slate-300' : 'text-[#101b2b]'}`}>
            CAR RENTAL
          </span>
        </div>
      </div>
    </div>
  );
};
