import { motion } from "framer-motion";

import {
  FaServer,
  FaCode,
  FaLayerGroup,
  FaLaptopCode
} from "react-icons/fa";

const focusAreas = [
  {
    icon: <FaServer />,
    title: "Backend Architecture",
    description:
      "Designing scalable backend systems using Java, Spring Boot and structured service layers."
  },
  {
    icon: <FaCode />,
    title: "REST API Development",
    description:
      "Building secure and maintainable REST APIs with authentication, validation and clean architecture."
  },
  {
    icon: <FaLayerGroup />,
    title: "Fullstack Applications",
    description:
      "Developing modern fullstack applications integrating backend services with dynamic frontend interfaces."
  },
  {
    icon: <FaLaptopCode />,
    title: "Modern Frontend",
    description:
      "Creating responsive interfaces using React, Next.js and modern UI technologies."
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18
    }
  }
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const DeveloperFocus = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* glow background */}

      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto text-center">

        {/* title */}

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] bg-clip-text text-transparent"
        >
          Developer Focus
        </motion.h2>

        {/* subtitle */}

        <p className="text-[#9ba6b4] max-w-2xl mx-auto mb-20">
          My main focus is building scalable backend systems with Java and Spring Boot,
          while delivering modern fullstack applications with React and cloud-ready
          architectures.
        </p>

        {/* cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >

          {focusAreas.map((focus, i) => (

            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -8 }}
              className="group relative bg-[#161b22]/60 backdrop-blur-xl border border-[#30363d] p-8 rounded-2xl text-left transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_20px_50px_rgba(0,201,255,0.18)]"
            >

              {/* hover glow */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-cyan-400/10 to-green-400/10 rounded-2xl blur-xl -z-10" />

              {/* icon */}

              <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-green-400/20 text-cyan-400 text-xl">
                {focus.icon}
              </div>

              {/* title */}

              <h3 className="text-xl font-semibold text-white mb-3">
                {focus.title}
              </h3>

              {/* description */}

              <p className="text-[#9ba6b4] text-sm leading-relaxed">
                {focus.description}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default DeveloperFocus;