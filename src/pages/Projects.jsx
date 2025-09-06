import { useState } from "react";
import projects from "../data/projects";

const ProjectCard = ({ title, description, link, demo, video, image }) => (
  <div className="border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col">
    {/* Image of project */}
    {image && (
      <div className="w-full h-40 overflow-hidden">
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    )}

    {/* Text y button */}
    <div className="flex flex-col justify-between flex-1 p-4">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View on GitHub →
        </a>

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            Live Demo →
          </a>
        )}

        {video && (
          <a
            href={video}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:underline"
          >
            Watch Video →
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const DEFAULT_COUNT = 6;
  const displayedProjects = showAll ? projects : projects.slice(0, DEFAULT_COUNT);

  return (
    <section id="projects" className="w-full py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {projects.length > DEFAULT_COUNT && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
};

export default Projects;
