"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  category: string
}

interface CustomCSSProperties extends React.CSSProperties {
  [key: `--${string}`]: string | number | undefined;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Chocolate Birthday Cake",
      price: 45.99,
      image: "/home/Fresh-Strawberry-Cake-removebg-preview 1 1.png",
      quantity: 1,
      category: "Birthday Cakes",
    },
    {
      id: "2",
      name: "Strawberry Cupcakes (6 pack)",
      price: 24.99,
      image: "/home/Rainbow-Cake-High-Altitude-Sprinkles-Lucky-Charms-St-Patricks-Day-007-removebg-preview 1.png",
      quantity: 2,
      category: "Cupcakes",
    },
    {
      id: "3",
      name: "Wedding Cake - 3 Tier",
      price: 299.99,
      image: "/home/Birthday_Chocolate_Dripping_cake-removebg-preview 1.png",
      quantity: 1,
      category: "Wedding Cakes",
    },
  ])

  const [showCheckout, setShowCheckout] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const checkoutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  const tailwindRingStyle: CustomCSSProperties = {
    "--tw-ring-color": "#FF5C77",
    "--tw-ring-opacity": "0.2",
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden pt-20">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full opacity-5 hidden sm:block"
          style={{
            background: `radial-gradient(circle, #FF5C77 0%, transparent 70%)`,
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        />
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full animate-float hidden sm:block"
          style={{ backgroundColor: "#FFE6EA" }}
        />
        <div
          className="absolute top-40 right-20 w-24 h-24 rounded-full animate-float hidden sm:block"
          style={{ backgroundColor: "#FF5C77", opacity: 0.1, animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full animate-float hidden sm:block"
          style={{ backgroundColor: "#FFE6EA", opacity: 0.7, animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-5 text-balance leading-tight font-playfair">
            <span className="text-black">Your</span> <span className="bg-gradient-to-r from-[#FF5C77] to-[#ff7a8f] bg-clip-text text-transparent animate-pulse">Cart</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your cart is waiting — sweet handcrafted cakes are almost yours
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-12 sm:space-y-0 sm:grid sm:grid-cols-1 lg:grid-cols-3 lg:gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-16">
                  <div
                    className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#FFE6EA" }}
                  >
                    <span className="text-4xl">🛒</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-black">Your cart is empty</h3>
                  <p className="text-gray-600">Add some delicious treats to get started!</p>
                </div>
              ) : (
                cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 hover:border-[#FF5C77]/30 transition-all duration-500 hover:shadow-magical animate-card-entrance relative"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Cancel button in top-right corner (visible on all sizes) */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-red-100 hover:bg-red-500 hover:text-white text-red-500 transition-all duration-300 flex items-center justify-center group/btn z-10"
                    >
                      <svg
                        className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                    {/* Responsive layout: centered on sm, side-by-side on md+ */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
                      {/* Product Image */}
                      <div className="relative mx-auto sm:mx-0">
                        <div
                          className="w-32 h-32 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300 mx-auto sm:mx-0"
                          style={{ backgroundColor: "#FFE6EA" }}
                        >
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div
                          className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold animate-bounce-in"
                          style={{ backgroundColor: "#FF5C77" }}
                        >
                          {item.quantity}
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 w-full">
                        {/* On mobile: center everything. On md+: keep left-aligned */}
                        <div className="sm:text-left text-center">
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#FF5C77] transition-colors duration-300 mb-2">
                            {item.name}
                          </h3>
                          <p
                            className="text-sm text-gray-600 px-3 py-1 rounded-full inline-block mb-4 mx-auto sm:mx-0"
                            style={{ backgroundColor: "#FFE6EA" }}
                          >
                            {item.category}
                          </p>

                          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-3 justify-center sm:justify-start">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-10 h-10 rounded-full hover:text-white transition-all duration-300 flex items-center justify-center font-bold text-black" 
                                style={{ backgroundColor: "#FFE6EA" }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FF5C77")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFE6EA")}
                              >
                                −
                              </button>
                              <span className="w-12 text-center font-semibold text-lg text-black">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-10 h-10 rounded-full hover:text-white transition-all duration-300 flex items-center justify-center font-bold text-black"
                                style={{ backgroundColor: "#FFE6EA" }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FF5C77")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFE6EA")}
                              >
                                +
                              </button>
                            </div>

                            {/* Price */}
                            <div className="text-right sm:text-left">
                              <p className="text-2xl font-bold" style={{ color: "#FF5C77" }}>
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                              <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sm:sticky sm:top-8">
                <div
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 animate-slide-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <h2 className="text-2xl font-bold mb-6 text-center">
                    <span className="bg-gradient-to-r from-[#FF5C77] to-[#FF5C77] bg-clip-text text-transparent">
                      Order Summary
                    </span>
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-lg text-black">
                      <span>Subtotal</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg text-black">
                      <span>Tax</span>
                      <span className="font-semibold">${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 text-black">
                      <div className="flex justify-between text-2xl font-bold">
                        <span>Total</span>
                        <span style={{ color: "#FF5C77" }}>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                                    <button
                    onClick={() => {
                      if (!showCheckout) {
                        setShowCheckout(true);
                        setTimeout(() => {
                          checkoutRef.current?.scrollIntoView({ behavior: "smooth" });
                        }, 300);
                      } else {
                        setShowCheckout(false);
                      }
                    }}
                    disabled={cartItems.length === 0}
                    className="w-full text-white font-bold py-4 px-8 rounded-2xl hover:shadow-glow transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group"
                    style={{ background: "linear-gradient(to right, #FF5C77, #FF5C77)" }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {showCheckout ? "Hide Checkout" : "Proceed to Checkout"}
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          {showCheckout && (
            <div ref={checkoutRef} className="max-w-4xl mx-auto mt-16 animate-slide-in-up">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  <span className="bg-gradient-to-r from-[#FF5C77] to-[#FF5C77] bg-clip-text text-transparent">
                    Checkout Information
                  </span>
                </h2>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4 text-black">Personal Information</h3>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Full Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:border-[#FF5C77] focus:ring-2 transition-all duration-300 text-gray-800"
                          style={tailwindRingStyle}
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:border-[#FF5C77] focus:ring-2 transition-all duration-300 text-gray-800"
                          style={tailwindRingStyle}
                          placeholder="Enter your email"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Phone</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:border-[#FF5C77] focus:ring-2 transition-all duration-300 text-gray-800"
                          style={tailwindRingStyle}
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Delivery Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4 text-black">Delivery Information</h3>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Address</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:border-[#FF5C77] focus:ring-2 transition-all duration-300 text-gray-700"
                          style={tailwindRingStyle}
                          placeholder="Enter your address"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">City</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:border-[#FF5C77] focus:ring-2 transition-all duration-300 text-gray-800"
                            style={tailwindRingStyle}
                            placeholder="City"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">ZIP Code</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:border-[#FF5C77] focus:ring-2 transition-all duration-300 text-gray-800"
                            style={tailwindRingStyle}
                            placeholder="ZIP"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Delivery Date</label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:border-[#FF5C77] focus:ring-2 transition-all duration-300 text-gray-800"
                          style={tailwindRingStyle}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div className="col-span-1 sm:col-span-2 space-y-6">
                    <h3 className="text-xl font-semibold mb-4 text-black">Payment Information</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Card Number</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:border-[#FF5C77] focus:ring-2 transition-all duration-300 text-gray-800"
                          style={tailwindRingStyle}
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">Expiry</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:border-[#FF5C77] focus:ring-2 transition-all duration-300 text-gray-800"
                            style={tailwindRingStyle}
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">CVV</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:border-[#FF5C77] focus:ring-2 transition-all duration-300 text-gray-800"
                            style={tailwindRingStyle}
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-span-1 sm:col-span-2 pt-6">
                    <button
                      type="submit"
                      className="w-full text-white font-bold py-4 px-8 rounded-2xl hover:shadow-glow transition-all duration-300 transform hover:scale-105 group"
                      style={{ background: "linear-gradient(to right, #FF5C77, #FF5C77)" }}
                    >
                      <span className="flex items-center justify-center gap-2">
                        Complete Order - ${total.toFixed(2)}
                        <svg
                          className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}