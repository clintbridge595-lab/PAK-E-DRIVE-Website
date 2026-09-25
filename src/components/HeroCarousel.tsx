import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Vehicle } from '../types';
import { FLEET_VEHICLES } from '../data/fleetData';

interface HeroCarouselProps {
  onSelectVehicle?: (vehicle: Vehicle) => void;
  onOpenBooking?: (vehicleName?: string) => void;
  onExploreFleet?: () => void;
}

interface DeinfaSlide {
  id: string;
  name: string;
  badge: string;
  image: string;
}

// Authentic Pak E Drive fleet vehicles from our website
const PAKEDRIVE_REAL_CARS: DeinfaSlide[] = [
  {
    id: 'prado',
    name: 'Toyota Land Cruiser Prado TX',
    badge: 'Luxury 4x4 SUV',
    image: '/cars/toyota_prado.jpg',
  },
  {
    id: 'revo',
    name: 'Toyota Hilux Revo Double Cabin',
    badge: '4x4 Adventure & Security',
    image: '/cars/hilux_revo.jpg',
  },
  {
    id: 'fortuner',
    name: 'Toyota Fortuner Legender 4x4',
    badge: 'Executive 7-Seater',
    image: '/cars/fortuner_legender.jpg',
  },
  {
    id: 'v8',
    name: 'Toyota Land Cruiser V8 (ZX)',
    badge: 'Royal VIP Flagship',
    image: '/cars/land_cruiser_v8.jpg',
  },
  {
    id: 'grand-cabin',
    name: 'Toyota HiAce Grand Cabin',
    badge: '14-Passenger High Roof',
    image: '/cars/hiace_grand_cabin.jpg',
  },
  {
    id: 'corolla',
    name: 'Toyota Corolla Altis Grande',
    badge: 'Executive Highway Sedan',
    image: '/cars/corolla_altis.jpg',
  },
];

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  onSelectVehicle,
  onOpenBooking,
  onExploreFleet,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-switch cars smoothly every 4 seconds inside the 3D circle
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PAKEDRIVE_REAL_CARS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + PAKEDRIVE_REAL_CARS.length) % PAKEDRIVE_REAL_CARS.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % PAKEDRIVE_REAL_CARS.length);
  };

  const currentCar = PAKEDRIVE_REAL_CARS[currentIndex];

  const handleCarClick = () => {
    const matched = FLEET_VEHICLES.find((v) =>
      v.name.toLowerCase().includes(currentCar.name.toLowerCase()) ||
      v.id.includes(currentCar.id)
    );
    if (matched && onSelectVehicle) {
      onSelectVehicle(matched);
    } else if (onOpenBooking) {
      onOpenBooking(currentCar.name);
    }
  };

  return (
    <section
      id="hero-section"
      className="relative w-full bg-white text-[#222222] overflow-hidden pt-6 sm:pt-10 pb-8 sm:pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[460px] sm:min-h-[500px]">
          
          {/* Left Column: Clean sans-serif typography (tagline removed as requested) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left z-10">
            {/* Main Headline (Selector 1) */}
            <h1 
              style={{
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                fontSize: '46px',
              }}
              className="text-[#111111] leading-[1.08] tracking-tight"
            >
              Rent a Car in<br />
              Karachi Self-Drive<br />
              &amp;<br />
              <span className="text-[#C8102E]">Chauffeur Services</span>
            </h1>

            {/* Subtitle paragraph (Selector 2) */}
            <p 
              style={{
                fontFamily: 'Times New Roman, serif',
                fontStyle: 'italic',
                fontSize: '12px',
              }}
              className="text-[#444444] leading-relaxed max-w-lg font-normal"
            >
              Choose from economy cars, sedans, luxury SUVs and 7-seater vans with driver or self-drive at transparent daily and monthly rates from Rs 3,500/day. Doorstep delivery anywhere in Karachi.
            </p>

            {/* View All Cars Button */}
            <div className="pt-2">
              <button
                id="hero-view-all-cars-btn"
                onClick={onExploreFleet}
                className="inline-flex items-center gap-2 bg-white hover:bg-neutral-50 text-[#111111] font-semibold text-xs sm:text-[13px] px-6 py-2.5 sm:py-3 rounded-[6px] border border-neutral-300 hover:border-black transition-all cursor-pointer shadow-2xs group font-['Poppins',sans-serif]"
              >
                <span>View All Cars</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-600 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: 3D Animated Floating Red Circle with Pak E Drive Real Cars running inside */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] select-none">
            
            <div className="relative w-full max-w-[460px] flex flex-col items-center justify-center">
              
              {/* 3D Floating Stage with clean circular containment - zero white background */}
              <div 
                onClick={handleCarClick}
                className="relative z-10 w-[290px] h-[290px] sm:w-[390px] sm:h-[390px] cursor-pointer group flex items-center justify-center animate-float-3d"
              >
                {/* Organic Red Circle Boundary Ring */}
                <div 
                  className="relative w-full h-full rounded-full p-2.5 sm:p-3 bg-gradient-to-tr from-[#991B1B] via-[#C8102E] to-[#DC2626] shadow-2xl flex items-center justify-center border-4 border-white/40"
                  style={{
                    clipPath: 'circle(50% at 50% 50%)',
                    WebkitClipPath: 'circle(50% at 50% 50%)',
                  }}
                >
                  {/* Internal 3D Portal for Pak E Drive Real Cars */}
                  <div 
                    className="relative w-full h-full rounded-full overflow-hidden isolate flex items-center justify-center bg-neutral-900"
                    style={{
                      clipPath: 'circle(50% at 50% 50%)',
                      WebkitClipPath: 'circle(50% at 50% 50%)',
                    }}
                  >
                    {/* Subtle internal radial light for 3D depth */}
                    <div className="absolute inset-0 z-10 pointer-events-none rounded-full bg-radial from-white/10 via-transparent to-black/40" />

                    {/* Real Pak E Drive Fleet Images smoothly sliding inside the circle */}
                    {PAKEDRIVE_REAL_CARS.map((car, idx) => {
                      const isActive = idx === currentIndex;
                      const isPrev = idx === (currentIndex - 1 + PAKEDRIVE_REAL_CARS.length) % PAKEDRIVE_REAL_CARS.length;
                      
                      return (
                        <div
                          key={car.id}
                          className={`absolute inset-0 w-full h-full rounded-full overflow-hidden transition-all duration-700 ease-in-out ${
                            isActive
                              ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto'
                              : isPrev
                              ? 'opacity-0 -translate-x-16 scale-95 pointer-events-none'
                              : 'opacity-0 translate-x-16 scale-95 pointer-events-none'
                          }`}
                          style={{
                            clipPath: 'circle(50% at 50% 50%)',
                            WebkitClipPath: 'circle(50% at 50% 50%)',
                          }}
                        >
                          <img
                            src={car.image}
                            alt={car.name}
                            className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-108"
                            draggable={false}
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Left Cycler Arrow Button */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous Car"
                  className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-[#111111] shadow-lg border border-neutral-200 flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Right Cycler Arrow Button */}
                <button
                  onClick={handleNext}
                  aria-label="Next Car"
                  className="absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-[#111111] shadow-lg border border-neutral-200 flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Ground Oval 3D Shadow underneath the floating circle */}
              <div 
                className="w-3/4 h-5 sm:h-6 bg-black/35 rounded-full blur-md mt-4 animate-shadow-pulse pointer-events-none"
              />

              {/* Cycler pagination indicator dots (badge pill removed as requested) */}
              <div className="flex items-center justify-center gap-1.5 mt-3">
                {PAKEDRIVE_REAL_CARS.map((car, idx) => (
                  <button
                    key={car.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                    }}
                    aria-label={`Select ${car.name}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex
                        ? 'w-6 bg-[#C8102E]'
                        : 'w-1.5 bg-neutral-300 hover:bg-neutral-400'
                    }`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
