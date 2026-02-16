import React, { useState } from 'react'
import styles from '../styles/Projects.module.css'
import projects from '../data/projects.js'

export default function Projects () {
 const [activeFilter , setActiveFilter ] = useState("all");
 const filterProjects = activeFilter === "all" ? projects : projects.filter(p => p.category === activeFilter);
  return(
    <section className={styles.projectsSection}>
      <div className={styles.projectsHeader}>
        <h1>Projects</h1>
        <div className={styles.filterBtns}>
          {["all" , "graphic" , "web" , "ai/ml"].map(filter => (
            <button key={filter} onClick={()=> {
              setActiveFilter(filter)
            }} className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ""}`} >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.projectsWrapper}>
        {filterProjects.map(item => (
         <div key={item.id} className={styles.project}>
          <img src={item.img} alt="project-screenshot" className={styles.projectShot} />
          <div className={styles.projectInfo}>
            <h1>{item.title}</h1>
            <span>{item.category}</span>
          </div>
         </div>
        ))}
      </div>
    </section>
  )
}
