// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using react-router-dom
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for menu and close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Menu Button */}
        <button onClick={toggleMenu} className="text-3xl md:hidden">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        {/* Menu Items */}
        <div className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="block px-4 py-2 hover:bg-gray-700">Home</Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-700">About</Link>
          <Link to="/services" className="block px-4 py-2 hover:bg-gray-700">Services</Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-gray-700">Contact</Link>
          <Link to="/author-exchange" className="block px-4 py-2 hover:bg-gray-700">Author Exchange</Link>
          <Link to="/call-for-papers" className="block px-4 py-2 hover:bg-gray-700">Call for Papers</Link>
          <Link to="/sponsors" className="block px-4 py-2 hover:bg-gray-700">Sponsors</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
