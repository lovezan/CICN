import React from 'react';
import { motion } from 'framer-motion';

// Importing images
import mp from '../assets/mp1.jpg';
import ou from '../assets/ou2.jpeg';
import pmu1 from '../assets/prnce_muhammad_fahd.png';
import mir from '../assets/oa1.jpg';
import iete1 from '../assets/IETE.png';
import pmu from '../assets/prnce_muhammad_fahd.png';



const Sponsors = () => {
  return (
    <div className="mt-8 flex flex-col gap-4">
      {/* Conference Organised and Hosted by Section */}
      <section className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-center text-white">
          Conference Organised and Hosted by
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex justify-center items-center">
            <motion.img
              src={mp}
              alt="MP"
              className="w-64 h-28 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
            />
          </div>
          <div className="flex justify-center items-center">
            <motion.img
              src={ou}
              alt="OU"
              className="w-36 h-36 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: 'loop' }}
            />
          </div>
          <div className="flex justify-center items-center">
            <motion.img
              src={pmu1}
              alt="PMU"
              className="w-40 h-28 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, delay: 2, repeat: Infinity, repeatType: 'loop' }}
            />
          </div>
        </div>
      </section>

      {/* Conference Technically Co-Sponsored by Section */}
      <section className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-center text-white">
          Conference Technically Co-Sponsored by
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          <motion.img
            src={mir}
            alt="MIR"
            className="w-48 h-24 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
          />
          <motion.img
            src={iete1}
            alt="IETE"
            className="w-32 h-24 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: 'loop' }}
          />
          <motion.img
            src={pmu}
            alt="PMU"
            className="w-44 h-24 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, delay: 2, repeat: Infinity, repeatType: 'loop' }}
          />
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
