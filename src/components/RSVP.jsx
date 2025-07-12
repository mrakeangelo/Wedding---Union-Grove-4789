import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiUser, FiUsers, FiCheck, FiX } = FiIcons;

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attendance: '',
    mealChoice: '',
    dietary: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('RSVP submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        guests: '1',
        attendance: '',
        mealChoice: '',
        dietary: '',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 bg-warm-beige dark:bg-dusk-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-cream/90 dark:bg-twilight-blue/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl"
          >
            <div className="w-20 h-20 bg-soft-olive dark:bg-warm-amber rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiCheck} className="text-cream dark:text-twilight-blue text-3xl" />
            </div>
            <h2 className="font-script text-4xl font-bold text-soft-olive dark:text-warm-amber mb-4">
              Thank You!
            </h2>
            <p className="text-soft-olive dark:text-cream text-lg mb-6">
              Your RSVP has been received. We can't wait to celebrate with you!
            </p>
            <div className="flex justify-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-dusty-rose dark:text-sunset-orange text-4xl"
              >
                🌻
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-warm-beige dark:bg-dusk-purple">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl font-bold text-soft-olive dark:text-warm-amber mb-6">
            RSVP
          </h2>
          <p className="text-soft-olive/70 dark:text-cream/70 text-lg">
            Please let us know if you can join us for our special day
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-cream/90 dark:bg-twilight-blue/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl paper-texture"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-soft-olive dark:text-cream font-medium mb-2">
                Full Name *
              </label>
              <div className="relative">
                <SafeIcon icon={FiUser} className="absolute left-3 top-3 text-soft-olive/50 dark:text-cream/50" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-linen dark:bg-dusk-purple border border-soft-olive/20 dark:border-warm-amber/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-olive dark:focus:ring-warm-amber text-soft-olive dark:text-cream"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-soft-olive dark:text-cream font-medium mb-2">
                Email Address *
              </label>
              <div className="relative">
                <SafeIcon icon={FiMail} className="absolute left-3 top-3 text-soft-olive/50 dark:text-cream/50" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-linen dark:bg-dusk-purple border border-soft-olive/20 dark:border-warm-amber/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-olive dark:focus:ring-warm-amber text-soft-olive dark:text-cream"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Number of Guests */}
            <div>
              <label className="block text-soft-olive dark:text-cream font-medium mb-2">
                Number of Guests *
              </label>
              <div className="relative">
                <SafeIcon icon={FiUsers} className="absolute left-3 top-3 text-soft-olive/50 dark:text-cream/50" />
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-linen dark:bg-dusk-purple border border-soft-olive/20 dark:border-warm-amber/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-olive dark:focus:ring-warm-amber text-soft-olive dark:text-cream"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>
            </div>

            {/* Attendance */}
            <div>
              <label className="block text-soft-olive dark:text-cream font-medium mb-4">
                Will you be attending? *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <motion.label
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    formData.attendance === 'yes'
                      ? 'border-soft-olive dark:border-warm-amber bg-soft-olive/10 dark:bg-warm-amber/10'
                      : 'border-soft-olive/20 dark:border-warm-amber/20 hover:border-soft-olive/40 dark:hover:border-warm-amber/40'
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={formData.attendance === 'yes'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <SafeIcon icon={FiCheck} className="mr-2 text-soft-olive dark:text-warm-amber" />
                  <span className="text-soft-olive dark:text-cream font-medium">
                    Yes, I'll be there!
                  </span>
                </motion.label>
                
                <motion.label
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    formData.attendance === 'no'
                      ? 'border-dusty-rose dark:border-sunset-orange bg-dusty-rose/10 dark:bg-sunset-orange/10'
                      : 'border-soft-olive/20 dark:border-warm-amber/20 hover:border-soft-olive/40 dark:hover:border-warm-amber/40'
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={formData.attendance === 'no'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <SafeIcon icon={FiX} className="mr-2 text-dusty-rose dark:text-sunset-orange" />
                  <span className="text-soft-olive dark:text-cream font-medium">
                    Sorry, can't make it
                  </span>
                </motion.label>
              </div>
            </div>

            {/* Meal Choice - only show if attending */}
            {formData.attendance === 'yes' && (
              <div>
                <label className="block text-soft-olive dark:text-cream font-medium mb-2">
                  Meal Choice *
                </label>
                <select
                  name="mealChoice"
                  value={formData.mealChoice}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-linen dark:bg-dusk-purple border border-soft-olive/20 dark:border-warm-amber/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-olive dark:focus:ring-warm-amber text-soft-olive dark:text-cream"
                >
                  <option value="">Select your meal</option>
                  <option value="herb-chicken">Herb-Crusted Chicken</option>
                  <option value="grilled-salmon">Grilled Salmon</option>
                  <option value="vegetarian">Vegetarian Pasta</option>
                  <option value="vegan">Vegan Option</option>
                </select>
              </div>
            )}

            {/* Dietary Restrictions */}
            {formData.attendance === 'yes' && (
              <div>
                <label className="block text-soft-olive dark:text-cream font-medium mb-2">
                  Dietary Restrictions
                </label>
                <textarea
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-4 py-3 bg-linen dark:bg-dusk-purple border border-soft-olive/20 dark:border-warm-amber/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-olive dark:focus:ring-warm-amber text-soft-olive dark:text-cream resize-none"
                  placeholder="Any allergies or dietary restrictions?"
                />
              </div>
            )}

            {/* Message */}
            <div>
              <label className="block text-soft-olive dark:text-cream font-medium mb-2">
                Message for the Couple
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 bg-linen dark:bg-dusk-purple border border-soft-olive/20 dark:border-warm-amber/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-olive dark:focus:ring-warm-amber text-soft-olive dark:text-cream resize-none handwritten-input"
                placeholder="Leave a sweet message for Sarah & Michael..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-soft-olive dark:bg-warm-amber text-cream dark:text-twilight-blue py-4 rounded-lg font-medium text-lg hover:bg-golden-honey dark:hover:bg-sunset-orange transition-colors duration-200 shadow-lg"
            >
              Send RSVP
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;