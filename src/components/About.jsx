import React from 'react'
import { GoArrowRight } from 'react-icons/go';
import {Link} from 'react-router-dom'
export default function About() {
  return (
    <div className="w-full max-w-full flex flex-col items-start gap-2 bg-black text-white rounded-[30px] pr-10 pl-6 pt-5 pb-7">
      <h3 className="text-[36px] text-[#E6E6E6] font-medium font-bai">Hello, I'm Bilal</h3>
      <p className="font-bai leading-5.5 text-[17px] tracking-tight text-[#e6e6e6f1]">
        A passionate Full Stack Developer skilled in designing scalable and efficient software
        solutions. Currently, I work at E-mentors Technologies, where I collaborate with development
        teams to create responsive, visually appealing interfaces. My work includes crafting
        reusable components and enhancing functionality and design. In the past year, I've
        contributed to projects that improved application performance by 30% and increased user
        engagement by 20%.
      </p>
      <Link to="/aboutpage" className="group mt-3 w-full p-[11px] flex items-center justify-center font-bai gap-2 font-medium text-[#a07af9] text-[14px] cursor-pointer bg-[#111] rounded-xl">
        More about Me{' '}
        <span className='text-[#a07af9] text-[18px] transition-transform duration-500 group-hover:translate-x-1'>
          <GoArrowRight />
        </span>
      </Link>
    </div>
  );
}

