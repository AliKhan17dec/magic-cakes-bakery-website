"use client"

import React, { useState } from 'react'
import Image from "next/image"
import { FaShoppingCart } from "react-icons/fa";

// Product data exactly as shown in your screenshot
const cakes = [
  {
    id: 1,
    name: "Chocolate cake",
    price: "148 $",
    image: "/home/Rainbow-Cake-High-Altitude-Sprinkles-Lucky-Charms-St-Patricks-Day-007-removebg-preview 1.png",
    category: "Popular cakes"
  },
  {
    id: 2,
    name: "Apple cake",
    price: "129 $",
    image: "/home/Best-Moist-Chocolate-Cake1-1-removebg-preview 1.png",
    category: "Popular cakes"
  },
  {
    id: 3,
    name: "Decorated cake",
    price: "119 $",
    image: "/home/Fresh-Strawberry-Cake-removebg-preview 1 1.png",
    category: "Popular cakes"
  },
  {
    id: 4,
    name: "Anna Pavlova",
    price: "159 $",
    image: "/home/Birthday_Chocolate_Dripping_cake-removebg-preview 1.png",
    category: "Popular cakes"
  },
  {
    id: 5,
    name: "Carrot cake",
    price: "129 $",
    image: "/home/images-removebg-preview 1.png",
    category: "Popular cakes"
  },
  {
    id: 6,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/duel-delight-chocolate_-cake-removebg-preview 1.png",
    category: "Popular cakes"
  },
  {
    id: 7,
    name: "Chocolate cake",
    price: "148 $",
    image: "/home/Best-Moist-Chocolate-Cake1-1-removebg-preview 1.png",
    category: "Celebration cakes"
  },
  {
    id: 8,
    name: "Apple cake",
    price: "129 $",
    image: "/home/Rainbow-Cake-High-Altitude-Sprinkles-Lucky-Charms-St-Patricks-Day-007-removebg-preview 1.png",
    category: "Celebration cakes"
  },
  {
    id: 9,
    name: "Decorated cake",
    price: "119 $",
    image: "/home/Fresh-Strawberry-Cake-removebg-preview 1 1.png",
    category: "Celebration cakes"
  },
  {
    id: 10,
    name: "Anna Pavlova",
    price: "159 $",
    image: "/home/duel-delight-chocolate_-cake-removebg-preview 1.png",
    category: "Celebration cakes"
  },
  {
    id: 11,
    name: "Carrot cake",
    price: "129 $",
    image: "/home/images-removebg-preview 1.png",
    category: "Celebration cakes"
  },
  {
    id: 12,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/Birthday_Chocolate_Dripping_cake-removebg-preview 1.png",
    category: "Celebration cakes"
  },
  {
    id: 13,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/Rainbow-Cake-High-Altitude-Sprinkles-Lucky-Charms-St-Patricks-Day-007-removebg-preview 1.png",
    category: "Baby cakes"
  },
  {
    id: 14,
    name: "Chocolate cake",
    price: "148 $",
    image: "/home/Best-Moist-Chocolate-Cake1-1-removebg-preview 1.png",
    category: "Baby cakes"
  },
  {
    id: 15,
    name: "Apple cake",
    price: "129 $",
    image: "/home/images-removebg-preview 1.png",
    category: "Baby cakes"
  },
  {
    id: 16,
    name: "Decorated cake",
    price: "119 $",
    image: "/home/Birthday_Chocolate_Dripping_cake-removebg-preview 1.png",
    category: "Baby cakes"
  },
  {
    id: 17,
    name: "Anna Pavlova",
    price: "159 $",
    image: "/home/Fresh-Strawberry-Cake-removebg-preview 1 1.png",
    category: "Baby cakes"
  },
  {
    id: 18,
    name: "Carrot cake",
    price: "129 $",
    image: "/home/duel-delight-chocolate_-cake-removebg-preview 1.png",
    category: "Baby cakes"
  },
  {
    id: 19,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/Fresh-Strawberry-Cake-removebg-preview 1 1.png",
    category: "Wedding cakes"
  },
  {
    id: 20,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/Rainbow-Cake-High-Altitude-Sprinkles-Lucky-Charms-St-Patricks-Day-007-removebg-preview 1.png",
    category: "Wedding cakes"
  },
  {
    id: 21,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/Best-Moist-Chocolate-Cake1-1-removebg-preview 1.png",
    category: "Wedding cakes"
  },
  {
    id: 22,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/duel-delight-chocolate_-cake-removebg-preview 1.png",
    category: "Wedding cakes"
  },
  {
    id: 23,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/images-removebg-preview 1.png",
    category: "Wedding cakes"
  },
  {
    id: 24,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/Birthday_Chocolate_Dripping_cake-removebg-preview 1.png",
    category: "Wedding cakes"
  },
  {
    id: 25,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/duel-delight-chocolate_-cake-removebg-preview 1.png",
    category: "Special cakes"
  },
  {
    id: 26,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/Best-Moist-Chocolate-Cake1-1-removebg-preview 1.png",
    category: "Special cakes"
  },
  {
    id: 27,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/Fresh-Strawberry-Cake-removebg-preview 1 1.png",
    category: "Special cakes"
  },
  {
    id: 28,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/images-removebg-preview 1.png",
    category: "Special cakes"
  },
  {
    id: 29,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/Birthday_Chocolate_Dripping_cake-removebg-preview 1.png",
    category: "Special cakes"
  },
  {
    id: 30,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/Rainbow-Cake-High-Altitude-Sprinkles-Lucky-Charms-St-Patricks-Day-007-removebg-preview 1.png",
    category: "Special cakes"
  },
]

