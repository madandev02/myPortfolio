import { FaGithub, FaFileAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="flex flex-col items-center justify-center text-center min-h-[80vh] w-full"
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">
        Hi, I'm <span className="text-blue-600">Mauricio Narvaez</span>
      </h1>
      <h2 className="text-xl sm:text-2xl text-gray-600 mb-6">
        Frontend Developer | Transitioning to Fullstack
      </h2>

      <div className="flex gap-4">
        <a
          href="https://github.com/madandev02"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="/CV_Mauricio_Narvaez.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition"
        >
          <FaFileAlt /> Resume
        </a>

        <a
          href="#contact"
          className="bg-green-600 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-green-700 transition"
        >
          <FaEnvelope /> Contact Me
        </a>
      </div>
    </motion.section>
  );
};

export default Home;
