import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Stack} from "@mui/material";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import {EffectFade, Navigation} from "swiper/modules";
import Image from "next/image";

const SlideContent = ({backgroundImage, title, description, color = 'black'}) => (<Stack
  width={1}
  height={{md: 700, xs: 400}}
  justifyContent={"center"}
  alignItems={"center"}
>
  <Image src={backgroundImage} alt={'bo image'} fill/>
</Stack>);

const SliderBottom = () => {
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
        backgroundImage="/static/1.jpg"
      />
    </SwiperSlide>
    <SwiperSlide>
      <SlideContent backgroundImage="/static/2.jpg"></SlideContent>
    </SwiperSlide>
    <SwiperSlide>
      <SlideContent backgroundImage="/static/3.jpg"></SlideContent>
    </SwiperSlide>
    <SwiperSlide>
      <SlideContent backgroundImage="/static/4.jpg"></SlideContent>
    </SwiperSlide>
    <SwiperSlide>
      <SlideContent backgroundImage="/static/5.jpg"/>
    </SwiperSlide>
    <SwiperSlide>
      <SlideContent backgroundImage="/static/6.jpg"/>
    </SwiperSlide>
    <SwiperSlide>
      <SlideContent backgroundImage="/static/7.jpg"/>
    </SwiperSlide>
    <SwiperSlide>
      <SlideContent backgroundImage="/static/8.jpg"/>
    </SwiperSlide>
    <SwiperSlide>
      <SlideContent backgroundImage="/static/9.jpg"/>
    </SwiperSlide>
  </Swiper>);
};

export default SliderBottom;
