'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Upload } from 'lucide-react'

const ImportLeadsPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle>Import Leads</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              Import leads from a CSV file
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Functionality to be implemented.
            </p>
            <div className="mt-6">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <span>Select a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  accept=".csv"
                />
              </label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ImportLeadsPage