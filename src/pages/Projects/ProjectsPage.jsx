import React from 'react'
import ProjectsTitle from './ProjectsTitle'
import Talk from '../../components/Talk'
import Projects from '../../components/Projects';
export default function ProjectsPage() {
  return (
    <div className='container'>
      <ProjectsTitle />
      <Projects startVal={0}  />
      <Talk />
    </div>
  )
}

