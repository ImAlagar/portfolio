// ---------------- IMPORTS ----------------
import { 
  Code2, Database, Server, Smartphone, Wrench, Users, Mail, Phone, MapPin, Linkedin as LinkedInIcon, Github as GithubIcon, Briefcase, 
  Coffee,
  Heart,
  BookOpen
} from "lucide-react";

import { 
  FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail 
} from "react-icons/fi";

import agumiya from "../assets/images/agumiya.png"
import velan from "../assets/images/velan.png"
import rksofttech from "../assets/images/rksofttech.png"
import telzup from "../assets/images/telzup.png"
import garments from "../assets/images/garments.png"

// ---------------- SKILLS ----------------
export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "TypeScript", level: 90, color: "bg-blue-400" },
      { name: "Tailwind CSS", level: 95, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 80, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building scalable server-side applications & APIs",
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-600" },
      { name: "Express.js", level: 85, color: "bg-gray-700" },
      { name: "REST APIs", level: 95, color: "bg-blue-600" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    description: "Managing structured & unstructured data efficiently",
    skills: [
      { name: "MySQL", level: 85, color: "bg-orange-500" },
      { name: "PostgreSQL", level: 80, color: "bg-indigo-500" },
      { name: "MongoDB", level: 75, color: "bg-green-500" },
      { name: "Prisma ORM", level: 80, color: "bg-purple-500" },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    description: "Building seamless cross-platform mobile experiences",
    skills: [
      { name: "React Native", level: 85, color: "bg-blue-500" },
      { name: "Expo", level: 80, color: "bg-indigo-400" },
      { name: "Flutter", level: 70, color: "bg-cyan-500" },
      { name: "Android Studio", level: 65, color: "bg-green-600" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    description: "Automating deployments, monitoring & scaling systems",
    skills: [
      { name: "Docker", level: 80, color: "bg-blue-400" },
      { name: "Git & GitHub", level: 95, color: "bg-gray-800" },
      { name: "CI/CD (GitHub Actions)", level: 85, color: "bg-green-500" },
      { name: "NGINX", level: 70, color: "bg-teal-500" },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    description: "Collaboration, problem-solving & communication",
    skills: [
      { name: "Problem Solving", level: 90, color: "bg-yellow-500" },
      { name: "Team Collaboration", level: 85, color: "bg-blue-600" },
      { name: "Agile & Scrum", level: 80, color: "bg-orange-400" },
      { name: "Leadership", level: 70, color: "bg-purple-600" },
      { name: "Communication", level: 95, color: "bg-pink-500" },
    ],
  },
];


// ---------------- TECH STACK ----------------
export const TECH_STACK = [
  "Webpack",
  "Vite",
  "ESLint",
  "Prettier",
];


// ---------------- STATS ----------------
export const STATS = [
  { number: "5+", label: "Projects Completed" },
  { number: "2+", label: "Happy Clients" },
  { number: "1+", label: "Years Experience" },
  { number: "5+", label: "Tech Stacks Mastered" },
];


// ---------------- PROJECTS ----------------
export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with product catalog, cart, payments, and admin dashboard.",
    image: agumiya,
    tags: ["React", "Tailwind", "Node.js", "Postgresql"],
    liveUrl: "https://agumiyacollections.com",
    githubUrl: "https://github.com/ImAlagar/agumiya-collections-frontend.git",
    featured: true,
    category: "Full Stack",
    clientName: "Agumiya Collections",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal portfolio showcasing skills, projects, and blogs with smooth animations.",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["React", "Framer Motion", "Tailwind"],
    liveUrl: "https://alagarportfolio.netlify.app/",
    githubUrl: "https://github.com/ImAlagar/portfolio.git",
    featured: false,
    category: "Frontend",
    clientName: "Personal",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with product catalog, cart, payments, and admin dashboard.",
    image: velan,
    tags: ["React", "Redux", "Tailwind", "Node.js", "Postgresql"],
    liveUrl: "https://shrivelanorganicfoods.com/",
    githubUrl: "https://github.com/ImAlagar/shri-velan-frontend.git",
    featured: true,
    category: "Full Stack",
    clientName: "Shri Velan Organic Food",
  },
  {
    id: 4,
    title: "Kaveri Matrimony Application",
    description: "Real-time matrimonial mobile app built with Flutter. Features: live chat (Socket.io), real-time updates, push notifications, user profiles, and Node.js backend.",
    image: rksofttech,
    tags: ["Flutter", "Socket.io", "Node.js"],
    liveUrl: "https://www.kaverykannadadevangakulamatrimony.com/",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kavery.matrimony.app",
    githubUrl: null,        // set to repo URL if you want to share source
    featured: false,
    category: "Mobile",
    clientName: "RK Soft Tech",
  },
  {
    id: 5,
    title: "E Commerce Platform",
    description: "A full-stack e-commerce platform for a T-shirts business with product listings, size & color variants, shopping cart, secure checkout, and admin product management.",
    image: garments,
    tags: ["Node.js", "Prisma", "PostgreSQL", "React", "Tailwind", "Framer motion"],
    liveUrl: "https://hangergarment.netlify.app/",
    githubUrl: "https://github.com/ImAlagar/hanger-garments.git",
    featured: false,
    category: "Full Stack",
    clientName: "Hanger Garments",
  },
  {
    id: 6,
    title: "Telzup Mobile Application",
    description: "CRM-focused telecalling app to track call recordings, call logs, leads, and real-time agent activities.",
    image: telzup,
    tags: ["Kotlin", "Django", "postgresql", "React", "Tailwind Css"],
    liveUrl: "https://tzfe.etplhub.com/",
    githubUrl: null,
    featured: true,
    category: "Mobile",
    clientName: "Emayam Technology",
  },
  {
    id: 7,
    title: "Analytics Dashboard",
    description: "Interactive dashboard for monitoring KPIs, charts, and reports.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["python", "Django", "Web Socket","React", "D3.js", "Tailwind"],
    liveUrl: "https://focult16.etplhub.com",
    githubUrl: false,
    featured: false,
    category: "Full Stack",
    clientName: "Emayam Technology",
  },

];


// ---------------- JOURNEY ----------------
export const JOURNEY_STEPS = [
  {
    year: "2023",
    title: "Started Coding Journey",
    company: "WHY TAP Institute",
    description: "Kickstarted coding career. Learned programming fundamentals and explored different technologies.",
    icon: Code2,
    color: "bg-blue-500",
    duration: "Early 2023",
    type: "Training",
    location: "Chennai, India",
    skills: ["Programming Basics", "Problem Solving"],
    achievements: [],
  },
  {
    year: "2023",
    title: "Full Stack Internship",
    company: "WHY TAP Institute",
    description: "Joined as a Full Stack Developer intern, but mainly focused on Flutter. Spent 6 months learning and building apps with Flutter.",
    icon: Smartphone,
    color: "bg-green-500",
    duration: "6 Months (2023)",
    type: "Internship",
    location: "Chennai, India",
    skills: ["Flutter", "Dart", "Mobile Development"],
    achievements: [],
  },
  {
    year: "2023",
    title: "Flutter Developer",
    company: "Sanishsfotech",
    description: "Worked 3–4 months as a Flutter developer, building mobile apps and gaining hands-on experience.",
    icon: Smartphone,
    color: "bg-purple-500",
    duration: "3–4 Months (2023)",
    type: "Full-time",
    location: "Chennai, India",
    skills: ["Flutter", "Firebase", "REST APIs"],
    achievements: [],
  },
  {
    year: "2024 – 2025",
    title: "Backend & Mobile Developer",
    company: "Emayam Technology",
    description: "Worked 1+ years on multiple projects: 2 mobile apps and 2 software applications. Major contributions include Focult Employee Monitoring Software and Call Recording Application.",
    icon: Server,
    color: "bg-red-500",
    duration: "1+ Years (2024 – 2025)",
    type: "Full-time",
    location: "Chennai, India",
    skills: ["Node.js", "Express.js", "Flutter", "PostgreSQL", "React"],
    achievements: [
      "Built Focult Employee Monitoring Software from scratch",
      "Developed Call Recording App",
      "Team Lead for 2 successful projects",
      "Awarded Employee of the Month (2x)"
    ],
  },
  {
    year: "2025",
    title: "Looking for Next Opportunity",
    company: "Full Stack Developer Role",
    description: "Currently seeking a challenging role as a Full Stack Developer to apply expertise in frontend, backend, and mobile app development.",
    icon: Briefcase,
    color: "bg-yellow-500",
    duration: "Present",
    type: "Open to Work",
    location: "Remote / Onsite",
    skills: ["React", "Node.js", "Flutter", "Full Stack Development"],
    achievements: [],
  },
];

export const PASSIONS = [
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "I enjoy breaking down complex challenges into simple solutions and finding the most efficient way forward."
  },
  {
    icon: Heart,
    title: "User Experience",
    description: "Building products that are intuitive, accessible, and delightful to use is always at the core of my work."
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "I believe in constant growth, exploring new technologies, and upgrading my skills every day."
  }
];

// ---------------- SOCIAL LINKS ----------------
export const SOCIAL_LINKS = [
  {
    name: "Github",
    icon: FiGithub,
    url: "https://github.com/ImAlagar",
    color: "hover:text-gray-400",
    bgcolor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/alagar-ramar/",
    color: "hover:text-blue-400",
    bgcolor: "hover:bg-blue-800",
  },

  {
    name: "Instagram",
    icon: FiInstagram,
    url: "https://www.instagram.com/im_alagar4563/",
    color: "hover:text-pink-400",
    bgcolor: "hover:bg-pink-800",
  },
  {
    name: "Email",
    icon: FiMail,
    url: "mailto:alagar17302@gmail.com",
    color: "hover:text-red-400",
    bgcolor: "hover:bg-red-800",
  },
];


// ---------------- CONTACT INFO ----------------
export const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "alagar17302@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9150118554", // replace with your real number
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, India",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com",
  },
];


// src/constants/data.js

import heroImg from "../assets/images/alagar.png";
import { ImOpt } from "react-icons/im";


export const IMAGES = {
  heroImg,

};

