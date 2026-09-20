import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ease } from "../animations.js";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Certificates", path: "#certificates" },
  { name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // شريط تقدم السكرول
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll("section[id]"));
      const scrollPosition = window.scrollY + 150;

      const currentSection = sections.find((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        return scrollPosition >= top && scrollPosition < top + height;
      });

      if (currentSection) setActiveSection(currentSection.id);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (path) => {
    const isActive = activeSection === path.replace("#", "");
    return `relative block px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 no-underline ${
      isActive ? "text-neon font-bold" : "text-muted hover:text-neon"
    }`;
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease }}
      className="fixed top-0 w-full z-[999] bg-[rgba(10,10,15,0.85)] backdrop-blur-[20px] border-b border-border py-4"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="font-mono text-[1.1rem] text-neon no-underline tracking-[0.05em]"
        >
          &lt; Youssef / &gt;
        </motion.a>

        {/* links */}
        <ul className="hidden sm:flex items-center gap-2 m-0 p-0 list-none">
          {navLinks.map((link) => {
            const isActive = activeSection === link.path.replace("#", "");
            return (
              <li key={link.name}>
                <a href={link.path} className={getLinkClass(link.path)}>
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded bg-grad"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* btn */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="p-2 rounded-lg text-muted hover:text-neon focus:outline-none bg-transparent border-none cursor-pointer transition-colors duration-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "close" : "open"}
                className="block"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="sm:hidden overflow-hidden bg-[rgba(10,10,15,0.95)] border-b border-border px-4 list-none m-0"
          >
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
                className="first:mt-2 last:mb-4 py-0.5"
              >
                <a onClick={() => setIsOpen(false)} href={link.path} className={getLinkClass(link.path)}>
                  {link.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* scroll progress */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-grad"
      />
    </motion.nav>
  );
};

export default Navbar;
