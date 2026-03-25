import React from 'react';
import { LuAtSign } from 'react-icons/lu';
import { BsFillSendFill } from "react-icons/bs";
const ContactSection = () => {
  return (
    <div className="bg-[#111] text-white pt-6 pb-4 px-6 rounded-[30px] w-full max-w-full mt-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <BsFillSendFill className="text-[#4ade80] w-5 h-5" />
        <h2 className="text-xl font-medium font-bai">Send Me a Message</h2>
      </div>

      {/* Email Link */}
      <div className="flex items-center gap-2 mb-8">
        <LuAtSign className="text-[#a78bfa] w-5 h-5" />
        <a
          href="mailto:vishalsavita809018@gmail.com"
          className="text-gray-400 hover:text-white transition-colors font-bai"
        >
          bilalmlkdev@gmail.com
        </a>
      </div>

      {/* Form */}
      <form className="space-y-4 font-bai">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="bg-[#1a1a1a] border border-white/5 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
          />
          <input
            type="email"
            placeholder="Your emailId"
            className="bg-[#1a1a1a] border border-white/5 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
          />
        </div>
        <textarea
          placeholder="Message"
          className="w-full max-w-full h-[180px] bg-[#1a1a1a] border border-white/5 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all resize-none"
        />

        <button
          type="submit"
          className="w-full bg-[#a78bfa] hover:bg-[#9061f9] text-black font-semibold py-3 rounded-xl transition-colors text-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
