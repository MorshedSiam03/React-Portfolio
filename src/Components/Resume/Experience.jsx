import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      >
        <h3 className="text-red-500 text-sm mb-4">2024 - Present</h3>
        <h2 className="text-3xl font-bold mb-6">Job Experience</h2>

        <div className="p-6 rounded-lg shadow-dual mb-8 hover:bg-zinc-900">
          <h4 className="text-xl font-semibold">Database Manager</h4>
          <div className="md:flex justify-between">
            <p className="text-gray-400 mt-4 text-sm">
              IRD Foundation (Jan 2024 - May 2024)
            </p>
            <div className="py-2 px-3 text-Red text-sm shadow-dual mt-2 rounded-md">
              Banasree, Rampura
            </div>
          </div>
          <hr className="opacity-10 my-5" />
          <p className="text-gray-500 mt-2">
            Managed and maintained databases using Python scripts, ensuring data accuracy and integrity. Utilized Microsoft Excel and Google Sheets for data recording, analysis, and presentation.
          </p>
        </div>
      </motion.div>

      {/* Training Experience Section */}
      <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      >
        <h3 className="text-red-500 text-sm mb-4">2020-Present</h3>
        <h2 className="text-3xl font-bold mb-6">Training Experience</h2>

        <div className="p-6 rounded-lg shadow-dual mb-8 hover:bg-zinc-900">
          <h4 className="text-xl font-semibold">Complete Web Development Course</h4>
          <div className="flex justify-between">
            <p className="text-gray-400 mt-4 text-sm">
              Programming Hero (2024)
            </p>
            <div className="py-2 px-3 text-Red text-sm shadow-dual mt-2 rounded-md">
              Online
            </div>
          </div>
          <hr className="opacity-10 my-5" />
          <p className="text-gray-500 mt-2">
            Acquired hands-on skills in React.js, Next.js, Node.js, and MongoDB, completing a 6-month program focused on full-stack web development.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-dual mb-8 hover:bg-zinc-900">
          <h4 className="text-xl font-semibold">Microsoft Excel Training</h4>
          <div className="flex justify-between">
            <p className="text-gray-400 mt-4 text-sm">
              10 Minute School (2022)
            </p>
            <div className="py-2 px-3 text-Red text-sm shadow-dual mt-2 rounded-md">
              Online
            </div>
          </div>
          <hr className="opacity-10 my-5" />
          <p className="text-gray-500 mt-2">
            Developed proficiency in Microsoft Excel, including data analysis, visualization, and formula functions, over a 6-month period.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
