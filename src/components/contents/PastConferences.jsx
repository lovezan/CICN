import React from 'react';
import os1 from '../../assets/oa1.jpg'; // Adjust the path based on your folder structure
import os2 from '../../assets/ou2.jpeg'; // Adjust the path based on your folder structure

const PastConferences = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-xl text-justify">
        <center>
          <h1 className="text-3xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">Past Conferences</h1>
        </center>
        <div className="space-y-6">
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>CICSyN 2009, Indore, 23-25 July 2009</li>
            <li>NaBiC 2009, Coimbatore, 7-9 Dec 2009</li>
            <li>2nd CICN 2010, Bhopal, 26-28 Nov 2010</li>
            <li>NWeSP 2010, Gwalior, 23-25 Nov 2010</li>
            <li>1st CSNT 2011, SMVDU Katra, 3-5 June 2011</li>
            <li>3rd CICN 2011, Gwalior, 7-9 Oct 2011</li>
            <li>2nd CSNT 2012, Rajkot, 11-13 May 2012</li>
            <li>4th CICN 2012, Mathura, 3-5 Nov 2012</li>
            <li>3rd CSNT 2013, Gwalior, 6-8 Apr 2013</li>
            <li>5th CICN 2013, Mathura, 27-29 Sep 2013</li>
            <li>4th CSNT 2014, NITTTR Bhopal, 7-9 Apr 2014</li>
            <li>6th CICN 2014, Udaipur, 14-16 Nov 2014</li>
            <li>5th CSNT 2015, Gwalior, 4-6 Apr 2015</li>
            <li>7th CICN 2015, Jabalpur, 12-14 Dec 2015</li>
            <li>6th CSNT 2016, Patiala, 05-07 Mar 2016</li>
            <li>8th CICN 2016, Tehri, India, 23-26 Dec 2016</li>
            <li>9th CICN 2017, Girne, Cyprus, 16-17 Sep 2017</li>
            <li>7th CSNT 2017, Nagpur, 11-13 Nov 2017</li>
            <li>10th CICN 2018, Esbjerg, Denmark, 17-19 Aug 2018</li>
            <li>8th CSNT 2018, Bhopal, 24-26 Nov 2018</li>
            <li>11th CICN 2019, Honolulu, USA, 03-04 Jan 2019</li>
            <li>12th CICN 2020, Bhimtal, India, 25-26 Sept 2020</li>
            <li>9th CSNT 2020, Gwalior, 10-12 Apr 2020</li>
            <li>13th CICN 2021, Lima, Peru, 22-23 Sept 2021</li>
            <li>10th CSNT 2021, Bhopal, 18-19 Jun 2021</li>
            <li>14th CICN 2022, Al-Khobar, Saudi Arabia, 04-06 Dec 2022</li>
            <li>11th CSNT 2022, Indore, 23-24 Apr 2022</li>
            <li>12th CSNT 2023, Bhopal, 08-09 Apr 2023</li>
            <li>15th CICN 2023, Bangkok, Thailand, 22-23 Dec 2023</li>
            <li>12th CSNT 2024, Jabalpur, 06-07 Apr 2024</li>
            <li>
              <p className="font-bold">CICN 2024</p>
              <p>Proceedings of all the conferences are available at IEEE Xplore</p>
            </li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap gap-6 justify-center">
          <div className="relative w-full sm:w-60 h-40 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src={os1} alt="Event" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-xl font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
              Event
            </div>
          </div>
          <div className="relative w-full sm:w-72 h-40 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src={os2} alt="Conference" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-xl font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
              Conference
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastConferences;
