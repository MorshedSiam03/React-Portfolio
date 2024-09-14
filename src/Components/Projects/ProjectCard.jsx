import React from 'react';
import { CiServer } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, imageSrc, clientLink, serverLink, liveDemoLink, description, techStack }) => {
    return (
        <div className="rounded-xl border-border-color border bg-cardColor overflow-hidden group">
      <img
        alt={title}
        loading="lazy"
        className="object-cover grayscale-[100%] group-hover:grayscale-0 transition-all duration-300"
        src={imageSrc}
      />
      <div className="p-4">
        <div className="flex justify-between flex-col sm:flex-row items-center">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex gap-4 py-4 items-center">
            <a href={clientLink} className="text-white" aria-label="Github Client">
              <FiGithub size={22} />
            </a>
            <a href={serverLink} className="text-white" aria-label="Github Server">
              <CiServer size={30} />
            </a>
            <a href={liveDemoLink} className="text-white" aria-label="Live Demo">
              <FaExternalLinkAlt size={20} />
            </a>
            <Link className="px-4 py-2 bg-primary text-white rounded-lg">Details</Link>
          </div>
        </div>
        <div className="flex items-center my-2 mb-4 flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <h1 key={index} className={`flex gap-1 text-[10px] ${tech.bgColor} bg-opacity-25 rounded-[3px] p-1 px-2`}>
              <img src={tech.iconSrc} className="w-3" alt={tech.name} /> {tech.name}
            </h1>
          ))}
        </div>
        <p className="text-light my-2">{description}</p>
      </div>
    </div>
    );
};

export default ProjectCard;