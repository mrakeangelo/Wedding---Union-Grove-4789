import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiHeart, FiMusic, FiCamera, FiSun, FiMoon, FiStar } = FiIcons;

const Timeline = () => {
  const timelineEvents = [
    {
      time: "3:30 PM",
      icon: FiSun,
      title: "Guest Arrival",
      description: "Welcome drinks and seating begins"
    },
    {
      time: "4:00 PM",
      icon: FiHeart,
      title: "Ceremony",
      description: "Sarah & Michael exchange vows"
    },
    {
      time: "4:30 PM",
      icon: FiCamera,
      title: "Photo Session",
      description: "Family and couple portraits"
    },
    {
      time: "5:00 PM",
      icon: FiMusic,
      title: "Cocktail Hour",
      description: "Drinks, appetizers & acoustic music"
    },
    {
      time: "6:30 PM",
      icon: FiStar,
      title: "Reception Begins",
      description: "Grand entrance and first dance"
    },
    {
      time: "7:00 PM",
      icon: FiSun,
      title: "Dinner Service",
      description: "Farm-to-table dining experience"
    },
    {
      time: "8:30 PM",
      icon: FiMusic,
      title: "Speeches & Toasts",
      description: "Heartfelt words from family & friends"
    },
    {
      time: "9:00 PM",
      icon: FiMoon,
      title: "Dancing",
      description: "Party under the stars until midnight"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-linen dark:bg-twilight-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl font-bold text-soft-olive dark:text-warm-amber mb-6">
            Wedding Timeline
          </h2>
          <p className="text-soft-olive/70 dark:text-cream/70 text-lg">
            A schedule of our special day's events
          </p>
        </motion.div>

        {/* Chalkboard Style Timeline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-kraft dark:bg-dusk-purple rounded-3xl p-8 md:p-12 shadow-2xl paper-texture"
        >
          <div className="bg-slate-800 dark:bg-slate-900 rounded-2xl p-8 shadow-inner">
            <h3 className="font-script text-3xl text-cream text-center mb-8">
              September 15, 2024
            </h3>
            
            <div className="space-y-6">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center group"
                >
                  {/* Time */}
                  <div className="w-20 text-right mr-6">
                    <span className="text-warm-amber font-bold text-lg">
                      {event.time}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="relative">
                    <div className="bg-warm-amber p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200">
                      <SafeIcon icon={event.icon} className="text-twilight-blue text-lg" />
                    </div>
                    {index < timelineEvents.length - 1 && (
                      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-warm-amber/30" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="ml-6 flex-1">
                    <h4 className="text-cream font-script text-xl font-bold mb-1">
                      {event.title}
                    </h4>
                    <p className="text-cream/70 text-sm">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="mt-8 pt-6 border-t border-warm-amber/30 text-center">
              <p className="text-cream/60 text-sm font-script">
                "Love is in the details" ✨
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-cream/90 dark:bg-dusk-purple/90 backdrop-blur-sm rounded-xl p-6 shadow-lg paper-texture">
            <div className="flex items-center mb-4">
              <SafeIcon icon={FiClock} className="text-soft-olive dark:text-warm-amber text-xl mr-3" />
              <h3 className="font-script text-xl font-bold text-soft-olive dark:text-warm-amber">
                Important Notes
              </h3>
            </div>
            <ul className="space-y-2 text-soft-olive dark:text-cream text-sm">
              <li>• Please arrive 15 minutes early for the ceremony</li>
              <li>• Cocktail hour will be outdoors, dress accordingly</li>
              <li>• Dancing continues until midnight</li>
              <li>• Late night snacks will be served at 10:30 PM</li>
            </ul>
          </div>

          <div className="bg-cream/90 dark:bg-dusk-purple/90 backdrop-blur-sm rounded-xl p-6 shadow-lg paper-texture">
            <div className="flex items-center mb-4">
              <SafeIcon icon={FiHeart} className="text-dusty-rose dark:text-sunset-orange text-xl mr-3" />
              <h3 className="font-script text-xl font-bold text-soft-olive dark:text-warm-amber">
                Special Moments
              </h3>
            </div>
            <ul className="space-y-2 text-soft-olive dark:text-cream text-sm">
              <li>• Sunset photos at 7:30 PM</li>
              <li>• Cake cutting at 8:00 PM</li>
              <li>• Bouquet toss at 9:30 PM</li>
              <li>• Last dance at 11:45 PM</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;