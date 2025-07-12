import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSun, FiMoon } = FiIcons;

const ThemeToggle = ({ isDark, setIsDark }) => {
  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-20 right-4 z-40 bg-cream/90 dark:bg-dusk-purple/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
          scale: isDark ? 0.8 : 1
        }}
        transition={{ duration: 0.3 }}
      >
        <SafeIcon 
          icon={isDark ? FiMoon : FiSun} 
          className={`w-6 h-6 ${
            isDark ? 'text-warm-amber' : 'text-soft-olive'
          }`} 
        />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;