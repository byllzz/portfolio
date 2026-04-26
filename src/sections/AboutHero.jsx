import React from 'react';
import { motion } from 'framer-motion'; // animation

const AboutHero = () => {
  // animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const textVars = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={containerVars}
      initial="hidden"
      animate="visible"
      className="bg txt py-6 font-bai px-6 rounded-[30px]"
    >
      {/* main title */}
      <motion.h1 variants={textVars} className="text-[36px] font-semibold mb-2 tracking-tight">
        Get to Know Me Better!
      </motion.h1>

      {/* bio content */}
      <div className="space-y-6 txt leading-5.5">
        <motion.p variants={textVars}>
          Hello! I’m Bilal Malik, a Frontend Developer with a passion for building high-performance,
          visually immersive web experiences
        </motion.p>

        <motion.p variants={textVars}>
          My journey began with a fascination for the design languages of Android and iOS. That
          curiosity-the desire to deconstruct and customize GUIs—is what eventually led me from
          Figma prototypes to the world of clean, scalable code
        </motion.p>

        <motion.p variants={textVars}>
          Today, I specialize in crafting seamless user interfaces using React and TypeScript. While
          my roots are in the core pillars of the web (HTML5, CSS3, JS), I’ve expanded my toolkit to
          include Angular, Node.js, and MongoDB, giving me a robust understanding of the full stack.
          I don't just write code; I bridge the gap between design and engineering. I’m constantly
          exploring emerging AI tools and UI/UX trends to ensure every application I build is both
          cutting-edge and user-centric.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default AboutHero;
