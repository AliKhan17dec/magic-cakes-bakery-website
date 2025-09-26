"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

// Extract categories for reuse and performance
const CATEGORIES = [
  "Popular cakes",
  "Celebration cakes",
  "Baby cakes",
  "Wedding cakes",
  "Special cakes",
] as const;

const SORT_OPTIONS = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

// Product data
const cakes = [
  { id: 1, name: "Chocolate cake", price: "148 $", image: "/home/Rainbow-Cake-High-Altitude-Sprinkles-Lucky-Charms-St-Patricks-Day-007-removebg-preview 1.png", category: "Popular cakes" },
  { id: 2, name: "Apple cake", price: "129 $", image: "/home/Best-Moist-Chocolate-Cake1-1-removebg-preview 1.png", category: "Popular cakes" },
  { id: 3, name: "Decorated cake", price: "119 $", image: "/home/Fresh-Strawberry-Cake-removebg-preview 1 1.png", category: "Popular cakes" },
  { id: 4, name: "Anna Pavlova", price: "159 $", image: "/home/Birthday_Chocolate_Dripping_cake-removebg-preview 1.png", category: "Popular cakes" },
  { id: 5, name: "Carrot cake", price: "129 $", image: "/home/images-removebg-preview 1.png", category: "Popular cakes" },
  { id: 6, name: "Birthday cake", price: "139 $", image: "/home/duel-delight-chocolate_-cake-removebg-preview 1.png", category: "Popular cakes" },
  { id: 7, name: "Chocolate cake", price: "148 $", image: "/home/Best-Moist-Chocolate-Cake1-1-removebg-preview 1.png", category: "Celebration cakes" },
  { id: 8, name: "Apple cake", price: "129 $", image: "/home/Rainbow-Cake-High-Altitude-Sprinkles-Lucky-Charms-St-Patricks-Day-007-removebg-preview 1.png", category: "Celebration cakes" },
  { id: 9, name: "Decorated cake", price: "119 $", image: "/home/Fresh-Strawberry-Cake-removebg-preview 1 1.png", category: "Celebration cakes" },
  { id: 10, name: "Anna Pavlova", price: "159 $", image: "/home/duel-delight-chocolate_-cake-removebg-preview 1.png", category: "Celebration cakes" },
  { id: 11, name: "Carrot cake", price: "129 $", image: "/home/images-removebg-preview 1.png", category: "Celebration cakes" },
  { id: 12, name: "Birthday cake", price: "139 $", image: "/home/Birthday_Chocolate_Dripping_cake-removebg-preview 1.png", category: "Celebration cakes" },
  { id: 13, name: "Birthday cake", price: "139 $", image: "/home/Rainbow-Cake-High-Altitude-Sprinkles-Lucky-Charms-St-Patricks-Day-007-removebg-preview 1.png", category: "Baby cakes" },
  { id: 14, name: "Chocolate cake", price: "148 $", image: "/home/Best-Moist-Chocolate-Cake1-1-removebg-preview 1.png", category: "Baby cakes" },
  { id: 15, name: "Apple cake", price: "129 $", image: "/home/images-removebg-preview 1.png", category: "Baby cakes" },
  { id: 16, name: "Decorated cake", price: "119 $", image: "/home/Birthday_Chocolate_Dripping_cake-removebg-preview 1.png", category: "Baby cakes" },
  { id: 17, name: "Anna Pavlova", price: "159 $", image: "/home/Fresh-Strawberry-Cake-removebg-preview 1 1.png", category: "Baby cakes" },
  { id: 18, name: "Carrot cake", price: "129 $", image: "/home/duel-delight-chocolate_-cake-removebg-preview 1.png", category: "Baby cakes" },
  { id: 19, name: "Birthday cake", price: "139 $", image: "/home/Fresh-Strawberry-Cake-removebg-preview 1 1.png", category: "Wedding cakes" },
  { id: 20, name: "Birthday cake", price: "139 $", image: "/home/Rainbow-Cake-High-Altitude-Sprinkles-Lucky-Charms-St-Patricks-Day-007-removebg-preview 1.png", category: "Wedding cakes" },
  { id: 21, name: "Birthday cake", price: "139 $", image: "/home/Best-Moist-Chocolate-Cake1-1-removebg-preview 1.png", category: "Wedding cakes" },
  { id: 22, name: "Birthday cake", price: "139 $", image: "/home/duel-delight-chocolate_-cake-removebg-preview 1.png", category: "Wedding cakes" },
  { id: 23, name: "Birthday cake", price: "139 $", image: "/home/images-removebg-preview 1.png", category: "Wedding cakes" },
  { id: 24, name: "Birthday cake", price: "139 $", image: "/home/Birthday_Chocolate_Dripping_cake-removebg-preview 1.png", category: "Wedding cakes" },
  { id: 25, name: "Birthday cake", price: "139 $", image: "/home/duel-delight-chocolate_-cake-removebg-preview 1.png", category: "Special cakes" },
  { id: 26, name: "Birthday cake", price: "139 $", image: "/home/Best-Moist-Chocolate-Cake1-1-removebg-preview 1.png", category: "Special cakes" },
  { id: 27, name: "Birthday cake", price: "139 $", image: "/home/Fresh-Strawberry-Cake-removebg-preview 1 1.png", category: "Special cakes" },
  { id: 28, name: "Birthday cake", price: "139 $", image: "/home/images-removebg-preview 1.png", category: "Special cakes" },
  { id: 29, name: "Birthday cake", price: "139 $", image: "/home/Birthday_Chocolate_Dripping_cake-removebg-preview 1.png", category: "Special cakes" },
  { id: 30, name: "Birthday cake", price: "139 $", image: "/home/Rainbow-Cake-High-Altitude-Sprinkles-Lucky-Charms-St-Patricks-Day-007-removebg-preview 1.png", category: "Special cakes" },
];

