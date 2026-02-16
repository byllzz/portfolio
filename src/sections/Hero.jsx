import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';
const letters = ['B','i','l','a','l','m','a','l','i','k'];

import flower from '../assets/hero-banners/flowers.webp';
import flower1 from '../assets/hero-banners/flowers1.webp';

 const banners = [flower, flower1];

export default function Test() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroBanners}>
        {letters.map((letter, index) => {
          const pulseDelay = Math.random() * 2;
          const motionDelay = Math.random() * 0.3;
          const bannerImage = banners[index % banners.length];

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
                alt="banner"
                className={styles.bannerImg}
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

      <div className={styles.heroLights}>
        <span>Web De_(s/v),</span>
        <span>Graphic Designer,</span>
        <span>AI/ML Solutions Architect</span>
      </div>
    </div>
  );
}
