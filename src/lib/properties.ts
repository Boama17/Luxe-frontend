/* eslint-disable @typescript-eslint/no-explicit-any */
import one from "@/../public/house1.jpg";
import two from "@/../public/house2.jpg";
import three from "@/../public/house3.jpg";
import four from "@/../public/house4.jpg";
import five from "@/../public/house5.jpg";
import six from "@/../public/house6.jpg";
import seven from "@/../public/house7.jpg";
import eight from "@/../public/house8.jpg";
import nine from "@/../public/house9.jpeg";
import ten from "@/../public/house10.jpeg";
import eleven from "@/../public/house11.jpeg";
import twelve from "@/../public/house12.jpeg";
import thirteen from "@/../public/house13.jpeg";

// Import interior images for each property
import one1 from "@/../public/one/01.jpg";
import one2 from "@/../public/one/02.jpg";
import one3 from "@/../public/one/03.jpg";
import one4 from "@/../public/one/04.jpg";
import one5 from "@/../public/one/05.jpg";

import two1 from "@/../public/two/01.jpg";
import two2 from "@/../public/two/02.jpg";
import two3 from "@/../public/two/03.jpg";
import two4 from "@/../public/two/04.jpg";
import two5 from "@/../public/two/05.jpg";

import three1 from "@/../public/three/01.jpg";
import three2 from "@/../public/three/02.jpg";
import three3 from "@/../public/three/03.jpg";
import three4 from "@/../public/three/04.jpg";

import four1 from "@/../public/four/01.jpg";
import four2 from "@/../public/four/02.jpg";
import four3 from "@/../public/four/03.jpg";
import four4 from "@/../public/four/04.jpg";
import four5 from "@/../public/four/05.jpg";

import five1 from "@/../public/five/01.jpg";
import five2 from "@/../public/five/02.jpg";
import five3 from "@/../public/five/03.jpg";
import five4 from "@/../public/five/04.jpg";
import five5 from "@/../public/five/05.jpg";
import five6 from "@/../public/five/06.jpg";

import six1 from "@/../public/six/01.jpg";
import six2 from "@/../public/six/02.jpg";
import six3 from "@/../public/six/03.jpg";
import six4 from "@/../public/six/04.jpg";

import seven1 from "@/../public/seven/01.jpg";
import seven2 from "@/../public/seven/02.jpg";
import seven3 from "@/../public/seven/03.jpg";
import seven4 from "@/../public/seven/04.jpg";
import seven5 from "@/../public/seven/05.jpg";

import eight1 from "@/../public/eight/01.jpeg";
import eight2 from "@/../public/eight/02.jpeg";
import eight3 from "@/../public/eight/03.jpeg";
import eight4 from "@/../public/eight/04.jpeg";

import nine1 from "@/../public/nine/01.jpeg";
import nine2 from "@/../public/nine/02.jpeg";
import nine3 from "@/../public/nine/03.jpeg";
import nine4 from "@/../public/nine/04.jpeg";
import nine5 from "@/../public/nine/05.jpeg";
import nine6 from "@/../public/nine/06.jpeg";
import nine7 from "@/../public/nine/07.jpeg";

import ten1 from "@/../public/ten/01.jpeg";
import ten2 from "@/../public/ten/02.jpeg";
import ten3 from "@/../public/ten/03.jpeg";
import ten4 from "@/../public/ten/04.jpeg";
import ten5 from "@/../public/ten/05.jpeg";
import ten6 from "@/../public/ten/06.jpeg";
import ten7 from "@/../public/ten/07.jpeg";
import ten8 from "@/../public/ten/08.jpeg";
import ten9 from "@/../public/ten/09.jpeg";
import ten10 from "@/../public/ten/10.jpeg";
import ten11 from "@/../public/ten/11.jpeg";

import eleven1 from "@/../public/eleven/01.jpeg";
import eleven2 from "@/../public/eleven/02.jpeg";
import eleven3 from "@/../public/eleven/03.jpeg";
import eleven4 from "@/../public/eleven/04.jpeg";
import eleven5 from "@/../public/eleven/05.jpeg";
import eleven6 from "@/../public/eleven/06.jpeg";
import eleven7 from "@/../public/eleven/07.jpeg";
import eleven8 from "@/../public/eleven/08.jpeg";
import eleven9 from "@/../public/eleven/09.jpeg";
import eleven10 from "@/../public/eleven/10.jpeg";
import eleven11 from "@/../public/eleven/11.jpeg";

import twelve1 from "@/../public/twelve/01.jpeg";
import twelve2 from "@/../public/twelve/02.jpeg";
import twelve3 from "@/../public/twelve/03.jpeg";
import twelve4 from "@/../public/twelve/04.jpeg";
import twelve5 from "@/../public/twelve/05.jpeg";
import twelve6 from "@/../public/twelve/06.jpeg";
import twelve7 from "@/../public/twelve/07.jpeg";
import twelve8 from "@/../public/twelve/08.jpeg";
import twelve9 from "@/../public/twelve/09.jpeg";
import twelve10 from "@/../public/twelve/10.jpeg";
import twelve11 from "@/../public/twelve/11.jpeg";
import twelve12 from "@/../public/twelve/12.jpeg";
import twelve13 from "@/../public/twelve/13.jpeg";
import twelve14 from "@/../public/twelve/14.jpeg";

