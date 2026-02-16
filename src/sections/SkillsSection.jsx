import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/SkillsSection.module.css';
import ArrowIcon from '../components/ArrowIcon';
import { dev_skills, design_skills, tools, skills_details } from '../data/skills';

export default function SkillsSection() {
  const [openSkill, setOpenSkill] = useState(null);

  // Updated categories for frontend focus
  const categories = [
    { title: 'Web Development', skills: dev_skills },
    { title: 'Design & Interaction', skills: design_skills },
    { title: 'Tools & Platforms', skills: tools },
  ];

  // Variants
  const fadeSlideLeft = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const fadeScale = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    show: i => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.2 + i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
  };

  const detailVariant = {
    hidden: { opacity: 0, height: 0 },
    show: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  // Get the index of the skill for description
  const getSkillDetailIndex = skill => {
    const allSkills = [...dev_skills, ...design_skills, ...tools];
    return allSkills.indexOf(skill);
  };

  return (
    <section className={styles.skillsSection}>
      <div className={styles.skillsSectionData}>
        <motion.span
          className={styles.tag}
          variants={fadeSlideLeft}
          initial="hidden"
          animate="show"
        >
          03 / Technical Expertise
        </motion.span>

        <motion.h1 className={styles.title} variants={fadeScale} initial="hidden" animate="show">
          Skills, Tools & Technologies
        </motion.h1>

        <div className={styles.skillsData}>
          {categories.map((cat, ci) => (
            <motion.ul
              key={ci}
              role={cat.title}
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <h2>{cat.title}</h2>
              {cat.skills.map((skill, i) => (
                <motion.li key={i} custom={i} variants={listItem} className={styles.skillItem}>
                  <div
                    className={styles.skillHeader}
                    onClick={() => setOpenSkill(openSkill === skill ? null : skill)}
                  >
                    <div className={styles.header}>
                      <ArrowIcon height={10} width={10} fill="#fff" />
                      {skill}
                    </div>
                    <AnimatePresence>
                      {openSkill === skill && (
                        <motion.div
                          className={styles.skillDetail}
                          variants={detailVariant}
                          initial="hidden"
                          animate="show"
                          exit="exit"
                        >
                          <p>{skills_details[getSkillDetailIndex(skill)]}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          ))}
        </div>
      </div>
    </section>
  );
}
