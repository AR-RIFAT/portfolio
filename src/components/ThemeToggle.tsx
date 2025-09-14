import React from 'react';
import { useTheme } from './ThemeContext';
import { Sun, Moon } from 'lucide-react';
const ThemeToggle: React.FC = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <button onClick={toggleTheme} className="fixed top-4 right-4 z-50 flex items-center justify-center p-2 bg-white dark:bg-blue-900 rounded-full shadow-lg transition-all duration-300" aria-label="Toggle theme">
      {theme === 'light' ? <Moon className="h-5 w-5 text-blue-800" /> : <Sun className="h-5 w-5 text-yellow-300" />}
    </button>;
};
export default ThemeToggle;