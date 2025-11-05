"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import CartSidebar from "./AddToCartDialog";

// Category mapping from URL slugs to display names
const categoryMapping: { [key: string]: string } = {
  cakes: "Cakes",
  cupcakes: "Cupcakes",
  cookies: "Cookies",
  cheesecakes: "Cheesecakes",
  tiramisu: "Tiramisu"
};

const categories = ["Cakes", "Cupcakes", "Cookies", "Cheesecakes", "Tiramisu"];

// Price configuration for each product and option
const priceConfig = {
  // Cakes
  1: { // Double Chocolate Cake
    "6” Petite (1 layer) — serves 4–6": 120,
    "6” Regular (2 layers) — serves 8–10": 200,
    "8” — serves 12–16": 250,
    "10” — serves 20–25": 300
  },
  2: { // Classic Vanilla Cake
    "6” Petite (1 layer) — serves 4–6": 110,
    "6” Regular (2 layers) — serves 8–10": 180,
    "8” — serves 12–16": 230,
    "10” — serves 20–25": 280
  },
  3: { // Strawberry Shortake
    "6” Petite (1 layer) — serves 4–6": 130,
    "6” Regular (2 layers) — serves 8–10": 210,
    "8” — serves 12–16": 260,
    "10” — serves 20–25": 320
  },
  6: { // heart shaped vintage cake
    "6” Petite (1 layer) — serves 4–6": 125,
    "6” Regular (2 layers) — serves 8–10": 195,
    "8” — serves 12–16": 245,
    "10” — serves 20–25": 295
  },
  7: { // White Lambeth cake
    "6” Petite (1 layer) — serves 4–6": 115,
    "6” Regular (2 layers) — serves 8–10": 185,
    "8” — serves 12–16": 235,
    "10” — serves 20–25": 285
  },
  
  // Cupcakes
  4: { // Pink Strawberry Cupcake
    "Box of 6 cupcakes": 45,
    "Box of 12 cupcakes": 85
  },
  5: { // Salted Caramel Cake (Cupcake)
    "Box of 6 cupcakes": 40,
    "Box of 12 cupcakes": 75
  },
  10: { // Banana Cupcake
    "Box of 6 cupcakes": 45,
    "Box of 12 cupcakes": 85
  },
  11: { // Blueberry Cupcake
    "Box of 6 cupcakes": 45,
    "Box of 12 cupcakes": 85
  },
  12: { // Chocolate & Vanilla Swirl Cupcake
    "Box of 6 cupcakes": 45,
    "Box of 12 cupcakes": 85
  },
  13: { // Cookies & Cream Cupcake
    "Box of 6 cupcakes": 45,
    "Box of 12 cupcakes": 85
  },
  14: { // Hazelnut Cupcake
    "Box of 6 cupcakes": 45,
    "Box of 12 cupcakes": 85
  },
  15: { // Lemon Cupcake
    "Box of 6 cupcakes": 45,
    "Box of 12 cupcakes": 85
  },
  16: { // Pistachio Cupcake
    "Box of 6 cupcakes": 45,
    "Box of 12 cupcakes": 85
  },
  17: { // Raspbery Cupcake
    "Box of 6 cupcakes": 45,
    "Box of 12 cupcakes": 85
  },
  18: { // Salted Caramel Cupcake
    "Box of 6 cupcakes": 45,
    "Box of 12 cupcakes": 85
  },
  19: { // Strawberry Cupcake
    "Box of 6 cupcakes": 45,
    "Box of 12 cupcakes": 85
  },
  20: { // Vanilla Cupcake
    "Box of 6 cupcakes": 45,
    "Box of 12 cupcakes": 85
  },
  
  // Cheesecakes
  8: { // Oreo cheesecake
    "4” — Mini Cheesecake": 60,
    "8” — Large Cheesecake": 99
  },
  9: { // Biscoff cheesecake
    "4” — Mini Cheesecake": 65,
    "8” — Large Cheesecake": 109
  },
  
  // Cookies
  21: { // Cookies
    "Box of 6": 25,
    "Box of 12": 45
  },
  
  // Tiramisu
  22: { // Tiramisu
    "5 oz": 15,
    "12 oz": 35
  }
};