import thirteen1 from "@/../public/thirteen/1.jpeg";
import thirteen2 from "@/../public/thirteen/2.jpeg";
import thirteen3 from "@/../public/thirteen/3.jpeg";
import thirteen4 from "@/../public/thirteen/4.jpeg";
import thirteen5 from "@/../public/thirteen/5.jpeg";
import thirteen6 from "@/../public/thirteen/6.jpeg";
import thirteen7 from "@/../public/thirteen/7.jpeg";
import thirteen8 from "@/../public/thirteen/8.jpeg";
import thirteen9 from "@/../public/thirteen/9.jpeg";
import thirteen10 from "@/../public/thirteen/10.jpeg";
import thirteen11 from "@/../public/thirteen/11.jpeg";
import thirteen12 from "@/../public/thirteen/12.jpeg";



// Property categories enum for easy expansion
export enum PropertyCategory {
  RESIDENTIAL = 'residential',
  COMMERCIAL = 'commercial',
  LUXURY = 'luxury'
}

// Category configuration for easy management
export const PROPERTY_CATEGORIES = {
  [PropertyCategory.RESIDENTIAL]: {
    label: 'Residential',
    description: 'Apartments, flats, and family homes',
    icon: '🏠',
    color: 'blue'
  },
  [PropertyCategory.COMMERCIAL]: {
    label: 'Commercial',
    description: 'Office spaces and business properties',
    icon: '🏢',
    color: 'purple'
  },
  [PropertyCategory.LUXURY]: {
    label: 'Luxury',
    description: 'Premium properties with high-end amenities',
    icon: '✨',
    color: 'gold'
  }
} as const;

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
  interiorImages: string[];
  description: string;
  propertyType: string;
  listingType: "rent" | "sale";
  category: PropertyCategory; // New field for categorization
}

// Categorization logic - easily extensible
export function categorizeProperty(property: Omit<Property, 'category'> | Omit<Property, 'id' | 'category'>): PropertyCategory {
  const { price, currency, area, propertyType, location, description } = property;

  // Convert price to USD for consistent comparison
  const priceInUSD = currency === 'USD' ? price : price / 15; // Rough GHS to USD conversion

  // Luxury criteria
  const isLuxury = (
      priceInUSD > 2000 || // High price
      area > 3000 || // Large area
      propertyType.toLowerCase().includes('townhouse') ||
      location.toLowerCase().includes('ring way') ||
      location.toLowerCase().includes('estate') ||
      description.toLowerCase().includes('executive') ||
      description.toLowerCase().includes('luxury') ||
      description.toLowerCase().includes('premium') ||
      description.toLowerCase().includes('swimming pool') ||
      description.toLowerCase().includes('24/7 security')
  );

  // Commercial criteria (you can expand this based on future commercial properties)
  const isCommercial = (
      propertyType.toLowerCase().includes('office') ||
      propertyType.toLowerCase().includes('commercial') ||
      propertyType.toLowerCase().includes('retail') ||
      propertyType.toLowerCase().includes('warehouse') ||
      description.toLowerCase().includes('business') ||
      description.toLowerCase().includes('office')
  );

  if (isLuxury) return PropertyCategory.LUXURY;
  if (isCommercial) return PropertyCategory.COMMERCIAL;
  return PropertyCategory.RESIDENTIAL;
}

// Enhanced Property interface
export interface PropertyListing {
  id: number;
  title: string;
  shortDescription: string;
  features: string[];
  amenities: string[];
  nearbyPlaces: string[];
  floorPlan?: string;
  virtualTour?: string;
  propertyDetails: {
    yearBuilt?: number;
    parking: number;
    furnishing: "Furnished" | "Semi-Furnished" | "Unfurnished";
    petPolicy: "Allowed" | "Not Allowed" | "Conditional";
    utilities: string[];
    securityFeatures: string[];
  };
  financialDetails: {
    securityDeposit?: number;
    agentCommission: number;
    legalFees?: number;
    registrationFee?: number;
    serviceCharge?: number;
  };
}

