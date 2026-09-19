import React, { useState } from 'react';
import { INTERCITY_ROUTES } from '../data/fleetData';
import { RouteItem } from '../types';
import { openWhatsApp } from '../utils/whatsapp';

interface RoutesSectionProps {
  isFullPage?: boolean;
  onViewAllRoutes?: () => void;
  onOpenBooking?: () => void;
}

export const RoutesSection: React.FC<RoutesSectionProps> = ({
  isFullPage = false,
  onViewAllRoutes,
}) => {
  const [selectedRouteId, setSelectedRouteId] = useState<string>('karachi-hyderabad');

  const selectedRoute =
    INTERCITY_ROUTES.find((r) => r.id === selectedRouteId) || INTERCITY_ROUTES[0];

  const handleBookRoute = (route: RouteItem) => {
    openWhatsApp(
      `Assalam-o-Alaikum PAK E DRIVE, I would like to book a chauffeur trip for route: ${route.name} (${route.highwayName}, ${route.distance}). Please share available vehicle options and quotation.`
    );
  };

  return (
    <div id="routes-section-wrapper">
      {/* If full page: Hero Banner matching video (00:20 - 00:22 of video 2) */}
      {isFullPage && (
        <div 
          className="bg-[#121316] text-white py-14 sm:py-20 border-b border-neutral-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
              Express Highway Routes from Karachi Across Pakistan
            </h1>
            <p className="text-neutral-300 text-xs sm:text-sm sm:leading-relaxed font-normal">
              Travel seamlessly from Karachi to Hyderabad, Thatta, Lahore, Islamabad, and the majestic Northern Areas. Driven by seasoned highway chauffeurs with dual cooling air conditioning.
            </p>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        
        {/* On Home page: Standard Section Heading matching video (01:37 - 01:40) */}
        {!isFullPage && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-950">
                Express Routes from Karachi
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm mt-1.5 font-normal">
                Experienced highway drivers navigating M-9, N-5, and the modern M-5 Motorway.
              </p>
            </div>

            {onViewAllRoutes && (
              <button
                onClick={onViewAllRoutes}
                className="text-xs font-bold text-amber-600 hover:text-amber-700 tracking-wide transition-colors self-start md:self-auto cursor-pointer"
              >
                <span>View All Routes</span>
              </button>
            )}
          </div>
        )}

        {/* If Home Page: 3-Card Grid layout matching video (01:37 - 01:40) */}
        {!isFullPage ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {INTERCITY_ROUTES.slice(0, 3).map((route) => (
              <div
                key={route.id}
                id={`home-route-card-${route.id}`}
                className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-48 w-full bg-neutral-900 overflow-hidden">
                  <img
                    src={route.image}
                    alt={route.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute bottom-3 right-3">
                    <button
                      onClick={() => handleBookRoute(route)}
                      className="bg-black/90 hover:bg-black text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-md border border-neutral-700 cursor-pointer font-sans"
                    >
                      QUOTE ON WHATSAPP
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-extrabold text-neutral-900 tracking-tight">
                      {route.name}
                    </h3>
                    <div className="text-xs font-mono font-bold text-neutral-500 mt-0.5">
                      {route.distance} • {route.duration}
                    </div>
                    <p className="text-xs text-neutral-600 mt-2.5 line-clamp-3 leading-relaxed">
                      {route.overview}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs text-neutral-500 font-medium truncate max-w-[60%]">
                      {route.recommendedVehicles.split('•')[0]}
                    </span>
                    <button
                      onClick={() => handleBookRoute(route)}
                      className="text-xs font-bold text-amber-600 hover:text-amber-700 tracking-wide cursor-pointer"
                    >
                      <span>Book Route</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Full Routes Page Interactive Corridor Explorer matching video (00:21 - 00:33) */
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Corridor Selector List */}
              <div className="lg:col-span-5 space-y-3">
                <span className="text-[10px] font-sans uppercase tracking-widest text-neutral-500 font-bold block mb-2 px-1">
                  SELECT INTERCITY CORRIDOR
                </span>

                {INTERCITY_ROUTES.map((route) => {
                  const isSelected = selectedRouteId === route.id;
                  return (
                    <button
                      key={route.id}
                      onClick={() => setSelectedRouteId(route.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-neutral-950 text-white border-neutral-950 shadow-md scale-[1.01]'
                          : 'bg-white hover:bg-neutral-50 text-neutral-900 border-neutral-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-sm font-extrabold tracking-tight">
                          {route.name}
                        </div>
                        <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-sm ${
                          isSelected ? 'bg-amber-400 text-black' : 'bg-emerald-50 text-emerald-700'
                        }`}>
                          SERVICE: Chauffeur Ride
                        </span>
                      </div>
                      <div className={`text-xs font-sans font-medium ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                        {route.distance} • {route.duration}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Route Details Viewer matching video (00:23 - 00:32) */}
              <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs">
                {/* Route Image Banner */}
                <div className="relative h-64 sm:h-72 w-full bg-neutral-900 overflow-hidden">
                  <img
                    src={selectedRoute.image}
                    alt={selectedRoute.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white">
                    <div>
                      <span className="text-[10px] font-sans text-amber-400 font-bold uppercase tracking-wider block">
                        {selectedRoute.highwayName}
                      </span>
                      <h3 className="text-2xl font-black">{selectedRoute.name}</h3>
                    </div>

                    <button
                      onClick={() => handleBookRoute(selectedRoute)}
                      className="bg-black/90 hover:bg-black text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-2 rounded-lg border border-neutral-700 cursor-pointer shrink-0"
                    >
                      QUOTE ON WHATSAPP
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Route Overview */}
                  <div>
                    <h4 className="text-xs font-sans uppercase tracking-widest text-neutral-900 font-bold mb-2">
                      ROUTE OVERVIEW &amp; HIGHWAY EXPERIENCE
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {selectedRoute.overview}
                    </p>
                  </div>

                  {/* Waypoints */}
                  <div>
                    <h4 className="text-xs font-sans uppercase tracking-widest text-neutral-900 font-bold mb-2.5">
                      KEY HIGHWAY WAYPOINTS &amp; REST STOPS:
                    </h4>
                    <div className="flex flex-wrap items-center gap-2">
                      {selectedRoute.waypoints.map((wp, idx) => (
                        <div
                          key={idx}
                          className="bg-neutral-50 border border-neutral-200 px-3 py-1.5 rounded-md text-xs font-medium text-neutral-800"
                        >
                          <span>{wp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Vehicles */}
                  <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-sans uppercase text-neutral-400 font-bold block mb-1">
                        RECOMMENDED VEHICLES FOR THIS JOURNEY:
                      </span>
                      <div className="text-xs font-bold text-neutral-800">
                        {selectedRoute.recommendedVehicles}
                      </div>
                    </div>

                    <button
                      onClick={() => handleBookRoute(selectedRoute)}
                      className="shrink-0 flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs uppercase px-6 py-3 rounded-lg shadow-sm tracking-wider cursor-pointer transition-colors"
                    >
                      <span>RESERVE ROUTE VIA WHATSAPP</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Section matching video (00:34 - 00:37): Engineered for Long-Distance Pakistani Roads */}
            <div className="mt-16 pt-12 border-t border-neutral-200">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950">
                  Engineered for Long-Distance Pakistani Roads
                </h3>
                <p className="text-neutral-500 text-xs sm:text-sm mt-1">
                  Why our chauffeurs and vehicles provide an unbeatable travel experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-2xs">
                  <div className="text-[10px] font-bold text-amber-600 uppercase tracking-wider mb-2">
                    SAFETY COMPLIANCE
                  </div>
                  <h4 className="text-base font-extrabold text-neutral-900 mb-2">
                    Motorway Police (NH&amp;MP) Compliant
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    All vehicles adhere strictly to National Highway &amp; Motorway Police regulations, emergency kits, reflective triangles, and speed restrictions.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-2xs">
                  <div className="text-[10px] font-bold text-amber-600 uppercase tracking-wider mb-2">
                    ALERT CHAUFFEURS
                  </div>
                  <h4 className="text-base font-extrabold text-neutral-900 mb-2">
                    Dual Driver Protocol on 10+ Hour Trips
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    For non-stop long distance routes like Karachi to Lahore and Islamabad, we provide two rested, experienced drivers to ensure alert, fatigue-free driving.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-2xs">
                  <div className="text-[10px] font-bold text-amber-600 uppercase tracking-wider mb-2">
                    ALPINE ROUTING
                  </div>
                  <h4 className="text-base font-extrabold text-neutral-900 mb-2">
                    Mountain Expedition Specialists
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Northern area tours (Hunza, Swat, Skardu) are driven solely by 4x4 drivers with specialized experience in steep alpine passes and low-gear engine braking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
