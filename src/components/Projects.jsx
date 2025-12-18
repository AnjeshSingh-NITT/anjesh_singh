import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    title: "ezSplit",
    desc: "AI-powered expense tracking and splitting app. Built for modern group finances.",
    tech: ["React", "AI", "Node.js"],
    link: "https://ez-split-f7pf.vercel.app/",
    repo: "https://github.com/AnjeshSingh-NITT/ezSplit",
    featured: true
  },
  {
    title: "BlogHive",
    desc: "Modern blog platform focusing on clean architecture and scalable patterns.",
    tech: ["Appwrite", "React", "Tailwind"],
    link: "https://bloghive-nine.vercel.app/",
    repo: "https://github.com/AnjeshSingh-NITT/bloghive",
    featured: true
  },
  {
    title: "ThinkBin",
    desc: "MERN stack note-taking app designed for rapid thought organization.",
    tech: ["MongoDB", "Express", "React"],
    repo: "https://github.com/AnjeshSingh-NITT/thinkbin",
    featured: false
  },
  {
    title: "Redux Todo",
    desc: "Clean, modern Todo Application built with React and Redux Toolkit with glassmorphism.",
    tech: ["Redux", "Tailwind", "CRUD"],
    repo: "https://github.com/AnjeshSingh-NITT/react-redux-todo-app",
    featured: false
  }
];

const Projects = () => (
  <section id="projects" className="mb-40">
    <div className="flex items-center gap-4 mb-16">
      <h3 className="text-3xl font-bold italic">/ my projects</h3>
      <div className="h-px grow bg-gray-800"></div>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {PROJECTS.map((p, i) => (
        <ProjectCard key={i} project={p} />
      ))}
    </div>
  </section>
);

export default Projects;