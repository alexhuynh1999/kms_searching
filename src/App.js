import React from 'react';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="bg-mesh font-body text-on-surface min-h-screen relative overflow-x-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -inset-4 opacity-85 blur-[4px] dark:opacity-0 transition-opacity duration-500"
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/korean_folk_town.png')`,
            backgroundPosition: "center bottom",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 75%",
            backgroundAttachment: "scroll"
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -inset-4 opacity-0 blur-[4px] dark:opacity-85 transition-opacity duration-500"
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/dark_mode_bg.png')`,
            backgroundPosition: "center calc(100% + 350px)",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 125%",
            backgroundAttachment: "scroll"
          }}
          aria-hidden="true"
        />
      </div>

      {/* Cloud Decor Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden transition-colors duration-700">
        <span className="material-symbols-outlined absolute top-8 text-white/50 dark:text-black/20 text-7xl animate-drift-slow" style={{ animationDelay: '0s', fontVariationSettings: "'FILL' 1" }}>cloud</span>
        <span className="material-symbols-outlined absolute top-28 text-white/60 dark:text-black/10 text-8xl animate-drift-float" style={{ animationDelay: '-12s', fontVariationSettings: "'FILL' 1" }}>cloud</span>
        <span className="material-symbols-outlined absolute top-16 text-white/40 dark:text-black/30 text-6xl animate-drift-fast" style={{ animationDelay: '-25s', fontVariationSettings: "'FILL' 1" }}>cloud</span>
        <span className="material-symbols-outlined absolute top-40 text-white/30 dark:text-black/40 text-9xl animate-drift-slow" style={{ animationDelay: '-45s', fontVariationSettings: "'FILL' 1" }}>cloud</span>
        <span className="material-symbols-outlined absolute top-[20%] text-white/50 dark:text-black/20 text-7xl animate-drift-fast" style={{ animationDelay: '-8s', fontVariationSettings: "'FILL' 1" }}>cloud</span>
        <span className="material-symbols-outlined absolute top-[5%] text-white/60 dark:text-black/10 text-8xl animate-drift-float" style={{ animationDelay: '-36s', fontVariationSettings: "'FILL' 1" }}>cloud</span>
      </div>

      <div className="relative z-10 w-full">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
