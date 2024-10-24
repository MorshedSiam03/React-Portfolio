import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper modules
import { Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
// Import icons
import {
  FaArrowLeft,
  FaArrowRight,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    name: "Nevine Acotanza",
    role: "Chief Operating Officer",
    company: "Rainbow-Themes",
    image:
      "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/refs/heads/main/src/assets/Siam_20-42645-1-removebg-preview.png",
    review: "This is a great testimonial!",
    project: "Android App Development",
    date: "Mar 4, 2015 - Aug 30, 2021",
    rating: 5,
  },
  {
    id: 2,
    name: "John Doe",
    role: "Software Engineer",
    company: "Google",
    image:
      "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/refs/heads/main/src/assets/Siam_20-42645-1-removebg-preview.png",
    review: "Another amazing testimonial!",
    project: "Website Development",
    date: "Jan 10, 2019 - Dec 20, 2020",
    rating: 4,
  },
];

// Star rating function
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
      {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FaRegStar key={index} className="text-yellow-500" />
        ))}
    </div>
  );
};

const Testimonial = () => {
  return (
    <div id="Testimonial" className="pt-20 pb-16 scroll-mt-10 relative">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <p className="text-Red uppercase tracking-wide">What clients say</p>
        <h2 className="text-5xl font-bold">Testimonial</h2>
      </motion.div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mt-10"
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="md:flex justify-center px-2 lg:px-40 mb-8 py-10">
              {/* Left Section - Image and Details */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="p-5 rounded-xl md:w-1/3 text-left shadow-dual"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mx-auto mb-6"
                />
                <p className="text-Red uppercase tracking-wide">
                  {testimonial.company}
                </p>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-400">{testimonial.role}</p>
              </motion.div>

              {/* Right Section - Testimonial Card */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 1 }}
                className="md:w-2/3"
              >
                <img
                  src="https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/refs/heads/main/src/assets/Icon/quote.png"
                  className="mx-4 w-32 hidden md:block opacity-65"
                  alt=""
                />
                <div className="p-8 rounded-xl md:ml-8 mt-5 min-h-60 shadow-dual relative">
                  <div className="lg:flex items-center">
                    <div>
                      <h4 className="text-2xl font-semibold">
                        {testimonial.project}
                      </h4>
                      <p className="text-gray-500 mt-2">
                        via {testimonial.company} - {testimonial.date}
                      </p>
                    </div>
                    <div className="absolute lg:right-8 my-2 lg:my-0 shadow-dual p-3 rounded-md">
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                  <hr className="mt-16 lg:mt-5 opacity-15" />
                  <p className="text-gray-400 mt-6">{testimonial.review}</p>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Buttons */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 1 }}
          className="absolute top-12 hidden md:block transform -translate-y-1/2 right-20 lg:right-60 z-10"
        >
          <button className="custom-prev  p-5 rounded-md shadow-dual hover:bg-gray-700 transition-all">
            <FaArrowLeft className="text-white" />
          </button>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 1 }}
          className="absolute top-12 hidden md:block  transform -translate-y-1/2 right-2 lg:right-40 z-10"
        >
          <button className="custom-next p-5 rounded-md shadow-dual hover:bg-gray-700 transition-all">
            <FaArrowRight className="text-white" />
          </button>
        </motion.div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
