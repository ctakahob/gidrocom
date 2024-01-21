import React from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const ContactUs = () => {
  const phoneNumber = '+79281834505';
  const emailAddress = 'dgerasimov161@yandex.ru';

  const handleCallButtonClick = () => {
    console.log('Кнопка звонка была нажата');
  };

  const handleEmailButtonClick = () => {
    console.log('Кнопка электронной почты была нажата');
  };

  return (
    <Box p={4} bgcolor="secondary.main" color="white">
      <Typography variant="h4" mb={2} textAlign={'center'}>
        Еще сомневайтесь ? Свяжитесь с нами
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<CallIcon/>}
            fullWidth
            sx={{borderRadius: 4}}
            size="large"
            onClick={handleCallButtonClick}
            href={`tel:${phoneNumber}`}
          >
            Позвоните нам
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{borderRadius: 4}}
            startIcon={<EmailIcon/>}
            fullWidth
            onClick={handleEmailButtonClick}
            href={`mailto:${emailAddress}`}
          >
            Напишите нам
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
