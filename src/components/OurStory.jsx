import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiStar, FiGift } = FiIcons;

const OurStory = () => {
  const storyCards = [
    {
      icon: FiStar,
      title: "How We Met",
      date: "Spring 2019",
      content: "It was a beautiful spring day at the local farmers market. Sarah was buying sunflowers for her apartment, and Michael was there with his camera, capturing the golden hour light. When he asked to photograph her with the sunflowers, neither of us knew it would be the first of thousands of photos together.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: FiHeart,
      title: "First Date",
      date: "Summer 2019",
      content: "Our first official date was a picnic in the park. Michael packed homemade sandwiches and Sarah brought her grandmother's lemonade recipe. We spent hours talking about our dreams, laughing at silly jokes, and watching the sunset paint the sky in shades of gold and pink.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: FiGift,
      title: "The Proposal",
      date: "Autumn 2023",
      content: "Michael proposed in the same sunflower field where they had their first photo session. He had been planning it for months, coordinating with the farmer to plant a heart-shaped patch of sunflowers. As Sarah turned around to see the heart, Michael was down on one knee with her grandmother's ring.",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="story" className="py-20 bg-linen dark:bg-twilight-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl font-bold text-soft-olive dark:text-warm-amber mb-6">
            Our Love Story
          </h2>
          <div className="flex justify-center items-center">
            <div className="h-px bg-soft-olive dark:bg-warm-amber w-24" />
            <SafeIcon icon={FiHeart} className="mx-4 text-dusty-rose dark:text-sunset-orange text-2xl" />
            <div className="h-px bg-soft-olive dark:bg-warm-amber w-24" />
          </div>
        </motion.div>

        <div className="space-y-12">
          {storyCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="polaroid">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="bg-cream/90 dark:bg-dusk-purple/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg paper-texture card-hover">
                  <div className="flex items-center mb-4">
                    <div className="bg-soft-olive dark:bg-warm-amber p-3 rounded-full mr-4">
                      <SafeIcon icon={card.icon} className="text-cream dark:text-twilight-blue text-xl" />
                    </div>
                    <div>
                      <h3 className="font-script text-2xl font-bold text-soft-olive dark:text-warm-amber">
                        {card.title}
                      </h3>
                      <p className="text-soft-olive/70 dark:text-cream/70 font-medium">
                        {card.date}
                      </p>
                    </div>
                  </div>
                  <p className="text-soft-olive dark:text-cream leading-relaxed">
                    {card.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;