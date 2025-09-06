import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava,
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiFlutter, SiKotlin, SiTailwindcss
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-orange-600" />, label: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS" },
  { icon: <FaJs className="text-yellow-400" />, label: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, label: "React" },
    { icon: <SiTailwindcss className="text-cyan-500" />, label: "Tailwind" },
  { icon: <SiMongodb className="text-green-600" />, label: "MongoDB" },
  { icon: <SiExpress className="text-black" />, label: "Express" },
  { icon: <FaJava className="text-red-700" />, label: "Java" },
  { icon: <FaPython className="text-blue-400" />, label: "Python" },
  { icon: <FaReact className="text-violet-600" />, label: "React Native" },
];

const Skills = () => {
  return (
    <section id="skills" className="text-center w-full py-20">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-4xl mb-2">{skill.icon}</div>
            <span className="text-sm">{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
