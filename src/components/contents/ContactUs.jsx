import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl">
        <center>
          <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
        </center>
        <div className="text-gray-300 mb-8">
          <ul className="list-disc pl-5 space-y-6">
            <li className="text-xl font-semibold">
              <p>Contact Persons</p>
            </li>
            <li className="bg-gray-700 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <p className="text-lg font-semibold mb-2">Dr. Shailendra Singh</p>
              <p className="mb-1">Mob: <a href="tel:+919425011658" className="text-blue-400 hover:underline">+91-9425011658</a></p>
              <p>Email: <a href="mailto:cicnmir@gmail.com" className="text-blue-400 hover:underline">cicnmir@gmail.com</a></p>
            </li>
            <li className="bg-gray-700 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <p className="text-lg font-semibold mb-2">Dr. Robin Singh</p>
              <p className="mb-1">Mob: <a href="tel:+919329744955" className="text-blue-400 hover:underline">+91-9329744955</a></p>
              <p>Email: <a href="mailto:cicnmir@gmail.com" className="text-blue-400 hover:underline">cicnmir@gmail.com</a></p>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
          <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
          Nothing
          {status && <p className="mt-4 text-white">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
