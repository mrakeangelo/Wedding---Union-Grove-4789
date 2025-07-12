import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiUsers } = FiIcons;

const WeddingParty = () => {
  const bridesmaids = [
    {
      name: "Emma Johnson",
      role: "Maid of Honor",
      bio: "Sarah's sister and best friend since childhood. Emma loves hiking and makes the best banana bread.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Lisa Chen",
      role: "Bridesmaid",
      bio: "College roommate and travel buddy. Lisa is a photographer who captured many of our early memories.",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Rachel Davis",
      role: "Bridesmaid",
      bio: "Childhood friend and yoga instructor. Rachel brings zen energy to every gathering.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const groomsmen = [
    {
      name: "David Thompson",
      role: "Best Man",
      bio: "Michael's brother and adventure partner. David is a chef who loves outdoor cooking.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "James Wilson",
      role: "Groomsman",
      bio: "College best friend and music lover. James plays guitar and will perform during the ceremony.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Alex Rodriguez",
      role: "Groomsman",
      bio: "Work colleague turned close friend. Alex is a wine enthusiast who helped select our wedding wines.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const WeddingPartyCard = ({ person, index, side }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-cream/90 dark:bg-dusk-purple/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg card-hover"
    >
      <div className="relative">
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="font-script text-xl font-bold">{person.name}</h3>
          <p className="text-sm opacity-90">{person.role}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-soft-olive dark:text-cream text-sm leading-relaxed">
          {person.bio}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section id="party" className="py-20 bg-linen dark:bg-twilight-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl font-bold text-soft-olive dark:text-warm-amber mb-6">
            Wedding Party
          </h2>
          <p className="text-soft-olive/70 dark:text-cream/70 text-lg">
            The amazing people standing by our side
          </p>
        </motion.div>

        {/* Bridesmaids */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <SafeIcon icon={FiHeart} className="text-dusty-rose dark:text-sunset-orange text-2xl mr-3" />
              <h3 className="font-script text-3xl font-bold text-soft-olive dark:text-warm-amber">
                Bridesmaids
              </h3>
            </div>
            <p className="text-soft-olive/70 dark:text-cream/70">
              Sarah's chosen sisters
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {bridesmaids.map((person, index) => (
              <WeddingPartyCard
                key={person.name}
                person={person}
                index={index}
                side="bride"
              />
            ))}
          </div>
        </div>

        {/* Groomsmen */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <SafeIcon icon={FiUsers} className="text-soft-olive dark:text-warm-amber text-2xl mr-3" />
              <h3 className="font-script text-3xl font-bold text-soft-olive dark:text-warm-amber">
                Groomsmen
              </h3>
            </div>
            <p className="text-soft-olive/70 dark:text-cream/70">
              Michael's chosen brothers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {groomsmen.map((person, index) => (
              <WeddingPartyCard
                key={person.name}
                person={person}
                index={index}
                side="groom"
              />
            ))}
          </div>
        </div>

        {/* Thank You Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-kraft dark:bg-dusk-purple rounded-2xl p-8 text-center shadow-lg paper-texture"
        >
          <h3 className="font-script text-2xl font-bold text-soft-olive dark:text-warm-amber mb-4">
            A Special Thank You
          </h3>
          <p className="text-soft-olive dark:text-cream leading-relaxed max-w-2xl mx-auto">
            To our wedding party - thank you for being part of our journey and for standing with us 
            on our special day. Your friendship, support, and love mean the world to us. We can't 
            wait to celebrate with you!
          </p>
          <div className="mt-6 flex justify-center">
            <SafeIcon icon={FiHeart} className="text-dusty-rose dark:text-sunset-orange text-2xl animate-bounce-gentle" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingParty;