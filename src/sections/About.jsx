import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';

// ✅ IMPORT FROM CONFIG
import { hero, stats } from '../data/portfolio.config';
import DownloadSvg from '../components/DownloadSvg';

export default function About() {
  // Motion variants
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const wrapperVariant = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <section className={styles.aboutSection}>
      <motion.div
        className={styles.aboutSectionData}
        key="about-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={container}
      >
        {/* Section Tag */}
        <motion.span className={styles.tag} variants={fadeUp}>
          01 / PROFESSIONAL PROFILE
        </motion.span>

        {/* Heading */}
        <motion.h1 className={styles.title} variants={fadeUp}>
          {hero.tagline}
        </motion.h1>

        {/* About Description */}
        <motion.p className={styles.aboutDesc} variants={fadeUp}>
          {hero.about}
        </motion.p>

        {/* Stats */}
        <motion.div className={styles.aboutDataWrapper} variants={wrapperVariant}>
          {stats.map(item => (
            <motion.div
              key={item.label}
              className={styles.aboutData}
              variants={fadeUp}
            >
              <span>{item.total}</span>
              <p>{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Resume Button */}
        <motion.div className={styles.resume} variants={fadeUp}>
          <button className={styles.resumeBtn}>
            <DownloadSvg height={24} width={24} />
            Download Resume
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}


