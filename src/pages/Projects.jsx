import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
  FaReact,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiDocker,
  SiSpringboot,
  SiTailwindcss,
  SiVite,
  SiNextdotjs,
} from "react-icons/si";

import projects from "../data/projects";

const techIcons = {
  React: <FaReact className="text-[#61DAFB]" />,
  "Node.js": <FaNodeJs className="text-[#3C873A]" />,
  Java: <FaJava className="text-[#E76F00]" />,
  "Spring Boot": <SiSpringboot className="text-[#6DB33F]" />,
  PostgreSQL: <SiPostgresql className="text-[#336791]" />,
  Nextjs: <SiNextdotjs className="text-white" />,
  Docker: <SiDocker className="text-[#0DB7ED]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#38BDF8]" />,
  Vite: <SiVite className="text-[#646CFF]" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const ProjectCard = ({ title, description, tech, link, demo, image }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -6 }}
    className="group flex flex-col w-full bg-[#161b22]/40 backdrop-blur-md border border-[#30363d] rounded-2xl overflow-hidden hover:border-[#00c9ff]/40 transition-all duration-300 shadow-xl"
  >
    {/* IMAGE */}
    {image && (
      <div className="relative w-full aspect-video overflow-hidden border-b border-[#30363d] bg-black">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition duration-500" />
      </div>
    )}

    <div className="p-6 flex flex-col flex-1">
      {/* TITLE */}
      <h3 className="text-2xl font-bold tracking-tight text-white mb-3 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#00c9ff] group-hover:to-[#92fe9d] group-hover:bg-clip-text group-hover:text-transparent">
        {title}
      </h3>

      {/* DESCRIPTION (FULL TEXT SIN CORTES) */}
      <p className="text-[#8b949e] text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* TECH */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tech.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0d1117] border border-[#30363d] text-[10px] font-bold uppercase tracking-wider text-[#e6edf3]"
          >
            {techIcons[t] || null} {t}
          </span>
        ))}
      </div>

      {/* ACTIONS */}
      <div className="mt-auto flex items-center gap-3">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#161b22] border border-[#30363d] text-[#8b949e] hover:text-[#00c9ff] hover:border-[#00c9ff] hover:shadow-[0_0_15px_rgba(0,201,255,0.2)] transition-all duration-300"
          >
            <FaGithub size={18} />
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161b22] border border-[#30363d] text-[#8b949e] text-[11px] font-bold tracking-tight hover:text-white hover:border-[#00c9ff]/50 hover:bg-[#00c9ff]/10 hover:shadow-[0_0_20px_rgba(0,201,255,0.15)] transition-all duration-300 active:scale-95"
          >
            Live Preview <FaExternalLinkAlt size={10} />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const DEFAULT_COUNT = 3;

  const displayedProjects = showAll
    ? projects
    : projects.slice(0, DEFAULT_COUNT);

  return (
    <section className="relative w-full py-24 max-w-7xl mx-auto px-6 font-sans">
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00c9ff]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] bg-clip-text text-transparent mb-4">
          Projects
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] mx-auto rounded-full opacity-40" />
      </div>

      <motion.div
        key={showAll ? "expanded" : "collapsed"}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {projects.length > DEFAULT_COUNT && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2.5 px-8 py-3 rounded-full border border-[#30363d] text-[12px] font-bold tracking-tight text-[#8b949e] hover:border-[#00c9ff] hover:text-[#00c9ff] bg-[#0d1117] hover:shadow-[0_0_25px_rgba(0,201,255,0.2)] transition-all duration-300 active:scale-95"
          >
            {showAll ? (
              <>
                Show Less <FaChevronUp size={12} />
              </>
            ) : (
              <>
                Show More <FaChevronDown size={12} />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;