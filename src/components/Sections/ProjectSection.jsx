import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Code2, Globe, Users, Zap } from 'lucide-react'
import React, { useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { PROJECTS } from '../../utils/data';
import { containerVariants, itemVariants } from '../../utils/helper';
import ProjectCard from '../ProjectCard';

const ProjectSection = () => {
    const { isDarkMode } = useTheme();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

    // Create refs for different sections to track their visibility
    const headerRef = useRef(null);
    const projectsRef = useRef(null);
    const buttonRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: false, margin: "-50px" });
    const isProjectsInView = useInView(projectsRef, { once: false, margin: "-50px" });
    const isButtonInView = useInView(buttonRef, { once: false, margin: "-50px" });

    // Text variants for animations
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

    return (
        <section 
            id='work'
            ref={sectionRef}
            className={`py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden ${
                isDarkMode 
                ? "bg-gray-950 text-white"
                : "bg-gray-50 text-gray-600"
            }`}
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className={`absolute top-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-20 ${
                    isDarkMode ? 'bg-blue-700' : 'bg-blue-300'
                }`}></div>
                <div className={`absolute bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${
                    isDarkMode ? 'bg-purple-700' : 'bg-purple-300'
                }`}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    ref={headerRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isHeaderInView ? "visible" : "hidden"}
                    className="text-center mb-16"
                >
                    <motion.div 
                        variants={titleVariants}
                        className="inline-flex items-center justify-center gap-2 mb-4"
                    >
                        <div className={`w-12 h-0.5 ${
                            isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                        }`}></div>
                        <span className={`text-sm font-semibold tracking-wider uppercase ${
                            isDarkMode ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                            Featured Work
                        </span>
                        <div className={`w-12 h-0.5 ${
                            isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                        }`}></div>
                    </motion.div>

                    <motion.h2 
                        variants={titleVariants}
                        className={`text-4xl md:text-5xl font-bold mb-6 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}
                    >
                        Recent Projects
                    </motion.h2>

                    <motion.p 
                        variants={textVariants}
                        className={`text-lg max-w-3xl mx-auto ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                    >
                        Explore my latest work showcasing innovative solutions and cutting-edge technologies
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    ref={projectsRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isProjectsInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {PROJECTS.map((project, index) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            index={index}
                            isDarkMode={isDarkMode}
                            isInView={isProjectsInView}
                        />
                    ))}
                </motion.div>

                {/* View All Projects Button */}
                <motion.div
                    ref={buttonRef}
                    variants={textVariants}
                    initial="hidden"
                    animate={isButtonInView ? "visible" : "hidden"}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: isDarkMode 
                                ? "0 10px 25px -5px rgba(59, 130, 246, 0.4)" 
                                : "0 10px 25px -5px rgba(37, 99, 235, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`group relative inline-flex items-center px-8 py-4 rounded-full font-semibold text-lg overflow-hidden ${
                            isDarkMode 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-blue-600 text-white'
                        }`}
                    >
                        <span className="relative z-10">View All Projects</span>
                        <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        <div className={`absolute inset-0 bg-gradient-to-r ${
                            isDarkMode 
                            ? 'from-blue-500 to-purple-600' 
                            : 'from-blue-400 to-purple-500'
                        } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default ProjectSection