import React from 'react';
import ou2 from '../../assets/ou2.jpeg'; // Adjust path based on your folder structure
import pmu from '../../assets/prnce_muhammad_fahd.png'; // Adjust path based on your folder structure
import sersc from '../../assets/sersc.png'; // Adjust path based on your folder structure

const Sponsors = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Sponsors and Organizers
        </h1>

        <section className="my-8">
          <h2 className="text-2xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
            Organizers
          </h2>
          <div className="flex flex-col md:flex-row items-center md:justify-between mb-6">
            <div className="text-lg text-red-400 mb-4 md:mb-0">
              <strong>Oriental University Indore and IEEE Madhya Pradesh Section</strong>
            </div>
            <img src={ou2} alt="Oriental University Indore" className="w-full md:w-56 h-auto object-contain" />
          </div>
          <p className="text-gray-400 italic text-center mb-6">
            in association with
          </p>
          <div className="flex justify-center">
            <img src={pmu} alt="PMU" className="w-full md:w-3/4 h-auto object-contain" />
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
            Technical Sponsor
          </h2>
          <div className="text-lg text-red-400 mb-4">
            <strong>MIR Labs and IETE Gwalior</strong>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
            Best Paper Awards Sponsored By
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-lg text-red-400 mb-4 md:mb-0">
              <strong>SERSC, South Korea</strong>
            </div>
            <img src={sersc} alt="SERSC" className="ml-0 md:ml-4 w-full md:w-60 h-auto object-contain" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sponsors;
