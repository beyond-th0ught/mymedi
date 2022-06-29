import React from 'react'
import Arrow from './image/downArrow.png'
import Home from './image/home.png'

export default function title() {
  const data=[
    {
        url2:Home,
        name:"Products",
        url:Arrow
    },
    {
        name:"Home Medical Supplies",
        url:Arrow
    },
    {
        name:"Homepages",
        url: Arrow
    },
    {
        name:"Shop"
    },
    {
        name:"Pages",
        url: Arrow
    },
    {
        name:"Collection ",
        url:Arrow
    },
    {
        name:"Blog"
    },
    {
        name:"Contact"
    }
  ]
    return (
    <div>
        <div class="border-b-2 flex text-blue-900  py-3 font-medium">
            {data.map((val,index)=>{
                return(
                    <div class="mr-5 hover:text-orange-500 flex items-center">
                    {val.url2?(<img class="mt-1 mr-2 w-4 h-5 ml-8" src={val.url2} alt="" />): (<></>)} 
                 {val.name}
                  {val.url ? (<img class=" ml-1 h-[10px] w-[10px]" src={val.url} alt="" />): (<></>)}
            </div>
                )
            })}
        </div>
    </div>
  )
}
