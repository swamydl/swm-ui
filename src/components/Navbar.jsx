import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-blue-600 dark:text-white">
            <Link to="/">Aptoidex</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">About</Link>
            <Link to="/services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Services</Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Contact</Link>
            <DarkModeToggle />
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <DarkModeToggle />
            <button
              onClick={toggleMenu}
              className="text-2xl ml-4 text-gray-700 dark:text-white focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-2">
          <Link to="/" onClick={toggleMenu} className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">About</Link>
          <Link to="/services" onClick={toggleMenu} className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Services</Link>
          <Link to="/contact" onClick={toggleMenu} className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;