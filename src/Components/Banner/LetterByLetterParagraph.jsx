import React from 'react';
import { motion } from "framer-motion";

// Variants for the container and individual letters
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02, // Delay between each letter animation
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, x: 0 }, // Start each letter hidden and below
  visible: {
    opacity: 1,
    y: 0, // Animate the letter to its original position
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const LetterByLetterParagraph = ({ text }) => {
    return (
        <motion.p
        className="text-gray-300 text-justify my-8 lg:pr-[188px] text-sm sm:text-base"
        style={{ wordSpacing: "3px" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={letterVariants}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.p>
    );
};

export default LetterByLetterParagraph;