// pages/api/properties.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { PropertySearchParams } from '../../services/propertyService';
import house1 from '../../public/house1.jpg';
import house2 from '../../public/house2.jpg';
import house3 from '../../public/house3.jpg';

// Mock database of properties
export const properties = [
  {
    id: 1,
    title: 'Modern Family House',
    price: 450000,
    address: '123 Maple Avenue, Springfield',
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    propertyType: 'House',
    yearBuilt: 2010,
    description: 'A beautiful modern family home with spacious interiors and a well-maintained garden.',
    features: [
      'Open floor plan',
      'Hardwood floors',
      'Stainless steel appliances',
      'Attached garage',
      'Energy-efficient'
    ],
    location: {
      lat: 40.7128,
      lng: -74.0060
    },
    images: [house1, house2, house3]
  },
  {
    id: 2,
    title: 'Luxury Downtown Apartment',
    price: 750000,
    address: '456 Urban Street, Metropolis',
    bedrooms: 2,
    bathrooms: 2,
    area: 1800,
    propertyType: 'Apartment',
    yearBuilt: 2018,
    description: 'Stunning downtown apartment with panoramic city views and high-end amenities.',
    features: [
      'Balcony',
      'Floor-to-ceiling windows',
      'Gym access',
      'Doorman',
      'Smart home technology'
    ],
    location: {
      lat: 40.7589,
      lng: -73.9851
    },
    images: [house2, house1]
  },
  {
    id: 3,
    title: 'Suburban Retreat',
    price: 550000,
    address: '789 Green Lane, Suburbia',
    bedrooms: 3,
    bathrooms: 2,
    area: 2200,
    propertyType: 'House',
    yearBuilt: 2005,
    description: 'Peaceful suburban home with a large backyard and excellent school district.',
    features: [
      'Large backyard',
      'Deck',
      'Finished basement',
      'Quiet neighborhood',
      'Near schools'
    ],
    location: {
      lat: 40.7282,
      lng: -73.7949
    },
    images: [house3, house1]
  }
];

export default function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { 
      search, 
      propertyType, 
      minPrice, 
      maxPrice, 
      minBedrooms, 
      minBathrooms, 
      page = 1, 
      limit = 10 
    } = req.query;

    // Filter properties based on search parameters
    let filteredProperties = properties.filter(property => {
      // Search by title or address
      if (search && search !== '') {
        const searchTerm = (search as string).toLowerCase();
        if (!property.title.toLowerCase().includes(searchTerm) && 
            !property.address.toLowerCase().includes(searchTerm)) {
          return false;
        }
      }

      // Filter by property type
      if (propertyType && propertyType !== '') {
        if (property.propertyType !== propertyType) {
          return false;
        }
      }

      // Filter by price range
      if (minPrice && parseInt(minPrice as string) > property.price) {
        return false;
      }
      if (maxPrice && parseInt(maxPrice as string) < property.price) {
        return false;
      }

      // Filter by minimum bedrooms
      if (minBedrooms && parseInt(minBedrooms as string) > property.bedrooms) {
        return false;
      }

      // Filter by minimum bathrooms
      if (minBathrooms && parseInt(minBathrooms as string) > property.bathrooms) {
        return false;
      }

      return true;
    });

    // Pagination
    const pageNumber = parseInt(page as string);
    const limitNumber = parseInt(limit as string);
    const startIndex = (pageNumber - 1) * limitNumber;
    const endIndex = pageNumber * limitNumber;

    const paginatedProperties = filteredProperties.slice(startIndex, endIndex);

    res.status(200).json({
      properties: paginatedProperties,
      totalProperties: filteredProperties.length,
      currentPage: pageNumber,
      totalPages: Math.ceil(filteredProperties.length / limitNumber)
    });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}