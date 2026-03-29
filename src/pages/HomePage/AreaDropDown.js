import React from 'react';
import SearchableDropDown from '../../components/SearchableDropDown';
import { maps } from '../../constants/maps';

const AreaDropDown = ({ selectedArea, onAreaChange }) => {
  return (
    <SearchableDropDown
      label="Area"
      value={selectedArea}
      onChange={onAreaChange}
      options={Object.keys(maps)}
      iconName="landscape"
      iconBgClass="bg-tertiary-container"
      iconColorClass="text-tertiary"
      containerColor="bg-surface-container-lowest"
    />
  );
};

export default AreaDropDown;
