import React from 'react';
import { PiBoundingBoxDuotone } from 'react-icons/pi';

import { GoArrowRight } from 'react-icons/go';

// Your list of skills
const SKILLS = [
  "React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript",
  "Framer Motion", "HTML5", "CSS3", "Redux", "Node.js", "GraphQL", "Vue"
];

export default function Skills() {
  // We duplicate the array so the infinite scroll never has a blank gap
  const duplicatedSkills = [...SKILLS, ...SKILLS];

  return (
    <div className="w-full max-w-full bg-black text-[#E6E6E6] flex flex-col items-start rounded-[30px] py-8 px-4 overflow-hidden">

      {/* Header */}
      <div className="flex items-center gap-2 mb-6 relative bottom-2 left-3">
        <span className="text-[22px] text-green-500">
          <PiBoundingBoxDuotone />
        </span>
        <h3 className="font-bai text-[20px]">Skills</h3>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }
        /* Pauses the animation when the user hovers over it */
        .pause-on-hover:hover .animate-scroll-left,
        .pause-on-hover:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* Marquee Container with the Fading Edges */}
      <div className="relative w-full flex flex-col gap-3 overflow-hidden pause-on-hover [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

        {/* Row 1: Scrolling Left */}
        <div className="flex w-max animate-scroll-left gap-3">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`row1-${index}`}
              className="px-4 py-2 bg-[#111] border border-white/5 rounded-full text-sm font-medium whitespace-nowrap text-[#a07af9]"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex w-max animate-scroll-right gap-3">
          {/* Reversing the array for visual variety */}
          {[...duplicatedSkills].reverse().map((skill, index) => (
            <div
              key={`row2-${index}`}
              className="px-4 py-2 bg-[#111] border border-white/5 rounded-full text-sm font-medium whitespace-nowrap text-[#E6E6E6]"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Row 3: Scrolling Left (Slightly Faster) */}
        <div className="flex w-max animate-scroll-left gap-3" style={{ animationDuration: '20s' }}>
          {/* Shuffling the starting point for visual variety */}
          {[...duplicatedSkills.slice(4), ...duplicatedSkills.slice(0, 4)].map((skill, index) => (
            <div
              key={`row3-${index}`}
              className="px-4 py-2 bg-[#111] border border-white/5 rounded-full text-sm font-medium whitespace-nowrap text-green-400"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>

       <button className="group mt-3 w-full p-[11px] flex items-center justify-center font-bai gap-2 font-medium text-[#a07af9] text-[14px] cursor-pointer bg-[#111] rounded-xl relative top-3">
              More about Me{' '}
              <span className='text-[#a07af9] text-[18px] transition-transform duration-500 group-hover:translate-x-1'>
                <GoArrowRight />
              </span>
            </button>
    </div>
  );
}
