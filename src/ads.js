import React from 'react'
import Home2 from './image/home-bg2.png'
import Bacteria from './image/home1-icon2.png'
import Virus from './image/home1-icon.png'

export default function ads() {
    const data=[
        {
            name:"Anti-Bacterial",
            url:Bacteria
        },
        {
            name:"Anti-Virus",
            url:Virus
        }
    ]
    
  return (
    <div>
       <div class="w-[100%] h-[505px] bg-gray-100 relative">
            <div class="h-100vh ">                      
                <img class="absolute mx-8 mt-12 w-[44rem] inset-y-0 right-0" src={Home2} alt="" />
                <img class=" absolute mx-8 mt-12 w-28  hover:cursor-pointer" src="" alt="" />
                <div class="rounded-full p-5 px-6 right-36 top-14  bg-yellow-400 absolute text-blue-900 text-center font-mono">
                    <code class="text-xl font-bold">only</code> <br/> 
                    <code class="text-4xl font-extrabold">$25</code>
                </div>
                <div class="absolute w-[30%] font-system-ui text-blue-900 top-[17%] left-8">
                    <div class="text-5xl font-black "> Antibacterial <br/> Media Mask</div>
                    <div class="mt-2 text-lg">
                        <br/>just a few seconds to measure your body temprature
                    </div>
                    <div class="text-sm font-bold text-gray-500 flex  mt-10">
                      {data.map((val, index)=>{
                        return(
                            <div class="mr-16 flex text-center">
                                <img class=" mr-1 w-5 h-5 " src={val.url} alt="" />
                                {val.name}
                            </div>
                        )
                      })}
                        
                    </div>
                    
                        <div class=" mt-6 bg-[#ffa600] w-[50%] py-3 rounded-full text-white text-center font-bold cursor-pointer">Shop now</div> 
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}
