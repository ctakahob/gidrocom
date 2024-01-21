import React from 'react';
import {Grid, Paper, Typography} from '@mui/material';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LeakAddIcon from '@mui/icons-material/LeakAdd';
import PoolIcon from '@mui/icons-material/Pool';
import WavesIcon from '@mui/icons-material/Waves';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

const iconData = [
  {icon: <BeachAccessIcon/>, description: 'Надежно защитим от влаги', color: '#64b5f6'},
  {icon: <LeakAddIcon/>, description: 'Предотвращение протечек и утечек', color: '#81c784'},
  {icon: <PoolIcon/>, description: 'Эффективная гидроизоляция плоских поверхностей', color: '#ffb74d'},
  {icon: <WavesIcon/>, description: 'Защита от воздействия влаги и водных волн', color: '#9575cd'},
  {icon: <BuildCircleIcon/>, description: 'Профессиональный подход к строительству и ремонту', color: '#f06292'},
  {icon: <EnergySavingsLeafIcon/>, description: 'Использование экологически чистых материалов', color: '#4db6ac'},
];

const HydroIsolationGrid = () => {
  return (
    <Grid container spacing={2} mt={2}>
      {iconData.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <Paper style={{
            padding: '20px',
            textAlign: 'center',
            backgroundColor: item.color,
            height: '100%',
            borderRadius: 16
          }}>
            {item.icon}
            <Typography variant="subtitle1" style={{marginTop: '10px', color: '#fff'}}>
              {item.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default HydroIsolationGrid;
