import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // motion core
import { HiOutlineHome, HiOutlineViewGrid, HiOutlinePaperAirplane } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import { PiPencilLine } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export default function Doc() {
  const [activeTab, setActiveTab] = useState('home');

  // nav data
  const navItems = [
    { id: 'home', icon: <HiOutlineHome size={22} />, label: 'Home', to: "/" },
    { id: 'about', icon: <FaUser size={20} />, label: 'About', to: "/about" },
    { id: 'projects', icon: <PiPencilLine size={22} />, label: 'Projects', to: "/projects" },
    { id: 'skills', icon: <HiOutlineViewGrid size={22} />, label: 'Skills', to: "/stacks" },
    {
      id: 'contact',
      icon: <HiOutlinePaperAirplane size={22} className="rotate-45 relative bottom-[1px] left-[1px]" />,
      label: 'Contact', to: "/contact"
    },
  ];

  return (
    // dock wrapper
    <motion.div
      initial={{ y: 20, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      className="fixed bottom-5 left-1/2 z-50"
    >
      <nav className="flex items-center gap-1.5 p-1.5 bg-[#121212]/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        {navItems.map((item) => (
          <Link
            to={item.to}
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300
              ${activeTab === item.id
                ? 'text-white'
                : 'text-gray-500 hover:text-gray-200'
              }`}
          >
            {/* active pill bg */}
            {activeTab === item.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-[#222222] rounded-full -z-0"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}

            <span className="relative z-10">
              {item.icon}
            </span>

            {/* active dot */}
            {activeTab === item.id && (
              <motion.div
                layoutId="activeDot"
                className="absolute -bottom-0.5 w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] z-20"
              />
            )}

            {/* tooltip */}
            <AnimatePresence>
              <motion.span
                className="absolute -top-10 scale-0 group-hover:scale-100 px-3 py-1 bg-[#1a1a1a] border border-white/10 text-white text-[11px] font-medium rounded-lg pointer-events-none"
              >
                {item.label}
              </motion.span>
            </AnimatePresence>
          </Link>
        ))}
      </nav>
    </motion.div>
  );
}