export default function CakesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Popular cakes");

  const filteredCakes = cakes.filter(cake => cake.category === selectedCategory);

  const handleCategoryClick = (category: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      {/* Navigation */}
      <nav className="px-6 pt-30">
  <div className="flex justify-between items-center bg-gray-200 p-5 rounded-3xl">
    {/* 👇 ONLY CHANGE: Add overflow-x-auto + whitespace-nowrap + pb-1 for scroll affordance */}
    <div className="flex space-x-8 overflow-x-auto whitespace-nowrap pb-1">
      {["Popular cakes", "Celebration cakes", "Baby cakes", "Wedding cakes", "Special cakes"].map((category) => (
        <a
          key={category}
          href="#"
          onClick={handleCategoryClick(category)}
          className={`text-md font-medium transition-colors ${
            selectedCategory === category
              ? "text-black border-b-2 border-black"
              : "text-gray-800 hover:text-gray-700"
          }`}
        >
          {category}
        </a>
      ))}
    </div>
    <div className="flex items-center space-x-2 flex-shrink-0"> {/* 👈 Prevents sort from shrinking */}
      <span className="text-sm text-gray-800 whitespace-nowrap">Sort by</span>
      <select className="border border-gray-500 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800">
        <option>Default</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
    </div>
  </div>
</nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
        {/* 👇 Dynamic heading — shows selected category */}
        <h1 className="text-3xl lg:text-5xl font-bold text-red-600 mb-16 text-center font-playfair">{selectedCategory}</h1>
        
        {/* Product Grid — Key changes on category to trigger re-render & animation */}
        <div key={selectedCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCakes.map((cake) => (
            <div
              key={cake.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform cursor-pointer group flex flex-col border-1 border-gray-200 opacity-0 animate-fadeInUp"
            >
              <div className="aspect-square bg-[#FFE6EA] flex items-center justify-center p-5">
                <Image
                  src={cake.image || "/placeholder.svg"}
                  alt={cake.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-gray-600 mb-1 text-md">{cake.name}</h3>
                <p className="text-gray-800 text-md">{cake.price}</p>
              </div>
              {/* Add to Cart Button */}
              <div className="px-4 pb-4 pt-2">
                <button className="w-full flex items-center justify-center gap-2 bg-black hover:bg-transparent text-white hover:text-black border-2 font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-md">
                  <FaShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ✅ Global CSS Animation (paste this in your globals.css or layout.tsx inside <style jsx global> or similar) */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}