import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme, className = "" }) {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative p-2.5 rounded-xl transition-all duration-200 
        bg-slate-100 hover:bg-slate-200 text-slate-700 
        dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-slate-200 
        border border-slate-200 dark:border-slate-700/70 
        focus:outline-none focus:ring-2 focus:ring-brand-500/50 ${className}`}
      aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
      title={isDark ? "Modo Claro" : "Modo Escuro"}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          className={`w-5 h-5 transition-transform duration-300 ${
            isDark ? 'scale-0 rotate-90 opacity-0 absolute' : 'scale-100 rotate-0 opacity-100 text-amber-500'
          }`}
        />
        <Moon
          className={`w-5 h-5 transition-transform duration-300 ${
            isDark ? 'scale-100 rotate-0 opacity-100 text-brand-400' : 'scale-0 -rotate-90 opacity-0 absolute'
          }`}
        />
      </div>
    </button>
  );
}
