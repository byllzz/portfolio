import React from 'react'
import AboutSection from '../sections/AboutSection';
import Experience from '../components/Experience';
import StacksSection from '../sections/StacksSection';
import Location from '../sections/Location';
import ProjectsSection from '../sections/ProjectsSection';
import ContactSection from '../sections/ContactSection';


export default function Home() {
  return (
    <>
      <AboutSection />
      <Experience />
      <div className="space grid grid-cols-2 items-center w-full max-w-full rounded-[30px] gap-5">
        <Location />
        <StacksSection />
      </div>
      <ProjectsSection startVal={0} endVal={4} />
      <ContactSection />
    </>
  );
}

