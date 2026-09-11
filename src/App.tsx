import { useState } from 'react';
import { Navbar, NavPage } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { BookingBar } from './components/BookingBar';
import { TrustBadges } from './components/TrustBadges';
import { Fleet3DShowroom } from './components/Fleet3DShowroom';
import { GrandCabinHighlight } from './components/GrandCabinHighlight';
import { FleetGrid } from './components/FleetGrid';
import { ServicesSection } from './components/ServicesSection';
import { RoutesSection } from './components/RoutesSection';
import { BulletproofSection } from './components/BulletproofSection';
import { ChanganOshanShowcase } from './components/ChanganOshanShowcase';
import { RawalpindiRoutesSection } from './components/RawalpindiRoutesSection';
import { HowToBook } from './components/HowToBook';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactPage } from './pages/ContactPage';
import { SpecsModal } from './components/SpecsModal';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Vehicle } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [specsVehicle, setSpecsVehicle] = useState<Vehicle | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedVehicle, setPreselectedVehicle] = useState<string | undefined>(undefined);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (vehicleName?: string) => {
    if (vehicleName) {
      setPreselectedVehicle(vehicleName);
    }
    setIsBookingOpen(true);
  };

  const handleOpenSpecs = (vehicle: Vehicle) => {
    setSpecsVehicle(vehicle);
  };

  const handleCloseSpecs = () => {
    setSpecsVehicle(null);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans flex flex-col selection:bg-amber-400 selection:text-black">
      {/* Top Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Routing */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <div className="animate-fadeIn">
            {/* 1. Hero Carousel */}
            <HeroCarousel
              onOpenBooking={() => handleOpenBooking()}
              onExploreFleet={() => handleNavigate('fleet')}
            />

            {/* 2. Interactive Booking Bar */}
            <BookingBar onOpenModal={() => handleOpenBooking()} />

            {/* 3. Trust Metrics Badges */}
            <TrustBadges />

            {/* 4. Dedicated BULLET PROOF B6+ Ballistic Fleet Section */}
            <BulletproofSection
              onOpenSpecs={handleOpenSpecs}
              onOpenBooking={handleOpenBooking}
            />

            {/* 5. Changan Oshan X7 Exclusive Multi-Angle Carousel Showcase */}
            <ChanganOshanShowcase onOpenBooking={handleOpenBooking} />

            {/* 6. 3D Fleet Showroom */}
            <Fleet3DShowroom
              onSelectVehicle={(vehicle) => handleOpenBooking(vehicle.name)}
              onOpenSpecs={handleOpenSpecs}
            />

            {/* 6. Grand Cabin Karachi to Hyderabad Highlight */}
            <GrandCabinHighlight onOpenBooking={() => handleOpenBooking('Toyota HiAce Grand Cabin (High Roof 14-Seater)')} />

            {/* 7. Verified Fleet & Rates Grid (preview) */}
            <FleetGrid
              limit={6}
              onOpenSpecs={handleOpenSpecs}
              onViewAllFleet={() => handleNavigate('fleet')}
            />

            {/* 8. Rawalpindi / Islamabad Fixed Routes (پنڈی سے ریٹس) */}
            <RawalpindiRoutesSection />

            {/* 9. Tailored Services Section (grid) */}
            <ServicesSection
              isFullPage={false}
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* 10. Express Highway Routes Section */}
            <RoutesSection
              isFullPage={false}
              onViewAllRoutes={() => handleNavigate('routes')}
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* 11. 4-Step Booking Guide */}
            <HowToBook />

            {/* 12. Verified Testimonials & Google Rating */}
            <Testimonials />

            {/* 13. Final Call To Action Banner */}
            <CallToAction onOpenBooking={() => handleOpenBooking()} />
          </div>
        )}

        {currentPage === 'about' && (
          <AboutUsPage onOpenBooking={() => handleOpenBooking()} />
        )}

        {currentPage === 'fleet' && (
          <div className="animate-fadeIn">
            <BulletproofSection
              onOpenSpecs={handleOpenSpecs}
              onOpenBooking={handleOpenBooking}
            />
            <FleetGrid
              showSearchAndSort={true}
              onOpenSpecs={handleOpenSpecs}
            />
            <Fleet3DShowroom
              onSelectVehicle={(vehicle) => handleOpenBooking(vehicle.name)}
              onOpenSpecs={handleOpenSpecs}
            />
            <CallToAction onOpenBooking={() => handleOpenBooking()} />
          </div>
        )}

        {currentPage === 'services' && (
          <div className="animate-fadeIn">
            <ServicesSection
              isFullPage={true}
              onOpenSpecs={handleOpenSpecs}
              onOpenBooking={() => handleOpenBooking()}
            />
            <CallToAction onOpenBooking={() => handleOpenBooking()} />
          </div>
        )}

        {currentPage === 'routes' && (
          <div className="animate-fadeIn">
            <RawalpindiRoutesSection />
            <RoutesSection
              isFullPage={true}
              onOpenBooking={() => handleOpenBooking()}
            />
            <CallToAction onOpenBooking={() => handleOpenBooking()} />
          </div>
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Vehicle Specs Modal */}
      <SpecsModal
        vehicle={specsVehicle}
        onClose={handleCloseSpecs}
      />

      {/* Booking Form Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialVehicle={preselectedVehicle}
      />

      {/* Floating 24/7 WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