export default function CakesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Popular cakes");
  const [sortOption, setSortOption] = useState("default");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  // Filter and sort cakes
  const filteredCakes = cakes.filter((cake) => cake.category === selectedCategory);

  if (sortOption === "price-asc") {
    filteredCakes.sort((a, b) => {
      const priceA = parseFloat(a.price.replace(" $", ""));
      const priceB = parseFloat(b.price.replace(" $", ""));
      return priceA - priceB;
    });
  } else if (sortOption === "price-desc") {
    filteredCakes.sort((a, b) => {
      const priceA = parseFloat(a.price.replace(" $", ""));
      const priceB = parseFloat(b.price.replace(" $", ""));
      return priceB - priceA;
    });
  }

  const handleCategorySelect = (category: string) => {
    if (category === selectedCategory) return;
    setIsLoading(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setIsLoading(false);
    }, 300);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    setIsSortDropdownOpen(false);
  };

  const toggleFavorite = (cakeId: number) => {
    setFavorites((prev) =>
      prev.includes(cakeId)
        ? prev.filter((id) => id !== cakeId)
        : [...prev, cakeId]
    );
  };

  const addToCart = (cakeId: number) => {
    setCartItems((prev) => [...prev, cakeId]);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        

        {/* Category Navigation */}
        <div className="flex justify-center mb-16 mt-16">
          <nav className="bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg border border-gray-100">
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((category, index) => (
                <button
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm lg:text-base whitespace-nowrap animate-category-slide ${
                    selectedCategory === category
                      ? "bg-[#FF5C77] text-white shadow-lg hover:shadow-glow transform scale-105"
                      : "text-gray-600 hover:text-[#FF5C77] hover:bg-[#FFE6EA]/50"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {category}
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Sort Dropdown */}
        {/* <div className="flex justify-center mb-10 relative">
          <div className="flex items-center space-x-3 flex-shrink-0 w-full md:w-auto justify-center relative">
            <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Sort by
            </label>
            <button
              onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
              className="appearance-none border border-gray-300 rounded-xl px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-3 focus:ring-pink-200 text-gray-800 bg-gray-50 hover:bg-gray-100 min-w-[160px] pr-8 flex justify-between items-center transition-all shadow-sm"
              aria-haspopup="listbox"
              aria-expanded={isSortDropdownOpen}
              aria-label={`Sort by: ${SORT_OPTIONS.find(opt => opt.value === sortOption)?.label}`}
            >
              <span>{SORT_OPTIONS.find(opt => opt.value === sortOption)?.label}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isSortDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5 5-5" />
              </svg>
            </button>
            {isSortDropdownOpen && (
              <ul className="absolute top-full mt-2 w-full md:w-auto bg-white text-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-200 animate-fadeIn z-30">
                {SORT_OPTIONS.map((option) => (
                  <li key={option.value}>
                    <button
                      onClick={() => { handleSortChange(option.value); }}
                      className={`w-full text-left px-5 py-3 text-sm font-medium hover:bg-pink-50 transition-colors flex items-center gap-3 ${sortOption === option.value ? "bg-pink-100 text-pink-700" : "text-gray-800"}`}
                      aria-selected={sortOption === option.value}
                    >
                      {sortOption === option.value && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      <span className="truncate">{option.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div> */}

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-5 text-balance leading-tight font-playfair">
            <span className="text-black">Our</span>{" "}
            <span className="bg-gradient-to-r from-[#FF5C77] to-[#ff7a8f] bg-clip-text text-transparent animate-pulse">
              {selectedCategory}
            </span>
          </h1>
          {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handcrafted cakes made with love, care, passion, creativity, and the
            finest ingredients.
          </p> */}
        </div>

        {/* Main Grid with Loading Overlay */}
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-10 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#FFE6EA] border-t-[#FF5C77]"></div>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {filteredCakes.map((cake, index) => (
              <div
                key={cake.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-magical transition-all duration-500 transform hover:-translate-y-2 cursor-pointer animate-card-entrance"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-square bg-gradient-to-br from-[#FFE6EA] to-[#FFE6EA]/70 overflow-hidden p-2 sm:p-4 md:p-8">
                  <Image
                    src={cake.image || "/placeholder.svg?height=300&width=300&query=delicious cake"}
                    alt={cake.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Favorite Button (optional) */}
                  {/* <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(cake.id);
                    }}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${
                      favorites.includes(cake.id)
                        ? "bg-[#FF5C77] text-white animate-heart-beat"
                        : "bg-white/80 text-gray-400 hover:text-[#FF5C77] hover:bg-white"
                    } shadow-lg backdrop-blur-sm`}
                  >
                    <FaHeart className="w-4 h-4" />
                  </button> */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-gray-800 text-sm sm:text-lg mb-1 group-hover:text-[#FF5C77] transition-colors duration-300">
                        {cake.name}
                      </h3>
                      <p className="text-lg sm:text-2xl font-bold text-[#FF5C77]">
                        {cake.price}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(cake.id);
                    }}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF5C77] to-[#FF3B5D] hover:from-[#FF3B5D] hover:to-[#FF5C77] text-white  py-2 md:py-3 md:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow group/button font-medium text-xs sm:text-sm md:text-base" 
                  >
                    <FaShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover/button:animate-bounce" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        {/* <div className="flex justify-center mt-16">
          <button className="group relative px-12 py-4 bg-transparent border-2 border-[#FF5C77] text-[#FF5C77] rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#FF5C77] hover:text-white hover:shadow-glow transform hover:scale-105 overflow-hidden">
            <span className="relative z-10">View All Cakes</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5C77] to-[#FF3B5D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div> */}
      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }

        @keyframes cardEntrance {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-card-entrance { animation: cardEntrance 0.6s ease-out forwards; }

        @keyframes categorySlide {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-category-slide { animation: categorySlide 0.5s ease-out forwards; }

        .hover\\:shadow-glow:hover {
          box-shadow: 0 0 20px rgba(255, 92, 119, 0.4);
        }

        .hover\\:shadow-magical:hover {
          box-shadow: 0 20px 40px -10px rgba(255, 92, 119, 0.2);
        }

        .group\\/button .group-hover\\/button\\:animate-bounce {
          animation: bounce 0.5s ease-in-out;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .animate-heart-beat {
          animation: heartBeat 0.6s ease-in-out;
        }
        @keyframes heartBeat {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}