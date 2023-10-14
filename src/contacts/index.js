import React from 'react';
import {Container, Typography} from '@mui/material';

const Contacts = () => {
  return (
    <Container maxWidth="lg" sx={{height: '84vh'}}>
      <Typography variant="h6" mt={2}>Адрес:</Typography>
      <Typography variant="body1" mb={1}>
        347942, РФ, РО г. Таганрог, ул. Маршала СССР Г.К. Жукова, дом №2-а, офис №20
      </Typography>

      <Typography variant="h6">Время работы:</Typography>
      <Typography variant="body1" mb={1}>9:00 до 18:00</Typography>

      <Typography variant="h6">Телефон:</Typography>
      <Typography variant="body1" mb={1}>+7 (8634) 36-35-00</Typography>

      <Typography variant="h6">Email:</Typography>
      <Typography variant="body1" mb={2}>
        <a href="mailto:dgerasimov161@yandex.ru">dgerasimov161@yandex.ru</a>
      </Typography>

      <div style={{position: 'relative', overflow: 'hidden'}}>
        <a
          href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps"
          style={{color: '#eee', fontSize: 12, position: 'absolute', top: 0}}
        >
          Яндекс Карты
        </a>
        <a
          href="https://yandex.ru/maps/971/taganrog/house/ulitsa_marshala_zhukova_2a/Z0EYfwRgTUIPQFptfX52d3llZA==/?ll=38.931543%2C47.275918&rtext=47.208735%2C38.936694~47.276560%2C38.930478&rtt=auto&ruri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE2NjA2MxJD0KDQvtGB0YHQuNGPLCDQoNC-0YHRgtC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KLQsNCz0LDQvdGA0L7QsyIKDS6_G0IVv9U8Qg%2C%2C~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNjI5Njg5OTUwEnDQoNC-0YHRgdC40Y8sINCg0L7RgdGC0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQotCw0LPQsNC90YDQvtCzLCDRg9C70LjRhtCwINCc0LDRgNGI0LDQu9CwINCW0YPQutC-0LLQsCwgMtCQIgoNzrgbQhUzGz1C&utm_medium=mapframe&utm_source=maps&z=18.27"
          style={{color: '#eee', fontSize: 12, position: 'absolute', top: 14}}
        >
          Улица Маршала Жукова, 2А — Яндекс Карты
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=38.931543%2C47.275918&mode=whatshere&rtext=47.208735%2C38.936694~47.276560%2C38.930478&rtt=auto&ruri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE2NjA2MxJD0KDQvtGB0YHQuNGPLCDQoNC-0YHRgtC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KLQsNCz0LDQvdGA0L7QsyIKDS6_G0IVv9U8Qg%2C%2C~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNjI5Njg5OTUwEnDQoNC-0YHRgdC40Y8sINCg0L7RgdGC0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQotCw0LPQsNC90YDQvtCzLCDRg9C70LjRhtCwINCc0LDRgNGI0LDQu9CwINCW0YPQutC-0LLQsCwgMtCQIgoNzrgbQhUzGz1C&whatshere%5Bpoint%5D=38.930412%2C47.276581&whatshere%5Bzoom%5D=17&z=18.27"
          width="560"
          height="400"
          frameBorder="1"
          allowFullScreen="true"
          style={{position: 'relative'}}
        ></iframe>
      </div>
    </Container>
  )
};

export default Contacts;
