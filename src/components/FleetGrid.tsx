import React, { useState, useMemo } from 'react';
import { FLEET_VEHICLES } from '../data/fleetData';
import { Vehicle, VehicleCategory } from '../types';
import { openWhatsApp } from '../utils/whatsapp';
import { ArrowRight, Search, X, RotateCcw } from 'lucide-react';

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

  const quickCategoryFilters = [
    { label: 'SUV', query: 'SUV' },
    { label: 'Sedan', query: 'Sedan' },
    { label: 'Bulletproof', query: 'Bulletproof' },
    { label: 'Luxury', query: 'Luxury' },
    { label: 'Vans', query: 'Vans' },
    { label: 'Wedding', query: 'Wedding' },
  ];

  const filteredVehicles = useMemo(() => {
    let list = [...FLEET_VEHICLES];

    // Filter by explicit tab selection
    if (selectedCategory !== 'ALL') {
      list = list.filter((v) => v.category === (selectedCategory as VehicleCategory));
    } else {
      // In ALL mode, prioritize commercial Pak E Drive cars first
      const commercial = list.filter((v) => !v.isBulletproof);
      const bulletproof = list.filter((v) => v.isBulletproof);
      list = [...commercial, ...bulletproof];
    }

    // Client-side search filter that allows finding vehicles by category (e.g. 'SUV', 'Sedan', 'Bulletproof') as well as name/specs
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();

      // Category semantic aliases mapping
      const isSuvQuery = q === 'suv' || q === 'suvs' || q === '4x4' || q === 'crossover';
      const isSedanQuery = q === 'sedan' || q === 'sedans' || q === 'saloon';
      const isBulletproofQuery =
        q.includes('bullet') ||
        q.includes('armored') ||
        q.includes('armour') ||
        q.includes('b6') ||
        q.includes('ballistic');
      const isLuxuryQuery = q === 'luxury' || q === 'executive' || q === 'vip';
      const isVanQuery = q === 'van' || q === 'vans' || q === 'mpv' || q === 'cabin' || q === 'hiace';
      const isWeddingQuery = q.includes('wed') || q.includes('barat') || q.includes('groom') || q.includes('convertible');

      list = list.filter((v) => {
        const cat = v.category.toLowerCase();
        const catLabel = (v.categoryLabel || '').toLowerCase();
        const name = v.name.toLowerCase();
        const subtitle = v.subtitle.toLowerCase();
        const fuel = v.fuel.toLowerCase();
        const gear = v.gear.toLowerCase();

        // Direct text match on vehicle properties
        if (
          name.includes(q) ||
          subtitle.includes(q) ||
          cat.includes(q) ||
          catLabel.includes(q) ||
          fuel.includes(q) ||
          gear.includes(q)
        ) {
          return true;
        }

        // Category-specific semantic matches
        if (isSuvQuery && (v.category === 'SUV' || catLabel.includes('suv'))) return true;
        if (isSedanQuery && (v.category === 'SEDAN' || catLabel.includes('sedan'))) return true;
        if (
          isBulletproofQuery &&
          (v.isBulletproof || v.category === 'BULLETPROOF' || catLabel.includes('bulletproof') || catLabel.includes('b6'))
        ) {
          return true;
        }
        if (isLuxuryQuery && (v.category === 'LUXURY' || catLabel.includes('luxury'))) return true;
        if (isVanQuery && (v.category === 'VANS' || catLabel.includes('van'))) return true;
        if (isWeddingQuery && (v.category === 'WEDDING' || catLabel.includes('wedding'))) return true;

        return false;
      });
    }

    if (sortBy === 'seats') {
      list.sort((a, b) => b.seats - a.seats);
    } else if (sortBy === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    // When the user is actively searching or filtering by category, don't truncate matching results
    const isActivelyFiltering = selectedCategory !== 'ALL' || searchQuery.trim().length > 0;
    if (!isActivelyFiltering && limit && limit > 0) {
      list = list.slice(0, limit);
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy, limit]);

  const handleBookNow = (vehicle: Vehicle) => {
    openWhatsApp(
      `Assalam-o-Alaikum PAK E DRIVE, I would like to book the ${vehicle.name} (${vehicle.category}) with chauffeur. Please share availability and confirm the booking.`
    );
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('ALL');
  };

  const handleQuickCategoryClick = (categoryQuery: string) => {
    setSearchQuery(categoryQuery);
    setSelectedCategory('ALL');
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
        className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-4"
      >
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id && !searchQuery;
            return (
              <button
                key={cat.id}
                id={`filter-tab-${cat.id.toLowerCase()}`}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSearchQuery('');
                }}
                className={`text-xs font-bold px-3.5 py-2 rounded-[7px] tracking-normal transition-colors cursor-pointer ${
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

        {/* Client-side Search Filter by Category & Name */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              id="fleet-category-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search category (e.g. 'SUV', 'Sedan', 'Bulletproof')..."
              className="w-full pl-8 pr-7 py-2 text-xs font-medium bg-white border border-[#E5E5E5] rounded-[7px] focus:outline-hidden focus:border-[#3ca19a] text-[#111111] placeholder:text-neutral-400 font-sans"
            />
            <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 p-0.5 cursor-pointer"
                title="Clear search"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {showSearchAndSort && (
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-bold tracking-wide bg-white border border-[#E5E5E5] rounded-[7px] px-3 py-2 text-[#222222] cursor-pointer focus:outline-hidden font-sans"
            >
              <option value="featured">Featured Order</option>
              <option value="seats">Seat Capacity (High to Low)</option>
              <option value="name">Vehicle Name (A-Z)</option>
            </select>
          )}
        </div>
      </div>

      {/* Quick Category Chips & Active Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-8 text-xs font-sans font-normal border-b border-[#E5E5E5] pb-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-semibold text-neutral-500">Quick Filter:</span>
          {quickCategoryFilters.map((qf) => {
            const isSelected = searchQuery.toLowerCase() === qf.query.toLowerCase();
            return (
              <button
                key={qf.query}
                onClick={() => handleQuickCategoryClick(qf.query)}
                className={`px-2.5 py-1 rounded-[5px] text-[11px] font-semibold transition-colors cursor-pointer border ${
                  isSelected
                    ? 'bg-[#3ca19a] text-white border-[#3ca19a]'
                    : 'bg-white hover:bg-neutral-100 text-neutral-700 border-neutral-200'
                }`}
              >
                {qf.label}
              </button>
            );
          })}

          {(searchQuery || selectedCategory !== 'ALL') && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[5px] text-[11px] font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors cursor-pointer border border-red-200 ml-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>

        <span className="text-[11px] font-medium text-neutral-600">
          Showing <strong>{filteredVehicles.length}</strong> {filteredVehicles.length === 1 ? 'vehicle' : 'vehicles'}
          {searchQuery && ` for "${searchQuery}"`}
          {selectedCategory !== 'ALL' && !searchQuery && ` in ${categories.find(c => c.id === selectedCategory)?.label}`}
        </span>
      </div>

      {/* Empty State when no results found */}
      {filteredVehicles.length === 0 && (
        <div className="text-center py-16 bg-neutral-50 rounded-xl border border-[#E5E5E5] my-6 font-sans">
          <h4 className="text-base font-bold text-neutral-900 mb-1">No vehicles found</h4>
          <p className="text-xs text-neutral-600 max-w-md mx-auto mb-4">
            No vehicles match your search criteria. Try filtering by categories like 'SUV', 'Sedan', or 'Bulletproof'.
          </p>
          <button
            onClick={handleResetFilters}
            className="inline-flex items-center gap-1.5 bg-[#3ca19a] hover:bg-[#328e88] text-white text-xs font-bold px-4 py-2 rounded-[7px] transition-colors cursor-pointer shadow-xs"
          >
            Show All Vehicles
          </button>
        </div>
      )}

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

              {/* Header Bar matching Book Now color #3ca19a */}
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
