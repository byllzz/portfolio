import React from 'react'
import SectionTag from '../components/SectionTag'
import styles from '../styles/SkillsSection.module.css'
import SectionTitle from '../components/SectionTitle'
import ArrowIcon from '../components/ArrowIcon'
import { dev_skills, graphics_skills, others_skills, tools } from "../data/skills";

export default function SkillsSection() {

  return (
<section className={styles.skillsSection}>
  <div className={styles.skillsSectionData}>
 <span className={styles.tag}>
  03 / tecnical experties
 </span>
 <h1 className={styles.title}>
  skills, tools & tecnologies
 </h1>
 <div className={styles.skillsData}>
  <ul role='development'>
    <h2>Web Design & Development</h2>
    {dev_skills.map((item , index) => (
      <li key={index}>
       <ArrowIcon height={10} width={10} fill="#fff" /> {item}
      </li>
    ))}
  </ul>
  <ul role='graphics_skills'>
    <h2>Graphic & Brand Design</h2>
    {graphics_skills.map((item , index) => (
      <li key={index}>
       <ArrowIcon height={10} width={10} fill="#fff" /> {item}
      </li>
    ))}
  </ul>


  <ul role='AI'>
    <h2>Artificial Intelligence & ML</h2>
 {others_skills.map((item , index) => (
  <li key={index}>
   <ArrowIcon height={10} width={10} fill="#fff" /> {item}
  </li>
 ))}
  </ul>

  <ul role='tools'>
    <h2>Tools, Platforms & DevOps</h2>
    {tools.map((item , index)=> (
      <li key={index}>
       <ArrowIcon height={10} width={10} fill="#fff" /> {item}
      </li>
    ))}
  </ul>
 </div>
 </div>
 </section>

  )
}

