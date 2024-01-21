import React, {useState} from 'react';
import {
  AppBar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery
} from '@mui/material';
import {Business, ContactMail, Home, Menu} from '@mui/icons-material';
import Link from 'next/link';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMdDown = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    {text: 'Главная', icon: <Home/>, link: '/'},
    {text: 'Контакты', icon: <ContactMail/>, link: '/contacts'},
    {text: 'О гидроизоляции', icon: <Business/>, link: '/waterproofing'},
  ];

  return (
    <AppBar>
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <Typography variant="subtitle1" sx={{flexGrow: 1}}>
          ИП Герасимов И.Н
        </Typography>
        {isMdDown ? (
          <Button
            onClick={toggleDrawer(true)}
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
            startIcon={<Menu/>}
          >
            Меню
          </Button>
        ) : (
          <>
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
                О гидроизоляции
              </Button>
            </Link>
          </>
        )}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            {menuItems.map((item, index) => (
              <Link key={index} href={item.link}>
                <ListItem button onClick={toggleDrawer(false)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text}/>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
