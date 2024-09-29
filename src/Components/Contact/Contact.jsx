import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [focusedField, setFocusedField] = useState(null);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    // Form validation
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      setResult("* Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setResult("Sending...");

    formData.append("access_key", "ecca78ec-7707-4f70-93c7-ead8a8be43e1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Massage Sended Successfully");
        event.target.reset();
      } else {
        setResult(data.message || "* An error occurred while submitting the form.");
      }
    } catch (error) {
      setResult("* An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { href: "https://www.facebook.com/Morshed.Siam.543", icon: FaFacebook, label: "Facebook" },
    { href: "https://github.com/MorshedSiam03", icon: FaGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/morshedsiam/", icon: FaLinkedin, label: "LinkedIn" }
  ];

  return (
    <div id="Contact" className="mt-5 py-10 px-2 lg:px-20">
      <motion.h1
        className="text-Red font-semibold text-xl text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      >
        Contact
      </motion.h1>
      <motion.h1
        className="text-4xl md:text-6xl font-semibold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }}
      >
        Contact With Me
      </motion.h1>
      <div className="flex items-center justify-center">
        <motion.div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Side - Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-lg shadow-dual lg:col-span-2 text-gray-300 group"
          >
            <div className="mb-6">
              <img
                src="/src/assets/Icon/Profile.jpg"
                alt="Profile"
                className="w-full rounded-lg grayscale-[100%] group-hover:grayscale-0"
              />
            </div>
            <h3 className="text-2xl font-bold text-white">MD. MORSHEDUL ISLAM</h3>
            <p className="text-gray-400 mb-4">Frontend Developer</p>
            <p className="mb-4">
              I am available for freelance work. Connect with me via email or call.
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +88 019 5445 6543
            </p>
            <p className="mb-8">
              <strong>Email:</strong> morshedsiam33@gmail.com
            </p>
            <div className="text-left">
              <p className="text-gray-200 uppercase text-sm">Find with me</p>
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
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-lg lg:col-span-3 shadow-dual"
          >
            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mb-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full px-4 py-3 bg-[#191b1e] border-2 text-white rounded-lg focus:outline-none 
                      ${focusedField === "name" ? "border-Red" : "border-[#191b1e]"} 
                      shadow-inner`}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    aria-label="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className={`w-full px-4 py-3 bg-[#191b1e] border-2 text-white rounded-lg focus:outline-none 
                      ${focusedField === "phone" ? "border-Red" : "border-[#191b1e]"} 
                      shadow-inner`}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    aria-label="Your Phone Number"
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
                  name="email"
                  className={`w-full px-4 py-3 bg-[#191b1e] border-2 text-white rounded-lg focus:outline-none 
                    ${focusedField === "email" ? "border-Red" : "border-[#191b1e]"} 
                    shadow-inner`}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  aria-label="Your Email Address"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={`w-full px-4 py-3 bg-[#191b1e] border-2 text-white rounded-lg focus:outline-none 
                    ${focusedField === "subject" ? "border-Red" : "border-[#191b1e]"} 
                    shadow-inner`}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  aria-label="Subject of Your Message"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`w-full h-40 px-4 py-3 bg-[#191b1e] border-2 text-white rounded-lg focus:outline-none 
                    ${focusedField === "message" ? "border-Red" : "border-[#191b1e]"} 
                    shadow-inner`}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  aria-label="Your Message"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className={`w-full py-3 shadow-dual text-white font-bold rounded-lg ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                whileHover={!isSubmitting && { scale: 1.05 }}
                whileTap={!isSubmitting && { scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
            <p className="mt-5 m-1 text-gray-400">{result}</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
