import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  // Data for all projects to avoid repetition
  const projects = [
    {
      title: "Car Doctor",
      imageSrc: "/src/assets/Project-Thumnail/CarDoctorPC.png",
      clientLink: "https://github.com/rubel5/gpu-hunt-client",
      serverLink: "https://github.com/rubel5/gpu-hunt-server",
      liveDemoLink: "https://gpuhunt-93470.web.app/",
      description:
        '"GPUHunt is an online secondhand market where people can advertise their products. It has three roles and each role has separate dashboards and access to the API."',
      techStack: [
        {
          name: "React JS",
          iconSrc: "/src/assets/Icon/react.svg",
          bgColor: "text-cyan-300 bg-blue-950",
        },
        {
          name: "Node JS",
          iconSrc: "/src/assets/Icon/nodejs.svg",
          bgColor: "text-green-300 bg-green-700",
        },
        {
          name: "Firebase",
          iconSrc: "/src/assets/Icon/firebase.svg",
          bgColor: "text-yellow-400 bg-yellow-400",
        },
        {
          name: "Tailwind CSS",
          iconSrc: "/src/assets/Icon/tailwind-css.svg",
          bgColor: "text-cyan-300 bg-blue-500",
        },
        {
          name: "MongoDB",
          iconSrc: "/src/assets/Icon/mongodb-icon-1.svg",
          bgColor: "text-green-500 bg-green-900",
        },
      ],
    },
    {
      title: "BackPackers",
      imageSrc: "/src/assets/Project-Thumnail/BackPackers.png",
      clientLink: "https://github.com/rubel5/gpu-hunt-client",
      serverLink: "https://github.com/rubel5/gpu-hunt-server",
      liveDemoLink: "https://gpuhunt-93470.web.app/",
      description:
        '"GPUHunt is an online secondhand market where people can advertise their products. It has three roles and each role has separate dashboards and access to the API."',
      techStack: [
        {
          name: "React JS",
          iconSrc: "/src/assets/Icon/react.svg",
          bgColor: "text-cyan-300 bg-blue-950",
        },
        {
          name: "Node JS",
          iconSrc: "/src/assets/Icon/nodejs.svg",
          bgColor: "text-green-300 bg-green-700",
        },
      ],
    },
    {
      title: "FurniFlex",
      imageSrc: "/src/assets/Project-Thumnail/FurniFlex.png",
      clientLink: "https://github.com/rubel5/gpu-hunt-client",
      serverLink: "https://github.com/rubel5/gpu-hunt-server",
      liveDemoLink: "https://gpuhunt-93470.web.app/",
      description:
        '"GPUHunt is an online secondhand market where people can advertise their products. It has three roles and each role has separate dashboards and access to the API."',
      techStack: [
        {
          name: "React JS",
          iconSrc: "/src/assets/Icon/react.svg",
          bgColor: "text-cyan-300 bg-blue-950",
        },
        {
          name: "Firebase",
          iconSrc: "/src/assets/Icon/firebase.svg",
          bgColor: "text-yellow-400 bg-yellow-400",
        },
      ],
    },
    {
      title: "BookShop",
      imageSrc: "/src/assets/Project-Thumnail/BookShop.png",
      clientLink: "https://github.com/rubel5/gpu-hunt-client",
      serverLink: "https://github.com/rubel5/gpu-hunt-server",
      liveDemoLink: "https://gpuhunt-93470.web.app/",
      description:
        '"GPUHunt is an online secondhand market where people can advertise their products. It has three roles and each role has separate dashboards and access to the API."',
      techStack: [
        {
          name: "React JS",
          iconSrc: "/src/assets/Icon/react.svg",
          bgColor: "text-cyan-300 bg-blue-950",
        },
        {
          name: "Tailwind CSS",
          iconSrc: "/src/assets/Icon/tailwind-css.svg",
          bgColor: "text-cyan-300 bg-blue-500",
        },
      ],
    },
  ];

  return (
    <div id="projects" className="relative scroll-mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column: Heading and First 2 Projects */}
        <div className="flex flex-col gap-10">
          {/* Heading Section with sticky position */}
          <div className="top-0">
            <h2 className="text-2xl font-bold">🚀 All Creative Works.</h2>
            <p className="text-lg text-text-secondary">
              Here's some of my projects that I have worked on.
            </p>
            <div className="text-primary-color flex items-center gap-1">
              <span>Explore More</span>
            </div>
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
