"use client"
import { useState } from "react";
import Image from "next/image";
import one from "../../../assets/img/one.jpg";
import { useRouter } from "next/navigation";
import Link from "next/link";


type FormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export default function LoginPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Replace with actual authentication logic
      // const response = await authService.login(formData);

      // On successful login
      router.push("/dashboard");
    } catch {
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col font-[Poppins-regular]">
      {/* Main Content */}
      <main className="flex-grow flex flex-col lg:flex-row">
        {/* Form Section */}
        <section className="w-full lg:w-1/2 p-8 md:p-12 flex items-center justify-center">
          <div className="max-w-md w-full">
            <header className="mb-10">
              <h1 className="text-emerald-900 font-[Elegant] text-4xl md:text-5xl mb-4">
                Welcome Back
              </h1>
              <p className="text-gray-700">
                Sign in to access your personalized property dashboard.
              </p>
            </header>

            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-sm text-emerald-800 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-emerald-800 border-gray-300 rounded focus:ring-emerald-800"
                  />
                  <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
              </div>
              <Link href="/pages">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-emerald-800 hover:bg-emerald-900 text-white py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center ${
                    isLoading ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </button>
                </Link>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-700">
                Don&rsquo;t have an account?{" "}
                <Link href="/signup" className="text-emerald-800 hover:underline font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="hidden lg:block lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-amber-900/10 z-10"></div>
          <Image 
            src={one}
            alt="Luxury property interior"
            fill
            className="object-cover"
            priority
          />
          
          <div className="absolute bottom-0 left-0 right-0 p-12 z-20">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-xl mx-auto shadow-2xl">
              <h3 className="text-2xl font-[Elegant] font-bold text-emerald-800 mb-6 text-center">
                Unlock Your Property Journey
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-emerald-800/10 rounded-full mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-emerald-800 mb-1">Smart Filters</h4>
                  <p className="text-sm text-gray-600">Find exactly what you&rsquo;re looking for</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-emerald-800/10 rounded-full mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-emerald-800 mb-1">Verified Listings</h4>
                  <p className="text-sm text-gray-600">Only authentic properties</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-emerald-800/10 rounded-full mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-emerald-800 mb-1">Price Alerts</h4>
                  <p className="text-sm text-gray-600">Never miss a deal</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-emerald-800/10 rounded-full mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-emerald-800 mb-1">Virtual Tours</h4>
                  <p className="text-sm text-gray-600">Explore from anywhere</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-emerald-800/20 text-center">
                <p className="text-sm text-gray-600">
                  Join our community of 50,000+ satisfied property seekers
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          © {new Date().getFullYear()} LuxeRealty. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
