import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-24 relative z-10 bg-transparent text-[#e6edf3]"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* --- Section Title --- */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-14 bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* --- Content Wrapper --- */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* --- Profile Image with Glow --- */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#00c9ff]/40 blur-2xl"></div>
            <img
              src={profile}
              alt="Mauricio Narvaez"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg relative z-10 border-4 border-[#1f6feb]"
            />
          </div>

          {/* --- Text Content --- */}
          <div className="text-left max-w-xl">
            {/* Intro paragraph */}
            <p className="mb-4 leading-relaxed text-[#9ba6b4]">
              I'm a passionate{" "}
              <span className="font-semibold text-[#e6edf3]">
                Full-Stack Developer
              </span>{" "}
              currently mastering a dual-stack approach with{" "}
              <span className="font-semibold text-[#00c9ff]">JavaScript/TypeScript</span>{" "}
              and <span className="font-semibold text-[#E76F00]">Java</span>. 
              I'm focused on building scalable, high-performance web applications 
              using modern technologies and clean architecture principles.
            </p>

            {/* Learning journey */}
            <p className="mb-4 leading-relaxed text-[#9ba6b4]">
              My current learning path includes advanced{" "}
              <span className="font-semibold text-[#00c9ff]">
                React & Next.js
              </span>
              , enterprise-level{" "}
              <span className="font-semibold text-[#00c9ff]">
                Spring Boot
              </span>
              , and modern{" "}
              <span className="font-semibold text-[#00c9ff]">
                DevOps practices
              </span>
              . I believe in continuous learning and staying updated with industry trends.
            </p>

            {/* Current stack */}
            <p className="mb-4 leading-relaxed text-[#9ba6b4]">
              I specialize in the{" "}
              <span className="font-semibold text-[#e6edf3]">
                MERN stack (MongoDB, Express, React, Node.js)
              </span>
              {" "}while expanding into{" "}
              <span className="font-semibold text-[#00c9ff]">
                Java Spring Boot for backend systems
              </span>
              . I'm also exploring cloud technologies and containerization with Docker and Kubernetes.
            </p>

            {/* Career goals */}
            <p className="leading-relaxed text-[#9ba6b4]">
              My goal is to become a versatile developer capable of tackling complex challenges 
              across different tech stacks, contributing to both startup innovation and enterprise solutions.
            </p>

            {/* --- Location Info --- */}
            <motion.div
              className="mt-6 flex items-center gap-3 bg-[#161b22] border border-[#30363d] rounded-xl px-4 py-3 shadow-md"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <FaMapMarkerAlt className="text-[#00c9ff] text-lg" />
              <span className="text-[#e6edf3] font-medium">
                Based in{" "}
                <span className="text-[#00c9ff] font-semibold">
                  Santiago, Chile
                </span>{" "}
                🌍
              </span>
            </motion.div>

            {/* --- Social Links --- */}
            <div className="flex gap-6 mt-8">
              <a
                href="https://github.com/madandev02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9ba6b4] hover:text-[#00c9ff] transition text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mnarvv/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9ba6b4] hover:text-[#00c9ff] transition text-2xl"
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