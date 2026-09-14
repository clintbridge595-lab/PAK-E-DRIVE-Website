import React from 'react';
import cleanLogoImg from '../assets/images/pakedrive_logo_clean.png';

interface LogoProps {
  lightMode?: boolean;
  className?: string;
  onClick?: () => void;
  imageSrc?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  lightMode = false, 
  className = '', 
  onClick,
  imageSrc,
}) => {
  const emblemSrc = imageSrc || cleanLogoImg;

  return (
    <div 
      id="brand-logo"
      onClick={onClick}
      className={`flex items-center gap-2.5 sm:gap-3 select-none cursor-pointer group ${className}`}
    >
      {/* 3D Metallic Emblem Image - Clean Background */}
      <div className="relative flex items-center justify-center h-11 w-14 sm:h-12 sm:w-16 overflow-hidden">
        <img 
          src={emblemSrc} 
          alt="PAK E DRIVE Logo" 
          className="w-full h-full object-contain filter drop-shadow-sm transform group-hover:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Brand Typography with Gold & Silver Gradient */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-tight leading-none font-black italic text-xl sm:text-2xl">
          <span className={lightMode ? 'text-white' : 'text-neutral-950'}>PAK</span>
          <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent mx-1 font-black">
            E
          </span>
          <span className={lightMode ? 'text-white' : 'text-neutral-950'}>DRIVE</span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <div className="h-[1px] w-3 bg-gradient-to-r from-transparent to-amber-400"></div>
          <span className={`text-[9px] sm:text-[10px] uppercase font-extrabold tracking-[0.28em] ${lightMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            RENT A CAR
          </span>
          <div className="h-[1px] w-3 bg-gradient-to-l from-transparent to-amber-400"></div>
        </div>
      </div>
    </div>
  );
};

