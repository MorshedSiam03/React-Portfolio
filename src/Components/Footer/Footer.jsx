import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from "framer-motion";


const Footer = () => {
    const socialLinks = [
        { href: "https://www.facebook.com/Morshed.Siam.543", icon: FaFacebook, label: "Facebook" },
        { href: "https://github.com/MorshedSiam03", icon: FaGithub, label: "GitHub" },
        { href: "https://www.linkedin.com/in/morshedsiam/", icon: FaLinkedin, label: "LinkedIn" }
      ];


  return (
    <footer className="text-gray-300 py-8">
        <hr className='mb-8 opacity-15' />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Section - Profile Image and Social Links */}
          <div className="flex flex-col items-start mb-8 md:mb-0">
            <div className="">
              {/* Profile Image */}
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img src="https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/refs/heads/main/src/assets/Icon/1.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -30 }}
                transition={{ duration: 1 }}
                className="flex my-5 ml-5 gap-5 justify-start"
              >
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="icon-container p-4 social-icon" aria-label={label} />
                  </a>
                ))}
              </motion.div>
            </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-Red mb-4">QUICK LINK</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-Red mb-4">RESOURCES</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Authentication</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">System Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Over Right</a></li>
            </ul>
          </div>

          {/* Developers Section */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-Red mb-4">DEVELOPERS</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Authentication</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Open Source</a></li>
            </ul>
          </div>
        </div>

        <hr className='mt-8 opacity-15' />

        {/* Footer Bottom */}
        <div className="text-center text-gray-400 mt-8">
          <p>© 2024. All rights reserved by Morshed Siam</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
