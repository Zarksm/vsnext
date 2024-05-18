'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import SliderCard from './SliderCard';
import { SliderHero } from '@/lib/constant';

const Slider =  () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 5000 }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {SliderHero.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="slide-content px-72 mt-24">
            <SliderCard text={item.text} habib={item.habib} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
 
export default Slider