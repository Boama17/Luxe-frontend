"use client"

import type React from "react"
import { useRouter } from "next/navigation"

import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, Pagination } from "swiper/modules"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Loader2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  BedDouble,
  Bath,
  Ruler,
  MapPin,
  Heart,
  Star,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

//images
import one from "../../../public/house1.jpg"
import two from "../../../public/house2.jpg"
import three from "../../../public/house3.jpg"
import four from "../../../public/house4.jpg"
import five from "../../../public/house5.jpg"
import six from "../../../public/house6.jpg"
import Flora from "@/components/ui/flora"

// Mock data for demonstration
const mockProperties = [
  {
    id: 1,
    title: "Family Residence",
    city: "Tema",
    location: "Tema Community 25",
    price: 320000,
    currency: "₵",
    bedrooms: 3,
    bathrooms: 2,
    area: 1200,
    status: "active",    imageUrl: one.src,
    rating: 4.8,
    isNew: true,
  },
  {
    id: 2,
    title: "Contemporary House",
    city: "Accra",
    location: "Trasacco Estate",
    price: 520000,
    currency: "₵",
    bedrooms: 4,
    bathrooms: 3,
    area: 1800,
    imageUrl: two.src,
    rating: 4.9,
    isNew: false,
  },
  {
    id: 3,
    title: "Spacious Villa",
    city: "Accra",
    location: "Roman Ridge",
    price: 750000,
    currency: "₵",
    bedrooms: 6,
    bathrooms: 5,
    area: 2500,
    imageUrl: three.src,
    rating: 5.0,
    isNew: true,
  },
  {
    id: 4,
    title: "Modern Apartment",
    city: "Kumasi",
    location: "Airport Residential",
    price: 280000,
    currency: "₵",
    bedrooms: 2,
    bathrooms: 2,
    area: 900,
    imageUrl: four.src,
    rating: 4.6,
    isNew: false,
  },
  {
    id: 5,
    title: "Luxury Penthouse",
    city: "Accra",
    location: "East Legon",
    price: 950000,
    currency: "₵",
    bedrooms: 5,
    bathrooms: 4,
    area: 2200,
    imageUrl: five.src,
    rating: 4.9,
    isNew: true,
  },
  {
    id: 6,
    title: "Garden Estate Home",
    city: "Takoradi",
    location: "European Town",
    price: 420000,
    currency: "₵",
    bedrooms: 4,
    bathrooms: 3,
    area: 1600,
    imageUrl: six.src,
    rating: 4.7,
    isNew: false,
  },
]

type Property = (typeof mockProperties)[0]

const formatPrice = (price: number, currency: string) => {
  return `${currency}${price.toLocaleString()}`
}

