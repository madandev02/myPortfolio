import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaLinux,
  FaPython
} from "react-icons/fa";

import {
  SiSpringboot,
  SiTypescript,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiFlutter,
  SiRust,
  SiCplusplus,
  SiPostman,
  SiKotlin
} from "react-icons/si";

import { DiTerminal } from "react-icons/di";

const skillsByCategory = {

  Backend: [
    { icon: <FaJava className="text-[#f89820]" />, label: "Java" },
    { icon: <SiSpringboot className="text-[#6DB33F]" />, label: "Spring Boot" },
    { icon: <FaNodeJs className="text-[#3C873A]" />, label: "Node.js" },
    { icon: <SiExpress className="text-white" />, label: "Express.js" },
    { icon: <SiTypescript className="text-[#3178C6]" />, label: "TypeScript" },
    { icon: <span className="text-xs font-bold text-cyan-400">API</span>, label: "REST APIs" },
    { icon: <span className="text-xs font-bold text-green-400">JWT</span>, label: "JWT Auth" }
  ],

  Frontend: [
    { icon: <FaHtml5 className="text-[#E44D26]" />, label: "HTML" },
    { icon: <FaCss3Alt className="text-[#1572B6]" />, label: "CSS" },
    { icon: <FaJs className="text-[#F7DF1E]" />, label: "JavaScript" },
    { icon: <FaReact className="text-[#61DAFB]" />, label: "React" },
    { icon: <SiNextdotjs className="text-white" />, label: "Next.js" },
    { icon: <SiTailwindcss className="text-[#38BDF8]" />, label: "Tailwind" },
    { icon: <SiVite className="text-[#BD34FE]" />, label: "Vite" }
  ],

  Databases: [
    { icon: <SiPostgresql className="text-[#336791]" />, label: "PostgreSQL" },
    { icon: <SiMysql className="text-[#4479A1]" />, label: "MySQL" },
    { icon: <SiMongodb className="text-[#47A248]" />, label: "MongoDB" }
  ],

  "DevOps / Infra": [
    { icon: <SiDocker className="text-[#0DB7ED]" />, label: "Docker" },
    { icon: <FaAws className="text-[#FF9900]" />, label: "AWS" },
    { icon: <FaLinux className="text-[#FCC624]" />, label: "Linux" },
    { icon: <FaGitAlt className="text-[#F05032]" />, label: "Git" },
    { icon: <FaGithub className="text-white" />, label: "GitHub" }
  ],

  Tools: [
    { icon: <SiPostman className="text-[#FF6C37]" />, label: "Postman" },
    { icon: <span className="text-xs font-bold text-orange-400">TC</span>, label: "Thunder Client" },
    { icon: <DiTerminal className="text-green-400" />, label: "Terminal" }
  ],

  Mobile: [
    { icon: <SiFlutter className="text-[#02569B]" />, label: "Flutter" },
    { icon: <SiKotlin className="text-[#7F52FF]" />, label: "Kotlin" }
  ],

  Systems: [
    { icon: <FaPython className="text-[#3776AB]" />, label: "Python" },
    { icon: <SiRust className="text-[#DEA584]" />, label: "Rust" },
    { icon: <SiCplusplus className="text-[#00599C]" />, label: "C++" }
  ]

};

export default function Skills() {

  const categories = Object.keys(skillsByCategory);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (

    <section id="skills" className="relative py-32 text-[#e6edf3] overflow-hidden">

      {/* background glow */}

      <div className="absolute left-1/2 top-40 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full -z-10"/>

      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent"
        >
          Tech Stack
        </motion.h2>

        <p className="text-center text-[#9ba6b4] max-w-3xl mx-auto mb-16">
          Fullstack developer focused on backend systems with Java & Spring Boot,
          modern frontend with React / Next.js and cloud-native applications.
        </p>

        {/* category tabs */}

        <div className="flex flex-wrap justify-center gap-3 mb-14">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === category
                  ? "text-white"
                  : "text-[#9ba6b4] hover:text-white"
              }`}
            >

              {activeCategory === category && (
                <motion.span
                  layoutId="activeSkillTab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-green-400/20 border border-cyan-400/40"
                />
              )}

              <span className="relative z-10">{category}</span>

            </button>

          ))}

        </div>

        {/* skills grid */}

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >

          {skillsByCategory[activeCategory].map((skill, i) => (

            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.04 }}
              className="group relative flex flex-col items-center gap-4 p-7 rounded-2xl bg-[#161b22]/60 border border-[#30363d] backdrop-blur-lg transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_15px_40px_rgba(0,201,255,0.2)]"
            >

              {/* glow */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-cyan-400/10 to-green-400/10 blur-xl rounded-2xl -z-10"/>

              {/* icon */}

              <div className="text-3xl">
                {skill.icon}
              </div>

              <span className="text-sm text-[#c9d1d9] text-center">
                {skill.label}
              </span>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>

  );

}