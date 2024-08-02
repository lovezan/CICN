import React from 'react';
import os1 from '../../assets/oa1.jpg'; // Adjust the path based on your folder structure
import sanchi from '../../assets/sanchi.png'; // Adjust the path based on your folder structure
import os2 from '../../assets/ou2.jpeg'; // Adjust the path based on your folder structure
import image from '../../assets/sanchi_1.jpeg'; // Adjust the path based on your folder structure

const PastConferences = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-xl text-justify">
        <center>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Past Conferences</h1>
        </center>
        <div className="space-y-6">
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>CICSyN 2009, Indore India 23-25 July 2009.</li>
            <li>CICN 2010, Bhopal India 26-28 Nov 2010</li>
            <li>NWeSP 2010, Gwalior India from 23-25 Nov 2010</li>
            <li>NaBiC 2009, Coimbatore, India 7-9 Dec 2009</li>
            <li>CSNT 2011, SMVDU Katra, 3-5 June 2011</li>
            <li>CICN 2011, Gwalior 7-9 Oct 2011</li>
            <li>CSNT 2012, Rajkot, Gujrat 11-13 May 2012</li>
            <li>CICN 2012, GLA Mathura 3-5 Nov 2012</li>
            <li>CSNT 2013, Gwalior, 6-8 Apr 2013</li>
            <li>CICN 2013, GLA Mathura 27-29 Sep 2013</li>
            <li>CSNT 2014, NITTTR Bhopal 7-9 Apr 2014</li>
            <li>CICN 2014 Udaipur 14-16 Nov 2014</li>
            <li>CSNT 2015, Gwalior 4-6 Apr 2015</li>
            <li>CICN 2015 Jabalpur 12-14 Dec 2015</li>
            <li>CSNT 2016, Chandigarh 05-07 Mar 2016</li>
            <li>CICN 2016 Jabalpur and Dehradun 23-26 Dec 2016</li>
            <li>CICN 2017 Girne, Cyprus 16-17 Sep 2017</li>
            <li>CSNT 2017 Nagpur, India 11-13 Nov 2017</li>
            <li>CICN 2018</li>
            <li>CSNT 2018</li>
            <li>CICN 2019</li>
            <li>CSNT 2019</li>
            <li>CICN 2020</li>
            <li>CSNT 2020</li>
            <li>CICN 2021</li>
            <li>CSNT 2021</li>
            <li>CICN 2022</li>
            <li>CSNT 2022, OIST Bhopal</li>
            <li>CSNT 2023, TIT Bhopal, 08-09 Apr 2023</li>
            <li>CICN 2023, Hotel Mandarine, Bangkok, 22-23 Dec 2023</li>
            <li>CSNT 2024, GGITS Jabalpur, 06-07 Apr 2024</li>
            <li>
              <p className="font-bold">CICN 2024</p>
              <p>Proceedings of all the conferences are available at IEEE Xplore</p>
            </li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap gap-6 justify-center">
          <div className="relative w-full sm:w-60 h-40 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src={sanchi} alt="Sanchi" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-xl font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
              Sanchi
            </div>
          </div>
          <div className="relative w-full sm:w-60 h-40 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src={os1} alt="Event" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-xl font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
              Event
            </div>
          </div>
          <div className="relative w-full sm:w-80 h-40 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src={image} alt="Conference" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-xl font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
              Conference
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
