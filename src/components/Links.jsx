import React from 'react';
import { motion } from 'framer-motion'; // motion core
import { RiGithubLine } from 'react-icons/ri';
import { SiReaddotcv } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { SiUikit } from 'react-icons/si';

export default function Links() {
  // links data
  const links_arr = [
    { id: 1, href: 'https://linkedin.com/bilalmlkdev', icon: FaLinkedin },
    { id: 2, href: 'https://github.com/byllzz', icon: RiGithubLine },
    { id: 3, href: 'https://uiverse.io/byllzz', icon: SiUikit },
    { id: 4, href: '#', icon: SiReaddotcv },
  ];

  // animation variants
  const containerVars = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVars = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      variants={containerVars}
      initial="hidden"
      animate="visible"
      className="flex items-center gap-3"
    >
      {links_arr.map((item) => {
        const Icon = item.icon; // icon ref
        return (
          <motion.a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVars}
            whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center bg text-[#a07af9] h-[42px] w-[42px] rounded-[14px] shadow-sm shadow-black transition-colors hover:text-white/80"
          >
            {Icon && <Icon className="text-[21px]" />}
          </motion.a>
        );
      })}
    </motion.div>
  );
}
