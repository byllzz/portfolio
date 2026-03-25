import React, { useState } from 'react';
import { HiOutlineHome, HiOutlineViewGrid, HiOutlinePaperAirplane } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import { PiPencilLine } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export default function Doc() {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', icon: <HiOutlineHome size={22} />, label: 'Home', to: "/" },
    { id: 'about', icon: <FaUser size={20} />, label: 'About', to: "/aboutpage" },
    { id: 'blog', icon: <PiPencilLine size={22} />, label: 'Blog', to: "/projectpage" }, // Fixed label logic to match your array
    { id: 'projects', icon: <HiOutlineViewGrid size={22} />, label: 'Projects', to: "/skillspage" },
    {
      id: 'contact',
      icon: <HiOutlinePaperAirplane size={22} className="rotate-45 relative bottom-[1px] left-[1px]" />,
      label: 'Contact', to: "/contactpage"
    },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-1.5 p-1.5 bg-[#121212]/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        {navItems.map((item) => (
          <Link
            to={item.to}
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            // Added 'group' for tooltip support and fixed dimensions to w-12/h-12
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300
              ${activeTab === item.id
                ? 'bg-[#222222] text-white'
                : 'text-gray-500 hover:text-gray-200 hover:bg-white/5'
              }`}
          >
            <span className="relative z-10">
              {item.icon}
            </span>

            {/* Indicator Bar - Changed to white/purple glow like the screenshot */}
            {activeTab === item.id && (
              <div className="absolute -bottom-0.5 w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            )}

            {/* Tooltip - Now works because of the 'group' class above */}
            <span className="absolute -top-10 scale-0 group-hover:scale-100 px-3 py-1 bg-[#1a1a1a] border border-white/10 text-white text-[11px] font-medium rounded-lg transition-all duration-200 pointer-events-none">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
