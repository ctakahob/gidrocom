// components/HomePage.js
import React from 'react';
import {Container, Typography} from '@mui/material';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {useTheme} from '@mui/material/styles';

const imagePaths = [
  '/static/1.jpg',
  '/static/2.jpg',
  '/static/3.jpg',
  '/static/4.jpg',
  '/static/5.jpg',
  '/static/6.jpg',
  '/static/7.jpg',
  '/static/8.jpg',
];
const HomePage = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="md"
      sx={{
        overflowY: 'auto',
      }}
    >
      <Typography variant="h1" mt={4} mb={3} fontSize={18} textAlign={'center'}>
        <b>ООО &quot;Гидроком-Юг&quot;</b> – является официальным представителем производственной компании
        производящей
        оборудование и инновационные полимерные материалы, по технологиям применяемые в сфере гидроизоляции
        кровли,
        фундаментов, полов, водоемов, бассейнов, отделки фасадов.
      </Typography>

      <Carousel showArrows={true} showThumbs={false} showStatus={false}>
        {imagePaths.map((path, index) => (
          <div key={index}>
            <img src={path} alt={`Slide ${index}`}/>
          </div>
        ))}
      </Carousel>
      <Typography variant="body1" sx={{marginTop: 2}}>
        Производственная компания, присутствует на рынке
        Российской Федерации более 15 лет, применяя 40 летний опыт используемых различных полимерных составов за
        рубежом.
      </Typography>
      <Typography variant="body1" sx={{marginTop: 2}}>
        Наша компания не только работает с новейшими материалами, но и генерирует новые технологии, материалы и методики
        монтажа, которые позволяют нам быть первыми и лучшими, впереди наших коллег-конкурентов.
      </Typography>
      <Typography variant="body1" sx={{marginTop: 2}}>
        Мы стремительно развиваемся и расширяем географию присутствия. Это делает нас отличным партнером для
        строительных компаний и подрядчиков, нуждающихся в долговечных решениях и новых технологиях в области
        гидроизоляции зданий и конструкций, устройства кровли и эксплуатируемых покрытий.
      </Typography>
      <Typography variant="body1" sx={{marginTop: 2}}>
        Мы используем все наши возможности, опыт и знание для сопровождения нашей работы с предлагаемым продуктом,
        материалом, оборудованием, технологией.
      </Typography>
      <Typography variant="body1" sx={{marginTop: 2}}>
        Нам доверяют не только строительно-монтажные организации и частные потребители, нам доверяют и крупные торговые,
        промышленные организации.
      </Typography>
      <Typography variant="body1" sx={{marginTop: 2}}>
        Наши продукты и решения пользуются успехом многие годы в России, странах ближнего зарубежья и во многих странах
        Европы, Азии и Ближнего востока. Тенденция расширения нашего присутствия свидетельствует - мы на правильном
        пути.
      </Typography>
      <Typography variant="body1" sx={{marginTop: 2}}>
        Если у вас возникли проблемы с гидроизоляцией, не стесняйтесь обратиться к нам. Мы готовы помочь вам в
        решении ваших задач и предоставить долговечные решения для гидроизоляции.
      </Typography>
    </Container>
  );
};

export default HomePage;
