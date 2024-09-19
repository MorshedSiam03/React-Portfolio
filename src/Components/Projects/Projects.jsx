import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  // Data for all projects to avoid repetition
  const projects = [
    {
      title: "Car Doctor",
      imageSrc: "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/refs/heads/main/src/assets/Project-Thumnail/CarDoctorPC.png",
      clientLink: "https://github.com/MorshedSiam03/Car-Doctor",
      serverLink: "https://github.com/MorshedSiam03/Car-Doctor-Server",
      liveDemoLink: "https://car-doctor-tau-steel.vercel.app",
      description:
        'Car Doctor is a web application designed to streamline the process of browsing and purchasing car-related products and services. The platform allows users to explore a wide range of automotive products, book appointments for car services, and manage their orders efficiently. The application emphasizes user experience with a clean and responsive design, ensuring easy navigation and accessibility across various devices.',
      techStack: [
        {
          name: "React JS",
          iconSrc: "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/64347c38b259c79f7999c93cfd3700d74ac06e12/src/assets/Icon/react.svg",
          bgColor: "text-cyan-300 bg-blue-700",
        },
        {
          name: "Node JS",
          iconSrc: "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/64347c38b259c79f7999c93cfd3700d74ac06e12/src/assets/Icon/nodejs.svg",
          bgColor: "text-green-300 bg-green-700",
        },
        {
          name: "Firebase",
          iconSrc: "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/64347c38b259c79f7999c93cfd3700d74ac06e12/src/assets/Icon/firebase.svg",
          bgColor: "text-yellow-400 bg-yellow-400",
        },
        {
          name: "Tailwind CSS",
          iconSrc: "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/64347c38b259c79f7999c93cfd3700d74ac06e12/src/assets/Icon/tailwind-css.svg",
          bgColor: "text-cyan-300 bg-blue-500",
        },
        {
          name: "MongoDB",
          iconSrc: "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/64347c38b259c79f7999c93cfd3700d74ac06e12/src/assets/Icon/mongodb-icon-1.svg",
          bgColor: "text-green-500 bg-green-900",
        },
      ],
    },
    {
      title: "BackPackers",
      imageSrc: "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/refs/heads/main/src/assets/Project-Thumnail/BackPackers.png",
      clientLink: "https://github.com/rubel5/gpu-hunt-client",
      serverLink: "https://github.com/rubel5/gpu-hunt-server",
      liveDemoLink: "https://gpuhunt-93470.web.app/",
      description:
        '"GPUHunt is an online secondhand market where people can advertise their products. It has three roles and each role has separate dashboards and access to the API."',
      techStack: [
        {
          name: "React JS",
          iconSrc: "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/64347c38b259c79f7999c93cfd3700d74ac06e12/src/assets/Icon/react.svg",
          bgColor: "text-cyan-300 bg-blue-700",
        },
        {
          name: "Firebase",
          iconSrc: "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/64347c38b259c79f7999c93cfd3700d74ac06e12/src/assets/Icon/firebase.svg",
          bgColor: "text-yellow-400 bg-yellow-400",
        },
        {
          name: "Tailwind CSS",
          iconSrc: "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/64347c38b259c79f7999c93cfd3700d74ac06e12/src/assets/Icon/tailwind-css.svg",
          bgColor: "text-cyan-300 bg-blue-500",
        },
      ],
    },
    {
      title: "FurniFlex",
      imageSrc: "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/refs/heads/main/src/assets/Project-Thumnail/FurniFlex.png",
      clientLink: "https://github.com/MorshedSiam03/FurniFlex",
      serverLink: "https://github.com/MorshedSiam03/FurniFlex-Server",
      liveDemoLink: "https://furni-flex-snowy.vercel.app/",
      description:
        '"GPUHunt is an online secondhand market where people can advertise their products. It has three roles and each role has separate dashboards and access to the API."',
      techStack: [
        {
          name: "React JS",
          iconSrc: "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/64347c38b259c79f7999c93cfd3700d74ac06e12/src/assets/Icon/react.svg",
          bgColor: "text-cyan-300 bg-blue-700",
        },
        {
          name: "Node JS",
          iconSrc: "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/64347c38b259c79f7999c93cfd3700d74ac06e12/src/assets/Icon/nodejs.svg",
          bgColor: "text-green-300 bg-green-700",
        },
        {
          name: "Firebase",
          iconSrc: "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/64347c38b259c79f7999c93cfd3700d74ac06e12/src/assets/Icon/firebase.svg",
          bgColor: "text-yellow-400 bg-yellow-400",
        },
        {
          name: "Tailwind CSS",
          iconSrc: "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/64347c38b259c79f7999c93cfd3700d74ac06e12/src/assets/Icon/tailwind-css.svg",
          bgColor: "text-cyan-300 bg-blue-500",
        },
        {
          name: "MongoDB",
          iconSrc: "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/64347c38b259c79f7999c93cfd3700d74ac06e12/src/assets/Icon/mongodb-icon-1.svg",
          bgColor: "text-green-500 bg-green-900",
        },
      ],
    },
    {
      title: "BookShop",
      imageSrc: "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/refs/heads/main/src/assets/Project-Thumnail/BookShop.png",
      clientLink: "https://github.com/rubel5/gpu-hunt-client",
      serverLink: "https://github.com/rubel5/gpu-hunt-server",
      liveDemoLink: "https://gpuhunt-93470.web.app/",
      description:
        '"GPUHunt is an online secondhand market where people can advertise their products. It has three roles and each role has separate dashboards and access to the API."',
      techStack: [
        {
          name: "React JS",
          iconSrc: "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/64347c38b259c79f7999c93cfd3700d74ac06e12/src/assets/Icon/react.svg",
          bgColor: "text-cyan-300 bg-blue-700",
        },
        {
          name: "Tailwind CSS",
          iconSrc: "https://raw.githubusercontent.com/MorshedSiam03/React-Portfolio/64347c38b259c79f7999c93cfd3700d74ac06e12/src/assets/Icon/tailwind-css.svg",
          bgColor: "text-cyan-300 bg-blue-500",
        },
      ],
    },
  ];

  return (
    <div id="Projects" className="relative scroll-mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column: Heading and First 2 Projects */}
        <div className="flex flex-col gap-10">
          {/* Heading Section with sticky position */}
          <div className="top-0">
            <h2 className="text-2xl text-red-500 font-bold">Projects</h2>
            <h2 className="text-5xl my-2 font-bold">All Creative Works</h2>
            <p className="text-lg text-text-secondary">
              Here's some of my projects that I have worked on.
            </p>
            {/* <div className="text-primary-color flex items-center gap-1">
              <span>Explore More</span>
            </div> */}
          </div>

          {/* First 2 Projects */}
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Right Column: Next 2 Projects */}
        <div className="flex flex-col gap-10">
          {projects.slice(2, 4).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
