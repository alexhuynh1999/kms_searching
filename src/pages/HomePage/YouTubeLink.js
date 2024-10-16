import React from 'react';
import { Typography, Link } from '@mui/material';
import { classes } from '../../constants/classes';
import { maps } from '../../constants/maps';
import { difficulties } from '../../constants/difficulties'
import { bosses } from '../../constants/bosses'
import urlFactory from '../../helpers/urlFactory';

const YouTubeLink = ({ selectedValues }) => {
  const { class: selectedClass, area: selectedArea, map: selectedMap, lazy: lazy, boss: boss, difficulty: difficulty } = selectedValues;

  const classTranslation = classes[selectedClass] || '';
  const mapTranslation = selectedMap ? maps[selectedArea][selectedMap] : '';
  const areaTranslation = selectedArea ? maps[selectedArea].name : ''; // Assuming there's a name field for the area
  const isClassSelected = Boolean(selectedClass);
  const difficulty_translation = difficulties[difficulty]
  const boss_transl = bosses[boss]

  const getLinkText = () => {
    if (boss) {
      return `${selectedClass} ${difficulty} ${boss}`
    }
    if (selectedMap) {
      return `${selectedClass} at ${selectedMap}`;
    }
    if (selectedArea) {
      return `${selectedClass} at ${selectedArea}`;
    }
    return `${selectedClass} Training`;
  };

  const getURL = () => {
    if (boss) {
      return urlFactory(boss, classTranslation, difficulty_translation, boss_transl);
    }
    return urlFactory(boss, classTranslation, mapTranslation, areaTranslation, lazy)
  }

  return (
    <>
      {isClassSelected && (
        <>
          <Typography variant="h6" sx={{ mt: 2 }}>YouTube Link:</Typography>
          <Link
            href={getURL()}
            target="_blank"
            rel="noopener"
          >
            {getLinkText()}
          </Link>
        </>
      )}
    </>
  );
};

export default YouTubeLink;
