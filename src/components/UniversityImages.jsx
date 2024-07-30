// src/components/UniversityImages.jsx
import React from 'react';

// Import the images from the assets folder
import university1 from '../assets/prnce_muhammad_fahd.png';
import university2 from '../assets/sanchi.png';
import university3 from '../assets/ou2.jpeg';
import university4 from '../assets/prnce_muhammad_fahd.png';
// Add more imports as needed

const UniversityImages = () => {
  const images = [
    { src: university1, alt: 'University 1' },
    { src: university2, alt: 'University 2' },
    { src: university3, alt: 'University 3' },
    { src: university4, alt: 'University 3' },
    // Add more images as needed
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg mt-8">
      <h3 className="text-xl font-semibold mb-4 text-center text-white">Participating Universities</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center p-2 bg-gray-700 rounded-lg">
            <img src={image.src} alt={image.alt} className="object-contain w-full h-40" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityImages;
