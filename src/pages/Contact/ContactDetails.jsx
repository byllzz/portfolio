import React from 'react';
import { HiOutlineUser, HiOutlineMail, HiOutlinePhone, HiOutlineCode } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiGeeksforgeeks } from 'react-icons/si';

const ContactDetails = () => {
  const contactLinks = [
    {
      icon: <HiOutlineMail />,
      label: 'bilalmlkdev@gmail.com',
      href: 'mailto:bilalmlkdev@gmail.com',
    },
    { icon: <HiOutlinePhone />, label: '923316995177', href: 'tel:923316995177' },
    {
      icon: <FaLinkedin />,
      label: 'www.linkedin.com/in/bilalmlkdev',
      href: 'https://linkedin.com/in/bilalmlkdev',
    },
    { icon: <FaGithub />, label: 'github.com/byllzz', href: 'https://github.com/byllzz' },
    { icon: <FaHackerrank />, label: 'HackerRank', href: 'https://hackerrank.com' },
    { icon: <SiGeeksforgeeks />, label: 'GeeksForGeeks', href: 'https://geeksforgeeks.org' },
  ];

  return (
    <div className=" space-y-6 font-bai mt-6">
      {/* 1. Header Card */}
      <div className="bg-[#000] w-full text-white p-5 rounded-[30px] ">
        <h1 className="text-[36px] font-medium tracking-tight">Let's Connect!</h1>
      </div>

      {/* 2. Contact Links Card */}
      <div className="bg-[#000] text-white p-6 rounded-[30px]">
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-8 text-[#4ade80]">
          <HiOutlineUser size={28} />
          <h2 className="text-white text-2xl font-medium">Contact</h2>
        </div>

        {/* Grid of Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#1a1a1a] hover:bg-[#222222] border border-white/5 py-1.5 px-3  rounded-2xl transition-all duration-300 group"
            >
              <div className="text-indigo-400 text-xl group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <span className="text-gray-300 text-lg font-light truncate">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
