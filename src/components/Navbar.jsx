import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  // Detect current section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveLink(`#${section.id}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <motion.nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="bg-white/30 backdrop-blur-lg shadow-lg border border-white/40 rounded-full px-6 py-3 flex space-x-6 items-center overflow-x-auto">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setActiveLink(link.href)}
            className={`relative text-sm font-medium transition duration-300 ${
              activeLink === link.href
                ? "text-blue-600"
                : "text-gray-800 hover:text-blue-600"
            }`}
          >
            {link.label}

            {/* Active Indicator */}
            {activeLink === link.href && (
              <motion.span
                layoutId="activeIndicator"
                className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-3/4 bg-blue-600 rounded-full"
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
