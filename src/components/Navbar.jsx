import { Github, Mail } from 'lucide-react';

const BRAND_ICONS = {
  linkedin: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  x: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
};

const Navbar = () => {
  return (
    <>
      {/* Top Logo */}
        <a 
        href="#" 
        onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="fixed top-8 left-8 z-50 font-mono font-bold text-md tracking-tighter 
        text-accent select-none hover:opacity-70 transition-opacity cursor-pointer"
        >
        Anjesh Singh
        </a>

      {/* Side Socials Bar */}
      <nav className="fixed bottom-0 left-10 hidden lg:flex flex-col items-center gap-6 z-40">
        <div className="flex flex-col gap-6 mb-4">
          <a href="https://github.com/AnjeshSingh-NITT" target="_blank" className="text-gray-500 hover:text-accent hover:-translate-y-1 transition-all">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/anjeshsingh-nitt/" className="text-gray-500 hover:text-accent hover:-translate-y-1 transition-all">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d={BRAND_ICONS.linkedin} /></svg>
          </a>
          <a href="https://x.com/void_vibes2005" className="text-gray-500 hover:text-accent hover:-translate-y-1 transition-all">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d={BRAND_ICONS.x} /></svg>
          </a>
          <a href="mailto:singhanjesh2005@gmail.com" className="text-gray-500 hover:text-accent hover:-translate-y-1 transition-all">
            <Mail size={20} />
          </a>
        </div>
        <div className="h-24 w-px bg-gray-700"></div>
      </nav>
    </>
  );
};

export default Navbar;