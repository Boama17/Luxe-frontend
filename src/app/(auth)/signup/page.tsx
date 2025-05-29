"use client"
import { useState } from "react";
import Image from "next/image";
import one from "../../../assets/img/one.jpg";
import two from "../../../assets/img/two.png";
import three from "../../../assets/img/three.jpg";
import Footer from "@/app/sections/footer";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  interests: string[];
  terms: boolean;
};

type FormErrors = {
  [key: string]: string;
};

export default function SignupPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    interests: [],
    terms: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [currentStep, setCurrentStep] = useState(1);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const updated = {...prev};
        delete updated[name];
        return updated;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    
    if (name === "terms") {
      setFormData(prev => ({
        ...prev,
        terms: checked
      }));
      
      if (errors.terms) {
        setErrors(prev => {
          const updated = {...prev};
          delete updated.terms;
          return updated;
        });
      }
    } else {
      setFormData(prev => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter(interest => interest !== value),
      }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};
    
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      }
    }
    
    if (step === 2) {
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
      
      if (formData.interests.length === 0) {
        newErrors.interests = "Please select at least one interest";
      }
      
      if (!formData.terms) {
        newErrors.terms = "You must agree to the terms and conditions";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      console.log("Form submitted:", formData);
      // Redirect or show success message
    }
  };

  const propertyTypes = [
    { 
      name: "Residential", 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      name: "Commercial", 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      name: "Investment", 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      name: "Luxury", 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 flex flex-col font-[Poppins-regular]">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-800 text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="ml-2 text-xl font-[Elegant] text-emerald-900">LuxeRealty</span>
          </div>
          <nav>
            <a href="/signin" className="text-emerald-800 hover:text-emerald-600 font-medium">Sign In</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col md:flex-row">
        {/* Image Section - Now on the left */}
        <section className="hidden md:block md:w-1/2 bg-emerald-800 p-8">
          <div className="h-full flex flex-col justify-center relative">
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <Image 
                src={one}
                alt="Luxury property"
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
            </div>
            
            <div className="relative z-10 bg-white/90 p-8 rounded-lg max-w-md mx-auto shadow-xl">
              <h3 className="text-2xl font-[Elegant] font-bold text-emerald-800 mb-4">
                Find Your Perfect Home
              </h3>
              <p className="text-gray-600">
                Join thousands of satisfied clients who have found their dream properties through our personalized service.
              </p>
              
              <div className="mt-6 flex items-center">
                <div className="flex -space-x-4">
                  <Image src={one} alt="" className="rounded-full h-12 w-12 border-2 border-white object-cover"/>
                  <Image src={two} alt="" className="rounded-full h-12 w-12 border-2 border-white object-cover"/>
                  <Image src={three} alt="" className="rounded-full h-12 w-12 border-2 border-white object-cover"/>
                </div>
                <span className="ml-4 text-sm text-gray-700">
                  <span className="font-medium">1000+</span> properties available
                </span>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <div className="text-emerald-800 font-medium">245+</div>
                  <div className="text-xs text-gray-500">Properties Sold</div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <div className="text-emerald-800 font-medium">98%</div>
                  <div className="text-xs text-gray-500">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section - Now on the right */}
        <section className="w-full md:w-1/2 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="max-w-md w-full">
            <div className="text-center mb-8">
              <h1 className="text-emerald-900 font-[Elegant] text-4xl md:text-5xl mb-2">
                Join <span className="font-normal">Our</span> Community
              </h1>
              <p className="text-gray-600">
                Create your account to discover curated properties that match your lifestyle preferences.
              </p>
              
              <div className="mt-6 flex items-center justify-center">
                <div className="flex items-center">
                  <div className={`flex items-center justify-center h-8 w-8 rounded-full ${currentStep === 1 ? 'bg-emerald-800 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    1
                  </div>
                  <div className={`h-1 w-8 ${currentStep === 1 ? 'bg-gray-200' : 'bg-emerald-800'}`}></div>
                  <div className={`flex items-center justify-center h-8 w-8 rounded-full ${currentStep === 2 ? 'bg-emerald-800 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    2
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-lg rounded-xl p-8">
              {currentStep === 1 && (
                <>
                  <div className="space-y-1">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent`}
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>

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
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent`}
                      placeholder="john.doe@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent`}
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full bg-emerald-800 hover:bg-emerald-900 text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    Continue
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <div className="space-y-1 relative">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {passwordVisible ? (
                          <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                  </div>

                  <div className="space-y-1 relative">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={confirmPasswordVisible ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {confirmPasswordVisible ? (
                          <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                  </div>

                  <fieldset className="space-y-3">
                    <legend className="text-sm font-medium text-gray-700">
                      I&apos;m interested in
                    </legend>
                    <div className="grid grid-cols-2 gap-3">
                      {propertyTypes.map((type) => (
                        <div 
                          key={type.name} 
                          className={`flex flex-col items-center justify-center p-3 rounded-lg cursor-pointer border-2 transition-all ${
                            formData.interests.includes(type.name) 
                              ? 'border-emerald-800 bg-emerald-50' 
                              : 'border-gray-200 bg-white hover:bg-gray-50'
                          }`}
                        >
                          <input
                            type="checkbox"
                            id={`interest-${type.name}`}
                            name="interests"
                            value={type.name}
                            onChange={handleCheckboxChange}
                            checked={formData.interests.includes(type.name)}
                            className="sr-only"
                          />
                          <label 
                            htmlFor={`interest-${type.name}`} 
                            className="flex flex-col items-center cursor-pointer"
                          >
                            <div className={`p-2 rounded-full mb-1 ${
                              formData.interests.includes(type.name) 
                                ? 'text-emerald-800' 
                                : 'text-gray-500'
                            }`}>
                              {type.icon}
                            </div>
                            <span className={`text-sm ${
                              formData.interests.includes(type.name) 
                                ? 'text-emerald-800 font-medium' 
                                : 'text-gray-600'
                            }`}>
                              {type.name}
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors.interests && <p className="text-red-500 text-xs mt-1">{errors.interests}</p>}
                  </fieldset>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        checked={formData.terms}
                        onChange={handleCheckboxChange}
                        className={`h-4 w-4 rounded border ${errors.terms ? 'border-red-500' : 'border-gray-300'} text-emerald-800 focus:ring-emerald-800`}
                      />
                    </div>
                    <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
                      I agree to the <a href="#" className="text-emerald-800 hover:underline font-medium">Terms and Conditions</a>
                    </label>
                  </div>
                  {errors.terms && <p className="text-red-500 text-xs -mt-4">{errors.terms}</p>}

                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="w-1/2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                    >
                      <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                      </svg>
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-1/2 bg-emerald-800 hover:bg-emerald-900 text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                    >
                      Create Account
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-700">
                Already have an account?{" "}
                <a href="/signin" className="text-emerald-800 hover:underline font-medium">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
     <Footer background="bg-white"/> 
    </div>
  );
}