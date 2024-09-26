import React from "react";
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      >
        <h3 className="text-Red text-sm mb-4">2017 - 2024</h3>
        <h2 className="text-3xl font-bold mb-6">Education Quality</h2>

        <div className="p-6 rounded-lg shadow-dual hover:bg-zinc-900 mb-8">
          <h4 className="text-2xl font-semibold">
            BSc in Computer Science & Engineering
          </h4>
          <div className="md:flex justify-between">
            <p className="text-gray-400 mt-4 text-sm">
              American International University Bangladesh (AIUB)
            </p>
            <div className="py-2 px-3 text-Red text-sm shadow-dual mt-2 rounded-md">
              CGPA: 3.60/4
            </div>
          </div>
          <hr className=" opacity-10 my-5" />
          <p className="text-gray-500 mt-2">
            The degree focused on systems analysis, database management, and IT
            with specialized training in various programming languages.
          </p>
        </div>

        <div className=" p-6 rounded-lg shadow-dual  hover:bg-zinc-900 mb-8">
          <h4 className="text-2xl font-semibold">HSC - Science</h4>
          <div className="md:flex justify-between">
            <p className="text-gray-400 mt-4 text-sm">
              Bir Shrestha Munshi Abdur Rouf College
            </p>
            <div className="py-2 px-3 text-Red text-sm shadow-dual mt-2 rounded-md">
              GPA: 4.80/5
            </div>
          </div>
          <hr className=" opacity-10 my-5" />
          <p className="text-gray-500 mt-2">
            High school focused on Science subjects including Physics,
            Chemistry, Biology, and Mathematics.
          </p>
        </div>

        <div className=" p-6 rounded-lg shadow-dual  hover:bg-zinc-900">
          <h4 className="text-2xl font-semibold">SSC - Science</h4>
          <div className="flex justify-between">
            <p className="text-gray-400 mt-4 text-sm">
              Motijheel Model High School
            </p>
            <div className="py-2 px-3 text-Red text-sm shadow-dual mt-2 rounded-md">
              GPA: 5.00/5
            </div>
          </div>
          <hr className=" opacity-10 my-5" />
          <p className="text-gray-500 mt-2">
            Focused on foundational education in Physics, Chemistry, Biology,
            and Mathematics.
          </p>
        </div>
      </motion.div>

      <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      >
        <h3 className="text-Red text-sm mb-4">2024 - Present</h3>
        <h2 className="text-3xl font-bold mb-6">Job Experience</h2>

        <div className=" p-6 rounded-lg shadow-dual mb-8  hover:bg-zinc-900">
          <h4 className="text-xl font-semibold">Database Manager</h4>
          <div className="md:flex justify-between">
            <p className="text-gray-400 mt-4 text-sm">
              IRD Foundation (Jan 2024 - May 2024)
            </p>
            <div className="py-2 px-3 text-Red text-sm shadow-dual mt-2 rounded-md">
              Banasree, Rampura
            </div>
          </div>
          <hr className=" opacity-10 my-5" />
          <p className="text-gray-500 mt-2">
            Managed and maintained databases using Python scripts, ensuring data
            accuracy and integrity. Utilized Microsoft Excel and Google Sheets
            for data recording, analysis, and presentation.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
