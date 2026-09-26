import React, { useState } from 'react';
import { INTERCITY_ROUTES } from '../data/fleetData';
import { RouteItem } from '../types';
import { openWhatsApp } from '../utils/whatsapp';
import { SectionHeader } from './SectionHeader';
import { Clock, ShieldCheck, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

interface RoutesSectionProps {
  isFullPage?: boolean;
  onViewAllRoutes?: () => void;
  onOpenBooking?: () => void;
}

const ROUTE_BTN_COLORS = ['#4bb8b3', '#30c3b6', '#35cec7'];

export const RoutesSection: React.FC<RoutesSectionProps> = ({
  isFullPage = false,
  onViewAllRoutes,
  onOpenBooking,
}) => {
  const [selectedRouteId, setSelectedRouteId] = useState<string>('karachi-hyderabad');

  const selectedRoute: RouteItem =
    INTERCITY_ROUTES.find((r) => r.id === selectedRouteId) || INTERCITY_ROUTES[0];

  const handleBookRoute = (route: RouteItem) => {
    openWhatsApp(
      `Assalam-o-Alaikum PAK E DRIVE, I want to book a trip for ${route.name} (${route.distance}). Please share available vehicles and rates.`
    );
  };

  return (
    <div id="routes-section-wrapper">
      {/* Reusable Section Header for Full Page */}
      {isFullPage && (
        <SectionHeader 
          title="Express Intercity Routes from Karachi" 
          currentPageName="Routes" 
        />
      )}

      {/* Main Container */}
      <div 
        style={{
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        
        {/* On Home page: Standard Section Heading */}
        {!isFullPage && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              {/* Span removed as requested in Selector 13 */}
              <h2 
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '31px',
                }}
                className="font-extrabold tracking-tight text-[#111111]"
              >
                Express Routes from Karachi
              </h2>
              <p 
                style={{
                  fontFamily: 'Times New Roman, serif',
                  fontSize: '11px',
                }}
                className="text-neutral-600 mt-1.5 font-normal"
              >
                Connecting Karachi to Hyderabad, Sukkur, Multan, Lahore, Faisalabad, and Islamabad with experienced highway chauffeurs.
              </p>
            </div>

            {onViewAllRoutes && (
              <button
                onClick={onViewAllRoutes}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] hover:text-[#0D919C] bg-white hover:bg-neutral-50 border border-[#E5E5E5] px-4 py-2.5 rounded-[7px] transition-colors self-start md:self-auto cursor-pointer shadow-2xs"
              >
                <span>View All Routes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

        {/* Home Page: 3-Card Grid layout */}
        {!isFullPage ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {INTERCITY_ROUTES.slice(0, 3).map((route, idx) => (
              <div
                key={route.id}
                id={`home-route-card-${route.id}`}
                className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between font-sans"
              >
                {/* Image - Span removed as requested in Selector 16 */}
                <div className="relative h-48 w-full bg-neutral-100 overflow-hidden">
                  <img
                    src={route.image}
                    alt={route.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-[#111111] tracking-tight">
                      {route.name}
                    </h3>
                    <div className="text-xs text-[#0D919C] font-semibold mt-0.5">
                      {route.distance} • {route.duration}
                    </div>
                    <p className="text-xs text-neutral-600 mt-2 line-clamp-2 leading-relaxed">
                      {route.overview}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between">
                    <span className="text-xs text-neutral-500 font-medium truncate max-w-[60%]">
                      {route.recommendedVehicles.split('•')[0]}
                    </span>
                    <button
                      onClick={() => handleBookRoute(route)}
                      style={{ backgroundColor: ROUTE_BTN_COLORS[idx] || '#3ca19a' }}
                      className="hover:opacity-90 text-white text-xs font-bold px-3.5 py-2 rounded-[7px] cursor-pointer shadow-xs transition-opacity"
                    >
                      Book Route
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Full Routes Page: Clean 2-column corridor explorer */
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Corridor Selector List */}
              <div className="lg:col-span-5 space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#111111] block mb-2 px-1">
                  Select Intercity Corridor from Karachi
                </span>

                {INTERCITY_ROUTES.map((route) => {
                  const isSelected = selectedRouteId === route.id;
                  return (
                    <button
                      key={route.id}
                      onClick={() => setSelectedRouteId(route.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-teal-50 border-[#0D919C] shadow-xs text-[#111111]'
                          : 'bg-white hover:bg-neutral-50 text-[#222222] border-[#E5E5E5]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-[#111111]">
                          {route.name}
                        </span>
                        <span className="text-xs font-extrabold text-[#0D919C]">
                          {route.highwayCode}
                        </span>
                      </div>
                      <div className="text-xs text-neutral-500">
                        {route.distance} • {route.duration}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Detailed Corridor Card */}
              <div className="lg:col-span-7 bg-white rounded-xl border border-[#E5E5E5] p-6 shadow-xs">
                {/* Route Image Banner */}
                <div className="h-56 sm:h-64 w-full rounded-lg overflow-hidden mb-6 bg-neutral-100">
                  <img
                    src={selectedRoute.image}
                    alt={selectedRoute.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 mb-3">
                  <div>
                    <span className="text-xs font-extrabold text-[#0D919C] uppercase tracking-wider">
                      {selectedRoute.highwayCode} Corridor
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#111111] mt-0.5">
                      {selectedRoute.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#111111]">
                      {selectedRoute.distance}
                    </div>
                    <div className="text-xs text-neutral-500 flex items-center justify-end gap-1">
                      <Clock className="w-3 h-3 text-[#0D919C]" />
                      <span>{selectedRoute.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {selectedRoute.overview}
                </p>

                {/* Key Waypoints */}
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#111111] block mb-2">
                    Key Transit Stops &amp; Rest Areas
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {(selectedRoute.waypoints || []).map((stop, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-xs bg-neutral-100 text-neutral-800 px-3 py-1 rounded-[5px] font-medium"
                      >
                        <MapPin className="w-3 h-3 text-[#0D919C]" />
                        <span>{stop}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Safety & Recommended Fleet */}
                <div className="bg-neutral-50/70 rounded-lg p-4 border border-[#E5E5E5] mb-6 space-y-3">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#0D919C] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#111111] block">
                        Chauffeur Highway Protocols
                      </span>
                      <span className="text-xs text-neutral-600">
                        24/7 Roadside Assistance &amp; Motorway Speed Compliant
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 pt-2 border-t border-[#E5E5E5]">
                    <CheckCircle className="w-4 h-4 text-[#0D919C] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#111111] block">
                        Recommended Vehicles
                      </span>
                      <span className="text-xs text-neutral-600">
                        {selectedRoute.recommendedVehicles}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-[#E5E5E5]">
                  <div>
                    <span className="text-[11px] text-neutral-500 font-semibold block uppercase">
                      Fixed Motorway Rates Available
                    </span>
                    <span className="text-xs text-neutral-700 font-medium">
                      All-inclusive chauffeur, fuel &amp; toll options
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {onOpenBooking && (
                      <button
                        onClick={onOpenBooking}
                        className="bg-white hover:bg-neutral-100 text-[#222222] border border-[#E5E5E5] font-semibold text-xs px-4 py-2.5 rounded-[7px] transition-colors cursor-pointer"
                      >
                        Booking Calculator
                      </button>
                    )}

                    <button
                      onClick={() => handleBookRoute(selectedRoute)}
                      style={{ backgroundColor: '#3ca19a' }}
                      className="hover:bg-[#328e88] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-[7px] shadow-xs transition-colors cursor-pointer self-start sm:self-auto"
                    >
                      Book Route Now
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};
