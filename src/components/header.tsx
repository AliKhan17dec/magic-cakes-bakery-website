"use client"

import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-semibold text-gray-800">Cake Shop</h1>
          </div>

          {/* Desktop Navigation — hidden on mobile */}
          <nav className="hidden md:flex space-x-8 text-lg">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              Catalog
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              How to order
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              Delivery
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              Contacts
            </a>
          </nav>

          {/* Right-side group: Cart + Hamburger (on mobile) */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon — visible on all screens */}
            <button className="p-2 text-gray-700 hover:text-gray-900">
              <FaShoppingCart className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button — only on mobile */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
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

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4 px-4 animate-fadeIn">
            <nav className="flex flex-col space-y-4 text-lg">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
                onClick={toggleMenu}
              >
                Catalog
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
                onClick={toggleMenu}
              >
                How to order
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
                onClick={toggleMenu}
              >
                Delivery
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
                onClick={toggleMenu}
              >
                Contacts
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}