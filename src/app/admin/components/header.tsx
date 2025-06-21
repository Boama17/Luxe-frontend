"use client"
import { useState, useEffect } from "react";
import { Bell, User, LogOut, Settings, ChevronDown } from "lucide-react";
import { authService } from "@/app/services/authService";
import { useRouter } from "next/navigation";

interface HeaderProps {
  activeTab: string;
}

export default function Header({ activeTab }: HeaderProps) {
  const [user, setUser] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = authService.onAuthStateChanged((user: any) => {
      setUser(user);
      setIsLoading(false);
      
      // If no user is logged in, redirect to sign-in page
      if (!user) {
        router.push('/signin');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [router]);

  const handleSignOut = async () => {
    try {
      await authService.signOut();
      router.push('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.profile-dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getDisplayName = () => {
    if (!user) return 'User';
    return user.displayName || user.email?.split('@')[0] || 'User';
  };

  const getInitials = () => {
    const name = getDisplayName();
    return name.charAt(0).toUpperCase();
  };

  if (isLoading) {
    return (
      <header className="bg-white/80 backdrop-blur-xl shadow-sm border-b border-emerald-100 px-8 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-emerald-900 capitalize font-[Elegant]">{activeTab}</h1>
          <p className="text-emerald-700">Loading...</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white/80 backdrop-blur-xl shadow-sm border-b border-emerald-100 px-8 py-6 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-emerald-900 capitalize font-[Elegant]">{activeTab}</h1>
        <p className="text-emerald-700">
          Welcome back, {getDisplayName()}! Manage your LuxeRealty dashboard
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 text-emerald-700 hover:bg-emerald-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
        
        {/* Profile Dropdown */}
        <div className="relative profile-dropdown">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 p-2 hover:bg-emerald-100 rounded-lg transition-colors"
          >
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-700 font-medium text-sm">
                  {getInitials()}
                </span>
              </div>
            )}
            <ChevronDown className={`w-4 h-4 text-emerald-700 transition-transform ${
              isDropdownOpen ? 'rotate-180' : ''
            }`} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-emerald-100 py-2 z-50">
              {/* User Info */}
              <div className="px-4 py-3 border-b border-emerald-100">
                <p className="font-medium text-emerald-900">{getDisplayName()}</p>
                <p className="text-sm text-emerald-600">{user?.email}</p>
              </div>
              
              {/* Menu Items */}
              <div className="py-2">
                <button
                  onClick={() => {
                    setIsDropdownOpen(false);
                    // Add navigation to profile settings
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2 text-emerald-700 hover:bg-emerald-50 transition-colors"
                >
                  <User className="w-4 h-4" />
                  Profile Settings
                </button>
                
                <button
                  onClick={() => {
                    setIsDropdownOpen(false);
                    // Add navigation to general settings
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2 text-emerald-700 hover:bg-emerald-50 transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </button>
                
                <hr className="my-2 border-emerald-100" />
                
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}