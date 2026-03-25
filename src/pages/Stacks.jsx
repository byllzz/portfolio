import React from 'react'
import StackList from '../components/StackList';
import Header from '../components/Header';
import TalkToMe from '../components/TalkToMe';

export default function SkillsPage() {
   const comp_header = {
     title: 'Frontend Developer',
     desc: `My technical toolkit includes proficiency in Frontend Development, Typescript, HTML/CSS and
        various UI libraries like React, Material UI, Bootstrap, Tailwind. I'm also well-versed in
        responsive web design, ensuring that websites I create look and function flawlessly across
        all devices..`,
   };
    return (
      <>
        <Header headerTitle={comp_header.title} headerDesc={comp_header.desc} />
        <StackList />
        <TalkToMe />
      </>
    );
  }

