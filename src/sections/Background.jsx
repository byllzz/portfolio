import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Background.module.css';

// ✅ IMPORT FROM CONFIG
import { experiences } from '../data/portfolio.config';

export default function Background() {
  // dots count adapts to experience length (safe default)
  const leftDots = Array.from(
    { length: Math.min(3, experiences.length) },
    (_, i) => i
  );

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeSlideLeft = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const fadeSlideUp = {
    hidden: { opacity: 0, y: 40 },
    show: i => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className={styles.background}>
      <motion.div
        className={styles.backgroundData}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={container}
        key="background-section"
      >
        <motion.span className={styles.tag} variants={fadeSlideLeft}>
          04 / WORK EXPERIENCE
        </motion.span>

        <motion.h1 className={styles.heading}>
          Professional Background
        </motion.h1>

        <div className={styles.data}>
          {/* LEFT DOTS */}
          <div className={styles.left}>
            {leftDots.map((_, i) => (
              <motion.div
                className={styles.tag}
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5 + i * 0.2,
                  ease: 'easeOut',
                }}
              >
                <span />
                <span />
              </motion.div>
            ))}
          </div>

          {/* EXPERIENCE LIST */}
          <div className={styles.right}>
            {experiences.map((exp, i) => (
              <motion.div
                className={styles.experience}
                key={`${exp.role}-${i}`}
                custom={i}
                variants={fadeSlideUp}
                initial="hidden"
                animate="show"
              >
                <span className={styles.date}>{exp.date}</span>
                <h3 className={styles.title}>{exp.role}</h3>
                <h4 className={styles.subtitle}>{exp.company}</h4>
                <p className={styles.desc}>{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
