import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-white">
          MySite
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" onClick={closeMenu} className="hover:text-blue-500 dark:text-white">Home</Link>
          <Link to="/about" onClick={closeMenu} className="hover:text-blue-500 dark:text-white">About</Link>
          <Link to="/services" onClick={closeMenu} className="hover:text-blue-500 dark:text-white">Services</Link>
          <Link to="/contact" onClick={closeMenu} className="hover:text-blue-500 dark:text-white">Contact</Link>
        </div>

        {/* Dark mode toggle */}
        <DarkModeToggle />

        {/* Mobile menu icon */}
        <div className="md:hidden text-xl text-blue-600 dark:text-white" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile menu links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-800">
          <Link to="/" onClick={closeMenu} className="block hover:text-blue-500 dark:text-white">Home</Link>
          <Link to="/about" onClick={closeMenu} className="block hover:text-blue-500 dark:text-white">About</Link>
          <Link to="/services" onClick={closeMenu} className="block hover:text-blue-500 dark:text-white">Services</Link>
          <Link to="/contact" onClick={closeMenu} className="block hover:text-blue-500 dark:text-white">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;