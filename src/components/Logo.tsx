import React from 'react';
import roundLogoImg from '../assets/images/pakedrive_round_logo.png';

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
  eColor,
}) => {
  const emblemSrc = imageSrc || roundLogoImg;
  const letterEColor = eColor || (lightMode ? '#c1cf5c' : '#9a9c48');

  return (
    <div 
      id="brand-logo"
      onClick={onClick}
      className={`flex items-center gap-2.5 sm:gap-3 select-none cursor-pointer group ${className}`}
    >
      {/* Crisp Circular Emblem Badge - All yellow lines/rings removed 100% */}
      <div className="relative flex items-center justify-center h-11 w-11 sm:h-12 sm:w-12 rounded-full overflow-hidden shrink-0 shadow-xs border border-neutral-300 bg-neutral-950 group-hover:border-neutral-500 transition-all duration-300 aspect-square">
        <img 
          src={emblemSrc} 
          alt="PAK E DRIVE Logo" 
          className="w-full h-full object-cover rounded-full block transform group-hover:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-tight leading-none font-black italic text-xl sm:text-2xl">
          <span className={lightMode ? 'text-white' : 'text-neutral-950'}>PAK</span>
          <span 
            style={{ color: letterEColor }}
            className="mx-1 font-black"
          >
            E
          </span>
          <span className={lightMode ? 'text-white' : 'text-neutral-950'}>DRIVE</span>
        </div>
        <div className="flex items-center mt-0.5">
          <span className={`text-[9px] sm:text-[10px] uppercase font-extrabold tracking-[0.28em] ${lightMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            RENT A CAR
          </span>
        </div>
      </div>
    </div>
  );
};
