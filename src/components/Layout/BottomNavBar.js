import React from 'react';

const BottomNavBar = () => {
  return (
    <nav className="fixed bottom-0 w-full z-50 bg-[#fff8f5]/90 dark:bg-[#1a1a1a]/90 backdrop-blur-lg shadow-[0_-10px_30px_rgba(78,41,5,0.08)] rounded-t-[3rem] pb-safe">
      <div className="flex justify-around items-end px-4 h-24 w-full">
        <button className="flex flex-col items-center justify-center text-[#4e2905]/50 p-4 hover:text-[#9c4600] transition-colors">
          <span className="material-symbols-outlined">map</span>
        </button>
        <button className="flex flex-col items-center justify-center text-[#4e2905]/50 p-4 hover:text-[#9c4600] transition-colors">
          <span className="material-symbols-outlined">swords</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-primary text-white rounded-full p-4 shadow-lg transform -translate-y-2 active:scale-90 transition-all duration-300">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>search</span>
        </button>
        <button className="flex flex-col items-center justify-center text-[#4e2905]/50 p-4 hover:text-[#9c4600] transition-colors">
          <span className="material-symbols-outlined">person</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNavBar;
