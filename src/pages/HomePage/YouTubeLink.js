import React from 'react';
import { classes } from '../../constants/classes';
import { maps } from '../../constants/maps';
import { difficulties } from '../../constants/difficulties'
import { bosses } from '../../constants/bosses'
import urlFactory from '../../helpers/urlFactory';

const YouTubeLink = ({ selectedValues }) => {
  const { class: selectedClass, area: selectedArea, map: selectedMap, lazy, boss, difficulty } = selectedValues;

  const classTranslation = classes[selectedClass] || '';
  const mapTranslation = selectedMap ? maps[selectedArea].maps[selectedMap] : '';
  const areaTranslation = selectedArea ? maps[selectedArea].kr : '';
  const isClassSelected = Boolean(selectedClass);
  const difficulty_translation = difficulties[difficulty]
  const boss_transl = bosses[boss]?.kr || ''

  const getURL = () => {
    if (boss) {
      return urlFactory(boss, classTranslation, difficulty_translation, boss_transl);
    }
    return urlFactory(boss, classTranslation, mapTranslation, areaTranslation, lazy)
  }

  return (
    <>
      {isClassSelected && (
        <a
          href={getURL()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-6 rounded-full bg-primary text-white dark:bg-gradient-to-br dark:from-[#7fd7fe] dark:to-[#aae5ff] dark:text-[#0c0d1d] font-headline text-xl font-black tracking-widest shadow-[0_20px_40px_rgba(156,70,0,0.3)] dark:shadow-[0_20px_40px_rgba(127,215,254,0.15)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 no-underline"
        >
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>search</span>
          SEARCH YOUTUBE
        </a>
      )}
    </>
  );
};

export default YouTubeLink;
