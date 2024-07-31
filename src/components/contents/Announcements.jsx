// src/components/Announcements.jsx
import React from 'react';
import './Announcements.css'; // Import the CSS file

const Announcements = ({ handleClick }) => {
  return (
    <section className="announcements-section">
      <h3 className="text-xl font-semibold mb-4">Announcements</h3>
      <div className="panel panel-info pan">
        <div className="panel-body">
          <ul className="list-disc pl-5 space-y-2">
            <li><a onClick={() => handleClick('Home')} className="cursor-pointer text-gray-300 hover:text-white">Home</a></li>
            <li><a onClick={() => handleClick('Call for Papers')} className="cursor-pointer text-gray-300 hover:text-white">Call for Papers</a></li>
            <li><a onClick={() => handleClick('Paper Submission')} className="cursor-pointer text-gray-300 hover:text-white">Paper Submission</a></li>
            <li><a onClick={() => handleClick('Registration')} className="cursor-pointer text-gray-300 hover:text-white">Registration</a></li>
            <li><a onClick={() => handleClick('Proceedings')} className="cursor-pointer text-gray-300 hover:text-white">Proceedings</a></li>
            <li><a onClick={() => handleClick('Committees')} className="cursor-pointer text-gray-300 hover:text-white">Committees</a></li>
            <li><a onClick={() => handleClick('Keynote Speakers')} className="cursor-pointer text-gray-300 hover:text-white">Keynote Speakers</a></li>
            <li><a onClick={() => handleClick('Sponsors')} className="cursor-pointer text-gray-300 hover:text-white">Sponsors</a></li>
            <li><a onClick={() => handleClick('Venue/Accommodation')} className="cursor-pointer text-gray-300 hover:text-white">Venue/Accommodation</a></li>
            <li><a onClick={() => handleClick('Past Conferences')} className="cursor-pointer text-gray-300 hover:text-white">Past Conferences</a></li>
            <li><a onClick={() => handleClick('Tours')} className="cursor-pointer text-gray-300 hover:text-white">Tours</a></li>
            <li><a onClick={() => handleClick('Contact Us')} className="cursor-pointer text-gray-300 hover:text-white">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
