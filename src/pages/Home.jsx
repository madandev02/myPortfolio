import { useState, useEffect } from "react";
import { FaGithub, FaFileAlt, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const availabilityMessages = [
  "👨‍💻 Open to Full-Time Opportunities",
  "🌍 Available for Remote & Hybrid Work",
  "🚀 Building Scalable Full-Stack Applications",
  "🧠 Backend-Oriented Developer (.NET / Java / Node)",
  "🧪 Experience with QA & Automated Testing",
];

const Home = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex(
        (prev) => (prev + 1) % availabilityMessages.length
      );
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="home"
      className="relative flex flex-col items-center justify-center text-center min-h-[100vh] w-full text-[#e6edf3] overflow-hidden"
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* 🌌 Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,201,255,0.08)_0%,transparent_65%)] pointer-events-none"></div>

      {/* 🔹 Role Badge (polivalente) */}
      <motion.div
        className="mb-6 px-5 py-1.5 rounded-full bg-[#161b22]/70 border border-[#30363d]/60 backdrop-blur-sm text-sm tracking-wide text-[#9ba6b4]"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        FULL STACK DEVELOPER · BACKEND ORIENTED
      </motion.div>

      {/* --- Main Title --- */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.8 }}
      >
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] bg-clip-text text-transparent">
          Mauricio Narvaez
        </span>
      </motion.h1>

      {/* --- Availability Badge --- */}
      <motion.div
        className="flex items-center gap-2 bg-[#161b22]/70 border border-[#30363d]/60 px-4 py-1 rounded-full mb-8 shadow-sm backdrop-blur-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ff88]"></span>
        </span>

        <div className="overflow-hidden h-5">
          <AnimatePresence mode="wait">
            <motion.span
              key={availabilityMessages[currentMessageIndex]}
              className="text-[#00ff88] text-sm font-medium block"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {availabilityMessages[currentMessageIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* --- Subtitle (clave estratégica) --- */}
      <motion.h2
        className="text-base sm:text-lg md:text-xl text-[#9ba6b4] mb-12 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.8 }}
      >
        Full Stack Developer with a strong backend orientation, experienced in{" "}
        <span className="text-[#512BD4] font-medium">.NET</span>,{" "}
        <span className="text-[#E76F00] font-medium">Java (Spring Boot)</span> and{" "}
        <span className="text-[#3C873A] font-medium">Node.js</span>. Skilled in
        building REST APIs, scalable web applications, and applying QA and
        infrastructure best practices.
      </motion.h2>

      {/* --- Developer Code Block --- */}
      <motion.div
        className="border border-[#21262d]/60 backdrop-blur-sm bg-[#161b22]/40 rounded-2xl p-6 text-left font-mono text-sm text-[#9ba6b4] w-full max-w-lg mb-12 shadow-[0_0_16px_#00c9ff25]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.8 }}
      >
        <p className="text-[#00c9ff] mb-1">const developer = &#123;</p>
        <div className="ml-5">
          <p>
            name: <span className="text-[#92fe9d]">'Mauricio Narvaez'</span>,
          </p>
          <p>
            role:{" "}
            <span className="text-[#92fe9d]">'Full Stack Developer'</span>,
          </p>
          <p>
            backend:{" "}
            <span className="text-[#92fe9d]">
              ['.NET', 'Spring Boot', 'Node.js']
            </span>
            ,
          </p>
          <p>
            frontend:{" "}
            <span className="text-[#92fe9d]">
              ['React', 'TypeScript', 'Tailwind']
            </span>
            ,
          </p>
          <p>
            extras:{" "}
            <span className="text-[#92fe9d]">
              ['QA Automation', 'Docker', 'Linux']
            </span>
            ,
          </p>
          <p>
            location:{" "}
            <span className="text-[#92fe9d]">'Santiago, Chile'</span>,
          </p>
          <p>
            mindset:{" "}
            <span className="text-[#92fe9d]">
              "Build reliable software and improve continuously."
            </span>
          </p>
        </div>
        <p className="text-[#00c9ff] mt-1">&#125;;</p>
      </motion.div>

      {/* --- Call to Action --- */}
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.8 }}
      >
        <a
          href="https://github.com/madandev02"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#30363d] text-[#e6edf3] hover:border-[#00c9ff] hover:text-[#00c9ff] transition-all duration-300"
        >
          <FaGithub className="text-lg" /> GitHub
        </a>

        <a
          href="/CV_Mauricio_Narvaez.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#00c9ff] text-[#0d1117] font-medium hover:bg-[#00b2e3] transition-all duration-300"
        >
          <FaFileAlt className="text-lg" /> Resume
        </a>

        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#00ff88] text-[#0d1117] font-medium hover:bg-[#00e67a] transition-all duration-300"
        >
          <FaEnvelope className="text-lg" /> Contact Me
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Home;
