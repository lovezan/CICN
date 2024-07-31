import React from 'react';

const RegistrationContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold text-lg">Registration Details</h3>
        <a href="#" className="block text-sm hover:underline">Registration Guide</a>
        <a href="#" className="block text-sm hover:underline">Fee Structure</a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold text-lg">Important Dates</h3>
        <a href="#" className="block text-sm hover:underline">Early Bird Deadline</a>
        <a href="#" className="block text-sm hover:underline">Regular Registration Deadline</a>
      </div>
      <button className="w-full rounded-lg border-2 border-blue-800 px-4 py-2 font-semibold transition-colors hover:bg-blue-800 hover:text-white">
        Register Now
      </button>
    </div>
  );
};

export default RegistrationContent;
