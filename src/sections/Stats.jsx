import { motion } from "framer-motion";

import {
  FaCodeBranch,
  FaServer,
  FaJava,
  FaReact
} from "react-icons/fa";

const stats = [
  {
    icon: <FaCodeBranch className="text-[#00c9ff]" />,
    number: "10+",
    label: "Projects Built"
  },
  {
    icon: <FaServer className="text-[#92fe9d]" />,
    number: "Fullstack",
    label: "Development Focus"
  },
  {
    icon: <FaJava className="text-[#f89820]" />,
    number: "Java",
    label: "Backend Specialization"
  },
  {
    icon: <FaReact className="text-[#61DAFB]" />,
    number: "React",
    label: "Frontend Stack"
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const Stats = () => {
  return (
    <section className="relative w-full py-28 px-6 overflow-hidden">

      {/* background glow (sutil como antes) */}

      <div className="absolute left-[30%] top-32 w-[500px] h-[500px] bg-[#00c9ff]/8 blur-[150px] rounded-full -z-10"/>
      <div className="absolute right-[30%] bottom-20 w-[500px] h-[500px] bg-[#92fe9d]/6 blur-[160px] rounded-full -z-10"/>

      <div className="max-w-6xl mx-auto">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >

          {stats.map((stat, i) => (

            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative bg-[#161b22]/60 backdrop-blur-xl border border-[#30363d] p-8 rounded-2xl transition-all duration-300 hover:border-[#00c9ff]/40 hover:shadow-[0_15px_45px_rgba(0,201,255,0.25)]"
            >

              {/* hover glow */}

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-[#00c9ff]/20 to-[#92fe9d]/10 blur-xl -z-10"/>

              {/* icon */}

              <div className="mb-5 flex justify-center text-3xl">
                {stat.icon}
              </div>

              {/* number */}

              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] bg-clip-text text-transparent break-words leading-tight">
                {stat.number}
              </h3>

              {/* label */}

              <p className="text-[#9ba6b4] mt-3 text-sm tracking-wide">
                {stat.label}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default Stats;