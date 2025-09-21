"use client"

import { useState } from "react"
import { ShoppingCart, CreditCard, Package, ArrowRight, Sparkles } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Add To Cart",
    description: "Select your favorite treats and add them to your cart with just one click",
    icon: ShoppingCart,
    color: "from-[#FF5C77] to-[#ff7a8f]",
    bgColor: "bg-[#FFE6EA]",
    borderColor: "border-[#FF5C77]",
    textColor: "text-[#FF5C77]",
    delay: "0ms",
  },
  {
    id: 2,
    title: "Checkout",
    description: "Securely complete your order with our simple and fast checkout process",
    icon: CreditCard,
    color: "from-[#FF5C77] to-[#ff4d6b]",
    bgColor: "bg-[#FFE6EA]",
    borderColor: "border-[#FF5C77]",
    textColor: "text-[#FF5C77]",
    delay: "200ms",
  },
  {
    id: 3,
    title: "Pickup",
    description: "Pick up your fresh and delicious order right on time, hassle-free",
    icon: Package,
    color: "from-[#FF5C77] to-[#e5526a]",
    bgColor: "bg-[#FFE6EA]",
    borderColor: "border-[#FF5C77]",
    textColor: "text-[#FF5C77]",
    delay: "400ms",
  },
]

export default function HowItWorks() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-white via-[#FFE6EA]/30 to-white">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#FFE6EA]/50 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-[#FF5C77]/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#FFE6EA]/30 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFE6EA] rounded-full text-[#FF5C77] font-semibold text-sm mb-8 border border-[#FF5C77]/30 shadow-lg backdrop-blur-sm">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Simple Process
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 text-balance leading-tight">
            How it{" "}
            <span className="bg-gradient-to-r from-[#FF5C77] to-[#ff7a8f] bg-clip-text text-transparent animate-pulse">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty leading-relaxed">
            Get your favorite treats delivered in three simple steps. It's that easy and delicious!
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isHovered = hoveredStep === step.id

            return (
              <div
                key={step.id}
                className={`relative p-8 rounded-3xl border-2 transition-all duration-500 cursor-pointer group animate-slide-in-up backdrop-blur-sm ${
                  isHovered
                    ? `${step.borderColor} shadow-2xl scale-105 ${step.bgColor} border-opacity-100`
                    : `border-gray-200 hover:${step.borderColor} hover:shadow-xl hover:scale-102 bg-white/80 hover:bg-opacity-90`
                }`}
                style={{ animationDelay: step.delay }}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Step Number Badge */}
                <div
                  className={`absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r ${step.color} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-xl border-4 border-white ${isHovered ? "animate-bounce" : ""}`}
                >
                  {step.id}
                </div>

                {/* Icon Container */}
                <div className={`relative mb-8 ${isHovered ? "animate-pulse-glow" : ""}`}>
                  <div
                    className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} p-6 mx-auto transition-all duration-300 shadow-xl ${
                      isHovered ? "scale-110 rotate-6 shadow-2xl" : "group-hover:scale-105 group-hover:rotate-3"
                    }`}
                  >
                    <Icon className="w-full h-full text-white drop-shadow-lg" />
                  </div>

                  {/* Floating particles */}
                  {isHovered && (
                    <>
                      <div className="absolute top-2 right-2 w-3 h-3 bg-amber-400 rounded-full animate-ping shadow-lg" />
                      <div
                        className="absolute bottom-2 left-2 w-2 h-2 bg-emerald-400 rounded-full animate-ping shadow-lg"
                        style={{ animationDelay: "0.5s" }}
                      />
                      <div
                        className="absolute top-1/2 right-0 w-2.5 h-2.5 bg-red-400 rounded-full animate-ping shadow-lg"
                        style={{ animationDelay: "1s" }}
                      />
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3
                    className={`text-2xl font-bold mb-4 transition-colors ${isHovered ? step.textColor : "text-gray-900 group-hover:" + step.textColor}`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-pretty text-lg">{step.description}</p>
                </div>

                {/* Connection Arrow (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div
                      className={`w-10 h-10 bg-white border-4 ${step.borderColor} rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${isHovered ? "scale-110 animate-pulse" : ""}`}
                    >
                      <ArrowRight className={`w-5 h-5 ${step.textColor}`} />
                    </div>
                  </div>
                )}

                {/* Hover Glow Effect */}
                {isHovered && (
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${step.color} opacity-10 animate-pulse`}
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-slide-in-up" style={{ animationDelay: "600ms" }}>
          <button className="group relative px-12 py-5 bg-gradient-to-r from-[#FF5C77] to-[#ff4d6b] text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 transform active:scale-95 border-4 border-white">
            <span className="relative z-10 flex items-center gap-3">
              Get Started Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#e5526a] to-[#d1495e] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <p className="text-gray-500 mt-6 text-lg">Join thousands of happy customers today!</p>
        </div>
      </div>
    </section>
  )
}
