import React from 'react';
import { PiPencilLine } from 'react-icons/pi';
import { GoArrowUpRight } from 'react-icons/go';
import { HiLink } from 'react-icons/hi2';
import { BsCodeSlash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import f1 from '../assets/1.png';

export default function ProjectsSection({ startVal, endVal }) {
  const project_data = [
    {
      id: 1,
      title: 'Snippitkit',
      tag: 'Frontend',
      banner: f1,
      links: {
        demo: '#',
        repo: '#',
      },
    },
    {
      id: 1,
      title: 'Snippitkit',
      tag: 'Frontend',
      banner: f1,
      links: {
        demo: '#',
        repo: '#',
      },
    },
    {
      id: 1,
      title: 'Snippitkit',
      tag: 'Frontend',
      banner: f1,
      links: {
        demo: '#',
        repo: '#',
      },
    },
    {
      id: 1,
      title: 'Snippitkit',
      tag: 'Frontend',
      banner: f1,
      links: {
        demo: '#',
        repo: '#',
      },
    },
    {
      id: 1,
      title: 'Snippitkit',
      tag: 'Frontend',
      banner: f1,
      links: {
        demo: '#',
        repo: '#',
      },
    },
    {
      id: 1,
      title: 'Snippitkit',
      tag: 'Frontend',
      banner: f1,
      links: {
        demo: '#',
        repo: '#',
      },
    },
  ];
  return (
    <div className="w-full max-w-full bg-black text-[#E6E6E6] flex flex-col items-start rounded-[30px] pt-6 pb-6 px-6 overflow-hidden mt-6">
      <div className="flex items-center gap-2">
        <span className="text-[20px] text-green-500">
          <PiPencilLine />
        </span>
        <h1 className="text-[18px] font-bai font-medium">Projects</h1>
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 mt-5">
        {project_data.slice(startVal, endVal).map(item => {
          return (
            <div id={item.id} className="flex flex-col items-start gap-2">
              <img src={item.banner} alt="" className="h-95 rounded-[15px]" />
              <span
                className="bg-[#111] text-[#a07af9] font-bai px-4
              rounded-[5px] "
              >
                {item.tag}
              </span>
              <div className="flex items-center gap-2 relative left-1">
                <span className=" text-[23px]">
                  <HiLink />
                </span>
                <h3 className="text-[22px] font-medium font-bai">{item.title}</h3>
              </div>
              <div className="flex items-center gap-2 w-full">
                <a
                  href={item.links?.repo}
                  className="bg-[#111] py-3 px-4 w-[40%] flex items-center justify-center rounded-[12px] font-bai gap-1"
                >
                  Code{' '}
                  <span>
                    <BsCodeSlash />
                  </span>{' '}
                </a>
                <a
                  href={item.links?.demo}
                  className="w-full py-3 px-4
                 bg-[#a07af9] flex items-center justify-center font-bai gap-1 rounded-[12px] text-black font-medium"
                >
                  Demo{' '}
                  <span>
                    <GoArrowUpRight />
                  </span>{' '}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <Link
        to="/projectpage"
        className="group mt-5 w-full p-[11px] flex items-center justify-center font-bai gap-2 font-medium text-[#a07af9] text-[14px] cursor-pointer bg-[#111] py-3 rounded-xl"
      >
        More Projects{' '}
        <span className="text-[#a07af9] text-[18px] transition-transform duration-500 group-hover:translate-x-1">
          <GoArrowRight />
        </span>
      </Link>
    </div>
  );
}
