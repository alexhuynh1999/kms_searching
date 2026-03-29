import React, { useState, useEffect } from 'react';

const TopAppBar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#80D8FF]/80 dark:bg-[#1a1a1a]/80 backdrop-blur-md shadow-[0_20px_40px_rgba(78,41,5,0.06)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-colors duration-300">
      <div className="flex justify-between items-center px-6 py-4 w-full">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#FF914B]" style={{ fontVariationSettings: "'FILL' 1" }}>park</span>
          <span className="font-headline font-bold tracking-tight text-2xl italic text-[#FF914B]">KMS YouTube Searcher</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-full text-[#4e2905]/60 hover:scale-105 active:scale-95 dark:text-white/60 transition-transform duration-200"
            aria-label="Toggle Dark Mode"
          >
            <span
              className={`material-symbols-outlined absolute transition-all duration-500 transform ${isDark ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              light_mode
            </span>
            <span
              className={`material-symbols-outlined absolute transition-all duration-500 transform ${isDark ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              dark_mode
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopAppBar;
