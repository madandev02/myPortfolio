import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaCode } from "react-icons/fa";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" }
];

const Navbar = () => {

  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Detect scroll for navbar style */

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  /* Detect active section */

  useEffect(() => {

    const sections = links.map(link =>
      document.querySelector(link.href)
    );

    const observer = new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }

        });

      },

      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0
      }

    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();

  }, []);

  return (
    <>
      {/* DESKTOP NAVBAR */}

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? "scale-95 opacity-90" : "scale-100"
        }`}
      >

        <div className="flex items-center gap-6 px-8 py-3 rounded-full border border-[#30363d] bg-[#0d1117]/80 backdrop-blur-xl shadow-[0_0_40px_rgba(0,201,255,0.08)]">

          {/* Logo */}

          <div className="flex items-center gap-2 text-cyan-400 font-semibold">

            <FaCode />

            <span className="hidden lg:block">
              MadanDev
            </span>

          </div>

          {/* Links */}

          <div className="flex gap-6">

            {links.map(link => (

              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`relative text-sm transition-all duration-300 ${
                  activeLink === link.href
                    ? "text-cyan-400"
                    : "text-[#9ba6b4] hover:text-white"
                }`}
              >

                {link.label}

                {activeLink === link.href && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute -bottom-2 left-0 right-0 mx-auto h-[2px] w-4/5 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full"
                  />
                )}

              </a>

            ))}

          </div>

        </div>

      </motion.nav>

      {/* MOBILE BUTTON */}

      <div className="md:hidden fixed top-5 right-5 z-50">

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-3 rounded-xl bg-[#161b22]/90 border border-[#30363d]"
        >

          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}

        </button>

      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            className="fixed inset-0 bg-[#0d1117]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {links.map(link => (

              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => {

                  setActiveLink(link.href);
                  setMenuOpen(false);

                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl text-[#9ba6b4] hover:text-white"
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