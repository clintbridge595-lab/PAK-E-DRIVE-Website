export type VehicleCategory = 'SEDAN' | 'SUV' | 'LUXURY' | 'VANS' | 'WEDDING' | 'BULLETPROOF';

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  categoryLabel?: string;
  subtitle: string;
  seats: number;
  gear: 'Auto' | 'Manual';
  fuel: 'Petrol' | 'Diesel' | 'Hybrid';
  bags: number;
  highlights: string[];
  image: string;
  isBulletproof?: boolean;
  armorLevel?: string;
  imagesByAngle?: {
    front: string;
    side: string;
    threeQuarter: string;
    rear?: string;
    interior: string;
  };
  rates: {
    tenHoursCity: string;
    intercityPerKm: string;
    dailyOrEvent?: string;
  };
  specs: {
    engine: string;
    transmission: string;
    acType: string;
    seatingLayout: string;
    luggageSpace: string;
    entertainment: string;
    safetyFeatures: string[];
  };
}

export interface RouteRateItem {
  destination: string;
  price: string;
  distance?: string;
  time?: string;
}

export interface FixedCityRouteGroup {
  id: string;
  vehicleName: string;
  vehicleBadge: string;
  origin: string;
  image: string;
  rates: RouteRateItem[];
}

export interface RouteItem {
  id: string;
  name: string;
  highwayCode: string;
  highwayName: string;
  distance: string;
  duration: string;
  overview: string;
  waypoints: string[];
  recommendedVehicles: string;
  image: string;
  quoteRate: string;
  origin?: string;
  destination?: string;
  fixedPrice?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  startingPrice: string;
  suitableVehicles?: {
    name: string;
    tag: string;
    image: string;
  }[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  vehicle: string;
  rating: number;
  quote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
