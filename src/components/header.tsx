"use client";

import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // New state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Toggle background: transparent only at top
      setIsScrolled(currentScrollY > 0);

      // Hide/show logic
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
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        isHidden ? "transform -translate-y-full" : "transform translate-y-0"
      } ${
        isScrolled ? "bg-white" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className={`text-xl font-semibold ${isScrolled ? "text-gray-800" : "text-gray-800"}`}>
              Magic Cakes
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8 text-md">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              className={`p-2 ${
                isScrolled ? "text-gray-600 hover:text-black" : "text-gray-600 hover:text-black"
              }`}
            >
              <Link href={"/cart"}>
                <FaShoppingCart className="w-7 h-7" />
              </Link>
            </button>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={`p-2 focus:outline-none ${
                  isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-700 hover:text-gray-900"
                }`}
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
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4 px-4 animate-fadeIn">
            <nav className="flex flex-col space-y-4 text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900 font-medium"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}