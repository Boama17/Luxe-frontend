'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
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
import { Property as PropertyType } from '@/types/agent'
import { Upload } from 'lucide-react'
import { propertyService } from '@/app/services/propertyService'

type NewProperty = Omit<
  PropertyType,
  'id' | 'agentId' | 'createdAt' | 'updatedAt' | 'views' | 'inquiries'
>

const AddPropertyPage = () => {
  const router = useRouter()
  const [property, setProperty] = useState<Partial<NewProperty>>({
    title: '',
    description: '',
    price: 0,
    currency: 'USD',
    location: '',
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 100,
    status: 'draft',
    images: [],
  })
  const [uploading, setUploading] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setProperty({ ...property, [name]: value })
  }

  const handleSelectChange = (name: keyof NewProperty) => (value: string) => {
    setProperty({ ...property, [name]: value })
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProperty({ ...property, [name]: Number(value) })
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // This is a placeholder for the actual image upload logic
    setUploading(true)
    const files = e.target.files
    if (files) {
      // Simulate upload
      await new Promise((resolve) => setTimeout(resolve, 1500))
      const uploadedImageUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      )
      setProperty({
        ...property,
        images: [...(property.images || []), ...uploadedImageUrls],
      })
    }
    setUploading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend/API
    console.log('Submitting new property:', property)

    // Ensure all required fields are present before saving
    if (
      !property.title ||
      !property.location ||
      !property.price ||
      !property.currency
    ) {
      // Here you might want to show an error to the user
      console.error('Missing required property fields')
      return
    }

    propertyService.addProperty(property as NewProperty)

    // On success, you might want to redirect the user
    router.push('/agent/properties')
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle>Add New Property</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="title">Property Title</label>
                <Input
                  id="title"
                  name="title"
                  value={property.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Modern Downtown Apartment"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="location">Location</label>
                <Input
                  id="location"
                  name="location"
                  value={property.location}
                  onChange={handleInputChange}
                  placeholder="e.g., 123 Main St, New York, NY"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="description">Description</label>
              <Textarea
                id="description"
                name="description"
                value={property.description}
                onChange={handleInputChange}
                placeholder="Describe the property..."
                rows={5}
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label htmlFor="price">Price</label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  value={property.price}
                  onChange={handleNumberChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="currency">Currency</label>
                <Select
                  name="currency"
                  onValueChange={handleSelectChange('currency')}
                  defaultValue={property.currency}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                    <SelectItem value="GBP">GBP</SelectItem>
                    <SelectItem value="GHS">GHS</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="status">Status</label>
                <Select
                  name="status"
                  onValueChange={handleSelectChange('status')}
                  defaultValue={property.status}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="sold">Sold</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label htmlFor="bedrooms">Bedrooms</label>
                <Input
                  id="bedrooms"
                  name="bedrooms"
                  type="number"
                  value={property.bedrooms}
                  onChange={handleNumberChange}
                  min="0"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="bathrooms">Bathrooms</label>
                <Input
                  id="bathrooms"
                  name="bathrooms"
                  type="number"
                  value={property.bathrooms}
                  onChange={handleNumberChange}
                  min="0"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="squareFeet">Square Feet</label>
                <Input
                  id="squareFeet"
                  name="squareFeet"
                  type="number"
                  value={property.squareFeet}
                  onChange={handleNumberChange}
                  min="0"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label>Images</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload files</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    multiple
                    onChange={handleImageUpload}
                    accept="image/*"
                  />
                </label>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
                {uploading && <p>Uploading...</p>}
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                {property.images?.map((img, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={img}
                      alt={`preview ${index}`}
                      className="h-24 w-full object-cover rounded-md"
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={uploading}>
                {uploading ? 'Saving...' : 'Save Property'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default AddPropertyPage