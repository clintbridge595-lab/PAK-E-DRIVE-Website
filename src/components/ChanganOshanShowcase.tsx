import React, { useState, useEffect, useRef } from 'react';
import { openWhatsApp } from '../utils/whatsapp';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

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
    description: 'Intricate cascading diamond mesh chrome grille with piercing amber DRL running lights.',
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
    description: 'Full-width signature LED lightbar, dual chrome exhaust outlets, and sport roof spoiler.',
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

  // Auto-scroll loop for the car pictures (disabled by default to prevent unexpected scrolling)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % OSHAN_PHOTOS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Center active thumbnail horizontally inside its own container only (NEVER scroll the browser window)
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
      style={{
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic',
      }}
      className="py-12 sm:py-16 lg:py-20 bg-neutral-950 text-white relative overflow-hidden border-b border-neutral-800"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
              CHANGAN OSHAN X7 <span style={{ color: '#a2862b' }}>FUTURESENSE</span>
            </h2>
            <p 
              style={{ fontSize: '12px' }}
              className="text-neutral-400 mt-1 max-w-2xl"
            >
              Exclusive dedicated gallery showcasing the ultra-sleek Black Changan Oshan X7 (300T BlueCore Turbo). Scroll through all high-resolution exterior and profile angles below.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <a
              href="tel:+923122119299"
              className="inline-flex items-center justify-center h-11 sm:h-12 text-xs font-bold text-neutral-300 hover:text-white bg-neutral-900 px-5 rounded-lg border border-neutral-700 transition-colors uppercase font-sans tracking-wider"
            >
              <span>Call: 0312 2119299</span>
            </a>
            <button
              onClick={handleWhatsAppBooking}
              className="inline-flex items-center justify-center h-11 sm:h-12 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs uppercase px-5 rounded-lg tracking-wider transition-colors cursor-pointer shadow-lg shadow-emerald-500/15 font-sans"
            >
              <span>BOOK THIS CAR ON WHATSAPP</span>
            </button>
          </div>
        </div>

        {/* Showcase Grid: Featured Big Viewer & Details Panel */}
        <div className="bg-neutral-900/90 rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 mb-8">
          {/* Main Visual Frame (8 cols on lg) */}
          <div className="lg:col-span-8 relative bg-black flex items-center justify-center min-h-[340px] sm:min-h-[460px] overflow-hidden group">
            <img
              src={currentPhoto.src}
              alt={currentPhoto.title}
              className="w-full h-full object-cover max-h-[520px] transition-all duration-700"
              referrerPolicy="no-referrer"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Lightbox / Expand Button */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute top-4 right-4 bg-neutral-900/80 hover:bg-black text-white p-2 rounded-lg border border-neutral-700 transition-colors cursor-pointer"
              title="View Full Size"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Left & Right Slide Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-2.5 rounded-full border border-white/20 transition-all cursor-pointer opacity-80 hover:opacity-100 hover:scale-105"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-2.5 rounded-full border border-white/20 transition-all cursor-pointer opacity-80 hover:opacity-100 hover:scale-105"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Bottom Caption */}
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <h3 className="text-lg sm:text-xl font-black text-white drop-shadow">
                {currentPhoto.title}
              </h3>
              <p className="text-xs text-neutral-300 drop-shadow mt-0.5 max-w-xl">
                {currentPhoto.description}
              </p>
            </div>
          </div>

          {/* Right Specs & Rental Pricing Panel (4 cols on lg) */}
          <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-neutral-900 border-t lg:border-t-0 lg:border-l border-neutral-800">
            <div>
              <h3 className="text-2xl font-black text-white">Changan Oshan X7</h3>
              <p 
                style={{
                  color: '#c4aa24',
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: '10px',
                }}
                className="font-bold mt-0.5"
              >
                BlueCore 1.5L TGDI Turbo (185 hp) • 7-Speed Dual Clutch
              </p>

              {/* Rates Breakdown */}
              <div className="mt-5 space-y-2.5">
                <div className="bg-neutral-950 p-3 rounded-xl border border-neutral-800 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 font-medium">10-Hour City Chauffeur</span>
                  <span className="text-sm font-extrabold text-amber-400 tracking-tight font-sans">Rs. 10,500</span>
                </div>
                <div className="bg-neutral-950 p-3 rounded-xl border border-neutral-800 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 font-medium">Intercity Highway Travel</span>
                  <span className="text-sm font-extrabold text-white tracking-tight font-sans">Rs. 58 / km</span>
                </div>
                <div className="bg-neutral-950 p-3 rounded-xl border border-neutral-800 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 font-medium">Daily VIP / Barat Package</span>
                  <span className="text-sm font-extrabold text-white tracking-tight font-sans">Rs. 13,500 / Day</span>
                </div>
              </div>

              {/* Key Features List */}
              <div className="mt-5 space-y-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold select-none">•</span>
                  <span>Full Stargaze Panoramic Glass Sunroof</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold select-none">•</span>
                  <span>Heated & Ventilated Luxury Leather Seating</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold select-none">•</span>
                  <span>360° High Definition Parking Camera & Assist</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold select-none">•</span>
                  <span>High-Capacity Rear Digital Air Condition Chiller</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2.5">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs uppercase py-3 rounded-lg tracking-wider transition-colors cursor-pointer text-center block shadow-lg shadow-emerald-500/10"
              >
                CONFIRM OSHAN X7 BOOKING ON WHATSAPP
              </button>
              {onOpenBooking && (
                <button
                  onClick={() => onOpenBooking('Changan Oshan X7 (FutureSense Luxury 7-Seater SUV)')}
                  className="w-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-black text-xs uppercase py-2.5 rounded-lg tracking-wider transition-colors cursor-pointer text-center block border border-neutral-700"
                >
                  SCHEDULE RESERVATION ONLINE
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Scrollable Photo Thumbnails Carousel (Allows user to scroll through all photos freely) */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-black uppercase tracking-wider text-neutral-400">
              CLICK OR SCROLL TO VIEW ALL ANGLES (5 HIGH-RES SHOTS)
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-[11px] font-bold text-neutral-400 hover:text-amber-400 transition-colors cursor-pointer"
              >
                {isAutoPlaying ? 'Pause Auto-Scroll' : 'Resume Auto-Scroll'}
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900 snap-x"
          >
            {OSHAN_PHOTOS.map((photo, index) => {
              const isSelected = activeIndex === index;
              return (
                <button
                  key={photo.id}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveIndex(index);
                  }}
                  className={`relative shrink-0 w-36 sm:w-48 h-24 sm:h-28 rounded-xl overflow-hidden border-2 transition-all cursor-pointer snap-start ${
                    isSelected
                      ? 'border-amber-400 scale-[1.03] shadow-lg shadow-amber-400/20'
                      : 'border-neutral-800 hover:border-neutral-600 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-1.5 left-2 right-2 text-left">
                    <span className="text-[10px] font-bold text-white block truncate leading-tight">
                      {photo.title}
                    </span>
                    <span className="text-[9px] text-amber-400 font-medium block font-sans">
                      {photo.angle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 text-white bg-neutral-900 p-2 rounded-full border border-neutral-700 hover:bg-neutral-800 cursor-pointer z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentPhoto.src}
              alt={currentPhoto.title}
              className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl border border-neutral-800"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center">
              <h4 className="text-xl font-black text-white">{currentPhoto.title}</h4>
              <p className="text-sm text-neutral-400 mt-1">{currentPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
