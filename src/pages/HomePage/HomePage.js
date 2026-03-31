import React, { useState } from 'react';
import ClassDropDown from './ClassDropDown';
import AreaDropDown from './AreaDropDown';
import MapDropDown from './MapDropDown';
import DifficultyDropDown from './DifficultyDropDown';
import BossDropDown from './BossDropDown';
import YouTubeLink from './YouTubeLink';
import TopAppBar from '../../components/Layout/TopAppBar';

const HomePage = () => {
  const [selectedValues, setSelectedValues] = useState({
    class: '',
    area: '',
    map: '',
    difficulty: '',
    boss: '',
    lazy: false,
    bossing: false,
  });

  const handleValueChange = (key, value) => {
    setSelectedValues((prevValues) => {
      const newValues = {
        ...prevValues,
        [key]: value,
        ...(key === 'area' ? { map: '' } : {}),
        ...(key === 'boss' ? { difficulty: '' } : {}),
      };
      return newValues;
    });
  };

  const setBossingMode = (isBossing) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      bossing: isBossing,
      area: '',
      map: '',
      difficulty: '',
      boss: '',
    }));
  };

  const toggleLazy = () => {
    setSelectedValues(prev => ({ ...prev, lazy: !prev.lazy }));
  };

  return (
    <>
      <TopAppBar />
      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-8 pb-12">
        <header className="space-y-2">
          <h1 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface dark:text-[#e5e3fb]">
            {selectedValues.bossing ? 'Bossing Search' : 'Training Search'}
          </h1>
          <p className="text-on-surface-variant dark:text-[#a5a3d0] font-medium">
            Customize your {selectedValues.bossing ? 'bossing' : 'training'} parameters below.
          </p>
        </header>

        {/* Toggle Switch */}
        <div className="bg-surface-container-low dark:bg-[#1a1b3b] p-2 rounded-full flex gap-2 shadow-sm">
          <button
            onClick={() => setBossingMode(false)}
            className={`flex-1 py-3 px-6 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 ${!selectedValues.bossing
              ? 'bg-primary text-white dark:bg-[#7fd7fe] dark:text-[#0c0d1d] shadow-lg active:scale-95'
              : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-container dark:bg-[#252650] dark:text-[#a5a3d0] dark:hover:bg-[#323366]'
              }`}
          >
            <span className="material-symbols-outlined text-sm">fitness_center</span>
            Training
          </button>
          <button
            onClick={() => setBossingMode(true)}
            className={`flex-1 py-3 px-6 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 ${selectedValues.bossing
              ? 'bg-primary text-white dark:bg-[#7fd7fe] dark:text-[#0c0d1d] shadow-lg active:scale-95'
              : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-container dark:bg-[#252650] dark:text-[#a5a3d0] dark:hover:bg-[#323366]'
              }`}
          >
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>swords</span>
            Bossing
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <ClassDropDown
            selectedClass={selectedValues.class}
            onClassChange={(value) => handleValueChange('class', value)}
          />

          {selectedValues.bossing ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BossDropDown
                selectedBoss={selectedValues.boss}
                onBossChange={(value) => handleValueChange('boss', value)}
              />
              <DifficultyDropDown
                selectedBoss={selectedValues.boss}
                selectedDifficulty={selectedValues.difficulty}
                onDifficultyChange={(value) => handleValueChange('difficulty', value)}
              />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AreaDropDown
                  selectedArea={selectedValues.area}
                  onAreaChange={(value) => handleValueChange('area', value)}
                />
                <MapDropDown
                  selectedArea={selectedValues.area}
                  selectedMap={selectedValues.map}
                  onMapChange={(value) => handleValueChange('map', value)}
                />
              </div>
              <button
                onClick={toggleLazy}
                disabled={selectedValues.bossing}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors border-2 ${selectedValues.lazy
                  ? 'bg-primary border-primary text-white shadow-md dark:bg-[#7fd7fe] dark:border-[#7fd7fe] dark:text-[#0c0d1d]'
                  : 'bg-surface-container-low border-transparent text-on-surface-variant hover:bg-surface-container dark:bg-[#1a1b3b] dark:text-[#a5a3d0] dark:hover:bg-[#252650]'
                  }`}
              >
                <span className="material-symbols-outlined">{selectedValues.lazy ? 'check_box' : 'check_box_outline_blank'}</span>
                Lazy Rotation (뇌빼기)
              </button>
            </>
          )}

          {(selectedValues.bossing ? (selectedValues.class && selectedValues.boss) : selectedValues.class) && (
            <div className="pt-4 pb-12">
              <YouTubeLink selectedValues={selectedValues} />
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default HomePage;
