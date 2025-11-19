import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Heart, ArrowUp, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const { isDarkMode } = useTheme();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Quick links
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  // Social links
  const socialLinks = [
    { 
      name: "GitHub", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2A10 10 0 002 12a10 10 0 006.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5A10 10 0 0022 12 10 10 0 0012 2z"/>
        </svg>
      ),
      url: "https://github.com/ImAlagar"
    },
    { 
      name: "LinkedIn", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
        </svg>
      ),
      url: "https://www.linkedin.com/in/alagar-ramar/"
    },
    { 
      name: "Instagram", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
      url: "https://www.instagram.com/im_alagar4563/"
    }
  ];

  // Contact info
  const contactInfo = [
    {
      icon: <Mail size={16} />,
      text: "alagar17302@gmail.com",
      href: "mailto:alagar17302@gmail.com"
    },
    {
      icon: <Phone size={16} />,
      text: "+91 9150118554",
      href: "tel:+91 9150118554"
    },
    {
      icon: <MapPin size={16} />,
      text: "kelambakkam,Chennai,India",
      href: "#"
    }
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className={`relative overflow-hidden px-6 pt-16 pb-8 ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-800'}`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient blobs */}
        <div className={`absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-10 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'}`}></div>
        <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-10 ${isDarkMode ? 'bg-purple-500' : 'bg-purple-400'}`}></div>
        
        {/* Grid pattern */}
        <div className={`absolute inset-0 opacity-5 ${isDarkMode ? 'bg-grid-white/[0.05]' : 'bg-grid-gray-900/[0.03]'} bg-[size:60px_60px]`}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-1"
          >
            <motion.h3 
              whileHover={{ scale: 1.02 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-4"
            >
              Alagar
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              className="text-sm mb-6 transition-opacity"
            >
              Crafting digital excellence with precision and innovation. Turning ideas into exceptional digital experiences.
            </motion.p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ 
                    y: -5,
                    scale: 1.1,
                    color: isDarkMode ? '#60a5fa' : '#2563eb'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-sm transition-all duration-300`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-5 h-5">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-1"
          >
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className={`absolute -bottom-2 left-0 w-10 h-0.5 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.href} 
                    className={`text-sm transition-colors hover:text-blue-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-1"
          >
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Get In Touch
              <span className={`absolute -bottom-2 left-0 w-10 h-0.5 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></span>
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className={`mt-0.5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {item.icon}
                  </span>
                  <a 
                    href={item.href} 
                    className={`text-sm transition-colors hover:text-blue-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-1"
          >
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Stay Updated
              <span className={`absolute -bottom-2 left-0 w-10 h-0.5 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></span>
            </h4>
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Subscribe to my newsletter for the latest updates and insights.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className={`w-full px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                } border`}
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        {/* Divider */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className={`h-px my-8 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
        ></motion.div>
        
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center mb-4 md:mb-0"
          >
            <span className="text-sm mr-2">Made with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              <Heart size={16} className="text-red-500 fill-current" />
            </motion.div>
            <span className="text-sm ml-2">by Alagar © {new Date().getFullYear()}</span>
          </motion.div>
          
          <div className="flex items-center space-x-6 text-sm">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-sm transition-colors flex items-center`}
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;