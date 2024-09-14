import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';

function FirstCard({ color, onClick }) {
  return (
    <Card sx={{ minWidth: 10, maxHeight: 100, backgroundColor: color }}>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <br />
          <br />
          <br />
          <br />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

FirstCard.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

FirstCard.defaultProps = {
  color: '#FFF5E1',
};

export default FirstCard;
