import React from 'react';
import { motion } from 'framer-motion'; // animation
import ContactSection from '../sections/ContactSection';
import ContactDetails from '../sections/ContactDetails';

export default function Contact() {
  // fade config
  const pageFade = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={pageFade}
      initial="initial"
      animate="animate"
      className="flex flex-col gap-6 py-6"
    >
      {/* contact info */}
      <ContactDetails />
      {/* form section */}
      <ContactSection />
    </motion.div>
  );
}
