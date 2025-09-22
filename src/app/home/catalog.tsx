"use client"

import { useState } from "react"
import Image from "next/image"
import { FaShoppingCart, FaHeart } from "react-icons/fa"

const categories = ["Popular cakes", "Celebration cakes", "Baby cakes", "Wedding cakes", "Special cakes"]

const cakes = [
  {
    id: 1,
    name: "Chocolate cake",
    price: "148 $",
    image: "/home/Rainbow-Cake-High-Altitude-Sprinkles-Lucky-Charms-St-Patricks-Day-007-removebg-preview 1.png",
    category: "Popular cakes",
  },
  {
    id: 2,
    name: "Apple cake",
    price: "129 $",
    image: "/home/Best-Moist-Chocolate-Cake1-1-removebg-preview 1.png",
    category: "Popular cakes",
  },
  {
    id: 3,
    name: "Decorated cake",
    price: "119 $",
    image: "/home/Fresh-Strawberry-Cake-removebg-preview 1 1.png",
    category: "Popular cakes",
  },
  {
    id: 4,
    name: "Anna Pavlova",
    price: "159 $",
    image: "/home/Birthday_Chocolate_Dripping_cake-removebg-preview 1.png",
    category: "Popular cakes",
  },
  {
    id: 5,
    name: "Carrot cake",
    price: "129 $",
    image: "/home/images-removebg-preview 1.png",
    category: "Popular cakes",
  },
  {
    id: 6,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/duel-delight-chocolate_-cake-removebg-preview 1.png",
    category: "Popular cakes",
  },
  {
    id: 7,
    name: "Chocolate cake",
    price: "148 $",
    image: "/home/Best-Moist-Chocolate-Cake1-1-removebg-preview 1.png",
    category: "Celebration cakes",
  },
  {
    id: 8,
    name: "Apple cake",
    price: "129 $",
    image: "/home/Rainbow-Cake-High-Altitude-Sprinkles-Lucky-Charms-St-Patricks-Day-007-removebg-preview 1.png",
    category: "Celebration cakes",
  },
  {
    id: 9,
    name: "Decorated cake",
    price: "119 $",
    image: "/home/Fresh-Strawberry-Cake-removebg-preview 1 1.png",
    category: "Celebration cakes",
  },
  {
    id: 10,
    name: "Anna Pavlova",
    price: "159 $",
    image: "/home/duel-delight-chocolate_-cake-removebg-preview 1.png",
    category: "Celebration cakes",
  },
  {
    id: 11,
    name: "Carrot cake",
    price: "129 $",
    image: "/home/images-removebg-preview 1.png",
    category: "Celebration cakes",
  },
  {
    id: 12,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/Birthday_Chocolate_Dripping_cake-removebg-preview 1.png",
    category: "Celebration cakes",
  },
  {
    id: 13,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/Rainbow-Cake-High-Altitude-Sprinkles-Lucky-Charms-St-Patricks-Day-007-removebg-preview 1.png",
    category: "Baby cakes",
  },
  {
    id: 14,
    name: "Chocolate cake",
    price: "148 $",
    image: "/home/Best-Moist-Chocolate-Cake1-1-removebg-preview 1.png",
    category: "Baby cakes",
  },
  {
    id: 15,
    name: "Apple cake",
    price: "129 $",
    image: "/home/images-removebg-preview 1.png",
    category: "Baby cakes",
  },
  {
    id: 16,
    name: "Decorated cake",
    price: "119 $",
    image: "/home/Birthday_Chocolate_Dripping_cake-removebg-preview 1.png",
    category: "Baby cakes",
  },
  {
    id: 17,
    name: "Anna Pavlova",
    price: "159 $",
    image: "/home/Fresh-Strawberry-Cake-removebg-preview 1 1.png",
    category: "Baby cakes",
  },
  {
    id: 18,
    name: "Carrot cake",
    price: "129 $",
    image: "/home/duel-delight-chocolate_-cake-removebg-preview 1.png",
    category: "Baby cakes",
  },
  {
    id: 19,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/Fresh-Strawberry-Cake-removebg-preview 1 1.png",
    category: "Wedding cakes",
  },
  {
    id: 20,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/Rainbow-Cake-High-Altitude-Sprinkles-Lucky-Charms-St-Patricks-Day-007-removebg-preview 1.png",
    category: "Wedding cakes",
  },
  {
    id: 21,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/Best-Moist-Chocolate-Cake1-1-removebg-preview 1.png",
    category: "Wedding cakes",
  },
  {
    id: 22,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/duel-delight-chocolate_-cake-removebg-preview 1.png",
    category: "Wedding cakes",
  },
  {
    id: 23,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/images-removebg-preview 1.png",
    category: "Wedding cakes",
  },
  {
    id: 24,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/Birthday_Chocolate_Dripping_cake-removebg-preview 1.png",
    category: "Wedding cakes",
  },
  {
    id: 25,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/duel-delight-chocolate_-cake-removebg-preview 1.png",
    category: "Special cakes",
  },
  {
    id: 26,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/Best-Moist-Chocolate-Cake1-1-removebg-preview 1.png",
    category: "Special cakes",
  },
  {
    id: 27,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/Fresh-Strawberry-Cake-removebg-preview 1 1.png",
    category: "Special cakes",
  },
  {
    id: 28,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/images-removebg-preview 1.png",
    category: "Special cakes",
  },
  {
    id: 29,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/Birthday_Chocolate_Dripping_cake-removebg-preview 1.png",
    category: "Special cakes",
  },
  {
    id: 30,
    name: "Birthday cake",
    price: "139 $",
    image: "/home/Rainbow-Cake-High-Altitude-Sprinkles-Lucky-Charms-St-Patricks-Day-007-removebg-preview 1.png",
    category: "Special cakes",
  },
]

