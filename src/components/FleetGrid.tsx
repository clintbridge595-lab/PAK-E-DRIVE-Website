import React, { useState, useMemo } from 'react';
import { FLEET_VEHICLES } from '../data/fleetData';
import { Vehicle, VehicleCategory } from '../types';
import { openWhatsApp } from '../utils/whatsapp';
import { ArrowRight } from 'lucide-react';

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
    { id: 'ALL', label: showSearchAndSort ? 'All Cars' : 'All Vehicles' },
    { id: 'SEDAN', label: 'Sedans' },
    { id: 'SUV', label: 'SUVs' },
    { id: 'LUXURY', label: 'Luxury' },
    { id: 'VANS', label: 'Vans' },
    { id: 'WEDDING', label: 'Wedding' },
    { id: 'BULLETPROOF', label: 'Bulletproof B6+' },
  ];

  const filteredVehicles = useMemo(() => {
    let list = [...FLEET_VEHICLES];

    if (selectedCategory !== 'ALL') {
      list = list.filter((v) => v.category === (selectedCategory as VehicleCategory));
    } else {
      // In ALL preview mode, prioritize commercial Pak E Drive cars first
      const commercial = list.filter((v) => !v.isBulletproof);
      const bulletproof = list.filter((v) => v.isBulletproof);
      list = [...commercial, ...bulletproof];
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

  const handleBookNow = (vehicle: Vehicle) => {
    openWhatsApp(
      `Assalam-o-Alaikum PAK E DRIVE, I would like to book the ${vehicle.name} (${vehicle.category}) with chauffeur. Please share availability and confirm the booking.`
    );
  };

  return (
    <section 
      id="fleet-rates-grid-section" 
      style={{
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic',
        fontWeight: 'bold',
      }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
    >
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '30px',
              backgroundColor: '#ffffff',
              color: '#4d7a7d',
            }}
            className="tracking-tight"
          >
            {showSearchAndSort ? 'Our Vehicle Collection & Rates' : 'Our Verified Fleet & Transparent Rates'}
          </h2>
          <p 
            style={{
              fontSize: '12px',
              fontWeight: 'normal',
            }}
            className="text-neutral-600 mt-1.5 max-w-2xl"
          >
            Every vehicle is mechanically tested before dispatch, immaculately sanitized, and operated by seasoned licensed chauffeurs.
          </p>
        </div>

        {onViewAllFleet && (
          <button
            onClick={onViewAllFleet}
            style={{
              fontFamily: 'Times New Roman, serif',
              fontSize: '11px',
            }}
            className="inline-flex items-center gap-1.5 font-bold text-[#111111] hover:text-[#3ca19a] bg-white hover:bg-neutral-50 border border-[#E5E5E5] px-4 py-2.5 rounded-[7px] transition-colors self-start md:self-auto cursor-pointer shadow-2xs"
          >
            <span>View All Fleet</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Filter Tabs & Search Bar */}
      <div 
        style={{
          fontFamily: 'Times New Roman, serif',
          fontSize: '15px',
        }}
        className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8"
      >
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`filter-tab-${cat.id.toLowerCase()}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-bold px-4 py-2 rounded-[7px] tracking-normal transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#3ca19a] text-white shadow-xs'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-[#222222]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search & Sort if enabled */}
        {showSearchAndSort && (
          <div className="flex flex-col sm:flex-row items-center gap-2.5">
            <div className="relative w-full sm:w-60">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Fortuner, Prado, V8..."
                className="w-full px-3 py-2 text-xs font-medium bg-white border border-[#E5E5E5] rounded-[7px] focus:outline-hidden focus:border-[#3ca19a]"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-bold tracking-wide bg-white border border-[#E5E5E5] rounded-[7px] px-3 py-2 text-[#222222] cursor-pointer focus:outline-hidden"
            >
              <option value="featured">Featured Order</option>
              <option value="seats">Seat Capacity (High to Low)</option>
              <option value="name">Vehicle Name (A-Z)</option>
            </select>
          </div>
        )}
      </div>

      {/* Grid of Vehicle Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredVehicles.map((vehicle) => {
          const displayPrice = vehicle.rates?.tenHoursCity || 'Custom Quote';

          return (
            <div
              key={vehicle.id}
              id={`vehicle-card-${vehicle.id}`}
              className="bg-white rounded-xl border border-[#E5E5E5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group font-sans"
            >
              {/* Car image on top */}
              <div className="relative h-52 sm:h-56 w-full bg-neutral-100 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Header Bar matching Book Now color #3ca19a - Category span removed as requested in Selector 2 */}
              <div className="bg-[#3ca19a] text-white px-4 py-2.5 flex items-center justify-between">
                <h3 
                  style={{
                    fontFamily: 'Times New Roman, serif',
                    fontSize: '15px',
                    color: '#000000',
                  }}
                  className="font-bold tracking-tight truncate"
                >
                  {vehicle.name}
                </h3>
              </div>

              {/* Content Area */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                {/* 2x2 grid of specs - Icons removed 100% as requested */}
                <div className="grid grid-cols-2 gap-3 py-3 border-b border-[#E5E5E5] text-xs">
                  {/* Seats */}
                  <div>
                    <span className="text-[10px] uppercase text-neutral-500 font-semibold block">Seats</span>
                    <span className="font-bold text-[#111111]">{vehicle.seats} Seats</span>
                  </div>

                  {/* Gear */}
                  <div>
                    <span className="text-[10px] uppercase text-neutral-500 font-semibold block">Gear</span>
                    <span className="font-bold text-[#111111]">{vehicle.gear}</span>
                  </div>

                  {/* Fuel */}
                  <div>
                    <span className="text-[10px] uppercase text-neutral-500 font-semibold block">Fuel</span>
                    <span className="font-bold text-[#111111]">{vehicle.fuel}</span>
                  </div>

                  {/* Capacity / Bags */}
                  <div>
                    <span className="text-[10px] uppercase text-neutral-500 font-semibold block">Luggage</span>
                    <span className="font-bold text-[#111111]">{vehicle.bags} Bags</span>
                  </div>
                </div>

                {/* Subtitle / Key Highlights */}
                <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed font-normal">
                  {vehicle.subtitle}
                </p>

                {/* Price & Book Now button */}
                <div className="pt-2 border-t border-[#E5E5E5] flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-500 block">
                      Daily Rate (Chauffeur)
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-[#111111]">
                      {displayPrice}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      id={`specs-btn-${vehicle.id}`}
                      onClick={() => onOpenSpecs(vehicle)}
                      className="bg-white hover:bg-neutral-100 text-[#222222] border border-[#E5E5E5] text-xs font-semibold px-3 py-2.5 rounded-[7px] transition-colors cursor-pointer"
                    >
                      Specs
                    </button>
                    <button
                      id={`book-now-btn-${vehicle.id}`}
                      onClick={() => handleBookNow(vehicle)}
                      style={{ backgroundColor: '#3ca19a' }}
                      className="hover:bg-[#328e88] text-white font-bold text-xs px-4 py-2.5 rounded-[7px] transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
