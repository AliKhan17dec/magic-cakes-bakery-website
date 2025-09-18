"use client"

import { useState } from "react"
import Image from "next/image"
import { FaShoppingCart } from "react-icons/fa";

const categories = ["Popular cakes", "Celebration cakes", "Baby cakes", "Wedding cakes", "Special cakes"]

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

export default function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState("Popular cakes")

  // Filter cakes based on active category
  const filteredCakes = cakes.filter(cake => cake.category === activeCategory)

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-15 bg-white">
        {/* Header */}
        <h1 className="text-5xl lg:text-6xl font-bold text-center text-gray-800 mb-12 font-playfair ">Catalog</h1>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <nav className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:flex lg:space-x-8 lg:grid-cols-none mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-md  lg:text-lg font-medium pb-1 border-b-2 transition-colors text-center lg:text-left ${activeCategory === category
                    ? "text-[#FF5C77] border-[#FFB6C1]"
                    : "text-gray-600 border-transparent hover:text-gray-700"
                  }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>

        {/* Cake Grid - 3 equal cards per row on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCakes.map((cake) => (
            <div
              key={cake.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform  cursor-pointer group flex flex-col border-1 border-gray-200 "
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
        {/* See All Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-transparent hover:bg-[#D10000] border-2 border-[#D10000] hover:text-white text-[#D10000] px-10 py-2 rounded-full font-medium transition-colors duration-300 text-md 2xl:text-lg">
                    See all
                  </button>
        </div>
      </div>
      
    </div>
  )
}