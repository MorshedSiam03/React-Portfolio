import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [focusedField, setFocusedField] = useState(null); // State to manage focused fields

  // Animation variants for smoother appearance
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="pt-32">
      <motion.h1
        className="text-Red font-semibold text-xl text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      >
        Contact
      </motion.h1>
      <motion.h1
        className="text-4xl md:text-6xl font-semibold text-center mb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }}
      >
        Contact With Me
      </motion.h1>
      <div className="flex items-center justify-center">
        <motion.div
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          {/* Left Side - Contact Card */}
          <motion.div className="p-8 rounded-lg shadow-dual text-gray-300 ">
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
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div className="p-8 rounded-lg shadow-dual ">
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
                    ${focusedField === 'name' ? 'border-2 border-Red' : 'border-transparent'}`}
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
                    ${focusedField === 'phone' ? 'border-2 border-Red' : 'border-transparent'}`}
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
                  ${focusedField === 'email' ? 'border-2 border-Red' : 'border-transparent'}`}
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
                  ${focusedField === 'subject' ? 'border-2 border-Red' : 'border-transparent'}`}
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
                  ${focusedField === 'message' ? 'border-2 border-Red' : 'border-transparent'}`}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 shadow-dual text-white font-bold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
