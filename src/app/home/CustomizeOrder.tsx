"use client"
import Link from "next/link"

const CustomizeOrderSection = () => {
  return (
    <section className="relative bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight font-playfair">
          <span className="text-black">Customize</span>{" "}
          <span className="bg-gradient-to-r from-[#FF5C77] to-[#ff7a8f] bg-clip-text text-transparent animate-pulse">
            Order
          </span>
        </h2>

        {/* Description Paragraph */}
        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-4xl mx-auto">
          Do you need to customize your order? We love bringing your baking dreams to life! Whether it&apos;s a custom cake
          design, special dietary requirements, or a unique flavor combination, our team is here to create something
          perfectly tailored for you.
        </p>

        {/* CTA Button */}
        <Link href="/contact-us">
          <button className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF5C77] to-[#ff7a8f] text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
            Click Here to Customize
          </button>
        </Link>
      </div>
    </section>
  )
}

export default CustomizeOrderSection
