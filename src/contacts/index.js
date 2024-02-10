import React from 'react';
import { Grid, Paper, Typography} from '@mui/material';
import YandexMap from '@/contacts/yandexMap';

const Contacts = () => {
    return (
      <Paper variant={'outlined'} sx={{mt: 2, borderRadius: 4, p:2}} >
          <Grid container spacing={4} width={1}>
              <Grid item xs={12} md={6}>
                  <Typography variant="h6" mt={2}>
                      Адрес:
                  </Typography>
                  <Typography variant="body1" mb={1}>
                      344002, РФ, РО г. Ростов-на-Дону, ул. Шоссейная, 49В
                  </Typography>

                  <Typography variant="h6">Время работы:</Typography>
                  <Typography variant="body1" mb={1}>
                      9:00 до 20:00
                  </Typography>

                  <Typography variant="h6">Телефон:</Typography>
                  <Typography variant="body1" mb={1}>
                      +79281834505
                  </Typography>

                  <Typography variant="h6">Email:</Typography>
                  <Typography variant="body1" mb={2}>
                      <a href="mailto:dgerasimov161@yandex.ru">dgerasimov161@yandex.ru</a>
                  </Typography>
              </Grid>
              <Grid item xs={12} md={6} justifyContent={'end'}>
                  <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
                      <a
                        href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 0 }}
                      >
                          Яндекс Карты
                      </a>
                      <a
                        href="https://yandex.ru/maps/971/taganrog/house/ulitsa_marshala_zhukova_2a/Z0EYfwRgTUIPQFptfX52d3llZA==/?ll=38.931543%2C47.275918&rtext=47.208735%2C38.936694~47.276560%2C38.930478&rtt=auto&ruri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE2NjA2MxJD0KDQvtGB0YHQuNGPLCDQoNC-0YHRgtC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KLQsNCz0LDQvdGA0L7QsyIKDS6_G0IVv9U8Qg%2C%2C~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNjI5Njg5OTUwEnDQoNC-0YHRgdC40Y8sINCg0L7RgdGC0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQotCw0LPQsNC90YDQvtCzLCDRg9C70LjRhtCwINCc0LDRgNGI0LDQu9CwINCW0YPQutC-0LLQsCwgMtCQIgoNzrgbQhUzGz1C&utm_medium=mapframe&utm_source=maps&z=18.27"
                        style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 14 }}
                      >
                          Улица Маршала Жукова, 2А — Яндекс Карты
                      </a>
                      <YandexMap />
                  </div>
              </Grid>
          </Grid>
      </Paper>
    );
};

export default Contacts;
