import React from 'react';
import { RiGithubLine } from 'react-icons/ri';
import { SiReaddotcv } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { SiUikit } from 'react-icons/si';


export default function Links() {
  const links_arr = [
    {
      id: 1,
      href: 'https://linkedin.com/bilalmlkdev',
      icon: FaLinkedin,
    },
    {
      id: 2,
      href: 'https://github.com/byllzz',
      icon: RiGithubLine,
    },
    {
      id: 3,
      href: 'https://uiverse.io/byllzz',
      icon: SiUikit,
    },
    {
      id: 4,
      href: 'https://github.com/byllzz',
      icon: SiReaddotcv,
    },
  ];

  return (
    <div className="flex items-center gap-3 ">
      {links_arr.map(item => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 transition-color bg-black text-[#a07af9] p-2 h-[42px] w-[42px] rounded-[14px] shadow-sm shadow-black transition-shadow hover:text-white/80 hover:shadow-none"
        >
          {item.icon && <item.icon className="text-[21px]" />}
        </a>
      ))}
    </div>
  );
}


