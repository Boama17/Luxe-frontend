"use client"
import type React from "react"
import { useCallback, useState, useEffect } from "react"
import { User, Mail, MessageSquare, Send, Phone, CheckCircle, AlertCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Wrap validateForm in useCallback to avoid useEffect warning
  const validateForm = useCallback((): FormErrors => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    return newErrors
  }, [formData])

  // Validate on change for touched fields
  useEffect(() => {
    const validateTouchedFields = () => {
      const validationErrors = validateForm()
      const touchedErrors: FormErrors = {}

      Object.keys(touched).forEach((field) => {
        if (touched[field] && validationErrors[field as keyof FormErrors]) {
          touchedErrors[field as keyof FormErrors] = validationErrors[field as keyof FormErrors]
        }
      })

      setErrors(touchedErrors)
    }

    validateTouchedFields()
  }, [formData, touched, validateForm]) // <-- Added validateForm

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate all fields on submit
    const validationErrors = validateForm()
    setErrors(validationErrors)
    setTouched({
      name: true,
      email: true,
      message: true,
    })

    // If there are errors, don't submit
    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission with pulsing effect
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after showing success message
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitted(false)
      setTouched({})
    }, 5000)
  }

  return (
    <div className="min-h-screen font-[Poppins-regular] bg-gradient-to-br from-emerald-50 via-yellow-50 to-green-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #eab308 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Side - Contact Information */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-yellow-100 rounded-full">
                <span className="text-emerald-700 font-semibold text-sm">Get in Touch</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Let&apos;s Start a
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-yellow-600">
                  Conversation
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                We&apos;re here to help and answer any question you might have. We look forward to hearing from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-emerald-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 sm:col-span-2 min-w-0">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 overflow-hidden">
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-emerald-600 text-sm truncate hover:text-clip hover:overflow-visible">
                      calebasiedu100@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-yellow-100 hover:border-yellow-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-yellow-600 text-sm">+233 (541) 53-7940</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="hidden lg:block relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200 to-yellow-200 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Join 1000+ happy customers</p>
                    <p className="text-xs text-gray-600">who trust our services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Contact Form */}
          <div className="lg:pl-8">
            <div className="relative">
              {/* Form Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-3xl opacity-10 blur-2xl"></div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 lg:p-10 flex flex-col items-center justify-center min-h-[500px]"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.2 }}
                      className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-yellow-500 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="h-12 w-12 text-white" />
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 text-center"
                    >
                      Message Sent Successfully!
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-gray-600 text-center max-w-md"
                    >
                      Thank you for reaching out to us. We&apos;ve received your message and will get back to you shortly.
                    </motion.p>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1, duration: 4 }}
                      className="h-1 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full mt-8"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`relative bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 lg:p-10 ${
                      isSubmitting ? "animate-pulse-subtle" : ""
                    }`}
                  >
                    <div className="space-y-6">
                      <div className="text-center space-y-2">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Send us a Message</h2>
                        <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you soon.</p>

                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div className="space-y-2">
                          <label className="flex items-center text-sm font-semibold text-gray-700" htmlFor="name">
                            <User className="h-4 w-4 mr-2 text-emerald-500" />
                            Full Name
                          </label>
                          <div className="relative group">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                              placeholder="Enter your full name"
                              className={`w-full px-4 py-4 bg-gradient-to-r from-emerald-50 to-yellow-50 border ${
                                errors.name ? "border-red-300" : "border-emerald-200"
                              } rounded-2xl focus:outline-none focus:ring-2 ${
                                errors.name ? "focus:ring-red-500" : "focus:ring-emerald-500"
                              } focus:border-transparent transition-all duration-300 placeholder-gray-400 group-hover:border-emerald-300`}
                              aria-invalid={errors.name ? "true" : "false"}
                              aria-describedby={errors.name ? "name-error" : undefined}
                            />
                            <div
                              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${
                                errors.name ? "from-red-500 to-red-400" : "from-emerald-500 to-yellow-500"
                              } opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none`}
                            ></div>
                            {errors.name && (
                              <div
                                id="name-error"
                                className="flex items-center mt-1.5 text-sm text-red-500 font-medium"
                              >
                                <AlertCircle className="h-3.5 w-3.5 mr-1.5" />
                                {errors.name}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                          <label className="flex items-center text-sm font-semibold text-gray-700" htmlFor="email">
                            <Mail className="h-4 w-4 mr-2 text-emerald-500" />
                            Email Address
                          </label>
                          <div className="relative group">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                              placeholder="Enter your email address"
                              className={`w-full px-4 py-4 bg-gradient-to-r from-emerald-50 to-yellow-50 border ${
                                errors.email ? "border-red-300" : "border-emerald-200"
                              } rounded-2xl focus:outline-none focus:ring-2 ${
                                errors.email ? "focus:ring-red-500" : "focus:ring-emerald-500"
                              } focus:border-transparent transition-all duration-300 placeholder-gray-400 group-hover:border-emerald-300`}
                              aria-invalid={errors.email ? "true" : "false"}
                              aria-describedby={errors.email ? "email-error" : undefined}
                            />
                            <div
                              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${
                                errors.email ? "from-red-500 to-red-400" : "from-emerald-500 to-yellow-500"
                              } opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none`}
                            ></div>
                            {errors.email && (
                              <div
                                id="email-error"
                                className="flex items-center mt-1.5 text-sm text-red-500 font-medium"
                              >
                                <AlertCircle className="h-3.5 w-3.5 mr-1.5" />
                                {errors.email}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Message Field */}
                        <div className="space-y-2">
                          <label className="flex items-center text-sm font-semibold text-gray-700" htmlFor="message">
                            <MessageSquare className="h-4 w-4 mr-2 text-emerald-500" />
                            Your Message
                          </label>
                          <div className="relative group">
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                              rows={5}
                              placeholder="Tell us how we can help you..."
                              className={`w-full px-4 py-4 bg-gradient-to-r from-emerald-50 to-yellow-50 border ${
                                errors.message ? "border-red-300" : "border-emerald-200"
                              } rounded-2xl focus:outline-none focus:ring-2 ${
                                errors.message ? "focus:ring-red-500" : "focus:ring-emerald-500"
                              } focus:border-transparent transition-all duration-300 placeholder-gray-400 resize-none group-hover:border-emerald-300`}
                              aria-invalid={errors.message ? "true" : "false"}
                              aria-describedby={errors.message ? "message-error" : undefined}
                            />
                            <div
                              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${
                                errors.message ? "from-red-500 to-red-400" : "from-emerald-500 to-yellow-500"
                              } opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none`}
                            ></div>
                            {errors.message && (
                              <div
                                id="message-error"
                                className="flex items-center mt-1.5 text-sm text-red-500 font-medium"
                              >
                                <AlertCircle className="h-3.5 w-3.5 mr-1.5" />
                                {errors.message}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group relative w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-yellow-500 text-white font-semibold rounded-2xl hover:from-emerald-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                        >
                          <div className="flex items-center justify-center space-x-2">
                            {isSubmitting ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Sending...</span>
                              </>
                            ) : (
                              <>
                                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                <span>Send Message</span>
                              </>
                            )}
                          </div>
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white to-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        </button>
                      </form>

                      {/* Privacy Notice */}
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500 text-center">
                          By submitting this form, you agree to our privacy policy. We&apos;ll never share your information
                          with third parties.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
