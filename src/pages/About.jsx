import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCode, FaServer, FaMobileAlt } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-28 px-6 text-[#e6edf3] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,201,255,0.06)_0%,transparent_70%)]"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Title */}

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Profile */}

          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-[#00c9ff]/30 blur-3xl"></div>

              <img
                src={profileImg}
                alt="Mauricio Narvaez"
                className="relative w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-[#30363d]"
              />

            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              Mauricio Narvaez
            </h3>

            <p className="text-[#9ba6b4]">
              Fullstack Java Developer
            </p>

            <div className="mt-2 flex items-center gap-2 text-[#9ba6b4] text-sm">
              <FaMapMarkerAlt className="text-[#00c9ff]" />
              Santiago, Chile
            </div>

            {/* Core Stack */}

            <div className="mt-6 flex flex-wrap justify-center gap-2">

              {["Java","Spring Boot","React","Next.js","PostgreSQL","Docker"].map((tech)=>(
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-[#161b22] border border-[#30363d]"
                >
                  {tech}
                </span>
              ))}

            </div>

          </motion.div>

          {/* Text Content */}

          <div className="space-y-8">

            <p className="text-lg text-[#9ba6b4] leading-relaxed">
              I am a <span className="text-white font-medium">Fullstack Java Developer</span> focused on building scalable backend systems and modern web applications using clean architecture and production ready technologies.
            </p>

            <p className="text-lg text-[#9ba6b4] leading-relaxed">
              My core stack includes <span className="text-orange-400">Java</span>, <span className="text-orange-400">Spring Boot</span>, <span className="text-cyan-400">React</span> and <span className="text-gray-200">Next.js</span>, where I develop REST APIs and fullstack applications connected to relational and NoSQL databases.
            </p>

            {/* Highlights */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">

              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#161b22] border border-[#30363d]">

                <FaServer className="text-2xl text-[#00c9ff]" />

                <h4 className="mt-2 font-semibold">
                  Backend Focus
                </h4>

                <p className="text-sm text-[#9ba6b4]">
                  Java & Spring Boot APIs
                </p>

              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#161b22] border border-[#30363d]">

                <FaCode className="text-2xl text-[#92fe9d]" />

                <h4 className="mt-2 font-semibold">
                  Fullstack Apps
                </h4>

                <p className="text-sm text-[#9ba6b4]">
                  React & Next.js
                </p>

              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#161b22] border border-[#30363d]">

                <FaMobileAlt className="text-2xl text-[#00c9ff]" />

                <h4 className="mt-2 font-semibold">
                  Mobile
                </h4>

                <p className="text-sm text-[#9ba6b4]">
                  Flutter &
                  Kotlin
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;