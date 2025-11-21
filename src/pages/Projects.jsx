import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

// 🔹 Individual project card component
const ProjectCard = ({ title, description, link, demo, image }) => (
  <div className="bg-[#161b22]/50 backdrop-blur-sm border border-[#30363d]/80 rounded-2xl overflow-hidden flex flex-col shadow-md hover:shadow-[#00c9ff]/30 hover:border-[#00c9ff]/40 transition-all duration-300 hover:-translate-y-1">
    {/* 🖼️ Project image */}
    <div className="w-full aspect-[16/10] overflow-hidden">
      <img
        src={image}
        alt={`${title} preview`}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>

    {/* 📄 Project details */}
    <div className="flex flex-col justify-between flex-1 p-6">
      <div>
        <h3 className="text-xl font-semibold text-[#e6edf3] mb-2 text-center">
          {title}
        </h3>
        <p className="text-[#9ba6b4] text-sm leading-relaxed text-center">
          {description}
        </p>
      </div>

      {/* 🔗 Action buttons */}
      <div className="mt-6 flex justify-center gap-4">
        {/* GitHub */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full text-sm text-[#e6edf3] border border-[#30363d]/80 hover:border-[#00c9ff] hover:text-[#00c9ff] transition-all duration-300"
          >
            <FaGithub className="text-lg" /> GitHub
          </a>
        )}

        {/* Live Demo */}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full text-sm bg-[#00c9ff] text-[#0d1117] font-medium hover:bg-[#00b2e3] transition-all duration-300 shadow-md hover:shadow-[#00c9ff]/30"
          >
            <FaExternalLinkAlt className="text-base" /> Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const DEFAULT_COUNT = 3; // 🔸 Number of projects shown by default
  const displayedProjects = showAll
    ? projects
    : projects.slice(0, DEFAULT_COUNT);

  return (
    <section
      id="projects"
      className="relative w-full py-28 scroll-mt-36 text-center max-w-7xl mx-auto px-6 overflow-hidden"
    >
      {/* 💫 Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,201,255,0.06)_0%,transparent_70%)] pointer-events-none"></div>

      {/* 🧠 Section title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-14 bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,201,255,0.4)] relative z-10">
        Proyectos
      </h2>

      {/* 🧱 Projects grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* 🔘 Show More / Show Less button */}
      {projects.length > DEFAULT_COUNT && (
        <div className="mt-14 relative z-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full bg-[#00c9ff] text-[#0d1117] font-medium hover:bg-[#00b2e3] transition-all duration-300 shadow-md hover:shadow-[#00c9ff]/30"
          >
            {showAll ? "Mostrar menos" : "Mostrar más"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
