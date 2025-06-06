"use client";
import React, { useState } from 'react';
import { Play, Heart, Share2, MapPin, Bath, Bed, Square, Star, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import one from '../../../public/house8.jpg';
import two from '../../../public/house10.jpg';
import three from '../../../public/house4.jpg';

export default function Side() {
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showTour, setShowTour] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [copied, setCopied] = useState(false);

  const propertyImages = [
    one.src,
    two.src,
    three.src,
  ];

  // Share functionality
  const handleShare = async () => {
    const shareData = {
      title: 'Modern Green House',
      text: 'Check out this property on LuxeRealty!',
      url: typeof window !== "undefined" ? window.location.href : "",
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {}
      
    } else {
      navigator.clipboard.writeText(shareData.url);
      alert("Link copied to clipboard!");
    }
  };

  // Copy phone number
  const handleCopyPhone = () => {
    navigator.clipboard.writeText("0541537940");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // Save functionality
  const handleSave = () => {
    setIsLiked(true);
    // Optionally, trigger a toast or API call here
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden font-sans h-[90vh] flex flex-col">
      {/* Header with navigation dots */}
      <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden flex-shrink-0">
        <Image 
          src={propertyImages[currentImageIndex]}
          alt="Property" 
          className="w-full h-full object-cover transition-all duration-500"
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          priority
          style={{ objectFit: "cover" }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Top controls */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-green-700">
            🏡 Featured Property
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2.5 rounded-full backdrop-blur-sm transition-all ${
                isLiked ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-700 hover:bg-white'
              }`}
              aria-label={isLiked ? "Unlike" : "Like"}
            >
              <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
            </button>
            <button 
              className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:bg-white transition-all"
              onClick={handleShare}
              aria-label="Share"
            >
              <Share2 size={16} />
            </button>
          </div>
        </div>
        
        {/* Image navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {propertyImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Price tag */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl">
          <div className="text-2xl font-bold text-gray-900">GH₵450K</div>
          <div className="text-xs text-gray-600 -mt-1">Est. monthly: GH₵2,850</div>
        </div>
      </div>
      
      {/* Content section */}
      <div className="p-4 space-y-3 flex-1 overflow-y-auto">
        {/* Property title and location */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Modern Green House</h2>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin size={14} className="mr-1" />
            <span>East Legon, Accra</span>
          </div>
        </div>
        
        {/* Property stats */}
        <div className="flex justify-between bg-gray-50 rounded-2xl p-3">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Bed size={16} className="text-gray-600" />
            </div>
            <div className="font-semibold text-gray-900">3</div>
            <div className="text-xs text-gray-600">Bedrooms</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Bath size={16} className="text-gray-600" />
            </div>
            <div className="font-semibold text-gray-900">2</div>
            <div className="text-xs text-gray-600">Bathrooms</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Square size={16} className="text-gray-600" />
            </div>
            <div className="font-semibold text-gray-900">2.1K</div>
            <div className="text-xs text-gray-600">Sq ft</div>
          </div>
        </div>
        
        {/* Special offer */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-3">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-green-800 font-semibold text-sm mb-1">🎉 Limited Time Offer</div>
              <div className="text-green-700 text-xs leading-relaxed">
                Get up to <span className="font-bold">15% discount</span> on closing costs + free home inspection
              </div>
            </div>
            <div className="text-2xl">🏷️</div>
          </div>
        </div>
        
        {/* Virtual tour */}
        <div className="bg-slate-50 rounded-2xl p-3">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="font-semibold text-gray-900 text-sm">Virtual House Tour</div>
              <div className="text-xs text-gray-600">360° interactive experience</div>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <button
            className="w-full bg-white hover:bg-gray-50 transition-all rounded-xl p-2.5 flex items-center justify-center gap-2 text-sm font-medium text-gray-900 border border-gray-200"
            onClick={() => setShowTour(true)}
          >
            <Play size={16} className="text-emerald-600" />
            Start Virtual Tour
          </button>
          {showTour && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-lg w-full relative">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-900"
                  onClick={() => setShowTour(false)}
                  aria-label="Close"
                >
                  ×
                </button>
                <div className="text-lg font-semibold mb-4">Virtual Tour (Demo)</div>
                <div className="aspect-video bg-gray-200 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500">[Virtual tour would appear here]</span>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Agent info */}
        <div className="flex items-center justify-between bg-gradient-to-r from-emerald-50 to-indigo-50 rounded-2xl p-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              CA
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-sm">Caleb Asiedu</div>
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <Star size={12} className="text-yellow-500 fill-current" />
                <span>4.9 • Real Estate Expert</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              className="p-2.5 bg-white hover:bg-gray-50 rounded-xl transition-all relative"
              onClick={handleCopyPhone}
              aria-label="Copy phone number"
            >
              <Phone size={14} className="text-gray-600" />
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-700 text-white text-xs px-3 py-1 rounded shadow z-30">
                  Copied!
                </span>
              )}
            </button>
            <button
              className="p-2.5 bg-white hover:bg-gray-50 rounded-xl transition-all"
              onClick={() => setShowContact(true)}
              aria-label="Contact by email"
            >
              <Mail size={14} className="text-gray-600" />
            </button>
          </div>
        </div>
        {/* Contact Modal */}
        {showContact && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-900"
                onClick={() => setShowContact(false)}
                aria-label="Close"
              >
                ×
              </button>
              <div className="text-lg font-semibold mb-4">Contact Agent</div>
              <form
                className="space-y-4"
                onSubmit={e => {
                  e.preventDefault();
                  setShowContact(false);
                  alert("Message sent!");
                }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  rows={4}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-2 rounded-lg transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
        
        {/* Action buttons */}
        <div className="flex gap-3 pt-1">
          <button
            className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-3 rounded-2xl transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            onClick={() => alert("Visit scheduled!")}
          >
            Schedule Visit
          </button>
          <button
            className="px-6 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 rounded-2xl transition-all"
            onClick={handleSave}
            disabled={isLiked}
          >
            {isLiked ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
