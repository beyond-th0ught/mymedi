import React from 'react'
import React1, { useRef, useState } from "react";
import Quote from './image/quote-icon.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination, Autoplay } from "swiper";
import Data from './data';
import ReactStars from 'react-stars'

export default function swiper() {
const ratingChanged = (newRating) => {
        console.log(newRating)
      }
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
          className="mySwiper"
          autoplay={true}
          modules={[Autoplay]}
          loop={true}
        >
        
            {Data.map((val,index)=>{
            return(
                <SwiperSlide>
                <div className='w-[100%] h-auto  text-blue-900'>
                <div class=" rounded-md p-6 bg-white">
                    <div class="text-md">{val.comment}</div>
                    <div class="text-xs font-bold my-2">{val.commenter}</div>
                    <ReactStars
                        count={5}
                        value={val.rating}
                        onChange={ratingChanged}
                        size={24}
                        color2={'#ffd700'} />
                </div>
                </div>
                </SwiperSlide>
            )
        })}
 
                 
        </Swiper>
        </div>
        </div>
        
    </div>
    </div>
  )
}