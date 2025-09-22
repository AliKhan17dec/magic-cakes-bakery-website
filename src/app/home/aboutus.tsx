import React from 'react';
import { FaRegSmile, FaRegClock } from "react-icons/fa";// or use other icon libraries like 'react-icons'
import { FiStar } from "react-icons/fi";

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-white">
  <div className="container mx-auto px-4 md:px-8">
    {/* Main Content Row — Balanced Layout */}
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-left space-y-6">
        {/* Title */}
        <div className="text-center mb-5">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-5 text-balance leading-tight font-playfair text-left">
            <span className="text-black">About</span> <span className="bg-gradient-to-r from-[#FF5C77] to-[#ff7a8f] bg-clip-text text-transparent animate-pulse">Us</span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Welcome To Mgic Cakes! We Are Passionate About Baking The Finest Cakes And Pastries, Using Only The Freshest Ingredients. Our Journey Began 2010, And Since Then, We Have Been Dedicated To Delivering Happiness Through Our Delicious Bakes.
        </p>

        {/* Read More Link */}
        <a
          href="#"
          className="text-[#FF5C77] text-md font-medium flex items-center hover:underline mt-2"
        >
          Read More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Right Side - Chef Image */}
      <div className="md:w-1/2 flex justify-end">
        <img
          src="/home/pngtree-pink-tiered-wedding-cake-png-image_19076795-removebg-preview.png"
          alt="Fresh Strawberry Cake"
          className="w-full max-w-[400px] h-auto rounded-lg object-cover"
        />
      </div>
    </div>
  </div>

  {/* Features Row */}
  <div className="container mx-auto px-4 mt-12">
    <div className="mx-auto flex flex-wrap justify-center gap-8 md:gap-12">
      {[
        {
          icon: <FaRegSmile className="text-[#FF5C77]" size={30} />,
          title: 'Delicious, Fresh, and Natural',
        },
        {
          icon: <FaRegClock className="text-[#FF5C77]" size={30} />,
          title: 'Custom Cakes For Every Occasion',
        },
        {
          icon: <FiStar className="text-[#FF5C77]" size={30} />,
          title: 'Premium Ingredients & Secret Recipes',
        },
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-center space-x-3 text-center p-3 rounded-full w-fit"
        >
          <div className="p-2 bg-white rounded-full">{item.icon}</div>
          <span className="text-md font-medium text-gray-700">{item.title}</span>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default AboutUsSection;