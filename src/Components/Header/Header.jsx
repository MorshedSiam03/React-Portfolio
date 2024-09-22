import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { RxCross2 } from "react-icons/rx";
import "./style.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clickSound] = useState(new Audio("/Audio/mouse-click.MP3")); // Preload click sound

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = () => {
    clickSound.play(); // Play sound when navigation item or menu is clicked
  };

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Reusable motion component for navigation links
  const MotionNavLink = ({ to, label, scrollTo, duration }) => (
    <motion.li
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 20, duration }}
      whileHover={{ scale: 1.2 }}
    >
      <NavLink
        to={to}
        className="hover:text-red-500"
        onClick={() => {
          if (scrollTo) {
            handleScroll(scrollTo); // Smooth scroll to section if provided
          } else {
            window.scrollTo(0, 0); // Scroll to top for other links
          }
          setMenuOpen(false); // Close the menu
          handleClick(); // Play sound
        }}
      >
        {label}
      </NavLink>
    </motion.li>
  );

  return (
    <div className="text-white relative">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/main/src/assets/Siam_20-42645-1-removebg-preview.png"
            alt="Profile picture of Morshed Siam"
            className="w-12 h-12 mx-2 rounded-full"
          />
          <span className="mt-2 text-xl font-poppins">Morshed Siam</span>
        </NavLink>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => {
              toggleMenu();
              handleClick();
            }}
            className="text-2xl text-red-500 focus:outline-none px-4 md:px-0"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"} // Accessibility for screen readers
          >
            {menuOpen ? <RxCross2 /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Menu for Desktop */}
        <ul className="hidden lg:flex items-center gap-7 text-lg">
          <MotionNavLink to="/" label="Home" duration={0.7} />
          <MotionNavLink to="/" label="Technologies" scrollTo="Technologies" duration={0.8} />
          <MotionNavLink to="/" label="Projects" scrollTo="Projects" duration={0.9} />
          <MotionNavLink to="/" label="Resume" duration={1} />
          <MotionNavLink to="/" label="Testimonial" duration={1.1} />
          <MotionNavLink to="/" label="Blog" duration={1.2} />
          <MotionNavLink to="/" label="Contacts" duration={1.3} />
        </ul>

        {/* Mobile Menu */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: menuOpen ? "0%" : "-100%" }}
          transition={{ type: "spring", stiffness: 50 }}
          className="fixed top-0 left-0 h-full w-[80%] md:w-[50%] bg-[#212529] text-white shadow-lg z-50"
        >
          <div className="flex justify-between p-4 border-gray-700">
            {/* Profile image and description */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <img
                  src="https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/main/src/assets/Siam_20-42645-1-removebg-preview.png"
                  alt="Profile picture of Morshed Siam"
                  className="w-20 h-20 rounded-full"
                />
                <button
                  onClick={() => {
                    toggleMenu();
                    handleClick();
                  }}
                  className="text-2xl text-red-500 icon-container-round focus:outline-none"
                  aria-label="Close Menu"
                >
                  <RxCross2 />
                </button>
              </div>
              <div>
                <p className="py-2 text-gray-400" style={{ wordSpacing: "3px" }}>
                  To achieve experience and expertise using my skills in the field of Web development and utilize my skills for me and companies’ overall growth.
                </p>
              </div>
            </div>
          </div>
          <hr className="border-0 mx-2 h-[1px] bg-gray-700"></hr>
          {/* Navigation links */}
          <ul className="flex flex-col items-start font-medium space-y-4 mt-6 pl-4">
            <MotionNavLink to="/" label="Home" duration={1} />
            <MotionNavLink to="/" label="Technologies" scrollTo="Technologies" duration={2} />
            <MotionNavLink to="/" label="Projects" scrollTo="Projects" duration={3} />
            <MotionNavLink to="/" label="Resume" duration={4} />
            <MotionNavLink to="/" label="Testimonial" duration={5} />
            <MotionNavLink to="/" label="Blog" duration={6} />
            <MotionNavLink to="/" label="Contacts" duration={7} />
          </ul>
          <hr className="border-0 mt-4 mx-3 h-[1px] bg-gray-700"></hr>
          <div className="lg:pt-20 flex flex-col md:flex-row mt-6 pl-4 gap-4 md:gap-20 justify-start">
            {/* Social Media Section */}
            <div className="text-left">
              <p className="text-gray-400 uppercase text-sm">Find with me</p>
              <div className="flex my-5 gap-5 justify-start">
                <FaFacebook className="text-2xl icon-container-header p-3 social-icon" />
                <FaTwitter className="text-2xl icon-container-header p-3 social-icon" />
                <FaLinkedin className="text-2xl icon-container-header p-3 social-icon" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dark Overlay when Menu is Open */}
        {menuOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-80 z-40"
            onClick={() => {
              toggleMenu();
              handleClick();
            }} // Clicking on the overlay will close the menu
          ></div>
        )}
      </div>
    </div>
  );
};

export default Header;
