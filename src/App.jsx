import React from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

import Stats from "./sections/Stats";
import DeveloperFocus from "./sections/DeveloperFocus";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0d1117] text-[#e6edf3] font-sans selection:bg-[#00c9ff]/20">

      {/* Background gradient */}

      <div className="fixed inset-0 bg-gradient-to-b from-[#0d1117] via-[#161b22] to-[#0d1117] -z-10" />

      {/* Stars background */}

      <div className="stars-background pointer-events-none fixed inset-0 z-0 opacity-40">
        {Array.from({ length: 90 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <div className="relative z-10">

        {/* NAVBAR */}

        <Navbar />

        {/* MAIN CONTENT */}

        <main className="pt-28 w-full flex flex-col gap-32">

          {/* HERO */}
          <Home />

          {/* STATS */}
          <Stats />

          {/* ABOUT */}
          <About />

          {/* SKILLS */}
          <Skills />

          {/* DEVELOPER FOCUS */}
          <DeveloperFocus />

          {/* PROJECTS */}
          <Projects />

          {/* EDUCATION */}
          <Education />

          {/* CONTACT */}
          <Contact />

        </main>

        {/* FOOTER */}

        <footer className="mt-32 border-t border-[#21262d]">

          <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Left */}

            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-white">
                Mauricio Narvaez
              </h3>

              <p className="text-sm text-[#8b949e]">
                Full Stack Developer · Java · React
              </p>
            </div>

            {/* Social links */}

            <div className="flex items-center gap-6 text-xl">

              <a
                href="https://github.com/madandev02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8b949e] hover:text-[#00c9ff] transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/mnarvv/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8b949e] hover:text-[#00c9ff] transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:mauricionarvilla@gmail.com"
                className="text-[#8b949e] hover:text-[#00c9ff] transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Bottom */}

          <div className="text-center text-sm text-[#6e7681] pb-6">
            © {new Date().getFullYear()} Mauricio Narvaez · Built with 💘
          </div>

        </footer>

      </div>
    </div>
  );
}

export default App;