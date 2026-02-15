import React, { useState } from 'react'
import styles from '../styles/Projects.module.css'

import circleCropper from '../assets/projects-pics/circleCropper-desktop-preview.png';
import snippitkit from '../assets/projects-pics/snippetkit-preview.png'
import dotoNotes from '../assets/projects-pics/doto-notes-preview.png'
import pixelkit from '../assets/projects-pics/pixelkit.png'
import moviio from '../assets/projects-pics/moviio-preview.png'
import retroCalc from '../assets/projects-pics/retroCalc-preview.png'

export default function Projects () {
  const projects = [
  { id: 1, title: "Portfolio", category: "web" , img : snippitkit },
  { id: 2, title: "Landing Page", category: "graphic" , img : dotoNotes },
  { id: 3, title: "Dashboard", category: "web" , img: moviio },
  { id: 4, title: "Shop UI", category: "ai/ml" , img : circleCropper },
  { id: 4, title: "Shop UI", category: "ai/ml" , img : pixelkit },
  { id: 4, title: "Shop UI", category: "ai/ml" , img : retroCalc },
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
