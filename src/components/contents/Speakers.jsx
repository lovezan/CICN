import React from 'react';

const Speakers = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Background Gradient */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-6 rounded-lg shadow-lg">
        <center>
          <h1 className="text-4xl font-bold text-white mb-6">Keynote Speakers</h1>
        </center>
        <div className="space-y-8">
          {/* Speaker 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-6">
              <img 
                src="src/assets/shakhmara.png" 
                alt="Prof Seilov Shakhmara" 
                className="w-24 h-24 rounded-full object-cover shadow-md"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Prof. Seilov Shakhmara
                </h2>
                <p className="text-gray-600 mb-4">
                  L.N. Gumilyov Eurasian National University, Kazakhstan
                </p>
              </div>
            </div>
            <p className="text-gray-800 font-medium mb-2">Biography:</p>
            <p className="text-gray-700">
              President of the Kazakh Academy of Infocommunications, Dean of the Information Technologies Faculty of the L.N. Gumilyov Eurasian National University, candidate of technical sciences (1990) and doctor of economic sciences (2006), professor, academician of the International Academy of Communications (2004). 
              Seilov Sh. has graduated in 1983 from the Leningrad (St. Petersburg) Electrotechnical Institute of Communications with a degree in automatic telecommunications. Since 1996, he worked in executive positions in Kazakh telecom JSC, Kazteleradio JSC.
              In 2007, he founded the Kazakh Academy of Infocommunications, a non-governmental scientific consulting fund, dealing with market analysis and improvement of state regulation of the telecommunications sector, development of regulatory legal acts and technical regulations in the field of ICT. For the development of the Institute of Innovation, a project has been developed for the selection and commercialization of start-up projects using crowdfunding and cryptocurrency.
              Under his leadership, significant projects include the “Model of universal service and provision of broadband access to the Internet in rural settlements of the republic”, and others.
            </p>
          </div>

          {/* Speaker 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-6">
              <img 
                src="src/assets/gohel.jpeg" 
                alt="Prof Hardik Gohel" 
                className="w-24 h-24 rounded-full object-cover shadow-md"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Prof. Hardik Gohel
                </h2>
                <p className="text-gray-600 mb-4">
                  University of Houston at Victoria
                </p>
              </div>
            </div>
            <p className="text-gray-800 font-medium mb-2">Biography:</p>
            <p className="text-gray-700">
              Dr. Gohel has extensive research experience in artificial intelligence and his research projects have involved cyber test automation and monitoring, smart bandages for wound monitoring, bigdata for security intelligence, trustworthy cyberspace for security and privacy of social media, predictive maintenance for nuclear infrastructure, and database and mobile forensics infrastructure. Dr. Gohel is also working on how to prepare quality diversified workforce with artificial intelligence in science, technology, engineering and mathematics (STEM) education.

              His independent research program is inspired from his graduate and postdoc studies. He is interested to design and develop robust artificial intelligence and cybersecurity solutions to make human life better. Dr. Gohel is actively working with United States Federal funding agencies and national labs for research collaborations. He is also interested in linkages and MOUs with government, academia and industry to foster individual and institutional partnerships in a natural and sustainable manner.

              Dr. Gohel welcomes motivated undergraduate and graduate students to join his research team and contact him.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
