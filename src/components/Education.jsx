import React from 'react';
import { motion } from 'framer-motion'; // animation
import { HiOutlineAcademicCap } from 'react-icons/hi';

const Education = () => {
  // education data
  const items = [
    { title: "Master of Computer Application", sub: "IGNOU, 2026" },
    { title: "405 days of learning in Fullstack Development Course", sub: "Relevel by Unacademy, 2023" },
    { title: "Bachelor's Degree in Computer Applications", sub: "CSJM University, 2022" }
  ];

  // container animation
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // item slide-in
  const itemVars = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <div className="bg txt py-6 px-6 rounded-[30px] font-bai">
      {/* header section */}
      <div className="flex items-center gap-2 mb-6 text-[#4ade80]">
        <HiOutlineAcademicCap size={24} />
        <h2 className="txt text-xl font-medium">Education</h2>
      </div>

      {/* timeline list */}
      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6 ml-2 relative left-7"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVars}
            className="relative pl-6 border-l border-white/10"
          >
            {/* status dot */}
            <div className="absolute left-[-4.5px] top-2 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />

            <h3 className="text-lg font-medium leading-none mb-2 tracking-tight">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
              {item.sub}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
