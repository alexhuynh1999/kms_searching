import React, { useState } from 'react';
import { Box, Grid, Checkbox, FormControlLabel, Switch } from '@mui/material';
import ClassDropDown from './ClassDropDown';
import AreaDropDown from './AreaDropDown';
import MapDropDown from './MapDropDown';
import DifficultyDropDown from './DifficultyDropDown';
import BossDropDown from './BossDropDown';
import YouTubeLink from './YouTubeLink';
import Banner from '../../components/Banner';

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

  const handleLazyChange = (event) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      lazy: event.target.checked,
    }));
  };

  const handleBossingChange = (event) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      bossing: event.target.checked,
      area: '',
      map: '',
      difficulty: '',
      boss: '',
    }));
  };

  return (
    <Box sx={{ p: 3, paddingTop: 'calc(2rem + 32px)' }}>
      <Banner text="MapleStory KMS Class Lookup" />
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <ClassDropDown
            selectedClass={selectedValues.class}
            onClassChange={(value) => handleValueChange('class', value)}
          />
        </Grid>

        {selectedValues.bossing ? (
          <>
            <Grid item xs={12} sm={6} md={4}>
              <BossDropDown
                selectedBoss={selectedValues.boss}
                onBossChange={(value) => handleValueChange('boss', value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <DifficultyDropDown
                selectedBoss={selectedValues.boss} // Pass selected boss as prop
                selectedDifficulty={selectedValues.difficulty}
                onDifficultyChange={(value) => handleValueChange('difficulty', value)}
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} sm={6} md={4}>
              <AreaDropDown
                selectedArea={selectedValues.area}
                onAreaChange={(value) => handleValueChange('area', value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <MapDropDown
                selectedArea={selectedValues.area}
                selectedMap={selectedValues.map}
                onMapChange={(value) => handleValueChange('map', value)}
              />
            </Grid>
          </>
        )}

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedValues.lazy}
                onChange={handleLazyChange}
                color="primary"
                disabled={selectedValues.bossing}
              />
            }
            label="Lazy Rotation?"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                checked={selectedValues.bossing}
                onChange={handleBossingChange}
                color="primary"
              />
            }
            label="Bossing Mode"
          />
        </Grid>

        {selectedValues.class && (
          <Grid item xs={12}>
            <YouTubeLink selectedValues={selectedValues} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default HomePage;
