import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Stack, Typography} from "@mui/material";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import {EffectFade, Navigation} from "swiper/modules";

const SlideContent = ({backgroundImage, title, description, color = 'black'}) => (<Stack
  width={1}
  height={{md: 700, xs: 400}}
  sx={{
    backgroundImage: `url('${backgroundImage}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    backgroundSize: "cover",
  }}
  justifyContent={"center"}
  alignItems={"center"}
>
  <Typography color={color} variant={"h2"} fontSize={{xs: '2rem', md: "4rem"}} fontWeight={600} mb={2}
              textAlign={'center'} sx={{p: 2}}>
    {title}
  </Typography>
  <Typography fontSize={{xs: '1rem', md: "2rem"}} color={color} textAlign={"center"} sx={{p: 2}}>
    {description}
  </Typography>
</Stack>);

const Slider = () => {
  return (<Swiper
    spaceBetween={50}
    loop
    modules={[EffectFade, Navigation]}
    navigation
    effect="fade"
    slidesPerView={1}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
      <SlideContent
        backgroundImage="/static/homeSlider/1.jpg"
        title="Гидроизоляция крыш"
        description="Обеспечьте надежную защиту вашего дома с нашей высококачественной гидроизоляцией крыш.
         Надежное решение для долговечной безопасности вашего жилья"
        titleColor={'white'}
        color={'white'}
      />
    </SwiperSlide>
    <SwiperSlide>
      <SlideContent backgroundImage="/static/homeSlider/3.jpg"
                    title="Полимерныые резинове покрытия не только черная крыша"
                    description=
                      "Полимерные резиновые покрытия - стильная и эффективная гидроизоляция, превращающая не только черные крыши,
                       но и любые поверхности в надежные барьеры против влаги."
                    color={
                      '#1C2B75'
                    }/>
    </SwiperSlide>
    <SwiperSlide>
      <SlideContent backgroundImage="/static/homeSlider/4.jpg"
                    color={'purple'}
                    title="Бассейн без забот - гидроизоляция, которой вы можете доверять"
                    description="Надежная защита от влаги для вашего спокойствия"/>
    </SwiperSlide>
    <SwiperSlide>
      <SlideContent backgroundImage="/static/homeSlider/5.jpg"
                    title="Дорожки и спортплощадки"
                    description="Каждый шаг — безопасность, каждая игра — непрерывное удовольствие, благодаря надежной защите от влаги"
                    color={'#f1f17e'}/>
    </SwiperSlide>
    <SwiperSlide>
      <SlideContent backgroundImage="/static/homeSlider/6.jpg"
                    title="Гидроизоляция высшего класса: Уникальные продукты для непревзойденной защиты"
                    description="Наши уникальные продукты предоставляют надежную гидроизоляцию,
                     обеспечивая беспрецедентный уровень защиты от влаги и сохраняя ваше пространство сухим и надежным на долгие годы"/>
    </SwiperSlide>
  </Swiper>);
};

export default Slider;
