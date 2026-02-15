import React from 'react'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.contactSection} role='contact-section'>
      <div className={styles.contactSectionData}>
     <div className={styles.left}>
      <h1>Let's create something <br />extraordinary</h1>
      <p>Whether you need a stunning web experience, captivating graphic design, or intelligent AI-powered solutions, I'm ready to collaborate. Let's bring your vision to life with creativity, code, and cutting-edge technology.</p>
           <ul className={styles.contactList}>
      <li>
        <span>Email</span>
        <a href="">Bilalmlkdev@gmail.com</a>
      </li>
      <li>
        <span>Location</span>
        <a href="">Chachran Sharif , Pakistan</a>
      </li>
      <li>
        <span>Github</span>
        <a href="">github.com/byllzz</a>
      </li>
     </ul>
     </div>

    <div className={styles.right}>
      <button>Contact
        <span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
        </span>
      </button>
    </div>
    </div>
    </section>
  )
}
