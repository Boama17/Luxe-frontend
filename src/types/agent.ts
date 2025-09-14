export interface Property {
  id: string
  title: string
  description: string
  price: number
  currency: string
  location: string
  bedrooms: number
  bathrooms: number
  squareFeet: number
  status: 'active' | 'pending' | 'sold' | 'draft'
  images: string[]
  agentId: string
  createdAt: Date
  updatedAt: Date
  views: number
  inquiries: number
}

export interface Client {
  id: string
  name: string
  email: string
  phone: string
  type: 'buyer' | 'seller' | 'tenant' | 'landlord'
  status: 'active' | 'inactive'
  agentId: string
  properties: string[]
  lastContact: Date
  createdAt: Date
  notes: string
}

export interface Lead {
  id: string
  name: string
  email: string
  phone: string
  propertyId: string
  status: 'hot' | 'warm' | 'cold'
  source: string
  message: string
  agentId: string
  createdAt: Date
  lastContact?: Date
}

export interface AgentStats {
  totalProperties: number
  activeListings: number
  totalClients: number
  newLeads: number
  monthlyCommission: number
  totalViews: number
  totalInquiries: number
}
