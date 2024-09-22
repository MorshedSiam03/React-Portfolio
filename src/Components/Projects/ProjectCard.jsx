import React, { useState } from "react";
import { CiServer } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectCard = ({
  title,
  imageSrc,
  clientLink,
  serverLink,
  liveDemoLink,
  description,
  techStack,
}) => {
  const [isExpanded, setIsExpanded] = useState(false); // Track whether the description is expanded

  // Toggle between full and truncated description
  const toggleDescription = () => setIsExpanded(!isExpanded);

  // Function to render tech stack badges
  const renderTechStack = (stack) =>
    stack.map((tech, index) => (
      <span
        key={index}
        className={`flex gap-1 text-[10px] ${tech.bgColor} bg-opacity-25 rounded-[3px] p-1 px-2`}
      >
        <img src={tech.iconSrc} className="w-3" alt={tech.name} /> {tech.name}
      </span>
    ));

  // Truncate description if not expanded
  const truncatedDescription =
    description.length > 250 && !isExpanded
      ? `${description.slice(0, 250)}...`
      : description;

  return (
    <div className="rounded-xl border-border-color border bg-cardColor overflow-hidden group">
      {/* Project Image */}
      <img
        alt={title}
        loading="lazy"
        className="object-cover grayscale-[100%] group-hover:grayscale-0 transition-all duration-300"
        src={imageSrc}
      />
      <div className="p-4">
        {/* Title and Links */}
        <div className="flex justify-between flex-col sm:flex-row items-center">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex gap-4 py-4 items-center">
            <a
              href={clientLink}
              className="text-white"
              aria-label="Github Client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size={22} />
            </a>
            <a
              href={serverLink}
              className="text-white"
              aria-label="Github Server"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiServer size={30} />
            </a>
            <a
              href={liveDemoLink}
              className="text-white"
              aria-label="Live Demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt size={20} />
            </a>
            <Link to="/" className="px-4 py-2 bg-primary text-white rounded-lg">
                Details
            </Link>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex items-center my-2 mb-4 flex-wrap gap-2">
          {renderTechStack(techStack)}
        </div>

        {/* Description with 'See more' functionality */}
        <p className="text-light text-justify my-2">
          {truncatedDescription}
          {description.length > 250 && (
            <span
              onClick={toggleDescription}
              className="text-primary underline cursor-pointer ml-1"
            >
              {isExpanded ? "See less" : "See more"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
