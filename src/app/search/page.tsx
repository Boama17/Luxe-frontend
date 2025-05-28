"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter, useSearchParams, usePathname } from 'next/navigation'; // Updated import
import { Search, Home, ArrowRight, ChevronLeft, ChevronRight, X, MapPin, Briefcase, DollarSign, User } from 'lucide-react';
import { searchProperties, PropertySearchParams, PropertyResponse, Property } from '../services/propertyService';

export default function SearchResults() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState<Property[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState<PropertySearchParams>({
    search: '',
    propertyType: '',
    minPrice: 0,
    maxPrice: 10000000,
    minBedrooms: 0,
    minBathrooms: 0,
  });
  const [showFilters, setShowFilters] = useState(false);

  // Parse query params on mount and when URL changes
  useEffect(() => {
    const newFilters: PropertySearchParams = {
      search: searchParams.get('search') || '',
      propertyType: searchParams.get('propertyType') || '',
      minPrice: searchParams.get('minPrice') ? parseInt(searchParams.get('minPrice')!) : 0,
      maxPrice: searchParams.get('maxPrice') ? parseInt(searchParams.get('maxPrice')!) : 10000000,
      minBedrooms: searchParams.get('minBedrooms') ? parseInt(searchParams.get('minBedrooms')!) : 0,
      minBathrooms: searchParams.get('minBathrooms') ? parseInt(searchParams.get('minBathrooms')!) : 0,
    };
    
    setFilters(newFilters);
    setCurrentPage(searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1);
  }, [searchParams]);

  // Fetch properties when filters or page changes
  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const searchParams: PropertySearchParams = {
          ...filters,
          page: currentPage,
          limit: 6,
        };
        
        const response = await searchProperties(searchParams);
        setProperties(response.properties);
        setTotalCount(Number(response.count));
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error('Error fetching properties', error);
        setProperties([]);
        setTotalCount(0);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [filters, currentPage]);

  // Update search parameters in URL
  const updateSearchParams = (newFilters: PropertySearchParams) => {
    const params = new URLSearchParams();
    
    if (newFilters.search) params.set('search', newFilters.search);
    if (newFilters.propertyType) params.set('propertyType', newFilters.propertyType);
    if (newFilters.minPrice && newFilters.minPrice > 0) params.set('minPrice', newFilters.minPrice.toString());
    if (newFilters.maxPrice && newFilters.maxPrice < 10000000) params.set('maxPrice', newFilters.maxPrice.toString());
    if (newFilters.minBedrooms && newFilters.minBedrooms > 0) params.set('minBedrooms', newFilters.minBedrooms.toString());
    if (newFilters.minBathrooms && newFilters.minBathrooms > 0) params.set('minBathrooms', newFilters.minBathrooms.toString());
    
    if (currentPage > 1) params.set('page', currentPage.toString());
    
    router.push(`${pathname}?${params.toString()}`);
  };

  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Handle filter changes
  const handleFilterChange = (key: keyof PropertySearchParams, value: string | number) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    updateSearchParams(newFilters);
  };

  // Pagination handlers
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      updateSearchParams({ ...filters });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      updateSearchParams({ ...filters });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f5ef]">
      <Head>
        <title>LuxeRealty - Search Results</title>
        <meta name="description" content="Find your perfect property with LuxeRealty" />
      </Head>

      {/* Header (similar to homepage) */}
      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center mr-2">
              <Home className="w-4 h-4 text-white" />
            </div>
            <span className="text-green-800 font-serif text-xl font-medium">LuxeRealty</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-gray-700 hover:text-green-800">Home</a>
          <a href="/search" className="text-gray-700 hover:text-green-800">Properties</a>
          <a href="#" className="text-gray-700 hover:text-green-800">About</a>
          <a href="#" className="text-gray-700 hover:text-green-800">Contact</a>
        </div>

        <div className="flex items-center space-x-3">
          <a href="#" className="hidden md:block text-green-800 hover:text-green-900">Sign In</a>
          <button className="bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-900 transition">
            Gain Access
          </button>
        </div>
      </header>

      {/* Search Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-grow w-full">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by location, property type, or address"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
              />
            </div>
            
            <div className="flex space-x-2 w-full">
              <select
                className="flex-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                value={filters.propertyType}
                onChange={(e) => handleFilterChange('propertyType', e.target.value)}
              >
                <option value="">Property Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
              </select>
              
              <select
                className="flex-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                value={`${filters.minBedrooms}`}
                onChange={(e) => handleFilterChange('minBedrooms', parseInt(e.target.value))}
              >
                <option value="0">Bedrooms</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
              
              <select
                className="flex-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                value={`${filters.minPrice}-${filters.maxPrice}`}
                onChange={(e) => {
                  const [minPrice, maxPrice] = e.target.value.split('-').map(Number);
                  setFilters(prev => ({ ...prev, minPrice, maxPrice }));
                  updateSearchParams({ ...filters, minPrice, maxPrice });
                }}
              >
                <option value="0-10000000">Price Range</option>
                <option value="0-300000">Under $300,000</option>
                <option value="300000-500000">$300,000 - $500,000</option>
                <option value="500000-750000">$500,000 - $750,000</option>
                <option value="750000-1000000">$750,000 - $1,000,000</option>
                <option value="1000000-10000000">$1,000,000+</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-medium">
            {loading ? 'Searching...' : `${totalCount} Properties Found`}
          </h2>
          <div className="flex items-center space-x-4">
            {currentPage > 1 && (
              <button 
                onClick={handlePreviousPage}
                className="flex items-center text-green-800 hover:text-green-900"
              >
                <ChevronLeft size={20} />
                Previous
              </button>
            )}
            <span className="text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            {currentPage < totalPages && (
              <button 
                onClick={handleNextPage}
                className="flex items-center text-green-800 hover:text-green-900"
              >
                Next
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-gray-300"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-300 mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-300 w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div 
                key={property.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={property.images}
                    alt={property.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <div className="flex space-x-2">
                      <div className="bg-white rounded-full px-3 py-1 flex items-center text-sm">
                        <Home size={14} className="mr-1" />
                        {property.bedrooms} Bedroom
                      </div>
                      <div className="bg-white rounded-full px-3 py-1 flex items-center text-sm">
                        <span>{property.bathrooms} Bathrooms</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-medium">{property.title}</h3>
                    <span className="text-2xl font-semibold text-green-800">
                      {formatPrice(property.price)}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {property.address}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {property.area} ft²
                    </span>
                    <button 
                      className="bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-900 transition text-sm"
                      onClick={() => router.push(`/property/${property.id}`)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-medium text-gray-700 mb-4">
              No Properties Found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search filters or check back later.
            </p>
            <button 
              onClick={() => {
                // Reset filters
                const resetFilters: PropertySearchParams = {
                  search: '',
                  propertyType: '',
                  minPrice: 0,
                  maxPrice: 10000000,
                  minBedrooms: 0,
                  minBathrooms: 0,
                };
                setFilters(resetFilters);
                updateSearchParams(resetFilters);
              }}
              className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Footer (similar to homepage) */}  
      <footer className="bg-green-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                  <Home className="w-4 h-4 text-green-800" />
                </div>
                <span className="text-xl font-medium">LuxeRealty</span>
              </div>
              <p className="text-green-100">
                Your trusted partner in finding the perfect home that fits your lifestyle and preferences.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-green-100 hover:text-white">Home</a></li>
                <li><a href="/search" className="text-green-100 hover:text-white">Properties</a></li>
                <li><a href="#" className="text-green-100 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-green-100 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Property Types</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-100 hover:text-white">Houses</a></li>
                <li><a href="#" className="text-green-100 hover:text-white">Apartments</a></li>
                <li><a href="#" className="text-green-100 hover:text-white">Condos</a></li>
                <li><a href="#" className="text-green-100 hover:text-white">Commercial</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Contact Us</h3>
              <p className="text-green-100 mb-2">
                123 Real Estate Street<br />
                Beverly Hills, CA 90210
              </p>
              <p className="text-green-100">
                Phone: (123) 456-7890<br />
                Email: info@luxerealty.com
              </p>
            </div>
          </div>
          
          <div className="border-t border-green-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-100">© 2025 LuxeRealty. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-green-100 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-green-100 hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}