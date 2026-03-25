import React from 'react';
import { motion } from 'framer-motion'; // animation
import ProjectsSection from '../sections/ProjectsSection';
import TalkToMe from '../components/TalkToMe';
import Header from '../components/Header';

export default function Projects() {
  // page config
  const comp_header = {
    title : 'My Projects' ,
    desc : `Welcome to my Project Page! I'm Bilal, a frontend & web developer focused on crafting seamless,
        captivating digital experiences. Explore my work—a blend of intuitive UI and efficient
        functionality. Learning and improving projects consistently.`
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, staggerChildren: 0.2 }}
      className="flex flex-col gap-6  py-6"
    >
      {/* hero header */}
      <Header headerTitle={comp_header.title} headerDesc={comp_header.desc} />

      {/* projects grid */}
      <ProjectsSection startVal={0} />

      {/* footer cta */}
      <TalkToMe />
    </motion.main>
  );
}
