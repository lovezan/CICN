// src/components/contents/ImportantDates1.jsx
import React from 'react';
// import './importantDates1.css'; // Import the additional CSS file

const ImportantDates1 = () => {
  const dates = [
    { event: 'Paper Submission Opening', date: '20 May 2024', remarks: '' },
    { event: 'Paper Submission Closing', date: '20 Oct 2024', remarks: '' },
    { event: 'Notification Starts', date: '20 days from date of submission', remarks: '' },
    { event: 'Registration Closing', date: '15 Nov 2024', remarks: '' },
    { event: 'Final Paper Submission', date: '25 Nov 2024', remarks: '' },
    { event: 'Copyright Submission', date: 'Starts from 20 Nov 2024', remarks: '' }
  ];

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="bg-transparent backdrop-blur-md p-4 rounded-lg shadow-xl">
        <center>
          <h1 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Important Dates</h1>
        </center>
        <div className="space-y-2">
          {dates.map((item, index) => (
            <div
              key={index}
              className="p-3 bg-transparent backdrop-blur-md rounded-lg shadow-md transition-transform transform hover:rotate-[-10deg] hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500"
            >
              <h2 className="text-sm md:text-base font-semibold text-gray-900 mb-1">{item.event}</h2>
              <p className="text-blue-900 mb-1">Date: {item.date}</p> {/* Dark Blue for Date */}
              {item.remarks && <p className="text-gray-700 text-xs">Remarks: {item.remarks}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportantDates1;