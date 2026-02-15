import React from 'react'
import styles from '../styles/background.module.css'

export default function Background () {
  return (
    <section className={styles.background}>
     <div className={styles.backgroundData}>
      <span className={styles.tag}>
        04 / WORK EXPERIENCE
      </span>
      <h1>Professional  Background</h1>
      <div className={styles.data}>
        <div className={styles.left}>
          <div className={styles.tag}>
            <span></span>
            <span></span>
          </div>
          <div className={styles.tag}>
            <span></span>
            <span></span>
          </div>
          <div className={styles.tag}>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.experience}>
            <span className={styles.date}>2025 (Oct - Dec)</span>
            <h3 className={styles.title}>Brand Designer</h3>
            <h4 className={styles.subtitle}>
              Freelance (The Biryani House)
            </h4>
            <p className={styles.desc}>
              Designed materials to enhance brand visibility and contributed to improve customer engagement through cohesive marketing materials. Managed content strategy, video editing, and social media presence to drive consistent digital growth and strengthen the restaurant’s local brand identity.
            </p>
          </div>
          <div className={styles.experience}>
            <span className={styles.date}>2025 (Oct - Dec)</span>
            <h3 className={styles.title}>Content Creator/Curator</h3>
            <h4 className={styles.subtitle}>

Self-Employed (yt/@Omtivational, yt/@KnoScience)
            </h4>
            <p className={styles.desc}>
             Created and maintained an engaging content platform, designed 10 graphics/month along with posting schedule of 8 posts/month. Generated over 2 million clicks with over 80,000 watch hours, surpassing 11,000 subscribers & 2.4 million views.
            </p>
          </div>
          <div className={styles.experience}>
            <span className={styles.date}>2025 (Oct - Dec)</span>
            <h3 className={styles.title}>Web App Designer/Developer</h3>
            <h4 className={styles.subtitle}>
              Freelance (WiseWords)
            </h4>
            <p className={styles.desc}>
           Revamped outdated design, improved sales by 50% over a period of 3 months after the revamp. Designed web pages with HTML/CSS/JS, maintaining clean, well-structured code for scalability and future enhancements.
            </p>
          </div>
        </div>
      </div>
     </div>
    </section>
  )
}
