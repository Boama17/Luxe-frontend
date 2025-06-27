// src/app/property/[id]/page.tsx
"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Heart, MapPin, BedDouble, Bath, Ruler, Star, Loader2 } from "lucide-react"
import { getPropertyById, Property, formatPrice } from "@/lib/properties"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PropertyDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const [property, setProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentImage, setCurrentImage] = useState(0)
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setError(null)
      try {
        const prop = await getPropertyById(Number(id))
        if (!prop) setError("Property not found")
        setProperty(prop || null)
      } catch {
        setError("Failed to load property.")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <Loader2 className="w-8 h-8 text-green-600 animate-spin mb-4" />
        <span className="text-gray-600">Loading property details...</span>
      </div>
    )
  }

  if (error || !property) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <span className="text-red-600">{error || "Property not found."}</span>
        <Button onClick={() => router.back()} className="mt-4">Go Back</Button>
      </div>
    )
  }

  // For demonstration, use the same image multiple times as a gallery
  const images = [property.imageUrl, property.imageUrl, property.imageUrl]

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 font-[Poppins-regular]">
      {/* Breadcrumbs */}
      <nav className="mb-6 text-sm text-gray-500 flex items-center gap-2">
        <span className="cursor-pointer hover:underline" onClick={() => router.push("/")}>Home</span>
        <span>›</span>
        <span className="cursor-pointer hover:underline" onClick={() => router.push("/search")}>
          For {property.listingType === 'rent' ? 'Rent' : 'Sale'}
        </span>
        <span>›</span>
        <span className="cursor-pointer hover:underline">{property.city}</span>
        <span>›</span>
        <span className="font-semibold">{property.title}</span>
      </nav>

      {/* Title & Price */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{property.location}</span>
            <Badge className={`ml-2 ${property.listingType === 'rent' ? 'bg-blue-500' : 'bg-purple-500'} text-white`}>
              For {property.listingType === 'rent' ? 'Rent' : 'Sale'}
            </Badge>
            <Badge className="ml-2 bg-green-500 text-white">{property.isNew ? "New" : "Featured"}</Badge>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-green-700">
            {formatPrice(property.price, property.currency, property.listingType)}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setFavorites(fav => {
              const newFav = new Set(fav)
              if (newFav.has(String(property.id))) newFav.delete(String(property.id))
              else newFav.add(String(property.id))
              return newFav
            })}
            className="w-10 h-10 bg-white border border-gray-200 rounded-full shadow"
          >
            <Heart className={favorites.has(String(property.id)) ? "text-red-500 fill-red-500" : "text-gray-600"} />
          </Button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative mb-8">
        <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden relative">
          <Image
            src={images[currentImage]}
            alt={property.title}
            fill
            className="object-cover"
            priority
          />
          {/* Gallery navigation */}
          {images.length > 1 && (
            <>
              <button
                onClick={() => setCurrentImage(i => (i - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center"
                aria-label="Previous photo"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => setCurrentImage(i => (i + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center"
                aria-label="Next photo"
              >
                <ChevronRight />
              </button>
            </>
          )}
          {/* Image indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`w-2 h-2 rounded-full ${idx === currentImage ? "bg-white w-4" : "bg-white/50"}`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Property Features */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="flex items-center gap-2 text-gray-700">
          <BedDouble className="w-5 h-5 text-green-600" />
          <span className="font-semibold">{property.bedrooms} Beds</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Bath className="w-5 h-5 text-green-600" />
          <span className="font-semibold">{property.bathrooms} Baths</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Ruler className="w-5 h-5 text-green-600" />
          <span className="font-semibold">{property.area} Sq Ft</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <span className="font-semibold">{property.rating} Rating</span>
        </div>
      </div>

      {/* Description & Features */}
      <div className="bg-white rounded-2xl shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Property Details</h2>
        <p className="text-gray-700 mb-4">{property.description}</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
          <li>All rooms en-suite with visitors washroom</li>
          <li>Serene and secured environment</li>
          <li>Neat kitchen</li>
          <li>Fully fitted Air Conditions</li>
          <li>Spacious rooms and Hall</li>
          <li>Good road network</li>
          <li>Reservoir</li>
          <li>Security</li>
        </ul>
        <div className="text-gray-600">
          Executive {property.bedrooms} bedroom {property.propertyType.toLowerCase()} for {property.listingType} at {property.location}. Security, reservoir, good road network, self meter.
        </div>
      </div>

      {/* Categories & Pricing Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-semibold mb-2">Categories</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>{property.propertyType} for {property.listingType === 'rent' ? 'Rent' : 'Sale'}</Badge>
            <Badge>{property.propertyType} for {property.listingType === 'rent' ? 'Rent' : 'Sale'} in {property.location}</Badge>
            <Badge>{property.bedrooms}-bedroom {property.propertyType} for {property.listingType === 'rent' ? 'Rent' : 'Sale'}</Badge>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">
            {property.listingType === 'rent' ? 'Lease Options' : 'Sale Information'}
          </h3>
          {property.listingType === 'rent' ? (
            <>
              <div className="text-gray-700">
                12 months @ <span className="font-bold">{formatPrice(property.price, property.currency, property.listingType)}</span>
              </div>
              <div className="text-gray-500">Negotiable</div>
              <div className="text-gray-500">Commission: 10%</div>
              <div className="text-gray-500">Registration fee: GH₵ 200</div>
            </>
          ) : (
            <>
              <div className="text-gray-700">
                Sale Price: <span className="font-bold">{formatPrice(property.price, property.currency, property.listingType)}</span>
              </div>
              <div className="text-gray-500">Price negotiable</div>
              <div className="text-gray-500">Legal fees: 2% of sale price</div>
              <div className="text-gray-500">Agent commission: 5%</div>
            </>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-green-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-semibold text-gray-900 mb-1">Call Or WhatsApp Now for a swift response</div>
          <div className="text-lg font-bold text-green-700">05917*****/05534*****</div>
          <div className="text-sm text-gray-600 mt-1">Agent: {property.agent}</div>
        </div>
        <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl text-lg font-semibold">
          Contact Agent
        </Button>
      </div>
    </div>
  )
}