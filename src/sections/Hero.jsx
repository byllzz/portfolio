import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';
const letters = ['B','i','l','a','l','m','a','l','i','k'];

import bn1 from '../assets/hero-banners/banner1.webp';
import bn2 from '../assets/hero-banners/banner2.webp';
import bn3 from '../assets/hero-banners/banner3.webp';
import bn4 from '../assets/hero-banners/banner4.webp';
import bn5 from '../assets/hero-banners/banner5.webp';
import bn6 from '../assets/hero-banners/banner6.webp';
import bn7 from '../assets/hero-banners/banner7.webp';
import bn8 from '../assets/hero-banners/banner8.webp';
import bn9 from '../assets/hero-banners/banner9.webp';
import bn10 from '../assets/hero-banners/banner10.webp';

 const banners = [bn1, bn3 , bn2 , bn4 , bn5 ,  bn6 , bn7 , bn8 , bn9 , bn10];

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
