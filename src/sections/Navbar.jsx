import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/30">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="#home"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Kishore
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="h-6 w-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <ul className="nav-ul">
              {navLinks.map((link) => (
                <li key={link.href} className="nav-li">
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxheight: "100vh" }}
          transition={{ duration: 0.5 }}
        >
          <nav className="pb-5">
            <ul className="nav-ul">
              {navLinks.map((link) => (
                <li key={link.href} className="nav-li">
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;