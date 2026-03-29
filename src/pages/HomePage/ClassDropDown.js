import React from 'react';
import SearchableDropDown from '../../components/SearchableDropDown';
import { classes } from '../../constants/classes';

const ClassDropDown = ({ selectedClass, onClassChange }) => {
  return (
    <SearchableDropDown
      label="Class Selection"
      value={selectedClass}
      onChange={onClassChange}
      options={Object.keys(classes)}
      iconName="swords"
      iconBgClass="bg-secondary-container"
      iconColorClass="text-secondary"
      containerColor="bg-surface-container-lowest"
    />
  );
};

export default ClassDropDown;
