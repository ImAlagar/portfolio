import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("home");
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Work", id: "work" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 px-6 py-4 
          ${isDarkMode ? "bg-gray-950/95 text-white" : "bg-white/95 text-gray-900"} 
          backdrop-blur-md border-b 
          ${isDarkMode ? "border-gray-800" : "border-gray-200"}
          shadow-lg`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left Side: Logo + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button - Left Side */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSidebarOpen(true)}
                className={`p-2 rounded-full transition-all ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
                aria-label="Open menu"
              >
                <Menu size={20} />
              </motion.button>
            </div>

            {/* Logo - Clickable */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center space-x-3 group"
            >
              <div className="flex flex-col items-start">
                <span className="font-bold text-lg tracking-tight">Alagar</span>
                <span className={`text-xs ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  Portfolio
                </span>
              </div>
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeSection === item.id
                    ? isDarkMode
                      ? "text-white"
                      : "text-gray-900"
                    : isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 mx-2 ${
                      isDarkMode 
                        ? "bg-gradient-to-r from-blue-400 to-purple-400" 
                        : "bg-gradient-to-r from-blue-500 to-purple-500"
                    }`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right Side: Theme toggle + CTA Button */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
              className={`p-3 rounded-xl transition-all ${
                isDarkMode
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700 hover:text-yellow-300"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              }`}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* Download CV/Contact CTA - Desktop only */}
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className={`hidden lg:flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-blue-500/25"
                  : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-blue-500/50"
              }`}
            >
              <span>Get In Touch</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <MobileSidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
    </>
  );
};

export default Navbar;