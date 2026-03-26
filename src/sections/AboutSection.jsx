import React from 'react';
import { motion } from 'framer-motion'; // animation core
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  // animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="w-full max-w-full flex flex-col items-start gap-2 bg txt rounded-[30px] pr-10 pl-6 pt-5 pb-7"
    >
      {/* greeting */}
      <h3 className="text-[36px] txt font-medium font-bai">
        Hello, I'm Bilal
      </h3>

      {/* bio snippet */}
      <p className="font-bai leading-5.5 text-[16px] tracking-2  txt">
        A passionate Full Stack Developer skilled in designing scalable and efficient software
        solutions. Currently, I work at E-mentors Technologies, where I collaborate with development
        teams to create responsive, visually appealing interfaces. My work includes crafting
        reusable components and enhancing functionality and design. In the past year, I've
        contributed to projects that improved application performance by 30% and increased user
        engagement by 20%.
      </p>

      {/* action link */}
      <motion.div
        whileTap={{ scale: 0.98 }}
        className="w-full mt-3"
      >
        <Link
          to="/about"
          className="group w-full p-[11px] flex items-center justify-center font-bai gap-2 font-medium text-[#a07af9] text-[14px] cursor-pointer bg-[#1a1a1a] rounded-xl transition-colors hover:bg-[#1a1a1a]"
        >
          More about Me
          <span className='text-[#a07af9] text-[18px] transition-transform duration-500 group-hover:translate-x-1'>
            <GoArrowRight />
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
