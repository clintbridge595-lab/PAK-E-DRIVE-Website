import React, { useState, useEffect } from 'react';
import { HERO_SLIDES, FLEET_VEHICLES } from '../data/fleetData';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { Vehicle } from '../types';

interface HeroCarouselProps {
  onSelectVehicle?: (vehicle: Vehicle) => void;
  onOpenBooking?: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onSelectVehicle, onOpenBooking }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const currentSlide = HERO_SLIDES[currentIndex];
  const matchedVehicle = FLEET_VEHICLES.find(v => v.id === currentSlide.vehicleId);

  const handleReserveClick = () => {
    if (matchedVehicle && onSelectVehicle) {
      onSelectVehicle(matchedVehicle);
    } else if (onOpenBooking) {
      onOpenBooking();
    } else {
      openWhatsApp(`Assalam-o-Alaikum, I want to reserve ${currentSlide.title} (${currentSlide.badge}) with chauffeur.`);
    }
  };

  return (
    <div id="hero-carousel-section" className="relative w-full bg-[#0c0d0e] text-white overflow-hidden min-h-[540px] sm:min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* Background Car Presentation - full bleed with lighting overlay matching video & screenshot */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Car Image aligned to the right half / showroom view */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-full lg:w-3/4 bg-cover bg-right lg:bg-center transition-all duration-700 ease-out"
          style={{
            backgroundImage: `url('${currentSlide.carImage}')`,
          }}
        />
        {/* Dark Showroom Ceiling Light & Studio Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-transparent to-black/60 opacity-80" />
        {/* Left-to-right gradient ensuring high text contrast on the left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d0e] via-[#0c0d0e]/90 via-40% to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 z-10 w-full">
        <div className="max-w-2xl lg:max-w-xl space-y-4 sm:space-y-5">
          
          {/* Main Headline in elegant luxury Georgia serif */}
          <h1 
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '41px',
            }}
            className="font-bold text-white tracking-tight leading-[1.12] sm:leading-[1.15]"
          >
            {currentSlide.title}
          </h1>

          {/* Featured Gold Badge matching screenshot */}
          <div className="pt-1">
            <span 
              style={{
                color: '#ccbf9e',
                lineHeight: '19px',
                fontSize: '11px',
              }}
              className="inline-block font-bold tracking-wider uppercase font-mono"
            >
              {currentSlide.badge}
            </span>
          </div>

          {/* Description Paragraph */}
          <p 
            className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal max-w-xl"
          >
            {currentSlide.subtext}
          </p>

          {/* Action Button matching screenshot */}
          <div className="pt-3 flex items-center gap-4">
            <button
              id="hero-reserve-vehicle-btn"
              onClick={handleReserveClick}
              className="inline-flex items-center justify-center bg-[#c89b3c] hover:bg-[#d8a83d] active:bg-[#b58b32] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-md shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>RESERVE A VEHICLE</span>
            </button>
          </div>

        </div>
      </div>

      {/* Round Arrow Navigation Buttons on Left and Right edges */}
      <button
        id="hero-prev-btn"
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white border border-neutral-700/60 flex items-center justify-center transition-all hover:scale-110 z-20 cursor-pointer shadow-xl backdrop-blur-xs"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        id="hero-next-btn"
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white border border-neutral-700/60 flex items-center justify-center transition-all hover:scale-110 z-20 cursor-pointer shadow-xl backdrop-blur-xs"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator at the bottom center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex === idx 
                ? 'w-7 h-2 bg-[#d4af37]' 
                : 'w-2 h-2 bg-neutral-600 hover:bg-neutral-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
