import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaSketch, FaFigma } from 'react-icons/fa';
import { SiInvision } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation'; // Import the TypeAnimation component
import profileImg from '/src/assets/Siam_20-42645-1-removebg-preview.png'; // Import profile image
import './style.css'

const Banner = () => {
  return (
    <div className="text-white p-4 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Column - Text Content */}
        <div className="lg:w-2/3 text-center lg:text-left ">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Welcome to my world</p>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-red-500">MD. MORSHEDUL ISLAM</span><br />
            {/* TypeAnimation for dynamic role changes */}
            <TypeAnimation
              sequence={[
                'a Software Engineer', 2000,
                'a Web Developer', 2000,
                'a Frontend Specialist', 2000,
                'a Fullstack Developer', 2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-300 mb-6 lg:pr-60">
            I use animation as a third dimension by which to simplify experiences and guide through every interaction. I’m not adding motion just to spruce things up, but doing it in ways that are meaningful.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
            <p className="text-gray-400 uppercase text-sm">Find with me</p>
            <FaFacebook className="text-2xl hover:text-red-500 social-icon" />
            <FaTwitter className="text-2xl hover:text-red-500 social-icon" />
            <FaLinkedin className="text-2xl hover:text-red-500 social-icon" />
          </div>

          {/* Best Skills Section */}
          <div className="flex items-center justify-center lg:justify-start space-x-4">
            <p className="text-gray-400 uppercase text-sm">Best Skill On</p>
            <SiInvision className="text-2xl hover:text-red-500 social-icon" />
            <FaSketch className="text-2xl hover:text-red-500 social-icon" />
            <FaFigma className="text-2xl hover:text-red-500 social-icon" />
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="rounded-md lg:max-w-screen flex justify-center lg:justify-end mt-10 lg:mt-0">
          <img
            src={profileImg}
            alt="Profile"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
