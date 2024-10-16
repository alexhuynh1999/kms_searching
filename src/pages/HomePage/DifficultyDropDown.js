import React from 'react';
import SearchableDropDown from '../../components/SearchableDropDown';
import { difficulties } from '../../constants/difficulty';

const DifficultyDropDown = ({ selectedDifficulty, onDifficultyChange }) => {
  return (
    <SearchableDropDown
      label="Difficulty"
      value={selectedDifficulty}
      onChange={onDifficultyChange}
      options={Object.keys(difficulties)}
    />
  );
};

export default DifficultyDropDown;
