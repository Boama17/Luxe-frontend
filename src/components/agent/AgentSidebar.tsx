'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  Building, 
  Users, 
  MessageCircle, 
  TrendingUp, 
  Settings, 
  Calendar,
  BarChart3
} from 'lucide-react'

const sidebarItems = [
  { id: 'dashboard', icon: Home, label: 'Dashboard', href: '/agent/dashboard' },
  { id: 'properties', icon: Building, label: 'My Properties', href: '/agent/properties' },
  { id: 'clients', icon: Users, label: 'Clients', href: '/agent/clients' },
  { id: 'leads', icon: TrendingUp, label: 'Leads', href: '/agent/leads' },
  { id: 'messages', icon: MessageCircle, label: 'Messages', href: '/agent/messages' },
  { id: 'calendar', icon: Calendar, label: 'Calendar', href: '/agent/calendar' },
  { id: 'analytics', icon: BarChart3, label: 'Analytics', href: '/agent/analytics' },
  { id: 'settings', icon: Settings, label: 'Settings', href: '/agent/settings' },
]

export default function AgentSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="flex items-center px-6 py-4 border-b border-gray-200">
        <div className="flex items-center">
            <div className='bg-amber-100 p-2 size-8 rounded-full place-content-center'><span className='font-bold'>L</span></div>
          <span className="ml-3 text-xl font-bold text-gray-900">Luxe Realty</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}