import React from 'react'
import { VscGlobe } from 'react-icons/vsc';


export default function Experience() {
  return (
    <div className="mt-5 w-full max-w-full flex flex-col gap-6 bg-black px-6 py-7 text-[#E6E6E6] rounded-[30px] ">
      <div className="flex items-center gap-2.5">
        <span className="text-[21px] text-green-500">
          <VscGlobe />
        </span>
        <h3 className="text-[18px] font-bai text-[#E6E6E6] font-medium">Experience</h3>
      </div>

      <div className="flex items-start gap-10 relative left-[30px] leading-4">
        <div className="w-2 h-2 bg-purple-600 rounded-full relative top-1.5"></div>
        <div className="flex flex-col items-start gap-2">
          <h3 className='text-[16px] font-medium font-bai text-[#E6E6E6]'>Jr. Software Developer | 7 months</h3>
          <p className='font-bai text-[14px] text-white/50'>E-mentors technologies, Jan 2024 - present</p>
        </div>
      </div>
    </div>
  );
}

