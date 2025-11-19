import React, { useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { SKILLS_CATEGORY, STATS, TECH_STACK } from '../../utils/data'
import { motion, useInView } from 'framer-motion'

const SkillsSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className={`py-24 px-4 md:px-8 lg:px-16 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className={`text-5xl md:text-6xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Skills Dashboard
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            A comprehensive overview of my technical expertise and professional capabilities
          </motion.p>
        </div>

        {/* Stats Section - Added Here */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl text-center backdrop-blur-sm border transition-all duration-300 group ${
                isDarkMode 
                  ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50' 
                  : 'bg-white/80 border-gray-200 hover:border-blue-500/50'
              }`}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Hover effect background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
                isDarkMode 
                  ? 'from-blue-500/5 to-purple-500/5' 
                  : 'from-blue-500/10 to-purple-500/10'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                className={`text-3xl md:text-4xl font-bold mb-2 relative z-10 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                {stat.number}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`text-sm font-medium uppercase tracking-wider relative z-10 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILLS_CATEGORY.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.2 }}
                className={`p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 group relative overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 hover:border-blue-500/50' 
                    : 'bg-gradient-to-br from-white/80 to-gray-100/80 border-gray-200 hover:border-blue-500/50'
                }`}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  isDarkMode 
                    ? 'from-blue-500/5 via-purple-500/5 to-blue-500/5' 
                    : 'from-blue-500/10 via-purple-500/10 to-blue-500/10'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <motion.div 
                    className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                      isDarkMode ? 'bg-blue-500/20 group-hover:bg-blue-500/30' : 'bg-blue-500/10 group-hover:bg-blue-500/20'
                    }`}
                    whileHover={{ rotate: 5 }}
                  >
                    <IconComponent className={`h-6 w-6 transition-colors duration-300 ${
                      isDarkMode ? 'text-blue-400 group-hover:text-blue-300' : 'text-blue-600 group-hover:text-blue-500'
                    }`} />
                  </motion.div>
                  <div>
                    <h3 className={`text-xl font-bold transition-colors duration-300 ${
                      isDarkMode ? 'text-white group-hover:text-blue-300' : 'text-gray-900 group-hover:text-blue-600'
                    }`}>
                      {category.title}
                    </h3>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'
                    }`}>
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex} 
                      className="flex items-center justify-between group/skill"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className={`font-medium transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300 group-hover/skill:text-white' : 'text-gray-700 group-hover/skill:text-gray-900'
                      }`}>
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className={`w-20 h-2 rounded-full transition-colors duration-300 ${
                          isDarkMode ? 'bg-gray-700 group-hover/skill:bg-gray-600' : 'bg-gray-300 group-hover/skill:bg-gray-400'
                        }`}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              delay: (categoryIndex * 0.2) + (skillIndex * 0.1), 
                              duration: 1,
                              ease: "easeOut"
                            }}
                            className={`h-full rounded-full transition-all duration-300 group-hover/skill:shadow-lg ${
                              skill.color || 'bg-gradient-to-r from-blue-500 to-purple-500'
                            }`}
                          />
                        </div>
                        <span className={`text-sm w-8 transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-400 group-hover/skill:text-gray-300' : 'text-gray-600 group-hover/skill:text-gray-700'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tech Stack Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.h3 
            className={`text-3xl font-bold mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Technology Stack
          </motion.h3>
          <motion.p
            className={`text-lg mb-12 max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Proficient in a diverse range of modern technologies and development tools
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {TECH_STACK.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + (index * 0.03) }}
                className={`px-4 py-3 rounded-xl text-sm font-medium backdrop-blur-sm border transition-all duration-300 group/tech ${
                  isDarkMode 
                    ? 'bg-gray-800/50 text-gray-200 border-gray-700 hover:bg-blue-500 hover:text-white hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25' 
                    : 'bg-white/80 text-gray-700 border-gray-300 hover:bg-blue-500 hover:text-white hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25'
                }`}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {tech}
                {/* Subtle shine effect on hover */}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover/tech:translate-x-[100%] transition-transform duration-1000"></span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection