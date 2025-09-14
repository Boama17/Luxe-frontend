'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Building,
  Users,
  TrendingUp,
  DollarSign,
  Plus,
  BedDouble,
  Bath,
} from 'lucide-react'
import EmptyState from './EmptyState'
import { propertyService } from '@/app/services/propertyService'
import { Property as PropertyType } from '@/types/agent'
import Image from 'next/image'

const initialStats = [
  {
    label: 'Active Listings',
    value: '0',
    icon: Building,
    color: 'text-green-600',
  },
  { label: 'Total Clients', value: '0', icon: Users, color: 'text-blue-600' },
  { label: 'New Leads', value: '0', icon: TrendingUp, color: 'text-purple-600' },
  {
    label: 'This Month Commission',
    value: '₵0',
    icon: DollarSign,
    color: 'text-orange-600',
  },
]

export default function DashboardContent() {
  const router = useRouter()
  const [stats, setStats] = useState(initialStats)
  const [recentProperties, setRecentProperties] = useState<PropertyType[]>([])

  useEffect(() => {
    const allProperties = propertyService.getProperties()
    const activeListings = allProperties.filter(
      (p) => p.status === 'active'
    ).length

    setStats((prevStats) =>
      prevStats.map((stat) =>
        stat.label === 'Active Listings'
          ? { ...stat, value: activeListings.toString() }
          : stat
      )
    )

    const sortedProperties = allProperties
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .slice(0, 3)

    setRecentProperties(sortedProperties)
  }, [])

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full bg-gray-50 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-gray-400 text-sm">Get started by adding your first property</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Properties */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Properties
            </h3>
            <Link
              href="/agent/properties"
              className="text-green-600 hover:text-green-700 text-sm font-medium"
            >
              View All
            </Link>
          </div>
          {recentProperties.length > 0 ? (
            <ul className="divide-y divide-gray-200/80">
              {recentProperties.map((property) => (
                <li key={property.id} className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-20 relative flex-shrink-0">
                      <Image
                        src={property.images?.[0] || '/placeholder.svg'}
                        alt={property.title}
                        className="object-cover rounded-md"
                        layout="fill"
                      />
                    </div>
                    <div className="flex-1">
                      <Link
                        href={`/agent/properties/${property.id}`}
                        className="font-semibold text-gray-800 hover:text-green-700 transition-colors"
                      >
                        {property.title}
                      </Link>
                      <p className="text-sm text-gray-500">
                        {property.location}
                      </p>
                      <div className="flex items-center gap-x-4 text-xs text-gray-600 mt-1">
                        <div className="flex items-center gap-1">
                          <BedDouble size={14} />
                          <span>{property.bedrooms}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath size={14} />
                          <span>{property.bathrooms}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-6">
              <EmptyState
                icon={Building}
                title="No properties yet"
                description="Start building your portfolio by adding your first property listing."
                actionLabel="Add Property"
                actionHref="/agent/properties/new"
              />
            </div>
          )}
        </div>

        {/* Recent Leads */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Recent Leads</h3>
            <Link href="/agent/leads" className="text-green-600 hover:text-green-700 text-sm font-medium">
              View All
            </Link>
          </div>
          <div className="p-6">
            <EmptyState
              icon={TrendingUp}
              title="No leads yet"
              description="Your leads will appear here once you start receiving inquiries."
              actionLabel="Import Leads"
              actionHref="/agent/leads/import"
            />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => router.push('/agent/properties/new')}
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors group"
            >
              <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200">
                <Plus className="w-5 h-5 text-green-600" />
              </div>
              <div className="ml-4 text-left">
                <p className="font-medium text-gray-900">Add Property</p>
                <p className="text-sm text-gray-500">List a new property</p>
              </div>
            </button>

            <button
              onClick={() => router.push('/agent/clients/new')}
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group"
            >
              <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div className="ml-4 text-left">
                <p className="font-medium text-gray-900">Add Client</p>
                <p className="text-sm text-gray-500">Register new client</p>
              </div>
            </button>

            <button
              onClick={() => router.push('/agent/leads/import')}
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors group"
            >
              <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div className="ml-4 text-left">
                <p className="font-medium text-gray-900">Import Leads</p>
                <p className="text-sm text-gray-500">Upload lead data</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}