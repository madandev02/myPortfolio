import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import profileImg from "../assets/profile.jpg"; 

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-24 px-6 text-[#e6edf3] overflow-hidden"
    >
      {/* 🌌 Soft background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,201,255,0.06)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* 🧍 Profile Image */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#00c9ff]/30 blur-2xl"></div>
              <img
                src={profileImg}
                alt="Mauricio Narvaez"
                className="relative z-10 w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-[#30363d] shadow-lg"
              />
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              Mauricio Narvaez
            </h3>
            <p className="text-[#9ba6b4] mt-1">
              Full Stack Developer · Backend Oriented
            </p>

            <div className="mt-3 flex items-center gap-2 text-[#9ba6b4] text-sm">
              <FaMapMarkerAlt className="text-[#00c9ff]" />
              <span>Santiago, Chile</span>
            </div>
          </motion.div>

          {/* 🧠 About Text */}
          <div className="space-y-6 text-[#9ba6b4] text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              I am a <span className="text-[#e6edf3] font-medium">Full Stack Developer</span> with a strong
              backend orientation, passionate about building reliable, scalable,
              and maintainable software solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              My core experience includes{" "}
              <span className="text-[#512BD4] font-medium">.NET</span>,{" "}
              <span className="text-[#E76F00] font-medium">Java (Spring Boot)</span>, and{" "}
              <span className="text-[#3C873A] font-medium">Node.js</span>, where I
              develop REST APIs and backend services, while also working on
              full-stack applications using{" "}
              <span className="text-[#61DAFB] font-medium">React</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I also bring experience in{" "}
              <span className="text-[#92fe9d] font-medium">IT infrastructure and technical support</span>,
              which helps me understand production environments, system
              reliability, and networking. Additionally, I apply{" "}
              <span className="text-[#92fe9d] font-medium">QA and test automation</span>{" "}
              practices to ensure software quality.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I am driven by continuous learning, clean code, and collaboration,
              aiming to grow as a versatile developer while contributing real
              value to the teams and products I work with.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
