import React from 'react'
import ProjectsSection from '../sections/ProjectsSection'
import TalkToMe from '../components/TalkToMe';
import Header from '../components/Header'

export default function ProjectsPage() {
  const comp_header = {
    title : 'My Projects' ,
    desc : `Welcome to my Project Page! I'm Bilal, a frontend & web developer focused on crafting seamless,
        captivating digital experiences. Explore my work—a blend of intuitive UI and efficient
        functionality. Learning and improving projects consistently.`
  }
  return (
    <>
      <Header headerTitle={comp_header.title} headerDesc={comp_header.desc} />
      <ProjectsSection startVal={0} />
      <TalkToMe />
    </>
  );
}

