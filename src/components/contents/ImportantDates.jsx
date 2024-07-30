import React from 'react';

const ImportantDates = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl">
        <center>
          <h1 className="text-3xl font-bold text-white mb-6">Important Dates</h1>
        </center>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 text-gray-300 border border-gray-700 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="py-3 px-4 border-b border-gray-600 text-left">Events</th>
                <th className="py-3 px-4 border-b border-gray-600 text-left">Dates</th>
                <th className="py-3 px-4 border-b border-gray-600 text-left">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-600 transition duration-300">
                <td className="py-3 px-4 border-b border-gray-600">Paper Submission Opening</td>
                <td className="py-3 px-4 border-b border-gray-600">20 May 2024</td>
                <td className="py-3 px-4 border-b border-gray-600"></td>
              </tr>
              <tr className="hover:bg-gray-600 transition duration-300">
                <td className="py-3 px-4 border-b border-gray-600">Paper Submission Closing</td>
                <td className="py-3 px-4 border-b border-gray-600">20 Oct 2024</td>
                <td className="py-3 px-4 border-b border-gray-600"></td>
              </tr>
              <tr className="hover:bg-gray-600 transition duration-300">
                <td className="py-3 px-4 border-b border-gray-600">Notification Starts</td>
                <td className="py-3 px-4 border-b border-gray-600">20 days from date of submission</td>
                <td className="py-3 px-4 border-b border-gray-600"></td>
              </tr>
              <tr className="hover:bg-gray-600 transition duration-300">
                <td className="py-3 px-4 border-b border-gray-600">Registration Closing</td>
                <td className="py-3 px-4 border-b border-gray-600">15 Nov 2024</td>
                <td className="py-3 px-4 border-b border-gray-600"></td>
              </tr>
              <tr className="hover:bg-gray-600 transition duration-300">
                <td className="py-3 px-4 border-b border-gray-600">Final Paper Submission</td>
                <td className="py-3 px-4 border-b border-gray-600">25 Nov 2024</td>
                <td className="py-3 px-4 border-b border-gray-600"></td>
              </tr>
              <tr className="hover:bg-gray-600 transition duration-300">
                <td className="py-3 px-4 border-b border-gray-600">Copyright Submission</td>
                <td className="py-3 px-4 border-b border-gray-600">Starts from 20 Nov 2024</td>
                <td className="py-3 px-4 border-b border-gray-600"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;
