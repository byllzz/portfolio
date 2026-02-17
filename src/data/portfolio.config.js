
// PORTFOLIO TEMPLATE CONFIG ....
// Edit this file to customize your data..

// preloader name text array
export const preloader = ["Y" , "o" , "u" , "r" , "n" , "a" , "m" , "e"]
// for Seo
export const seo = {
  title: "Your Name | Frontend Developer Portfolio",
  description:
    "Frontend Developer specializing in React, Next.js, Tailwind CSS, and motion-driven UI.",
  keywords:
    "Frontend Developer, React, Next.js, JavaScript, Portfolio, Web Developer",
  author: "Your Name",
  themeColor: "#0e0e12",
  siteUrl: "https://your-portfolio.vercel.app",
  twitterHandle: "@yourhandle",
  ogImage: "/og-image.jpg",
};

// Hero data
export const hero = {
  nameLetters: ['Y','o','u','r','N','a','m','e' , 'o' , 'k'],
  tagline: "Transforming Ideas Into Engaging Web Experiences",
  about : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ad consequatur? At veritatis ex enim repellendus, inventore a neque facilis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veniam. Aliquid, placeat earum! Atque, eligendi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate justo sed mauris volutpat.",
  roles: [
    "React Js , Next Js",
    "Frontend Developer, Js Developer",
    "Motion-Driven Web ",
  ],
};

// hero banners
import bn1 from '../assets/hero-banners/banner1.webp';
import bn2 from '../assets/hero-banners/banner2.webp';
import bn3 from '../assets/hero-banners/banner3.webp';
import bn4 from '../assets/hero-banners/banner4.webp';
import bn5 from '../assets/hero-banners/banner5.webp';
import bn6 from '../assets/hero-banners/banner6.webp';
import bn7 from '../assets/hero-banners/banner7.webp';
import bn8 from '../assets/hero-banners/banner8.webp';
import bn9 from '../assets/hero-banners/banner9.webp';
import bn10 from '../assets/hero-banners/banner10.webp';

export const heroBanners = [
  bn1, bn2, bn3, bn4, bn5, bn6, bn7, bn8, bn9, bn10
];

// your social links
export const socialLinks = [
  { label: "GitHub", url: "https://github.com/username" },
  { label: "LinkedIn", url: "https://linkedin.com/in/username" },
  { label: "Twitter (X)", url: "https://twitter.com/username" },
  { label: "UIverse", url: "https://uiverse.io/username" },
];

// your experience data..
export const stats = [
  { total: "10+", label: "Projects Completed" },
  { total: "1+", label: "Years of Experience" },
  { total: "2", label: "Specializations" },
  { total: "10+", label: "Technologies Used" },
];

// your skills
export const skills = {
  development: [
    "HTML5 & CSS3 + Responsive",
    "JavaScript (ES6+)",
    "UI/UX Design",
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS / CSS-in-JS",
  ],
  design: [
    "Motion & Interaction Design",
    "Visual Design & Composition",
    "Typography & Color Theory",
    "Wireframing & Prototyping",
    "Figma / Adobe XD / Canva",
  ],
  tools: [
    "Git & GitHub",
    "VS Code & Extensions",
    "Chrome DevTools",
    "NPM / Yarn / Vite",
    "Responsive Debugging & Testing",
  ],
};

// here you can add each skill details but remember must in order like the about skill you put ok...

export const skillDetails = Array(16).fill(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate justo sed mauris volutpat."
);

// all projects data
import placeholderImg from '../assets/projects-pics/placeholder.webp';

export const projects = Array(6).fill().map((_, i) => ({
  title: `Project ${i + 1}`,
  category: i % 2 === 0 ? "Web App" : "Tool",
  image: placeholderImg,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  tech: ["HTML", "CSS", "JavaScript"],
}));

// your background proffessional data ..
export const experiences = Array(3).fill().map((_, i) => ({
  date: "2025 (Oct – Dec)",
  role: `Role ${i + 1}`,
  company: `Company ${i + 1}`,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac dolor ut sapien placerat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac dolor ut sapien placerat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac dolor ut sapien placerat.Lorem ipsum dolor sit amet,",
}));

// contact details but this is more customize..
export const contact = {
  heading: "Let's create something extraordinary",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus non massa facilisis luctus.",
  ctaText: "Contact",
  items: [
    {
      label: "Email",
      value: "email@example.com",
      href: "mailto:email@example.com?subject=Contact%20from%20Portfolio",
    },
    {
      label: "Location",
      value: "City, Country",
    },
    {
      label: "GitHub",
      value: "github.com/username",
      href: "https://github.com/username",
      target: "_blank",
    },
  ],
};

// footer data must be your links or
export const footer = {
  links: socialLinks,
  available: true,
  availableText: "AVAILABLE FOR WORK",
};

// this is main output ...
export const settings = {
  showProjects: true,
  showExperience: true,
  showStats: true,
  showContact: true,
};
