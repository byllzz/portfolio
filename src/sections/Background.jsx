import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Background.module.css'

export default function Background() {
 const experiences = [
  {
    date: "2025 (Oct - Dec)",
    title: "Frontend Developer",
    subtitle: "Freelance",
    desc: "Built and optimized responsive web pages using HTML, CSS, and JavaScript. Implemented interactive UI components and animations to enhance user experience, improving website engagement and overall brand visibility."
  },
  {
    date: "2025 (Oct - Dec)",
    title: "Content & Web Creator",
    subtitle: "Self-Employed ",
    desc: "Developed frontend interfaces and visual content for web platforms, while managing content strategy. Delivered high-quality graphics and interactive elements, contributing to over 2M clicks, 80k+ watch hours, and 11k+ subscribers."
  },
  {
    date: "2025 (Oct - Dec)",
    title: "Web Application Designer/Developer",
    subtitle: "Freelance (WiseWords)",
    desc: "Redesigned and developed scalable web applications using React and modern JavaScript. Improved sales by 50% within 3 months through enhanced UI/UX, responsive layouts, and clean, maintainable code."
  },
];


  const leftDots = [0, 1, 2]
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 }
    }
  }

  const fadeSlideLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }


  const fadeSlideUp = {
    hidden: { opacity: 0, y: 40 },
    show: i => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.2, ease: "easeOut" }
    })
  }

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
        <motion.h1 className={styles.heading} >
          Professional Background
        </motion.h1>

        <div className={styles.data}>
          <div className={styles.left}>
            {leftDots.map((dot, i) => (
              <motion.div className={styles.tag} key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 + i * 0.2, ease: "easeOut" }}
              >
                <span></span>
                <span></span>
              </motion.div>
            ))}
          </div>
          <div className={styles.right}>
            {experiences.map((exp, i) => (
              <motion.div className={styles.experience} key={i}
                custom={i}
                variants={fadeSlideUp}
                initial="hidden"
                animate="show"
              >
                <span className={styles.date}>{exp.date}</span>
                <h3 className={styles.title}>{exp.title}</h3>
                <h4 className={styles.subtitle}>{exp.subtitle}</h4>
                <p className={styles.desc}>{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
