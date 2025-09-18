import React from 'react';
import { motion } from 'framer-motion';

const InputField = ({
  id,
  label,
  type,
  value,
  onChange,
  required = false,
  isDarkMode,
  placeholder,
  textarea = false,
  rows = 5
}) => {
  const inputClasses = `w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
    isDarkMode 
      ? "bg-gray-700 border-gray-600 text-white" 
      : "bg-gray-50 border-gray-300 text-gray-900"
  }`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <label 
        htmlFor={id} 
        className={`block mb-2 font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
      >
        {label}
      </label>
      
      {textarea ? (
        <textarea
          id={id}
          rows={rows}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={inputClasses}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={inputClasses}
          placeholder={placeholder}
        />
      )}
    </motion.div>
  );
};

export default InputField;