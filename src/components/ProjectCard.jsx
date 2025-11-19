import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Play } from 'lucide-react';
import { BiLogoPlayStore } from 'react-icons/bi';

const ProjectCard = ({ project, index, isDarkMode }) => {
    const cardRef = useRef(null);
    
    // 3D effect values
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const z = useMotionValue(0);
    
    // Spring values for smooth animation
    const xSpring = useSpring(x, { damping: 30, stiffness: 300 });
    const ySpring = useSpring(y, { damping: 30, stiffness: 300 });
    const zSpring = useSpring(z, { damping: 30, stiffness: 300 });
    
    // Transform templates
    const rotateX = useMotionTemplate`${ySpring}deg`;
    const rotateY = useMotionTemplate`${xSpring}deg`;
    const rotateZ = useMotionTemplate`${zSpring}deg`;
    const translateZ = useMotionTemplate`${zSpring}px`;
    
    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        // Calculate rotation values based on mouse position
        const rotateYValue = ((mouseX - width / 2) / width) * 20; // Increased rotation intensity
        const rotateXValue = ((mouseY - height / 2) / height) * 20; // Increased rotation intensity
        
        x.set(rotateYValue);
        y.set(-rotateXValue);
        z.set(20); // Lift effect on hover
    };
    
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        z.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            variants={{
                hidden: { 
                    opacity: 0, 
                    y: 100,
                    rotateX: 15,
                    rotateY: -15,
                    scale: 0.9
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    transition: {
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: index * 0.15
                    }
                }
            }}
            initial="hidden"
            animate="visible"
            style={{
                rotateX,
                rotateY,
                rotateZ,
                transformStyle: 'preserve-3d',
                z: translateZ
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group perspective-1000"
        >
            <div className={`relative h-full rounded-2xl border transition-all duration-500 overflow-hidden transform-gpu ${
                isDarkMode 
                ? 'bg-gray-900 border-gray-800 hover:border-blue-500/30' 
                : 'bg-white border-gray-200 hover:border-blue-400/30'
            } hover:shadow-2xl`}>
                {/* 3D depth indicator */}
                <div className={`absolute inset-0 rounded-2xl border-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isDarkMode 
                    ? 'border-blue-500/10' 
                    : 'border-blue-400/10'
                }`} style={{
                    transform: 'translateZ(30px)',
                    transformStyle: 'preserve-3d'
                }}></div>
                
                {/* Image Container with enhanced 3D effect */}
                <div className="relative overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
                    <motion.div
                        style={{ 
                            transformStyle: 'preserve-3d',
                            rotateX: useMotionTemplate`calc(${ySpring}deg * 0.5)`,
                            rotateY: useMotionTemplate`calc(${xSpring}deg * 0.5)`,
                        }}
                    >
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </motion.div>
                    
                    {/* Featured Badge with 3D effect */}
                    {project.featured && (
                        <motion.div 
                            className="absolute top-4 left-4"
                            style={{
                                transform: 'translateZ(20px)',
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                                isDarkMode 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                                Featured
                            </span>
                        </motion.div>
                    )}
                    
                    {/* 3D Overlay Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${
                        isDarkMode 
                        ? 'from-gray-900/80 to-transparent' 
                        : 'from-white/80 to-transparent'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* 3D Action Buttons */}
                    <motion.div 
                        className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ transform: 'translateZ(10px)' }}
                    >
                        {project.liveUrl && (
                            <motion.a
                                href={project.liveUrl}
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className={`p-3 rounded-full backdrop-blur-sm ${
                                    isDarkMode 
                                    ? 'bg-blue-600/90 text-white hover:bg-blue-500' 
                                    : 'bg-white/90 text-blue-600 hover:bg-white'
                                } transition-colors duration-300 shadow-lg`}
                            >
                                <ExternalLink className="w-5 h-5" />
                            </motion.a>
                        )}
                         {project.playStoreUrl && (
                            <motion.a
                                href={project.playStoreUrl}
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className={`p-3 rounded-full backdrop-blur-sm ${
                                    isDarkMode 
                                    ? 'bg-blue-600/90 text-white hover:bg-blue-500' 
                                    : 'bg-white/90 text-blue-600 hover:bg-white'
                                } transition-colors duration-300 shadow-lg`}
                            >
                                <BiLogoPlayStore className="w-5 h-5" />
                            </motion.a>
                        )}
                        {project.githubUrl && (
                            <motion.a
                                href={project.githubUrl}
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className={`p-3 rounded-full backdrop-blur-sm ${
                                    isDarkMode 
                                    ? 'bg-gray-800/90 text-white hover:bg-gray-700' 
                                    : 'bg-white/90 text-gray-800 hover:bg-white'
                                } transition-colors duration-300 shadow-lg`}
                            >
                                <Github className="w-5 h-5" />
                            </motion.a>
                        )}
                    </motion.div>
                </div>

                {/* Content with 3D depth */}
                <div className="p-6" style={{ transformStyle: 'preserve-3d' }}>
                    {/* Category */}
                    <div className="flex items-center justify-between mb-3">
                        <motion.span 
                            className={`text-xs font-medium px-2 py-1 rounded ${
                                isDarkMode 
                                ? 'bg-blue-900/30 text-blue-300' 
                                : 'bg-blue-100 text-blue-700'
                            }`}
                            style={{
                                transform: 'translateZ(10px)'
                            }}
                        >
                            {project.category}
                        </motion.span>
                    </div>

                    {/* Title with 3D effect */}
                    <motion.h3 
                        className={`text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors duration-300 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}
                        style={{
                            transform: 'translateZ(15px)'
                        }}
                    >
                        {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                        className={`text-sm mb-4 line-clamp-2 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                        style={{
                            transform: 'translateZ(5px)'
                        }}
                    >
                        {project.description}
                    </motion.p>

                    {/* Tags with depth */}
                    <motion.div 
                        className="flex flex-wrap gap-2 mb-4"
                        style={{
                            transform: 'translateZ(8px)'
                        }}
                    >
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                                key={tagIndex}
                                className={`text-xs px-2 py-1 rounded ${
                                    isDarkMode 
                                    ? 'bg-gray-800 text-gray-300' 
                                    : 'bg-gray-100 text-gray-600'
                                }`}
                            >
                                {tag}
                            </span>
                        ))}
                        {project.tags.length > 3 && (
                            <span className={`text-xs px-2 py-1 rounded ${
                                isDarkMode 
                                ? 'bg-gray-800 text-gray-400' 
                                : 'bg-gray-100 text-gray-500'
                            }`}>
                                +{project.tags.length - 3}
                            </span>
                        )}
                    </motion.div>

                    {/* Client */}
                    <motion.div 
                        className={`text-xs ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}
                        style={{
                            transform: 'translateZ(5px)'
                        }}
                    >
                        Client: {project.clientName}
                    </motion.div>
                </div>

                {/* Enhanced 3D Border Effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isDarkMode 
                    ? 'border-blue-500/20' 
                    : 'border-blue-400/20'
                }`} style={{
                    transform: 'translateZ(5px)',
                    transformStyle: 'preserve-3d'
                }}></div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;