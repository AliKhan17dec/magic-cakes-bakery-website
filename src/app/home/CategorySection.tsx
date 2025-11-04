"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const categories = [
  { name: "CAKES", image: "/home/STRAWBERRY_SHORTCAKE_3.webp", slug: "cakes" },
  { name: "CUPCAKES", image: "/home/MINI_CUPCAKES_2.webp", slug: "cupcakes" },
  { name: "COOKIES", image: "/home/Small-Batch-Chocolate-Chip-Cookies-Recipe-3.10.webp", slug: "cookies" },
  { name: "CHEESECAKES", image: "/home/AR-155222-philadelphia-classic-cheesecake-4x3-hero-5e8c2187a57a4016b5934058ad7d9b5e.webp", slug: "cheesecakes" },
  { name: "TIRAMISU", image: "/home/THUMB-VIDEO-2_rev1-56.webp", slug: "tiramisu" },
];

export default function SweetCollection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 px-4 text-center bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-5 leading-tight font-playfair">
            <span className="text-black">Our Sweet</span>{" "}
            <span className="bg-gradient-to-r from-[#FF5C77] to-[#ff7a8f] bg-clip-text text-transparent animate-pulse">
              Collection
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every dessert is made fresh, beautifully presented, and guaranteed to impress your guests.
          </p>
        </div>

        {/* ---- Mobile Carousel ---- */}
        <div className="relative block sm:hidden">
          <div className="relative overflow-hidden rounded-lg aspect-square">
            <Image
              src={categories[currentIndex].image}
              alt={categories[currentIndex].name}
              fill
              className="object-cover transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center transition-all duration-500 transform">
                <span className="block text-white font-semibold tracking-widest text-2xl mb-3">
                  {categories[currentIndex].name}
                </span>
                <Link href={`/catalog?category=${categories[currentIndex].slug}`}>
                  <button className="text-white border border-white px-5 py-2 text-sm font-medium hover:bg-white hover:text-black transition">
                    VIEW COLLECTION
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* ---- Desktop Grid ---- */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((item) => (
            <div
              key={item.name}
              className="relative group overflow-hidden rounded-lg shadow-sm cursor-pointer aspect-square"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                <div className="text-center transition-all duration-500 transform group-hover:-translate-y-2">
                  <span className="block text-white font-semibold tracking-widest text-2xl mb-2">
                    {item.name}
                  </span>
                  <Link href={`/catalog?category=${item.slug}`}>
                    <button className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-white border border-white px-5 py-2 text-sm font-medium hover:bg-white hover:text-black">
                      VIEW COLLECTION
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10">
          <Link href="/catalog">
    <button className="group relative px-12 py-4 bg-transparent border-2 border-[#FF5C77] text-[#FF5C77] rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#FF5C77] hover:text-white hover:shadow-glow transform hover:scale-105 overflow-hidden">
      <span className="relative z-10">View All Cakes</span>
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF5C77] to-[#FF3B5D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </button>
  </Link>
        </div>
      </div>
    </section>
  );
}