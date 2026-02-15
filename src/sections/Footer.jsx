import React from 'react'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
   <footer role='footer'>
    <div className={styles.footerLinks}>
      <a href="" target='_blank'>
        Linkedin
      </a>
      <a href="" target='_blank'>
        Github
      </a>
      <a href="" target='_blank'>
        Twitter (X)
      </a>
      <a href="" target='_blank'>
        Uiverse
      </a>
    </div>
    <div className={styles.availableTag}>
      <div className={styles.scanDot}></div>
      <p>AVAILABLE FOR WORK</p>
    </div>
   </footer>
  )
}
