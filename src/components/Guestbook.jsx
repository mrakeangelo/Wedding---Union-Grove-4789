import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiEdit3, FiHeart, FiSend } = FiIcons;

const Guestbook = () => {
  const [newMessage, setNewMessage] = useState({ name: '', message: '' });
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Jessica & Tom",
      message: "Can't wait to celebrate with you both! Your love story is so beautiful 💕",
      timestamp: "2 days ago"
    },
    {
      id: 2,
      name: "Mom & Dad Williams",
      message: "We are so proud of you both and excited to welcome Sarah to our family! Love you!",
      timestamp: "1 week ago"
    },
    {
      id: 3,
      name: "College Friends",
      message: "From dorm room movie nights to your wedding day - we've loved watching your love grow! 🌻",
      timestamp: "3 days ago"
    },
    {
      id: 4,
      name: "Aunt Linda",
      message: "Wishing you a lifetime of happiness and adventures together. Can't wait for the big day!",
      timestamp: "5 days ago"
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      const message = {
        id: messages.length + 1,
        name: newMessage.name,
        message: newMessage.message,
        timestamp: "Just now"
      };
      setMessages([message, ...messages]);
      setNewMessage({ name: '', message: '' });
    }
  };

  return (
    <section id="guestbook" className="py-20 bg-warm-beige dark:bg-dusk-purple">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl font-bold text-soft-olive dark:text-warm-amber mb-6">
            Sign Our Barn Wall
          </h2>
          <p className="text-soft-olive/70 dark:text-cream/70 text-lg">
            Leave us a message of love, advice, or just say hello!
          </p>
        </motion.div>

        {/* Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-cream/90 dark:bg-twilight-blue/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg paper-texture mb-12"
        >
          <div className="flex items-center mb-6">
            <SafeIcon icon={FiEdit3} className="text-soft-olive dark:text-warm-amber text-2xl mr-3" />
            <h3 className="font-script text-2xl font-bold text-soft-olive dark:text-warm-amber">
              Leave a Message
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                value={newMessage.name}
                onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
                placeholder="Your name..."
                className="w-full handwritten-input bg-transparent border-b-2 border-soft-olive dark:border-warm-amber text-soft-olive dark:text-cream placeholder-soft-olive/50 dark:placeholder-cream/50 focus:outline-none focus:border-golden-honey dark:focus:border-sunset-orange"
                required
              />
            </div>
            <div>
              <textarea
                value={newMessage.message}
                onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
                placeholder="Write your message here..."
                rows="4"
                className="w-full handwritten-input bg-transparent border-b-2 border-soft-olive dark:border-warm-amber text-soft-olive dark:text-cream placeholder-soft-olive/50 dark:placeholder-cream/50 focus:outline-none focus:border-golden-honey dark:focus:border-sunset-orange resize-none"
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-soft-olive dark:bg-warm-amber text-cream dark:text-twilight-blue px-6 py-3 rounded-full font-medium hover:bg-golden-honey dark:hover:bg-sunset-orange transition-colors duration-200"
            >
              <SafeIcon icon={FiSend} className="mr-2" />
              Sign the Wall
            </motion.button>
          </form>
        </motion.div>

        {/* Messages Wall */}
        <div className="space-y-6">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-linen dark:bg-dusk-purple/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg paper-texture transform ${
                index % 2 === 0 ? 'rotate-1' : '-rotate-1'
              } hover:rotate-0 transition-transform duration-300`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <SafeIcon icon={FiHeart} className="text-dusty-rose dark:text-sunset-orange mr-2" />
                  <span className="font-script text-lg font-bold text-soft-olive dark:text-warm-amber">
                    {message.name}
                  </span>
                </div>
                <span className="text-soft-olive/50 dark:text-cream/50 text-sm">
                  {message.timestamp}
                </span>
              </div>
              <p className="text-soft-olive dark:text-cream font-script text-lg leading-relaxed">
                {message.message}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="flex justify-center items-center space-x-4 text-3xl">
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🌻
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              💕
            </motion.span>
            <motion.span
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🌻
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guestbook;