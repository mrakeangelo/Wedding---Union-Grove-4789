import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import WeddingDetails from './components/WeddingDetails';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import WeddingParty from './components/WeddingParty';
import LocationSection from './components/LocationSection';
import SpotifyPlaylist from './components/SpotifyPlaylist';
import LivestreamSection from './components/LivestreamSection';
import RSVP from './components/RSVP';
import Registry from './components/Registry';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import StickyRSVP from './components/StickyRSVP';
import ThemeToggle from './components/ThemeToggle';
import AdminLogin from './components/AdminLogin';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const MainWebsite = () => (
    <div className="min-h-screen bg-warm-beige dark:bg-twilight-blue bg-linen-texture transition-colors duration-500">
      <Navbar isDark={isDark} />
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <OurStory />
      <WeddingDetails />
      <Timeline />
      <Gallery />
      <WeddingParty />
      <LocationSection />
      <SpotifyPlaylist />
      <LivestreamSection />
      <RSVP />
      <Registry />
      <Guestbook />
      <Footer />
      <StickyRSVP />
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainWebsite />} />
        <Route path="/admin" element={<AdminLogin setIsAdmin={setIsAdmin} />} />
      </Routes>
    </Router>
  );
}

export default App;