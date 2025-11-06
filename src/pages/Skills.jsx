import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaAws,
  FaDatabase,
  FaFigma,
  FaJava,
  FaLinux,
  FaBrain,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiJupyter,
  SiApacheairflow,
  SiPostman,
  SiVite,
  SiFirebase,
  SiTypescript,
  SiRedux,
  SiFastapi,
  SiKubernetes,
  SiGooglecloud,
  SiGraphql,
  SiPrisma,
  SiNestjs,
  SiTerraform,
  SiJenkins,
  SiRedis,
  SiNginx,
  SiSupabase,
  SiSwagger,
} from "react-icons/si";
import { DiTerminal } from "react-icons/di";


const skillsByCategory = {
  Frontend: [
    { icon: <FaHtml5 className="text-[#E44D26]" />, label: "HTML5" },
    { icon: <FaCss3Alt className="text-[#1572B6]" />, label: "CSS3" },
    { icon: <FaJs className="text-[#F7DF1E]" />, label: "JavaScript" },
    { icon: <SiTypescript className="text-[#3178C6]" />, label: "TypeScript" },
    { icon: <FaReact className="text-[#61DAFB]" />, label: "React.js" },
    { icon: <SiNextdotjs className="text-white" />, label: "Next.js" },
    { icon: <SiRedux className="text-[#764ABC]" />, label: "Redux Toolkit" },
    { icon: <SiTailwindcss className="text-[#38BDF8]" />, label: "TailwindCSS" },
    { icon: <SiBootstrap className="text-[#7952B3]" />, label: "Bootstrap" },
  ],

  "Backend / Fullstack": [
    { icon: <FaNodeJs className="text-[#68A063]" />, label: "Node.js" },
    { icon: <SiNestjs className="text-[#E0234E]" />, label: "NestJS" },
    { icon: <SiExpress className="text-white" />, label: "Express.js" },
    { icon: <SiFastapi className="text-[#05998B]" />, label: "FastAPI" },
    { icon: <FaPython className="text-[#3776AB]" />, label: "Python" },
    { icon: <SiGraphql className="text-[#E535AB]" />, label: "GraphQL" },
    { icon: <SiPrisma className="text-[#2D3748]" />, label: "Prisma ORM" },
    { icon: <SiMongodb className="text-[#4DB33D]" />, label: "MongoDB" },
    { icon: <SiPostgresql className="text-[#336791]" />, label: "PostgreSQL" },
    { icon: <SiMysql className="text-[#00618A]" />, label: "MySQL" },
    { icon: <SiRedis className="text-[#D82C20]" />, label: "Redis" },
    { icon: <SiSupabase className="text-[#3ECF8E]" />, label: "Supabase" },
  ],

  "Data / ML / IA": [
    { icon: <FaPython className="text-[#3776AB]" />, label: "Python" },
    { icon: <SiPandas className="text-[#150458]" />, label: "Pandas" },
    { icon: <SiNumpy className="text-[#4DABCF]" />, label: "NumPy" },
    { icon: <SiScikitlearn className="text-[#F89939]" />, label: "Scikit-learn" },
    { icon: <SiTensorflow className="text-[#FF6F00]" />, label: "TensorFlow" },
    { icon: <SiPytorch className="text-[#EE4C2C]" />, label: "PyTorch" },
    { icon: <SiJupyter className="text-[#F37726]" />, label: "Jupyter Notebook" },
    { icon: <SiApacheairflow className="text-[#017CEE]" />, label: "Apache Airflow" },
    { icon: <FaBrain className="text-[#00C9FF]" />, label: "Deep Learning / AI" },
  ],

  "DevOps / Cloud": [
    { icon: <SiDocker className="text-[#0DB7ED]" />, label: "Docker" },
    { icon: <SiKubernetes className="text-[#326CE5]" />, label: "Kubernetes" },
    { icon: <SiTerraform className="text-[#844FBA]" />, label: "Terraform" },
    { icon: <SiJenkins className="text-[#D24939]" />, label: "Jenkins" },
    { icon: <SiNginx className="text-[#009639]" />, label: "Nginx" },
    { icon: <FaAws className="text-[#FF9900]" />, label: "AWS" },
    { icon: <SiGooglecloud className="text-[#4285F4]" />, label: "Google Cloud" },
    { icon: <FaGitAlt className="text-[#F05032]" />, label: "Git" },
    { icon: <FaGithub className="text-white" />, label: "GitHub" },
  ],

  "Tools & Others": [
    { icon: <SiPostman className="text-[#FF6C37]" />, label: "Postman" },
    { icon: <SiVite className="text-[#BD34FE]" />, label: "Vite" },
    { icon: <SiFirebase className="text-[#FFCA28]" />, label: "Firebase" },
    { icon: <FaFigma className="text-[#A259FF]" />, label: "Figma" },
    { icon: <FaLinux className="text-[#FCC624]" />, label: "Linux" },
    { icon: <SiSwagger className="text-[#85EA2D]" />, label: "Swagger" },
    { icon: <DiTerminal className="text-[#4EAA25]" />, label: "Bash / CLI" }, // Cambiado SiBash por DiTerminal
    { icon: <FaJava className="text-[#E76F00]" />, label: "Java (OOP)" },
  ],
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(Object.keys(skillsByCategory)[0]);

  return (
    <section id="skills" className="relative w-full py-24 text-[#e6edf3] overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,201,255,0.08)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Título */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,201,255,0.4)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Tools
        </motion.h2>

        {/* Botones */}
        <div className="flex justify-center mb-10 gap-4 flex-wrap">
          {Object.keys(skillsByCategory).map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm ${
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

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skillsByCategory[activeCategory].map((skill, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center p-5 rounded-2xl border border-[#1f2a36]/70 bg-[#161b22]/40 backdrop-blur-sm hover:bg-[#1c2128]/80 hover:border-[#00c9ff]/40 shadow-md hover:shadow-[#00c9ff]/40 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(0,201,255,0.3)]">
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-[#9ba6b4] group-hover:text-[#00c9ff] transition-colors duration-300">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
