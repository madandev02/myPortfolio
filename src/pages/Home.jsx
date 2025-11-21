import { useState, useEffect } from "react";
import { FaGithub, FaFileAlt, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const availabilityMessages = [
  "👨‍💻 Abierto a oportunidades Full-Time",
  "💻 Disponible para trabajo Freelance",
  "🚀 Construyendo soluciones Full-Stack modernas",
  "☕ Dominando Java & Spring Boot",
  "🌱 Siempre aprendiendo y creciendo como desarrollador",
];

const Home = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Rotate availability messages every 3.5 seconds
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
      className="flex flex-col items-center justify-center text-center min-h-[100vh] w-full relative z-10 text-[#e6edf3]"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      {/* --- Main Title --- */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Hola, soy{" "}
        <span className="bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] bg-clip-text text-transparent">
          Mauricio Narvaez
        </span>
      </motion.h1>

      {/* --- Availability Badge --- */}
      <motion.div
        className="flex items-center gap-2 bg-[#161b22]/70 border border-[#30363d]/60 px-4 py-1 rounded-full mb-8 shadow-sm backdrop-blur-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
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

      {/* --- Subtitle --- */}
      <motion.h2
        className="text-base sm:text-lg md:text-xl text-[#9ba6b4] mb-10 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Desarrollador Full-Stack especializado en los ecosistemas modernos de JavaScript y Java. 
        Apasionado por crear aplicaciones escalables con arquitectura limpia y buenas prácticas.
      </motion.h2>

      {/* --- Developer "Code Block" (Updated Stack) --- */}
      <motion.div
        className="border border-[#21262d]/60 backdrop-blur-sm bg-[#161b22]/40 rounded-2xl p-6 text-left font-mono text-sm text-[#9ba6b4] w-full max-w-lg mb-10 shadow-[0_0_12px_#00c9ff30] hover:shadow-[0_0_16px_#00c9ff50] transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <p className="text-[#00c9ff] mb-1">const developer = &#123;</p>
        <div className="ml-5">
          <p>
            name: <span className="text-[#92fe9d]">'Mauricio Narvaez'</span>,
          </p>
          <p>
            role:{" "}
            <span className="text-[#92fe9d]">
              'Full-Stack Developer'
            </span>,
          </p>
          <p>
            specialization: <span className="text-[#92fe9d]">'Dual-Stack (JS + Java)'</span>,
          </p>
          <p>
            location:{" "}
            <span className="text-[#92fe9d]">'Santiago, Chile'</span>,
          </p>
          <p>
            frontendStack: [
            <span className="text-[#00c9ff]">'React'</span>,{" "}
            <span className="text-[#00c9ff]">'Next.js'</span>,{" "}
            <span className="text-[#00c9ff]">'TypeScript'</span>,{" "}
            <span className="text-[#00c9ff]">'TailwindCSS'</span>
            ],
          </p>
          <p>
            backendStack: [
            <span className="text-[#00c9ff]">'Node.js'</span>,{" "}
            <span className="text-[#00c9ff]">'Express'</span>,{" "}
            <span className="text-[#00c9ff]">'Java'</span>,{" "}
            <span className="text-[#00c9ff]">'Spring Boot'</span>
            ],
          </p>
          <p>
            databases: [
            <span className="text-[#00c9ff]">'MongoDB'</span>,{" "}
            <span className="text-[#00c9ff]">'PostgreSQL'</span>,{" "}
            <span className="text-[#00c9ff]">'Redis'</span>
            ],
          </p>
          <p>
            devOps: [
            <span className="text-[#00c9ff]">'Docker'</span>,{" "}
            <span className="text-[#00c9ff]">'Kubernetes'</span>,{" "}
            <span className="text-[#00c9ff]">'AWS'</span>,{" "}
            <span className="text-[#00c9ff]">'CI/CD'</span>
            ],
          </p>
          <p>
            motto:{" "}
            <span className="text-[#92fe9d]">
              "Construyendo soluciones escalables en múltiples stacks tecnológicos."
            </span>
          </p>
        </div>
        <p className="text-[#00c9ff] mt-1">&#125;;</p>
      </motion.div>

      {/* --- Call to Action buttons --- */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <a
          href="https://github.com/madandev02"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#30363d] text-[#e6edf3] hover:border-[#00c9ff] hover:text-[#00c9ff] transition-all duration-300 text-sm sm:text-base shadow-sm"
        >
          <FaGithub className="text-lg" /> GitHub
        </a>

        <a
          href="/CV_Mauricio_Narvaez.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#00c9ff] text-[#0d1117] font-medium hover:bg-[#00b2e3] transition-all duration-300 shadow-md hover:shadow-[#00c9ff]/30 text-sm sm:text-base"
        >
          <FaFileAlt className="text-lg" /> Currículum
        </a>

        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#00ff88] text-[#0d1117] font-medium hover:bg-[#00e67a] transition-all duration-300 shadow-md hover:shadow-[#00ff88]/30 text-sm sm:text-base"
        >
          <FaEnvelope className="text-lg" /> Contáctame
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Home;
