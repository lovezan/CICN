import React from 'react';
import ou2 from '../../assets/ou2.jpeg'; // Adjust path based on your folder structure
import pmu from '../../assets/prnce_muhammad_fahd.png'; // Adjust path based on your folder structure
import technicalSponsorImage from '../../assets/mir.png'; // Replace with your image path

import Sponsors1 from '../../components/Sponsors';

const Sponsors = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-teal-100 to-teal-300 p-8 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700 text-center">
          Sponsors and Organizers
        </h1>

        <section className="my-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 border-b-4 border-teal-500 pb-2">
            Organizers
          </h2>
          <div className="flex flex-col md:flex-row items-center md:justify-between mb-8">
            <div className="text-lg text-teal-700 mb-4 md:mb-0">
              <strong className="text-2xl">Oriental University Indore and IEEE Madhya Pradesh Section</strong>
            </div>
            <img 
              src={ou2} 
              alt="Oriental University Indore" 
              className="w-full md:w-64 h-auto object-contain rounded-lg shadow-md"
            />
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 border-b-4 border-teal-500 pb-2">
            Technical Sponsor
          </h2>
          <div className="text-lg text-teal-700 mb-4">
            <strong className="text-2xl">MIR Labs and IETE Gwalior</strong>
          </div>
          <div className="flex justify-center">
            <img 
              src={technicalSponsorImage} 
              alt="Technical Sponsor" 
              className="w-56 h-auto object-contain rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Uncomment if needed */}
        {/* <section className="my-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 border-b-4 border-teal-500 pb-2">
            Best Paper Awards Sponsored By
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-lg text-teal-700 mb-4 md:mb-0">
              <strong className="text-2xl">SERSC, South Korea</strong>
            </div>
            <img 
              src={sersc} 
              alt="SERSC" 
              className="ml-0 md:ml-4 w-full md:w-60 h-auto object-contain rounded-lg shadow-md" 
            />
          </div>
        </section> */}
        
        <Sponsors1/>
      </div>
    </div>
  );
};

export default Sponsors;
