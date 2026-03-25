import React from 'react';
import { motion } from 'framer-motion'; // animation
import { SiAngular, SiReact, SiNodedotjs, SiMongodb, SiHtml5, SiFigma } from 'react-icons/si';

const StackList = () => {
  // stack data
  const skills = [
    {
      name: "Angular",
      category: "Full-fledged framework",
      desc: "I use angular whenever I develop large scale applications because of its more opinionated, structured approach with components. It has a clear separation of concerns with components, services, and modules.",
      icon: <SiAngular className="text-[#dd0031]" />,
    },
    {
      name: "React",
      category: "Dynamic Development",
      desc: "React is my dynamic web development framework. I apply it to build interactive web applications with rich user interfaces. It's instrumental in creating engaging, responsive, and data-driven web experiences.",
      icon: <SiReact className="text-[#61dafb]" />,
    },
    {
      name: "Node.js",
      category: "Backend Development",
      desc: "Using Node.js with Express.js provides a powerful, flexible, and efficient backend solution that can cater to a wide range of application needs, from small projects to large-scale, real-time applications.",
      icon: <SiNodedotjs className="text-[#339933]" />,
    },
    {
      name: "MongoDB",
      category: "NoSQL Database",
      desc: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. This allows for a dynamic schema, meaning you can store different fields for different documents in a collection.",
      icon: <SiMongodb className="text-[#47A248]" />,
    },
    {
      name: "HTML 5",
      category: "Structure and Content",
      desc: "HTML5 is the backbone of my web design work. I use it to structure content, ensuring that websites are semantically meaningful and accessible. It forms the foundation upon which the visual elements of a site are built.",
      icon: <SiHtml5 className="text-[#e34f26]" />,
    },
    {
      name: "Figma",
      category: "Collaborative Design",
      desc: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with teams to create high-fidelity prototypes and UI/UX designs before moving to the development stage.",
      icon: <SiFigma className="text-[#F24E1E]" />,
    }
  ];

  // stagger config
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // item entry
  const itemVars = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-[#000] text-[#e6e6e6] px-8 py-7 rounded-[30px] font-bai">
      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVars}
            className="flex gap-4 group"
          >
            {/* icon box */}
            <motion.div
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="flex-shrink-0 w-16 h-16 bg-white/5 rounded-[23px] border border-white/10 flex items-center justify-center text-2xl transition-colors"
            >
              {skill.icon}
            </motion.div>

            {/* info block */}
            <div className="space-y-2 relative top-1">
              <div>
                <h3 className="text-lg font-medium leading-none mb-1">{skill.name}</h3>
                <span className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">
                  {skill.category}
                </span>
              </div>
              <p className="text-[16px] leading-7 text-white/70 group-hover:text-white transition-colors">
                {skill.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StackList;
