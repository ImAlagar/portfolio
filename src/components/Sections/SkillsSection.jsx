import React, { useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { SKILLS_CATEGORY, STATS, TECH_STACK } from '../../utils/data'
import { containerVariants, itemVariants } from '../../utils/helper'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const SkillsSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Create refs for different sections to track their visibility
  const statsRef = useRef(null);
  const skillsRef = useRef(null);
  const techStackRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: false, margin: "-50px" });
  const isSkillsInView = useInView(skillsRef, { once: false, margin: "-50px" });
  const isTechStackInView = useInView(techStackRef, { once: false, margin: "-50px" });

  // Text variants for different animation effects
  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const statNumberVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const skillNameVariants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  };

  const skillPercentVariants = {
    hidden: { 
      opacity: 0, 
      x: 20 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.4
      }
    }
  };

  const techBadgeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level) => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3
      }
    })
  }

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className={`py-20 px-4 md:px-8 lg:px-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={titleVariants}
            className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            variants={textVariants}
            className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            A comprehensive overview of my technical skills and proficiencies across various domains of development.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-6 rounded-xl text-center ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.h3 
                variants={statNumberVariants}
                className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
              >
                {stat.number}
              </motion.h3>
              <motion.p 
                variants={textVariants}
                className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Categories */}
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SKILLS_CATEGORY.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                style={{ y }}
                className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'} h-full`}
                initial="hidden"
                animate={isSkillsInView ? "visible" : "hidden"}
                variants={containerVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    className={`p-3 rounded-lg ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'} mr-4`}
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent className={`h-6 w-6 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`} />
                  </motion.div>
                  <motion.h3 
                    variants={titleVariants}
                    className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                  >
                    {category.title}
                  </motion.h3>
                </div>
                <motion.p 
                  variants={textVariants}
                  className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  {category.description}
                </motion.p>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <motion.span 
                          variants={skillNameVariants}
                          className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}
                        >
                          {skill.name}
                        </motion.span>
                        <motion.span 
                          variants={skillPercentVariants}
                          className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className={`h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <motion.div
                          custom={skill.level}
                          variants={skillBarVariants}
                          initial="hidden"
                          animate={isSkillsInView ? "visible" : "hidden"}
                          className={`h-full rounded-full ${skill.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tech Stack */}
        <motion.div
          ref={techStackRef}
          variants={containerVariants}
          initial="hidden"
          animate={isTechStackInView ? "visible" : "hidden"}
        >
          <motion.h3 
            variants={titleVariants}
            className={`text-2xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Technologies I Work With
          </motion.h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
          >
            {TECH_STACK.map((tech, index) => (
              <motion.span
                key={index}
                variants={techBadgeVariants}
                custom={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'}`}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: isDarkMode ? '#3b82f6' : '#2563eb',
                  color: '#fff',
                  transition: { duration: 0.2 }
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection