"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import Head from "next/head"
import Image from "next/image"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { Search, Home, ChevronLeft, ChevronRight, X, Grid, List, SlidersHorizontal, MapPin, BathIcon, RulerIcon } from "lucide-react"
import { searchProperties, type Property, type PropertySearchParams } from "../services/propertyService"

const hasSearchCriteria = (filters: PropertySearchParams): boolean => {
  return !!(filters.search && filters.search.trim().length > 0)
}

export default function SearchResults() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const [loading, setLoading] = useState(true)
  const [properties, setProperties] = useState<Property[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [error, setError] = useState<string | null>(null)
  // const [hasSearched, setHasSearched] = useState(false); // REMOVE: unused

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "newest" | "oldest">("newest")

  const [filters, setFilters] = useState<PropertySearchParams>({
    search: "",
    propertyType: "",
    minPrice: 0,
    maxPrice: 10000000,
    minBedrooms: 0,
    minBathrooms: 0,
  })

  const [tempFilters, setTempFilters] = useState<PropertySearchParams>(filters)
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)

  // Debounce search input
  const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
      const handler = setTimeout(() => setDebouncedValue(value), delay)
      return () => clearTimeout(handler)
    }, [value, delay])
    return debouncedValue
  }
  const debouncedSearch = useDebounce(tempFilters.search || "", 500)

  // Sync filters with URL params on mount
  useEffect(() => {
    const newFilters: PropertySearchParams = {
      search: searchParams.get("search") || "",
      propertyType: searchParams.get("propertyType") || "",
      minPrice: searchParams.get("minPrice") ? Number.parseInt(searchParams.get("minPrice")!) : 0,
      maxPrice: searchParams.get("maxPrice") ? Number.parseInt(searchParams.get("maxPrice")!) : 10000000,
      minBedrooms: searchParams.get("minBedrooms") ? Number.parseInt(searchParams.get("minBedrooms")!) : 0,
      minBathrooms: searchParams.get("minBathrooms") ? Number.parseInt(searchParams.get("minBathrooms")!) : 0,
    }
    setFilters(newFilters)
    setTempFilters(newFilters)
    setCurrentPage(searchParams.get("page") ? Number.parseInt(searchParams.get("page")!) : 1)
    setSortBy((searchParams.get("sort") as typeof sortBy) || "newest")
    setViewMode((searchParams.get("view") as typeof viewMode) || "grid")
    // setHasSearched(false); // REMOVE: unused
    // FIX: add missing dependencies
  }, [searchParams, sortBy, viewMode])

  // Fetch properties: only search if search bar is not empty, else show all
  const fetchProperties = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      let response
      if (!hasSearchCriteria(filters)) {
        response = await searchProperties({
          ...filters,
          search: undefined,
          page: currentPage,
          limit: viewMode === "list" ? 10 : 6,
          sort: sortBy,
        })
      } else {
        response = await searchProperties({
          ...filters,
          page: currentPage,
          limit: viewMode === "list" ? 10 : 6,
          sort: sortBy,
        })
      }
      setProperties(response.properties)
      setTotalCount(response.count)
      setTotalPages(response.totalPages)
    } catch {
      setError("Failed to load properties. Please try again.")
      setProperties([])
      setTotalCount(0)
      setTotalPages(1)
    } finally {
      setLoading(false)
    }
  }, [filters, currentPage, viewMode, sortBy])
  // Trigger fetch on filter/page/view/sort change
  useEffect(() => {
    fetchProperties()
    // FIX: add missing dependencies
  }, [filters, currentPage, viewMode, sortBy, fetchProperties])

  // Update search parameters in URL
  const updateSearchParams = useCallback(
    (newFilters: PropertySearchParams, page = currentPage) => {
      const params = new URLSearchParams()
      if (newFilters.search) params.set("search", newFilters.search)
      if (newFilters.propertyType) params.set("propertyType", newFilters.propertyType)
      if (newFilters.minPrice && newFilters.minPrice > 0) params.set("minPrice", newFilters.minPrice.toString())
      if (newFilters.maxPrice && newFilters.maxPrice < 10000000) params.set("maxPrice", newFilters.maxPrice.toString())
      if (newFilters.minBedrooms && newFilters.minBedrooms > 0)
        params.set("minBedrooms", newFilters.minBedrooms.toString())
      if (newFilters.minBathrooms && newFilters.minBathrooms > 0)
        params.set("minBathrooms", newFilters.minBathrooms.toString())
      if (page > 1) params.set("page", page.toString())
      if (sortBy !== "newest") params.set("sort", sortBy)
      if (viewMode !== "grid") params.set("view", viewMode)
      router.push(`${pathname}?${params.toString()}`, { scroll: false })
    },
    [router, pathname, currentPage, sortBy, viewMode],
  )

  // Update filters when debounced search changes
  useEffect(() => {
    if (debouncedSearch !== filters.search) {
      const newFilters = { ...filters, search: debouncedSearch }
      setFilters(newFilters)
      setCurrentPage(1)
      updateSearchParams(newFilters, 1)
    }
  }, [debouncedSearch, filters.search, filters, updateSearchParams])

  // Updated price formatter to handle Ghanaian Cedis
  const formatPrice = useCallback((price: number) => {
    return new Intl.NumberFormat("en-GH", {
      style: "currency",
      currency: "GHS",
      maximumFractionDigits: 0,
    }).format(price)
  }, [])

  // Updated filter change handler with type safety
  const handleFilterChange = useCallback(
    (key: keyof PropertySearchParams, value: string | number) => {
      const newTempFilters = { ...tempFilters, [key]: value }
      setTempFilters(newTempFilters)

      // For non-search filters, apply immediately
      if (key !== "search") {
        const newFilters = { ...filters, [key]: value }
        setFilters(newFilters)
        setCurrentPage(1)
        updateSearchParams(newFilters, 1)
      }
    },
    [tempFilters, filters, updateSearchParams],
  )

  // Apply all filters (for advanced filters modal)
  const applyFilters = useCallback(() => {
    setFilters(tempFilters)
    setCurrentPage(1)
    updateSearchParams(tempFilters, 1)
    setShowAdvancedFilters(false)
  }, [tempFilters, updateSearchParams])

  // Reset filters
  const resetFilters = useCallback(() => {
    const resetFilters: PropertySearchParams = {
      search: "",
      propertyType: "",
      minPrice: 0,
      maxPrice: 10000000,
      minBedrooms: 0,
      minBathrooms: 0,
    }
    setFilters(resetFilters)
    setTempFilters(resetFilters)
    setCurrentPage(1)
    updateSearchParams(resetFilters, 1)
  }, [updateSearchParams])

  // Pagination handlers with URL update
  const handlePageChange = useCallback(
    (newPage: number) => {
      setCurrentPage(newPage)
      updateSearchParams(filters, newPage)
      window.scrollTo({ top: 0, behavior: "smooth" })
    },
    [filters, updateSearchParams],
  )

  // Sort handler
  const handleSortChange = useCallback(
    (newSort: typeof sortBy) => {
      setSortBy(newSort)
      updateSearchParams(filters)
    },
    [filters, updateSearchParams],
  )

  // View mode handler
  const handleViewModeChange = useCallback(
    (newViewMode: typeof viewMode) => {
      setViewMode(newViewMode)
      setCurrentPage(1)
      updateSearchParams(filters, 1)
    },
    [filters, updateSearchParams],
  )

  // Memoized active filters count
  const activeFiltersCount = useMemo(() => {
    let count = 0
    if (filters.search) count++
    if (filters.propertyType) count++
    if ((filters.minPrice ?? 0) > 0) count++
    if ((filters.maxPrice ?? 10000000) < 10000000) count++
    if ((filters.minBedrooms ?? 0) > 0) count++
    if ((filters.minBathrooms ?? 0) > 0) count++
    return count
  }, [filters])

  // Generate pagination numbers
  const paginationNumbers = useMemo(() => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...")
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages)
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }, [currentPage, totalPages])

  return (
    <div className="min-h-screen font-[Poppins-regular] w-full bg-[#f7f5ef]">
      <Head>
        <title>Search Results - {totalCount} Properties Found</title>
        <meta name="description" content={`Browse ${totalCount} properties matching your search criteria`} />
      </Head>

      {/* Enhanced Search Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col gap-4">
            {/* Main search bar */}
            <div className="relative flex-grow">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by location, property type, or address"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                value={tempFilters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
              />
            </div>

            {/* Quick filters */}
            <div className="flex flex-wrap gap-2">
              <select
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                value={filters.propertyType}
                onChange={(e) => handleFilterChange("propertyType", e.target.value)}
              >
                <option value="">All Types</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Condo">Condo</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Villa">Villa</option>
                <option value="Estate">Estate</option>
                <option value="Duplex">Duplex</option>
                <option value="Mansion">Mansion</option>
                <option value="Loft">Loft</option>
              </select>

              <select
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                value={filters.minBedrooms}
                onChange={(e) => handleFilterChange("minBedrooms", Number.parseInt(e.target.value))}
              >
                <option value="0">Any Bedrooms</option>
                <option value="1">1+ Bedrooms</option>
                <option value="2">2+ Bedrooms</option>
                <option value="3">3+ Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
                <option value="5">5+ Bedrooms</option>
                <option value="6">6+ Bedrooms</option>
              </select>

              <select
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                value={`${filters.minPrice}-${filters.maxPrice}`}
                onChange={(e) => {
                  const [minPrice, maxPrice] = e.target.value.split("-").map(Number)
                  handleFilterChange("minPrice", minPrice)
                  handleFilterChange("maxPrice", maxPrice)
                }}
              >
                <option value="0-10000000">Any Price</option>
                <option value="0-300000">Under ₵300,000</option>
                <option value="300000-500000">₵300,000 - ₵500,000</option>
                <option value="500000-750000">₵500,000 - ₵750,000</option>
                <option value="750000-1000000">₵750,000 - ₵1,000,000</option>
                <option value="1000000-10000000">₵1,000,000+</option>
              </select>

              <button
                onClick={() => setShowAdvancedFilters(true)}
                className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-800"
              >
                <SlidersHorizontal size={16} className="mr-2" />
                More Filters
                {activeFiltersCount > 0 && (
                  <span className="ml-2 bg-green-800 text-white rounded-full px-2 py-1 text-xs">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              {activeFiltersCount > 0 && (
                <button
                  onClick={resetFilters}
                  className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <X size={16} className="mr-1" />
                  Clear All
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results Header */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-medium">
              {loading ? "Searching..." : `${totalCount.toLocaleString()} Properties Found`}
            </h2>
            {filters.search && <p className="text-gray-600 mt-1">Results for &quot;{filters.search}&quot;</p>}
          </div>

          <div className="flex items-center gap-4">
            {/* Sort dropdown */}
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value as typeof sortBy)}
              className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>

            {/* View mode toggle */}
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => handleViewModeChange("grid")}
                className={`p-2 ${viewMode === "grid" ? "bg-green-800 text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => handleViewModeChange("list")}
                className={`p-2 ${viewMode === "list" ? "bg-green-800 text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Error State */}
      {error && (
        <section className="container mx-auto px-4 mb-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={fetchProperties}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Try Again
            </button>
          </div>
        </section>
      )}

      {/* Results Section */}
      <section className="container mx-auto px-4 pb-8">
        {loading ? (
          <div
            className={`grid gap-6 animate-pulse ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
          >
            {Array.from({ length: viewMode === "list" ? 10 : 6 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className={`bg-gray-300 ${viewMode === "grid" ? "h-64" : "h-32"}`}></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-300 mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-300 w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : properties.length > 0 ? (
          <>
            <div
              className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
            >
              {properties.map((property) => (
                <div
                  key={property.id}
                  className={`group relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border-0 rounded-2xl cursor-pointer ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                  onClick={() => router.push(`/property/${property.id}`)}
                >
                  {/* Image container with improved styling */}
                  <div
                    className={`relative overflow-hidden ${viewMode === "grid" ? "aspect-[4/3] rounded-t-2xl" : "w-64 h-48 flex-shrink-0 rounded-l-2xl"}`}
                  >
                    <Image
                      src={property.imageUrl || "/placeholder.svg"}
                      alt={property.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-105"
                      sizes={viewMode === "grid" ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : "256px"}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    {/* Price badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm">
                        <span className="font-bold text-green-600 text-lg">{formatPrice(property.price)}</span>
                      </div>
                    </div>

                    {/* Location badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                        <MapPin className="w-3.5 h-3.5 text-white" />
                        <span className="text-white text-sm font-medium">
                          {typeof property.address === "string" && property.address
                            ? property.address.split(",")[0]
                            : property.location
                              ? property.location
                              : property.city
                                ? property.city
                                : "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card content with enhanced styling */}
                  <div className="p-6 flex-grow flex flex-col">
                    {/* Title and rating section */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-2 group-hover:text-green-600 transition-colors">
                          {property.title}
                        </h3>
                        <p className="text-gray-600 text-sm font-medium line-clamp-1">{property.address}</p>
                      </div>
                    </div>

                    {/* Property features with improved layout */}
                    <div className="grid grid-cols-3 gap-4 pt-4 mt-auto border-t border-gray-100">
                      <div className="flex items-center gap-2 text-gray-700">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                          <Home className="w-4 h-4 text-green-800" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-gray-900">{property.bedrooms}</span>
                          <span className="text-xs text-gray-500">Beds</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-gray-700">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                        <BathIcon size={20} color="green" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-gray-900">{property.bathrooms}</span>
                          <span className="text-xs text-gray-500">Baths</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-gray-700">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                          <RulerIcon size={20} color="green" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-gray-900">
                            {property.area?.toLocaleString() || "N/A"}
                          </span>
                          <span className="text-xs text-gray-500">Sq Ft</span>
                        </div>
                      </div>
                    </div>

                    {/* View Details button - enhanced styling */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button
                        className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-xl transition-all duration-200 font-medium text-sm hover:shadow-md"
                        onClick={(e) => {
                          e.stopPropagation()
                          router.push(`/property/${property.id}`)
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center px-4 py-2 text-green-800 hover:text-green-900 disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={20} />
                  Previous
                </button>

                {paginationNumbers.map((pageNum, index) =>
                  pageNum === "..." ? (
                    <span key={index} className="px-2 py-2 text-gray-400">
                      ...
                    </span>
                  ) : (
                    <button
                      key={index}
                      onClick={() => handlePageChange(pageNum as number)}
                      className={`px-4 py-2 rounded-lg transition ${
                        currentPage === pageNum ? "bg-green-800 text-white" : "text-green-800 hover:bg-green-50"
                      }`}
                    >
                      {pageNum}
                    </button>
                  ),
                )}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center px-4 py-2 text-green-800 hover:text-green-900 disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                  Next
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-lg">
            <div className="mb-6">
              <Search size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-medium text-gray-700 mb-4">No Properties Found</h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                We couldn&apos;t find any properties matching your search criteria. Try adjusting your filters or search
                terms.
              </p>
            </div>
            <div className="space-x-4">
              <button
                onClick={resetFilters}
                className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 transition"
              >
                Reset All Filters
              </button>
              <button
                onClick={() => router.push("/")}
                className="border border-green-800 text-green-800 px-6 py-3 rounded-full hover:bg-green-50 transition"
              >
                Browse All Properties
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Advanced Filters Modal */}
      {showAdvancedFilters && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium">Advanced Filters</h3>
                <button onClick={() => setShowAdvancedFilters(false)} className="text-gray-400 hover:text-gray-600">
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
                  <input
                    type="number"
                    value={tempFilters.minPrice}
                    onChange={(e) => handleFilterChange("minPrice", Number.parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
                  <input
                    type="number"
                    value={tempFilters.maxPrice === 10000000 ? "" : tempFilters.maxPrice}
                    onChange={(e) => handleFilterChange("maxPrice", Number.parseInt(e.target.value) || 10000000)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                    placeholder="No limit"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Min Bathrooms</label>
                  <select
                    value={tempFilters.minBathrooms}
                    onChange={(e) => handleFilterChange("minBathrooms", Number.parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                  >
                    <option value="0">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-6 border-t bg-gray-50 flex justify-end space-x-4">
              <button
                onClick={() => setShowAdvancedFilters(false)}
                className="px-6 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={applyFilters}
                className="px-6 py-2 bg-green-800 text-white rounded-lg hover:bg-green-900 transition"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
