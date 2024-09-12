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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = () => {
    const clickSound = new Audio("/src/assets/Audio/mouse-click.mp3");
    clickSound.play();
  };

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = (
    <>
      <motion.li
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, duration: 0.7 }}
        whileHover={{ scale: 1.2 }}
      >
        <NavLink
          exact
          to="/"
          className="hover:text-red-500"
          onClick={() => {
            setMenuOpen(false);
            handleClick();
          }}
        >
          Home
        </NavLink>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, duration: 0.8 }}
        whileHover={{ scale: 1.2 }}
      >
        <NavLink
          toScroll="Technologies"
          className="hover:text-red-500"
          onClick={() => {
            handleScroll("Technologies"); // Smooth scroll to the section
            setMenuOpen(false); // Close the menu
            handleClick();
          }}
        >
          Technologies
        </NavLink>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, duration: 0.9 }}
        whileHover={{ scale: 1.2 }}
      >
        <NavLink
          to="/"
          className="hover:text-red-500"
          onClick={() => {
            setMenuOpen(false);
            handleClick();
          }}
        >
          Projects
        </NavLink>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, duration: 1 }}
        whileHover={{ scale: 1.2 }}
      >
        <NavLink
          to="/"
          className="hover:text-red-500"
          onClick={() => {
            setMenuOpen(false);
            handleClick();
          }}
        >
          Resume
        </NavLink>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, duration: 1.1 }}
        whileHover={{ scale: 1.2 }}
      >
        <NavLink
          to="/"
          className="hover:text-red-500"
          onClick={() => {
            setMenuOpen(false);
            handleClick();
          }}
        >
          Testimonial
        </NavLink>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, duration: 1.2 }}
        whileHover={{ scale: 1.2 }}
      >
        <NavLink
          to="/"
          className="hover:text-red-500"
          onClick={() => {
            setMenuOpen(false);
            handleClick();
          }}
        >
          Blog
        </NavLink>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, duration: 1.3 }}
        whileHover={{ scale: 1.2 }}
      >
        <NavLink
          to="/"
          className="hover:text-red-500"
          onClick={() => {
            setMenuOpen(false);
            handleClick();
          }}
        >
          Contacts
        </NavLink>
      </motion.li>
    </>
  );

  return (
    <div className="text-white relative">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/main/src/assets/Siam_20-42645-1-removebg-preview.png"
            alt="Logo"
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
          >
            {menuOpen ? <RxCross2 /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Menu for Desktop */}
        <ul className="hidden lg:flex items-center gap-7 text-lg">
          {navItems}
        </ul>

        {/* Mobile Menu */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: menuOpen ? "0%" : "-100%" }}
          transition={{ type: "spring", stiffness: 50 }}
          className={`fixed top-0 left-0 h-full w-[80%] md:w-[50%] bg-[#212529] text-white shadow-lg z-50`}
        >
          <div className="flex justify-between p-4  border-gray-700">
            {/* Profile image and description */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <img
                  src="/src/assets/Siam_20-42645-1-removebg-preview.png"
                  alt="Avatar"
                  className="w-20 h-20 rounded-full"
                />
                <button
                  onClick={() => {
                    toggleMenu();
                    handleClick();
                  }}
                  className="text-2xl text-red-500 icon-container-round focus:outline-none"
                >
                  <RxCross2 />
                </button>
              </div>
              <div>
                <p
                  className="py-2 text-gray-400"
                  style={{ wordSpacing: "3px" }}
                >
                  To achieve experience and expertise using my skills in the
                  field of Web development and utilize my skills for me and
                  companies’ overall growth.
                </p>
              </div>
            </div>
          </div>
          <hr className="border-0 mx-2 h-[1px] bg-gray-700"></hr>
          {/* Navigation links */}
          <ul className="flex flex-col items-start font-medium space-y-4 mt-6 pl-4">
            {navItems}
          </ul>
          <hr className="border-0 mt-4 mx-3 h-[1px] bg-gray-700"></hr>
          <div className="lg:pt-20 flex flex-col md:flex-row mt-6 pl-4 gap-4 md:gap-20 justify-start">
            {/* Social Media Section */}
            <div className="text-left">
              <p className="text-gray-400 uppercase text-sm">Find with me</p>
              <div className="flex my-5 gap-5  justify-start">
                <FaFacebook className="text-2xl icon-container-header p-3  social-icon" />
                <FaTwitter className="text-2xl icon-container-header p-3  social-icon" />
                <FaLinkedin className="text-2xl icon-container-header p-3  social-icon" />
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
