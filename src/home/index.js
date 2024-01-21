import React from 'react';
import {Container, Paper} from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'swiper/css';
import {useTheme} from '@mui/material/styles';
import Slider from "@/home/slider";
import HydroIsolationGrid from "@/home/tableWithIcons";
import OurProcess from "@/home/ourProcess";
import ContactUs from "@/home/callUs";
import MainDescription from "@/home/mainDescription";

const HomePage = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="xl"
      sx={{
        overflowY: 'hidden',
        pt: 10,
        pb: 10
      }}
    >
      <Paper variant={'outlined'} sx={{borderRadius: 4, overflow: 'hidden'}}>
        <Slider/>
      </Paper>
      <Paper variant={'outlined'} sx={{borderRadius: 4, overflow: 'hidden', mt: 2}}>
        <MainDescription/>
      </Paper>
      <HydroIsolationGrid/>
      <Paper variant={'outlined'} sx={{borderRadius: 4, overflow: 'hidden', mt: 2}}>
        <OurProcess/>
      </Paper>
      <Paper variant={'outlined'} sx={{borderRadius: 4, overflow: 'hidden', mt: 2}}>
        <ContactUs/>
      </Paper>
    </Container>
  );
};

export default HomePage;
