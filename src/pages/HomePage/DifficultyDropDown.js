import React from 'react';
import SearchableDropDown from '../../components/SearchableDropDown';
import { bosses } from '../../constants/bosses';

const DifficultyDropDown = ({ selectedBoss, selectedDifficulty, onDifficultyChange }) => {
  const difficulties = bosses[selectedBoss]?.difficulties || []

  return (
    <SearchableDropDown
      label="Difficulty"
      value={selectedDifficulty}
      onChange={onDifficultyChange}
      options={difficulties}
      iconName="warning"
      iconBgClass="bg-surface-container-high"
      iconColorClass="text-on-surface-variant"
      containerColor="bg-surface-container-lowest"
    />
  );
};

export default DifficultyDropDown;