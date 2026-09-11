import React, { useState, useEffect } from 'react';
import { HERO_SLIDES, FLEET_VEHICLES } from '../data/fleetData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Vehicle } from '../types';

interface HeroCarouselProps {
  onSelectVehicle?: (vehicle: Vehicle) => void;
  onOpenBooking?: (vehicleName?: string) => void;
  onExploreFleet?: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  onSelectVehicle,
  onOpenBooking,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  const handleReserveClick = () => {
    if (currentSlide.vehicleId) {
      const found = FLEET_VEHICLES.find((v) => v.id === currentSlide.vehicleId);
      if (found && onSelectVehicle) {
        onSelectVehicle(found);
        return;
      }
    }
    if (onOpenBooking) {
      onOpenBooking(currentSlide.title);
    }
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[#08090b] text-white overflow-hidden min-h-[500px] sm:min-h-[560px] lg:min-h-[640px] flex items-center"
    >
      {/* 1. Full-Bleed Background Car Images with Smooth Crossfade */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10'
              }`}
            >
              {/* High-Resolution Full Car Background Image */}
              <img
                src={slide.carImage}
                alt={slide.title}
                className="w-full h-full object-cover object-center sm:object-[center_right_15%]"
              />

              {/* Studio Lighting & Vignette Gradients for Legibility & Prestige */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-[#08090b]/50 to-[#08090b]/70 sm:bg-gradient-to-r sm:from-[#08090b]/95 sm:via-[#08090b]/65 sm:to-transparent" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#08090b]/80 to-transparent" />
            </div>
          );
        })}
      </div>

      {/* 2. Primary Brand Identity & Clean Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-xl sm:max-w-2xl text-left space-y-3 sm:space-y-4">

          {/* Headline in Georgia serif */}
          <h1 
            style={{
              fontFamily: 'Georgia, serif',
              color: '#f3f4f6',
            }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight leading-[1.18] sm:leading-[1.14] drop-shadow-lg"
          >
            {currentSlide.title}
          </h1>

          {/* Refined Single Description Line */}
          <p className="text-neutral-200 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-lg drop-shadow">
            {currentSlide.subtext}
          </p>

          {/* Classic Yellow Reserve Button */}
          <div className="pt-3 sm:pt-4">
            <button
              id="hero-reserve-vehicle-btn"
              onClick={handleReserveClick}
              className="inline-flex items-center justify-center px-7 h-11 sm:h-12 bg-[#c89b3c] hover:bg-[#d8a83d] active:bg-[#b58b32] text-black font-extrabold text-xs uppercase tracking-wider rounded-md shadow-2xl transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>RESERVE A VEHICLE</span>
            </button>
          </div>

        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        id="hero-prev-btn"
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/85 text-white border border-neutral-700/60 flex items-center justify-center transition-all cursor-pointer z-20 backdrop-blur-xs hover:scale-105"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        id="hero-next-btn"
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/85 text-white border border-neutral-700/60 flex items-center justify-center transition-all cursor-pointer z-20 backdrop-blur-xs hover:scale-105"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIndex ? 'w-8 bg-[#c89b3c]' : 'w-2.5 bg-neutral-600/80 hover:bg-neutral-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
