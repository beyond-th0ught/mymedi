
import React from 'react'

export default function navbar() {
  const data=["Logo","Home","About","Products","Services"]
  return (
    <div>
        <div class="flex justify-between items-center h-[19%] w-[100%] bg-stone-800 px-[7%] py-1">
        <div class="text-gray-400 flex h-full ">
        
        {data.map((val, index)=>{
          return(<div class="p-2 hover:bg-black hover:text-white hover:px-3">{val}</div>)
        })}
        </div>
        <div class="flex justify-center items-center">
            <input class="bg-white p-1 h-[10%] w-[80%] rounded"/>
            <div class="ml-1 p-1 w-[30%] text-center bg-white  rounded">Search</div>
        </div>
    </div>
    </div>
  )
}

