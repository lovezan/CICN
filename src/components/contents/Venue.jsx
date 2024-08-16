import React from 'react';
// import sanchi from '../../assets/sanchi_1.jpeg';
// import mp1 from '../../assets/mp1.jpg';
import oa1 from '../../assets/oa1.jpg';
// import iete from '../../assets/IETE.png';
import hostelImg from '../../assets/Hostel.jpg'; // Ensure this path is correct

const Venue = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg text-justify leading-relaxed">
        <h1 className="text-3xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700 text-center">
          Conference Venue
        </h1>

        <p className="text-lg font-semibold text-gray-800 mb-4">
          <strong>Oriental University Indore</strong>
        </p>

        <p className="text-gray-700 mb-4">
          <strong>About Us:</strong>
          <br />
          <span className="text-gray-700">
            <strong>Oriental University, Indore (OUI)</strong> established by the Devi Shakuntala Thakral Charitable Foundation in 2011, is the first private university in Indore,
            recognized under section 2F of the UGC Act, 1956. The Oriental Group, which has been a prominent name in education since 1995, operates several institutions
            in Bhopal, Indore, and Jabalpur. OUI offers a wide range of programs in fields such as Agriculture, Commerce, Computer Applications, Education, Engineering,
            Law, Library & Information Sciences, Management, Media Studies, Pharmacy, and Science. The university is located on the Indore-Ujjain state highway near
            Devi Ahilya International Airport, and its 77-acre lush green campus was designed by the renowned M/s Hafeez Contractors.
            <br />
            <br />
            The campus includes academic blocks, state-of-the-art laboratories, workshops, spacious classrooms equipped with the latest teaching aids, a central library with separate reading areas for
            students and faculty, hostel facilities for boys and girls, residential accommodation for faculty, and on-campus banking facilities. OUI is dedicated to
            providing an education that goes beyond traditional boundaries, with a focus on innovative teaching and pioneering research in a highly collaborative
            environment. The university boasts state-of-the-art laboratories and various workshops, including the Hyundai Tech center, as well as ICT-based classrooms.
            The intent at OUI is to develop personally, professionally, and socially responsible individuals who are prepared for deployment in industry and capable of
            making significant contributions in their respective fields.
          </span>
        </p>

        <p className="text-gray-700 mb-4">
          <a href="https://clickeffect.co.in/oriental/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">
            Virtual Tour of Oriental University
          </a>
        </p>

        <p className="text-gray-700 mb-4">
          <strong>Hostel:</strong>
          <br />
          1. Single bed room rent: Rs 1000/- per day
          <br />
          2. Double bed room rent: Rs 1500/- per day
          <br />
          3. Triple bed room rent: Rs 2000/- per day
        </p>

        <p className="text-gray-700 mb-4">
          <strong>For any accommodation query:</strong>
          <br />
          Name: Sudhir Singh
          <br />
          Mobile Contact: +91-9926225555
        </p>

        <div className="flex justify-center mb-6">
          <img src={hostelImg} alt="Hostel" width="300" height="150" className="rounded-md shadow-md" />
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-lg font-bold mb-2">HOTELS:</h2>
          <ul className="list-disc pl-5">
            <li><a href="https://www.radissonhotels.com/en-us/hotels/radisson-blu-indore" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">Radisson Blu Hotel</a></li>
            <li><a href="https://www.essentiahotels.in/indore" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">Essentia Luxury Hotel</a></li>
            <li><a href="https://sayajihotels.com/our-hotels/sayaji-indore/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">Sayaji Indore</a></li>
            <li><a href="https://www.marriott.com/en-us/hotels/idrmh-indore-marriott-hotel/overview/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">Marriott Hotel</a></li>
            <li><a href="https://www.lemontreehotels.com/lemon-tree-hotel/indore/hotel-indore" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">Lemon Tree Hotel</a></li>
            <li><a href="https://www.monksnirvanaa.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">Monk's Nirvanaa Hotel & Resort</a></li>
            <li><a href="https://www.makemytrip.com/hotels/hotel_the_grand_shaurya-details-indore.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">The Grand Shaurya</a></li>
            <li><a href="https://www.makemytrip.com/hotels/alba_inn_indore-details-indore.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">Alba Inn Indore</a></li>
            <li><a href="https://www.justdial.com/Indore/Babashree-Hotels-And-Resorts-Behind-Airport-Thana-Bijasan-Road/0731PX731-X731-180821034635-D4G1_BZDET" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">Babashree Hotel</a></li>
            <li><a href="https://www.makemytrip.com/hotels/hotel_siddhant-details-indore.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 ease-in-out">Hotel Siddhant</a></li>
          </ul>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <img src={oa1} alt="OU1" className="w-80 h-auto object-cover rounded-md shadow-md" />
        </div>

        <p className="text-gray-600 text-center italic mt-6">
          <strong>We look forward to welcoming you to a wonderful conference experience!</strong>
        </p>
      </div>
    </div>
  );
};

export default Venue;
