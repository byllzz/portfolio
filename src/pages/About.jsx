import React from 'react'
import AboutHero from '../sections/AboutHero'
import Achievements from '../components/Achievements'
import Education from '../components/Education'
import Experience from '../components/Experience'
import TalkToMe from '../components/TalkToMe';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Experience />
      <Education />
      <Achievements />
      <TalkToMe />
    </>
  )
}

