import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Contact.module.css';

// imprt from portfolio.config.js
import { contact } from '../data/portfolio.config';

export default function Contact() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeSlideLeft = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -30 },
    show: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 + i * 0.15,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const fadeSlideRight = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.6 },
    },
  };

  return (
    <section className={styles.contactSection} role="contact-section">
      <motion.div
        className={styles.contactSectionData}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={container}
      >
        {/* LEFT */}
        <motion.div className={styles.left} variants={container}>
          <motion.h1 variants={fadeSlideLeft}>
            {contact.heading}
          </motion.h1>

          <motion.p variants={fadeSlideLeft}>
            {contact.description}
          </motion.p>

          <ul className={styles.contactList}>
            {contact.items.map((item, i) => (
              <motion.li key={item.label} custom={i} variants={listItem}>
                <span>{item.label}</span>

                {item.href ? (
                  <a
                    href={item.href}
                    target={item.target || '_self'}
                    rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                    aria-label={`Contact via ${item.label}`}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span>{item.value}</span>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT */}
        <motion.div className={styles.right} variants={fadeSlideRight}>
          <button>
            {contact.ctaText}
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
