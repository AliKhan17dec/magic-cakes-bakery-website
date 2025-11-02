"use client";

import { useState } from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import CartSidebar from "./AddToCartDialog";

const categories = ["Cakes", "Cupcakes", "Cookies", "Cheesecakes", "Tiramisu"];

const products = [
  { id: 1, name: "Double Chocolate Cake", price: "148 $", image: "/home/Best-Moist-Chocolate-Cake1-1.png", category: "Cakes" },
  { id: 2, name: "Classic Vanilla Cake", price: "139 $", image: "/home/Fresh-Strawberry-Cake-1.png", category: "Cakes" },
  { id: 3, name: "Strawberry Shortake", price: "159 $", image: "/home/Birthday_Chocolate_Dripping_cake.png", category: "Cakes" },
  { id: 4, name: "Pink Strawberry Cupcake", price: "45 $", image: "/home/cupcake1.png", category: "Cakes" },
  { id: 5, name: "Salted Caramel Cake", price: "40 $", image: "/home/cupcake2.png", category: "Cakes" },
  { id: 6, name: "heart shaped vintage cake", price: "25 $", image: "/home/cookie1.png", category: "Cakes" },
  { id: 7, name: "White Lambeth cake", price: "20 $", image: "/home/cookie2.png", category: "Cakes" },
  { id: 8, name: "Oreo cheesecake", price: "99 $", image: "/home/cheesecake1.png", category: "Cheesecakes" },
  { id: 9, name: "Biscoff cheesecake", price: "109 $", image: "/home/cheesecake2.png", category: "Cheesecakes" },
  { id: 10, name: "Banana Cupcake", price: "89 $", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 11, name: "Blueberry Cupcake", price: "89 $", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 12, name: "Chocolate & Vanilla Swirl Cupcake", price: "89 $", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 13, name: "Cookies & Cream Cupcake", price: "89 $", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 14, name: "Hazelnut Cupcake", price: "89 $", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 15, name: "Lemon Cupcake", price: "89 $", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 16, name: "Pistachio Cupcake", price: "89 $", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 17, name: "Raspbery Cupcake", price: "89 $", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 18, name: "Salted Caramel Cupcake", price: "89 $", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 19, name: "Strawberry Cupcake", price: "89 $", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 20, name: "Vanilla Cupcake", price: "89 $", image: "/home/tiramisu1.png", category: "Cupcakes" },
  { id: 21, name: "Cookies", price: "89 $", image: "/home/tiramisu1.png", category: "Cookies" },
  { id: 22, name: "Tiramisu", price: "89 $", image: "/home/tiramisu1.png", category: "Tiramisu" },
];

export default function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState("Cakes");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 md:gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-magical transition-all duration-500 transform hover:-translate-y-2 cursor-pointer animate-card-entrance flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-gradient-to-br from-[#FFE6EA] to-[#FFE6EA]/70 overflow-hidden p-4 sm:p-6 md:p-8 flex-shrink-0">
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
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#FF5C77] mt-auto">
                    {product.price}
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

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <button className="group relative px-12 py-4 bg-transparent border-2 border-[#FF5C77] text-[#FF5C77] rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#FF5C77] hover:text-white hover:shadow-glow transform hover:scale-105 overflow-hidden">
            <span className="relative z-10">View All Cakes</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5C77] to-[#FF3B5D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        productToAdd={selectedProduct}
      />
    </div>
  );
}