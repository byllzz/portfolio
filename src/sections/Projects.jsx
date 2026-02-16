import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../styles/Projects.module.css'
import projects from '../data/projects.js'

export default function Projects () {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Variants
  const headerVariant = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const buttonVariant = {
    hidden: { opacity: 0, y: -20 },
    show: i => ({ opacity: 1, y: 0, transition: { delay: i*0.1, duration: 0.5, ease: "easeOut" } })
  }

  const projectVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    show: i => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i*0.05, duration: 0.5, ease: "easeOut" }
    }),
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.4, ease: "easeIn" } }
  }

  return (
    <section className={styles.projectsSection}>
      {/* guide to open project */}
      <div className={styles.projectGuide}>
        <article>Please hover on project card to open!</article>
      </div>
      {/* Header */}
      <motion.div
        className={styles.projectsHeader}
        initial="hidden"
        animate="show"
        variants={headerVariant}
      >
        <h1>Projects I craft</h1>
        <div className={styles.filterBtns}>
          {['all', 'web', 'tool'].map((filter, i) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
              custom={i}
              variants={buttonVariant}
              initial="hidden"
              animate="show"
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Projects */}
      <motion.div className={styles.projectsWrapper} layout initial="hidden" animate="show">
        <AnimatePresence>
          {filterProjects.map((item, i) => (
            <motion.div
              key={item.id}
              className={styles.project}
              variants={projectVariant}
              initial="hidden"
              animate="show"
              exit="exit"
              custom={i} // stagger each project
              layout
            >
              <div className={styles.skyDoor}>
                <div className={styles.doorLeft}>
                  <div className={styles.doorHandle}></div>
                </div>
                <div className={styles.doorRight}>
                  <div className={styles.doorHandle}></div>
                </div>
              </div>
              <div className={styles.doorContent}>
                              <img src={item.img} alt="project-screenshot" className={styles.projectShot} />
              <div className={styles.projectInfo}>
                  <h1>{item.title}</h1>
               <span>{item.tech}</span>
                <p>{item.desc}</p>
                <a href={item.href} target='_blank' className={styles.liveBtn}>
                  <span>
                     <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
                  </span>
                </a>
              </div>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
