/* eslint-disable @typescript-eslint/no-explicit-any */
import { 
  Property as LibProperty, 
  fetchProperties, 
  PropertyCategory 
} from "@/lib/properties";
import { Property as PropertyType } from '@/types/agent'

export type Property = LibProperty;

export interface PropertySearchParams {
  search?: string;
  propertyType?: string;
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  minBathrooms?: number;
  page?: number;
  limit?: number;
  sort?: "price-asc" | "price-desc" | "newest" | "oldest";
}

export interface PropertySearchResult {
  properties: Property[];
  count: number;
  totalPages: number;
}

const hashCode = (s: string) => {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

export async function searchProperties(params: PropertySearchParams): Promise<PropertySearchResult> {
  const staticProperties = await fetchProperties();
  const agentProperties = getProperties();

  const mappedAgentProperties: Property[] = agentProperties.map((p: PropertyType) => ({
    id: hashCode(p.id),
    agent: 'Agent',
    category: ((p as any).type || 'residential').toLowerCase() as PropertyCategory,
    propertyType: (p as any).type || 'residential',
    title: p.title,
    price: p.price,
    period: 'month',
    location: p.location,
    address: p.location,
    city: 'Unknown',
    region: 'Unknown',
    bedrooms: p.bedrooms,
    bathrooms: p.bathrooms,
    area: p.squareFeet,
    imageUrl: p.images?.[0] || '/placeholder.jpg',
    garage: ((p as any).amenities?.includes('garage') || false),
    pool: ((p as any).amenities?.includes('pool') || false),
    features: {
      bedrooms: p.bedrooms,
      bathrooms: p.bathrooms,
      area: p.squareFeet,
      laundry: ((p as any).amenities?.includes('laundry') || false),
      gym: ((p as any).amenities?.includes('gym') || false),
    },
    images: p.images,
    interiorImages: p.images || [],
    listingType: 'rent',
    coverImage: p.images?.[0] || '/placeholder.jpg',
    description: p.description,
    rating: 5,
    reviews: 0,
    featured: false,
    isNew: 'true',
    tags: [],
    yearBuilt: new Date().getFullYear(),
    lotSize: p.squareFeet,
    views: 0,
    inquiries: 0,
    status: 'available',
    availabilityDate: new Date(),
    currency: 'USD',
    amenities: (p as any).amenities || [],
    nearbySchools: [],
    nearbyHospitals: [],
    nearbyRestaurants: [],
    transportation: 'Public transport nearby',
    floorPlan: {
      image: '',
      description: 'No floor plan available',
    },
    virtualTour: '',
  }));

  const allProperties = [...staticProperties, ...mappedAgentProperties];
  const uniqueProperties = Array.from(new Map(allProperties.map(p => [p.id, p])).values());

  // Filtering
  let filtered = uniqueProperties.filter((p) => {
    const matchesSearch =
      !params.search ||
      p.title.toLowerCase().includes(params.search.toLowerCase()) ||
      p.location.toLowerCase().includes(params.search.toLowerCase()) ||
      p.city.toLowerCase().includes(params.search.toLowerCase()) ||
      p.region.toLowerCase().includes(params.search.toLowerCase()) ||
      p.description.toLowerCase().includes(params.search.toLowerCase());

    const matchesType = !params.propertyType || p.propertyType.toLowerCase() === params.propertyType.toLowerCase();
    const matchesMinPrice = !params.minPrice || p.price >= params.minPrice;
    const matchesMaxPrice = !params.maxPrice || p.price <= params.maxPrice;
    const matchesMinBedrooms = !params.minBedrooms || p.bedrooms >= params.minBedrooms;
    const matchesMinBathrooms = !params.minBathrooms || p.bathrooms >= params.minBathrooms;

    return (
      matchesSearch &&
      matchesType &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesMinBedrooms &&
      matchesMinBathrooms
    );
  });

  // Sorting
  if (params.sort) {
    filtered = filtered.slice().sort((a, b) => {
      switch (params.sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "oldest":
          return a.id - b.id;
        case "newest":
        default:
          return b.id - a.id;
      }
    });
  }

  // Pagination
  const page = params.page ?? 1;
  const limit = params.limit ?? 6;
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = filtered.slice(start, end);

  return {
    properties: paginated,
    count: filtered.length,
    totalPages: Math.max(1, Math.ceil(filtered.length / limit)),
  };
}

export async function getPropertyById(id: number): Promise<Property | undefined> {
  const staticProperties = await fetchProperties();
  const agentProperties = getProperties();

  const mappedAgentProperties: Property[] = agentProperties.map((p: PropertyType) => ({
    id: hashCode(p.id),
    agent: 'Agent',
    category: ((p as any).type || 'residential').toLowerCase() as PropertyCategory,
    propertyType: (p as any).type || 'residential',
    title: p.title,
    price: p.price,
    period: 'month',
    location: p.location,
    address: p.location,
    city: 'Unknown',
    region: 'Unknown',
    bedrooms: p.bedrooms,
    bathrooms: p.bathrooms,
    area: p.squareFeet,
    imageUrl: p.images?.[0] || '/placeholder.jpg',
    garage: ((p as any).amenities?.includes('garage') || false),
    pool: ((p as any).amenities?.includes('pool') || false),
    features: {
      bedrooms: p.bedrooms,
      bathrooms: p.bathrooms,
      area: p.squareFeet,
      laundry: ((p as any).amenities?.includes('laundry') || false),
      gym: ((p as any).amenities?.includes('gym') || false),
    },
    images: p.images,
    interiorImages: p.images || [],
    listingType: 'rent',
    coverImage: p.images?.[0] || '/placeholder.jpg',
    description: p.description,
    rating: 5,
    reviews: 0,
    featured: false,
    isNew: 'true',
    tags: [],
    yearBuilt: new Date().getFullYear(),
    lotSize: p.squareFeet,
    views: 0,
    inquiries: 0,
    status: 'available',
    availabilityDate: new Date(),
    currency: 'USD',
    amenities: (p as any).amenities || [],
    nearbySchools: [],
    nearbyHospitals: [],
    nearbyRestaurants: [],
    transportation: 'Public transport nearby',
    floorPlan: {
      image: '',
      description: 'No floor plan available',
    },
    virtualTour: '',
  }));

  const allProperties = [...staticProperties, ...mappedAgentProperties];
  return allProperties.find((p) => p.id === id);
}

const isBrowser = () => typeof window !== 'undefined'

export const getProperties = (): PropertyType[] => {
  if (!isBrowser()) return []
  const propertiesJson = localStorage.getItem('properties')
  return propertiesJson ? JSON.parse(propertiesJson) : []
}

const saveProperties = (properties: PropertyType[]) => {
  if (!isBrowser()) return
  localStorage.setItem('properties', JSON.stringify(properties))
}

export const addProperty = (
  newProperty: Omit<
    PropertyType,
    'id' | 'agentId' | 'createdAt' | 'updatedAt' | 'views' | 'inquiries'
  >
): PropertyType => {
  const properties = getProperties()
  const property: PropertyType = {
    ...newProperty,
    id: new Date().toISOString(),
    agentId: 'mock-agent-id',
    createdAt: new Date(),
    updatedAt: new Date(),
    views: 0,
    inquiries: 0,
  }
  const updatedProperties = [...properties, property]
  saveProperties(updatedProperties)
  return property
}

export const propertyService = {
  getProperties,
  addProperty,
}