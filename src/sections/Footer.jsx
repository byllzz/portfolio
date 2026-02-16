import React from 'react'
import styles from '../styles/Footer.module.css'
import myLinks from '../data/links.js'

export default function Footer() {
  return (
   <footer role='footer'>
    <div className={styles.footerLinks}>
      {myLinks.map(link => (
      <a key={link.id} href={link.href} target='_blank'>
        {link.label}
      </a>
      )
      )}
    </div>
    <div className={styles.availableTag}>
      <div className={styles.scanDot}></div>
      <p>AVAILABLE FOR WORK</p>
    </div>
   </footer>
  )
}
