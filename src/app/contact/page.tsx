"use client";
import React, { useState } from 'react';
import { User, Mail, MessageSquare, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative min-h-screen font-[Poppins-regular] bg-gradient-to-br from-yellow-50 via-white to-green-50 flex items-center justify-center p-4">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20"></div>
      </div>

      {/* Form container */}
      <div className="relative bg-white rounded-lg shadow-md p-8 max-w-md w-full z-10 transition-transform hover:scale-105 border border-green-200">
        <h1 className="text-3xl font-bold text-green-800 mb-2 text-center">Contact Us</h1>
        <p className="text-green-600 mb-6 text-center">We’d love to hear from you!</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name field */}
          <div>
            <div className="flex items-center mb-2">
              <User className="h-5 w-5 text-green-500 mr-2" />
              <label className="text-green-700 text-sm font-bold" htmlFor="name">
                Name
              </label>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="shadow appearance-none border border-green-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500 bg-yellow-50 transition-all duration-200"
            />
          </div>

          {/* Email field */}
          <div>
            <div className="flex items-center mb-2">
              <Mail className="h-5 w-5 text-green-500 mr-2" />
              <label className="text-green-700 text-sm font-bold" htmlFor="email">
                Email
              </label>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="yourname@example.com"
              className="shadow appearance-none border border-green-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500 bg-yellow-50 transition-all duration-200"
            />
          </div>

          {/* Message field */}
          <div>
            <div className="flex items-center mb-2">
              <MessageSquare className="h-5 w-5 text-green-500 mr-2" />
              <label className="text-green-700 text-sm font-bold" htmlFor="message">
                Message
              </label>
            </div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="How can we help you?"
              className="shadow appearance-none border border-green-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500 bg-yellow-50 transition-all duration-200"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center transition-colors duration-200"
          >
            <Send className="h-5 w-5 mr-2" />
            Send Message
          </button>
        </form>

        {/* Alternative contact */}
        <div className="mt-6 text-center">
          <p className="text-green-700 flex items-center justify-center">
            <Mail className="h-5 w-5 mr-2" />
            Or reach us at <a href="mailto:calebasiedu100@gmail.com" className="text-green-500 hover:text-green-700 ml-1">calebasiedu100@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;