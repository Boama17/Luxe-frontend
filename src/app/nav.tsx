"use client"
import { useState, useRef, useEffect } from "react";
import Ham from "./items";
import Image from "next/image";
import Link from "next/link";
import phone from '../assets/img/phone.svg';

export default function Nav() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  
  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsPopoverOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full px-4 lg:px-14 py-6 lg:py-10 font-[Poppins]">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <span className="font-bold text-base lg:text-lg">
          LuxeRealty
        </span>
        
        <div className="flex items-center gap-4 lg:gap-8">
          <div className="hidden md:flex items-center gap-2">
            <Image 
              src={phone} 
              alt="Phone icon" 
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <div className="font-semibold text-sm lg:text-base cursor-pointer text-gray-700 hover:text-emerald-800 transition-colors">
              054 359 8039
            </div>
          </div>
          
          {/* Access Popover */}
          <div className="relative hidden md:block" ref={popoverRef}>
            <button 
              onClick={() => setIsPopoverOpen(!isPopoverOpen)}
              className={`flex items-center gap-2 px-4 py-2 border ${
                isPopoverOpen 
                  ? "bg-emerald-800 text-white border-emerald-800" 
                  : "border-emerald-800 text-emerald-800 hover:bg-emerald-800 hover:text-white"
              } rounded-full transition-all duration-300 text-sm font-medium`}
              aria-expanded={isPopoverOpen}
              aria-haspopup="true"
            >
              <span>Gain Access</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${
                  isPopoverOpen ? "rotate-180" : ""
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <div 
              className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl overflow-hidden z-20 transition-all duration-200 origin-top ${
                isPopoverOpen 
                  ? "scale-100 opacity-100" 
                  : "scale-95 opacity-0 pointer-events-none"
              }`}
            >
              <div className="py-1">
                <Link 
                  href="/signin" 
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 transition-colors"
                  onClick={() => setIsPopoverOpen(false)}
                >
                  Sign In
                </Link>
                <Link 
                  href="/signup" 
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 transition-colors"
                  onClick={() => setIsPopoverOpen(false)}
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
          
          {/* Mobile Sign In Button */}
          <Link 
            href="/signin" 
            className="md:hidden flex items-center justify-center px-3 py-1.5 text-sm bg-emerald-800 text-white rounded-md hover:bg-emerald-700 transition-colors"
          >
            Sign In
          </Link>
          
          <Ham />
        </div>
      </div>
    </nav>
  );
}