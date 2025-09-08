import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Content */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-xl"></div>
            <img
              src={profile}
              alt="Mauricio Narvaez"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg relative z-10 border-4 border-white"
            />
          </div>

          {/* Text */}
          <div className="text-gray-700 text-left max-w-lg">
            <p className="mb-4 leading-relaxed">
              I'm a passionate <span className="font-semibold text-gray-900">Frontend Developer</span> focused on
              building modern, responsive, and user-friendly web applications using{" "}
              <span className="text-blue-600 font-semibold">React</span> and{" "}
              <span className="text-cyan-500 font-semibold">Tailwind CSS</span>.
            </p>
            <p className="mb-4 leading-relaxed">
              Currently, I'm expanding my skills into backend development with technologies like{" "}
              <span className="font-semibold">Node.js</span>,{" "}
              <span className="font-semibold">Express</span>,{" "}
              <span className="font-semibold">Java</span>, and databases such as{" "}
              <span className="font-semibold">MongoDB</span>.  
              My goal is to transition into a fullstack role and build scalable, high-quality applications.
            </p>
            <p className="leading-relaxed">
              I strive to create clean, efficient, and visually appealing solutions that provide real value to users.
            </p>

            {/* Social Links */}
            <div className="flex gap-6 mt-6">
              <a
                href="https://github.com/madandev02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-600 transition text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mnarvv/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-600 transition text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
