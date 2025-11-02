"use client";

import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext"; // Import the hook

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Use cart context instead of local state
  const { openCart, cartCount } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // ✅ Handle scroll for header hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "/catalog" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ease-in-out ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } ${isScrolled ? "bg-white shadow-md" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-semibold tracking-tight text-gray-800">
                Magic Cakes
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right side: Cart + Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* 🛒 Cart Icon */}
              <button
                onClick={() => openCart()} // Use context function
                className="relative p-2 text-gray-700 hover:text-black transition-colors duration-200"
              >
                <FaShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* ☰ Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 focus:outline-none text-gray-700 hover:text-gray-900 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="flex flex-col bg-white shadow-md rounded-lg px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}