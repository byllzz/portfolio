import React from 'react';
import { motion } from 'framer-motion'; // animation
import AboutHero from '../sections/AboutHero';
import Achievements from '../components/Achievements';
import Education from '../components/Education';
import Experience from '../components/Experience';
import TalkToMe from '../components/TalkToMe';

export default function About() {
  // page transition
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0 }
  };

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col gap-5 py-6"
    >
      {/* hero section */}
      <AboutHero />

      {/* history section */}
      <div className="flex flex-col gap-6">
        <Experience />
        <Education />
      </div>

      {/* awards section */}
      <Achievements />

      {/* footer cta */}
      <TalkToMe />
    </motion.main>
  );
}
