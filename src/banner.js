import React from 'react'
import First from './image/bg-banner1.jpg'
import Second from './image/bg-banner2.jpg'
import Third from './image/bg-banner3.jpg'
import First1 from './image/banner-text1.png'
import Second2 from './image/banner-text2.png'
import Third3 from './image/banner-text3.png'

export default function banner() {
    const data=[
        {
            url:First,
            url1:First1
        },
        {
            url:Second,
            url1:Second2
        },
        {
            url:Third,
            url1:Third3
        }
    ]
  return (
    <div>
        <div  class="flex w-100vh h-[303px] m-7 bg-white">
            {data.map((val,index)=>{
                return(
                    <div class="w-[100%] h-[90%]  rounded-md mr-5 bg-sky-300 relative overflow-hidden"> 
                        <img class="absolute h-full w-full hover:-translate-y-1 hover:scale-110 duration-700 hover:cursor-pointer hover:skew-y-0" src={val.url} alt="" />
                        <img class=" absolute mx-8 mt-12 w-28  hover:cursor-pointer" src={val.url1} alt="" />
                    </div>
                )
            })}
        </div>
    </div>
  )
}
