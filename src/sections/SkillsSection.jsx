import React from 'react'
import SectionTag from '../components/SectionTag'
import styles from '../styles/SkillsSection.module.css'
import SectionTitle from '../components/SectionTitle'

export default function SkillsSection() {

  const dev_skills = [
    'HTML5 & CSS3', "Responsive Design" ,
    "JavaScript (ES6+)" , "UI/UX" , "React JS" , "Next JS"
  ];

  const graphics_skills=  [
    "Brand identity & Logo Design",
    "Visuals Design & Composition" , "Typography & Color Theory" , "Motion Graphics & Animation" , "Figma, Canva"
  ];

  const others_skills = [
    "Python Programming & Libraries" ,"Machine Learning Algorithms" , "Deep Learning & Neural Networks" , "Charbot & AI Solutions", "Data Analysis & Visualization"
  ];

  const tools = [
    "Git & Github", "SQL & Database Management" ,"Jupyter NoteBooks & IDEs" , "VS Code & Development Environment" , "Chrome DevTools & Debugging"
  ];

  return (
<section className={styles.skillsSection}>
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
        {item}
      </li>
    ))}
  </ul>
  <ul role='graphics_skills'>
    <h2>Graphic & Brand Design</h2>
    {graphics_skills.map((item , index) => (
      <li key={index}>
        {item}
      </li>
    ))}
  </ul>


  <ul role='AI'>
    <h2>Artificial Intelligence & ML</h2>
 {others_skills.map((item , index) => (
  <li key={index}>
    {item}
  </li>
 ))}
  </ul>

  <ul role='tools'>
    <h2>Tools, Platforms & DevOps</h2>
    {tools.map((item , index)=> (
      <li key={index}>
        {item}
      </li>
    ))}
  </ul>
 </div>
 </section>

  )
}

