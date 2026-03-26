import React from 'react';
import { motion } from 'framer-motion'; // animation core

export default function ProjectsTitle({ headerTitle, headerDesc }) {
  // animation config
  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full bg txt rounded-[30px] px-6 pb-6 pt-5 space-y-2"
    >
      {/* main title */}
      <motion.h3
        variants={fadeUp}
        className="font-bai text-[36px] tracking-tight"
      >
        {headerTitle}
      </motion.h3>

      {/* description text */}
      <motion.p
        variants={fadeUp}
        className="font-bai leading-6 text-[16px] txt"
      >
        {headerDesc}
      </motion.p>
    </motion.div>
  );
}
