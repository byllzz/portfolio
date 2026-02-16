import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/background.module.css'

export default function Background() {
  const experiences = [
    {
      date: "2025 (Oct - Dec)",
      title: "Brand Designer",
      subtitle: "Freelance (The Biryani House)",
      desc: "Designed materials to enhance brand visibility and contributed to improve customer engagement through cohesive marketing materials. Managed content strategy, video editing, and social media presence to drive consistent digital growth and strengthen the restaurant’s local brand identity."
    },
    {
      date: "2025 (Oct - Dec)",
      title: "Content Creator/Curator",
      subtitle: "Self-Employed (yt/@Omtivational, yt/@KnoScience)",
      desc: "Created and maintained an engaging content platform, designed 10 graphics/month along with posting schedule of 8 posts/month. Generated over 2 million clicks with over 80,000 watch hours, surpassing 11,000 subscribers & 2.4 million views."
    },
    {
      date: "2025 (Oct - Dec)",
      title: "Web App Designer/Developer",
      subtitle: "Freelance (WiseWords)",
      desc: "Revamped outdated design, improved sales by 50% over a period of 3 months after the revamp. Designed web pages with HTML/CSS/JS, maintaining clean, well-structured code for scalability and future enhancements."
    },
  ]

  const leftDots = [0, 1, 2]

  // Variants
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
        {/* Tag */}
        <motion.span className={styles.tag} variants={fadeSlideLeft}>
          04 / WORK EXPERIENCE
        </motion.span>

        {/* Heading */}
        <motion.h1 className={styles.heading} >
          Professional Background
        </motion.h1>

        <div className={styles.data}>
          {/* Left dots */}
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

          {/* Right experiences */}
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
