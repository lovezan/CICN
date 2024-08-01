// src/components/Header.jsx
import React from 'react';
import logo from '../assets/logo.png'; // Adjust path if necessary

const Header = () => {
  return (
    <header className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4">
          <img src={logo} alt="CICN 2024 Logo" className="h-12 w-auto sm:h-16" />
          <div className="text-white mt-2 sm:mt-0">
            <div className="text-xs sm:text-sm md:text-lg font-bold">
             16th IEEE International Conference on Computational Intelligence and Communication Networks
            </div>
            <div className="text-xs sm:text-xs md:text-sm">
              22–23 December 2024 // Indore, India // Oriental University
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
