import React from 'react';
import SearchableDropDown from '../../components/SearchableDropDown';
import { bossDifficulties } from '../../constants/bossDifficulties';

const DifficultyDropDown = ({ selectedBoss, selectedDifficulty, onDifficultyChange }) => {
  const difficulties = bossDifficulties[selectedBoss] || []

  return (
    <SearchableDropDown
      label="Difficulty"
      value={selectedDifficulty}
      onChange={onDifficultyChange}
      options={difficulties}
    />
  );
};

export default DifficultyDropDown;