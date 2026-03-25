import React from 'react'
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills'
import Location from '../components/Location'
import Projects from '../components/Projects';
import ContactSection from '../components/ContactSection';
export default function Home() {
  return (
    <div className="container">
      <About />
      <Experience />
      <div className="grid grid-cols-2 items-center w-full max-w-full mt-6 rounded-[30px] gap-5">
        <Location />
        <Skills />
      </div>
      <Projects startVal={0} endVal={4} />
      <ContactSection />
    </div>
  );
}

