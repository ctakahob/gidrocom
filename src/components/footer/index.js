// components/Footer.js
import React from 'react';
import {AppBar, Toolbar, Typography} from '@mui/material';


const Footer = () => {
  return (
    <AppBar position="static" sx={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      zIndex: 5,
    }}>
      <Toolbar>
        <Typography variant="body2" sx={{color: 'white'}}>
          "ИП Герасимов И.Н" все права сохранены (©) 2023 год
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
