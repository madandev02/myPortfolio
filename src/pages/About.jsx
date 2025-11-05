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
              I'm a{" "}
              <span className="font-semibold text-[#e6edf3]">
                Fullstack Developer
              </span>{" "}
              with{" "}
              <span className="font-semibold text-[#00c9ff]">2+ years of experience</span>{" "}
              building efficient, responsive, and high-quality web applications.
              My focus is to create seamless user experiences through modern
              technologies and clean architecture.
            </p>

            {/* AI and Data Engineering focus */}
            <p className="mb-4 leading-relaxed text-[#9ba6b4]">
              Beyond web development, I'm deeply interested in{" "}
              <span className="font-semibold text-[#00c9ff]">
                Artificial Intelligence
              </span>
              ,{" "}
              <span className="font-semibold text-[#00c9ff]">
                Data Engineering
              </span>
              , and{" "}
              <span className="font-semibold text-[#00c9ff]">
                Machine Learning
              </span>
              . I enjoy exploring how data-driven systems and automation can
              enhance products and improve decision-making.
            </p>

            {/* Current stack */}
            <p className="mb-4 leading-relaxed text-[#9ba6b4]">
              I work mainly with{" "}
              <span className="font-semibold text-[#e6edf3]">
                React, Node.js, and MongoDB
              </span>
              , combining them with{" "}
              <span className="font-semibold text-[#00c9ff]">
                Python, Pandas, and TensorFlow
              </span>{" "}
              for intelligent solutions that merge web and AI.
            </p>

            {/* Personal statement */}
            <p className="leading-relaxed text-[#9ba6b4]">
              My mission is to merge creativity with technology — delivering
              impactful, scalable solutions while continuously learning and
              pushing boundaries.
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
