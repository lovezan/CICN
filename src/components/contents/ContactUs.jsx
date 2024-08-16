import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 sm:p-6 rounded-lg shadow-xl">
        <center>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">
            Contact Us
          </h1>
        </center>
        <div className="text-gray-200">
          <ul className="list-disc pl-3 sm:pl-4 space-y-3 sm:space-y-4">
            <li className="text-sm sm:text-base font-semibold">
              <p>Contact Persons</p>
            </li>
            <li className="bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <p className="text-[10px] sm:text-xs md:text-sm font-semibold mb-2 text-gray-100">
                Dr. Shailendra Singh, Oriental University
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm mb-1 text-gray-300">
                Mob: <a href="tel:+919425011658" className="text-blue-300 hover:underline">+91-9425011658</a>
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-300">
                Email: <a href="mailto:cicnmir@gmail.com" className="text-blue-300 hover:underline">shailendrasingh@orientaluniversity.in</a>
              </p>
            </li>
            <li className="bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <p className="text-[10px] sm:text-xs md:text-sm font-semibold mb-2 text-gray-100">Dr. Robin Singh Bhadoria</p>
              <p className="text-[10px] sm:text-xs md:text-sm mb-1 text-gray-300">
                Mob: <a href="tel:+919329744955" className="text-blue-300 hover:underline">+91-9329744955</a>
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-300">
                Email: <a href="mailto:cicnmir@gmail.com" className="text-blue-300 hover:underline">cicnmir@gmail.com</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
