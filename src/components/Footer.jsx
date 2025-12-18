import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 text-center">
      <div className="font-mono text-[10px] md:text-xs text-gray-500 tracking-wider">
        <div className="flex flex-col items-center gap-3">
          
          <p className="flex items-center gap-1.5 group">
            <span>Vibe-coded with</span>
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-accent inline-block"
            >
              ❤️
            </motion.span>
            <span>by</span>
            <a 
              href="https://github.com/AnjeshSingh-NITT" 
              target="_blank" 
              rel="noreferrer"
              className="text-white hover:text-accent transition-colors font-bold underline underline-offset-4 decoration-accent/30"
            >
              Anjesh Singh
            </a>
          </p>

          <p className="opacity-40 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em]">
            Inspired by <span className='text-accent'> Gazi Jarin </span>
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;