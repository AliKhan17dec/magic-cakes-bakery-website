"use client"

import React from 'react';

const HowItWorks = () => {
  const advantages = [
    {
      title: 'Add To Cart',
      description: 'Select your favorite treats and add them to your cart with just one click',
      image: '/home/howitworks/shopping-cart-icon-free-vector.png', // Replace with actual image path
    },
    {
      title: 'Checkout',
      description: 'Securely complete your order with our simple and fast checkout process.',
      image: '/home/howitworks/secure-checkout-icon-black-white-600nw-2484143929.png', // Replace with actual image path
    },
    {
      title: 'Pickup',
      description: 'Pick up your fresh and delicious order right on time, hassle-free.',
      image: '/home/howitworks/istockphoto-1291750007-612x612.png', // Replace with actual image path
    },
  ];

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
        {/* Title */}
        <h2 className="text-5xl lg:text-6xl font-bold text-center text-gray-800 mb-12 font-playfair">How it Works</h2>

        {/* Grid of advantages */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Circular Image */}
              <div className="w-52 h-52 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm">
                <img
                  src={advantage.image}
                  alt={advantage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800">{advantage.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
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
    </section>
  );
};

export default HowItWorks;