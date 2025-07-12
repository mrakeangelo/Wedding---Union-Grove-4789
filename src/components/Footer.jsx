import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMail, FiPhone, FiMapPin } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-kraft dark:bg-dusk-purple py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Couple Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h3 className="font-script text-3xl font-bold text-soft-olive dark:text-warm-amber mb-4">
              Sarah & Michael
            </h3>
            <p className="text-soft-olive/70 dark:text-cream/70 mb-4">
              Thank you for being part of our journey. We can't wait to celebrate with you!
            </p>
            <div className="flex justify-center md:justify-start">
              <SafeIcon icon={FiHeart} className="text-dusty-rose dark:text-sunset-orange text-2xl animate-bounce-gentle" />
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h4 className="font-script text-xl font-bold text-soft-olive dark:text-warm-amber mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-soft-olive/70 dark:text-cream/70">
              <div className="flex items-center justify-center">
                <SafeIcon icon={FiMail} className="mr-2" />
                <span>sarah.michael@email.com</span>
              </div>
              <div className="flex items-center justify-center">
                <SafeIcon icon={FiPhone} className="mr-2" />
                <span>(555) 123-4567</span>
              </div>
            </div>
          </motion.div>

          {/* Wedding Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="font-script text-xl font-bold text-soft-olive dark:text-warm-amber mb-4">
              Wedding Details
            </h4>
            <div className="space-y-3 text-soft-olive/70 dark:text-cream/70">
              <div className="flex items-center justify-center md:justify-end">
                <SafeIcon icon={FiMapPin} className="mr-2" />
                <span>The Grove Estate, Napa Valley</span>
              </div>
              <div>
                <span>September 15, 2024</span>
              </div>
              <div>
                <span>4:00 PM</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-soft-olive/20 dark:border-warm-amber/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-soft-olive/60 dark:text-cream/60 text-sm mb-4 md:mb-0"
            >
              Union Grove – A Rustic Wedding Template by Mrake Agency
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex space-x-4"
            >
              <span className="text-soft-olive/60 dark:text-cream/60 text-sm">
                Made with love for Sarah & Michael
              </span>
              <SafeIcon icon={FiHeart} className="text-dusty-rose dark:text-sunset-orange" />
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="flex justify-center items-center space-x-8 text-2xl opacity-30">
            <motion.span
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🌻
            </motion.span>
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              ✨
            </motion.span>
            <motion.span
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🌻
            </motion.span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;