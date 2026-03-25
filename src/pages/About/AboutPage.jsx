import React from 'react'
import AboutHero from './AboutHero'
import Achievements from './Achievements'
import Education from './Education'
import Experience from '../../components/Experience'
import Talk from '../../components/Talk'

export default function AboutPage() {
  return (
    <div className='container'>
      <AboutHero />
      <Experience />
      <Education />
      <Achievements />
      <Talk />
    </div>
  )
}

