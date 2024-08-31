import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';

export default function FirstCard({ color, onClick }) {

  return (
    <Card sx={{ minWidth: 10, maxHeight: 100, backgroundColor: color }}>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}