export default function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState("Popular cakes")
  const [favorites, setFavorites] = useState<number[]>([])
  const [cartItems, setCartItems] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Filter cakes based on active category
  const filteredCakes = cakes.filter((cake) => cake.category === activeCategory)

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return
    setIsLoading(true)
    setTimeout(() => {
      setActiveCategory(category)
      setIsLoading(false)
    }, 300)
  }

  const toggleFavorite = (cakeId: number) => {
    setFavorites((prev) => (prev.includes(cakeId) ? prev.filter((id) => id !== cakeId) : [...prev, cakeId]))
  }

  const addToCart = (cakeId: number) => {
    setCartItems((prev) => [...prev, cakeId])
    // Add bounce animation to cart icon (would need cart icon in header)
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-5 text-balance leading-tight font-playfair">
            <span className="text-black">Our</span> <span className="bg-gradient-to-r from-[#FF5C77] to-[#ff7a8f] bg-clip-text text-transparent animate-pulse">Catalog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handcrafted cakes made with love, care, passion, creativity, and the finest ingredients.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <nav className="bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg border border-gray-100">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm lg:text-base whitespace-nowrap animate-category-slide ${activeCategory === category
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
                <div className="relative aspect-square bg-gradient-to-br from-[#FFE6EA] to-[#FFE6EA]/70 overflow-hidden p-4 sm:p-6 md:p-8">
                  <Image
                    src={cake.image || "/placeholder.svg?height=300&width=300&query=delicious cake"}
                    alt={cake.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-gray-800 text-sm sm:text-lg mb-1 group-hover:text-[#FF5C77] transition-colors duration-300">
                        {cake.name}
                      </h3>
                      <p className="text-lg sm:text-2xl font-bold text-[#FF5C77]">{cake.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      addToCart(cake.id)
                    }}
                    className="w-full flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 
             bg-gradient-to-r from-[#FF5C77] to-[#FF3B5D] 
             hover:from-[#FF3B5D] hover:to-[#FF5C77] 
             text-white font-medium text-xs sm:text-sm md:text-base 
             py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 
             rounded-lg sm:rounded-xl 
             transition-all duration-300 transform hover:scale-105 hover:shadow-glow group/button"
                  >
                    <FaShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover/button:animate-bounce" />
                    <span className="">Add to Cart</span>
                  </button>

                </div>
              </div>
            ))}
          </div>
          

        </div>

        <div className="flex justify-center mt-16">
          <button className="group relative px-12 py-4 bg-transparent border-2 border-[#FF5C77] text-[#FF5C77] rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#FF5C77] hover:text-white hover:shadow-glow transform hover:scale-105 overflow-hidden">
            <span className="relative z-10">View All Cakes</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5C77] to-[#FF3B5D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </div>
  )
}
