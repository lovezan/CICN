import React, { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'; // Icons for menu and close
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-800 text-white">
      <div className="mx-auto px-4 py-2 flex justify-between items-center border-b border-gray-600">
        {/* Menu Button */}
        <button onClick={toggleMenu} className="text-2xl md:hidden">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        {/* Menu Items */}
        <div className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <a 
            onClick={() => handleClick('Home')} 
            className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-sm"
            style={{ textDecoration: 'none' }}
          >
            HOME
          </a>

          {/* Registration Dropdown */}
          <div 
            className="relative" 
            onMouseEnter={() => setShowDropdown('registration')}
            onMouseLeave={() => setShowDropdown(null)}
          >
            <a 
              className="flex items-center gap-1 px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-sm"
              style={{ textDecoration: 'none' }}
            >
              REGISTRATION
              <FiChevronDown
                className={`transition-transform ${showDropdown === 'registration' ? 'rotate-180' : ''}`}
              />
            </a>
            <AnimatePresence>
              {showDropdown === 'registration' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 top-full mt-1 w-48 rounded-md bg-blue-700 text-white shadow-lg z-50 border border-white"
                >
                  <a 
                    onClick={() => handleClick('Registration Process')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-sm" 
                    style={{ textDecoration: 'none' }}
                  >
                    Registration Process
                  </a>
                  <a 
                    onClick={() => handleClick('Fee Structure')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-sm" 
                    style={{ textDecoration: 'none' }}
                  >
                    Fee Structure
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Author Exchange & Past Conferences Dropdown */}
          <div 
            className="relative" 
            onMouseEnter={() => setShowDropdown('authorPast')}
            onMouseLeave={() => setShowDropdown(null)}
          >
            <a 
              className="flex items-center gap-1 px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-sm"
              style={{ textDecoration: 'none' }}
            >
              AUTHORS
              <FiChevronDown
                className={`transition-transform ${showDropdown === 'authorPast' ? 'rotate-180' : ''}`}
              />
            </a>
            <AnimatePresence>
              {showDropdown === 'authorPast' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 top-full mt-1 w-48 rounded-md bg-blue-700 text-white shadow-lg z-50 border border-white"
                >
                  <a 
                    onClick={() => handleClick('Call for Papers')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-sm" 
                    style={{ textDecoration: 'none' }}
                  >
                    Call for Papers
                  </a>
                  <a 
                    onClick={() => handleClick('Paper Submission')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-sm" 
                    style={{ textDecoration: 'none' }}
                  >
                    Paper Submission
                  </a>
                  <a 
                    onClick={() => handleClick('Past Conferences')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-sm" 
                    style={{ textDecoration: 'none' }}
                  >
                    Past Conferences
                  </a>
                  <a 
                    onClick={() => handleClick('Tours')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-sm" 
                    style={{ textDecoration: 'none' }}
                  >
                    Tours
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Proceedings */}
          <a 
            onClick={() => handleClick('Proceedings')} 
            className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-sm"
            style={{ textDecoration: 'none' }}
          >
            PROCEEDINGS
          </a>

          {/* Committees */}
          <div 
            className="relative" 
            onMouseEnter={() => setShowDropdown('committees')}
            onMouseLeave={() => setShowDropdown(null)}
          >
            <a 
              className="flex items-center gap-1 px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-sm"
              style={{ textDecoration: 'none' }}
            >
              COMMITTEES
              <FiChevronDown
                className={`transition-transform ${showDropdown === 'committees' ? 'rotate-180' : ''}`}
              />
            </a>
            <AnimatePresence>
              {showDropdown === 'committees' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 top-full mt-1 w-48 rounded-md bg-blue-700 text-white shadow-lg z-50 border border-white"
                >
                  <a 
                    onClick={() => handleClick('Organizing Committee')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-sm" 
                    style={{ textDecoration: 'none' }}
                  >
                    Organizing Committee
                  </a>
                  <a 
                    onClick={() => handleClick('Technical Committee')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-sm" 
                    style={{ textDecoration: 'none' }}
                  >
                    Technical Committee
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Keynote Speakers & Sponsors Dropdown */}
          <div 
            className="relative" 
            onMouseEnter={() => setShowDropdown('keynoteSponsors')}
            onMouseLeave={() => setShowDropdown(null)}
          >
            <a 
              className="flex items-center gap-1 px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-sm"
              style={{ textDecoration: 'none' }}
            >
              SPONSORS & TOURS
              <FiChevronDown
                className={`transition-transform ${showDropdown === 'keynoteSponsors' ? 'rotate-180' : ''}`}
              />
            </a>
            <AnimatePresence>
              {showDropdown === 'keynoteSponsors' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 top-full mt-1 w-48 rounded-md bg-blue-700 text-white shadow-lg z-50 border border-white"
                >
                  <a 
                    onClick={() => handleClick('Sponsors')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-sm" 
                    style={{ textDecoration: 'none' }}
                  >
                    Sponsors
                  </a>
                  <a 
                    onClick={() => handleClick('Tours')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-sm" 
                    style={{ textDecoration: 'none' }}
                  >
                    Tours
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Us */}
          <a 
            onClick={() => handleClick('Contact Us')} 
            className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-sm"
            style={{ textDecoration: 'none' }}
          >
            CONTACT US
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
