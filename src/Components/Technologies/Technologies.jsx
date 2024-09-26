import React from "react";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [20, -20],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div id="Technologies" className="my-12 py-8  px-2">
      <div>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="text-2xl font-semibold text-Red"
        >
          Technologies
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 90 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Comfortable With
        </motion.p>
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.8 }}
        className="flex flex-wrap justify-center gap-8 my-10"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <img
            src="https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/27e81f6e367a736d75e5140f6657f7552dc6344e/src/assets/Icon/react.svg"
            alt="React"
            className="w-16 h-16"
          />
        </motion.div>
        <motion.img
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          src="https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/refs/heads/main/src/assets/Icon/NextJs.png"
          alt="Next.js"
          className="w-16 h-16"
        />
        <motion.img
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          src="https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/27e81f6e367a736d75e5140f6657f7552dc6344e/src/assets/Icon/nodejs.svg"
          alt="Node.js"
          className="w-16 h-16"
        />
        <motion.img
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          src="https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/27e81f6e367a736d75e5140f6657f7552dc6344e/src/assets/Icon/typescript.svg"
          alt="TypeScript"
          className="w-16 h-16"
        />
        <motion.img
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          src="https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/27e81f6e367a736d75e5140f6657f7552dc6344e/src/assets/Icon/mongodb.svg"
          alt="MongoDB"
          className="w-16 h-16"
        />
        <motion.img
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          src="https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/27e81f6e367a736d75e5140f6657f7552dc6344e/src/assets/Icon/tailwind-css.svg"
          alt="Tailwind CSS"
          className="w-16 h-16"
        />
        <motion.img
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          src="https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/27e81f6e367a736d75e5140f6657f7552dc6344e/src/assets/Icon/framer-motion.svg"
          alt="Framer Motion"
          className="w-16 h-16"
        />
        <motion.img
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          src="https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/27e81f6e367a736d75e5140f6657f7552dc6344e/src/assets/Icon/firebase.svg"
          alt="Framer Motion"
          className="w-16 h-16"
        />
      </motion.div>
    </div>
  );
};

export default Technologies;
