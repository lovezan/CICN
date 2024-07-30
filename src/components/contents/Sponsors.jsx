import React from 'react';
import ou2 from '../../assets/ou2.jpeg'; // Adjust path based on your folder structure
import pmu from '../../assets/prnce_muhammad_fahd.png'; // Adjust path based on your folder structure
import sersc from '../../assets/sersc.png'; // Adjust path based on your folder structure

const Sponsors = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl">
        <center>
          <h1 className="text-3xl font-bold text-white mb-6">Sponsors and Organizers</h1>
        </center>

        <div className="my-8">
          <h2 className="text-2xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            Organisers
          </h2>
          <div className="flex items-center justify-between mb-6">
            <div className="text-lg text-red-400">
              <strong>Oriental University Indore and IEEE Madhya Pradesh Section</strong>
            </div>
            <img src={ou2} alt="Oriental University Indore" className="w-56 h-auto object-contain" />
          </div>
          <center>
            <p className="text-gray-400 italic">in association with</p>
          </center>
          <div className="flex items-center justify-center mt-4">
            <img src={pmu} alt="PMU" className="w-3/4 h-auto object-contain" />
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            Technical Sponsor
          </h2>
          <div className="text-lg text-red-400 mb-4">
            <strong>MIR Labs and IETE Gwalior</strong>
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            Best Paper Awards Sponsored By
          </h2>
          <div className="flex items-center">
            <div className="text-lg text-red-400 mb-4">
              <strong>SERSC, South Korea</strong>
            </div>
            <img src={sersc} alt="SERSC" className="ml-4 w-60 h-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
