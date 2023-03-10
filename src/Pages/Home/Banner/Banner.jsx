import React, { useRef } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Banner.scss';
function Banner() {
  return (
    <div>
      {' '}
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        effect={'fade'}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Pagination, Navigation, Autoplay]}
        className='BannerSwiper'
      >
        <SwiperSlide>
          <div className='bg slide-1'></div>
          <img src='/img/banner1.jpeg' alt='St-United Team' />
          <h2>Collaborate to kick-start your software project</h2>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg slide-2'></div>
          <img src='/img/banner2.png' alt='Project' />
          <h2>We code, we care</h2>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg slide-3'></div>
          <img src='/img/banner3.jpg' alt='Digital marketing' />
          <h2>We also do digital marketing</h2>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg slide-4'></div>
          <img src='/img/banner4.jpg' alt='Member' />
          <h2>And we are incubating startup projects too...</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
