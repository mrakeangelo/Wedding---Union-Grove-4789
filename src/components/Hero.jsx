import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import StringLights from './StringLights';
import CountdownTimer from './CountdownTimer';

const { FiHeart, FiCalendar, FiMapPin } = FiIcons;

const Hero = () => {
  const weddingDate = new Date('2024-09-15T16:00:00');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Sunflower field at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-warm-beige/30 dark:bg-twilight-blue/50" />
      </div>

      {/* String Lights */}
      <StringLights />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-cream/90 dark:bg-dusk-purple/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl paper-texture"
        >
          {/* Couple Names */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-script text-5xl md:text-7xl font-bold text-soft-olive dark:text-warm-amber mb-4"
          >
            Sarah & Michael
          </motion.h1>

          {/* Heart Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center mb-6"
          >
            <div className="h-px bg-soft-olive dark:bg-warm-amber w-16" />
            <SafeIcon icon={FiHeart} className="mx-4 text-dusty-rose dark:text-sunset-orange text-2xl animate-bounce-gentle" />
            <div className="h-px bg-soft-olive dark:bg-warm-amber w-16" />
          </motion.div>

          {/* Wedding Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center mb-6 text-soft-olive dark:text-cream"
          >
            <SafeIcon icon={FiCalendar} className="mr-2 text-xl" />
            <span className="text-xl md:text-2xl font-medium">September 15, 2024</span>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center mb-8 text-soft-olive dark:text-cream"
          >
            <SafeIcon icon={FiMapPin} className="mr-2 text-xl" />
            <span className="text-lg md:text-xl">The Grove Estate, Napa Valley</span>
          </motion.div>

          {/* Countdown Timer */}
          <CountdownTimer targetDate={weddingDate} />

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('rsvp').scrollIntoView({ behavior: 'smooth' })}
              className="bg-soft-olive dark:bg-warm-amber text-cream dark:text-twilight-blue px-8 py-3 rounded-full font-medium text-lg hover:bg-golden-honey dark:hover:bg-sunset-orange transition-colors duration-200 shadow-lg"
            >
              RSVP Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-10 text-golden-honey dark:text-warm-amber text-3xl opacity-30"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-20 right-10 text-dusty-rose dark:text-sunset-orange text-4xl opacity-30"
      >
        🌻
      </motion.div>
    </section>
  );
};

export default Hero;