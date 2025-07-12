import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiX } = FiIcons;

const StickyRSVP = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rsvpSection = document.getElementById('rsvp');
      if (rsvpSection) {
        const rect = rsvpSection.getBoundingClientRect();
        const isRSVPVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        // Show sticky button when not in RSVP section and after hero
        setIsVisible(window.scrollY > 500 && !isRSVPVisible && !isHidden);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHidden]);

  const scrollToRSVP = () => {
    const rsvpSection = document.getElementById('rsvp');
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hideButton = () => {
    setIsHidden(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={hideButton}
              className="absolute -top-2 -right-2 bg-soft-olive dark:bg-warm-amber text-cream dark:text-twilight-blue w-6 h-6 rounded-full flex items-center justify-center text-xs hover:bg-golden-honey dark:hover:bg-sunset-orange transition-colors duration-200"
            >
              <SafeIcon icon={FiX} className="w-3 h-3" />
            </button>

            {/* RSVP Button */}
            <motion.button
              onClick={scrollToRSVP}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-soft-olive dark:bg-warm-amber text-cream dark:text-twilight-blue px-6 py-3 rounded-full font-medium shadow-lg hover:bg-golden-honey dark:hover:bg-sunset-orange transition-colors duration-200 flex items-center space-x-2"
            >
              <SafeIcon icon={FiHeart} className="text-lg" />
              <span>RSVP Now</span>
            </motion.button>

            {/* Pulsing Ring */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-soft-olive dark:bg-warm-amber rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyRSVP;