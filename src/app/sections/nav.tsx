"use client"
import { useState, useRef, useEffect } from "react";
import Ham from "./items";
import Image from "next/image";
import Link from "next/link";
import phone from '../../assets/img/phone.svg';

export default function Nav() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [copied, setCopied] = useState(false);
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

  // Reset copied state after 1.5s
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <nav className="w-full px-4 lg:px-14 py-6 lg:py-10 font-[Poppins]">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <span className="font-bold text-base lg:text-lg">
          LuxeRealty
        </span>
        
        <div className="flex items-center gap-4 lg:gap-8">
          <div className="hidden md:flex items-center gap-2 relative">
            <Image 
              src={phone} 
              alt="Phone icon" 
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <button
              className="font-semibold text-sm lg:text-base cursor-pointer text-gray-700 hover:text-emerald-800 transition-colors bg-transparent border-none outline-none"
              onClick={() => {
                navigator.clipboard.writeText("0541537940");
                setCopied(true);
              }}
              title="Click to copy"
              type="button"
            >
              0541537940
            </button>
            {copied && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-emerald-700 text-white text-xs px-3 py-1 rounded shadow transition-opacity duration-200 z-30">
                Copied!
              </span>
            )}
          </div>
          
          {/* Join Us Popover */}
          <div className="relative" ref={popoverRef}>
            <button 
              onClick={() => setIsPopoverOpen(!isPopoverOpen)}
              className={`flex items-center gap-2 px-4 py-2 border ${
                isPopoverOpen 
                  ? "bg-emerald-800 text-white border-emerald-800" 
                  : "border-emerald-800 text-emerald-800 hover:bg-emerald-800 hover:text-white"
              } rounded-full transition-all duration-300 text-sm font-medium shadow-sm`}
              aria-expanded={isPopoverOpen}
              aria-haspopup="true"
            >
              <span>Become an agent</span>
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
              className={`absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden z-30 transition-all duration-200 origin-top ${
                isPopoverOpen 
                  ? "scale-100 opacity-100" 
                  : "scale-95 opacity-0 pointer-events-none"
              }`}
            >
              <div className="py-2">
                <Link 
                  href="/signin" 
                  className="block px-6 py-3 text-sm text-emerald-900 hover:bg-emerald-50 hover:text-emerald-800 font-medium transition-colors"
                  onClick={() => setIsPopoverOpen(false)}
                >
                  Sign In
                </Link>
                <div className="border-t border-emerald-100" />
                <Link 
                  href="/signup" 
                  className="block px-6 py-3 text-sm text-emerald-900 hover:bg-emerald-50 hover:text-emerald-800 font-medium transition-colors"
                  onClick={() => setIsPopoverOpen(false)}
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>

          
          <Ham />
        </div>
      </div>
    </nav>
  );
}