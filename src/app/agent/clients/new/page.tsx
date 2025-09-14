'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Client } from '@/types/agent'

type NewClient = Omit<
  Client,
  'id' | 'agentId' | 'properties' | 'lastContact' | 'createdAt'
>

const AddClientPage = () => {
  const router = useRouter()
  const [client, setClient] = useState<Partial<NewClient>>({
    name: '',
    email: '',
    phone: '',
    type: 'buyer',
    status: 'active',
    notes: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setClient({ ...client, [name]: value })
  }

  const handleSelectChange = (name: keyof NewClient) => (value: string) => {
    setClient({ ...client, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitting new client:', client)
    router.push('/agent/clients')
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle>Add New Client</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name">Full Name</label>
                <Input
                  id="name"
                  name="name"
                  value={client.name}
                  onChange={handleInputChange}
                  placeholder="e.g., John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email Address</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={client.email}
                  onChange={handleInputChange}
                  placeholder="e.g., john.doe@example.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone">Phone Number</label>
                <Input
                  id="phone"
                  name="phone"
                  value={client.phone}
                  onChange={handleInputChange}
                  placeholder="e.g., +1 (555) 123-4567"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="type">Client Type</label>
                <Select
                  name="type"
                  onValueChange={handleSelectChange('type')}
                  defaultValue={client.type}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buyer">Buyer</SelectItem>
                    <SelectItem value="seller">Seller</SelectItem>
                    <SelectItem value="tenant">Tenant</SelectItem>
                    <SelectItem value="landlord">Landlord</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="notes">Notes</label>
              <Textarea
                id="notes"
                name="notes"
                value={client.notes}
                onChange={handleInputChange}
                placeholder="Add any relevant notes about the client..."
                rows={5}
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
              <Button type="submit">Save Client</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default AddClientPage