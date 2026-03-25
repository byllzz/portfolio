import React from 'react';
import { motion } from 'framer-motion'; // motion core
import { LuAtSign } from 'react-icons/lu';
import { BsFillSendFill } from "react-icons/bs";

const ContactSection = () => {
  // animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={formVariants}
      className="bg-[#111] text-white pt-6 pb-4 px-6 rounded-[30px] w-full max-w-full"
    >
      {/* header wrap */}
      <div className="flex items-center gap-2 mb-4">
        <BsFillSendFill className="text-[#4ade80] w-5 h-5" />
        <h2 className="text-xl font-medium font-bai">Send Me a Message</h2>
      </div>

      {/* email reveal */}
      <div className="flex items-center gap-2 mb-8">
        <LuAtSign className="text-[#a78bfa] w-5 h-5" />
        <a
          href="mailto:bilalmlkdev@gmail.com"
          className="text-gray-400 hover:text-white transition-colors font-bai"
        >
          bilalmlkdev@gmail.com
        </a>
      </div>

      {/* form logic */}
      <form className="space-y-4 font-bai">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.input
            variants={inputVariants}
            type="text"
            placeholder="Name"
            className="bg-[#1a1a1a] border border-white/5 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
          />
          <motion.input
            variants={inputVariants}
            type="email"
            placeholder="Your emailId"
            className="bg-[#1a1a1a] border border-white/5 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
          />
        </div>

        <motion.textarea
          variants={inputVariants}
          placeholder="Message"
          className="w-full max-w-full h-[180px] bg-[#1a1a1a] border border-white/5 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all resize-none"
        />

        {/* submit btn */}
        <motion.button
          variants={inputVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-[#a78bfa] hover:bg-[#9061f9] text-black font-semibold py-3 rounded-xl transition-colors text-lg shadow-lg shadow-purple-500/10"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactSection;
