// src/components/HeroSection.jsx
import React from 'react';
import heroImage from '../assets/conferance.jpg'; // Adjust the path based on your file structure
import heroLogo from '../assets/hero_logo.png'; // Adjust the path based on your file structure

const HeroSection = () => {
  return (
    <header className="relative w-full h-[100vh] overflow-hidden">
      <img
        src={heroImage}
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 p-4">
        <div className="relative w-[60%] h-[60%] flex justify-center items-center">
          <img
            src={heroLogo}
            alt="Hero Logo"
            className="w-full h-full object-contain" // Adjust this as needed
          />
        </div>
        <button className="bg-red-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 mt-6">
          Learn More
        </button>
      </div>
    </header>
  );
};

export default HeroSection;
