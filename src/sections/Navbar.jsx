import React from 'react'
import Logo from '../components/Logo'
import Links from '../components/Links'
import HireBadge from '../components/HireBadge'

export default function Navbar() {
  return (
    <div className="w-full max-w-full flex items-center justify-between rounded-[28px] bg-[#EBEBEB] text-black border border-black py-1 px-4">
      <div className="relative right-[10px]">
        <Logo />
      </div>
      <div className='relative left-2'>
        <HireBadge />
      </div>
      <div className="relative right-[6px]">
        <Links />
      </div>
    </div>
  );
}

