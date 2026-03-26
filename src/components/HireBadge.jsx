import React from 'react'

export default function HireBadge() {
  return (
    <div className='flex items-center gap-2 bg  rounded-[11px] border border-2 border-green-900 py-[4px] px-[12px] border border-green-400'>
      <div className='h-[6px] w-[6px] rounded-full bg-green-900 brightness-200'></div>
      <span className='txt text-[14px] font-bai'>Available for work</span>
    </div>
  )
}

