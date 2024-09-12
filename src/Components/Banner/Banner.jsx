import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaSketch,
  FaFigma,
} from "react-icons/fa";
import { SiInvision } from "react-icons/si";
import { TypeAnimation } from "react-type-animation"; // Import the TypeAnimation component
import profileImg from "/src/assets/Siam_20-42645-1-removebg-preview.png"; // Import profile image
import "./style.css";

const Banner = () => {
  return (
    <div className=""> {/* Ensure background color or styling for the banner */}
      <div className="text-white lg:py-10 px-2">
        <div className="container md:mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Left Column - Text Content */}
          <div className="lg:w-2/3 text-left">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
              Welcome to my world
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="text-red-500">MD. MORSHEDUL ISLAM</span>
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
            <p className="text-gray-300 my-8 lg:pr-60 text-sm sm:text-base">
              I use animation as a third dimension by which to simplify
              experiences and guide through every interaction. I’m not adding
              motion just to spruce things up, but doing it in ways that are
              meaningful.
            </p>

            {/* Social Media Links */}
            <div className="lg:pt-20 flex flex-col md:flex-row gap-4 md:gap-20 justify-start">
              {/* Social Media Section */}
              <div className="text-left">
                <p className="text-gray-400 uppercase text-sm">Find with me</p>
                <div className="flex my-5 gap-5  justify-start">
                  <FaFacebook className="text-2xl icon-container p-3  social-icon" />
                  <FaTwitter className="text-2xl icon-container p-3  social-icon" />
                  <FaLinkedin className="text-2xl icon-container p-3  social-icon" />
                </div>
              </div>

              {/* Best Skills Section */}
              <div className="text-left">
                <p className="text-gray-400 uppercase text-sm">Best Skill On</p>
                <div className="flex my-5 gap-5 justify-start">
                  <SiInvision className="text-2xl icon-container p-3  social-icon" />
                  <FaSketch className="text-2xl icon-container p-3  social-icon" />
                  <FaFigma className="text-2xl icon-container p-3  social-icon" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mb-5">
            <div className="relative max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]"> {/* Adjust image container size */}
              <img
                src={profileImg}
                alt="Profile"
                className="rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-0 h-[1px] bg-gray-700"></hr> {/* Change color to make it visible on dark backgrounds */}
    </div>
  );
};

export default Banner;
