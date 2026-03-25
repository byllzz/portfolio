import React from 'react'
import { GoArrowRight } from 'react-icons/go';
import {Link} from 'react-router-dom'
export default function TalkToMe() {
  return (
    <div className="space w-full max-w-full bg-black text-[#E6E6E6] font-bai p-3 rounded-[30px] flex items-center justify-center relative overflow-hidden group">
      <h1 className="font-bai text-[175px] font-medium transition-opacity duration-500 group-hover:opacity-50">Let's Talk</h1>

      <div className="absolute w-full h-full z-2 flex items-center justify-center">
        <Link to="/contact" className="w-[130px] h-[130px] rounded-full flex items-center justify-center bg-[#a07af9] translate-y-100 transition-all duration-600 rotate-45 opacity-50 group-hover:translate-y-0 group-hover:rotate-0 group-hover:opacity-100">
          <span className="text-[#000] text-[48px] ">
            <GoArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
}

