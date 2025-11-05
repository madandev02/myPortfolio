import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

// 🔹 Placeholder for future Platzi certificates
const platziCertificates = []; // When you add certificates, they'll show up automatically

const Education = () => {
  return (
    <section
      id="education"
      className="relative w-full py-24 text-center text-[#e6edf3] overflow-hidden scroll-mt-36 bg-transparent"
    >
      {/* 🌌 Soft ambient gradient behind content */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,201,255,0.04)_0%,transparent_70%)]"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* 🎓 Section title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-14 bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,201,255,0.4)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="space-y-10">
          {/* 🎓 Formal Education Card */}
          <motion.div
            className="bg-[#161b22]/50 backdrop-blur-sm border border-transparent hover:border-[#00c9ff]/40 rounded-2xl p-6 shadow-md hover:shadow-[#00c9ff]/20 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <FaGraduationCap className="text-[#00c9ff] text-2xl" />
              <h3 className="text-xl font-semibold">
                Bachelor of Computer Engineering
              </h3>
            </div>

            <p className="text-sm text-[#9ba6b4] mb-2">
              Universidad Mayor, Chile
            </p>

            <p className="text-[#b9c2cf]">
              Currently studying Computer Engineering with a focus on programming,
              systems, and modern technologies. More info at{" "}
              <a
                href="https://tec.umayor.cl/tecnico-en-informatica"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00c9ff] hover:text-[#92fe9d] hover:underline inline-flex items-center gap-1 transition-colors duration-300"
              >
                tec.umayor.cl <FaExternalLinkAlt className="text-xs" />
              </a>
            </p>
          </motion.div>

          {/* 🏆 Platzi Certificates Section (only visible if there are certificates) */}
          {platziCertificates.length > 0 && (
            <motion.div
              className="bg-[#161b22]/50 backdrop-blur-sm border border-transparent hover:border-[#92fe9d]/40 rounded-2xl p-6 shadow-md hover:shadow-[#92fe9d]/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaCertificate className="text-[#92fe9d] text-2xl" />
                <h3 className="text-xl font-semibold">Platzi Certificates</h3>
              </div>

              <ul className="space-y-3">
                {platziCertificates.map((cert, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center justify-between bg-[#0d1117]/70 border border-[#30363d]/70 rounded-lg px-4 py-3 hover:border-[#00c9ff] hover:bg-[#11161e] transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-[#e6edf3] font-medium">
                      {cert.title}
                    </span>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00c9ff] hover:text-[#92fe9d] transition-colors duration-200 flex items-center gap-1"
                    >
                      View <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
