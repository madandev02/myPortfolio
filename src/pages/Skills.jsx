import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaAws,
  FaDatabase,
  FaFigma,
  FaJava,
  FaLinux,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiPostman,
  SiVite,
  SiTypescript,
  SiSpringboot,
  SiSwagger,
  SiKubernetes,
  SiRedis,
  SiGraphql,
  SiJest,
  SiCypress,
  SiTerraform,
  SiJenkins,
} from "react-icons/si";
import { DiTerminal } from "react-icons/di";

const skillsByCategory = {
  "Modern Frontend": [
    { icon: <FaHtml5 className="text-[#E44D26]" />, label: "HTML5" },
    { icon: <FaCss3Alt className="text-[#1572B6]" />, label: "CSS3" },
    { icon: <FaJs className="text-[#F7DF1E]" />, label: "JavaScript" },
    { icon: <SiTypescript className="text-[#3178C6]" />, label: "TypeScript" },
    { icon: <FaReact className="text-[#61DAFB]" />, label: "React.js" },
    { icon: <SiNextdotjs className="text-white" />, label: "Next.js" },
    { icon: <SiTailwindcss className="text-[#38BDF8]" />, label: "Tailwind CSS" },
    { icon: <SiVite className="text-[#BD34FE]" />, label: "Vite" },
  ],

  "JavaScript Backend": [
    { icon: <FaNodeJs className="text-[#68A063]" />, label: "Node.js" },
    { icon: <SiExpress className="text-white" />, label: "Express.js" },
    { icon: <SiMongodb className="text-[#4DB33D]" />, label: "MongoDB" },
    { icon: <SiRedis className="text-[#DC382D]" />, label: "Redis" },
    { icon: <SiGraphql className="text-[#E10098]" />, label: "GraphQL" },
    { icon: <SiPostgresql className="text-[#336791]" />, label: "PostgreSQL" },
  ],

  "Java Backend": [
    { icon: <FaJava className="text-[#E76F00]" />, label: "Java" },
    { icon: <SiSpringboot className="text-[#6DB33F]" />, label: "Spring Boot" },
    { icon: <SiPostgresql className="text-[#336791]" />, label: "PostgreSQL" },
    { icon: <FaDatabase className="text-[#336791]" />, label: "JPA/Hibernate" },
  ],

  "DevOps & Cloud": [
    { icon: <SiDocker className="text-[#0DB7ED]" />, label: "Docker" },
    { icon: <SiKubernetes className="text-[#326CE5]" />, label: "Kubernetes" },
    { icon: <FaAws className="text-[#FF9900]" />, label: "AWS" },
    { icon: <SiTerraform className="text-[#7B42BC]" />, label: "Terraform" },
    { icon: <SiJenkins className="text-[#D24939]" />, label: "Jenkins" },
  ],

  "Testing & Quality": [
    { icon: <SiJest className="text-[#C21325]" />, label: "Jest" },
    { icon: <SiCypress className="text-[#69D3A7]" />, label: "Cypress" },
    { icon: <SiSwagger className="text-[#85EA2D]" />, label: "Swagger" },
  ],

  "Tools & Others": [
    { icon: <FaGitAlt className="text-[#F05032]" />, label: "Git" },
    { icon: <FaGithub className="text-white" />, label: "GitHub" },
    { icon: <SiPostman className="text-[#FF6C37]" />, label: "Postman" },
    { icon: <FaFigma className="text-[#A259FF]" />, label: "Figma" },
    { icon: <FaLinux className="text-[#FCC624]" />, label: "Linux" },
    { icon: <DiTerminal className="text-[#4EAA25]" />, label: "Terminal" },
  ],
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(Object.keys(skillsByCategory)[0]);

  return (
    <section id="skills" className="relative w-full py-24 text-[#e6edf3] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,201,255,0.08)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,201,255,0.4)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tech Stack & Skills
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-center text-lg text-[#9ba6b4] mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Full-Stack Developer specialized in <span className="text-[#00c9ff]">JavaScript</span> and <span className="text-[#E76F00]">Java</span>. 
          Modern stack with enterprise technologies.
        </motion.p>

        {/* Category Buttons */}
        <div className="flex justify-center mb-10 gap-3 flex-wrap">
          {Object.keys(skillsByCategory).map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 backdrop-blur-sm ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] text-black shadow-[0_0_20px_rgba(0,201,255,0.6)]"
                  : "bg-[#1f2a36]/70 text-[#9ba6b4] hover:text-white hover:bg-[#00c9ff]/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skillsByCategory[activeCategory].map((skill, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center p-4 rounded-2xl border border-[#1f2a36]/70 bg-[#161b22]/40 backdrop-blur-sm hover:bg-[#1c2128]/80 hover:border-[#00c9ff]/40 shadow-md hover:shadow-[#00c9ff]/40 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(0,201,255,0.3)]">
                {skill.icon}
              </div>
              <span className="text-xs font-medium text-[#9ba6b4] group-hover:text-[#00c9ff] transition-colors duration-300 text-center">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Full Stack Summary */}
        <motion.div 
          className="mt-16 p-6 rounded-2xl bg-[#1f2a36]/40 border border-[#00c9ff]/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xl font-bold text-center mb-4 text-[#00c9ff]">
            🚀 Full-Stack Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[#9ba6b4]">
            <div>
              <h4 className="font-semibold text-[#00c9ff] mb-2">Frontend</h4>
              <p>React, Next.js, TypeScript, Tailwind</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#00c9ff] mb-2">Backend</h4>
              <p>Node.js, Spring Boot, Java, REST/GraphQL</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#00c9ff] mb-2">Infrastructure</h4>
              <p>Docker, Kubernetes, AWS, CI/CD</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}