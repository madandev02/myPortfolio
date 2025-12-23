import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaJava,
  FaLinux,
  FaNodeJs,
  FaWindows,
} from "react-icons/fa";
import {
  SiDotnet,
  SiSpringboot,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiPostman,
  SiVite,
  SiSwagger,
  SiJest,
  SiCypress,
  SiSelenium,
  SiExpress,
  SiJenkins,
  SiIntellijidea,
  SiNextdotjs,
} from "react-icons/si";
import { DiTerminal } from "react-icons/di";

/* ================================
   Skills aligned 1:1 with CV
================================ */

const skillsByCategory = {
  Backend: [
    { icon: <SiDotnet className="text-[#512BD4]" />, label: "C# / .NET / ASP.NET Core" },
    { icon: <FaJava className="text-[#E76F00]" />, label: "Java" },
    { icon: <SiSpringboot className="text-[#6DB33F]" />, label: "Spring Boot" },
    { icon: <FaNodeJs className="text-[#3C873A]" />, label: "Node.js" },
    { icon: <SiExpress className="text-white" />, label: "Express" },
    { icon: <SiSwagger className="text-[#85EA2D]" />, label: "REST APIs / Swagger" },
    { icon: <SiSwagger className="text-[#85EA2D]" />, label: "JWT Authentication" },
  ],

  Frontend: [
    { icon: <FaHtml5 className="text-[#E44D26]" />, label: "HTML5" },
    { icon: <FaCss3Alt className="text-[#1572B6]" />, label: "CSS3" },
    { icon: <FaJs className="text-[#F7DF1E]" />, label: "JavaScript (ES6+)" },
    { icon: <SiTypescript className="text-[#3178C6]" />, label: "TypeScript" },
    { icon: <FaReact className="text-[#61DAFB]" />, label: "React" },
    { icon: <SiNextdotjs className="text-white" />, label: "Next.js" },
    { icon: <SiTailwindcss className="text-[#38BDF8]" />, label: "Tailwind CSS" },
    { icon: <SiVite className="text-[#BD34FE]" />, label: "Vite" },
  ],

  Databases: [
    { icon: <SiPostgresql className="text-[#336791]" />, label: "PostgreSQL" },
    { icon: <SiMysql className="text-[#4479A1]" />, label: "MySQL" },
    { icon: <SiMongodb className="text-[#47A248]" />, label: "MongoDB" },
    { icon: <SiRedis className="text-[#DC382D]" />, label: "Redis" },
  ],

  "QA & Testing": [
    { icon: <SiSelenium className="text-[#43B02A]" />, label: "Selenium" },
    { icon: <SiCypress className="text-[#69D3A7]" />, label: "Cypress" },
    { icon: <SiJest className="text-[#C21325]" />, label: "Jest" },
    { icon: <SiPostman className="text-[#FF6C37]" />, label: "Postman" },
    { icon: <SiSwagger className="text-[#85EA2D]" />, label: "API Testing" },
    { icon: <SiSwagger className="text-[#85EA2D]" />, label: "Functional Testing" },
  ],

  "DevOps & Cloud": [
    { icon: <SiDocker className="text-[#0DB7ED]" />, label: "Docker" },
    { icon: <SiKubernetes className="text-[#326CE5]" />, label: "Kubernetes (Concepts)" },
    { icon: <FaAws className="text-[#FF9900]" />, label: "AWS (EC2, S3, IAM)" },
    { icon: <SiJenkins className="text-[#D24939]" />, label: "Jenkins" },
  ],

  "IT Infrastructure": [
    { icon: <FaLinux className="text-[#FCC624]" />, label: "Linux" },
    { icon: <FaWindows className="text-[#00A4EF]" />, label: "Windows Server" },
    { icon: <FaWindows className="text-[#00A4EF]" />, label: "LAN / WIFI Networks" },
    { icon: <FaLinux className="text-[#9ba6b4]" />, label: "Troubleshooting" },
  ],

  Tools: [
    { icon: <FaGitAlt className="text-[#F05032]" />, label: "Git" },
    { icon: <FaGithub className="text-white" />, label: "GitHub" },
    { icon: <SiIntellijidea className="text-[#FC8019]" />, label: "IntelliJ IDEA" },
    { icon: <DiTerminal className="text-[#4EAA25]" />, label: "Linux Terminal" },

    // Tools without official icons (correct & professional)
    { icon: <span className="text-lg font-bold">VS</span>, label: "Visual Studio" },
    { icon: <span className="text-lg font-bold">VSC</span>, label: "VS Code" },
    { icon: <span className="text-lg font-bold">FG</span>, label: "Figma" },
  ],
};

export default function Skills() {
  const categories = Object.keys(skillsByCategory);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section id="skills" className="relative w-full py-24 text-[#e6edf3]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] bg-clip-text text-transparent">
          Tech Stack & Skills
        </motion.h2>

        <motion.p className="text-center text-lg text-[#9ba6b4] mb-12 max-w-3xl mx-auto">
          Full Stack Developer with a strong backend focus, combining{" "}
          <span className="text-[#512BD4]">.NET</span>,{" "}
          <span className="text-[#E76F00]">Java</span>,{" "}
          <span className="text-[#3C873A]">Node.js</span>, modern frontend
          frameworks, QA automation, and infrastructure expertise.
        </motion.p>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] text-black"
                  : "bg-[#1f2a36]/70 text-[#9ba6b4] hover:text-white hover:bg-[#00c9ff]/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skillsByCategory[activeCategory].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.05 }}
              className="flex flex-col items-center gap-2 p-5 rounded-xl bg-[#161b22]/40 border border-[#30363d]/70 hover:border-[#00c9ff]/50"
            >
              <div className="text-4xl">{skill.icon}</div>
              <span className="text-sm text-[#c9d1d9] text-center">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