const Properties: Property[] = [
  {
    id: 1,
    title: "2 Bedroom Apartment East Legon Hill",
    price: 4500,
    currency: "GHS",
    bedrooms: 2,
    bathrooms: 3,
    area: 2500,
    location: "East Legon Hill",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: one.src,
    interiorImages: [one.src, one1.src, one2.src, one3.src, one4.src, one5.src],
    description: "A newly built 2bedroom apartment up for rent around East Legon Hill. Features ensuite bedrooms, fitted kitchen, installed AC & heater, Ghana water & ECG. In a cozy environment with good road network.",
    propertyType: "Flat",
    address: "East Legon Hill, Accra, Greater Accra",
    rating: 4.7,
    isNew: "New",
    status: "active",
    agent: "Melton Properties",
    views: 115,
    inquiries: 10,
    listingType: "rent",
    category: PropertyCategory.RESIDENTIAL
    
  },
  {
    id: 2,
    title: "Furnished 1 Bedroom Apartment Dzorwulu",
    price: 800,
    currency: "USD",
    bedrooms: 1,
    bathrooms: 1,
    area: 1200,
    location: "Dzorwulu",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: two.src,
    interiorImages: [two.src, two1.src, two2.src, two3.src, two4.src, two5.src],
    description: "Furnished 1 bedroom apartment at Dzorwulu for rent. Price is $800 USD per month furnished, minimum of 6 months advance. UNFURNISHED is $600 USD per month. Located in Tseaddo area.",
    propertyType: "Duplex",
    address: "Dzorwulu, Tseaddo, Accra, Greater Accra",
    rating: 4.9,
    isNew: "Featured",
    status: "active",
    agent: "Melton Properties",
    views: 210,
    inquiries: 17,
    listingType: "rent",
    category: PropertyCategory.RESIDENTIAL
  },
  {
    id: 3,
    title: "2 Bedroom Self Contained Apartment East Legon Hills",
    price: 4500,
    currency: "GHS",
    bedrooms: 2,
    bathrooms: 3,
    area: 1800,
    location: "East Legon Hills",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: three.src,
    interiorImages: [three.src, three1.src, three2.src, three3.src, three4.src],
    description: "2bedroom self contained apt for rent at East Legon hills. All rooms en-suite. Good road network, tarred. In a cozy environment. Price: GHC 4,500 a month for a year or more.",
    propertyType: "Flat",
    address: "East Legon Hills, Accra, Greater Accra",
    rating: 4.3,
    isNew: "Featured",
    status: "active",
    agent: "Melton Properties",
    views: 98,
    inquiries: 6,
    listingType: "rent",
    category: PropertyCategory.RESIDENTIAL
  },
  {
    id: 4,
    title: "2 Bedroom Executive Apartment Haatso",
    price: 4000,
    currency: "GHS",
    bedrooms: 2,
    bathrooms: 3,
    area: 2000,
    location: "Haatso",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: four.src,
    interiorImages: [four.src, four1.src, four2.src, four3.src, four4.src, four5.src],
    description: "Executive ensuite 2 bedroom apartments up for rent at Haatso. Duration: 1 year. Located at Haatso Ecomog area with good amenities and access.",
    propertyType: "Duplex",
    address: "Haatso Ecomog, Accra, Greater Accra",
    rating: 4.8,
    isNew: "Featured",
    status: "active",
    agent: "Melton Properties",
    views: 190,
    inquiries: 14,
    listingType: "rent",
    category: PropertyCategory.RESIDENTIAL
  },
  {
    id: 5,
    title: "3 Bedrooms + 1 BQS Executive Apartment Tseaddo",
    price: 800,
    currency: "USD",
    bedrooms: 3,
    bathrooms: 4,
    area: 2500,
    location: "Tseaddo",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: five.src,
    interiorImages: [five.src, five1.src, five2.src, five3.src, five4.src, five5.src, five6.src],
    description: "Newly Built Executive 3 Bedrooms + 1bqs Apartment with semi furnished kitchen. Two on a compound apartment for rent. All rooms are en-suite, walled and gated compound, 24/7 CCTV Camera, visitors wash. Duration: 1 year.",
    propertyType: "Duplex",
    address: "Tseaddo Goil, Accra, Greater Accra",
    rating: 4.6,
    isNew: "New",
    status: "active",
    agent: "Melton Properties",
    views: 232,
    inquiries: 19,
    listingType: "rent",
    category: PropertyCategory.LUXURY
  },
  {
    id: 6,
    title: "3 Bedroom Executive Apartment Ogbojo",
    price: 3500,
    currency: "GHS",
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    location: "Ogbojo",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: six.src,
    interiorImages: [six.src, six1.src, six2.src, six3.src, six4.src],
    description: "Executive 3 bedrooms apartment with 2 washrooms for rent at Ogbojo. The price 3500gh includes service charge (security, water, outside cleaning, light for CCTV security fence and outside light).",
    propertyType: "Flat",
    address: "Ogbojo, Accra, Greater Accra",
    rating: 4.1,
    isNew: "New",
    status: "active",
    agent: "Melton Properties",
    views: 87,
    inquiries: 5,
    listingType: "rent",
    category: PropertyCategory.RESIDENTIAL
  },
  {
    id: 7,
    title: "3 Bedroom Classy Apartment Tseaddo",
    price: 4000,
    currency: "GHS",
    bedrooms: 3,
    bathrooms: 4,
    area: 2400,
    location: "Tseaddo",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: seven.src,
    interiorImages: [seven.src, seven1.src, seven2.src, seven3.src, seven4.src, seven5.src],
    description: "Newly built classy 3bedroom apartment with 4washrooms at Tse Addo container. Comes with beautiful interior, Self meter, Water flowing, Walled and Gated. Located in a hot location. 4000Ghc per month for 1year.",
    propertyType: "Duplex",
    address: "Tseaddo Container, Accra, Greater Accra",
    rating: 4.5,
    isNew: "New",
    status: "active",
    agent: "Melton Properties",
    views: 176,
    inquiries: 13,
    listingType: "rent",
    category: PropertyCategory.RESIDENTIAL
  },
  {
    id: 8,
    title: "4 Bedroom Executive Townhouse Ring Way Estate",
    price: 3200,
    currency: "USD",
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    location: "Ring Way Estate",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: eight.src,
    interiorImages: [eight.src, eight1.src, eight2.src, eight3.src, eight4.src],
    description: "An executive four (4) bedroom townhouse with a shared swimming pool to let at Ring Way Estate near British High Commission. The property has 24/7 security, Solar power backup, A/c and wardrobe, dining, two large living areas, balcony. Kitchen furnished with cooker, microwave, oven, washing machine, fridge. Uninterrupted water flow. Amount is inclusive of service charge.",
    propertyType: "Townhouse",
    address: "Ring Way Estate, Near British High Commission, Accra, Greater Accra",
    rating: 4.2,
    isNew: "Featured",
    status: "active",
    agent: "Avenue Ghana",
    views: 154,
    inquiries: 11,
    listingType: "rent",
    category: PropertyCategory.LUXURY
  },
  {
    id: 9,
    title: "2 Bedroom Semi Detached Townhouse",
    price: 50000,
    currency: "USD",
    bedrooms: 2,
    bathrooms: 2,
    area: 110,
    location: "University of Professional Studies",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: nine.src,
    interiorImages: [nine.src, nine1.src, nine2.src, nine3.src, nine4.src, nine5.src, nine6.src, nine7.src],
    description: "THIS IS A 2 BEDROOM SEMI DETACHED TOWNHOUSE (110m2)\n" +
        "The Project offers an extraordinary lifestyle in a serene and secured location of University of Professional Studies UPSA – Legon",
    propertyType: "Townhouse",
    address: "University of Professional Studies, Legon, Accra - Ghana",
    rating: 4.7,
    isNew: "Featured",
    status: "active",
    agent: "Tamani Properties Ltd.",
    views: 2000,
    inquiries: 1220,
    listingType: "sale",
    category: PropertyCategory.RESIDENTIAL
  },
  {
  id: 10,
  title: "Avant-Garde 2 & 3 Bedroom Townhouses Ogbojo",
  price: 120000,
  currency: "USD",
  bedrooms: 3,
  bathrooms: 3,
  area: 2800,
  location: "Ogbojo",
  city: "Accra",
  region: "Greater Accra",
  imageUrl: ten.src,
  interiorImages: [ten.src, ten1.src, ten2.src, ten3.src, ten4.src, ten5.src, ten6.src, ten7.src, ten8.src, ten9.src, ten10.src, ten11.src],
  description:
    "Discover the epitome of contemporary living in the heart of Ogbojo, Accra, with our exquisite 2 and 3-bedroom townhouses. Nestled in a serene neighborhood, these thoughtfully designed homes offer a perfect blend of comfort, style, and convenience. Features include ensuite bedrooms, fully equipped modern kitchens, open-concept living spaces, private balconies, communal gardens, and 24/7 security. Conveniently located with easy access to schools, shopping centers, and major routes.",
  propertyType: "Townhouse",
  address: "East Legon, Ogbojo, Accra, Greater Accra",
  rating: 4.9,
  isNew: "Featured",
  status: "active",
  agent: "Luxe Realty",
  views: 132,
  inquiries: 16,
  listingType: "sale",
  category: PropertyCategory.LUXURY
},
{
    id: 11,
    title: "6 Room Office For Rent East Legon",
    price: 3000,
    currency: "USD",
    bedrooms: 6,
    bathrooms: 5,
    area: 4000,
    location: "East Legon",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: eleven.src,
    interiorImages: [eleven1.src, eleven2.src, eleven3.src, eleven4.src, eleven5.src, eleven6.src, eleven7.src, eleven8.src, eleven9.src, eleven10.src, eleven11.src],
    description: "Six (6) room office facility (all ensuite) on a strategic location to let at East Legon near MTN office. Each room has A/c and wardrobe. The house has partly furnished kitchen, automated garage, polytanks for water storage, etc. The area has uninterrupted water flow and it is renting for Ghana Cedi equivalent of US$ 3,000 per month (negotiable).",
    propertyType: "Office",
    address: "East Legon, near MTN office, Accra, Greater Accra",
    rating: 4.8,
    isNew: "Featured",
    status: "active",
    agent: "Avenue Ghana",
    views: 300,
    inquiries: 25,
    listingType: "rent",
    category: PropertyCategory.COMMERCIAL
},
{
    id: 12,
    title: "Executive Office Facility Labone",
    price: 15500,
    currency: "USD",
    bedrooms: 15,
    bathrooms: 8,
    area: 8342,
    location: "Labone",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: twelve.src,
    interiorImages: [twelve1.src, twelve2.src, twelve3.src, twelve4.src, twelve5.src, twelve6.src, twelve7.src, twelve8.src, twelve9.src, twelve10.src, twelve11.src, twelve12.src, twelve13.src, twelve14.src],
    description: "An executive office facility (self compound) to let at Labone near Labone Ecobank. The property has a large car parking area, provision for Air-conditioners, internet connection in each floor, etc. The floors are well partitioned into individual and conference rooms, it has server room, kitchenettes, etc. It also has uninterrupted water flow with standby reservoirs, security post, etc. It has a total space of 775sqm and it is renting for Ghana Cedi equivalent of US$20 per square meter / month (negotiable).",
    propertyType: "Office",
    address: "Labone, near Labone Ecobank, Accra, Greater Accra",
    rating: 4.9,
    isNew: "Featured",
    status: "active",
    agent: "Avenue Ghana",
    views: 450,
    inquiries: 40,
    listingType: "rent",
    category: PropertyCategory.COMMERCIAL
},
{
    id: 13,
    title: "Executive Office Facility Cantonments",
    price: 42000,
    currency: "GHS",
    bedrooms: 0,
    bathrooms: 10,
    area: 4327,
    location: "Cantonments",
    city: "Accra",
    region: "Greater Accra",
    imageUrl: thirteen.src,
    interiorImages: [thirteen1.src, thirteen2.src, thirteen3.src, thirteen4.src, thirteen5.src, thirteen6.src, thirteen7.src, thirteen8.src, thirteen9.src, thirteen10.src, thirteen11.src, thirteen12.src],
    description: "An executive office facility with a large and well demarcated car parking space for rent in Cantonments. The facility has central A/c, high speed internet facilities, etc. In addition, it has enough washrooms, 24/7 management team in place, security, uninterrupted water flow with a large water storage facility and a standby plant for backup power. It has 402 sqm per floor and renting for Forty Two Thousand Ghana Cedi (Ghc42,000) per month (negotiable). The amount is inclusive of service charge.",
    propertyType: "Office",
    address: "Cantonments, Accra, Greater Accra",
    rating: 4.9,
    isNew: "New",
    status: "active",
    agent: "Avenue Ghana",
    views: 500,
    inquiries: 50,
    listingType: "rent",
    category: PropertyCategory.COMMERCIAL
},

];

