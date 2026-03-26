import React from 'react';
import { motion } from 'framer-motion'; // @motion
import { HiOutlineBadgeCheck } from 'react-icons/hi';

const Achievements = () => {
  // data
  const certificates = [
    { img: "/cert1.png", title: "JavaScript Marathon Certificate" },
    { img: "/cert2.png", title: "405 days training in Fullstack Development" },
    { img: "/cert3.png", title: "Fullstack Certification" },
    { img: "/cert4.png", title: "HackerRank Certificate" },
  ];

  // variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="bg txt font-bai py-6 px-6 rounded-[30px]">
      {/* header */}
      <div className="flex items-center gap-2 mb-8 text-[#4ade80]">
        <HiOutlineBadgeCheck size={24} />
        <h2 className="text-white text-xl font-medium">Achievements</h2>
      </div>

      {/* grid */}
      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            variants={itemVars}
            className="group cursor-pointer"
          >
            {/* img-wrapper */}
            <div className="bg-[#1a1a1a] rounded-[10px] overflow-hidden border border-white/5 mb-3 aspect-[4/3] flex items-center justify-center p-2">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-full object-contain rounded-[5px] group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* meta */}
            <div className="flex items-center gap-2 text-lg txt font-medium px-2 leading-5">
               <HiOutlineBadgeCheck className="text-blue-400 flex-shrink-0" />
               <span className="truncate">{cert.title}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Achievements;
