import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Code2, Globe, Users, Zap, Smartphone, Monitor, Layers } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { PROJECTS } from '../../utils/data';
import { containerVariants, itemVariants } from '../../utils/helper';
import ProjectCard from '../ProjectCard';

const ProjectSection = () => {
    const { isDarkMode } = useTheme();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
    const [activeTab, setActiveTab] = useState('all');

    // Create refs for different sections to track their visibility
    const headerRef = useRef(null);
    const projectsRef = useRef(null);
    const buttonRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: false, margin: "-50px" });
    const isProjectsInView = useInView(projectsRef, { once: false, margin: "-50px" });
    const isButtonInView = useInView(buttonRef, { once: false, margin: "-50px" });

    // Define tabs with icons
    const tabs = [
        { id: 'all', label: 'All Projects', icon: Layers, count: PROJECTS.length },
        { id: 'Full Stack', label: 'Full Stack', icon: Code2, count: PROJECTS.filter(p => p.category === 'Full Stack').length },
        { id: 'Frontend', label: 'Frontend', icon: Monitor, count: PROJECTS.filter(p => p.category === 'Frontend').length },
        { id: 'Mobile', label: 'Mobile', icon: Smartphone, count: PROJECTS.filter(p => p.category === 'Mobile').length },
    ];

    // Filter projects based on active tab
    const filteredProjects = activeTab === 'all' 
        ? PROJECTS 
        : PROJECTS.filter(project => project.category === activeTab);

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

    const tabVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (index) => ({
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
            }
        })
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
                        Explore my latest work across different technologies and platforms
                    </motion.p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial="hidden"
                    animate={isHeaderInView ? "visible" : "hidden"}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {tabs.map((tab, index) => {
                        const IconComponent = tab.icon;
                        const isActive = activeTab === tab.id;
                        
                        return (
                            <motion.button
                                key={tab.id}
                                custom={index}
                                variants={tabVariants}
                                onClick={() => setActiveTab(tab.id)}
                                className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                                    isActive
                                        ? isDarkMode
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                                            : 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                                        : isDarkMode
                                            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                                            : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow-md'
                                }`}
                                whileHover={{ 
                                    scale: 1.05,
                                    y: -2
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <IconComponent size={20} className="flex-shrink-0" />
                                <span className="whitespace-nowrap">{tab.label}</span>
                                <span className={`px-2 py-1 text-xs rounded-full ${
                                    isActive
                                        ? 'bg-white/20 text-white'
                                        : isDarkMode
                                            ? 'bg-gray-700 text-gray-300'
                                            : 'bg-gray-200 text-gray-600'
                                }`}>
                                    {tab.count}
                                </span>
                                
                                {/* Active indicator */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className={`absolute inset-0 rounded-2xl border-2 ${
                                            isDarkMode ? 'border-blue-400' : 'border-blue-500'
                                        }`}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    ref={projectsRef}
                    key={activeTab} // Re-trigger animation when tab changes
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project, index) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            index={index}
                            isDarkMode={isDarkMode}
                            isInView={isProjectsInView}
                        />
                    ))}
                </motion.div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
                            isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                        }`}>
                            <Code2 size={40} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                        </div>
                        <h3 className={`text-xl font-semibold mb-2 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                            No projects found
                        </h3>
                        <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                            There are no projects in this category yet.
                        </p>
                    </motion.div>
                )}

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