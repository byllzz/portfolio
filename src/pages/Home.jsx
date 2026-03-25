import React from 'react'
import AboutSection from '../sections/AboutSection';
import Experience from '../components/Experience';
import StacksSection from '../sections/StacksSection';
import Location from '../sections/Location';
import ProjectsSection from '../sections/ProjectsSection';
import ContactSection from '../sections/ContactSection';


export default function Home() {
  return (
    <div className="container">
      <AboutSection />
      <Experience />
      <div className="grid grid-cols-2 items-center w-full max-w-full mt-6 rounded-[30px] gap-5">
        <Location />
        <StacksSection />
      </div>
      <ProjectsSection startVal={0} endVal={4} />
      <ContactSection />
    </div>
  );
}