// Auto-categorize existing properties if category is not set
Properties.forEach(property => {
  if (!property.category) {
    property.category = categorizeProperty(property);
  }
});

// Property listings data with detailed information
export const PropertyListings: PropertyListing[] = [
  {
    id: 1,
    title: "2 Bedroom Apartment - East Legon Hill",
    shortDescription: "Newly built 2bedroom apartment with ensuite bedrooms in East Legon Hill",
    features: [
      "Ensuite bedrooms",
      "Fitted kitchen",
      "Installed AC & heater",
      "Ghana water & ECG connection",
      "Good road network, tarred",
      "Cozy environment"
    ],
    amenities: [
      "Air conditioning",
      "Water heater",
      "Ghana water supply",
      "ECG electricity",
      "Good road access",
      "Tarred roads"
    ],
    nearbyPlaces: [
      "School nearby",
      "University access",
      "Kindergarten",
      "Hospital nearby",
      "Train station access",
      "Shopping area"
    ],
    propertyDetails: {
      yearBuilt: 2024,
      parking: 1,
      furnishing: "Unfurnished",
      petPolicy: "Conditional",
      utilities: ["Ghana Water", "ECG Electricity", "AC", "Water Heater"],
      securityFeatures: ["Security fence", "Good lighting"]
    },
    financialDetails: {
      securityDeposit: 9000,
      agentCommission: 10,
      registrationFee: 200
    }
  },
  {
    id: 2,
    title: "Furnished 1 Bedroom Apartment - Dzorwulu",
    shortDescription: "Furnished 1 bedroom apartment at Dzorwulu with flexible rental options",
    features: [
      "Fully furnished apartment",
      "1 bedroom with bathroom",
      "Modern fittings",
      "Minimum 6 months advance",
      "Unfurnished option available at $600",
      "Located in Tseaddo area"
    ],
    amenities: [
      "Fully furnished",
      "Modern appliances",
      "Good location",
      "Flexible rental terms",
      "Tourist area nearby",
      "Leisure facilities"
    ],
    nearbyPlaces: [
      "Park nearby",
      "Public square",
      "Leisure centre",
      "Touristic area",
      "Mountain views",
      "Lake access"
    ],
    propertyDetails: {
      yearBuilt: 2022,
      parking: 1,
      furnishing: "Furnished",
      petPolicy: "Conditional",
      utilities: ["All utilities included"],
      securityFeatures: ["Building security", "Safe area"]
    },
    financialDetails: {
      securityDeposit: 1600,
      agentCommission: 10,
      registrationFee: 200
    }
  },
  {
    id: 3,
    title: "2 Bedroom Self Contained - East Legon Hills",
    shortDescription: "2bedroom self contained apartment with all rooms en-suite",
    features: [
      "All rooms en-suite",
      "Self contained apartment",
      "Good road network",
      "Tarred roads",
      "Cozy environment",
      "Year or more rental terms"
    ],
    amenities: [
      "Good road network",
      "Tarred roads",
      "Peaceful environment",
      "Easy access",
      "Well maintained area",
      "Good utilities"
    ],
    nearbyPlaces: [
      "East Legon amenities",
      "Shopping centers",
      "Schools nearby",
      "Hospital access",
      "Good transport links",
      "Business district"
    ],
    propertyDetails: {
      yearBuilt: 2023,
      parking: 1,
      furnishing: "Unfurnished",
      petPolicy: "Conditional",
      utilities: ["Water", "Electricity", "Good road access"],
      securityFeatures: ["Safe neighborhood", "Street lighting"]
    },
    financialDetails: {
      securityDeposit: 9000,
      agentCommission: 10,
      registrationFee: 200
    }
  },
  {
    id: 4,
    title: "Executive 2 Bedroom Apartment - Haatso",
    shortDescription: "Executive ensuite 2 bedroom apartments in Haatso Ecomog area",
    features: [
      "Executive standard",
      "Ensuite bedrooms",
      "Modern facilities",
      "1 year duration",
      "Good location",
      "Quality finishes"
    ],
    amenities: [
      "Executive facilities",
      "Modern amenities",
      "Good access roads",
      "Security",
      "Water supply",
      "Electricity"
    ],
    nearbyPlaces: [
      "Haatso market",
      "Schools nearby",
      "Hospital access",
      "Transport links",
      "Shopping areas",
      "Business centers"
    ],
    propertyDetails: {
      yearBuilt: 2022,
      parking: 1,
      furnishing: "Unfurnished",
      petPolicy: "Conditional",
      utilities: ["Water", "Electricity", "Modern facilities"],
      securityFeatures: ["Area security", "Good lighting"]
    },
    financialDetails: {
      securityDeposit: 8000,
      agentCommission: 10,
      registrationFee: 200
    }
  },
  {
    id: 5,
    title: "3 Bedrooms + BQS Executive - Tseaddo",
    shortDescription: "Newly built executive 3 bedrooms with boys quarters and premium security",
    features: [
      "3 bedrooms + 1 boys quarters",
      "All rooms en-suite",
      "Semi furnished kitchen",
      "Two on compound",
      "Walled and gated compound",
      "Visitors washroom"
    ],
    amenities: [
      "24/7 CCTV camera",
      "Walled and gated",
      "Semi furnished kitchen",
      "Security system",
      "Compound parking",
      "Modern finishes"
    ],
    nearbyPlaces: [
      "Tseaddo Goil station",
      "Shopping areas",
      "Schools nearby",
      "Hospital access",
      "Transport links",
      "Business district"
    ],
    propertyDetails: {
      yearBuilt: 2022,
      parking: 2,
      furnishing: "Semi-Furnished",
      petPolicy: "Allowed",
      utilities: ["Water", "Electricity", "CCTV system"],
      securityFeatures: ["24/7 CCTV", "Walled compound", "Security gate", "Guards"]
    },
    financialDetails: {
      securityDeposit: 1600,
      agentCommission: 10,
      registrationFee: 200
    }
  },
  {
    id: 6,
    title: "3 Bedroom Executive - Ogbojo",
    shortDescription: "Executive 3 bedrooms apartment with inclusive service charges",
    features: [
      "Executive 3 bedrooms",
      "2 washrooms",
      "Service charge included",
      "Security included",
      "Water included",
      "Outside cleaning included"
    ],
    amenities: [
      "Security service",
      "Water supply",
      "Outside cleaning",
      "CCTV security",
      "Security fence",
      "Outside lighting"
    ],
    nearbyPlaces: [
      "Ogbojo community",
      "Local markets",
      "Schools nearby",
      "Health facilities",
      "Transport access",
      "Shopping areas"
    ],
    propertyDetails: {
      yearBuilt: 2019,
      parking: 1,
      furnishing: "Unfurnished",
      petPolicy: "Conditional",
      utilities: ["Water", "Electricity", "Security services"],
      securityFeatures: ["CCTV security", "Security fence", "Outside lighting", "Security guards"]
    },
    financialDetails: {
      securityDeposit: 7000,
      agentCommission: 10,
      registrationFee: 200,
      serviceCharge: 0
    }
  },
  {
    id: 7,
    title: "3 Bedroom Classy Apartment - Tseaddo",
    shortDescription: "Newly built classy apartment with beautiful interior and premium features",
    features: [
      "Newly built classy design",
      "3 bedrooms with 4 washrooms",
      "Beautiful interior",
      "Self meter",
      "Water flowing",
      "Walled and gated"
    ],
    amenities: [
      "Beautiful interior design",
      "Self meter system",
      "Continuous water flow",
      "Walled compound",
      "Security gate",
      "Hot location"
    ],
    nearbyPlaces: [
      "Tseaddo container area",
      "Business district",
      "Shopping centers",
      "Schools nearby",
      "Hospital access",
      "Transport links"
    ],
    propertyDetails: {
      yearBuilt: 2022,
      parking: 1,
      furnishing: "Semi-Furnished",
      petPolicy: "Conditional",
      utilities: ["Self meter", "Water system", "Modern facilities"],
      securityFeatures: ["Walled compound", "Security gate", "Good lighting"]
    },
    financialDetails: {
      securityDeposit: 8000,
      agentCommission: 10,
      registrationFee: 200
    }
  },
  {
    id: 8,
    title: "4 Bedroom Executive Townhouse - Ring Way Estate",
    shortDescription: "Executive townhouse with shared pool near British High Commission",
    features: [
      "4 bedroom townhouse",
      "Shared swimming pool",
      "Furnished kitchen",
      "Two large living areas",
      "Balcony access",
      "Near British High Commission"
    ],
    amenities: [
      "Shared swimming pool",
      "24/7 security",
      "Solar power backup",
      "Air conditioning",
      "Furnished kitchen",
      "Uninterrupted water flow"
    ],
    nearbyPlaces: [
      "British High Commission",
      "Embassy area",
      "International schools",
      "Shopping centers",
      "Hospitals",
      "Business district"
    ],
    propertyDetails: {
      yearBuilt: 2020,
      parking: 3,
      furnishing: "Furnished",
      petPolicy: "Conditional",
      utilities: ["Solar power", "AC", "All appliances", "Uninterrupted water"],
      securityFeatures: ["24/7 security", "Estate security", "Access control"]
    },
    financialDetails: {
      securityDeposit: 6400,
      agentCommission: 5,
      registrationFee: 200,
      serviceCharge: 0
    }
  },
  {
    id:9,
    title: "2 Bedroom Semi Detached Townhouse - University of Professional Studies",
    shortDescription: "Semi detached townhouse with beautiful interior and premium features",
    features: [
      "2 bedroom townhouse",
      "Beautiful interior",
      "Self meter",
      "Water flowing",
      "Walled and gated"
    ],
    amenities: [
      "Beautiful interior design",
      "Self meter system",
      "Continuous water flow",
      "Walled compound",
      "Security gate",
    ],
    nearbyPlaces: [
      "University of Professional Studies",
    ]
    ,
    propertyDetails: {
      yearBuilt: 2022,
      parking: 1,
      furnishing: "Semi-Furnished",
      petPolicy: "Conditional",
      utilities: ["Self meter", "Water system", "Modern facilities"],
      securityFeatures: ["Walled compound", "Security gate", "Good lighting"]
    },
    financialDetails: {
      securityDeposit: 8000,
      agentCommission: 10,
      registrationFee: 200
    }
  },
  {
  id: 10,
  title: "Avant-Garde Townhouses - Ogbojo",
  shortDescription: "Exquisite 2 & 3-bedroom townhouses in Ogbojo with modern design and premium amenities",
  features: [
    "Choice of 2 or 3 spacious bedrooms",
    "Contemporary bathrooms with modern fixtures",
    "Fully equipped modern kitchen",
    "Open-concept living and dining areas",
    "Private balconies",
    "Communal garden space"
  ],
  amenities: [
    "Dedicated parking spaces",
    "24/7 security surveillance",
    "Serene landscaped surroundings",
    "Modern kitchen appliances",
    "Private outdoor space",
    "Balcony access"
  ],
  nearbyPlaces: [
    "East Legon schools",
    "Shopping centers",
    "Recreational facilities",
    "Health facilities",
    "Transport routes",
    "Ogbojo community"
  ],
  propertyDetails: {
    yearBuilt: 2024,
    parking: 2,
    furnishing: "Semi-Furnished",
    petPolicy: "Allowed",
    utilities: ["Water supply", "Electricity", "Security services"],
    securityFeatures: ["24/7 CCTV surveillance", "Estate security", "Gated community"]
  },
  financialDetails: {
    securityDeposit: 12000,
    agentCommission: 8,
    registrationFee: 300
  }
},
{
  id: 11,
  title: "6 Room Office for Rent - East Legon",
  shortDescription: "Six (6) room office facility (all ensuite) on a strategic location to let at East Legon near MTN office.",
  features: [
    "6 ensuite rooms",
    "Partly furnished kitchen",
    "Automated garage",
    "Polytanks for water storage",
    "Air conditioning in each room",
    "Wardrobe in each room"
  ],
  amenities: [
    "Air conditioning",
    "Balcony",
    "Generator/Power Backup",
    "Internet/DSTV",
    "Kitchen"
  ],
  nearbyPlaces: [
    "MTN office",
    "East Legon business district",
    "Restaurants and cafes",
    "Banks and ATMs",
    "Major transport routes"
  ],
  propertyDetails: {
    yearBuilt: 2022,
    parking: 4,
    furnishing: "Semi-Furnished",
    petPolicy: "Not Allowed",
    utilities: ["Uninterrupted water flow", "Standby generator"],
    securityFeatures: ["Automated garage", "Secure compound"]
  },
  financialDetails: {
    securityDeposit: 3000,
    agentCommission: 10,
    registrationFee: 200
  }
},
{
  id: 12,
  title: "Executive Office Facility - Labone",
  shortDescription: "An executive office facility (self compound) to let at Labone near Labone Ecobank.",
  features: [
    "Large car parking area",
    "Provision for Air-conditioners",
    "Internet connection on each floor",
    "Partitioned into individual and conference rooms",
    "Server room",
    "Kitchenettes"
  ],
  amenities: [
    "Air conditioning",
    "Balcony",
    "Generator/Power Backup",
    "Internet/DSTV",
    "Kitchen"
  ],
  nearbyPlaces: [
    "Labone Ecobank",
    "Labone business district",
    "Restaurants and cafes",
    "Embassies",
    "Major transport routes"
  ],
  propertyDetails: {
    yearBuilt: 2021,
    parking: 19,
    furnishing: "Unfurnished",
    petPolicy: "Not Allowed",
    utilities: ["Uninterrupted water flow", "Standby reservoirs"],
    securityFeatures: ["Security post", "Secure compound"]
  },
  financialDetails: {
    securityDeposit: 20,
    agentCommission: 10,
    registrationFee: 200
  }
},
{
  id: 13,
  title: "Executive Office Facility - Cantonments",
  shortDescription: "An executive office facility with a large and well demarcated car parking space for rent in Cantonments.",
  features: [
    "Central A/c",
    "High speed internet facilities",
    "Enough washrooms",
    "24/7 management team",
    "Standby plant for backup power",
    "Large water storage facility"
  ],
  amenities: [
    "Air conditioning",
    "Generator/Power Backup",
    "Internet/DSTV",
    "Kitchen"
  ],
  nearbyPlaces: [
    "Cantonments business district",
    "Embassies",
    "Restaurants and cafes",
    "International schools",
    "Major transport routes"
  ],
  propertyDetails: {
    yearBuilt: 2020,
    parking: 10,
    furnishing: "Unfurnished",
    petPolicy: "Not Allowed",
    utilities: ["Uninterrupted water flow", "Standby power"],
    securityFeatures: ["24/7 security", "On-site management"]
  },
  financialDetails: {
    securityDeposit: 42000,
    agentCommission: 10,
    registrationFee: 200,
    serviceCharge: 0
  }
}

];

