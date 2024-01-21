import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import ScheduleIcon from '@mui/icons-material/Schedule';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BuildIcon from '@mui/icons-material/Build';

const OurProcess = () => {
  return (
    <Box p={4} bgcolor="primary.main" color="white">
      <Typography variant="h4" mb={2} textAlign={'center'}>
        Наш Процесс
      </Typography>
      <Grid container spacing={4} mt={2}>
        <Grid item xs={12} md={4}>
          <Box textAlign="center" sx={{borderRadius: 4, border: '1px solid grey', height: 1}}>
            <ScheduleIcon fontSize="large"/>
            <Typography variant="h6" mt={1}>
              Запланировать встречу
            </Typography>
            <Typography variant="body1">
              Запишитесь на прием
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box textAlign="center" sx={{borderRadius: 4, border: '1px solid grey', height: 1}}>
            <PeopleAltIcon fontSize="large"/>
            <Typography variant="h6" mt={1}>
              Консультация
            </Typography>
            <Typography variant="body1">
              Один из наших опытных советников проведет вашу бесплатную консультацию
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box textAlign="center" sx={{borderRadius: 4, border: '1px solid grey', height: 1}}>
            <BuildIcon fontSize="large"/>
            <Typography variant="h6" mt={1}>
              Ремонт
            </Typography>
            <Typography variant="body1">
              Наш высококвалифицированный монтажный бригада завершит ваш проект в срок и эффективно
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurProcess;
