import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, setDarkMode }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle theme"
      className={`fixed top-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${darkMode 
          ? 'glass-effect-dark border-neon-cyan hover:shadow-[0_0_25px_#00ffff88]'
          : 'glass-effect border-black light-glow-text hover:shadow-md'
        }
      `}
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 0 : 180 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-center"
      >
        {darkMode ? (
          <Sun size={24} className="text-neon-cyan drop-shadow-md" />
        ) : (
          <Moon size={24} className="text-purple-800 drop-shadow" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
