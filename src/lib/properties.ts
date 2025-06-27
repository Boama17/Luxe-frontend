// Types for our property data

import one from "../../public/house1.jpg";
import two from "../../public/house2.jpg";
import three from "../../public/house3.jpg";
import four from "../../public/house4.jpg";
import five from "../../public/house5.jpg";
import six from "../../public/house6.jpg";
import seven from "../../public/house7.jpg";
import eight from "../../public/house8.jpg";
import nine from "../../public/house9.jpg";
import ten from "../../public/house10.jpg";
import eleven from "../../public/house11.jpg";
import twelve from "../../public/house12.jpg";

export interface Property {
  isNew: string;
  rating: number;
  address: string;
  id: number;
  title: string;
  agent: string;
  views: number;
  inquiries: number;
  price: number;
  status: string;
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
  listingType: "rent" | "sale"; // New field to distinguish rent vs sale
}

// Mock data with realistic Ghana rental and sale prices
const Properties: Property[] = [
  {
    id: 1,
    title: "Modern Family House",
    price: 8500, // Monthly rent
    currency: "GHS",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    location: "East Legon",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: one.src,
    description: "Beautiful modern house in prestigious East Legon with contemporary finishes",
    propertyType: "House",
    address: "East Legon, Accra, Greater Accra",
    rating: 4.7,
    isNew: "New",
    status: "active",
    agent: "Abena Realty",
    views: 115,
    inquiries: 10,
    listingType: "rent"
  },
  {
    id: 2,
    title: "Executive Villa",
    price: 2500000, // Sale price
    currency: "GHS",
    bedrooms: 5,
    bathrooms: 4,
    area: 3200,
    location: "Airport Residential",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: two.src,
    description: "Luxury villa near Kotoka International Airport with premium amenities",
    propertyType: "Villa",
    address: "Airport Residential, Accra, Greater Accra",
    rating: 4.9,
    isNew: "Featured",
    status: "active",
    agent: "Kwame Estates",
    views: 210,
    inquiries: 17,
    listingType: "sale"
  },
  {
    id: 3,
    title: "Family Residence",
    price: 3200, // Monthly rent
    currency: "GHS",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    location: "Tema Community 25",
    city: "Tema",
    region: "Greater Accra",
    imageUrl: three.src,
    description: "Comfortable family home in quiet neighborhood with garden space",
    propertyType: "House",
    address: "Tema Community 25, Tema, Greater Accra",
    rating: 4.3,
    isNew: "Featured",
    status: "active",
    agent: "Nana Homes",
    views: 98,
    inquiries: 6,
    listingType: "rent"
  },
  {
    id: 4,
    title: "Contemporary House",
    price: 12000, // Monthly rent
    currency: "GHS",
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    location: "Trasacco Estate",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: four.src,
    description: "Modern house in exclusive gated community with 24/7 security",
    propertyType: "House",
    address: "Trasacco Estate, Accra, Greater Accra",
    rating: 4.8,
    isNew: "Featured",
    status: "active",
    agent: "Esi Realty",
    views: 190,
    inquiries: 14,
    listingType: "rent"
  },
  {
    id: 5,
    title: "Spacious Villa",
    price: 4200000, // Sale price
    currency: "GHS",
    bedrooms: 6,
    bathrooms: 5,
    area: 4000,
    location: "Roman Ridge",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: five.src,
    description: "Large villa with swimming pool, garden, and panoramic city views",
    propertyType: "Villa",
    address: "Roman Ridge, Accra, Greater Accra",
    rating: 4.6,
    isNew: "New",
    status: "active",
    agent: "Legacy Properties",
    views: 232,
    inquiries: 19,
    listingType: "sale"
  },
  {
    id: 6,
    title: "Cozy Family Home",
    price: 2800, // Monthly rent
    currency: "GHS",
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    location: "Adenta Housing Down",
    city: "Adenta",
    region: "Greater Accra",
    imageUrl: six.src,
    description: "Affordable family home with modern amenities and parking space",
    propertyType: "House",
    address: "Adenta Housing Down, Adenta, Greater Accra",
    rating: 4.1,
    isNew: "New",
    status: "active",
    agent: "Mansa Realty",
    views: 87,
    inquiries: 5,
    listingType: "rent"
  },
  {
    id: 7,
    title: "Luxury Townhouse",
    price: 10500, // Monthly rent
    currency: "GHS",
    bedrooms: 4,
    bathrooms: 4,
    area: 2900,
    location: "Cantonments",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: seven.src,
    description: "Elegant townhouse in prime Cantonments location with rooftop terrace",
    propertyType: "Townhouse",
    address: "Cantonments, Accra, Greater Accra",
    rating: 4.5,
    isNew: "New",
    status: "active",
    agent: "Obaapa Homes",
    views: 176,
    inquiries: 13,
    listingType: "rent"
  },
  {
    id: 8,
    title: "Garden View Estate",
    price: 950000, // Sale price
    currency: "GHS",
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    location: "Spintex Road",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: eight.src,
    description: "Modern home with beautiful garden views and open-plan living",
    propertyType: "Estate",
    address: "Spintex Road, Accra, Greater Accra",
    rating: 4.2,
    isNew: "Featured",
    status: "active",
    agent: "Yaw Properties",
    views: 154,
    inquiries: 11,
    listingType: "sale"
  },
  {
    id: 9,
    title: "Executive Duplex",
    price: 9200, // Monthly rent
    currency: "GHS",
    bedrooms: 5,
    bathrooms: 4,
    area: 3500,
    location: "Dzorwulu",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: nine.src,
    description: "Sophisticated duplex with study room and domestic quarters",
    propertyType: "Duplex",
    address: "Dzorwulu, Accra, Greater Accra",
    rating: 4.9,
    isNew: "New",
    status: "active",
    agent: "Efua Estates",
    views: 220,
    inquiries: 18,
    listingType: "rent"
  },
  {
    id: 10,
    title: "Coastal Retreat",
    price: 2500, // Monthly rent
    currency: "GHS",
    bedrooms: 3,
    bathrooms: 2,
    area: 2000,
    location: "Nungua",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: ten.src,
    description: "Serene home near the coast with sea breeze and tropical landscaping",
    propertyType: "House",
    address: "Nungua, Accra, Greater Accra",
    rating: 3.8,
    isNew: "Featured",
    status: "active",
    agent: "Amma Homes",
    views: 142,
    inquiries: 9,
    listingType: "rent"
  },
  {
    id: 11,
    title: "Hilltop Mansion",
    price: 6500000, // Sale price
    currency: "GHS",
    bedrooms: 7,
    bathrooms: 6,
    area: 5200,
    location: "Peduase",
    city: "Aburi",
    region: "Eastern Region",
    imageUrl: eleven.src,
    description: "Magnificent mansion with breathtaking mountain views and wine cellar",
    propertyType: "Mansion",
    address: "Peduase, Aburi, Eastern Region",
    rating: 4.6,
    isNew: "New",
    status: "active",
    agent: "Elite Estates",
    views: 305,
    inquiries: 25,
    listingType: "sale"
  },
  {
    id: 12,
    title: "Urban Loft",
    price: 4500, // Monthly rent
    currency: "GHS",
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    location: "Osu",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: twelve.src,
    description: "Trendy loft apartment in vibrant Osu with high ceilings and modern fixtures",
    propertyType: "Loft",
    address: "Osu, Accra, Greater Accra",
    rating: 4.0,
    isNew: "Featured",
    status: "active",
    agent: "Kojo Realty",
    views: 130,
    inquiries: 8,
    listingType: "rent"
  },
];

// Simulate API call with loading time
export async function fetchProperties(): Promise<Property[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In a real app, this would be:
  // const response = await fetch('https://api.meqasa.com/properties');
  // return response.json();

  return Properties;
}

// Get property by ID
export async function getPropertyById(id: number): Promise<Property | null> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  const property = Properties.find(p => p.id === id);
  return property || null;
}

// Format price based on listing type
export function formatPrice(price: number, currency = "GHS", listingType: "rent" | "sale" = "sale"): string {
  const formattedPrice = `₵${price.toLocaleString()}`;
  
  if (listingType === "rent") {
    return `${formattedPrice}/month`;
  }
  
  return formattedPrice;
}

// Get properties by listing type
export function getPropertiesByType(properties: Property[], type: "rent" | "sale"): Property[] {
  return properties.filter(property => property.listingType === type);
}

// Get rent range for filtering
export function getRentRange(): { min: number; max: number } {
  const rentProperties = Properties.filter(p => p.listingType === "rent");
  const prices = rentProperties.map(p => p.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
}

// Get sale range for filtering
export function getSaleRange(): { min: number; max: number } {
  const saleProperties = Properties.filter(p => p.listingType === "sale");
  const prices = saleProperties.map(p => p.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
}