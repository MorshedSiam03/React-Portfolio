import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation"; // Import the TypeAnimation component
import { motion } from "framer-motion";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import LetterByLetterParagraph from "./LetterByLetterParagraph";
import PropTypes from "prop-types";
import "./style.css";
const socialLinks = [
  { href: "https://www.facebook.com/Morshed.Siam.543", icon: FaFacebook, label: "Facebook" },
  { href: "https://github.com/MorshedSiam03", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/morshedsiam/", icon: FaLinkedin, label: "LinkedIn" }
];


const Banner = () => {
  const paragraphText =
    "A motivated software developer proficient in front-end technologies such as React.js, Next.js, HTML, CSS, JavaScript, and Tailwind CSS. Demonstrated strong problem-solving skills and a collaborative approach to working within a team. Looking to leverage my skills and experience in a dynamic and challenging environment.";

  return (
    <div>
      {" "}
      {/* Ensure background color or styling for the banner */}
      <div className="text-white lg:py-16 mt-20 md:mt-24 px-2">
        <div className="container md:mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Left Column - Text Content */}
          <div className="lg:w-2/3 text-left">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
            Turning Ideas into Digital Reality – Explore My Work
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="text-Red">MORSHED SIAM</span>
              <br />
              {/* TypeAnimation for dynamic role changes */}
              <TypeAnimation
                sequence={[
                  "a Software Engineer",
                  2000,
                  "a Web Developer",
                  2000,
                  "a Frontend Specialist",
                  2000,
                  "a Fullstack Developer",
                  2000,
                ]}
                wrapper="span"
                speed={70}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>
            <LetterByLetterParagraph text={paragraphText} />

            {/* Social Media and Best Skills Section */}
            <div  className="lg:pt-20 flex flex-col md:flex-row gap-4 md:gap-20 justify-start">
              {/* Social Media Section */}
            <div className="text-left">
              <p className="text-gray-400 uppercase text-sm">Find with me</p>
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -30 }}
                transition={{ duration: 1 }}
                className="flex my-5 gap-5 justify-start"
              >
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="text-2xl icon-container p-4 social-icon" aria-label={label} />
                  </a>
                ))}
              </motion.div>
            </div>

              {/* Best Skills Section */}
              <div className="text-left">
                <p className="text-gray-400 uppercase text-sm">Best Skill On</p>
                <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -30 }}
                transition={{ duration: 1 }}
                className="flex my-5 gap-5 justify-start">
                  <FaReact
                    className="text-2xl text-cyan-500 icon-container p-4 social-icon"
                    aria-label="Invision"
                  />
                  <RiNextjsLine
                    className="text-2xl icon-container p-4 social-icon"
                    aria-label="Sketch"
                  />
                  <IoLogoJavascript
                    className="text-2xl text-yellow-500 icon-container p-4 social-icon"
                    aria-label="Figma"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mb-5">
            <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 90 }}
            transition={{ duration: 1 }}
            className="relative max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]">
              {" "}
              {/* Adjust image container size */}
              <img
                src="https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/main/src/assets/Siam_20-42645-1-removebg-preview.png"
                alt="Profile of Morshed Siam"
                className="rounded-md object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <hr className="border-0 h-[1px] bg-gray-700" />{" "}
    </div>
  );
};

// prop-types validation
Banner.propTypes = {
  paragraphText: PropTypes.string,
};


export default Banner;
