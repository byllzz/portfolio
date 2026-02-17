import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Preloader.module.css";

// const letters = ["B", "I", "L", "A", "L"];
import {preloader} from '../data/portfolio.config';
export default function Preloader() {
  return (
    <motion.div
      className={styles.preloader}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className={styles.logo}>
        {preloader.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: i * 0.15,
              duration: 0.6,
              ease: "easeOut"
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <motion.p
        className={styles.loading}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Loading Portfolio...
      </motion.p>
    </motion.div>
  );
}
