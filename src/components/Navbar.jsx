import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Sobre mí" },
    { href: "#skills", label: "Habilidades" },
    { href: "#projects", label: "Proyectos" },
    { href: "#education", label: "Educación" },
    { href: "#contact", label: "Contacto" },
  ];

  // 🧭 Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      setScrolled(window.scrollY > 50);

      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveLink(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <motion.nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? "scale-95 opacity-90" : "scale-100 opacity-100"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* 🧊 Glassy neon navbar container */}
      <div className="bg-[#0a0f16]/70 backdrop-blur-xl border border-[#00c9ff]/20 shadow-[0_0_15px_rgba(0,201,255,0.25)] rounded-full px-8 py-4 flex space-x-6 items-center">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setActiveLink(link.href)}
            className={`relative text-sm sm:text-base font-medium tracking-wide transition duration-300 ${
              activeLink === link.href
                ? "text-[#00c9ff] drop-shadow-[0_0_6px_rgba(0,201,255,0.8)]"
                : "text-[#b0bec5] hover:text-[#00c9ff]"
            }`}
          >
            {link.label}

            {/* 💡 Animated neon underline for active link */}
            {activeLink === link.href && (
              <motion.span
                layoutId="activeIndicator"
                className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-3/4 bg-gradient-to-r from-[#00c9ff] to-[#92fe9d] rounded-full shadow-[0_0_8px_rgba(0,201,255,0.8)]"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
