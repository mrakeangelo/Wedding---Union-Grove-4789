import React from 'react';
import { motion } from 'framer-motion';

const StringLights = () => {
  const lights = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="absolute top-0 left-0 right-0 z-5 h-16">
      <div className="relative h-full">
        {/* String Line */}
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-golden-honey dark:bg-warm-amber opacity-60" />
        
        {/* Lights */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center h-full px-4">
          {lights.map((light) => (
            <motion.div
              key={light}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: light * 0.1,
                ease: "easeInOut"
              }}
              className="w-3 h-3 rounded-full bg-golden-honey dark:bg-warm-amber shadow-lg"
              style={{
                boxShadow: `0 0 10px ${light % 3 === 0 ? '#DAA520' : light % 3 === 1 ? '#D4A5A5' : '#8B956D'}`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StringLights;