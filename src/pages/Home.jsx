import { motion } from "framer-motion";

import {
  FaGithub,
  FaEnvelope,
  FaJava,
  FaDocker,
  FaReact
} from "react-icons/fa";

import {
  SiSpringboot,
  SiNextdotjs,
  SiPostgresql
} from "react-icons/si";

import { HiDocumentText } from "react-icons/hi";

const techStack = [
  { name: "Java", icon: <FaJava className="text-red-400" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-300" /> }
];

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center text-center gap-12 py-24"
    >

      {/* Background glow */}

      <div className="absolute w-[650px] h-[650px] bg-cyan-500/20 blur-[140px] rounded-full -z-10" />

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 py-2 text-sm border border-[#30363d] rounded-full text-[#9ba6b4] backdrop-blur-md"
      >
        FULLSTACK JAVA DEVELOPER
      </motion.div>

      {/* Title */}

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl"
      >
        Building modern web applications with{" "}
        <span className="bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] bg-clip-text text-transparent">
          Java & React
        </span>
      </motion.h1>

      {/* Subtitle */}

      <p className="text-lg md:text-xl text-[#9ba6b4] max-w-2xl">
        I'm <span className="text-white font-medium">Mauricio Narvaez</span>, a
        fullstack developer focused on building scalable backend systems with{" "}
        <span className="text-orange-400">Spring Boot</span> and modern
        frontends using <span className="text-cyan-400">React</span>.
      </p>

      {/* Tech stack */}

      <div className="flex flex-wrap justify-center gap-4">

        {techStack.map((tech) => (
          <motion.div
            key={tech.name}
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-2 px-4 py-2 bg-[#161b22]/70 border border-[#30363d] rounded-lg text-sm backdrop-blur-md hover:border-cyan-400 transition"
          >
            {tech.icon}
            {tech.name}
          </motion.div>
        ))}

      </div>

      {/* Code card */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mt-4"
      >

        <div className="absolute inset-0 bg-cyan-500/10 blur-2xl rounded-xl"></div>

        <div className="relative bg-[#161b22]/90 border border-[#30363d] rounded-xl p-6 text-left font-mono text-sm text-[#9ba6b4] max-w-xl shadow-xl">

          <span className="text-cyan-400">const</span>{" "}
          <span className="text-white">developer</span> = {"{"}

          <br />

          &nbsp;&nbsp;<span className="text-purple-400">name</span>:{" "}
          <span className="text-green-400">"Mauricio Narvaez"</span>,

          <br />

          &nbsp;&nbsp;<span className="text-purple-400">role</span>:{" "}
          <span className="text-green-400">"Fullstack Java Developer"</span>,

          <br />

          &nbsp;&nbsp;<span className="text-purple-400">stack</span>: [
          <span className="text-green-400">
            "Java","Spring Boot","React","Next.js"
          </span>
          ],

          <br />

          &nbsp;&nbsp;<span className="text-purple-400">location</span>:{" "}
          <span className="text-green-400">"Santiago, Chile"</span>

          <br />

          {"}"};

        </div>

      </motion.div>

      {/* Buttons */}

      <div className="flex flex-wrap justify-center gap-6 pt-4">

        <a
          href="https://github.com/madandev02"
          target="_blank"
          className="flex items-center gap-2 px-6 py-3 border border-[#30363d] rounded-full hover:bg-[#161b22] hover:border-[#00c9ff] transition"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="/CV_Mauricio_Narvaez.pdf"
          target="_blank"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00c9ff] to-[#00ffa3] text-black rounded-full font-medium hover:scale-105 transition"
        >
          <HiDocumentText />
          Resume
        </a>

        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-3 bg-[#00ffa3] text-black rounded-full font-medium hover:scale-105 transition"
        >
          <FaEnvelope />
          Contact
        </a>

      </div>

    </section>
  );
};

export default Home;