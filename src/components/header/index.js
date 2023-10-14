// components/Header.js
import React from 'react';
import {AppBar, Button, Toolbar, Typography} from '@mui/material';
import {Business, ContactMail, Home} from '@mui/icons-material';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{justifyContent: 'space-between', '@media (max-width: 600px)': {flexDirection: 'column'}}}>
        <Typography variant="h5" sx={{fontFamily: 'Pixelify Sans', flexGrow: 1}}>
          Гидроком-Юг
        </Typography>
        <Link href="/">
          <Button
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
            startIcon={<Home/>}
          >
            Главная
          </Button>
        </Link>
        <Link href="/contacts">
          <Button
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
            startIcon={<ContactMail/>}
          >
            Контакты
          </Button>
        </Link>
        <Link href="/waterproofing">
          <Button
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
            startIcon={<Business/>}
          >
            о гидроизоляции
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
