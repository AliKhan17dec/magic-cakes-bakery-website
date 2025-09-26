"use client"

import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/contact/contactpagebg.webp')"
        }}
      ></div>
      
      {/* Content Overlay */}
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-4 py-40 max-w-6xl">
          {/* Contact Form */}
          <div className="backdrop-blur-lg bg-white/10 rounded-lg shadow-md p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-red-600 mb-6">Have a Question?</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-black mb-1">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border-2 border-white rounded-md focus:outline-none focus:ring-0 focus:border-red-500 text-black"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border-2 border-white  rounded-md focus:outline-none focus:ring-0 focus:border-red-500 text-black"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-2 border-white  rounded-md focus:outline-none focus:ring-0 focus:border-red-500 text-black"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
                  Have questions? We have answers*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border-2 border-white  rounded-md focus:outline-none focus:ring-0 focus:border-red-500 text-black"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Map with iframe */}
          <div className="backdrop-blur-lg bg-white/10 rounded-lg shadow-md p-6 border border-white/20">
            <div className="w-full h-[520px] rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647488068363!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Google Map of New York City"
                className="rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
              {/* Opening Hours Section */}
        <div className="container mx-auto px-4 py-8 max-w-6xl">
  <div className="backdrop-blur-lg bg-white/10 rounded-lg shadow-md p-6 border border-white/20">
    <h3 className="text-3xl font-bold text-red-600 mb-9 text-center">Contact Information</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      
      {/* Column 1: Contact Details */}
      <div className="space-y-3">
        <h4 className="font-bold text-lg text-red-600">Get In Touch</h4>
        <p className="text-black">📧 info@cannoli-queens.com</p>
        <p className="text-black">📞 +1 905-850-8880</p>
      </div>

      {/* Column 2: Address */}
      <div className="space-y-3">
        <h4 className="font-bold text-lg text-red-600">Visit Us</h4>
        <address className="text-black not-italic leading-relaxed">
          200 Marycroft Ave #23<br />
          Vaughan, Ontario<br />
          L4L 5X9, Canada
        </address>
      </div>

      {/* Column 3: Opening Hours */}
      <div className="space-y-3">
        <h4 className="font-bold text-lg text-red-600">Opening Hours</h4>
        <div className="text-sm text-black space-y-1">
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

    </div>
  </div>
</div>
    </div>
  );
};

export default ContactPage;