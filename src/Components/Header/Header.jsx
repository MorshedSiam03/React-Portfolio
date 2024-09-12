import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = (
    <>
      <motion.li
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness:300, duration: 0.7 }}
        whileHover={{ scale: 1.2 }}
      >
        <NavLink
          exact
          to="/"
          className={({ isActive }) => (isActive ? "text-red-500" : "hover:text-red-500")}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{type: 'spring', stiffness:300, duration: 0.8 }}
        whileHover={{ scale: 1.2 }}
      >
        <NavLink
          to="/Features"
          className={({ isActive }) => (isActive ? "text-red-500" : "hover:text-red-500")}
          onClick={() => setMenuOpen(false)}
        >
          Features
        </NavLink>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{type: 'spring', stiffness:300, duration: 0.9 }}
        whileHover={{ scale: 1.2 }}
      >
        <NavLink
          to="/Portfolio"
          className={({ isActive }) => (isActive ? "text-red-500" : "hover:text-red-500")}
          onClick={() => setMenuOpen(false)}
        >
          Portfolio
        </NavLink>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{type: 'spring', stiffness:300, duration: 1 }}
        whileHover={{ scale: 1.2 }}
      >
        <NavLink
          to="/Resume"
          className={({ isActive }) => (isActive ? "text-red-500" : "hover:text-red-500")}
          onClick={() => setMenuOpen(false)}
        >
          Resume
        </NavLink>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{type: 'spring', stiffness:300, duration: 1.1 }}
        whileHover={{ scale: 1.2 }}
      >
        <NavLink
          to="/Testimonial"
          className={({ isActive }) => (isActive ? "text-red-500" : "hover:text-red-500")}
          onClick={() => setMenuOpen(false)}
        >
          Testimonial
        </NavLink>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{type: 'spring', stiffness:300, duration: 1.2 }}
        whileHover={{ scale: 1.2 }}
      >
        <NavLink
          to="/Blog"
          className={({ isActive }) => (isActive ? "text-red-500" : "hover:text-red-500")}
          onClick={() => setMenuOpen(false)}
        >
          Blog
        </NavLink>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{type: 'spring', stiffness:300, duration: 1.3 }}
        whileHover={{ scale: 1.2 }}
      >
        <NavLink
          to="/Contacts"
          className={({ isActive }) => (isActive ? "text-red-500" : "hover:text-red-500")}
          onClick={() => setMenuOpen(false)}
        >
          Contacts
        </NavLink>
      </motion.li>
    </>
  );

  return (
    <div className="text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="/src/assets/Siam_20-42645-1-removebg-preview.png"
            alt="Logo"
            className="w-16 h-16 mx-2 rounded-full"
          />
          <span className="ml-2 text-xl font-semibold">Morshed Siam</span>
        </NavLink>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none px-4 md:px-0">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Menu for Desktop */}
        <ul className="hidden lg:flex items-center gap-5 text-lg">
          {navItems}
        </ul>

        {/* Mobile Menu */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: menuOpen ? '0%' : '-100%' }}
          transition={{ type: 'spring', stiffness: 80 }}
          className={`fixed top-0 left-0 h-full w-[45vh] md:w-[60vh] bg-gray-900 text-white shadow-lg`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            {/* Profile image and description */}
            <div className="flex items-center space-x-2">
              <img
                src="/src/assets/Siam_20-42645-1-removebg-preview.png"
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-sm font-medium">Inbio is an all-in-one personal portfolio WordPress theme. You can customize everything.</p>
              </div>
            </div>

            {/* Close button */}
            <button onClick={toggleMenu} className="text-2xl focus:outline-none">
              <FaTimes />
            </button>
          </div>

          {/* Navigation links */}
          <ul className="flex flex-col items-start space-y-4 mt-6 pl-4">
            {navItems}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
