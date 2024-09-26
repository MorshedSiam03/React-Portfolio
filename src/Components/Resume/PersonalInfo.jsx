import React from "react";
import { motion } from "framer-motion";

const PersonalInfo = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
      className="p-10 rounded-lg shadow-dual grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <motion.h2 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl text-Red font-bold col-span-1 md:col-span-2 mb-6 text-center">
        Personal Information
      </motion.h2>

      {/* First Column */}
      <motion.div 
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-4">
        <div className="flex justify-between">
          <h4 className="text-lg font-semibold">Father's Name</h4>
          <p className="text-gray-400">MD. Nasir Uddin</p>
        </div>

        <div className="flex justify-between">
          <h4 className="text-lg font-semibold">Mother's Name</h4>
          <p className="text-gray-400">MS. Morsheda Akter</p>
        </div>

        <div className="flex justify-between">
          <h4 className="text-lg font-semibold">Date of Birth</h4>
          <p className="text-gray-400">21 November 2000</p>
        </div>

        <div className="flex justify-between">
          <h4 className="text-lg font-semibold">Gender</h4>
          <p className="text-gray-400">Male</p>
        </div>

        <div className="flex justify-between">
          <h4 className="text-lg font-semibold">Height</h4>
          <p className="text-gray-400">1.8 m</p>
        </div>

        <div className="flex justify-between">
          <h4 className="text-lg font-semibold">Weight</h4>
          <p className="text-gray-400">72 kg</p>
        </div>
      </motion.div>

      {/* Second Column */}
      <motion.div 
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-4">
        <div className="flex justify-between">
          <h4 className="text-lg font-semibold">Passport No</h4>
          <p className="text-gray-400">A06622128</p>
        </div>

        <div className="flex justify-between">
          <h4 className="text-lg font-semibold">Passport Issue Date</h4>
          <p className="text-gray-400">18 January 2023</p>
        </div>

        <div className="flex justify-between">
          <h4 className="text-lg font-semibold">Marital Status</h4>
          <p className="text-gray-400">Married</p>
        </div>

        <div className="flex justify-between">
          <h4 className="text-lg font-semibold">Nationality</h4>
          <p className="text-gray-400">Bangladeshi</p>
        </div>

        <div className="flex justify-between">
          <h4 className="text-lg font-semibold">Religion</h4>
          <p className="text-gray-400">Islam</p>
        </div>

        <div className="flex justify-between">
          <h4 className="text-lg font-semibold">Blood Group</h4>
          <p className="text-gray-400">A+</p>
        </div>
      </motion.div>

      {/* Full Width Row for Address */}
      <motion.div 
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="col-span-1 md:col-span-2 space-y-4">
        <div className="flex justify-between">
          <h4 className="text-lg font-semibold">Permanent Address</h4>
          <p className="text-gray-400">
            Holding-379, Village- Prodhaner Char, Gazaria, Munshiganj, PO: 1510
          </p>
        </div>

        <div className="flex justify-between">
          <h4 className="text-lg font-semibold">Current Location</h4>
          <p className="text-gray-400">58/1 North Jatrabari, Dhaka-1204</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PersonalInfo;
