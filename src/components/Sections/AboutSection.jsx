import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { JOURNEY_STEPS, PASSIONS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import {
  Award,
  Zap,
  ChevronRight,
} from "lucide-react";

const AboutSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

const sectionInView = useInView(sectionRef, { once: false, margin: "-100px" });
const leftInView = useInView(leftRef, { once: false, margin: "-50px" });
const rightInView = useInView(rightRef, { once: false, margin: "-50px" });


  // Calculate positions for each step (for the traveling icon)
  const stepPositions = JOURNEY_STEPS.map((_, index) => index * 200);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 px-6 relative overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={sectionInView ? { opacity: 0.1 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden z-0"
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              isDarkMode ? "bg-blue-500" : "bg-blue-300"
            }`}
            style={{
              width: Math.random() * 100 + 20 + "px",
              height: Math.random() * 100 + 20 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={
              sectionInView
                ? {
                    y: [0, Math.random() * 40 - 20],
                    x: [0, Math.random() * 40 - 20],
                    scale: [1, 1.1, 1],
                  }
                : {}
            }
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-4xl md:text-5xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Get to Know <span className="text-blue-500">About Me</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={sectionInView ? { width: 80 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-blue-500 mx-auto mt-4 mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className={`mt-6 max-w-2xl mx-auto text-lg ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Get to know more about me — my journey as a developer, my mission,
            and the passions that drive me.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* -------- LEFT SIDE -------- */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -50 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                y: -6,
                transition: { type: "spring", stiffness: 300 }
              }}
              className={`p-8 rounded-2xl shadow-xl border-t-4 border-blue-500 ${
                isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
              }`}
            >
              <motion.div 
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={leftInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={leftInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ type: "spring", delay: 0.3 }}
                  className={`p-3 rounded-xl ${
                    isDarkMode ? "bg-blue-900/20" : "bg-blue-100"
                  }`}
                >
                  <Zap
                    className={`w-8 h-8 ${
                      isDarkMode ? "text-blue-300" : "text-blue-600"
                    }`}
                  />
                </motion.div>
                <h3
                  className={`ml-4 text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  My Mission
                </h3>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={leftInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className={`leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                My mission is to craft meaningful, scalable, and impactful
                digital solutions that blend creativity with clean code. I
                believe in building user-centric applications that not only
                solve problems but also inspire and delight people.
              </motion.p>
            </motion.div>

            {/* Passions */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={leftInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className={`text-2xl font-semibold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                What I Love Building
              </motion.h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={leftInView ? "visible" : ""}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {PASSIONS.map((passion, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={leftInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      rotateZ: Math.random() * 2 - 1, // Slight random rotation on hover
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className={`p-5 rounded-xl shadow-md ${
                      isDarkMode ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-lg mb-3 ${
                        isDarkMode ? "bg-blue-900/20" : "bg-blue-100"
                      } w-fit`}
                    >
                      <passion.icon
                        className={`${
                          isDarkMode ? "text-blue-300" : "text-blue-600"
                        }`}
                        size={24}
                      />
                    </motion.div>
                    <h4
                      className={`font-semibold mb-2 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {passion.title}
                    </h4>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {passion.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Signature */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={leftInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-10 text-right"
            >
              <motion.p
                initial={{ x: 50, opacity: 0 }}
                animate={leftInView ? { x: 0, opacity: 1 } : {}}
                transition={{ type: "spring", stiffness: 100, delay: 1 }}
                className={`text-2xl italic font-signature ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                — Rohit R.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* -------- RIGHT SIDE -------- */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 50 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={rightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className={`text-2xl font-semibold mb-10 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              My Developer Journey
            </motion.h3>

            {/* Timeline with Animated Moving Icon */}
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5">
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={rightInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className={`w-0.5 h-full ${
                    isDarkMode ? "bg-blue-700" : "bg-blue-300"
                  }`}
                  style={{ originY: 0 }}
                />
              </div>

              {/* Animated traveling icon */}
              <motion.div
                initial={{ y: 0 }}
                animate={rightInView ? { 
                  y: stepPositions[stepPositions.length - 1],
                  transition: {
                    duration: JOURNEY_STEPS.length * 0.8,
                    ease: "easeInOut",
                  }
                } : {}}
                className="absolute -left-10 flex items-center justify-center z-20"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  className={`p-2 rounded-full border-2 ${
                    isDarkMode
                      ? "bg-gray-900 border-blue-500"
                      : "bg-white border-blue-400"
                  }`}
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                    className={`w-4 h-4 block rounded-full ${
                      isDarkMode ? "bg-blue-300" : "bg-blue-600"
                    }`}
                  />
                </motion.div>
              </motion.div>

              {/* Steps */}
              <div className="space-y-8 ml-10">
                {JOURNEY_STEPS.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={rightInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.3 }}
                    className="relative flex items-start"
                  >
                    {/* Step indicator */}
                    <div className="absolute -left-10 flex items-center justify-center mt-6">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={rightInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ 
                          type: "spring", 
                          stiffness: 200,
                          delay: index * 0.3 + 0.2 
                        }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          isDarkMode ? "bg-blue-700" : "bg-blue-500"
                        }`}
                      >
                        {step.icon ? (
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <step.icon className="text-white" size={16} />
                          </motion.div>
                        ) : (
                          <Award className="text-white" size={16} />
                        )}
                      </motion.div>
                    </div>

                    {/* Step Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={rightInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.3 + 0.1 }}
                      whileHover={{ 
                        x: 5,
                        boxShadow: isDarkMode 
                          ? "0 10px 25px -5px rgba(59, 130, 246, 0.4)" 
                          : "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
                      }}
                      className={`flex-1 p-6 rounded-xl shadow-lg ${
                        isDarkMode ? "bg-gray-800" : "bg-white"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <motion.h4
                          whileHover={{ color: isDarkMode ? "#93c5fd" : "#2563eb" }}
                          className={`font-semibold ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {step.title}
                        </motion.h4>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={rightInView ? { opacity: 1 } : {}}
                          transition={{ delay: index * 0.3 + 0.4 }}
                          className={`text-sm mt-1 sm:mt-0 ${
                            isDarkMode ? "text-blue-300" : "text-blue-600"
                          }`}
                        >
                          {step.duration}
                        </motion.span>
                      </div>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={rightInView ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.3 + 0.5 }}
                        className={`text-sm mb-3 ${
                          isDarkMode ? "text-blue-300" : "text-blue-600"
                        }`}
                      >
                        {step.company} • {step.location}
                      </motion.p>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={rightInView ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.3 + 0.6 }}
                        className={`text-sm mb-4 ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {step.description}
                      </motion.p>

                      {/* Skills */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={rightInView ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.3 + 0.7 }}
                        className="mb-3"
                      >
                        <h5
                          className={`text-xs font-semibold mb-1 ${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          Skills Developed
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {step.skills.map((skill, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={rightInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: index * 0.3 + 0.8 + i * 0.1 }}
                              whileHover={{ 
                                scale: 1.1,
                                backgroundColor: isDarkMode ? "#1e40af" : "#dbeafe",
                                color: isDarkMode ? "#fff" : "#1e40af"
                              }}
                              className={`text-xs px-3 py-1 rounded-full ${
                                isDarkMode
                                  ? "bg-gray-700 text-gray-300"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Achievements */}
                      {step.achievements?.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={rightInView ? { opacity: 1 } : {}}
                          transition={{ delay: index * 0.3 + 0.9 }}
                        >
                          <h5
                            className={`text-xs font-semibold mb-1 ${
                              isDarkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            Key Achievements
                          </h5>
                          <ul
                            className={`space-y-1 ${
                              isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {step.achievements.map((ach, i) => (
                              <motion.li 
                                key={i} 
                                className="flex items-start text-sm"
                                initial={{ opacity: 0, x: -10 }}
                                animate={rightInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: index * 0.3 + 1 + i * 0.1 }}
                              >
                                <motion.div
                                  animate={{ rotate: [0, 10, -10, 0] }}
                                  transition={{ 
                                    duration: 2, 
                                    repeat: Infinity,
                                    repeatDelay: 3,
                                    delay: i * 0.5
                                  }}
                                >
                                  <Award
                                    size={14}
                                    className={`mr-2 mt-0.5 ${
                                      isDarkMode
                                        ? "text-yellow-400"
                                        : "text-yellow-500"
                                    }`}
                                  />
                                </motion.div>
                                {ach}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* -------- Bottom CTA Banner -------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className={`mb-6 text-xl font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Ready to create something amazing together?
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.9 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: isDarkMode 
                ? "0 0 20px 5px rgba(59, 130, 246, 0.5)" 
                : "0 0 20px 5px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center px-8 py-3 rounded-full font-semibold ${
              isDarkMode
                ? "bg-blue-600 hover:bg-blue-500 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            } transition-colors`}
          >
            <motion.span
              initial={{ x: -5, opacity: 0 }}
              animate={sectionInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
            >
              Let&apos;s Connect
            </motion.span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="ml-2" size={20} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;