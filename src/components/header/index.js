import React, {useState} from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery
} from '@mui/material';

const Header = () => {
  return (
    <AppBar>
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <Typography variant="subtitle1" sx={{flexGrow: 1}}>
          ИП Герасимов И.Н
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
