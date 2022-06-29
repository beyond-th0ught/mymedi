import React from 'react'
import React1, { useRef, useState } from "react";
import Quote from './image/quote-icon.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from "swiper";

export default function swiper() {
  return (
    <div>
    <div>
        <div class="w-full p-10 bg-pink-100">
        <div class="flex my-4 p-3 justify-center bg-pink-100">
            <img class="w-7 h-4 mt-1" src={Quote}/>
            <div class="text-2xl font-bold text-blue-900">Latest reviews</div>
        </div>
        <div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='  m-6 w-[100%] h-auto  text-blue-900'>
        <div class=" rounded-sm p-6 bg-white">
        Everything is perfect. I would recommend!
        Mark J.
        Rated 4 out of 5
 
        </div>
        </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className='  m-6 w-[100%] h-auto  text-blue-900'>
          <div class=" rounded-sm p-6 bg-white">
                I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing.
                Mark J.
                Rated 5 out of 5
          </div>
            </div></SwiperSlide>
          <SwiperSlide>
          <div className='  m-6 w-[100%] h-auto  text-blue-900'>
          <div class=" rounded-sm p-6 bg-white">
          There was a small mistake in the order. In return, I got the correct order and I could keep the wrong one for myself.
                Mark J.
                Rated 4.5 out of 5
          </div>
            </div>
            </SwiperSlide>
          <SwiperSlide>
          <div className='  m-6 w-[100%] h-auto  text-blue-900'>
          <div class=" rounded-sm p-6 bg-white">
          I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing.
            Mark J.
            Rated 5 out of 5
          </div>
          
            </div>
            </SwiperSlide>
          <SwiperSlide>
          <div className='  m-6 w-[100%] h-auto  text-blue-900'>
          <div class=" rounded-sm p-6 bg-white">
          There was a small mistake in the order. In return, I got the correct order and I could keep the wrong one for myself.
            Mark J.
            Rated 4.5 out of 5
          </div>
          
            </div>
            </SwiperSlide>
          
          <SwiperSlide>
          <div className='  m-6 w-[100%] h-auto  text-blue-900'>
          <div class=" rounded-sm p-6 bg-white">
          I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing.
            Mark J.
            Rated 5 out of 5
          </div>
         
            </div>
            </SwiperSlide>
          <SwiperSlide>
          <div className='  m-6 w-[100%] h-auto  text-blue-900'>
          <div class=" rounded-sm p-6 bg-white">
          There was a small mistake in the order. In return, I got the correct order and I could keep the wrong one for myself.
            Mark J.
            Rated 4.5 out of 5
          </div>
            </div>
            </SwiperSlide>
          
        </Swiper>
        </div>
        </div>
        
    </div>
    </div>
  )
}


