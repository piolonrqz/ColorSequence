import React from 'react';
import Grid from '@mui/material/Grid';
import FirstCard from './FirstCard';

const OuterGrid = ({ shuffledColors, onCardClick, reset, revealedColors }) => {
  return (
    <Grid container spacing={2}>
      {shuffledColors.map((color, index) => (
        <Grid item xs={4} key={index}>
          <FirstCard 
            color={revealedColors[index]} // Use the revealed color
            onClick={() => onCardClick(color, index)} 
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default OuterGrid;
