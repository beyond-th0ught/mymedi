import React from 'react'
import Facemask from './image/facemask-cat.png'
import Uniform from './image/uniforms-cat.png'
import Protect from './image/protectcover-cat.png'
import Dental from './image/dental-cat.png'
import Pressure from './image/pressure-cat.png'

export default function checkOut() {
    const data=[
        {
            name:"Face masks",
            url: Facemask
        },
        {
            name:"Uniforms",
            url:Uniform
        },
        {
            name:"Protective Cover",
            url:Protect
        },
        {
            name:"Dental",
            url:Dental
        },
        // {
        //     name:"Blood Pressure",
        //     url:Pressure
        // }
    ]
  return (
    <div>
            <div class="text-center my-5 text-2xl text-blue-900 font-medium">Check out the most popular categories</div>
            <div class="bg-red w-100vh flex">
            {data.map((val, index)=>{
                return(
                    <div class=" w-[23%] h-[23%] ml-4 rounded-md bg-gray-200 flex relative">
                        <div class=" absolute text-blue-900 font-semibold top-5 left-5">
                                <div class="hover:text-orange-500 text-xl ">{val.name}</div>
                                <div class="bg-white rounded-full text-xs text-center mt-3 p-1 w-[70%]">
                                    More
                                </div>
                        </div>
                                
                        <img class=" hover:cursor-pointer  " src={val.url} alt="" /> 
            </div>
                )
            })}
            
            </div>           
       </div>
  )
}
