import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0d1117] text-[#e6edf3] font-sans selection:bg-[#00c9ff]/20">
      {/* Soft gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0d1117] via-[#161b22] to-[#0d1117] opacity-95 -z-10" />

      {/* Subtle stars background */}
      <div className="stars-background pointer-events-none fixed inset-0 z-0 opacity-40">
        {Array.from({ length: 90 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main className="pt-28 max-w-6xl mx-auto px-4 flex flex-col items-center gap-28">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-sm text-[#8b949e] border-t border-[#21262d] mt-24">
        {/* Footer text */}
        <p>© {new Date().getFullYear()} MadanDev. Hecho con ❤.</p>
      </footer>
    </div>
  );
}

export default App;
