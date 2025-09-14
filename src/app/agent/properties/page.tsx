'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import { Plus, Search, Building } from 'lucide-react'
import Link from 'next/link'
import { BedDouble, Bath, Square, Tag, Eye, MessageSquare } from 'lucide-react'
import { propertyService } from '@/app/services/propertyService'
import { Property as PropertyType } from '@/types/agent'
import EmptyState from '@/components/agent/EmptyState'

const PropertiesPage = () => {
  const [properties, setProperties] = React.useState<PropertyType[]>([])
  const [searchTerm, setSearchTerm] = React.useState('')

  useEffect(() => {
    const allProperties = propertyService.getProperties()
    // sort by newest first
    const sortedProperties = allProperties.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    setProperties(sortedProperties)
  }, [])

  const filteredProperties = properties.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-gray-50/50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                My Properties
              </h1>
              <p className="mt-1 text-md text-gray-600">
                Manage your property listings with ease.
              </p>
            </div>
            <Link
              href="/agent/properties/new"
              className="inline-flex items-center justify-center rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              <Plus size={18} className="-ml-0.5 mr-2" />
              <span>Add Property</span>
            </Link>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200/80">
          <div className="p-4 sm:p-6 border-b border-gray-200/80">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative flex-1 w-full sm:max-w-xs">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  className="block w-full rounded-lg border border-gray-200 bg-gray-50/50 py-2 pl-10 pr-4 text-sm placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select className="block w-full sm:w-auto rounded-lg border border-gray-200 bg-gray-50/50 px-4 py-2 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500">
                <option>All Status</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Sold</option>
              </select>
            </div>
          </div>

          {filteredProperties.length > 0 ? (
            <ul className="divide-y divide-gray-200/80">
              {filteredProperties.map((property) => (
                <li key={property.id} className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="w-full sm:w-48 h-40 flex-shrink-0">
                      <img
                        src={property.images?.[0] || '/placeholder.svg'}
                        alt={property.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p
                            className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${
                              property.status === 'active'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {property.status}
                          </p>
                          <h3 className="mt-2 text-lg font-semibold text-gray-900">
                            <Link
                              href={`/agent/properties/${property.id}`}
                              className="hover:text-green-700 transition-colors"
                            >
                              {property.title}
                            </Link>
                          </h3>
                        </div>
                        <p className="text-lg font-bold text-gray-900">
                          {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: property.currency,
                          }).format(property.price)}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">
                        {property.location}
                      </p>
                      <div className="mt-4 flex items-center gap-x-6 gap-y-2 text-sm text-gray-600 flex-wrap">
                        <div className="flex items-center gap-1.5">
                          <BedDouble size={16} />
                          <span>{property.bedrooms} beds</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Bath size={16} />
                          <span>{property.bathrooms} baths</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Square size={16} />
                          <span>{property.squareFeet} sqft</span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-x-6 text-sm text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <Eye size={16} />
                          <span>{property.views} views</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MessageSquare size={16} />
                          <span>{property.inquiries} inquiries</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-6 sm:p-12">
              <EmptyState
                icon={searchTerm ? Search : Building}
                title={
                  searchTerm
                    ? 'No properties match your search'
                    : 'No properties listed yet'
                }
                description={
                  searchTerm
                    ? "Try adjusting your search terms to find what you're looking for."
                    : "Get started by adding your first property listing. Once you add properties, they'll appear here for you to manage."
                }
                actionLabel="Add Your First Property"
                actionHref="/agent/properties/new"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default PropertiesPage