import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaLinkedin,
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

  const socialLinks = [
    { href: "https://www.facebook.com/Morshed.Siam.543", icon: FaFacebook, label: "Facebook" },
    { href: "https://github.com/MorshedSiam03", icon: FaGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/morshedsiam/", icon: FaLinkedin, label: "LinkedIn" }
  ];

  // Reusable motion component for navigation links
  const MotionNavLink = ({ to, label, scrollTo}) => (
    <motion.li
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 20}}
      whileHover={{ scale: 1.3 }}
    >
      <NavLink
        to={to}
        className="hover:text-Red"
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
      <div className="w-full z-10 fixed !bg-[#212529] shadow-md top-0 mx-auto flex justify-between items-center md:pr-8 md:pl-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <motion.img
            src="https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/refs/heads/main/src/assets/Icon/1.png"
            alt="Profile picture of Morshed Siam"
            className="w-20 h-20 md:w-24 md:h-24 mx-2 rounded-full"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 1 }}
          />
        </NavLink>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => {
              toggleMenu();
              handleClick();
            }}
            className="text-2xl text-Red focus:outline-none px-4 md:px-0"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"} // Accessibility for screen readers
          >
            {menuOpen ? <RxCross2 /> : <FaBars size={32} />}
          </button>
        </div>

        {/* Navigation Menu for Desktop */}
        <ul className="hidden lg:flex items-center gap-7 text-lg">
          <MotionNavLink to="/" label="Home"  />
          <MotionNavLink to="/" label="Technologies" scrollTo="Technologies"  />
          <MotionNavLink to="/" label="Projects" scrollTo="Projects"  />
          <MotionNavLink to="/" label="Resume" scrollTo="Resume"  />
          <MotionNavLink to="/" label="Testimonial" scrollTo="Testimonial"  />
          <MotionNavLink to="/" label="Blog" scrollTo="Blog" />
          <MotionNavLink to="/" label="Contacts" scrollTo="Contact"  />
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
                  className="text-2xl text-Red icon-container-round focus:outline-none"
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
            <MotionNavLink to="/" label="Resume" scrollTo="Resume" duration={4} />
            <MotionNavLink to="/" label="Testimonial" scrollTo="Testimonial" duration={5} />
            <MotionNavLink to="/" label="Blog" scrollTo="Blog" duration={6} />
            <MotionNavLink to="/" label="Contacts" scrollTo="Contacts" duration={7} />
          </ul>
          <hr className="border-0 mt-4 mx-3 h-[1px] bg-gray-700"></hr>
          <div className="lg:pt-20 flex flex-col md:flex-row mt-6 pl-4 gap-4 md:gap-20 justify-start">
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
