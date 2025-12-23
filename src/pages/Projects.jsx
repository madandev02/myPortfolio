import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiDotnet,
  SiPostgresql,
  SiSwagger,
  SiDocker,
  SiSpringboot,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import projects from "../data/projects";

// 🔹 Map tech names to icons (robust & extensible)
const techIcons = {
  React: <FaReact className="text-[#61DAFB]" />,
  "Node.js": <FaNodeJs className="text-[#3C873A]" />,
  Java: <FaJava className="text-[#E76F00]" />,
  "Spring Boot": <SiSpringboot className="text-[#6DB33F]" />,

  ".NET": <SiDotnet className="text-[#512BD4]" />,
  "ASP.NET Core": <SiDotnet className="text-[#512BD4]" />,
  "C#": <SiDotnet className="text-[#512BD4]" />, // ✅ FIX

  PostgreSQL: <SiPostgresql className="text-[#336791]" />,
  Swagger: <SiSwagger className="text-[#85EA2D]" />,
  Docker: <SiDocker className="text-[#0DB7ED]" />,

  "Tailwind CSS": <SiTailwindcss className="text-[#38BDF8]" />,
  Vite: <SiVite className="text-[#BD34FE]" />,

  Database: <FaDatabase className="text-[#9ba6b4]" />,
};

// 🔹 Individual project card
const ProjectCard = ({ title, description, tech, link, demo, image }) => (
  <div className="bg-[#161b22]/50 backdrop-blur-sm border border-[#30363d]/80 rounded-2xl overflow-hidden flex flex-col shadow-md hover:shadow-[#00c9ff]/30 hover:border-[#00c9ff]/40 transition-all duration-300 hover:-translate-y-1">
    {/* 🖼️ Image (optional) */}
    {image && (
      <div className="w-full aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    )}

    {/* 📄 Content */}
    <div className="flex flex-col justify-between flex-1 p-6">
      <div>
        <h3 className="text-xl font-semibold text-[#e6edf3] mb-3 text-center">
          {title}
        </h3>

        {/* 🔧 Tech icons */}
        <div className="flex flex-wrap justify-center gap-3 mb-4 text-xl">
          {tech.map((t, i) => (
            <span key={i} title={t}>
              {techIcons[t] || techIcons.Database}
            </span>
          ))}
        </div>

        <p className="text-[#9ba6b4] text-sm leading-relaxed text-center">
          {description}
        </p>
      </div>

      {/* 🔗 Actions */}
      <div className="mt-6 flex justify-center gap-4">
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

  const DEFAULT_COUNT = 3;
  const displayedProjects = showAll
    ? projects
    : projects.slice(0, DEFAULT_COUNT);

  return (
    <section
      id="projects"
      className="relative w-full py-28 scroll-mt-36 text-center max-w-7xl mx-auto px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,201,255,0.06)_0%,transparent_70%)] pointer-events-none"></div>

      <h2 className="text-4xl md:text-5xl font-bold mb-14 bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] bg-clip-text text-transparent relative z-10">
        Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {projects.length > DEFAULT_COUNT && (
        <div className="mt-14 relative z-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full bg-[#00c9ff] text-[#0d1117] font-medium hover:bg-[#00b2e3] transition-all duration-300 shadow-md hover:shadow-[#00c9ff]/30"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
