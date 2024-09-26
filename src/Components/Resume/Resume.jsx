import React, { useState } from 'react';
import Education from './Education';
import ProfessionalSkills from './ProfessionalSkills';
import Experience from './Experience';
import PersonalInfo from './PersonalInfo';
import { motion } from 'framer-motion';


const Resume = () => {
    const [activeTab, setActiveTab] = useState("Education"); // Manage active tab
  
    const renderTabContent = () => {
      switch (activeTab) {
        case "Education":
          return <Education />;
        case "Professional Skills":
          return <ProfessionalSkills />;
        case "Experience":
          return <Experience />;
        case "Personal Info":
          return <PersonalInfo />;
        default:
          return <Education />;
      }
    };
  
    return (
      <div id='Resume' className="mt-20 py-5 px-4 lg:px-12 text-white min-h-screen font-poppins">
        {/* Header Section */}
        <header className="text-center pt-10 pb-5">
          <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-Red uppercase tracking-wide text-sm">
             Years of Experience
          </motion.h2>
          <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold">My Resume</motion.h1>
  
          {/* Tabs */}
          <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:flex justify-between shadow-dual  rounded-lg  mt-6">
            {["Education", "Professional Skills", "Experience", "Personal Info"].map((tab) => (
              <button
                key={tab}
                className={`w-full px-20 py-7 rounded-lg  text-lg font-semibold transition-colors ${
                  activeTab === tab
                    ? "text-Red  shadow-dual" // Active tab styling
                    : "text-gray-400 hover:text-Red" // Inactive tab styling
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        </header>
  
        {/* Tab Content */}
        <div className="container mx-auto py-5 md:px-4">
          {renderTabContent()}
        </div>
      </div>
    );
  };
  
  export default Resume;