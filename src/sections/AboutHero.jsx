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
      className="space bg-[#000] text-white py-6 font-bai px-6 rounded-[30px]"
    >
      {/* main title */}
      <motion.h1
        variants={textVars}
        className="text-[36px] font-semibold mb-2 tracking-tight"
      >
        Get to Know Me Better!
      </motion.h1>

      {/* bio content */}
      <div className="space-y-6 text-[#E6E6E6] leading-relaxed">
        <motion.p variants={textVars}>
          Hello and Welcome to my portfolio. My name is <span className="text-white font-medium">Bilal Malik</span> and I'm specializing in Frontend development. From my early college days, I've been fascinated by the GUI of Web Apps, Android OS and iOS design language and always have a desire to customize some elements in my style but it is only possible after learning a stack or design tool like Figma.
        </motion.p>

        <motion.p variants={textVars}>
          So, My journey started with learning HTML5, CSS3 and JavaScript and continues to learn Angular, Typescript, NodeJS, Express.js, React and Mongodb like frameworks and libraries and is still learning new features of this tech stack. In this journey I've acquired a diverse set of skills with various software and technologies.
        </motion.p>

        <motion.p variants={textVars}>
          I believe in staying ahead of the curve, constantly exploring emerging technologies and design trends to ensure that my work remains both timeless and cutting-edge. With a strong foundation in full-stack development and a keen interest in AI tools and UI/UX design, I strive to create visually appealing and user-friendly applications.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default AboutHero;
