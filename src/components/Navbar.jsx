import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 ${scrolled ? 'bg-black bg-opacity-75' : 'bg-black'} transition-all duration-300`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <img src={logo} alt="CICN 2024 Logo" className="h-16 w-auto" />
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            <b>Home</b>
          </Link>
          <Link to="/Paper_Submission" className="text-white hover:text-gray-300">
            <b>Paper Submission</b>
          </Link>
          <Link to="/Registration" className="text-white hover:text-gray-300">
            <b>Registration</b>
          </Link>
          <Link to="/Committees" className="text-white hover:text-gray-300">
            <b>Committees</b>
          </Link>
          <Link to="/Important_Dates" className="text-white hover:text-gray-300">
            <b>Important Dates</b>
          </Link>
          <Link to="/contact_us" className="text-white hover:text-gray-300">
            <b>Contact Us</b>
          </Link>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-80 bg-gray-900 bg-opacity-75 p-8 flex flex-col items-center space-y-6 relative rounded-lg">
              <button
                className="absolute top-4 right-4 text-white"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Link to="/" className="text-white hover:text-gray-300" onClick={toggleMenu}>
                <b>Home</b>
              </Link>
              <Link to="/Paper_Submission" className="text-white hover:text-gray-300" onClick={toggleMenu}>
                <b>Paper Submission</b>
              </Link>
              <Link to="/Registration" className="text-white hover:text-gray-300" onClick={toggleMenu}>
                <b>Registration</b>
              </Link>
              <Link to="/Committees" className="text-white hover:text-gray-300" onClick={toggleMenu}>
                <b>Committees</b>
              </Link>
              <Link to="/Important_Dates" className="text-white hover:text-gray-300" onClick={toggleMenu}>
                <b>Important Dates</b>
              </Link>
              <Link to="/contact_us" className="text-white hover:text-gray-300" onClick={toggleMenu}>
                <b>Contact Us</b>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
