import React from 'react';
import {Button, Stack, Typography} from '@mui/material';

const MainTile = ({title, description, buttonText, onClick}) => {
  return (
    <Stack justifyContent={'center'} alignItems={'center'} textAlign="center">
      <Typography variant="h3" component="div" mb={2} fontFamily="Pacifico, cursive">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        {description}
      </Typography>
      {buttonText && onClick && (
        <Button variant="contained" onClick={onClick}>
          {buttonText}
        </Button>
      )}
    </Stack>
  );
};

export default MainTile;
