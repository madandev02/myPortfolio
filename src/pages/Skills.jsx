import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiFlutter,
  SiKotlin,
  SiTailwindcss,
  SiAngular,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-[#e44d26]" />, label: "HTML" },
  { icon: <FaCss3Alt className="text-[#1572b6]" />, label: "CSS" },
  { icon: <FaJs className="text-[#f7df1e]" />, label: "JavaScript" },
  { icon: <FaReact className="text-[#61dafb]" />, label: "React" },
  { icon: <SiAngular className="text-[#dd0031]" />, label: "Angular" },
  { icon: <SiTailwindcss className="text-[#38bdf8]" />, label: "Tailwind CSS" },
  { icon: <SiMongodb className="text-[#4db33d]" />, label: "MongoDB" },
  { icon: <SiExpress className="text-[#ffffff]" />, label: "Express" },
  { icon: <FaJava className="text-[#e51f24]" />, label: "Java" },
  { icon: <FaPython className="text-[#3776ab]" />, label: "Python" },
  { icon: <FaReact className="text-[#8b5cf6]" />, label: "React Native" },
  { icon: <SiFlutter className="text-[#46d1fd]" />, label: "Flutter" },
  { icon: <SiKotlin className="text-[#f18e33]" />, label: "Kotlin" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full py-24 text-[#e6edf3] overflow-hidden"
    >
      {/* --- Subtle background glow --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,201,255,0.06)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* --- Section Title --- */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,201,255,0.4)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Languages & Tools
        </motion.h2>

        {/* --- Skills Grid --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-5 rounded-2xl border border-[#1f2a36]/70 bg-[#161b22]/40 backdrop-blur-sm hover:bg-[#1c2128]/70 hover:border-[#00c9ff]/50 shadow-lg hover:shadow-[#00c9ff]/30 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              {/* --- Icon --- */}
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(0,201,255,0.3)]">
                {skill.icon}
              </div>

              {/* --- Skill Label --- */}
              <span className="text-sm font-medium text-[#9ba6b4] group-hover:text-[#00c9ff] transition-colors duration-300">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
