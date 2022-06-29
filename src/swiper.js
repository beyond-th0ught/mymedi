import React from 'react'
import Quote from './image/quote-icon.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function swiper() {
  return (
    <div>
        {/* <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper> */}
    <div>
        <div class="w-full p-7  ">
        <div class="flex my-4 justify-center bg-pink-100">
            <img class="w-7 h-4 mt-1" src={Quote}/>
            <div class="text-2xl font-bold text-blue-900">Latest reviews</div>
        </div>
        </div>
    </div>
    </div>
  )
}
