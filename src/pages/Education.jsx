import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaServer,
} from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="relative w-full py-32 text-[#e6edf3] scroll-mt-36 overflow-hidden"
    >

      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,201,255,0.06)_0%,transparent_70%)]"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        <motion.h2
          className="text-center text-4xl md:text-5xl font-bold mb-20 bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="relative border-l border-[#30363d] pl-12 space-y-16">

          {/* UNIVERSIDAD MAYOR */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute -left-[46px] bg-[#0d1117] border border-[#00c9ff] p-3 rounded-full shadow-[0_0_15px_rgba(0,201,255,0.3)]">
              <FaGraduationCap className="text-[#00c9ff]" />
            </div>

            <div className="group bg-[#161b22]/60 backdrop-blur-xl border border-[#30363d]/80 rounded-xl p-7 transition-all duration-300 hover:border-[#00c9ff]/40 hover:shadow-[0_10px_35px_rgba(0,201,255,0.15)]">

              <h3 className="text-xl font-semibold mb-1">
                Software Development Technician
              </h3>

              <p className="text-sm text-[#9ba6b4] mb-3">
                Universidad Mayor · Santiago, Chile
              </p>

              <p className="text-[#b9c2cf] text-sm leading-relaxed">
                Currently pursuing a technical degree focused on software development,
                algorithms, databases, backend systems, and modern web technologies.
              </p>

            </div>

          </motion.div>


          {/* SENCE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute -left-[46px] bg-[#0d1117] border border-[#92fe9d] p-3 rounded-full shadow-[0_0_15px_rgba(146,254,157,0.3)]">
              <FaCode className="text-[#92fe9d]" />
            </div>

            <div className="group bg-[#161b22]/60 backdrop-blur-xl border border-[#30363d]/80 rounded-xl p-7 transition-all duration-300 hover:border-[#92fe9d]/40 hover:shadow-[0_10px_35px_rgba(146,254,157,0.15)]">

              <h3 className="text-xl font-semibold mb-1">
                Full Stack JavaScript Developer
              </h3>

              <p className="text-sm text-[#9ba6b4] mb-3">
                SENCE Program · Chile
              </p>

              <p className="text-[#b9c2cf] text-sm leading-relaxed">
                Intensive full-stack training focused on JavaScript,
                Node.js, React, REST APIs, and modern web application
                development practices.
              </p>

            </div>

          </motion.div>


          {/* GENERATION */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute -left-[46px] bg-[#0d1117] border border-[#facc15] p-3 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.3)]">
              <FaServer className="text-[#facc15]" />
            </div>

            <div className="group bg-[#161b22]/60 backdrop-blur-xl border border-[#30363d]/80 rounded-xl p-7 transition-all duration-300 hover:border-[#facc15]/40 hover:shadow-[0_10px_35px_rgba(250,204,21,0.15)]">

              <h3 className="text-xl font-semibold mb-1">
                Full Stack Java Developer
              </h3>

              <p className="text-sm text-[#9ba6b4] mb-3">
                Generation Chile
              </p>

              <p className="text-[#b9c2cf] text-sm leading-relaxed">
                Professional bootcamp focused on enterprise backend
                development using Java, Spring Boot, REST APIs,
                databases, and real-world software development workflows.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Education;