const products = [
  { id: 1, name: "Double Chocolate Cake", basePrice: "$120", image: "", category: "Cakes" },
  { id: 2, name: "Classic Vanilla Cake", basePrice: "$110", image: "", category: "Cakes" },
  { id: 3, name: "Strawberry Shortake", basePrice: "$130", image: "/home/Birthday_Chocolate_Dripping_cake.png", category: "Cakes" },
  { id: 4, name: "Pink Strawberry Cupcake", basePrice: "$45", image: "/home/cupcake1.png", category: "Cupcakes" },
  { id: 5, name: "Salted Caramel Cake", basePrice: "$40", image: "/home/cupcake2.png", category: "Cupcakes" },
  { id: 6, name: "heart shaped vintage cake", basePrice: "$125", image: "/home/cookie1.png", category: "Cakes" },
  { id: 7, name: "White Lambeth cake", basePrice: "$115", image: "/home/cookie2.png", category: "Cakes" },
  { id: 8, name: "Oreo cheesecake", basePrice: "$60", image: "/home/cheesecake1.png", category: "Cheesecakes" },
  { id: 9, name: "Biscoff cheesecake", basePrice: "$65", image: "/home/cheesecake2.png", category: "Cheesecakes" },
  { id: 10, name: "Banana Cupcake", basePrice: "$45", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 11, name: "Blueberry Cupcake", basePrice: "$45", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 12, name: "Chocolate & Vanilla Swirl Cupcake", basePrice: "$45", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 13, name: "Cookies & Cream Cupcake", basePrice: "$45", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 14, name: "Hazelnut Cupcake", basePrice: "$45", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 15, name: "Lemon Cupcake", basePrice: "$45", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 16, name: "Pistachio Cupcake", basePrice: "$45", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 17, name: "Raspbery Cupcake", basePrice: "$45", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 18, name: "Salted Caramel Cupcake", basePrice: "$45", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 19, name: "Strawberry Cupcake", basePrice: "$45", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 20, name: "Vanilla Cupcake", basePrice: "$45", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 21, name: "Cookies", basePrice: "$25", image: "/home/tiramisu1.png", category: "Cookies" },
  { id: 22, name: "Tiramisu", basePrice: "$15", image: "/home/tiramisu1.png", category: "Tiramisu" },
];

export default function CatalogSection() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState("Cakes");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Set active category based on URL parameter on component mount
  useEffect(() => {
    if (urlCategory && categoryMapping[urlCategory]) {
      setActiveCategory(categoryMapping[urlCategory]);
    }
  }, [urlCategory]);

  const filteredProducts = products.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const openCartSidebar = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsSidebarOpen(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-5 text-balance leading-tight font-playfair">
            <span className="text-black">Our</span>{" "}
            <span className="bg-gradient-to-r from-[#FF5C77] to-[#ff7a8f] bg-clip-text text-transparent animate-pulse">
              Catalog
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handcrafted cakes made with love, care, passion, creativity, and the finest ingredients.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center mb-16">
          <nav className="bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg border border-gray-100">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm lg:text-base whitespace-nowrap animate-category-slide ${
                    activeCategory === category
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

        {/* Active Category Indicator */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            {activeCategory} Collection
          </h2>
          <p className="text-gray-600 mt-2">
            Showing {filteredProducts.length} products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 md:gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-magical transition-all duration-500 transform hover:-translate-y-2 cursor-pointer animate-card-entrance flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-gradient-to-br from-[#FFE6EA] to-[#FFE6EA]/70 overflow-hidden p-1 sm:p-1 md:p-2 flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Container - This ensures consistent spacing */}
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                {/* Product Info - This section grows to fill available space */}
                <div className="flex-grow mb-4 min-h-[80px] flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm sm:text-base md:text-lg mb-2 group-hover:text-[#FF5C77] transition-colors duration-300 line-clamp-2 leading-tight">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#FF5C77] ">
                    {product.basePrice}
                  </p>
                </div>

                {/* Add to Cart Button - Always at the bottom */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openCartSidebar(product);
                  }}
                  className="w-full flex items-center justify-center gap-2 
                   bg-gradient-to-r from-[#FF5C77] to-[#FF3B5D] 
                   hover:from-[#FF3B5D] hover:to-[#FF5C77] 
                   text-white font-medium text-sm md:text-base 
                   md:py-3 md:px-4 py-2 px-2 
                   rounded-xl 
                   transition-all duration-300 transform hover:scale-105 hover:shadow-glow group/button mt-auto"
                >
                  <FaShoppingCart className="w-4 h-4 md:w-5 md:h-5 group-hover/button:animate-bounce" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-gray-600 mb-4">
              No products found in {activeCategory} category
            </h3>
            <p className="text-gray-500">
              Please select another category or check back later for new arrivals.
            </p>
          </div>
        )}
      </div>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        productToAdd={selectedProduct}
        priceConfig={priceConfig}
      />
    </div>
  );
}