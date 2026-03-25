import React from 'react';
import { motion } from 'framer-motion'; // animation
import StackList from '../components/StackList';
import Header from '../components/Header';
import TalkToMe from '../components/TalkToMe';

export default function Stacks() {
  // skills data
  const comp_header = {
    title: 'Frontend Developer',
    desc: `My technical toolkit includes proficiency in Frontend Development, Typescript, HTML/CSS and
        various UI libraries like React, Material UI, Bootstrap, Tailwind. I'm also well-versed in
        responsive web design, ensuring that websites I create look and function flawlessly across
        all devices..`,
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
      className="flex flex-col gap-6 py-7"
    >
      {/* intro header */}
      <Header headerTitle={comp_header.title} headerDesc={comp_header.desc} />

      {/* tech stack */}
      <StackList />

      {/* footer cta */}
      <TalkToMe />
    </motion.main>
  );
}
