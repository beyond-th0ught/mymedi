import React from 'react'
import Card2 from './card2'



export default function aboutus() {

  const data = ["Dynamically Procrastinate","Efficiently Unleash","Completely Synergize"]  
  return (
    <div>
        <div class="bg-[#daa520] py-[5%] w-[100%] px-[8%]">
        
        <div class="md:flex pt-2 my-3">
                
                 {
                    data.map((val, index) =>{
                        return(<Card2 val={val}/>)
                    })
                 } 
                
        </div>
    </div>
    </div>
  )
}
