import React from 'react';
import logo from '../../assets/logo.webp';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src={logo}
        alt="Company Name Logo"
        height={400}
        width={400}
        loading="eager"
        fetchpriority="high"
        className="h-17 w-auto object-contain rounded-[22px] border border-3"
      />
      <div className='flex flex-col items-start leading-1.1'>
       <h3 className="font-bai text-2xl tracking-wide text-[#524278] font-medium">Bilal Malik</h3>
       <span className='text-sm font-bai text-black/80'>Web Developer</span>
      </div>
    </div>
  );
}
