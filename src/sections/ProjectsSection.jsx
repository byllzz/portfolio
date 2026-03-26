import React from 'react';
import { motion } from 'framer-motion'; // motion core
import { PiPencilLine } from 'react-icons/pi';
import { GoArrowUpRight, GoArrowRight } from 'react-icons/go';
import { HiLink } from 'react-icons/hi2';
import { BsCodeSlash } from 'react-icons/bs';
import { Link } from 'react-router-dom';



// projects banner imports
import moviio from '../assets/projects/moviio.png';
import bittype from '../assets/projects/bittype.png';
import snippitkit from '../assets/projects/snippetkit.png';
import pixelkit from "../assets/projects/pixelkit.png";
import favicraft from '../assets/projects/favicraft.png';
import circleCroper from '../assets/projects/circleCropper.png';
import  dotoNotes from '../assets/projects/dotoNotes.png';


export default function ProjectsSection({ startVal, endVal }) {
  // projects data
 const project_data = [
   {
     id: 1,
     title: 'Snippitkit | Code Snippet Manager',
     tag: 'Next.js & Tailwind',
     banner: snippitkit,
     links: {
       demo: 'https://snippitkit.vercel.app',
       repo: 'https://github.com/byllzz/snippitkit.git',
     },
   },
   {
     id: 2,
     title: 'CircleCropper | Circular Image Editor',
     tag: 'Canvas API & React',
     banner: circleCroper,
     links: {
       demo: 'https://circlecropper.vercel.app',
       repo: 'https://github.com/byllzz/circle-cropper',
     },
   },
   {
     id: 3,
     title: 'Bittype | Minimalist Typing Speed Test',
     tag: 'JavaScript & CSS3',
     banner: bittype,
     links: {
       demo: 'https://bittype.vercel.app',
       repo: 'https://github.com/byllzz/bittype',
     },
   },
   {
     id: 4,
     title: 'Moviio | Cinematic Discovery Platform',
     tag: 'TMDB API & Frontend',
     banner: moviio,
     links: {
       demo: 'http://moviio.vercel.app',
       repo: 'https://github.com/byllzz/moviio',
     },
   },
   {
     id: 5,
     title: 'Pixelkit | Open Source Icon Library',
     tag: 'SVG & React Components',
     banner: pixelkit,
     links: {
       demo: 'https://pixelkit.vercel.app',
       repo: 'https://github.com/byllzz/pixelkit-icons',
     },
   },
   {
     id: 6,
     title: 'Doto Notes | Markdown Note-Taking App',
     tag: 'Local Storage & React',
     banner: dotoNotes,
     links: {
       demo: 'https://doto-notes.vercel.app',
       repo: 'https://github.com/byllzz/doto-notes',
     },
   },
   {
  id: 7,
  title: 'Favicraft | Custom Favicon Generator',
  tag: 'Asset Management & UI',
  banner: favicraft,
  links: {
    demo: 'https://favicraft.vercel.app',
    repo: 'https://github.com/byllzz/favicraft',
  },
},
 ];

  // animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="space w-full max-w-full bg txt flex flex-col items-start rounded-[30px] pt-6 pb-6 px-6 overflow-hidden">
      {/* header */}
      <div className="flex items-center gap-2">
        <span className="text-[20px] text-green-500">
          <PiPencilLine />
        </span>
        <h1 className="text-[18px] font-bai font-medium">Projects</h1>
      </div>

      {/* projects grid */}
      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 mt-5 w-full"
      >
        {project_data.slice(startVal, endVal).map(item => (
          <motion.div
            key={item.id}
            variants={cardVars}
            className="flex flex-col items-start gap-3 group"
          >
            {/* banner img */}
            <div className="overflow-hidden rounded-[15px] w-full bg-[#111]">
              <img
                src={item.banner}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <span className="bg-[#111] text-[#a07af9] font-bai px-4 py-1 rounded-[5px] text-xs">
              {item.tag}
            </span>

            <div className="flex items-start gap-2 relative">
              <span className="text-[20px] text-gray-500 relative top-1">
                <HiLink />
              </span>
              <h3 className="text-[22px] font-medium font-bai leading-6">{item.title}</h3>
            </div>

            {/* links */}
            <div className="flex items-center gap-2 w-full mt-1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.links?.repo}
                className="bg-[#111] py-3 px-4 w-[40%] flex items-center justify-center rounded-[12px] font-bai gap-2 transition-colors hover:bg-[#1a1a1a]"
              >
                Code <BsCodeSlash />
              </a>
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.97 }}
                href={item.links?.demo}
                className="w-full py-3 px-4 bg-[#a07af9] flex items-center justify-center font-bai gap-2 rounded-[12px] text-black font-semibold transition-opacity hover:opacity-90"
              >
                Demo <GoArrowUpRight />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* footer action */}
      <Link
        to="/projects"
        className="group mt-10 w-full p-[11px] flex items-center justify-center font-bai gap-2 font-medium text-[#a07af9] text-[14px] cursor-pointer bg-[#1a1a1a] py-3 rounded-xl transition-all hover:bg-[#161616]"
      >
        More Projects
        <span className="text-[#a07af9] text-[18px] transition-transform duration-500 group-hover:translate-x-1">
          <GoArrowRight />
        </span>
      </Link>
    </div>
  );
}
