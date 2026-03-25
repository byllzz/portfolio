import React from 'react';
import { HiOutlineAcademicCap } from 'react-icons/hi';

const Education = () => {
  const items = [
    { title: "Master of Computer Application", sub: "IGNOU, 2026" },
    { title: "405 days of learning in Fullstack Development Course", sub: "Relevel by Unacademy, 2023" },
    { title: "Bachelor's Degree in Computer Applications", sub: "CSJM University, 2022" }
  ];

  return (
    <div className="bg-[#000] text-white py-6 px-6 rounded-[30px] mb-6 font-bai mt-6">
      <div className="flex items-center gap-2 mb-6 text-[#4ade80]">
        <HiOutlineAcademicCap size={24} />
        <h2 className="text-white text-xl font-medium">Education</h2>
      </div>

      <div className="space-y-6 ml-2 relative left-7">
        {items.map((item, index) => (
          <div key={index} className="relative pl-6 border-l border-white/10">
            {/* The Dot */}
            <div className="absolute left-[-4.5px] top-2 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />

            <h3 className="text-lg font-medium leading-none mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 uppercase tracking-wider">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
