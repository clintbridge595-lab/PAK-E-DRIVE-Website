import React, { useState, useMemo } from 'react';
import { FLEET_VEHICLES } from '../data/fleetData';
import { Vehicle, VehicleCategory } from '../types';
import { openWhatsApp } from '../utils/whatsapp';

interface FleetGridProps {
  limit?: number;
  showSearchAndSort?: boolean;
  onOpenSpecs: (vehicle: Vehicle) => void;
  onViewAllFleet?: () => void;
}

export const FleetGrid: React.FC<FleetGridProps> = ({
  limit,
  showSearchAndSort = false,
  onOpenSpecs,
  onViewAllFleet,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'ALL', label: showSearchAndSort ? 'ALL CARS' : 'ALL VEHICLES' },
    { id: 'BULLETPROOF', label: 'BULLET PROOF B6+' },
    { id: 'SEDAN', label: 'SEDANS' },
    { id: 'SUV', label: 'SUVS' },
    { id: 'LUXURY', label: 'LUXURY' },
    { id: 'VANS', label: 'VANS' },
    { id: 'WEDDING', label: 'WEDDING' },
  ];

  const filteredVehicles = useMemo(() => {
    let list = [...FLEET_VEHICLES];

    if (selectedCategory !== 'ALL') {
      list = list.filter((v) => v.category === (selectedCategory as VehicleCategory));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (v) =>
          v.name.toLowerCase().includes(q) ||
          v.subtitle.toLowerCase().includes(q) ||
          v.category.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'seats') {
      list.sort((a, b) => b.seats - a.seats);
    } else if (sortBy === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (limit && limit > 0) {
      list = list.slice(0, limit);
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy, limit]);

  const handleWhatsAppBooking = (vehicle: Vehicle) => {
    openWhatsApp(
      `Assalam-o-Alaikum PAK E DRIVE, I would like to check availability and book the ${vehicle.name} with chauffeur.`
    );
  };

  return (
    <section 
      id="fleet-rates-grid-section" 
      style={{
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic',
      }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
    >
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-950">
            {showSearchAndSort ? 'Our Premium Vehicle Collection & Rates' : 'Our Verified Fleet & Transparent Rates'}
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm mt-1.5 max-w-2xl font-normal">
            {showSearchAndSort
              ? 'Every vehicle in our showroom is 100% genuine, maintained to showroom standards, and piloted by courteous, background-verified chauffeurs. Transparent rates with zero unexpected surcharges.'
              : 'Fixed 10-Hour & Daily packages including our licensed, verified chauffeurs.'}
          </p>
        </div>

        {onViewAllFleet && (
          <button
            onClick={onViewAllFleet}
            className="text-xs font-black uppercase text-amber-600 hover:text-amber-700 tracking-wider transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>VIEW FULL FLEET SHOWROOM</span>
          </button>
        )}
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`filter-tab-${cat.id.toLowerCase()}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-black px-4 py-2.5 rounded-full tracking-wider uppercase transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-neutral-950 text-white shadow-xs'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search & Sort on Fleet Page */}
        {showSearchAndSort && (
          <div className="flex flex-wrap items-center gap-3">
            <div className="min-w-[220px]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Honda, Prado, V8..."
                className="w-full px-3 py-2 text-xs font-medium bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-hidden focus:border-amber-400"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-bold uppercase tracking-wider bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-neutral-800 cursor-pointer focus:outline-hidden"
            >
              <option value="featured">FEATURED ORDER</option>
              <option value="seats">SEAT CAPACITY (HIGH TO LOW)</option>
              <option value="name">VEHICLE NAME (A-Z)</option>
            </select>
          </div>
        )}
      </div>

      {/* Grid of Vehicle Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredVehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            id={`vehicle-card-${vehicle.id}`}
            className="bg-white rounded-xl border border-neutral-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group"
          >
            {/* Top Image Box with Category Tag */}
            <div className="relative h-52 sm:h-56 w-full bg-neutral-900 overflow-hidden">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Category Badge matching video (top right) */}
              <div className="absolute top-3 right-3 bg-amber-400 text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-sm shadow-md tracking-wider">
                {vehicle.isBulletproof ? 'B6+ BULLETPROOF' : vehicle.category}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-extrabold text-neutral-950 tracking-tight leading-snug">
                  {vehicle.name}
                </h3>
                <p 
                  style={{
                    color: '#c4aa24',
                    fontFamily: '"Times New Roman", Times, serif',
                    fontSize: '10px',
                  }}
                  className="mt-1 font-normal line-clamp-1"
                >
                  {vehicle.subtitle}
                </p>

                {/* 10-Hour Package / Rate Badge */}
                <div className="flex items-center justify-between bg-neutral-50 px-3 py-2 rounded-lg border border-neutral-200/80 my-3">
                  <span className="text-[10px] font-black text-neutral-500 uppercase tracking-wider">
                    {vehicle.isBulletproof ? 'SECURITY RATE' : '10-HOUR CITY RATE'}
                  </span>
                  <span className="text-xs font-black text-neutral-950 font-mono">
                    {vehicle.rates.tenHoursCity}
                  </span>
                </div>

                {/* Specs Row */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 my-4 py-3 border-y border-neutral-100 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[10px] uppercase font-bold text-neutral-400 mb-0.5">SEATS</span>
                    <div className="text-xs font-bold text-neutral-800">
                      <span>{vehicle.seats}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[10px] uppercase font-bold text-neutral-400 mb-0.5">GEAR</span>
                    <div className="text-xs font-bold text-neutral-800">
                      <span>{vehicle.gear}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[10px] uppercase font-bold text-neutral-400 mb-0.5">FUEL</span>
                    <div className="text-xs font-bold text-neutral-800">
                      <span>{vehicle.fuel}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[10px] uppercase font-bold text-neutral-400 mb-0.5">BAGS</span>
                    <div className="text-xs font-bold text-neutral-800">
                      <span>{vehicle.bags}</span>
                    </div>
                  </div>
                </div>

                {/* Bullet highlights */}
                {vehicle.highlights && vehicle.highlights.length > 0 && (
                  <div className="space-y-1 mb-4">
                    {vehicle.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-neutral-600 font-medium">
                        <span className="text-neutral-400 font-bold select-none">•</span>
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Service & Action Buttons */}
              <div className="pt-2 border-t border-neutral-100">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase">SERVICE</span>
                  <span className="font-extrabold text-emerald-600">Available For Rental</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    id={`specs-btn-${vehicle.id}`}
                    onClick={() => onOpenSpecs(vehicle)}
                    className="w-full bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 font-black text-xs uppercase py-2.5 rounded-lg tracking-wider transition-colors cursor-pointer text-center"
                  >
                    SPECS
                  </button>

                  <button
                    id={`whatsapp-btn-${vehicle.id}`}
                    onClick={() => handleWhatsAppBooking(vehicle)}
                    className="w-full flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs uppercase py-2.5 rounded-lg tracking-wider transition-colors cursor-pointer shadow-xs"
                  >
                    <span>WHATSAPP</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
