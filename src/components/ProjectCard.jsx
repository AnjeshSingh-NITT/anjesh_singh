import { motion } from 'framer-motion';
import { ExternalLink, Terminal, Cpu, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const { title, desc, tech, link, repo, featured } = project;
  
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`group p-8 rounded-2xl border transition-all duration-500 relative overflow-hidden ${
        featured 
        ? 'md:col-span-2 bg-linear-to-br from-accent/10 via-transparent to-transparent border-accent/20' 
        : 'bg-card border-white/5 hover:border-accent/30'
      }`}
    >
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="p-3 bg-accent/10 rounded-lg text-accent">
          {featured ? <Cpu size={32} /> : <Terminal size={24} />}
        </div>
        <div className="flex gap-4 text-gray-400 group-hover:text-accent transition-all">
          <a href={repo} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform"><Github size={22} /></a>
          {link && <a href={link} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform"><ExternalLink size={22} /></a>}
        </div>
      </div>

      <div className="relative z-10">
        <h4 className={`${featured ? 'text-3xl' : 'text-2xl'} font-bold mb-3 group-hover:text-accent transition-colors`}>{title}</h4>
        <p className={`text-gray-400 mb-6 leading-relaxed ${featured ? 'max-w-2xl text-lg' : 'max-w-full text-sm'}`}>{desc}</p>
        <div className="flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-widest text-gray-500">
          {tech.map(t => <span key={t} className="px-3 py-1 bg-white/5 rounded-md border border-white/5 group-hover:border-accent/20 transition-colors">{t}</span>)}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;