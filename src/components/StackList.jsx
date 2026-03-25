import React from 'react';
import { SiAngular, SiReact, SiNodedotjs, SiMongodb, SiHtml5,  SiFigma } from 'react-icons/si';

const StackList = () => {
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
    // {
    //   name: "CSS 3",
    //   category: "Visual Styling",
    //   desc: "CSS3 is my styling and layout powerhouse. It's instrumental in creating visually appealing websites by controlling everything from fonts and colors to the responsive design that adapts to various screen sizes.",
    //   icon: <SiCss3 className="text-[#1572b6]" />,
    // },
    {
      name: "Figma",
      category: "Collaborative Design",
      desc: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with teams to create high-fidelity prototypes and UI/UX designs before moving to the development stage.",
      icon: <SiFigma className="text-[#F24E1E]" />,
    }
  ];

  return (
    <div className="space bg-[#000] text-[#e6e6e6] px-8 py-7 rounded-[30px] font-bai">
      <div className="space-y-12">
        {skills.map((skill, index) => (
          <div key={index} className="flex gap-4 group">
            {/* Icon Container */}
            <div className="flex-shrink-0 w-16 h-16 bg-white/5 rounded-[23px] border border-white/10 flex items-center justify-center text-2xl transition-colors group-hover:bg-white/10">
              {skill.icon}
            </div>

            {/* Content */}
            <div className="space-y-2 relative top-4">
              <div>
                <h3 className="text-lg font-medium leading-none">{skill.name}</h3>
                <span className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">
                  {skill.category}
                </span>
              </div>
              <p className=" text-[16px] leading-7">
                {skill.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackList;
