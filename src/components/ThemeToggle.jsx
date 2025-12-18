import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ isDark, setIsDark }) => {
  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      className="fixed top-8 right-8 z-50 p-3 rounded-full bg-accent/10 border border-accent/20 text-accent hover:scale-110 transition-transform active:scale-95 shadow-lg backdrop-blur-sm"
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;