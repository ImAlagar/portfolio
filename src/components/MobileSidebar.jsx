import { AnimatePresence, motion } from "framer-motion";
import { X, Home, User, Briefcase, Phone, Code, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const MobileSidebar = ({ isOpen, onClose, scrollToSection, activeSection }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const menuItems = [
    { name: "Home", icon: Home, id: "home" },
    { name: "Skills", icon: Code, id: "skills" },
    { name: "Work", icon: Briefcase, id: "work" },
    { name: "About", icon: User, id: "about" },
    { name: "Contact", icon: Phone, id: "contact" }
  ];

  const handleMenuItemClick = (sectionId) => {
    scrollToSection(sectionId);
    onClose();
  };

  const handleDownloadCV = () => {
    // Add your CV download logic here
    console.log("Download CV");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 200 
            }}
            className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] z-50 shadow-2xl md:hidden
              ${isDarkMode 
                ? "bg-gray-900 border-r border-gray-800" 
                : "bg-white border-r border-gray-200"
              }`}
          >
            {/* Header */}
            <div className={`flex items-center justify-between p-6 border-b 
              ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center
                  ${isDarkMode 
                    ? "bg-gradient-to-br from-blue-600 to-purple-600" 
                    : "bg-gradient-to-br from-blue-500 to-purple-500"
                  }`}
                >
                  <Code className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="font-bold text-lg">Alagar</h2>
                  <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Portfolio
                  </p>
                </div>
              </motion.div>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                onClick={onClose}
                className={`p-2 rounded-xl transition-colors ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Menu Items */}
            <div className="p-4">
              <nav className="space-y-1">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`flex items-center space-x-3 w-full p-4 rounded-xl text-left transition-all relative ${
                      activeSection === item.id
                        ? isDarkMode
                          ? "bg-blue-600/20 text-white border border-blue-500/30"
                          : "bg-blue-500/20 text-gray-900 border border-blue-500/30"
                        : isDarkMode
                        ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon size={20} className="flex-shrink-0" />
                    <span className="font-medium">{item.name}</span>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="mobileActive"
                        className={`absolute right-4 w-2 h-2 rounded-full ${
                          isDarkMode ? "bg-blue-400" : "bg-blue-500"
                        }`}
                      />
                    )}
                  </motion.button>
                ))}
              </nav>

              {/* Download CV Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={handleDownloadCV}
                className={`flex items-center space-x-3 w-full p-4 mt-4 rounded-xl text-left transition-all ${
                  isDarkMode
                    ? "bg-green-600/20 text-green-400 hover:bg-green-600/30 border border-green-500/30"
                    : "bg-green-500/20 text-green-700 hover:bg-green-500/30 border border-green-500/30"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={20} />
                <span className="font-medium">Download CV</span>
              </motion.button>

              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`mt-6 p-4 rounded-xl border ${
                  isDarkMode 
                    ? "bg-gray-800/50 border-gray-700" 
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Theme
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
                    className={`p-3 rounded-xl transition-colors ${
                      isDarkMode
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    }`}
                  >
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;