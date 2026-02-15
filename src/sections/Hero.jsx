import React from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/Hero.module.css";

import peakpx from "../assets/peakpx.jpg";

const LETTERS = ["B", "I", "L", "A", "L"];
const IMAGES = [peakpx, peakpx, peakpx, peakpx, peakpx];

// helpers
const random = (min, max) => Math.random() * (max - min) + min;

const COLORS = [
  "#ff3cac", "#ff9f1c", "#8c1eff",
  "#00ffd5", "#ff2d95", "#05ffa1", "#f5f300"
];

const FONTS = [
  "'Instrument Serif', serif",
  "'JetBrains Mono', monospace",
  "'Courier New', monospace",
];

const randomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];
const randomFont = () => FONTS[Math.floor(Math.random() * FONTS.length)];

export default function Hero() {
  const bannersData = LETTERS.map(() => {
    const motionProps = {
      x: [0, random(-8, 8), 0],
      y: [0, random(-5, 5), 0],
      scale: [1, random(0.97, 1.03), 1],
      rotate: [0, random(-3, 3), 0],
    };

    return {
      imageMotion: {
        ...motionProps,
        filter: ["brightness(0.8)", "brightness(0.9) hue-rotate(10deg)", "brightness(0.8) hue-rotate(-10deg)"]
      },
      overlayMotion: {
        ...motionProps,
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
            {/* Image motion */}
            <motion.img
              src={IMAGES[index]}
              alt={`banner-${LETTERS[index]}`}
              className={styles.bannerImg}
              animate={data.imageMotion}
              transition={data.transition}
            />

            {/* Letter overlay motion */}
            <motion.div
              className={styles.overlap}
              animate={data.overlayMotion}
              transition={data.transition}
            >
              <h1>{LETTERS[index]}</h1>
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
