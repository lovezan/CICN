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
            <li><a href="#home" onClick={() => handleClick('Home')} className="cursor-pointer text-gray-300 hover:text-white">Home</a></li>
            <li><a href="#call-for-papers" onClick={() => handleClick('Call for Papers')} className="cursor-pointer text-gray-300 hover:text-white">Call for Papers</a></li>
            <li><a href="#important-dates" onClick={() => handleClick('Important Dates/Schedule')} className="cursor-pointer text-gray-300 hover:text-white">Important Dates/Schedule</a></li>
            <li><a href="#paper-submission" onClick={() => handleClick('Paper Submission')} className="cursor-pointer text-gray-300 hover:text-white">Paper Submission</a></li>
            <li><a href="#registration" onClick={() => handleClick('Registration')} className="cursor-pointer text-gray-300 hover:text-white">Registration</a></li>
            <li><a href="#proceedings" onClick={() => handleClick('Proceedings')} className="cursor-pointer text-gray-300 hover:text-white">Proceedings</a></li>
            <li><a href="#committees" onClick={() => handleClick('Committees')} className="cursor-pointer text-gray-300 hover:text-white">Committees</a></li>
            <li><a href="#speakers" onClick={() => handleClick('Keynote Speakers')} className="cursor-pointer text-gray-300 hover:text-white">Keynote Speakers</a></li>
            <li><a href="#sponsors" onClick={() => handleClick('Sponsors')} className="cursor-pointer text-gray-300 hover:text-white">Sponsors</a></li>
            <li><a href="#venue" onClick={() => handleClick('Venue/Accommodation')} className="cursor-pointer text-gray-300 hover:text-white">Venue/Accommodation</a></li>
            <li><a href="#past-conferences" onClick={() => handleClick('Past Conferences')} className="cursor-pointer text-gray-300 hover:text-white">Past Conferences</a></li>
            <li><a href="#tours" onClick={() => handleClick('Tours')} className="cursor-pointer text-gray-300 hover:text-white">Tours</a></li>
            <li><a href="#contact-us" onClick={() => handleClick('Contact Us')} className="cursor-pointer text-gray-300 hover:text-white">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
