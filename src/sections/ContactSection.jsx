import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Ensure you have run: npm install react-icons
// Change this line
import { LuAtSign } from 'react-icons/lu';
import { FiCheckCircle } from 'react-icons/fi'; // Use Feather instead of Lucide
import { BsFillSendFill } from "react-icons/bs";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    msg: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Replace this with your actual key from web3forms.com
  const WEB3_ACCESS_KEY = "YOUR_ACTUAL_KEY_HERE";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!WEB3_ACCESS_KEY || WEB3_ACCESS_KEY === "YOUR_ACTUAL_KEY_HERE") {
      alert("Please add your Web3Forms Access Key first!");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          access_key: WEB3_ACCESS_KEY
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', msg: '' });
      }
    } catch (error) {
      console.error("Form Error:", error);
      alert("Connectivity issue. Check console.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const anim = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#121212] text-white pt-6 pb-4 px-6 rounded-[30px] w-full"
    >
      <div className="flex items-center gap-2 mb-4">
        <BsFillSendFill className="text-green-400 w-5 h-5" />
        <h2 className="text-xl font-medium">Send Me a Message</h2>
      </div>

      <div className="flex items-center gap-2 mb-8 text-gray-400">
        <LuAtSign className="text-purple-400 w-5 h-5" />
        <a href="mailto:bilalmlkdev@gmail.com" className="hover:text-white transition-colors">
          bilalmlkdev@gmail.com
        </a>
      </div>

      {submitted ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center">
          <FiCheckCircle className="text-green-400 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl">Message Sent!</h3>
          <button onClick={() => setSubmitted(false)} className="mt-4 text-purple-400 underline">
            Send another?
          </button>
        </motion.div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-[#1a1a1a] border border-white/10 rounded-xl p-4 focus:ring-1 focus:ring-purple-500 outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#1a1a1a] border border-white/10 rounded-xl p-4 focus:ring-1 focus:ring-purple-500 outline-none"
            />
          </div>
          <textarea
            name="msg"
            required
            placeholder="Message"
            value={formData.msg}
            onChange={handleChange}
            className="w-full h-40 bg-[#1a1a1a] border border-white/10 rounded-xl p-4 focus:ring-1 focus:ring-purple-500 outline-none resize-none"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-400 hover:bg-purple-500 text-black font-bold py-3 rounded-xl disabled:opacity-50 transition-all"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactSection;
