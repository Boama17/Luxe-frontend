// Types for our property data

import one from "../../public/house1.jpg"
import two from "../../public/house2.jpg"
import three from "../../public/house3.jpg"



import { ReactNode } from "react"

export interface Property {
  address: ReactNode;
  id: number;
  title: string;
  price: number;
  currency: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  location: string;
  city: string;
  region: string;
  imageUrl: string;
  description: string;
  propertyType: string;
}

// Mock data with real Ghana locations and realistic prices
const Properties: Property[] = [
  {
    id: 1,
    title: "Modern Family House",
    price: 450000,
    currency: "GHS",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    location: "East Legon",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // Ghana house
    description: "Beautiful modern house in prestigious East Legon with contemporary finishes",
    propertyType: "House",
    address: undefined
  },
  {
    id: 2,
    title: "Executive Villa",
    price: 680000,
    currency: "GHS",
    bedrooms: 5,
    bathrooms: 4,
    area: 3200,
    location: "Airport Residential",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", // Villa exterior
    description: "Luxury villa near Kotoka International Airport with premium amenities",
    propertyType: "Villa",
    address: undefined
  },
  {
    id: 3,
    title: "Family Residence",
    price: 320000,
    currency: "GHS",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    location: "Tema Community 25",
    city: "Tema",
    region: "Greater Accra",
    imageUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80", // Family home
    description: "Comfortable family home in quiet neighborhood with garden space",
    propertyType: "House",
    address: undefined
  },
  {
    id: 4,
    title: "Contemporary House",
    price: 520000,
    currency: "GHS",
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    location: "Trasacco Estate",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80", // Modern house
    description: "Modern house in exclusive gated community with 24/7 security",
    propertyType: "House",
    address: undefined
  },
  {
    id: 5,
    title: "Spacious Villa",
    price: 750000,
    currency: "GHS",
    bedrooms: 6,
    bathrooms: 5,
    area: 4000,
    location: "Roman Ridge",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80", // Villa with pool
    description: "Large villa with swimming pool, garden, and panoramic city views",
    propertyType: "Villa",
    address: undefined
  },
  {
    id: 6,
    title: "Cozy Family Home",
    price: 280000,
    currency: "GHS",
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    location: "Adenta Housing Down",
    city: "Adenta",
    region: "Greater Accra",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80", // Cozy home
    description: "Affordable family home with modern amenities and parking space",
    propertyType: "House",
    address: undefined
  },
  {
    id: 7,
    title: "Luxury Townhouse",
    price: 580000,
    currency: "GHS",
    bedrooms: 4,
    bathrooms: 4,
    area: 2900,
    location: "Cantonments",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: "https://images.unsplash.com/photo-1503389152951-9c3d8b6e9c94?auto=format&fit=crop&w=800&q=80", // Townhouse
    description: "Elegant townhouse in prime Cantonments location with rooftop terrace",
    propertyType: "Townhouse",
    address: undefined
  },
  {
    id: 8,
    title: "Garden View Estate",
    price: 390000,
    currency: "GHS",
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    location: "Spintex Road",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: one.src,
    description: "Modern home with beautiful garden views and open-plan living",
    propertyType: "Estate",
    address: undefined
  },
  {
    id: 9,
    title: "Executive Duplex",
    price: 650000,
    currency: "GHS",
    bedrooms: 5,
    bathrooms: 4,
    area: 3500,
    location: "Dzorwulu",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=800&q=80", // Duplex
    description: "Sophisticated duplex with study room and domestic quarters",
    propertyType: "Duplex",
    address: undefined
  },
  {
    id: 10,
    title: "Coastal Retreat",
    price: 420000,
    currency: "GHS",
    bedrooms: 3,
    bathrooms: 2,
    area: 2000,
    location: "Nungua",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: three.src,
    description: "Serene home near the coast with sea breeze and tropical landscaping",
    propertyType: "House",
    address: undefined
  },
  {
    id: 11,
    title: "Hilltop Mansion",
    price: 980000,
    currency: "GHS",
    bedrooms: 7,
    bathrooms: 6,
    area: 5200,
    location: "Peduase",
    city: "Aburi",
    region: "Eastern Region",
    imageUrl: "https://images.unsplash.com/photo-1512918728675-2d3ec7ab9433?auto=format&fit=crop&w=800&q=80",
    description: "Magnificent mansion with breathtaking mountain views and wine cellar",
    propertyType: "Mansion",
    address: undefined
  },
  {
    id: 12,
    title: "Urban Loft",
    price: 350000,
    currency: "GHS",
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    location: "Osu",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: two.src, 
    description: "Trendy loft apartment in vibrant Osu with high ceilings and modern fixtures",
    propertyType: "Loft",
    address: undefined
  },
]

// Simulate API call with loading time
export async function fetchProperties(): Promise<Property[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real app, this would be:
  // const response = await fetch('https://api.meqasa.com/properties');
  // return response.json();

  return Properties
}

// Format price in Ghana Cedis
export function formatPrice(price: number, currency = "GHS"): string {
  if (currency === "GHS") {
    return `₵${price.toLocaleString()}`
  }
  return `${currency} ${price.toLocaleString()}`
}