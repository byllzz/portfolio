import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';

// imprt from portfolio.config.js
import { hero, heroBanners } from '../data/portfolio.config';

export default function Hero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroBanners}>
        {hero.nameLetters.map((letter, index) => {
          const pulseDelay = Math.random() * 2;
          const motionDelay = Math.random() * 0.3;
          const bannerImage = heroBanners[index % heroBanners.length];

          return (
            <motion.div
              className={styles.banner}
              key={index}
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: motionDelay }}
            >
              <img
                src={bannerImage}
                alt={`Hero banner ${index + 1}`}
                className={styles.bannerImg}
                loading="lazy"
                decoding="async"
              />

              <div className={styles.overlap}>
                <div
                  className={styles.overlapTxt}
                  style={{ animationDelay: `${pulseDelay}s` }}
                >
                  {letter}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

   {/* import from portfolio.config.js */}
      <div className={styles.heroLights}>
        {hero.roles.map((role, i) => (
          <span key={i}>{role}</span>
        ))}
      </div>
    </div>
  );
}
