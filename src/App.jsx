import React from 'react'
import SkillsSection from './sections/SkillsSection';
import Footer from './sections/Footer';
import Contact from './sections/Contact';
import Background from './sections/Background';
import Projects from './sections/Projects';
import About from './sections/About';
import Hero from './sections/Hero';

export default function App() {
  return (
  <>
  <Hero />
  <About />
  <Projects />
  <SkillsSection />
    <Background />
 <Contact />
  <Footer />
  </>
  )
}
