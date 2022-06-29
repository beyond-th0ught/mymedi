import React from 'react'
import Logo1 from './image/logo.png'
import Search from './image/search.png'
import User from './image/user.png'
import Favorite from './image/favorite.png'
import Cart from './image/cart.png'
import Arrow from './image/downArrow.png'

export default function logo() {
    const data=[Search,User,Favorite,Cart]
  return (
    <div>
        <div class="border-b-2 flex py-5 relative">
            
            <div>
                <img class="text-2xl ml-8 text-blue-900 w-[35%] h-full" src={Logo1} alt=""/>
            </div>
            <div class=" w-[100%] relative ">
                <div class="flex  absolute items-center right-8 text-md text-gray-500">
                <code class="">English </code>
                <img class=" ml-1 h-[10px] w-[10px] mr-5" src={Arrow} alt="" />
                <code>USD </code>
                <img class=" ml-1 h-[10px] w-[10px]" src={Arrow} alt="" />
                </div>
                
            </div>
            <div class="w-[50%] text-right border-l-2 ">
                <div class="flex w-[100%] items-center">
                    {data.map((val,index)=>{
                        return(<><img class=" ml-7 w-6 h-6" src={val} alt="" /></>)
                    })}
                </div>
                
            </div>
        </div>
    </div>
  )
}


