import React from 'react';
import { motion } from 'framer-motion'; // animation core
import { VscGlobe } from 'react-icons/vsc';

export default function Experience() {
  // experience data
  const exp_data = [
    {
      id: 1,
      title: 'Jr. Software Developer',
      time: '7 months',
      where: 'E-mentors technologies, Jan 2024 - present',
    },
  ];

  // animation variants
  const listVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className=" w-full max-w-full flex flex-col gap-6 bg px-6 py-7 txt rounded-[30px]">
      {/* header */}
      <div className="flex items-center gap-2.5">
        <span className="text-[21px] text-green-500">
          <VscGlobe />
        </span>
        <h3 className="text-[18px] font-bai txt font-medium">Experience</h3>
      </div>

      {/* data mapping */}
      <div className="flex flex-col gap-6">
        {exp_data.map((item) => (
          <motion.div
            key={item.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={listVariants}
            className="flex items-start gap-10 relative left-[30px] leading-4"
          >
            {/* status dot */}
            <div className="w-2 h-2 bg-purple-600 rounded-full relative top-1.5 shadow-[0_0_8px_rgba(147,51,234,0.5)]"></div>

            {/* text content */}
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-[16px] font-medium font-bai txt">
                {item.title} | {item.time}
              </h3>
              <p className="font-bai text-[14px] txt">
                {item.where}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
