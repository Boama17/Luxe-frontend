'use client'

import React from 'react'
import { Plus, Search, Users } from 'lucide-react'
import Link from 'next/link'
import EmptyState from '@/components/agent/EmptyState'

export default function ClientsPage() {
  const clients: any[] = [];

  return (
    <main className="min-h-screen bg-gray-50/50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                My Clients
              </h1>
              <p className="mt-1 text-md text-gray-600">
                Manage your client relationships and information.
              </p>
            </div>
            <Link
              href="/agent/clients/new"
              className="inline-flex items-center justify-center rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              <Plus size={18} className="-ml-0.5 mr-2" />
              <span>Add Client</span>
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
                  placeholder="Search clients..."
                  className="block w-full rounded-lg border border-gray-200 bg-gray-50/50 py-2 pl-10 pr-4 text-sm placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>
          </div>

          {clients.length === 0 ? (
            <div className="p-6 sm:p-12">
              <EmptyState
                icon={Users}
                title="No clients yet"
                description="Get started by adding your first client. Once you add clients, they'll appear here for you to manage."
                actionLabel="Add Your First Client"
                actionHref="/agent/clients/new"
              />
            </div>
          ) : (
            <div>
              <p className="p-6 text-gray-500">Client list will go here.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}