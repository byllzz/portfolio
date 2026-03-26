import React from 'react';
import { motion } from 'framer-motion'; // animation
import { HiOutlineUser, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiGeeksforgeeks } from 'react-icons/si';

const ContactDetails = () => {
  // contact data
  const contactLinks = [
    { icon: <HiOutlineMail />, label: 'bilalmlkdev@gmail.com', href: 'mailto:bilalmlkdev@gmail.com' },
    { icon: <HiOutlinePhone />, label: '923316995177', href: 'tel:923316995177' },
    { icon: <FaLinkedin />, label: 'linkedin.com/in/bilalmlkdev', href: 'https://linkedin.com/in/bilalmlkdev' },
    { icon: <FaGithub />, label: 'github.com/byllzz', href: 'https://github.com/byllzz' },
    { icon: <FaHackerrank />, label: 'HackerRank', href: 'https://hackerrank.com' },
    { icon: <SiGeeksforgeeks />, label: 'GeeksForGeeks', href: 'https://geeksforgeeks.org' },
  ];

  // stagger config
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className=" space-y-0 font-bai">
      {/* header card */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg txt w-full p-5 rounded-[30px] mb-4"
      >
        <h1 className="text-[36px] font-medium tracking-tight">Let's Connect!</h1>
      </motion.div>

      {/* content card */}
      <div className="bg txt p-6 rounded-[30px]">
        {/* subheader */}
        <div className="flex items-center gap-3 mb-8 text-[#4ade80]">
          <HiOutlineUser size={28} />
          <h2 className="txt text-2xl font-medium">Contact</h2>
        </div>

        {/* link grid */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVars}
              whileHover={{ x: 5, backgroundColor: "#222" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 bg-[#1a1a1a] border border-white/5 py-1.5 px-3 rounded-2xl transition-colors group"
            >
              <div className="text-indigo-400 text-xl transition-transform group-hover:scale-110">
                {link.icon}
              </div>
              <span className="txt text-lg font-light truncate">
                {link.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactDetails;
