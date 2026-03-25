import React from 'react'
import { VscGlobe } from 'react-icons/vsc';


export default function Experience() {
  const exp_data = [
    {
      id: 1,
      title: 'Jr. Software Developer',
      time: '7 months',
      where: 'E-mentors technologies, Jan 2024 - present',
    },
    {
      id: 2,
      title: 'Jr. Software Developer',
      time: '7 months',
      where: 'E-mentors technologies, Jan 2024 - present',
    },
  ];
  return (
    <div className="space w-full max-w-full flex flex-col gap-6 bg-black px-6 py-7 text-[#E6E6E6] rounded-[30px] ">
      <div className="flex items-center gap-2.5">
        <span className="text-[21px] text-green-500">
          <VscGlobe />
        </span>
        <h3 className="text-[18px] font-bai text-[#E6E6E6] font-medium">Experience</h3>
      </div>

          {/* exp data container */}
         {exp_data.map((item) => {
           return (
             <div key={item.id} className="flex items-start gap-10 relative left-[30px] leading-4">
               {/* exp hint dot  */}
               <div className="w-2 h-2 bg-purple-600 rounded-full relative top-1.5"></div>
               {/* exp data */}
               <div className="flex flex-col items-start gap-2">
                 <h3 className="text-[16px] font-medium font-bai text-[#E6E6E6]">
                   {item.title} | {item.time}
                 </h3>
                 <p className="font-bai text-[14px] text-white/50">
                   {item.where}
                 </p>
               </div>
             </div>
           );

          })}

    </div>
  );
}

