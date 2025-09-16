"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import phone from '../../assets/img/phone.svg';

export default function Nav() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isPhonePopoverOpen, setIsPhonePopoverOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const phonePopoverRef = useRef<HTMLDivElement>(null);

  // Close popovers when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsPopoverOpen(false);
      }
      if (phonePopoverRef.current && !phonePopoverRef.current.contains(event.target as Node)) {
        setIsPhonePopoverOpen(false);
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

  const handlePhoneClick = () => {
    setIsPhonePopoverOpen(!isPhonePopoverOpen);
  };

  const handleCall = () => {
    window.location.href = "tel:+233541537940";
    setIsPhonePopoverOpen(false);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/233541537940", "_blank");
    setIsPhonePopoverOpen(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("0541537940");
    setCopied(true);
    setIsPhonePopoverOpen(false);
  };

  return (
    <nav className="w-full px-4 py-4 lg:px-14 lg:py-6 font-[Poppins] bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
         <div className="flex items-center mb-4 md:mb-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-800 text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="ml-2 text-lg font-[Elegant] text-emerald-800">LuxeRealty</span>
            </div>

        {/* Mobile: Phone Icon + Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          {/* Phone Icon Only */}
          <div className="relative" ref={phonePopoverRef}>
            <button
              onClick={handlePhoneClick}
              className="p-2 rounded-full hover:bg-emerald-50 transition-colors"
              title="Call or WhatsApp"
            >
              <Image
                src={phone}
                alt="Phone"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </button>

            {/* Mobile Phone Popover */}
            <div
              className={`absolute top-full mt-2 right-0 w-48 bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden z-50 transition-all duration-200 origin-top ${
                isPhonePopoverOpen
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0 pointer-events-none"
              }`}
            >
              <div className="py-2">
                <button
                  onClick={handleCall}
                  className="w-full text-left px-6 py-3 text-sm text-emerald-900 hover:bg-emerald-50 hover:text-emerald-800 font-medium transition-colors flex items-center gap-3"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call
                </button>
                <div className="border-t border-emerald-100" />
                <button
                  onClick={handleWhatsApp}
                  className="w-full text-left px-6 py-3 text-sm text-emerald-900 hover:bg-emerald-50 hover:text-emerald-800 font-medium transition-colors flex items-center gap-3"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </button>
                <div className="border-t border-emerald-100" />
                <button
                  onClick={handleCopy}
                  className="w-full text-left px-6 py-3 text-sm text-emerald-900 hover:bg-emerald-50 hover:text-emerald-800 font-medium transition-colors flex items-center gap-3"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Number
                </button>
              </div>
            </div>

            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-700 text-white text-xs px-2 py-1 rounded shadow-lg z-50 whitespace-nowrap">
                Copied!
              </span>
            )}
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md hover:bg-emerald-50 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-emerald-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}></span>
              <span className={`bg-emerald-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`bg-emerald-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {/* Phone */}
          <div className="flex items-center gap-2 relative" ref={phonePopoverRef}>
            <Image
              src={phone}
              alt="Phone icon"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <button
              className="font-semibold text-sm lg:text-base cursor-pointer text-gray-700 hover:text-emerald-800 transition-colors bg-transparent border-none outline-none"
              onClick={handlePhoneClick}
              title="Call or WhatsApp"
              type="button"
            >
              0541537940
            </button>

            {/* Phone Popover */}
            <div
              className={`absolute top-full mt-2 right-0 w-48 bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden z-30 transition-all duration-200 origin-top ${
                isPhonePopoverOpen
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0 pointer-events-none"
              }`}
            >
              <div className="py-2">
                <button
                  onClick={handleCall}
                  className="w-full text-left px-6 py-3 text-sm text-emerald-900 hover:bg-emerald-50 hover:text-emerald-800 font-medium transition-colors flex items-center gap-3"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call
                </button>
                <div className="border-t border-emerald-100" />
                <button
                  onClick={handleWhatsApp}
                  className="w-full text-left px-6 py-3 text-sm text-emerald-900 hover:bg-emerald-50 hover:text-emerald-800 font-medium transition-colors flex items-center gap-3"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </button>
                <div className="border-t border-emerald-100" />
                <button
                  onClick={handleCopy}
                  className="w-full text-left px-6 py-3 text-sm text-emerald-900 hover:bg-emerald-50 hover:text-emerald-800 font-medium transition-colors flex items-center gap-3"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Number
                </button>
              </div>
            </div>

            {copied && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-emerald-700 text-white text-xs px-3 py-1 rounded shadow transition-opacity duration-200 z-30">
                Copied!
              </span>
            )}
          </div>

          {/* Become an agent */}
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
            
            {/* Desktop Dropdown */}
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
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${
        isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setIsMobileMenuOpen(false)} />

      {/* Mobile Menu Slide-out */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          {/* Close Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Mobile Menu Content */}
          <div className="mt-8 space-y-6">
            {/* Phone Number */}
            <div className="pb-4 border-b border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Contact us</p>
              <div className="space-y-2">
                <button
                  onClick={handleCall}
                  className="flex items-center gap-3 text-lg font-semibold text-emerald-800 hover:text-emerald-700 transition-colors w-full justify-start"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call 0541537940
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center gap-3 text-lg font-semibold text-emerald-800 hover:text-emerald-700 transition-colors w-full justify-start"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </button>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-3 text-lg font-semibold text-emerald-800 hover:text-emerald-700 transition-colors w-full justify-start"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Number
                </button>
              </div>
              {copied && (
                <span className="text-sm text-green-600 mt-1 block">Number copied!</span>
              )}
            </div>

            {/* Agent Links */}
            <div className="space-y-4">
              <p className="text-sm text-gray-600 font-medium">Agent Portal</p>
              <Link 
                href="/signin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-emerald-800 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
              >
                Sign In
              </Link>
              <Link 
                href="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-4 py-3 bg-emerald-800 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium text-center"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}