import React, { useState, useEffect } from 'react';

const LiveSection = () => {
  // State to manage the animated text
  const [text, setText] = useState("16th IEEE International Conference CICN 2024");

  // Function to change the text every few seconds
  useEffect(() => {
    const textArray = [
      "16th IEEE International Conference CICN 2024",
    //   "Join Us for Groundbreaking Research and Networking",
    //   "Get the Latest Updates and Live Streams Here"
    ];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % textArray.length;
      setText(textArray[index]);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-800 p-6 rounded-lg mt-8 cursor-pointer">
      <div className="container mx-auto">
        {/* Animated Text with Live Symbol */}
        <div className="flex items-center justify-center text-3xl font-bold mb-4 text-center text-red-600">
          <div className="mr-3">
            {/* Live Symbol */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-red-600 animate-pulse"
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
          <span className="animate-text">{text}</span>
        </div>
        
        {/* Static Content */}
        <div className="text-lg text-red-600 text-center">
          <p>
            A conference proceedings that meet IEEE quality review standards may be eligible for inclusion in the IEEE Xplore Digital Library. IEEE reserves the right not to publish any proceedings that do not meet these standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LiveSection;
