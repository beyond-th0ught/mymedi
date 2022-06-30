import React from 'react'

export default function subscribe() {
  return (
    <div class=" flex flex-col justify-center items-center">
    <div class="text-center text-2xl font-bold text-blue-900 mt-16">
            <div>
              Join our newsletter and get
            </div>
            <div>
              $20 discount for your first order
            </div>
    </div>
        
        <div class="text-center mt-7 w-full">
            <input placeholder='Enter you email addesee'  alt="Enter your name" class=" text-xs text-blue-900 w-[37%] p-2 rounded-full bg-slate-200">

            </input>
        </div>
        <div  class=" mt-2 bg-[#ffa600] w-[12%] py-2 rounded-full text-white text-center font-bold cursor-pointer text-sm">
           
        </div>
    </div>
  )
}
