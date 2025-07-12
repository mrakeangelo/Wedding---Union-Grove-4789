import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiVideo, FiHeart, FiUsers, FiPlay, FiMail } = FiIcons;

const LivestreamSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  if (isSubscribed) {
    return (
      <section className="py-20 bg-linen dark:bg-twilight-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-cream/90 dark:bg-dusk-purple/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl"
          >
            <div className="w-20 h-20 bg-soft-olive dark:bg-warm-amber rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiHeart} className="text-cream dark:text-twilight-blue text-3xl" />
            </div>
            <h2 className="font-script text-4xl font-bold text-soft-olive dark:text-warm-amber mb-4">
              You're All Set!
            </h2>
            <p className="text-soft-olive dark:text-cream text-lg">
              We'll send you the livestream link closer to the wedding date.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-linen dark:bg-twilight-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl font-bold text-soft-olive dark:text-warm-amber mb-6">
            Join Us Virtually
          </h2>
          <p className="text-soft-olive/70 dark:text-cream/70 text-lg">
            Can't make it in person? Watch our ceremony live online
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-cream/90 dark:bg-twilight-blue/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl paper-texture"
        >
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-soft-olive dark:bg-warm-amber rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiVideo} className="text-cream dark:text-twilight-blue text-3xl" />
            </div>
            <h3 className="font-script text-3xl font-bold text-soft-olive dark:text-warm-amber mb-4">
              Live Ceremony Stream
            </h3>
            <p className="text-soft-olive dark:text-cream mb-6">
              We want to share our special moment with everyone we love, no matter where you are. 
              Our ceremony will be livestreamed on September 15th at 4:00 PM PST.
            </p>
          </div>

          {/* Stream Preview */}
          <div className="bg-linen dark:bg-dusk-purple rounded-2xl p-8 mb-8 text-center">
            <div className="w-full h-64 bg-soft-olive/20 dark:bg-warm-amber/20 rounded-xl flex items-center justify-center mb-4">
              <div className="text-center">
                <SafeIcon icon={FiPlay} className="text-soft-olive dark:text-warm-amber text-5xl mb-4" />
                <p className="text-soft-olive dark:text-cream text-lg font-medium">
                  Livestream Preview
                </p>
                <p className="text-soft-olive/70 dark:text-cream/70 text-sm">
                  The stream will go live 15 minutes before the ceremony
                </p>
              </div>
            </div>
          </div>

          {/* Email Signup */}
          <div className="bg-kraft dark:bg-dusk-purple/50 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <SafeIcon icon={FiUsers} className="text-soft-olive dark:text-warm-amber text-2xl mr-3" />
              <h4 className="font-script text-xl font-bold text-soft-olive dark:text-warm-amber">
                Get the Stream Link
              </h4>
            </div>
            <p className="text-soft-olive dark:text-cream text-center mb-6">
              Sign up to receive the livestream link and reminders
            </p>
            
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <SafeIcon icon={FiMail} className="absolute left-3 top-3 text-soft-olive/50 dark:text-cream/50" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-cream dark:bg-twilight-blue border border-soft-olive/20 dark:border-warm-amber/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-olive dark:focus:ring-warm-amber text-soft-olive dark:text-cream"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-soft-olive dark:bg-warm-amber text-cream dark:text-twilight-blue px-6 py-3 rounded-lg font-medium hover:bg-golden-honey dark:hover:bg-sunset-orange transition-colors duration-200"
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </div>

          {/* Stream Details */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-linen/50 dark:bg-dusk-purple/30 rounded-xl p-4">
              <h5 className="font-script text-lg font-bold text-soft-olive dark:text-warm-amber mb-2">
                Stream Time
              </h5>
              <p className="text-soft-olive dark:text-cream text-sm">
                September 15, 2024<br />
                4:00 PM PST
              </p>
            </div>
            <div className="bg-linen/50 dark:bg-dusk-purple/30 rounded-xl p-4">
              <h5 className="font-script text-lg font-bold text-soft-olive dark:text-warm-amber mb-2">
                Duration
              </h5>
              <p className="text-soft-olive dark:text-cream text-sm">
                Approximately<br />
                45 minutes
              </p>
            </div>
            <div className="bg-linen/50 dark:bg-dusk-purple/30 rounded-xl p-4">
              <h5 className="font-script text-lg font-bold text-soft-olive dark:text-warm-amber mb-2">
                Platform
              </h5>
              <p className="text-soft-olive dark:text-cream text-sm">
                Private YouTube<br />
                Stream
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LivestreamSection;