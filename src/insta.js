import React from 'react'
import Insta1 from './image/insta1.jpg'
import Insta2 from './image/insta2.jpg'
import Insta3 from './image/insta3.jpg'
import Insta4 from './image/insta4.jpg'
import Insta5 from './image/insta5.jpg'
import Insta6 from './image/insta6.jpg'

export default function insta() {
    const data=[Insta1,Insta2,Insta3,Insta4,Insta5,Insta6]
  return (
    <div>
        <div class=" my-4 p-3 ">
              <div class="text-lg text-center text-blue-900">Follow <code class="font-bold text-xl">@MYMEDI</code> on instagram</div>
              <div class="flex w-full h-full">
              {data.map((val, index)=>{
                return(
                    <div class="flex w-full mt-4 overflow-hidden mx-2">
                <img class="w-[100%] h-[100%] mr-1 hover:-translate-y-1 hover:scale-110 duration-700 hover:cursor-pointer hover:skew-y-0" src={val}/>
                </div>
                )
              })}
              </div>
              </div>
          </div>
        
   
  )
}