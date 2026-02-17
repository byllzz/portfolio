import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Projects.module.css';

// ✅ IMPORT FROM CONFIG
import { projects } from '../data/portfolio.config';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  // ✅ Generate filters dynamically (template-ready)
  const filters = useMemo(() => {
    const categories = projects.map(p => p.category.toLowerCase());
    return ['all', ...new Set(categories)];
  }, []);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(p => p.category.toLowerCase() === activeFilter);

  // Variants
  const headerVariant = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: -20 },
    show: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
  };

  const projectVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    show: i => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.05, duration: 0.5, ease: 'easeOut' },
    }),
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.4, ease: 'easeIn' },
    },
  };

  return (
    <section className={styles.projectsSection}>
      {/* Header */}
      <motion.div
        className={styles.projectsHeader}
        initial="hidden"
        animate="show"
        variants={headerVariant}
      >
        <h1>Projects I Craft</h1>

        <div className={styles.filterBtns}>
          {filters.map((filter, i) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`${styles.filterBtn} ${
                activeFilter === filter ? styles.active : ''
              }`}
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
      <motion.div
        className={styles.projectsWrapper}
        layout
        initial="hidden"
        animate="show"
      >
        <AnimatePresence>
          {filteredProjects.map((item, i) => (
            <motion.div
              key={item.title}
              className={styles.project}
              variants={projectVariant}
              initial="hidden"
              animate="show"
              exit="exit"
              custom={i}
              layout
            >
              <div className={styles.skyDoor}>
                <div className={styles.doorLeft}>
                  <div className={styles.doorHandle} />
                </div>
                <div className={styles.doorRight}>
                  <div className={styles.doorHandle} />
                </div>
              </div>

              <div className={styles.doorContent}>
                <img
                  src={item.image}
                  alt={`${item.title} preview`}
                  className={styles.projectShot}
                  loading="lazy"
                  decoding="async"
                />

                <div className={styles.projectInfo}>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
