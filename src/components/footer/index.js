// components/Footer.js
import React from 'react';
import {AppBar, Toolbar, Typography} from '@mui/material';

const footerStyle = {
  position: 'sticky',
  bottom: 0,
  width: '100%',
};

const Footer = () => {
  return (
    <AppBar position="static" sx={footerStyle}>
      <Toolbar>
        <Typography variant="body2" sx={{color: 'white'}}>
          "ООО Гидроком-Юг" все права сохранены (©) 2023 год
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
