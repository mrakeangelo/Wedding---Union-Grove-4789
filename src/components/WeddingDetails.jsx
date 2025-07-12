import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiClock, FiMusic, FiCamera, FiSun, FiMoon } = FiIcons;

const WeddingDetails = () => {
  const details = [
    {
      icon: FiSun,
      title: "Ceremony",
      time: "4:00 PM",
      location: "The Grove Estate Garden",
      description: "Join us for our outdoor ceremony surrounded by sunflowers and string lights",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: FiMusic,
      title: "Cocktail Hour",
      time: "5:00 PM",
      location: "The Grove Estate Patio",
      description: "Enjoy signature cocktails and acoustic music while we take photos",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: FiMoon,
      title: "Reception",
      time: "6:30 PM",
      location: "The Grove Estate Barn",
      description: "Dinner, dancing, and celebration under the stars until midnight",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const additionalInfo = [
    {
      icon: FiMapPin,
      title: "Getting There",
      content: "The Grove Estate is located 45 minutes from downtown. Shuttle service available from select hotels."
    },
    {
      icon: FiCamera,
      title: "Photography",
      content: "We'll have an unplugged ceremony. Please put away devices and enjoy the moment with us!"
    },
    {
      icon: FiClock,
      title: "Timing",
      content: "Please arrive 15 minutes early for the ceremony. The celebration continues until midnight."
    }
  ];

  return (
    <section id="details" className="py-20 bg-warm-beige dark:bg-dusk-purple">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl font-bold text-soft-olive dark:text-warm-amber mb-6">
            Wedding Details
          </h2>
          <p className="text-soft-olive/70 dark:text-cream/70 text-lg max-w-2xl mx-auto">
            All the important information you need for our special day
          </p>
        </motion.div>

        {/* Main Events */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-cream/90 dark:bg-twilight-blue/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              <div className="relative h-48">
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-soft-olive/20 dark:bg-dusk-purple/20" />
                <div className="absolute top-4 right-4 bg-cream/90 dark:bg-twilight-blue/90 p-2 rounded-full">
                  <SafeIcon icon={detail.icon} className="text-soft-olive dark:text-warm-amber text-xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-script text-2xl font-bold text-soft-olive dark:text-warm-amber mb-2">
                  {detail.title}
                </h3>
                <div className="flex items-center mb-2 text-soft-olive/70 dark:text-cream/70">
                  <SafeIcon icon={FiClock} className="mr-2" />
                  <span className="font-medium">{detail.time}</span>
                </div>
                <div className="flex items-center mb-3 text-soft-olive/70 dark:text-cream/70">
                  <SafeIcon icon={FiMapPin} className="mr-2" />
                  <span className="font-medium">{detail.location}</span>
                </div>
                <p className="text-soft-olive dark:text-cream text-sm">
                  {detail.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-3 gap-8">
          {additionalInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-linen/90 dark:bg-dusk-purple/50 backdrop-blur-sm rounded-xl p-6 shadow-lg paper-texture"
            >
              <div className="flex items-center mb-4">
                <div className="bg-soft-olive dark:bg-warm-amber p-3 rounded-full mr-4">
                  <SafeIcon icon={info.icon} className="text-cream dark:text-twilight-blue text-lg" />
                </div>
                <h3 className="font-script text-xl font-bold text-soft-olive dark:text-warm-amber">
                  {info.title}
                </h3>
              </div>
              <p className="text-soft-olive dark:text-cream text-sm leading-relaxed">
                {info.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Venue Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-cream/90 dark:bg-twilight-blue/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <h3 className="font-script text-3xl font-bold text-soft-olive dark:text-warm-amber mb-6 text-center">
            The Grove Estate
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="The Grove Estate"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <SafeIcon icon={FiMapPin} className="text-soft-olive dark:text-warm-amber mr-3" />
                  <span className="text-soft-olive dark:text-cream">
                    1234 Vineyard Lane, Napa Valley, CA 94558
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-soft-olive dark:bg-warm-amber text-cream dark:text-twilight-blue px-6 py-2 rounded-full font-medium hover:bg-golden-honey dark:hover:bg-sunset-orange transition-colors duration-200"
                >
                  Get Directions
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingDetails;