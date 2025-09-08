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
  { icon: <FaHtml5 className="text-orange-500" />, label: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS" },
  { icon: <FaJs className="text-yellow-400" />, label: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, label: "React" },
  { icon: <SiAngular className="text-red-600" />, label: "Angular" }, // ✅ Angular agregado
  { icon: <SiTailwindcss className="text-cyan-500" />, label: "Tailwind CSS" },
  { icon: <SiMongodb className="text-green-600" />, label: "MongoDB" },
  { icon: <SiExpress className="text-gray-700" />, label: "Express" },
  { icon: <FaJava className="text-red-600" />, label: "Java" },
  { icon: <FaPython className="text-blue-400" />, label: "Python" },
  { icon: <FaReact className="text-purple-600" />, label: "React Native" },
  { icon: <SiFlutter className="text-sky-400" />, label: "Flutter" },
  { icon: <SiKotlin className="text-orange-400" />, label: "Kotlin" },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-20">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Título */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Languages & Tools
        </h2>

        {/* Grid de Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 rounded-xl border border-gray-200/60 backdrop-blur-sm bg-white/20 hover:bg-white/30 hover:border-gray-300/80 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-gray-800">
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
