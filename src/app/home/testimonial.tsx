"use client"

import React from 'react';
import { FaStar } from 'react-icons/fa';

const CustomerTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      stars: 5,
      text: "[Shop Name] Made The Perfect Cake For My Daughter's Birthday, Beautiful Design And Delicious Taste. Great Service!",
      author: "James Olson"
    },
    {
      id: 2,
      stars: 5,
      text: "I've Tried Many Items From [Shop Name] And They're As Amazing. The Quality And Variety Are Fantastic. Highly Recommended!",
      author: "James Olson"
    },
    {
      id: 3,
      stars: 5,
      text: "I've Tried Many Items From [Shop Name] And They're As Amazing. The Quality And Variety Are Fantastic. Highly Recommended!",
      author: "James Olson"
    },
    {
      id: 4,
      stars: 5,
      text: "I've Tried Many Items From [Shop Name] And They're As Amazing. The Quality And Variety Are Fantastic. Highly Recommended!",
      author: "James Olson"
    },
    {
      id: 5,
      stars: 5,
      text: "I've Tried Many Items From [Shop Name] And They're As Amazing. The Quality And Variety Are Fantastic. Highly Recommended!",
      author: "James Olson"
    },
    {
      id: 6,
      stars: 5,
      text: "I've Tried Many Items From [Shop Name] And They're As Amazing. The Quality And Variety Are Fantastic. Highly Recommended!",
      author: "James Olson"
    },
    {
      id: 7,
      stars: 5,
      text: "I've Tried Many Items From [Shop Name] And They're As Amazing. The Quality And Variety Are Fantastic. Highly Recommended!",
      author: "James Olson"
    },
    {
      id: 8,
      stars: 5,
      text: "I've Tried Many Items From [Shop Name] And They're As Amazing. The Quality And Variety Are Fantastic. Highly Recommended!",
      author: "James Olson"
    }
  ];

  // Duplicate the testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative bg-[#FFC0CB] py-16 overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl lg:text-6xl font-bold text-center text-gray-800 mb-12 font-playfair">What Our Customers Say</h2>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-horizontal">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`} 
                className="flex-shrink-0 w-[450px] px-4"
              >
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <div className="flex text-yellow-400 mb-4">
                    {Array.from({ length: testimonial.stars }, (_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    {testimonial.text}
                  </p>
                  <div className="text-right mt-4">
                    <p className="text-gray-800 font-semibold">{testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes slideHorizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide-horizontal {
          animation: slideHorizontal 30s linear infinite;
          display: flex;
          width: fit-content;
        }
        .animate-slide-horizontal:hover {
          animation-play-state: paused;
        }
        
        /* Add a smooth transition for the animation */
        .animate-slide-horizontal {
          transition: transform 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default CustomerTestimonials;