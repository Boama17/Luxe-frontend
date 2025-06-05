"use client"

import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import Image from "next/image"
import "swiper/css/navigation"
import { fetchProperties, formatPrice, type Property } from "@/lib/properties"
import { Loader2, ChevronDown, ChevronUp } from "lucide-react"
import Flora from "../../components/ui/flora"

export default function PropertyListing() {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)
  const [isExpanding, setIsExpanding] = useState(false)

  // Fetch properties when component mounts
  useEffect(() => {
    async function loadProperties() {
      try {
        setLoading(true)
        const data = await fetchProperties()
        setProperties(data)
      } catch (err) {
        setError("Failed to load properties")
        console.error("Error fetching properties:", err)
      } finally {
        setLoading(false)
      }
    }

    loadProperties()
  }, [])

  const handleViewMore = () => {
    setIsExpanding(true)
    setTimeout(() => {
      setShowAll(!showAll)
      setIsExpanding(false)
    }, 300)
  }

  // Show only first 6 properties initially
  const displayedProperties = showAll ? properties : properties.slice(0, 6)
  const additionalProperties = showAll ? properties.slice(6) : []

  const BedIcon = () => (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="200.000000pt"
      height="200.000000pt"
      viewBox="0 0 200.000000 200.000000"
      className="size-10 mt-2 ml-2"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path d="M763 1480 c-35 -14 -43 -42 -43 -148 l0 -99 -38 -7 c-85 -13 -152 -94 -152 -184 0 -36 3 -43 18 -40 12 2 18 16 22 53 7 61 30 98 75 119 29 14 93 16 480 16 495 0 495 0 535 -65 15 -24 20 -50 20 -101 l0 -69 -552 3 c-304 1 -563 0 -576 -3 -22 -5 -23 -9 -20 -98 2 -74 6 -92 18 -92 12 0 16 17 18 78 l3 77 554 0 554 0 3 -77 c2 -61 6 -78 18 -78 13 0 16 25 18 150 3 159 -4 204 -40 250 -41 53 -87 65 -250 65 l-148 0 0 34 c0 19 -9 44 -19 57 -18 23 -25 24 -136 24 -111 0 -118 -1 -136 -24 -10 -13 -19 -38 -19 -57 l0 -34 -105 0 -105 0 0 104 c0 85 3 105 16 110 23 9 687 7 701 -2 7 -5 13 -39 15 -87 2 -63 6 -80 18 -80 12 0 16 17 18 81 2 68 0 85 -17 105 l-19 24 -354 2 c-194 1 -363 -2 -375 -7z m465 -182 c7 -7 12 -25 12 -40 l0 -28 -115 0 -115 0 0 28 c0 45 16 52 115 52 57 0 95 -4 103 -12z" />
      </g>
    </svg>
  )

  const BathIcon = () => (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="1320.000000pt"
      height="880.000000pt"
      viewBox="0 0 1320.000000 880.000000"
      className="size-10 mt-[0.7rem]"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(0.000000,880.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path d="M7950 7331 c-343 -73 -636 -309 -923 -743 -50 -76 -94 -138 -98 -138 -3 0 -71 29 -150 64 -79 35 -176 77 -215 94 l-71 30 -76 -172 c-43 -94 -77 -176 -77 -182 0 -12 2 -13 630 -299 250 -114 493 -224 539 -246 46 -21 89 -39 96 -39 11 0 69 111 150 285 l33 71 -234 109 c-129 59 -234 112 -234 117 0 15 127 203 190 282 84 104 219 229 300 277 182 108 397 132 603 69 177 -55 308 -205 366 -421 55 -202 54 -175 58 -1161 l4 -918 -2323 -2 -2323 -3 -52 -24 c-130 -59 -205 -207 -174 -349 21 -99 305 -712 439 -947 155 -273 329 -467 509 -570 l53 -31 -210 -209 c-116 -115 -210 -213 -210 -217 0 -5 113 -8 251 -8 l251 0 147 142 148 141 1114 -2 c1117 -2 1271 2 1459 34 134 23 121 40 119 -147 l-1 -163 204 0 203 0 2 238 2 239 72 44 c288 178 495 442 613 783 41 117 80 297 95 443 15 132 15 2308 1 2449 -54 531 -274 891 -629 1028 -183 71 -459 92 -651 52z m890 -3358 c-1 -60 -21 -219 -40 -308 -53 -254 -155 -450 -314 -602 -172 -166 -384 -261 -686 -310 -92 -14 -232 -17 -1125 -20 -1065 -5 -1203 -1 -1350 37 -117 30 -179 64 -265 146 -144 138 -254 313 -476 758 -85 170 -154 313 -154 317 0 5 986 9 2205 9 l2205 0 0 -27z" />
      </g>
    </svg>
  )

  const AreaIcon = () => (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="200.000000pt"
      height="200.000000pt"
      viewBox="0 0 200.000000 200.000000"
      className="size-7 mt-2 ml-2"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path d="M415 1585 l-25 -24 0 -561 0 -561 25 -24 24 -25 561 0 561 0 24 25 c25 24 25 27 25 189 0 181 -7 214 -49 222 -14 3 -183 6 -376 7 l-350 2 -2 350 c-1 193 -4 362 -7 376 -8 42 -41 49 -222 49 -162 0 -165 0 -189 -25z m345 -407 l0 -363 -142 -142 c-79 -79 -146 -143 -151 -143 -4 0 -6 71 -5 158 l3 157 55 3 c59 3 80 14 80 43 0 20 -19 27 -90 31 l-45 3 0 75 0 75 45 3 c71 4 90 11 90 31 0 29 -21 40 -80 43 l-55 3 0 75 0 75 59 5 c66 6 90 26 67 54 -10 11 -31 16 -72 16 l-59 0 0 73 c0 41 3 77 7 80 3 4 71 7 150 7 l143 0 0 -362z m778 -565 l-3 -148 -75 0 -75 0 -3 55 c-3 59 -14 80 -43 80 -20 0 -27 -19 -31 -90 l-3 -45 -77 -3 -78 -3 0 59 c0 42 -5 63 -16 73 -28 23 -48 -1 -54 -67 l-5 -59 -75 0 -75 0 -3 62 c-2 52 -6 63 -23 68 -34 11 -49 -12 -49 -76 l0 -59 -160 0 c-88 0 -160 3 -160 7 0 4 64 72 142 150 l143 143 363 0 363 0 -3 -147z" />
      </g>
    </svg>
  )

  // Property Card Component for reusability
  const PropertyCard = ({ property }: { property: Property }) => (
    <div className="sale w-full">
    <div className="relative">
      <Image
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-[18rem] sm:h-[18rem] md:h-[18rem] lg:h-[18rem] rounded-2xl mx-auto object-cover"
        width={600} // Adjust width as appropriate for your layout
        height={288} // Adjust height as appropriate for your layout
        priority={true}
        sizes="(max-width: 1024px) 100vw, 33vw"
      />

        <div className="flex h-12 w-full max-w-[22rem] mx-auto rounded-3xl -mt-16 bg-white/90 backdrop-blur-sm relative shadow-lg">
          <div className="flex items-center justify-between -mt-3 -ms-2 w-full">
            <div className="flex items-center">
              <BedIcon />
              <span className="text-xs font-[Poppins-Regular] mt-4 ml-2 mr-1 flex w-max text-gray-800">
                {property.bedrooms} Bedroom{property.bedrooms !== 1 ? "s" : ""}
              </span>
            </div>

            <div className="flex items-center">
              <BathIcon />
              <span className="text-xs font-[Poppins-Regular] mt-4 mr-1 flex w-max text-gray-800">
                {property.bathrooms} Bathroom{property.bathrooms !== 1 ? "s" : ""}
              </span>
            </div>

            <div className="flex items-center">
              <AreaIcon />
              <span className="text-xs font-[Poppins-Regular] mt-4 mr-1 flex w-max text-gray-800">
                {property.area.toLocaleString()} ft²
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="descr">
        <div className="head font-[Poppins] mt-10 text-2xl flex justify-between px-10">
          <span className="text-gray-900">{property.title}</span>
          <span className="text-green-700 font-bold">
            {formatPrice(property.price, property.currency)}
          </span>
        </div>
        <div className="small text-sm font-[Poppins-Regular] mt-8 mx-10 mb-6 text-gray-600">
          {property.location}, {property.city}, {property.region}
        </div>
      </div>
    </div>
  )

  if (loading) {
    return (
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero flex pt-24 ml-20">
          <div className="flex items-center gap-2">
            <Flora />
            <span className="font-[Poppins-Regular] mt-5 ml-8 text-sm text-gray-700">(Featured Properties)</span>
          </div>
        </div>
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-green-600" />
          <span className="ml-2 text-gray-600">Loading properties...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="hero flex pt-24 ml-20">
        <div className="flex items-center gap-2">
          <Flora />
          <span className="font-[Poppins-Regular] mt-5 ml-8 text-sm text-gray-700">(Featured Properties)</span>
        </div>
      </div>

      <div className="relative">
        {/* Initial Properties Swiper */}
        <div 
          className={`transition-all duration-500 ease-in-out ${
            isExpanding ? 'opacity-50' : 'opacity-100'
          }`}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20,
              },
            }}
            className="mt-5"
          >
            {displayedProperties.slice(0, 6).map((property) => (
              <SwiperSlide key={property.id}>
                <PropertyCard property={property} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Additional Properties in Vertical Layout */}
        {showAll && additionalProperties.length > 0 && (
          <div className="mt-12 space-y-8">
            <h3 className="text-xl font-[Poppins] text-gray-800 text-center mb-8">
              More Properties
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalProperties.map((property) => (
                <div key={property.id} className="w-full">
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fade overlay when not showing all properties */}
        {!showAll && properties.length > 6 && (
          <div className="absolute bottom-0 left-0 -ms-8 right-0 h-32 w-[104%] bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
        )}

        {/* View More Button */}
        {properties.length > 6 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleViewMore}
              className="flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 font-[Poppins-Regular] font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  View Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  View More
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}