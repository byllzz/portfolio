import React from 'react'

export default function HireBadge() {
  return (
    <div className='flex items-center gap-2 bg-black  rounded-[12px] border border-2 border-green-900 py-[4px] px-[10px] border border-green-400'>
      <div className='h-[7px] w-[7px] rounded-full bg-green-900 brightness-200'></div>
      <span className='text-white/80 text-[14px] font-bai'>Available for work</span>
    </div>
  )
}

