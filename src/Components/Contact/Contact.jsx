import { div } from "framer-motion/client";
import React, { useState } from "react";

const Contact = () => {
  const [focusedField, setFocusedField] = useState(null); // State to manage focused fields

  return (
    <div className="pt-32 "> 
        <h1 className="text-red-500 font-semibold text-xl text-center">Contact</h1>
        <h1 className="text-4xl md:text-6xl font-semibold text-center mb-2">Contact With Me</h1>
        <div className="flex items-center justify-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Contact Card */}
        <div className=" p-8 rounded-lg shadow-2xl text-gray-300">
          <div className="mb-6">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Profile"
              className="w-full rounded-lg"
            />
          </div>
          <h3 className="text-2xl font-bold text-white">Nevine Acotanza</h3>
          <p className="text-gray-400 mb-4">Chief Operating Officer</p>
          <p className="mb-4">
            I am available for freelance work. Connect with me via email or call.
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +012 345 678 90
          </p>
          <p className="mb-8">
            <strong>Email:</strong> admin@example.com
          </p>
          <p className="text-white uppercase font-bold mb-4">Find With Me</p>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-700 p-3 rounded-lg text-white hover:bg-gray-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="bg-gray-700 p-3 rounded-lg text-white hover:bg-gray-600">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="bg-gray-700 p-3 rounded-lg text-white hover:bg-gray-600">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className=" p-8 rounded-lg shadow-2xl">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none 
                  ${focusedField === 'name' ? 'border-2 border-red-500' : 'border-transparent'}`}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  className={`w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none 
                  ${focusedField === 'phone' ? 'border-2 border-red-500' : 'border-transparent'}`}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none 
                ${focusedField === 'email' ? 'border-2 border-red-500' : 'border-transparent'}`}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className={`w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none 
                ${focusedField === 'subject' ? 'border-2 border-red-500' : 'border-transparent'}`}
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField(null)}
                placeholder="Enter the subject"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                className={`w-full h-32 px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none 
                ${focusedField === 'message' ? 'border-2 border-red-500' : 'border-transparent'}`}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
