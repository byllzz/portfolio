import React from 'react';
import { motion } from 'framer-motion';
import { PiBoundingBoxDuotone } from 'react-icons/pi';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const SKILLS = [
  'React', 'Next.js', 'Tailwind', 'TS',
  'JS', 'Framer', 'Node', 'Figma',
  'Git', 'Three.js', 'Redux', 'CSS3'
];

export default function StacksSection() {

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2
      }
    }
  };

  const pillVars = {
    hidden: {
      opacity: 0,
      y: -100,
      scale: 0.8,
      rotate: -5
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <div className="w-full  bg txt flex flex-col rounded-[28px] p-5 overflow-hidden border border-white/10 shadow-2xl">
      {/* Refined Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg border border-white/5">
            <PiBoundingBoxDuotone className=" text-green-500  text-xl" />
          </div>
          <span className="font-bai text-[15px] font-semibold tracking-tight">Stack</span>
        </div>
        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
      </div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap gap-2.5 w-full min-h-[130px] items-center content-center"
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            variants={pillVars}
            whileHover={{
              scale: 1.05,
              borderColor: 'rgba(160, 122, 249, 0.5)',
              backgroundColor: 'rgba(160, 122, 249, 0.05)',
            }}
            className="px-3.5 py-1.5 bg-[#111] border border-white/5 rounded-xl text-[12px] font-medium text-gray-400 hover:text-[#a07af9] transition-all cursor-default flex items-center gap-1.5"
          >
            <span className="w-1 h-1 rounded-full bg-[#a07af9]/40" />
            {skill}
          </motion.div>
        ))}
      </motion.div>

      {/* Modern Footer Link */}
      <Link
        to="/stacks"
        className="relative top-9 group mt-6 flex items-center justify-center gap-2 w-full py-2.5 bg-[#1a1a1a] hover:bg-[#161616] border border-white/5 rounded-xl transition-all"
      >
        <span className="font-bai text-[12px] font-medium text-[#a07af9] group-hover:text-white transition-colors">
          View all tools
        </span>
        <GoArrowRight className="text-[#a07af9] group-hover:translate-x-1 transition-all" />
      </Link>
    </div>
  );
}
