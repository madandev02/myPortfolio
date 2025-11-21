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
          Sobre mí
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
              Soy un{" "}
              <span className="font-semibold text-[#e6edf3]">
                Desarrollador Full-Stack
              </span>{" "}
              apasionado, actualmente dominando un enfoque de doble stack con{" "}
              <span className="font-semibold text-[#00c9ff]">JavaScript/TypeScript</span>{" "}
              y <span className="font-semibold text-[#E76F00]">Java</span>.
              Me enfoco en construir aplicaciones web escalables y de alto rendimiento,
              utilizando tecnologías modernas y principios de arquitectura limpia.
            </p>

            {/* Learning journey */}
            <p className="mb-4 leading-relaxed text-[#9ba6b4]">
              Mi ruta de aprendizaje actual incluye{" "}
              <span className="font-semibold text-[#00c9ff]">
                React & Next.js avanzados
              </span>
              , desarrollo empresarial con{" "}
              <span className="font-semibold text-[#00c9ff]">
                Spring Boot
              </span>
              , y prácticas modernas de{" "}
              <span className="font-semibold text-[#00c9ff]">
                DevOps
              </span>.
              Creo en el aprendizaje continuo y en mantenerme actualizado con las tendencias de la industria.
            </p>

            {/* Current stack */}
            <p className="mb-4 leading-relaxed text-[#9ba6b4]">
              Me especializo en el stack{" "}
              <span className="font-semibold text-[#e6edf3]">
                MERN (MongoDB, Express, React, Node.js)
              </span>{" "}
              mientras expando mis conocimientos hacia{" "}
              <span className="font-semibold text-[#00c9ff]">
                Java Spring Boot para sistemas backend
              </span>
              . También estoy explorando tecnologías cloud y containerización con Docker y Kubernetes.
            </p>

            {/* Career goals */}
            <p className="leading-relaxed text-[#9ba6b4]">
              Mi objetivo es convertirme en un desarrollador versátil, capaz de enfrentar
              desafíos complejos en diferentes stacks tecnológicos, aportando tanto en
              innovación para startups como en soluciones empresariales.
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
                Resido en{" "}
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
