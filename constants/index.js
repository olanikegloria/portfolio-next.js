import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  microverse,
  niit,
  talksay,
  carrent,
  jobit,
  tripguide,
  threejs,
  tochi,
  afreen,
  winner,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Electrical/Electronics Engineer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Art Enthusiast",
    icon: mobile,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Tester",
    company_name: "Talksay",
    icon: talksay,
    iconBg: "#383E56",
    date: "september 2021 - january 2023",
    points: [
      "During my role as a Software Tester at TalkSay, I ensured the quality of our mobile and web applications by conducting comprehensive testing on iOS and Android platforms.", 
      "I collaborated closely with developers and product managers to understand project goals and user expectations, developing detailed test plans and scenarios. Using manual and automated testing techniques, including tools like Selenium and Appium, I identified and documented software defects using Jira for efficient communication and resolution.",
      "I also contributed to integrating testing processes into continuous integration pipelines to support agile development practices. ",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "NIIT Limited",
    icon: niit,
    iconBg: "#E6DEDD",
    date: "July 2022 - May 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Microverse",
    icon: microverse,
    iconBg: "#383E56",
    date: "February 2023 - Jan 2024",
    points: [
      "During my experience as a Web Developer at Microverse, I gained proficiency in modern technologies and frameworks including React.js, Redux, Next.js for frontend development, and Node.js for backend development.",
       "At Microverse, I collaborated with peers on projects, utilizing React.js and Redux to build interactive and responsive user interfaces. I implemented Next.js for server-side rendering and optimized performance.", 
      "As part of our development process, I utilized testing frameworks for frontend code to ensure robust and bug-free applications. In addition, I worked on backend development using Node.js, building RESTful APIs and integrating with databases like MongoDB and PostgreSQL.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but olly proved me wrong.",
    name: "Asene Thierry",
    designation: "CFO",
    company: "Acme Co",
    image: winner,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Olanike does.",
    name: "TochiOkolie",
    designation: "COO",
    company: "Ticoniq",
    image: tochi,
  },
  {
    testimonial:
      "After Olanike optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Tajul Afreen",
    designation: "CTO",
    company: "456 Enterprises",
    image: afreen,
  },
];

const projects = [
  {
    name: "Apple Catcher",
    description:
      "Experience the thrill of fruit-catching fun in this dynamic web game crafted using HTML, CSS, and JavaScript with the Phaser framework. Test your reflexes as you control a basket to catch falling apples while avoiding obstacles. With vibrant visuals and engaging gameplay, this project showcases my foray into game development using JavaScript and highlights my proficiency in web technologies",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css and HTML",
        color: "green-text-gradient",
      },
      {
        name: "phaser",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/olanikegloria/js-game",
  },
  {
    name: "Brainwave",
    description:
      "Elevate your digital experience with Brainwave, a cutting-edge React.js application meticulously crafted to embody modern UI/UX design principles. Powered by React.js and enhanced with Tailwind CSS, this sleek and responsive app sets a new standard for user interaction. Its fluid animations, intuitive layout, and seamless navigation redefine user engagement and latest web designs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/olanikegloria/brainwave",
  },
  {
    name: "Realtime Chat App",
    description:
      "Dive into seamless communication with our ChatApp, a real-time messaging platform engineered with Node.js, React.js, and Socket.IO. This dynamic trio of technologies powers instant messaging, enabling users to engage in live conversations effortlessly. With its intuitive interface and robust backend architecture, ChatApp delivers a frictionless user experience, fostering connections in real-time.",
    tags: [
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "react.js",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/olanikegloria/chat-app",
  },
];

export { services, technologies, experiences, testimonials, projects };