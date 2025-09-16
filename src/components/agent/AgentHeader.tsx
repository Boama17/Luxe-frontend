'use client'

import React, { useEffect, useState } from 'react'
import { Bell, ChevronDown, LogOut } from 'lucide-react'
import { authService } from '@/app/services/authService'
import { User } from 'firebase/auth'
import { useRouter } from 'next/navigation'

export default function AgentHeader() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
  }, []);

  const handleSignOut = async () => {
    await authService.signOut();
    router.push('/signin');
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-600">Hi, {user?.displayName || 'Agent'}</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-400 hover:text-gray-500">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                {user?.displayName?.charAt(0) || 'A'}
              </span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <button onClick={handleSignOut} className="p-2 text-gray-400 hover:text-gray-500">
            <LogOut className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}