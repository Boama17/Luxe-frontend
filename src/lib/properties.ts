// Types for our property data

import one from "../assets/img/one.jpg"
import two from "../assets/img/three.jpg"
import three from "../assets/img/two.png"
import four from "../assets/img/near.png"
import five from "../assets/img/second.png"
import six from "../assets/img/hero.png"
export interface Property {
    id: string
    title: string
    price: number
    currency: string
    bedrooms: number
    bathrooms: number
    area: number
    location: string
    city: string
    region: string
    imageUrl: string
    description: string
}

// Mock data with real Ghana locations and realistic prices
const Properties: Property[] = [
    {
        id: "1",
        title: "Modern Family House",
        price: 450000,
        currency: "GHS",
        bedrooms: 4,
        bathrooms: 3,
        area: 2500,
        location: "East Legon",
        city: "Accra",
        region: "Greater Accra",
        imageUrl: one.src,
        description: "Beautiful modern house in prestigious East Legon",
    },
    {
        id: "2",
        title: "Executive Villa",
        price: 680000,
        currency: "GHS",
        bedrooms: 5,
        bathrooms: 4,
        area: 3200,
        location: "Airport Residential",
        city: "Accra",
        region: "Greater Accra",
        imageUrl: two.src,
        description: "Luxury villa near Kotoka International Airport",
    },
    {
        id: "3",
        title: "Family Residence",
        price: 320000,
        currency: "GHS",
        bedrooms: 3,
        bathrooms: 2,
        area: 1800,
        location: "Tema Community 25",
        city: "Tema",
        region: "Greater Accra",
        imageUrl: three.src,
        description: "Comfortable family home in quiet neighborhood",
    },
    {
        id: "4",
        title: "Contemporary House",
        price: 520000,
        currency: "GHS",
        bedrooms: 4,
        bathrooms: 3,
        area: 2800,
        location: "Trasacco Estate",
        city: "Accra",
        region: "Greater Accra",
        imageUrl: four.src,
        description: "Modern house in exclusive gated community",
    },
    {
        id: "5",
        title: "Spacious Villa",
        price: 750000,
        currency: "GHS",
        bedrooms: 6,
        bathrooms: 5,
        area: 4000,
        location: "Roman Ridge",
        city: "Accra",
        region: "Greater Accra",
        imageUrl: five.src,
        description: "Large villa with swimming pool and garden",
    },
    {
        id: "6",
        title: "Cozy Family Home",
        price: 280000,
        currency: "GHS",
        bedrooms: 3,
        bathrooms: 2,
        area: 1600,
        location: "Adenta Housing Down",
        city: "Adenta",
        region: "Greater Accra",
        imageUrl: six.src,
        description: "Affordable family home with modern amenities",
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
