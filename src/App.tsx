import { useState, useEffect } from 'react';
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
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { SpecsModal } from './components/SpecsModal';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SectionHeader } from './components/SectionHeader';
import { Vehicle } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
      const hash = window.location.hash.toLowerCase();
      if (path === '/privacy-policy' || path === '/privacy' || hash === '#privacy-policy' || hash === '#privacy') {
        return 'privacy';
      }
      if (path === '/about') return 'about';
      if (path === '/services') return 'services';
      if (path === '/fleet') return 'fleet';
      if (path === '/routes') return 'routes';
      if (path === '/contact') return 'contact';
    }
    return 'home';
  });
  const [specsVehicle, setSpecsVehicle] = useState<Vehicle | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedVehicle, setPreselectedVehicle] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleLocation = () => {
      const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
      const hash = window.location.hash.toLowerCase();
      if (path === '/privacy-policy' || path === '/privacy' || hash === '#privacy-policy' || hash === '#privacy') {
        setCurrentPage('privacy');
      } else if (path === '/about' || hash === '#about') {
        setCurrentPage('about');
      } else if (path === '/services' || hash === '#services') {
        setCurrentPage('services');
      } else if (path === '/fleet' || hash === '#fleet') {
        setCurrentPage('fleet');
      } else if (path === '/routes' || hash === '#routes') {
        setCurrentPage('routes');
      } else if (path === '/contact' || hash === '#contact') {
        setCurrentPage('contact');
      } else if (path === '' || path === '/' || hash === '#home') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handleLocation);
    window.addEventListener('hashchange', handleLocation);
    return () => {
      window.removeEventListener('popstate', handleLocation);
      window.removeEventListener('hashchange', handleLocation);
    };
  }, []);

  // Force browser tab to immediately refresh favicon and discard old black square cache
  useEffect(() => {
    try {
      const links = document.querySelectorAll<HTMLLinkElement>("link[rel*='icon']");
      const v = '20260914c';
      links.forEach((link) => {
        const url = new URL(link.href, window.location.origin);
        url.searchParams.set('v', v);
        link.href = url.toString();
      });
    } catch {
      // ignore
    }
  }, []);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    if (page === 'privacy') {
      window.history.pushState(null, '', '/privacy-policy');
    } else if (page === 'home') {
      window.history.pushState(null, '', '/');
    } else {
      window.history.pushState(null, '', `/${page}`);
    }
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
    <div className="min-h-screen bg-white text-[#222222] font-sans flex flex-col selection:bg-[#0D919C] selection:text-white">
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
              onOpenBooking={(vehicleName) => handleOpenBooking(vehicleName)}
              onSelectVehicle={(vehicle) => handleOpenBooking(vehicle.name)}
              onExploreFleet={() => handleNavigate('fleet')}
            />

            {/* 2. Interactive Booking Bar */}
            <BookingBar onOpenModal={() => handleOpenBooking()} />

            {/* 3. Trust Metrics Badges */}
            <TrustBadges />

            {/* 4. Verified Fleet & Rates Grid (preview) */}
            <FleetGrid
              limit={6}
              onOpenSpecs={handleOpenSpecs}
              onViewAllFleet={() => handleNavigate('fleet')}
            />

            {/* 5. Karachi Intercity Motorway Fares */}
            <RawalpindiRoutesSection />

            {/* 6. Express Highway Routes Section */}
            <RoutesSection
              isFullPage={false}
              onViewAllRoutes={() => handleNavigate('routes')}
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* 7. 4-Step Booking Guide */}
            <HowToBook />

            {/* 8. Verified Testimonials & Google Rating */}
            <Testimonials />

            {/* 9. Final Call To Action Banner */}
            <CallToAction onOpenBooking={() => handleOpenBooking()} />
          </div>
        )}

        {currentPage === 'about' && (
          <AboutUsPage onOpenBooking={() => handleOpenBooking()} />
        )}

        {currentPage === 'fleet' && (
          <div className="animate-fadeIn">
            {/* Reusable Section Header Component */}
            <SectionHeader title="Our Fleet" currentPageName="Our Fleet" />

            <FleetGrid
              showSearchAndSort={true}
              onOpenSpecs={handleOpenSpecs}
            />
            <BulletproofSection
              onOpenSpecs={handleOpenSpecs}
              onOpenBooking={handleOpenBooking}
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
            <RoutesSection
              isFullPage={true}
              onOpenBooking={() => handleOpenBooking()}
            />
            <RawalpindiRoutesSection />
            <CallToAction onOpenBooking={() => handleOpenBooking()} />
          </div>
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicyPage
            onBackToHome={() => handleNavigate('home')}
            onOpenBooking={() => handleOpenBooking()}
          />
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
