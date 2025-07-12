import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiGift, FiExternalLink, FiHeart, FiHome, FiCamera } = FiIcons;

const Registry = () => {
  const registries = [
    {
      store: "Williams Sonoma",
      description: "Kitchen essentials for our new home",
      icon: FiHome,
      url: "#",
      color: "bg-soft-olive dark:bg-warm-amber"
    },
    {
      store: "Crate & Barrel",
      description: "Home decor and furniture",
      icon: FiHeart,
      url: "#",
      color: "bg-dusty-rose dark:bg-sunset-orange"
    },
    {
      store: "REI",
      description: "Outdoor adventure gear",
      icon: FiCamera,
      url: "#",
      color: "bg-golden-honey dark:bg-midnight-olive"
    }
  ];

  const favoriteItems = [
    {
      name: "Artisan Coffee Set",
      description: "Perfect for our morning ritual",
      price: "$125",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Rustic Dinnerware Set",
      description: "For hosting friends and family",
      price: "$89",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Cozy Throw Blanket",
      description: "For movie nights together",
      price: "$65",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="registry" className="py-20 bg-linen dark:bg-twilight-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl font-bold text-soft-olive dark:text-warm-amber mb-6">
            Wedding Registry
          </h2>
          <p className="text-soft-olive/70 dark:text-cream/70 text-lg max-w-2xl mx-auto">
            Your presence is the greatest gift, but if you'd like to honor us with something special, 
            here are a few things we'd love for our new home together.
          </p>
        </motion.div>

        {/* Registry Stores */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {registries.map((registry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-cream/90 dark:bg-dusk-purple/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg card-hover text-center"
            >
              <div className={`${registry.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <SafeIcon icon={registry.icon} className="text-cream dark:text-twilight-blue text-2xl" />
              </div>
              <h3 className="font-script text-2xl font-bold text-soft-olive dark:text-warm-amber mb-2">
                {registry.store}
              </h3>
              <p className="text-soft-olive/70 dark:text-cream/70 mb-6">
                {registry.description}
              </p>
              <motion.a
                href={registry.url}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-soft-olive dark:bg-warm-amber text-cream dark:text-twilight-blue px-6 py-3 rounded-full font-medium hover:bg-golden-honey dark:hover:bg-sunset-orange transition-colors duration-200"
              >
                View Registry
                <SafeIcon icon={FiExternalLink} className="ml-2 text-sm" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Favorite Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="font-script text-3xl font-bold text-soft-olive dark:text-warm-amber text-center mb-8">
            A Few of Our Favorites
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {favoriteItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-cream/90 dark:bg-dusk-purple/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg card-hover"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="font-script text-xl font-bold text-soft-olive dark:text-warm-amber mb-2">
                    {item.name}
                  </h4>
                  <p className="text-soft-olive/70 dark:text-cream/70 text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-golden-honey dark:text-warm-amber font-bold text-lg">
                      {item.price}
                    </span>
                    <SafeIcon icon={FiHeart} className="text-dusty-rose dark:text-sunset-orange" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gift Card Option */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-kraft dark:bg-dusk-purple rounded-2xl p-8 shadow-lg paper-texture text-center"
        >
          <SafeIcon icon={FiGift} className="text-soft-olive dark:text-warm-amber text-4xl mx-auto mb-4" />
          <h3 className="font-script text-2xl font-bold text-soft-olive dark:text-warm-amber mb-4">
            Honeymoon Fund
          </h3>
          <p className="text-soft-olive dark:text-cream mb-6 max-w-2xl mx-auto">
            We're also saving for our dream honeymoon to Italy! If you'd prefer to contribute 
            to our adventure fund, we've set up a special account for travel memories.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-soft-olive dark:bg-warm-amber text-cream dark:text-twilight-blue px-8 py-3 rounded-full font-medium hover:bg-golden-honey dark:hover:bg-sunset-orange transition-colors duration-200"
          >
            Contribute to Honeymoon
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Registry;