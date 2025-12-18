import { useState, useEffect } from 'react';
import Home from './pages/Home';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      <Home />
    </div>
  );
}

export default App;