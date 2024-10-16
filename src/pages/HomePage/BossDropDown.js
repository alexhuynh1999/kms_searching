import React from 'react';
import SearchableDropDown from '../../components/SearchableDropDown';
import { bosses } from '../../constants/bosses';

const BossDropDown = ({ selectedBoss, onBossChange }) => {
  return (
    <SearchableDropDown
      label="Boss"
      value={selectedBoss}
      onChange={onBossChange}
      options={Object.keys(bosses)}
    />
  );
};

export default BossDropDown;
