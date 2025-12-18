import { motion } from 'framer-motion';
import { useTyping } from '../hooks/useTyping';

// const MicrosoftLogo = () => (
//   <svg className="w-4 h-4 inline-block mr-2 translate-y-0.5" viewBox="0 0 23 23">
//     <path fill="#f35325" d="M1 1h10v10H1z"/><path fill="#81bc06" d="M12 1h10v10H12z"/><path fill="#05a6f0" d="M1 12h10v10H1z"/><path fill="#ffba08" d="M12 12h10v10H12z"/>
//   </svg>
// );

const Hero = () => {
  const typedText = useTyping("Hi, Anjesh here...!", 180);

  return (
    <section className="mb-40 min-h-[70vh] flex flex-col justify-center">
      <div className="font-mono text-accent mb-4 text-6xl min-h-[1.5em]">
        {typedText}<span className="animate-pulse">|</span>
      </div>
      <motion.h1 
        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-6xl font-black tracking-tight mb-6"
      >
        I code <span className="text-gray-500">sometimes.</span>
      </motion.h1>
      {/* <motion.h2 
        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
        className="flex items-center text-xl md:text-2xl font-bold text-gray-500 mb-8"
      >
        Upcoming SWE Intern @ <span className="ml-2 inline-flex items-center dark:text-white dark:bg-white/5 px-3 py-1 rounded-lg border border-white/10 shrink-0"><MicrosoftLogo /> Microsoft</span>
      </motion.h2> */}

      <p className="max-w-xl text-lg text-gray-400 leading-relaxed mb-10">
        I'm an engineering student passionate about software development. <br/>
        I love the gym, and try to keep learning and growing.
      </p>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
      >
        <a 
          href="#projects" 
          className="inline-block border border-accent text-accent px-8 py-4 rounded font-mono hover:bg-accent/10 transition-all duration-300"
        >
          View Projects
        </a>

        <a 
          href="#about" 
          className="inline-block border border-accent text-accent px-8 py-4 rounded font-mono hover:bg-accent/10 transition-all duration-300"
        >
          About Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;