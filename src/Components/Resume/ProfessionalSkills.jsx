import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React JS', value: 95 },
  { name: 'Next JS', value: 90 },
  { name: 'MongoDB', value: 80 },
  { name: 'Node JS', value: 85 },
  { name: 'Tailwind CSS', value: 90 },
];

const developmentSkills = [
  { name: 'JavaScript', value: 95 },
  { name: 'TypeScript', value: 85 },
  { name: 'HTML & CSS', value: 100 },
  { name: 'Git & GitHub', value: 90 },
  { name: 'C++ Programming', value: 75 },
];

// Animation Variant for Progress Bar Growth
const fadeInGrowVariant = {
  hidden: { width: '0%' },
  visible: (custom) => ({
    width: `${custom}%`,
    transition: {
      ease: 'easeInOut',
      duration: 1.5,
    },
  }),
};

const ProfessionalSkills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Development Skills */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6">Development Skills</h2>
        {skills.map((skill) => (
          <div className="mb-4 text-lg" key={skill.name}>
            <div className="flex justify-between">
              <span className="text-gray-400">{skill.name.toUpperCase()}</span>
              <span className="text-gray-400">{skill.value}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-blue-400 to-green-500 h-3 rounded-full"
                initial="hidden"
                animate="visible"
                custom={skill.value}
                variants={fadeInGrowVariant}
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Additional Development Skills */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6">Additional Skills</h2>
        {developmentSkills.map((skill) => (
          <div className="mb-4 text-lg" key={skill.name}>
            <div className="flex justify-between">
              <span className="text-gray-400">{skill.name.toUpperCase()}</span>
              <span className="text-gray-400">{skill.value}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-purple-400 to-red-500 h-3 rounded-full"
                initial="hidden"
                animate="visible"
                custom={skill.value}
                variants={fadeInGrowVariant}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProfessionalSkills;
