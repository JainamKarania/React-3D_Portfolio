import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    figma,
    next,
    threejs,
    company_logo,
    freelance,
    webflow,
    reactgradient,
    frontend,
    mern
  } from "../assets";
  import pureconnectt from "../assets/sq.png";
  import pclogo from "../assets/Logowhite.png";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
{
      title: "React Developer",
      icon: reactgradient,
    },
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Webflow Developer",
      icon: webflow,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Webflow",
      icon: webflow,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "NextJS",
      icon: next,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Lead Front-End Developer",
      company_name: "PureConnectt Technologies",
      icon: freelance,
      iconBg: "#383E56",
      date: "Oct 2024 - Feb 2025",
      points: [
        "Developed and maintained the PureConnectt hiring portal, leveraging technologies ReactJS, Tailwind CSS, Recharts, and other modern frontend tools.", 
        "Designed and implemented the PureConnect Score feature, providing data-driven insights to evaluate candidates' potential fit, streamlining recruitment for employers.",  
        "High level site execution by decreasing reloading times and ensuring smooth changes across all pages, overhauling client experience." 
      ],
    },
    {
      title: "Webflow & Front-End Developer",
      company_name: "TheCSSAgency",
      icon: company_logo,
      iconBg: "#383E56",
      date: "Oct 2023 - Feb 2024",
      points: [
        "Implemented Webflow for website creation, leading to a 30% reduction in bounce rate and a 20% increase in average session duration, enhancing user experience andengagement.",
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Freelancer",
      icon: freelance,
      iconBg: "#E6DEDD",
      date: "May 2023 - Oct 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];
    const projects = [
      {
        name: "PureConnectt - Hire With Confidence",
        description:
        "Pureconnectt is a hiring portal that leverages an employee score to streamline recruitment. This score provides a quick, data-driven insight into candidates’ potential fit, helping employers make informed hiring decisions efficiently - ReactJS, Tailwind CSS, JavaScript, PHP, MySQL.",
        tags: [
          {
            name: "React",
            color: "blue-text-gradient",
          },
          {
            name: "Javascript",
            color: "yellow-text-gradient",
          },
          {
            name: "Php",
            color: "green-text-gradient",
          },
          {
            name: "Tailwind CSS",
            color: "pink-text-gradient",
          },
        ],
        image: pureconnectt,
        source_code_link: "https://www.pureconnectt.com/",
      },
      {
        name: "ZebraLearn",
        description:
          "Developed a single-page web application in Webflow, enabling a smooth 20% scroll transition between sections.Immerse yourself in seamlessly integrated content and effortlessly navigate through sections personalized to your needs created using Webflow,Javascript.",
        tags: [
          {
            name: "Webflow",
            color: "blue-text-gradient",
          },
          {
            name: "restapi",
            color: "green-text-gradient",
          },
          {
            name: "JavaScript",
            color: "yellow-text-gradient",
          },
        ],
        image: 'https://assets-global.website-files.com/628cd8099426c2c8ac4fa0f2/632499ef4e52102e44d707fb_Frame%201038.svg',
        source_code_link: "https://jainams-fabulous-site-66c1f3.webflow.io/",
      },
      {
        name: "Wonders of India",
        description:
          "Implemented a user-friendly website, ensuring 30% smooth routing between pages and contributing to a positive user experience.Unveil the wonders of India with us, uncovering the hidden treasures of this magnificent land.",
        tags: [
          {
            name: "React",
            color: "blue-text-gradient",
          },
          {
            name: "Javascript",
            color: "yellow-text-gradient",
          },
          {
            name: "Tailwind CSS",
            color: "pink-text-gradient",
          },
        ],
        image: 'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
        source_code_link: "https://wonders-of-india.vercel.app/",
      },
  ];

  
  
  
  export default { experiences,services,technologies,projects};