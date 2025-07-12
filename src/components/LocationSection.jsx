import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiClock, FiPhone, FiExternalLink, FiCamera } = FiIcons;

const LocationSection = () => {
  const locationDetails = [
    {
      icon: FiMapPin,
      title: "Address",
      content: "1234 Vineyard Lane, Napa Valley, CA 94558"
    },
    {
      icon: FiClock,
      title: "Travel Time",
      content: "45 minutes from San Francisco, 1 hour from Sacramento"
    },
    {
      icon: FiPhone,
      title: "Venue Contact",
      content: "(707) 555-0123"
    }
  ];

  return (
    <section className="py-20 bg-warm-beige dark:bg-dusk-purple">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl font-bold text-soft-olive dark:text-warm-amber mb-6">
            The Grove
          </h2>
          <p className="text-soft-olive/70 dark:text-cream/70 text-lg">
            Where our forever begins
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="The Grove Estate at sunset"
            className="w-full h-96 md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="font-script text-3xl font-bold mb-2">The Grove Estate</h3>
            <p className="text-lg opacity-90">Napa Valley's hidden gem</p>
          </div>
        </motion.div>

        {/* Location Details */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {locationDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-cream/90 dark:bg-twilight-blue/90 backdrop-blur-sm rounded-xl p-6 shadow-lg paper-texture text-center"
            >
              <div className="bg-soft-olive dark:bg-warm-amber w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={detail.icon} className="text-cream dark:text-twilight-blue text-lg" />
              </div>
              <h3 className="font-script text-xl font-bold text-soft-olive dark:text-warm-amber mb-2">
                {detail.title}
              </h3>
              <p className="text-soft-olive dark:text-cream text-sm">
                {detail.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="font-script text-3xl font-bold text-soft-olive dark:text-warm-amber text-center mb-8">
            Venue Gallery
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
              "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
              "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="polaroid"
              >
                <img
                  src={src}
                  alt={`Venue photo ${index + 1}`}
                  className="w-full h-48 object-cover rounded-sm"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Map and Directions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-linen dark:bg-dusk-purple/50 rounded-2xl p-8 shadow-lg paper-texture"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-script text-2xl font-bold text-soft-olive dark:text-warm-amber mb-4">
                Getting to The Grove
              </h3>
              <div className="space-y-4 text-soft-olive dark:text-cream">
                <p>
                  <strong>From San Francisco:</strong> Take Highway 101 North to Highway 37 West, 
                  then follow signs to Napa Valley. The Grove Estate will be on your right.
                </p>
                <p>
                  <strong>Parking:</strong> Complimentary valet parking available on-site.
                </p>
                <p>
                  <strong>Shuttle Service:</strong> Available from select hotels in Napa Valley. 
                  Contact us for details.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center bg-soft-olive dark:bg-warm-amber text-cream dark:text-twilight-blue px-4 py-2 rounded-full font-medium hover:bg-golden-honey dark:hover:bg-sunset-orange transition-colors duration-200"
                >
                  <SafeIcon icon={FiMapPin} className="mr-2" />
                  Get Directions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center bg-dusty-rose dark:bg-sunset-orange text-cream dark:text-twilight-blue px-4 py-2 rounded-full font-medium hover:bg-golden-honey dark:hover:bg-warm-amber transition-colors duration-200"
                >
                  <SafeIcon icon={FiCamera} className="mr-2" />
                  Virtual Tour
                </motion.button>
              </div>
            </div>
            <div className="bg-kraft dark:bg-dusk-purple rounded-xl p-6 text-center">
              <div className="w-full h-64 bg-soft-olive/20 dark:bg-warm-amber/20 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <SafeIcon icon={FiMapPin} className="text-soft-olive dark:text-warm-amber text-4xl mb-2" />
                  <p className="text-soft-olive dark:text-cream">Interactive Map</p>
                  <p className="text-soft-olive/70 dark:text-cream/70 text-sm">
                    Click to view in Google Maps
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-full bg-soft-olive dark:bg-warm-amber text-cream dark:text-twilight-blue py-2 rounded-lg font-medium hover:bg-golden-honey dark:hover:bg-sunset-orange transition-colors duration-200"
              >
                <SafeIcon icon={FiExternalLink} className="mr-2" />
                Open in Maps
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;