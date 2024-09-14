import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme, color }) => ({
  backgroundColor: color,
  height: '50px',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function UpperGrid({ correctSequence }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {correctSequence.map((color, index) => (
          <Grid item xs={1.33} key={index}>
            <Item color={color} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

UpperGrid.propTypes = {
  correctSequence: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UpperGrid;
