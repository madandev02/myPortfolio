import React from "react";

const Navbar = () => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white shadow-lg rounded-full px-6 py-3 flex space-x-4 items-center border border-gray-200">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-gray-800 hover:text-blue-600 transition"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
