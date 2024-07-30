// src/components/SpaceAnnouncements.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './SpaceAnnouncements.css'; // Import the CSS file for styling

const SpaceAnnouncements = ({ handleClick }) => {
  return (
    <div className="space-announcements">
      <button className="close-announcements-btn" onClick={() => handleClick(false)}>Close</button>
      <h3 className="text-xl font-semibold mb-4">Announcements</h3>
      <div className="panel panel-info pan">
        <div className="panel-body">
          <ul className="list-disc pl-5 space-y-2">
            <li><a href="#home" className="cursor-pointer text-gray-300 hover:text-white">Home</a></li>
            <li><a href="#call-for-papers" className="cursor-pointer text-gray-300 hover:text-white">Call for Papers</a></li>
            <li><a href="#important-dates" className="cursor-pointer text-gray-300 hover:text-white">Important Dates/Schedule</a></li>
            <li><a href="#paper-submission" className="cursor-pointer text-gray-300 hover:text-white">Paper Submission</a></li>
            <li><a href="#registration" className="cursor-pointer text-gray-300 hover:text-white">Registration</a></li>
            <li><a href="#proceedings" className="cursor-pointer text-gray-300 hover:text-white">Proceedings</a></li>
            <li><a href="#committees" className="cursor-pointer text-gray-300 hover:text-white">Committees</a></li>
            <li><a href="#speakers" className="cursor-pointer text-gray-300 hover:text-white">Keynote Speakers</a></li>
            <li><a href="#sponsors" className="cursor-pointer text-gray-300 hover:text-white">Sponsors</a></li>
            <li><a href="#venue" className="cursor-pointer text-gray-300 hover:text-white">Venue/Accommodation</a></li>
            <li><a href="#past-conferences" className="cursor-pointer text-gray-300 hover:text-white">Past Conferences</a></li>
            <li><a href="#tours" className="cursor-pointer text-gray-300 hover:text-white">Tours</a></li>
            <li><a href="#contact-us" className="cursor-pointer text-gray-300 hover:text-white">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes validation
SpaceAnnouncements.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default SpaceAnnouncements;
