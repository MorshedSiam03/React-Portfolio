import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper modules
import { Pagination, Navigation } from "swiper/modules";

// Import icons
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    name: "Nevine Acotanza",
    role: "Chief Operating Officer",
    company: "Rainbow-Themes",
    image: "/src/assets/Siam_20-42645-1-removebg-preview.png",
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
    image: "/src/assets/Siam_20-42645-1-removebg-preview.png",
    review: "Another amazing testimonial!",
    project: "Website Development",
    date: "Jan 10, 2019 - Dec 20, 2020",
    rating: 4,
  },
];

const Testimonial = () => {
  return (
    <div className="pt-20 pb-20 relative">
      <div className="text-center">
        <p className="text-Red uppercase tracking-wide">What clients say</p>
        <h2 className="text-5xl font-bold">Testimonial</h2>
      </div>

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
            <div className="flex justify-center items-center px-40 py-5">
              {/* Left Section - Image and Details */}
              <div className="p-5 rounded-xl text-left shadow-dual">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-60 h-46 mx-auto mb-6"
                />
                <p className="text-Red uppercase tracking-wide">
                  {testimonial.company}
                </p>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>

              {/* Right Section - Testimonial Card */}
              <div className="p-8 rounded-xl ml-8 w-2/3 shadow-dual relative">
                <h4 className="text-2xl font-semibold">
                  {testimonial.project}
                </h4>
                <p className="text-gray-500 mt-2">
                  via {testimonial.company} - {testimonial.date}
                </p>

                <p className="text-gray-400 mt-6">{testimonial.review}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Buttons */}
        <div className="absolute top-12 transform -translate-y-1/2 right-60 z-10">
          <button className="custom-prev  p-5 rounded-md shadow-dual hover:bg-gray-700 transition-all">
            <FaArrowLeft  className="text-white" />
          </button>
        </div>
        <div className="absolute top-12 transform -translate-y-1/2 right-40 z-10">
          <button className="custom-next p-5 rounded-md shadow-dual hover:bg-gray-700 transition-all">
          <FaArrowRight className="text-white"/>
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