// Utility functions
export function formatPrice(price: number, currency: string, listingType: "rent" | "sale"): string {
  const formatter = new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: currency === 'GHS' ? 'GHS' : 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const formattedPrice = formatter.format(price);
  return listingType === 'rent' ? `${formattedPrice}/month` : formattedPrice;
}

// Get properties by category
export function getPropertiesByCategory(category: PropertyCategory): Property[] {
  return Properties.filter(property => property.category === category);
}

// Get all categories with property counts
export function getCategoriesWithCounts(): Array<{
  category: PropertyCategory;
  label: string;
  description: string;
  icon: string;
  color: string;
  count: number;
}> {
  return Object.entries(PROPERTY_CATEGORIES).map(([key, config]) => ({
    category: key as PropertyCategory,
    ...config,
    count: getPropertiesByCategory(key as PropertyCategory).length
  }));
}

// Add new property with automatic categorization
export async function addProperty(property: Omit<Property, 'id' | 'category'>): Promise<Property> {
  const newId = Math.max(...Properties.map(p => p.id)) + 1;
  const category = categorizeProperty(property);
  const newProperty = { ...property, id: newId, category };
  Properties.unshift(newProperty);

  await new Promise((resolve) => setTimeout(resolve, 500));

  notifyPropertyUpdate();
  return newProperty;
}

