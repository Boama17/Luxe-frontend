// services/propertyService.ts

import { StaticImageData } from 'next/image';

export interface Property {
    id: number;
    title: string;
    price: number;
    address: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    propertyType: string;
    yearBuilt: number;
    description: string;
    features: string[];
    location: {
      lat: number;
      lng: number;
    };
    images: (string | StaticImageData);
  }
  
  export interface PropertySearchParams {
    search?: string;
    propertyType?: string;
    minPrice?: number;
    maxPrice?: number;
    minBedrooms?: number;
    minBathrooms?: number;
    page?: number;
    limit?: number;
  }
  
  export interface PropertySearchResult {
    count(count: any): import("react").SetStateAction<number>;
    properties: Property[];
    totalProperties: number;
    currentPage: number;
    totalPages: number;
  }
  
  export interface PropertyResponse {
    id: number;
    title: string;
    price: number;
    address: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    propertyType: string;
    yearBuilt: number;
    description: string;
    features: string[];
    location: {
      lat: number;
      lng: number;
    };
    images: string[];
  }
  
  export async function searchProperties(params: PropertySearchParams): Promise<PropertySearchResult> {
    // Convert params to query string
    const queryParams = new URLSearchParams();
    
    if (params.search) queryParams.append('search', params.search);
    if (params.propertyType) queryParams.append('propertyType', params.propertyType);
    if (params.minPrice) queryParams.append('minPrice', params.minPrice.toString());
    if (params.maxPrice) queryParams.append('maxPrice', params.maxPrice.toString());
    if (params.minBedrooms) queryParams.append('minBedrooms', params.minBedrooms.toString());
    if (params.minBathrooms) queryParams.append('minBathrooms', params.minBathrooms.toString());
    if (params.page) queryParams.append('page', params.page.toString());
    if (params.limit) queryParams.append('limit', params.limit.toString());
  
    const response = await fetch(`/api/properties?${queryParams.toString()}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch properties');
    }
  
    return response.json();
  }
  
  export async function getPropertyById(id: number): Promise<PropertyResponse> {
    const response = await fetch(`/api/properties/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch property details');
    }
  
    return response.json();
  }