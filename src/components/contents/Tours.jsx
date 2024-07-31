import React from 'react';

const Tours = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <center>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore the World!</h2>
          <p className="text-xl font-semibold text-gray-700 mb-4">
            <strong>Tour plan shall be notified one month prior to conference dates.</strong>
          </p>
          <p className="text-lg text-gray-600 mb-4">
            <i>We invite you to explore the beauty and diversity of our world.</i>
          </p>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800 mb-4">
              <strong>Click below to explore various locations on Google Maps:</strong>
            </p>
            <a 
              href="https://www.google.com/maps" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Go and Explore the World
            </a>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Tours;
