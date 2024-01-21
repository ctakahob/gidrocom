import React from 'react';
import {CardMedia, Container, Grid, Paper, Typography} from '@mui/material';

const WaterproofingBlog = () => {
  return (
    <Container maxWidth="lg" sx={{pt: 10, pb: 10}}>
      <Typography variant="h1" sx={{fontSize: 32, fontWeight: 'bold', mb: 4, textAlign: 'center'}}>
        Гидроизоляция: Защита вашего дома от воды и влаги
      </Typography>

      <CardMedia
        component="img"
        sx={{m: 3, borderRadius: 4}}
        height="200"
        image={"/static/title.jpg"}
        alt={'no image'}
      />

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{p: 3}}>
            <Typography variant="body1" sx={{fontSize: 18, mb: 2}}>
              Гидроизоляция - это важный процесс, который направлен на защиту строительных конструкций от влаги и воды.
              Она
              играет решающую роль в обеспечении долговечности и надежности зданий и сооружений, так как влага может
              привести к разрушению материалов и образованию плесени и грибков.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{p: 3}}>
            <Typography variant="body1" sx={{fontSize: 18, mb: 2}}>
              Гидроизоляция применяется на разных уровнях строительства, включая кровлю, фундамент, стены и полы. Она
              создает барьер, который предотвращает воду и влагу от проникновения во внутренние пространства здания.
              Таким образом, гидроизоляция обеспечивает сохранность и долговечность здания.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={4} mt={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{p: 3}}>
            <Typography variant="body1" sx={{fontSize: 18, mb: 2}}>
              Гидроизоляция не только предотвращает повреждение здания, но и способствует созданию комфортных и здоровых
              условий для жизни. Она защищает от протечек, утечек и влаги, что способствует предотвращению образования
              плесени и грибков, которые могут нанести вред здоровью.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{p: 3}}>
            <Typography variant="body1" sx={{fontSize: 18, mb: 2}}>
              Гидроизоляция также является важным аспектом энергоэффективности зданий. Правильно выполненная
              гидроизоляция
              помогает предотвратить потерю тепла и уменьшить затраты на отопление и кондиционирование воздуха.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={4} mt={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{p: 3}}>
            <Typography variant="body1" sx={{fontSize: 18, mb: 2}}>
              Гидроизоляция спасает здания от вредного воздействия воды и влаги. Ее задача - не допустить проникновение
              воды во внутренние пространства здания, что может привести к серьезным повреждениям и даже угрозе
              безопасности.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{p: 3}}>
            <Typography variant="body1" sx={{fontSize: 18, mb: 2}}>
              Однако гидроизоляция не только предназначена для защиты. Она также способствует созданию комфортного и
              здорового микроклимата внутри здания. Защита от влаги помогает предотвратить образование плесени, грибков
              и структурных повреждений, которые могут ухудшить качество воздуха в помещении.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={4} mt={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{p: 3}}>
            <Typography variant="body1" sx={{fontSize: 18, mb: 2}}>
              Гидроизоляция также способствует энергоэффективности зданий. Она помогает предотвратить потерю тепла, что
              снижает затраты на отопление и кондиционирование воздуха. Это экономически выгодное решение и
              способствует снижению негативного воздействия на окружающую среду.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{p: 3}}>
            <Typography variant="body1" sx={{fontSize: 18, mb: 2}}>
              В заключение, гидроизоляция - это неотъемлемая часть строительства, которая обеспечивает защиту, комфорт и
              энергоэффективность зданий. Правильно выполненная гидроизоляция помогает сохранить инвестиции в
              строительство и обеспечивает долговечность вашего дома.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WaterproofingBlog;
