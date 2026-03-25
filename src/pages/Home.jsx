import React from 'react';
import { motion } from 'framer-motion'; // animation
import AboutSection from '../sections/AboutSection';
import Experience from '../components/Experience';
import StacksSection from '../sections/StacksSection';
import Location from '../sections/Location';
import ProjectsSection from '../sections/ProjectsSection';
import ContactSection from '../sections/ContactSection';

export default function Home() {
  // stagger children entry
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <motion.main
      variants={containerVars}
      initial="initial"
      animate="animate"
      className="flex flex-col gap-5  py-6"
    >
      {/* hero intro */}
      <AboutSection />

      {/* work history */}
      <Experience />

      {/* bento grid info */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch w-full gap-5">
        <Location />
        <StacksSection />
      </div>

      {/* project showcase */}
      <ProjectsSection startVal={0} endVal={4} />

      {/* final cta */}
      <ContactSection />
    </motion.main>
  );
}
