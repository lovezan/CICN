import React from 'react';

// Importing images
import Ieee from '../../assets/IEEE.jpeg';
import ou from '../../assets/ou_logo.jpg';
import mir from '../../assets/mir.png';
import iete2 from '../../assets/IETE.png';

const sections = [
  {
    title: 'Organized and Hosted at',
    description: 'Oriental University, Indore (MP) IEEE Madhya Pradesh Section',
    images: [
      { src: ou, alt: 'Oriental University Indore' },
      { src: Ieee, alt: 'Technical Sponsor' },
    ],
  },
  {
    title: 'Technically Co-Sponsored',
    description: 'MIR Labs and IETE Gwalior',
    images: [
      { src: mir, alt: 'Mir labs' },
      { src: iete2, alt: 'IETE Gwalior' },
    ],
  },
  // Add more sections as needed
];

const Sponsors = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-gradient-to-r from-teal-100 to-teal-300 p-8 rounded-lg shadow-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-10 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700 text-center leading-relaxed">
          Sponsors and Organizers
        </h1>

        {sections.map((section, index) => (
          <section key={index} className="my-8 sm:my-10 md:my-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4 sm:mb-6 md:mb-8 border-b-4 border-teal-500 pb-2 leading-relaxed">
              {section.title}
            </h2>
            <div className="text-lg sm:text-xl md:text-2xl text-teal-700 mb-4 sm:mb-6 leading-relaxed">
              <strong>{section.description}</strong>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.images.map((image, idx) => (
                <div key={idx} className="flex justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-contain rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
