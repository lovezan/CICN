import React from "react";
import gw1 from "../../assets/gw1.jpeg";
import pmu2 from "../../assets/pmu2.jpeg";
import sanchi1 from "../../assets/sanchi_1.jpeg";

const CallForPapers = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 text-justify rounded-lg shadow-xl">
        <center>
          <h2 className="text-3xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">
            Call For Papers
          </h2>
        </center>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          16th IEEE International Conference on Computatinal Intelligence and
          Communication Networks (CICN) 2024 is planned to be organised to bring
          together selected minds from various research communities, to have
          branstorming sessions on thier reserach outcomes selected to be
          published on international digital library. the participation is aimed
          from academia and industry working in all major areas and
          interdisciplinary areas of computational intelligence, Communication
          systems, computer networks and soft computing to share their
          experience, and exchange and cross-fertilize their ideas. CICN 2024
          will be conducted at Oriental University Indore ,India as flagship conference of IEEE
          Madhya Pradesh Section. Papers are invited on the following track but
          not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-base md:text-lg mb-6">
          <li>Communication systems and Communication Standards</li>
          <li>Soft computing, Fuzzy Systems, and ANN</li>
          <li>Sensors and sensor networks</li>
          <li>Security and authentication</li>
          <li>Air Interface, Wave propagation, and Antennas</li>
          <li>Mathematical Modeling and simulation</li>
          <li>Data Mining, Web Technology, and Ontology</li>
          <li>Parallel and distributed systems</li>
          <li>Microwave Theory and Techniques</li>
          <li>Microwave Devices and Circuits</li>
          <li>Adhoc Networks and wireless networks</li>
          <li>IT and Management</li>
          <li>RFIDs and applications</li>
          <li>Embedded systems design and Hardware Implementation</li>
          <li>Cloud computing, Green Computing</li>
          <li>Vehicular Technology and networks</li>
          <li>Image, speech, and Signal Processing</li>
          <li>Computer Vision and AI</li>
          <li>Biometry and Bioinformatics</li>
          <li>Information security and Network security</li>
          <li>Simulation and Hardware implementation techniques</li>
          <li>Control systems, Power Systems, transmission system</li>
          <li>Big Data and Internet of Things</li>
          <li>MIMO and MEMS</li>
          <li>
            VLSI and SOCs and Special session on Clean Energy and sustainable
            Technology in VLSI
          </li>
        </ul>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {/* <img src={gw1} alt="first" className="w-full md:w-1/3 h-auto rounded-lg shadow-lg" />
          <img src={pmu2} alt="second" className="w-full md:w-1/3 h-auto rounded-lg shadow-lg" />
          <img src={sanchi1} alt="third" className="w-full md:w-1/3 h-auto rounded-lg shadow-lg" /> */}
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
