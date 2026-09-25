import React, { useState, useEffect, useRef } from 'react';
import { openWhatsApp } from '../utils/whatsapp';
import { ChevronLeft, ChevronRight, Maximize2, X, Star } from 'lucide-react';

interface ChanganOshanShowcaseProps {
  onOpenBooking?: (vehicleName?: string) => void;
}

interface PhotoItem {
  id: string;
  title: string;
  angle: string;
  description: string;
  src: string;
}

const OSHAN_PHOTOS: PhotoItem[] = [
  {
    id: 'front-angle',
    title: 'Executive Front 3/4 Stance',
    angle: 'Dynamic 3/4 View',
    description: 'Gloss Black finish with aerodynamic body lines and sculpted side panels.',
    src: '/cars/oshan_x7_angle.jpg',
  },
  {
    id: 'front-grille',
    title: 'Cascade Chrome Grille & Matrix LEDs',
    angle: 'Frontal Fascia',
    description: 'Intricate cascading diamond mesh chrome grille with piercing LED headlights.',
    src: '/cars/oshan_x7_front.jpg',
  },
  {
    id: 'side-profile',
    title: 'Aerodynamic Side Profile',
    angle: 'Side View',
    description: '19-inch two-tone diamond-cut turbine alloy wheels and floating roofline styling.',
    src: '/cars/oshan_x7_side.jpg',
  },
  {
    id: 'rear-lightbar',
    title: 'Continuous LED Tail Lightbar',
    angle: 'Rear Profile',
    description: 'Full-width signature LED lightbar, dual chrome exhaust outlets, and sport spoiler.',
    src: '/cars/oshan_x7_rear.jpg',
  },
  {
    id: 'main-stance',
    title: 'Changan Oshan X7 FutureSense Edition',
    angle: 'Luxury Stance',
    description: 'Prestigious 7-seater luxury SUV designed for VIP executive family travel and weddings.',
    src: '/cars/oshan_x7.jpg',
  },
];

