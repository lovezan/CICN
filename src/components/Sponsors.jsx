import React from 'react';
import { motion } from 'framer-motion';

// Importing images
import Ieee from '../assets/IEEE.jpeg';
import ou from '../assets/logo1.jpg';
import mir from '../assets/mir.png';
import iete1 from '../assets/IETE.png';

const Sponsors = () => {
  return (
    <div className="mt-8 flex flex-col gap-8">
      {/* Conference Organised and Hosted by Section */}
      <section className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-center text-white">
          Conference Organised and Hosted by
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex justify-center items-center">
            <motion.img
              src={Ieee}
              alt="IEEE"
              className="w-full h-auto max-w-[200px] object-contain" // Ensure proper fitting
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
            />
          </div>
          <div className="flex justify-center items-center">
            <motion.img
              src={ou}
              alt="OU"
              className="w-full h-auto max-w-[150px] object-contain" // Ensure proper fitting
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: 'loop' }}
            />
          </div>
        </div>
      </section>

      {/* Conference Technically Co-Sponsored by Section */}
      <section className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-center text-white">
          Conference Technically Co-Sponsored by
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex justify-center items-center">
            <motion.img
              src={mir}
              alt="MIR"
              className="w-full h-auto max-w-[180px] object-contain" // Ensure proper fitting
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
            />
          </div>
          <div className="flex justify-center items-center">
            <motion.img
              src={iete1}
              alt="IETE"
              className="w-full h-auto max-w-[150px] object-contain" // Ensure proper fitting
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: 'loop' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
