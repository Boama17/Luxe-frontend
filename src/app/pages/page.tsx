// pages/index.tsx
"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Search, HomeIcon, ArrowRight, X, MapPin, Briefcase, DollarSign, User } from 'lucide-react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [propertyType, setPropertyType] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const featuredProperties = [
    {
      id: 1,
      title: 'Family House',
      price: 450000,
      address: '123 Maple Avenue Springfield IL 62704, Los Angeles, California',
      bedrooms: 7,
      bathrooms: 10,
      area: 720,
      image: '/house1.jpg',
    },
    {
      id: 2,
      title: 'Family House',
      price: 450000,
      address: '123 Maple Avenue Springfield IL 62704, Los Angeles, California',
      bedrooms: 7,
      bathrooms: 10,
      area: 720,
      image: '/house2.jpg',
    },
    {
      id: 3,
      title: 'Family House',
      price: 450000,
      address: '123 Maple Avenue Springfield IL 62704, Los Angeles, California',
      bedrooms: 7,
      bathrooms: 10,
      area: 720,
      image: '/house3.jpg',
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-[#f7f5ef]">
      <Head>
        <title>LuxeRealty - Find Your Perfect Home</title>
        <meta name="description" content="Discover the perfect place to live and thrive with LuxeRealty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center mr-2">
              <HomeIcon className="w-4 h-4 text-white" />
            </div>
            <span className="text-green-800 font-serif text-xl font-medium">LuxeRealty</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-green-800">Home</a>
          <a href="#" className="text-gray-700 hover:text-green-800">Properties</a>
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

      <section className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-serif leading-tight">
            <span className="text-green-800">Discover the</span> Perfect 
            <span className="block text-green-800">Place to live</span>
            <span className="block text-green-800">and Thrive</span>
          </h1>
          <p className="mt-6 text-gray-700 text-lg">
            Explore a curated selection of homes that fit your lifestyle and
            preferences.
          </p>
          
          <div className="mt-8 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="relative w-full">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Link href="/search">
                <button 
                    className="w-full md:w-auto bg-green-800 text-white px-8 py-3 rounded-lg hover:bg-green-900 transition flex items-center justify-center"
                    onClick={() => console.log('Search for:', searchTerm)}
                >
                    <Search className="mr-2" size={18} />
                    Search
                </button>
              </Link>
            </div>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <HomeIcon size={18} className="text-green-800" />
                <select
                  className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="townhouse">Townhouse</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <DollarSign size={18} className="text-green-800" />
                <select
                  className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                  value={`${priceRange[0]}-${priceRange[1]}`}
                  onChange={(e) => {
                    const [min, max] = e.target.value.split('-').map(Number);
                    setPriceRange([min, max]);
                  }}
                >
                  <option value="0-1000000">Price Range</option>
                  <option value="0-300000">Under $300,000</option>
                  <option value="300000-500000">$300,000 - $500,000</option>
                  <option value="500000-750000">$500,000 - $750,000</option>
                  <option value="750000-1000000">$750,000 - $1,000,000</option>
                  <option value="1000000-10000000">$1,000,000+</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <User size={18} className="text-green-800" />
                <select
                  className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                >
                  <option value="">Bedrooms</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <a href="#featured" className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
              View Listings
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
        
        <div className="relative h-96 md:h-[550px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/hero-house.jpg"
            alt="Beautiful luxury home"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          
          <div className="absolute bottom-6 right-6 bg-white p-4 rounded-lg shadow-md">
            <div className="text-sm text-gray-600">Green House</div>
            <div className="text-2xl font-semibold">{formatPrice(450000)}</div>
            <div className="text-sm text-gray-600">Minimalist modern house for family</div>
          </div>
          
          <div className="absolute top-6 right-6 bg-white p-3 rounded-full shadow-md flex items-center justify-center">
            <div className="text-green-800 font-medium">House tour</div>
            <button className="ml-2 bg-black text-white p-1 rounded-full">
              <span className="sr-only">Play tour</span>
              Play
            </button>
          </div>
        </div>
      </section>

      <section id="featured" className="container mx-auto px-4 py-16">
        <div className="flex items-center mb-8">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
            <div className="w-3 h-3 bg-green-800 rounded-full"></div>
          </div>
          <h2 className="text-xl font-medium text-gray-800">Featured Properties</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src={property.image}
                  alt={property.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <div className="flex space-x-2">
                    <div className="bg-white rounded-full px-3 py-1 flex items-center text-sm">
                      <HomeIcon size={14} className="mr-1" />
                      {property.bedrooms} Bedroom
                    </div>
                    <div className="bg-white rounded-full px-3 py-1 flex items-center text-sm">
                      <span>{property.bathrooms} Bathrooms</span>
                    </div>
                    <div className="bg-white rounded-full px-3 py-1 flex items-center text-sm">
                      <span>{property.area} ft²</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-medium">{property.title}</h3>
                  <span className="text-2xl font-semibold text-green-800">{formatPrice(property.price)}</span>
                </div>
                <p className="text-gray-600 text-sm">{property.address}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-900 transition inline-flex items-center">
            View All Properties
            <ArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-3xl font-serif mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-6">Create your account to discover curated properties that match your lifestyle preferences.</p>
          </div>
          <button className="bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-900 transition">
            Sign Up Today
          </button>
        </div>
      </section>

      <footer className="bg-green-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                  <HomeIcon className="w-4 h-4 text-green-800" />
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
                <li><a href="#" className="text-green-100 hover:text-white">Home</a></li>
                <li><a href="#" className="text-green-100 hover:text-white">Properties</a></li>
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