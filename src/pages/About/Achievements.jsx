import React from 'react';
import { HiOutlineBadgeCheck } from 'react-icons/hi';

const Achievements = () => {
  const certificates = [
    { img: "/cert1.png", title: "JavaScript Marathon Certificate" },
    { img: "/cert2.png", title: "405 days training in Fullstack Development" },
    { img: "/cert3.png", title: "Fullstack Certification" },
    { img: "/cert4.png", title: "HackerRank Certificate" },
  ];

  return (
    <div className="bg-[#000] text-white py-6 px-6 rounded-[30px] font-bai ">
      <div className="flex items-center gap-2 mb-8 text-[#4ade80]">
        <HiOutlineBadgeCheck size={24} />
        <h2 className="text-white text-xl font-medium">Achievements</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        {certificates.map((cert, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="bg-[#1a1a1a] rounded-[10px] overflow-hidden border border-white/5 mb-3 aspect-[4/3] flex items-center justify-center p-2">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-full object-contain rounded-[5px] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center gap-2 text-lg text-gray-400 font-medium px-2 leading-5">
               <HiOutlineBadgeCheck className="text-blue-400" />
               {cert.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
