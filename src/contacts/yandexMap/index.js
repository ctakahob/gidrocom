import React from 'react';

const YandexMap = () => {
  return (
    <div style={{position: 'relative', overflow: 'hidden'}}>
      <a
        href="https://yandex.ru/maps/39/rostov-na-donu/?utm_medium=mapframe&utm_source=maps"
        style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}
      >
        Ростов‑на‑Дону
      </a>
      <a
        href="https://yandex.ru/maps/39/rostov-na-donu/house/shosseynaya_ulitsa_49v/Z0AYcQdlQUcEQFptfX5xeXxgZQ==/?ll=39.705918%2C47.208064&utm_medium=mapframe&utm_source=maps&z=18.94"
        style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '14px'}}
      >
        Шоссейная улица, 49В — Яндекс Карты
      </a>
      <iframe
        title="Yandex Map"
        src="https://yandex.ru/map-widget/v1/?ll=39.705918%2C47.208064&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzI4OTg0NxJ00KDQvtGB0YHQuNGPLCDQoNC-0YHRgtC-0LIt0L3QsC3QlNC-0L3Rgywg0LzQuNC60YDQvtGA0LDQudC-0L0g0JfQsNGA0LXRh9C90LDRjywg0KjQvtGB0YHQtdC50L3QsNGPINGD0LvQuNGG0LAsIDQ50JIiCg3C0h5CFQbVPEI%2C&z=18.94"
        width="560"
        height="400"
        frameBorder="1"
        allowFullScreen={true}
        style={{position: 'relative'}}
      ></iframe>
    </div>
  );
};

export default YandexMap;
