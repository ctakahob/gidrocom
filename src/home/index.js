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
import Contacts from "@/contacts";
import WaterproofingBlog from "@/waterproofing";

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
      <WaterproofingBlog/>
      <Paper variant={'outlined'} sx={{borderRadius: 4, overflow: 'hidden', mt: 2}}>
        <OurProcess/>
      </Paper>
      {/*<Paper variant={'outlined'} sx={{borderRadius: 4, overflow: 'hidden', mt: 2}}>*/}
      {/*  <Typography textAlign={'center'} variant={'h3'}>*/}
      {/*    Примеры работ*/}
      {/*  </Typography>*/}
      {/*  <SliderBottom/>*/}
      {/*</Paper>*/}
      <Paper variant={'outlined'} sx={{borderRadius: 4, overflow: 'hidden', mt: 2}}>
        <ContactUs/>
      </Paper>
      <Contacts/>
    </Container>
  );
};

export default HomePage;
