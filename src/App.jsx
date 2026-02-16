import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Preloader from './components/Preloader';

import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import SkillsSection from './sections/SkillsSection';
import Background from './sections/Background';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Preloader key="preloader" />
      ) : (
        <div key="content">
          <Hero />
          <About />
          <Projects />
          <SkillsSection />
          <Background />
          <Contact />
          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
}
