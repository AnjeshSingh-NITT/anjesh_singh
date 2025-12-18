import { motion } from 'framer-motion';

const About = () => {
  const techStack = [
    "JavaScript ES6+", "React.js", "Node.js", 
    "TypeScript", "TailwindCSS", "Java"
  ];

  const MicrosoftLogo = () => (
    <svg className="w-4 h-4 inline-block mr-2 translate-y-0.5" viewBox="0 0 23 23">
      <path fill="#f35325" d="M1 1h10v10H1z"/><path fill="#81bc06" d="M12 1h10v10H12z"/><path fill="#05a6f0" d="M1 12h10v10H1z"/><path fill="#ffba08" d="M12 12h10v10H12z"/>
    </svg>
  );

  return (
    <section id="about" className="mb-40">
      <div className="flex items-center gap-4 mb-12">
        <h3 className="text-3xl font-bold italic">/ about me</h3>
        <div className="h-px grow bg-gray-800"></div>
      </div>
      
      <div className="grid md:grid-cols-12 gap-12 text-gray-400 text-lg leading-relaxed items-start">
        
        {/* Left Side: Text Content (Column span 7) */}
        <div className="md:col-span-7">
            <p className="mb-6">
                I’m a BTech student at NIT-T <span className='text-accent text-sm'>(EEE, 2023-27)</span> interested in software engineering, figuring things out by 
                learning fundamentals and building projects alongside. 
                I have tried my hand at <span className='text-white'>competitive programming</span>, enjoy <span className='text-white'>DSA and problem-solving</span> and am 
                currently exploring the vast world of <span className='text-white'>full stack development</span>.
            </p>
            
            <p className="mb-6">
                I like understanding how and why stuff works rather than 
                just making it work. I’m competitive by nature, and often strive to be the best and 
                provide the most value. 
            </p>

            <p className="mb-6 font-mono text-sm uppercase tracking-widest text-accent/80">
                // My Competitive Programming Stats:
            </p>
            <div className="grid grid-cols-2 gap-2 font-mono text-xs mb-8">
                <div className="flex items-center gap-2">
                    <a 
                        href="https://codeforces.com/profile/singhanjesh2005" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center gap-2 group hover:text-white transition-colors"
                    >
                    <span className="text-accent">▹</span> 
                    Codeforces: 
                    <span className="ml-1">
                        Specialist (Rating: 1536)
                    </span>
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <a 
                        href="https://codeforces.com/profile/singhanjesh2005" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center gap-2 group hover:text-white transition-colors"
                    >
                    <span className="text-accent">▹</span> 
                    Codechef: <span className="ml-1">3⭐ (Rating: 1630)</span>
                    </a>
                </div>
            </div>

            <p className="mb-6 font-mono text-sm uppercase tracking-widest text-accent/80">
                // Tech I'm familiar with:
            </p>
            
            <div className="grid grid-cols-2 gap-2 font-mono text-xs mb-8">
                {techStack.map((tech) => (
                <div key={tech} className="flex items-center gap-2">
                    <span className="text-accent">▹</span> {tech}
                </div>
                ))}
            </div>

            <p>
                Outside of code, I’m sporty, and consistently hit the gym. I like to call it a day by 
                demolishing myself at the gym after long hours of mental exertion. 
            </p>
            </div>
        {/* Right Side: Photo (Column span 5) */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative group w-64 h-64 md:w-80 md:h-80">
            {/* The "Offset" Background Frame */}
            <div className="absolute inset-0 border-2 border-accent rounded-xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            
            {/* The Image Container */}
            <div className="relative z-10 w-full h-full overflow-hidden rounded-xl bg-gray-800 border border-white/10 shadow-2xl">
                <img 
                    src="/IMG_onThePeak.jpeg" 
                    alt="Anjesh Singh"
                    className="w-full h-full object-cover transition-all duration-500 scale-110 hover:scale-100"
                />
                {/* Subtle Overlay - optional: remove the bg-accent/10 if you want 100% true color */}
                <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            {/* Quote Block */}
            <br />
            <div className="w-full md:max-w-[320px] ">
                <div className="relative inline-block ">
                    <p className="text-gray-400 italic text-sm md:text-sm leading-relaxed font-mono">
                        "A <span className="text-white">jack of all trades</span> is a master of none, but oftentimes <span className="text-accent font-semibold">better</span> than a master of one."
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience / Next Step Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 p-8 rounded-2xl border border-accent/20 bg-accent/5 backdrop-blur-sm relative overflow-hidden group"
      >
        <div className="absolute right-0 top-0 w-32 h-32 bg-accent/5 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <p className="font-mono text-accent text-sm mb-3 tracking-[0.2em] uppercase">What's Next?</p>
        <div className="flex flex-col md:flex-row md:items-center gap-4 text-xl md:text-2xl font-bold">
            <span className="text-gray-400">Heading to</span>
            <span className="inline-flex items-center gap-3 text-white bg-white/5 px-4 py-2 rounded-lg border border-white/10 group-hover:border-accent/50 transition-colors">
              <MicrosoftLogo /> Microsoft
            </span>
            <span className="text-gray-400 font-medium">for a SWE Summer Internship in 2026.</span>
        </div>
      </motion.div>
    </section>
  );
};

export default About;