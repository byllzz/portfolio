import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Hero.module.css";

import peakpx from "../assets/peakpx.jpg";

const LETTERS = ["B", "I", "L", "A", "L"];
const IMAGES = [peakpx, peakpx, peakpx, peakpx, peakpx];

// helper functions
const random = (min, max) => Math.random() * (max - min) + min;

const randomColor = () => {
  const colors = ["#ff0000", "#ff7f50", "#00ffff", "#adff2f", "#ff69b4"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const randomFont = () => {
  const fonts = [
    "'Instrument Serif', serif",
    "'JetBrains Mono', monospace",
    "'Courier New', monospace",
  ];
  return fonts[Math.floor(Math.random() * fonts.length)];
};

export default function Hero() {
  const bannersData = LETTERS.map(() => {
    const baseAnim = {
      x: [0, random(-10, 10), 0],
      y: [0, random(-5, 5), 0],
      scale: [1, random(0.95, 1.05), 1],
      rotate: [0, random(-5, 5), 0],
    };

    return {
      baseAnim,
      overlayAnim: {
        ...baseAnim,
        color: [randomColor(), randomColor(), randomColor()],
        fontFamily: [randomFont(), randomFont(), randomFont()],
      },
      transition: {
        duration: random(1, 3),
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: random(0, 1),
      },
    };
  });

  return (
    <section className={styles.heroSection}>
      <div className={styles.top}>
        {bannersData.map((data, index) => (
          <div className={styles.banner} key={index}>
            {/* Motion container wraps both image and overlap */}
            <motion.div
              className={styles.motionWrapper}
              animate={data.baseAnim}
              transition={data.transition}
            >
              <img
                src={IMAGES[index]}
                alt={`banner-${LETTERS[index]}`}
                className={styles.bannerImg}
              />
              <div className={styles.overlap}>
                <h1
                  style={{
                    color: data.overlayAnim.color[0],
                    fontFamily: data.overlayAnim.fontFamily[0],
                  }}
                >
                  {LETTERS[index]}
                </h1>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <span>Web De_(s/v),</span>
        <span>Graphic Designer,</span>
        <span>AI/ML Solutions Architect</span>
      </div>
    </section>
  );
}
