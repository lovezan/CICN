import React, { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Debugging function
  const handleItemClick = (item) => {
    console.log(`Clicked on ${item}`);
    if (handleClick) {
      handleClick(item);
    }
  };

  return (
    <nav className="bg-blue-800 text-white sticky top-0 z-50">
      <div className="flex justify-between items-center border-b border-gray-600">
        {/* Menu Button */}
        <button onClick={toggleMenu} className="text-xl md:hidden">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menu Items */}
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <a 
            onClick={() => handleItemClick('Home')} 
            className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs"
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
            <a onClick={() => handleItemClick('Registration')}
              className="flex items-center gap-1 px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs"
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
                    onClick={() => handleItemClick('Registration Process')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs" 
                    style={{ textDecoration: 'none' }}
                  >
                    Registration Process
                  </a>
                  <a 
                    onClick={() => handleItemClick('Fee Structure')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs" 
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
              className="flex items-center gap-1 px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs"
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
                    onClick={() => handleItemClick('Call for Papers')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs" 
                    style={{ textDecoration: 'none' }}
                  >
                    Call for Papers
                  </a>
                  <a 
                    onClick={() => handleItemClick('Paper Submission')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs" 
                    style={{ textDecoration: 'none' }}
                  >
                    Paper Submission
                  </a>
                  <a 
                    onClick={() => handleItemClick('Past Conferences')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs" 
                    style={{ textDecoration: 'none' }}
                  >
                    Past Conferences
                  </a>
                  <a 
                    onClick={() => handleItemClick('Venue/Accommodation')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs" 
                    style={{ textDecoration: 'none' }}
                  >
                    Venue/Accommodation
                  </a>
                  <a 
                    onClick={() => handleItemClick('Keynote Speakers')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs" 
                    style={{ textDecoration: 'none' }}
                  >
                    Keynote Speakers
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Proceedings */}
          <a 
            onClick={() => handleItemClick('Proceedings')} 
            className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs"
            style={{ textDecoration: 'none' }}
          >
            PROCEEDINGS
          </a>

          {/* Committees */}
          <div 
            className="relative cursor-pointer hover:bg-sky-400" 
            onMouseEnter={() => setShowDropdown('committees')}
            onMouseLeave={() => setShowDropdown(null)}
          >
            <a 
              onClick={() => handleItemClick('Committees')}
              className="flex items-center gap-1 px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs"
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
                    onClick={() => handleItemClick('Organizing Committee')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs" 
                    style={{ textDecoration: 'none' }}
                  >
                    Organizing Committee
                  </a>
                  <a 
                    onClick={() => handleItemClick('Technical Committee')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs" 
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
              className="flex items-center gap-1 px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs"
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
                    onClick={() => handleItemClick('Sponsors')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs" 
                    style={{ textDecoration: 'none' }}
                  >
                    Sponsors
                  </a>
                  <a 
                    onClick={() => handleItemClick('Tours')} 
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs" 
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
            onClick={() => handleItemClick('Contact Us')} 
            className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs"
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
