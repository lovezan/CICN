import React from "react";
import proceedingsExample from "../../assets/proceedings.png"; // Import the image

const Proceedings = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <center>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Proceedings</h1>
        </center>
        <div className="space-y-4 text-gray-800 text-justify">
          <p className="leading-relaxed">
            "CICN 2024 proceedings will be published by Conference Publishing
            Services, and accepted and presented papers will be included in IEEE
            Xplore, provided they meet all the requirements as per IEEE
            Standards."
          </p>
          <p className="leading-relaxed">
            It is mandatory that at least one author registers for every paper
            that is included in the conference proceedings. The proceedings will
            be made available during the conference.
          </p>
          <div className="flex justify-center mt-6">
            <img
              src={proceedingsExample}
              alt="Example Proceedings"
              className="w-full max-w-4xl h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proceedings;
