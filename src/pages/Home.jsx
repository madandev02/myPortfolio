import { useState, useEffect } from "react";
import { FaGithub, FaFileAlt, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const availabilityMessages = [
  "💻 Available for Freelance Work",
  "👨‍💻 Open to Full-time Opportunities",
  "🚀 Looking for Frontend Jobs",
  "🌱 Excited to Grow and Learn",
];

const Home = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Cambia el texto automáticamente cada 3.5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % availabilityMessages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="home"
      className="flex flex-col items-center justify-center text-center min-h-[85vh] w-full relative z-10"
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
      {/* Title */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Hi, I'm <span className="text-blue-600">Mauricio Narvaez</span>
      </motion.h1>

      {/* Dynamic Availability Badge */}
      <motion.div
        className="flex items-center gap-2 bg-green-100 border border-green-300 px-4 py-1 rounded-full mb-6 shadow-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Animated Dot */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>

        {/* Rotating Text with Emojis */}
        <div className="overflow-hidden h-5">
          <AnimatePresence mode="wait">
            <motion.span
              key={availabilityMessages[currentMessageIndex]}
              className="text-green-800 text-sm font-medium block"
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

      {/* Subtitle */}
      <motion.h2
        className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Frontend Developer transitioning into Fullstack Development.  
        Passionate about creating modern, scalable, and user-friendly web applications.
      </motion.h2>

      {/* Call to Actions */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <a
          href="https://github.com/madandev02"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition text-sm sm:text-base shadow-md"
        >
          <FaGithub className="text-lg" /> GitHub
        </a>

        <a
          href="/CV_Mauricio_Narvaez.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition text-sm sm:text-base shadow-md"
        >
          <FaFileAlt className="text-lg" /> Resume
        </a>

        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition text-sm sm:text-base shadow-md"
        >
          <FaEnvelope className="text-lg" /> Contact Me
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Home;