export default function PropertyListing() {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [showAll, setShowAll] = useState<boolean>(false)
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  // Simulate data loading
  useEffect(() => {
    const loadProperties = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setProperties(mockProperties)
      } catch (err) {
        setError("Failed to load properties. Please try again later.")
        console.error("Fetch error:", err)
      } finally {
        setLoading(false)
      }
    }

    loadProperties()
  }, [])

  const toggleViewMore = () => {
    setShowAll((prev) => !prev)
  }

  const toggleFavorite = (propertyId: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(propertyId)) {
        newFavorites.delete(propertyId)
      } else {
        newFavorites.add(propertyId)
      }
      return newFavorites
    })
  }

  // Property feature component with improved styling
  const PropertyFeature = ({
    icon: Icon,
    value,
    label,
  }: {
    icon: React.ComponentType<{ className?: string }>
    value: number
    label: string
  }) => (
    <div className="flex items-center gap-2 text-gray-700">
      <div className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
        <Icon className="w-4 h-4 text-green-600" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-900">{value}</span>
        <span className="text-xs text-gray-500">{label}</span>
      </div>
    </div>
  )

  // Enhanced property card component
  const PropertyCard = ({
    property,
    index = 0,
  }: {
    property: Property
    index?: number
  }) => {
    const router = useRouter()
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="h-full font-[Poppins-regular]"
      >
        <Card className="group relative overflow-hidden h-full bg-white shadow-sm hover:shadow-xl transition-all duration-300 border-0 rounded-2xl">
          {/* Image container with improved aspect ratio */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
            <Image
              src={property.imageUrl || "/placeholder.svg"}
              alt={`${property.title} in ${property.location}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 3}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            {/* Top badges and buttons */}
            <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
              {/* New badge */}
              {property.isNew && (
                <Badge className="bg-green-500 hover:bg-green-600 text-white border-0 px-3 py-1 text-xs font-medium">
                  New
                </Badge>
              )}

              {/* Favorite button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation()
                  toggleFavorite(String(property.id))
                }}
                className="ml-auto w-9 h-9 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-sm border-0"
              >
                <Heart
                  className={`w-4 h-4 transition-colors ${
                    favorites.has(String(property.id)) ? "text-red-500 fill-red-500" : "text-gray-600 hover:text-red-500"
                  }`}
                />
              </Button>
            </div>

            {/* Price badge */}
            <div className="absolute top-4 right-4">
              <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm">
                <span className="font-bold text-green-600 text-lg">{formatPrice(property.price, property.currency)}</span>
              </div>
            </div>

            {/* Location badge */}
            <div className="absolute bottom-4 left-4">
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <MapPin className="w-3.5 h-3.5 text-white" />
                <span className="text-white text-sm font-medium">{property.location}</span>
              </div>
            </div>
          </div>

          {/* Card content with better spacing */}
          <CardContent className="p-6 flex flex-col h-full">
            {/* Title and rating */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-1 group-hover:text-green-600 transition-colors">
                  {property.title}
                </h3>
                <p className="text-gray-600 text-sm font-medium">{property.city}</p>
              </div>
              <div className="flex items-center gap-1 ml-3">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-semibold text-gray-700">{property.rating}</span>
              </div>
            </div>

            {/* Property features with improved layout */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <PropertyFeature icon={BedDouble} value={property.bedrooms} label="Beds" />
              <PropertyFeature icon={Bath} value={property.bathrooms} label="Baths" />
              <PropertyFeature icon={Ruler} value={property.area} label="Sq Ft" />
            </div>

            {/* View Details button */}
            <Button
              className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
              onClick={() => router.push(`/property/${property.id}`)}
            >
              View Details
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  // Loading state
  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-16">
        <Header />
        <div className="flex flex-col items-center justify-center h-64 rounded-2xl bg-gray-50">
          <Loader2 className="w-8 h-8 text-green-600 mb-4 animate-spin" />
          <span className="text-gray-600 font-medium">Loading properties...</span>
        </div>
      </section>
    )
  }

  // Error state
  if (error) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-16">
        <Header />
        <div className="flex flex-col items-center justify-center h-64 p-8 bg-red-50 rounded-2xl text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-red-600 text-xl">⚠</span>
          </div>
          <h3 className="text-lg font-semibold text-red-800 mb-2">Something went wrong</h3>
          <p className="text-red-600 mb-6">{error}</p>
          <Button onClick={() => window.location.reload()} className="bg-green-600 hover:bg-green-700">
            Try Again
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <Header />

      {/* Featured properties carousel */}
      <div className="relative mb-16">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-green-200 !opacity-100",
            bulletActiveClass: "!bg-green-600",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="!pb-12"
        >
          {properties.slice(0, 6).map((property, index) => (
            <SwiperSlide key={property.id} className="!h-auto">
              <PropertyCard property={property} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border-gray-200 hover:bg-gray-50 z-10"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border-gray-200 hover:bg-gray-50 z-10"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Additional properties grid */}
      <AnimatePresence>
        {showAll && properties.length > 6 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">More Properties</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover additional premium properties in our collection
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.slice(6).map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* View more button */}
      {properties.length > 6 && (
        <div className="flex justify-center">
          <Button
            onClick={toggleViewMore}
            variant="outline"
            className="flex items-center gap-2 px-8 py-3 rounded-xl border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 transition-all duration-200"
          >
            <motion.div animate={{ rotate: showAll ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
            {showAll ? "Show Less" : `View All Properties (${properties.length})`}
          </Button>
        </div>
      )}
    </section>
  )
}

// Header component
const Header = () => (
  <motion.header
    className="flex items-center justify-between mb-20"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
  >
    <div className="flex items-center gap-8">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 10 }}
      >
        <Flora />
      </motion.div>
      <span className="font-[Poppins-regular] text-sm tracking-wider text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
        Featured Properties
      </span>
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="hidden md:flex items-center gap-4"
    >
      <span className="text-sm text-gray-500 bg-gradient-to-r from-gray-100 to-gray-50 px-6 py-3 rounded-2xl border border-gray-200 font-medium shadow-sm">
        Featured Collection
      </span>
      <div className="flex items-center gap-2 text-green-600">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium">{`Live Updates`}</span>
      </div>
    </motion.div>
  </motion.header>
)
