import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
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
  }, []);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <motion.nav
        className={`hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? "scale-95 opacity-90" : "scale-100 opacity-100"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="bg-[#0a0f16]/70 backdrop-blur-xl border border-[#00c9ff]/20 shadow-[0_0_15px_rgba(0,201,255,0.25)] rounded-full px-8 py-4 flex space-x-6 items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`relative text-sm font-medium tracking-wide transition duration-300 ${
                activeLink === link.href
                  ? "text-[#00c9ff] drop-shadow-[0_0_6px_rgba(0,201,255,0.8)]"
                  : "text-[#b0bec5] hover:text-[#00c9ff]"
              }`}
            >
              {link.label}

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

      {/* ================= MOBILE NAVBAR ================= */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-[#0a0f16]/80 backdrop-blur-xl border border-[#00c9ff]/30 p-3 rounded-xl text-[#00c9ff] shadow-[0_0_12px_rgba(0,201,255,0.3)]"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-[#0a0f16]/90 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {links.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setMenuOpen(false);
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`text-2xl font-semibold transition ${
                  activeLink === link.href
                    ? "text-[#00c9ff]"
                    : "text-[#b0bec5] hover:text-[#00c9ff]"
                }`}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
