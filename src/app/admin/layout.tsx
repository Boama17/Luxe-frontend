'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { authService } from '@/app/services/authService'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()


  useEffect(() => {
    const checkAuth = () => {
      const currentUser = authService.getCurrentUser()
      const demoAuth = localStorage.getItem('admin_demo_auth')

      if (currentUser || demoAuth === 'true') {
        // Allow authenticated users or demo auth
        setIsAuthenticated(true)
      } else {
        // Redirect to admin sign-in if not authenticated
        router.push('/admin/signin')
        return
      }
      setIsLoading(false)
    }

    // Check authentication on mount
    checkAuth()

    // Listen for auth state changes
    const unsubscribe = authService.onAuthStateChanged((user: string) => {
      const demoAuth = localStorage.getItem('admin_demo_auth')
      if (user || demoAuth === 'true') {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
        router.push('/admin/signin')
      }
      setIsLoading(false)
    })

    return unsubscribe
  }, [router])

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Admin Panel...</p>
        </div>
      </div>
    )
  }

  // Don't render anything if not authenticated (will redirect)
  if (!isAuthenticated) {
    return null
  }

  return <>{children}</>
}