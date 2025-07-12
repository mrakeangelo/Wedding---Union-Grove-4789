import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMusic, FiPlay, FiExternalLink } = FiIcons;

const SpotifyPlaylist = () => {
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
            Union Grove Vibes
          </h2>
          <p className="text-soft-olive/70 dark:text-cream/70 text-lg">
            The soundtrack to our love story
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-cream/90 dark:bg-dusk-purple/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg paper-texture"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="bg-soft-olive dark:bg-warm-amber p-4 rounded-full mr-4">
              <SafeIcon icon={FiMusic} className="text-cream dark:text-twilight-blue text-2xl" />
            </div>
            <div>
              <h3 className="font-script text-2xl font-bold text-soft-olive dark:text-warm-amber">
                Our Wedding Playlist
              </h3>
              <p className="text-soft-olive/70 dark:text-cream/70">
                Songs that tell our story
              </p>
            </div>
          </div>

          {/* Spotify Embed Placeholder */}
          <div className="bg-linen dark:bg-dusk-purple rounded-xl p-8 text-center mb-6">
            <div className="w-24 h-24 bg-soft-olive dark:bg-warm-amber rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiPlay} className="text-cream dark:text-twilight-blue text-3xl" />
            </div>
            <p className="text-soft-olive dark:text-cream mb-4">
              Listen to our curated playlist on Spotify
            </p>
            <motion.a
              href="https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-soft-olive dark:bg-warm-amber text-cream dark:text-twilight-blue px-6 py-3 rounded-full font-medium hover:bg-golden-honey dark:hover:bg-sunset-orange transition-colors duration-200"
            >
              <SafeIcon icon={FiExternalLink} className="mr-2" />
              Open in Spotify
            </motion.a>
          </div>

          {/* Featured Songs */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Perfect", artist: "Ed Sheeran", note: "Our first dance" },
              { title: "Marry Me", artist: "Train", note: "The proposal song" },
              { title: "All of Me", artist: "John Legend", note: "Sarah's favorite" },
              { title: "Thinking Out Loud", artist: "Ed Sheeran", note: "Michael's pick" }
            ].map((song, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-linen/50 dark:bg-dusk-purple/30 rounded-lg p-4"
              >
                <h4 className="font-script text-lg font-bold text-soft-olive dark:text-warm-amber">
                  {song.title}
                </h4>
                <p className="text-soft-olive/70 dark:text-cream/70 text-sm mb-1">
                  by {song.artist}
                </p>
                <p className="text-dusty-rose dark:text-sunset-orange text-xs italic">
                  {song.note}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpotifyPlaylist;