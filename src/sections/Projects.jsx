import React, { useState } from 'react'
import styles from '../styles/Projects.module.css'

export default function Projects () {
  const projects = [
  { id: 1, title: "Portfolio", category: "web" },
  { id: 2, title: "Landing Page", category: "graphic" },
  { id: 3, title: "Dashboard", category: "web" },
  { id: 4, title: "Shop UI", category: "ai/ml" },
];

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
          {item.title}
         </div>
        ))}
      </div>
    </section>
  )
}
