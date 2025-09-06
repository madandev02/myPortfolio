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
    <div className="relative bg-gray-50 text-gray-800 min-h-screen overflow-hidden">
      {/* Fondo de estrellas */}
      <div className="stars-background pointer-events-none fixed inset-0 z-0">
        {Array.from({ length: 90 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10">
        <Navbar />
        <main className="pt-28 max-w-5xl mx-auto px-4 flex flex-col items-center gap-20">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
