import React from 'react'

export default function ProjectsTitle({headerTitle , headerDesc}) {
  return (
    <div className="space w-full bg-black text-[#E6E6E6]
    rounded-[30px] px-6 pb-6 pt-5 space-y-2">
      <h3 className="font-bai text-[36px]">{headerTitle}</h3>
      <p className='font-bai leading-6 text-[16px]'>
       {headerDesc}
      </p>
    </div>
  );
}

