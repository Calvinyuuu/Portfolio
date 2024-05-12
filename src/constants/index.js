import {
  backend,
  web,
  github,
  linkedin,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  apple,
  uniqlo,
  costco,
  dzpc,
  rahf,
  snews,
  sst,
  ddlc,
  unwrapped,
  typescript,
  link,
} from "../assets";

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
    id: "work",
    title: "Work",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Back-end Developer",
    icon: backend,
  },
];

export const socials = [
  {
    name: "github",
    icon: github,
    link: "https://github.com/Calvinyuuu",
  },
  {
    name: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/calvinjkyu/",
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React.JS",
    icon: reactjs,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Node.JS",
    icon: nodejs,
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
    title: "Operations Specialist",
    company_name: "Apple",
    icon: apple,
    iconBg: "#9a9ea1",
    date: "October 2019 - Jan 2022",
    points: [
      "Performed inventory receiving, counting, returning and running tasks, to maintain retail inventory for thousands of customers weekly",
      "Maintained standards in line with Retail Inventory Processes and Apple Global Standards",
      "Identified training resources to keep up to date with inventory process changes",
      "Managed appropriate paperwork and other duties as assigned by the leadership team",
    ],
  },
  {
    title: "Sales Associate and Trainer",
    company_name: "Uniqlo",
    icon: uniqlo,
    iconBg: "#9a9ea1",
    date: "January 2018 - October 2019",
    points: [
      "Maintained stockroom inventory and cleanliness",
      "Promoted top standards set by our staff and the company at Uniqlo Japan",
      "Facilitated training for both new and tenured staff",
      "Promoted to Division Leader and Trainer in May 2018",
      "Represented the store as a Digital Ambassador for the E-Commerce division of Uniqlo Canada",
    ],
  },
  {
    title: "Front End Assistant - Seasonal",
    company_name: "Costco Wholesale",
    icon: costco,
    iconBg: "#9a9ea1",
    date: "October 2016 - January 2017",
    points: [
      "Supported the main cashiers to keep the checkout line flowing",
      "Keeping the workspace clean for any passing customers",
      "Maintained the parking lot for cleanliness, ease of use, and safety",
      "Tracked down items needed for customers at checkout",
    ],
  },
  {
    title: "Coach and Coxswain - Contractor",
    company_name: "Dragon Zone Paddling Club",
    icon: dzpc,
    iconBg: "#9a9ea1",
    date: "January 2016 - January 2018",
    points: [
      "Directed and assisted all staff and volunteers with pre-festival setup and post-festival takedown",
      "Experienced coach, developed a new skill set for aspiring water sport paddlers of all skill levels",
      "Accredited Coxswain for Dragon boat teams or single day groups that are tasked with the safety of the group.",
      "Facilitated safety debriefs and the setup/takedown of each session",
    ],
  },
];

//{name, description, tags{name, color}, image, link}
const projects = [
  {
    name: "UnWrapped",
    subtext: "Personal Project",
    description:
      "Unwrapped is a music analytics app inspired by Spotify Wrapped. It's designed to provide users with insights into their listening history over various time frames, including the past month, past 6 months, and past few years. The app presents this data in a user-friendly format, making it easy for users to explore and share their music preferences with friends and followers on social media platforms.",
    tags: [
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "React.JS",
        color: "pink-text-gradient",
      },
      {
        name: "Node.JS",
        color: "orange-text-gradient",
      },
    ],
    image: unwrapped,
    source_code_link: "https://unwrapped-app.vercel.app",
    source_code_image: link,
  },
  {
    name: "Roll a Hippo Foundation - CRM",
    subtext: "Industry Sponsered Student Project",
    description:
      "This project is the most recent and last practicum during the CST Diploma. During a five week period, we were tasked with deploying and adding minor quality of life features to the foundations Customer Relationship Management System.",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Web-Development",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "orange-text-gradient",
      },
    ],
    image: rahf,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Supernova Early Warning System - Web App",
    subtext: "Industry Sponsered Student Project",
    description:
      "Another Practicum in the fourth term during the CST Diploma. During a 3 month period, we had the goal of uncovering requirements with the client and to practice the agile methodology. The greatest challenge was working with an app to be deployed with wordpress.",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Web-Development",
        color: "pink-text-gradient",
      },
      {
        name: "WordPress",
        color: "orange-text-gradient",
      },
    ],
    image: snews,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Project Management Timesheet System",
    subtext: "Mock Development Team Project",
    description:
      "This project was a mock development team consisting of twelve students with various roles. The role I took up for this project was Systems Analyst as I wanted more experience outside of the development role.",
    tags: [
      {
        name: "Csharp",
        color: "blue-text-gradient",
      },
      {
        name: ".Net",
        color: "green-text-gradient",
      },
      {
        name: "Web-Development",
        color: "pink-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "orange-text-gradient",
      },
    ],
    image: sst,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Hangman Web-app",
    subtext: "Student Project",
    description:
      "This project represents my initial development opportunity as I embarked on my journey of learning JavaScript during my first term in the CST program. The app is built using Client-side JavaScript and based on an existing psychological horror game on steam ",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Web-Development",
        color: "pink-text-gradient",
      },
    ],
    image: ddlc,
    // source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
