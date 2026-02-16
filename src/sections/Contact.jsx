import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Contact.module.css'

export default function Contact() {

  const contactItems = [
    { label: "Email", value: "bilalmlkdev@gmail.com", href: "mailto:bilalmlkdev@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Bilal," },
    { label: "Location", value: "Chachran Sharif , Pakistan" },
    { label: "Github", value: "github.com/byllzz", href: "https://github.com/byllzz", target: "_blank" },
  ]

  // Container variant for staggered children
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 }
    }
  }

  const fadeSlideLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const listItem = {
    hidden: { opacity: 0, x: -30 },
    show: i => ({
      opacity: 1, x: 0,
      transition: { delay: 0.2 + i*0.15, duration: 0.6, ease:"easeOut" }
    })
  }

  const fadeSlideRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.6 } }
  }

  return (
    <section className={styles.contactSection} role='contact-section'>
      <motion.div
        className={styles.contactSectionData}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={container}
      >
        {/* Left side */}
        <motion.div className={styles.left} variants={container}>
          <motion.h1 variants={fadeSlideLeft}>
            Let's create something <br />extraordinary
          </motion.h1>
          <motion.p variants={fadeSlideLeft}>
            Whether you need a stunning web experience, captivating graphic design, or intelligent AI-powered solutions, I'm ready to collaborate. Let's bring your vision to life with creativity, code, and cutting-edge technology.
          </motion.p>

          <ul className={styles.contactList}>
            {contactItems.map((item,i) => (
              <motion.li key={i} custom={i} variants={listItem}>
                <span>{item.label}</span>
                {item.href ? (
                  <a href={item.href} target={item.target || "_self"} aria-label={`Contact via ${item.label}`}>
                    {item.value}
                  </a>
                ) : (
                  <a>{item.value}</a>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right side button */}
        <motion.div className={styles.right} variants={fadeSlideRight}>
          <button>
            Contact
            <span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