export const ChanganOshanShowcase: React.FC<ChanganOshanShowcaseProps> = ({ onOpenBooking }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % OSHAN_PHOTOS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeEl = container.children[activeIndex] as HTMLElement;
      if (activeEl) {
        const targetScroll = activeEl.offsetLeft - (container.clientWidth / 2) + (activeEl.offsetWidth / 2);
        container.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
      }
    }
  }, [activeIndex]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + OSHAN_PHOTOS.length) % OSHAN_PHOTOS.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % OSHAN_PHOTOS.length);
  };

  const currentPhoto = OSHAN_PHOTOS[activeIndex];

  const handleWhatsAppBooking = () => {
    openWhatsApp(
      `Assalam-o-Alaikum PAK E DRIVE, I would like to book the Changan Oshan X7 FutureSense (Black 7-Seater Luxury SUV) shown in the exclusive gallery. Please share driver dispatch details and booking confirmation.`
    );
  };

  return (
    <section
      id="changan-oshan-exclusive-showcase"
      className="py-12 sm:py-16 bg-white text-[#222222] border-b border-[#E5E5E5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D919C] uppercase tracking-wider mb-1.5">
              <span>Exclusive Fleet Spotlight</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111111]">
              Changan Oshan X7 <span className="text-[#0D919C]">FutureSense</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl font-normal">
              7-passenger premium SUV with panoramic sunroof, heated ventilated seats, and 300T BlueCore turbo engine. Perfect for family events, VIP airport protocols, and bridal escorts.
            </p>
          </div>

          {/* Action CTA: one clear primary action button */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleWhatsAppBooking}
              className="btn-whatsapp py-3 px-6 text-xs sm:text-sm"
            >
              <span>Book Oshan X7 on WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Showcase Grid: Featured Big Viewer & Details Panel in White Card */}
        <div className="bg-white rounded-2xl border border-[#E5E5E5] overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 mb-8">
          {/* Main Visual Frame (8 cols on lg) */}
          <div className="lg:col-span-8 relative bg-neutral-950 flex items-center justify-center min-h-[320px] sm:min-h-[440px] overflow-hidden group">
            <img
              src={currentPhoto.src}
              alt={currentPhoto.title}
              className="w-full h-full object-cover max-h-[500px] transition-all duration-500"
              referrerPolicy="no-referrer"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

            {/* Lightbox / Expand Button */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-lg border border-white/20 transition-colors cursor-pointer"
              title="View Full Size"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Left & Right Slide Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2.5 rounded-full border border-white/20 transition-all cursor-pointer opacity-90 hover:scale-105"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2.5 rounded-full border border-white/20 transition-all cursor-pointer opacity-90 hover:scale-105"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs uppercase font-bold text-[#0D919C] bg-white px-2 py-0.5 rounded-[4px] inline-block mb-1">
                {currentPhoto.angle}
              </span>
              <h3 className="text-lg sm:text-xl font-bold">{currentPhoto.title}</h3>
              <p className="text-xs text-neutral-200 mt-0.5 line-clamp-1">{currentPhoto.description}</p>
            </div>
          </div>

          {/* Right Details Panel (4 cols on lg) */}
          <div className="lg:col-span-4 p-6 sm:p-7 flex flex-col justify-between bg-white border-t lg:border-t-0 lg:border-l border-[#E5E5E5]">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D919C] block mb-1">
                  Vehicle Highlights
                </span>
                <h3 className="text-xl font-extrabold text-[#111111]">
                  Changan Oshan X7
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  FuturSense 7-Passenger Flagship SUV
                </p>
              </div>

              {/* 2x2 Specs Grid */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-[#E5E5E5] text-xs">
                <div>
                  <span className="text-neutral-500 font-semibold block text-[11px] uppercase">Seating</span>
                  <span className="font-bold text-[#111111]">7 Passengers</span>
                </div>
                <div>
                  <span className="text-neutral-500 font-semibold block text-[11px] uppercase">Engine</span>
                  <span className="font-bold text-[#111111]">1.5L Turbo 300T</span>
                </div>
                <div>
                  <span className="text-neutral-500 font-semibold block text-[11px] uppercase">Transmission</span>
                  <span className="font-bold text-[#111111]">7-Speed Dual-Clutch</span>
                </div>
                <div>
                  <span className="text-neutral-500 font-semibold block text-[11px] uppercase">Rate</span>
                  <span className="font-bold text-[#111111]">Rs. 10,500 / 10 Hrs</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D919C]"></span>
                  <span>Panoramic sunroof &amp; ambient LED lighting</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D919C]"></span>
                  <span>Dual-zone climate control with rear AC vents</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D919C]"></span>
                  <span>Uniformed, licensed chauffeur included</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#252525] text-white font-bold text-xs sm:text-sm py-3 rounded-[7px] transition-colors cursor-pointer shadow-xs"
              >
                <span>Book Now</span>
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Carousel Row */}
        <div 
          ref={scrollContainerRef}
          className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar"
        >
          {OSHAN_PHOTOS.map((photo, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={photo.id}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveIndex(index);
                }}
                className={`relative shrink-0 w-28 sm:w-36 h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  isActive 
                    ? 'border-[#0D919C] shadow-sm scale-102' 
                    : 'border-[#E5E5E5] opacity-75 hover:opacity-100 hover:border-neutral-300'
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20" />
                <span className="absolute bottom-1 left-1 right-1 text-[10px] text-white font-bold truncate bg-black/60 px-1 py-0.5 rounded-[3px]">
                  {photo.angle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-neutral-300 p-2 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={currentPhoto.src}
              alt={currentPhoto.title}
              className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-3 text-center text-white text-sm">
              <span className="font-bold">{currentPhoto.title}</span> — {currentPhoto.description}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