// Update an existing property with re-categorization
export async function updateProperty(property: Property): Promise<Property> {
  const index = Properties.findIndex(p => p.id === property.id);
  if (index === -1) {
    throw new Error('Property not found');
  }

  // Re-categorize if needed
  const updatedProperty = {
    ...property,
    category: categorizeProperty(property)
  };

  Properties[index] = updatedProperty;

  await new Promise((resolve) => setTimeout(resolve, 500));

  notifyPropertyUpdate();
  return updatedProperty;
}

// Event system for property updates
type PropertyUpdateListener = () => void;
const propertyUpdateListeners: PropertyUpdateListener[] = [];

export function subscribeToPropertyUpdates(listener: PropertyUpdateListener) {
  propertyUpdateListeners.push(listener);
  return () => {
    const index = propertyUpdateListeners.indexOf(listener);
    if (index > -1) {
      propertyUpdateListeners.splice(index, 1);
    }
  };
}

function notifyPropertyUpdate() {
  propertyUpdateListeners.forEach(listener => listener());
}

// Delete a property
export async function deleteProperty(id: number): Promise<void> {
  const index = Properties.findIndex(p => p.id === id);
  if (index === -1) {
    throw new Error('Property not found');
  }

  Properties.splice(index, 1);

  await new Promise((resolve) => setTimeout(resolve, 500));

  notifyPropertyUpdate();
}

// Simulate API call with loading time
export async function fetchProperties(): Promise<Property[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Properties;
}

// Get property by ID
export async function getPropertyById(id: number): Promise<Property | null> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const property = Properties.find(p => p.id === id);
  return property || null;
}

// Get property listing by ID
export async function getPropertyListingById(id: number): Promise<PropertyListing | null> {
  await new Promise(resolve => setTimeout(resolve, 500));
  const listing = PropertyListings.find(listing => listing.id === id);
  return listing || null;
}

// Function to get all properties
export async function getAllProperties(): Promise<Property[]> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return Properties;
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