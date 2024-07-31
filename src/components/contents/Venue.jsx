import React from 'react';
import sanchi from '../../assets/sanchi_1.jpeg';
import mp1 from '../../assets/mp1.jpg';
import oa1 from '../../assets/oa1.jpg';
import iete from '../../assets/IETE.png';

const Venue = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <center>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Conference Venue</h1>
        </center>
        <p className="text-lg font-semibold text-gray-800 mb-4">
          <strong>Oriental University Indore</strong>
        </p>
        <p className="text-gray-700 mb-4">
          <strong>For any accommodation query:</strong>
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <img src={sanchi} alt="Sanchi" className="w-64 h-auto object-cover rounded-md shadow-md" />
          <img src={mp1} alt="MP1" className="w-64 h-auto object-cover rounded-md shadow-md" />
          <img src={oa1} alt="OU1" className="w-80 h-auto object-cover rounded-md shadow-md" />
          <img src={iete} alt="IETE1" className="w-40 h-auto object-cover rounded-md shadow-md" />
        </div>

        <p className="text-gray-600 text-center italic">
          <strong>We look forward to welcoming you to a wonderful conference experience!</strong>
        </p>
      </div>
    </div>
  );
};

export default Venue;
