import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

// Project card component
const ProjectCard = ({ title, description, link, demo, image }) => (
  <div className="bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
    
    {/* Project image container */}
    <div className="w-full aspect-[16/10] overflow-hidden"> 
      <img
        src={image}
        alt={`${title} preview`}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    {/* Project details */}
    <div className="flex flex-col justify-between flex-1 p-6">
      {/* Title and description */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed text-center">
          {description}
        </p>
      </div>

      {/* Action buttons - centered */}
      <div className="mt-5 flex justify-center gap-4">
        {/* GitHub button */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-sm hover:bg-gray-800 transition shadow-sm"
          >
            <FaGithub /> GitHub
          </a>
        )}

        {/* Live Demo button */}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-sm hover:bg-blue-700 transition shadow-sm"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Number of projects to show initially
  const DEFAULT_COUNT = 3;

  // Decide which projects to display
  const displayedProjects = showAll ? projects : projects.slice(0, DEFAULT_COUNT);

  return (
    <section
      id="projects"
      className="w-full py-20 text-center max-w-7xl mx-auto px-6 relative z-10"
    >
      {/* Section title */}
      <h2 className="text-4xl font-bold mb-12 text-gray-900">Projects</h2>

      {/* Projects grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* Show More button */}
      {projects.length > DEFAULT_COUNT && (
        <div className="mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full bg-blue-600 text-white text-base hover:bg-blue-700 transition shadow-md"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
