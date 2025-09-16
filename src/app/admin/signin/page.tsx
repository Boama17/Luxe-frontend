/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { authService } from '@/app/services/authService'
import Link from 'next/link'

export default function AdminSignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const result = await authService.signInWithEmail(formData.email, formData.password)

      if (result.success) {
        // Redirect to admin dashboard
        router.push('/admin')
      } else {
        setError(result.error || 'Sign in failed')
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 flex flex-col font-[Poppins-regular]">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-800 text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <span className="ml-2 text-xl font-[Elegant] text-emerald-900">LuxeRealty Admin</span>
          </div>
          <nav>
            <Link href="/" className="text-emerald-800 hover:text-emerald-600 font-medium">
              Back to Site
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-emerald-900 font-[Elegant] text-4xl mb-2">
              Admin Access
            </h1>
            <p className="text-gray-600 mb-4">
              Sign in to access the administration panel
            </p>

            {/* Demo Credentials */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 max-w-md mx-auto">
              <h3 className="text-sm font-medium text-blue-800 mb-2">Demo Credentials</h3>
              <div className="text-sm text-blue-700 space-y-1">
                <p><strong>Email:</strong> admin@luxerealty.com</p>
                <p><strong>Password:</strong> admin123</p>
                
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-lg rounded-xl p-8">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Admin Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent"
                placeholder="admin@luxerealty.com"
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent"
                placeholder="Enter your admin password"
                required
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-emerald-800 hover:bg-emerald-900 disabled:bg-emerald-400 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing In...
                </>
              ) : (
                'Sign In as Admin'
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-700">
              Need help? Contact the system administrator.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 LuxeRealty. Admin Panel - Authorized Personnel Only
          </p>
        </div>
      </footer>
    </div>
  )
}