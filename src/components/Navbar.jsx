
import React, { useState, useRef, useEffect } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import "./Navbar.css";

const Navbar = ({ handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Smooth scroll to the section based on the item clicked
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  // Close menu and scroll to the target section
  const handleItemClick = (item) => {
    if (handleClick) {
      handleClick(item);
    }
    setIsOpen(false); // Close the menu
    scrollToSection(item); // Scroll to the target section
  };

  // Close dropdown if click is outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-blue-800 text-white sticky top-0 z-50">
      <div className="grid justify-items-center items-center border-b border-gray-600">
        {/* Menu Button */}
        <button onClick={toggleMenu} className="text-xl w-full md:hidden flex justify-center items-center">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menu Items */}
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <a
            onClick={() => handleItemClick('Home')}
            className="block px-3 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs"
            style={{ textDecoration: 'none' }}
          >
            HOME
          </a>

          {/* Registration Dropdown */}
          <a
            onClick={() => handleItemClick('Registration')}
            className="block px-3 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs"
            style={{ textDecoration: 'none' }}
          >
            REGISTRATION
          </a>

          {/* Author Exchange & Past Conferences Dropdown */}
          <div
            className="relative group"
            onClick={() => setShowDropdown(showDropdown === 'authorPast' ? null : 'authorPast')}
          >
            <a
              className="flex items-center gap-1 px-3 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs"
              style={{ textDecoration: 'none' }}
            >
              PAPER SUBMISSION
              <FiChevronDown
                className={`transition-transform ${showDropdown === 'authorPast' ? 'rotate-180' : ''}`}
              />
            </a>
            <AnimatePresence>
              {showDropdown === 'authorPast' && (
                <motion.div
                  ref={dropdownRef}
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
                    onClick={() => handleItemClick('Proceedings')}
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs"
                    style={{ textDecoration: 'none' }}
                  >
                    PROCEEDINGS
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
            onClick={() => handleItemClick('ImportantDates Scheduling')}
            className="block px-3 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs"
            style={{ textDecoration: 'none' }}
          >
            IMPORTANTDATES/SCHEDULING
          </a>

          {/* Committees */}
          <a
            onClick={() => handleItemClick('Committees')}
            className="block px-3 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs"
            style={{ textDecoration: 'none' }}
          >
            COMMITTEES
          </a>

          {/* Keynote Speakers & Sponsors Dropdown */}
          <div
            className="relative group"
            onClick={() => setShowDropdown(showDropdown === 'keynoteSponsors' ? null : 'keynoteSponsors')}
          >
            <a
              className="flex items-center gap-1 px-3 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs"
              style={{ textDecoration: 'none' }}
            >
              VENUE / ACCOMMODATION
              <FiChevronDown
                className={`transition-transform ${showDropdown === 'keynoteSponsors' ? 'rotate-180' : ''}`}
              />
            </a>
            <AnimatePresence>
              {showDropdown === 'keynoteSponsors' && (
                <motion.div
                  ref={dropdownRef}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 top-full mt-1 w-48 rounded-md bg-blue-700 text-white shadow-lg z-50 border border-white"
                >
                  <a
                    onClick={() => handleItemClick('Venue/Accommodation')}
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs"
                    style={{ textDecoration: 'none' }}
                  >
                    Venue/Accommodation
                  </a>
                  <a
                    onClick={() => handleItemClick('Sponsors')}
                    className="block px-4 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs"
                    style={{ textDecoration: 'none' }}
                  >
                    Sponsors
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Us */}
          <a
            onClick={() => handleItemClick('Contact Us')}
            className="block px-3 py-2 cursor-pointer hover:bg-sky-400 text-white text-xs"
            style={{ textDecoration: 'none' }}
          >
            CONTACT US
          </a>
        </div>
      </div>

      {/* Hover effect for larger screens */}
      <style>{`
        @media (min-width: 768px) {
          .group:hover .absolute {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
