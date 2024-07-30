import React, { useState, useEffect } from 'react';

const LiveSection = () => {
  // State to manage the animated text
  const [text, setText] = useState("16th IEEE International Conference CICN 2024");

  // Function to change the text every few seconds
  useEffect(() => {
    const textArray = [
      "16th IEEE International Conference CICN 2024",
      // "Join Us for Groundbreaking Research and Networking",
      // "Get the Latest Updates and Live Streams Here"
    ];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % textArray.length;
      setText(textArray[index]);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#e0f7fa] to-[#81d4fa] p-4 rounded-lg shadow-lg mt0 max-w-4xl mx-auto">
      <div className="container mx-auto">
        {/* Animated Text with Live Symbol */}
        <div className="flex items-center justify-center text-xl md:text-2xl font-semibold mb-3 text-green-800">
          <div className="mr-2">
            {/* Live Symbol */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-8 md:w-8 text-red-600 animate-pulse"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>
          <span className="animate-text text-green-800">{text}</span>
        </div>
        
        {/* Static Content */}
        <div className="text-sm md:text-base text-green-600 text-center">
          <p>
            A conference proceedings that meet IEEE quality review standards may be eligible for inclusion in the IEEE Xplore Digital Library. IEEE reserves the right not to publish any proceedings that do not meet these standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LiveSection;
