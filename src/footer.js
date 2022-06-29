import React from 'react'
import Wallet from './image/wallet.png'
import Package from './image/package.png'
import Truck from './image/truck.png'
import Logo from './image/logo.png'
import Phone from './image/phone-icon.png'
import Mail from './image/mail.png'
import Payment from './image/payment.png'


export default function footer() {
    const data=[
        {
            name:"100% Money back",
            url:Wallet
        },
        {
            name:"Non-contact shipping",
            url:Package
        }
    ]
    const data1=["About us","Delivery information","Privacy Policy","Sales","Terms & Conditions"]
    const data2=["My account","My orders","Returns","Shipping","Wishlist"]
    const data3=["Affiliate","Bestsellers","Discount","Latest products","Sale"]

    return (
    <div class="w-full">
        <div class="  bg-gray-200  h-8 w-[93%] ml-10 mt-16 rounded-sm text-sm font-bold text-blue-900 ">
            <div class="flex justify-center items-center  ">
            {data.map((val, index)=>{
                return(
                    <div class=" border-gray-300 border-r-[1px] h-8 w-[31%]  rounded-sm text-center flex justify-center items-center  ">
                <img class="mr-3 h-4 w-4" src={val.url} alt="" />
                {val.name}
            </div>
                )
            })}
            <div class=" h-8 w-[31%]  rounded-sm text-center flex justify-center items-center  ">
                <img class="mr-3 h-4 w-4" src={Truck} alt="" />
                Free delivery for order over $200
            </div>
            </div>
        </div>
        <div class="mx-10 my-16">
            <div class=" flex">
                <div class="w-[60%] flex">
                    <div class="w-[35%]">
                    <img class=" h-8" src={Logo}/>
                    <div class="text-sm mt-8 text-gray-500">
                    1487 Rocky Horse Carrefour<br/>
                    Arlington, TX 16819<br/>

                    <div class=" text-xs underline hover:cursor-pointer my-5">Show on map</div>
                    </div>
                    </div>
                    
                    <div class="border-l-[1px] w-[70%]">
                        <div class="ml-9   text-blue-900 font-semibold">
                        <div >Need help</div>
                        <div class="flex mt-5 border-b-[1px] w-[100%]">
                            <img class="mt-1 w-[7%] h-[7%] " src={Phone} />
                            <div class="ml-3 text-lg font-bold">0020 500 – MYMEDI – 000
                            <div class="text-xs font-normal mb-5 text-gray-500 mt-2">
                                Monday – Friday: 9:00-20:00<br/><br/>
                                Saturday: 11:00 – 15:00
                            </div>
                            </div>
                            
                        </div>
                        </div>
                        <div class="flex ml-9 text-blue-900 items-center mt-5">
                            <img class="w-[15px] h-[15px]" src={Mail}/>
                            <div class="text-xs font-bold ml-3">contact@example.com</div>
                        </div>
                        
                    </div>
                </div>
                <div>
                    <div class="flex">
                        
                        <div class="text-sm break-all ml-6">
                        <div class="font-semibold mb-3 font-normal">Information</div>
                        {data1.map((val, index)=>{
                                return(
                                    <div class="my-2 text-blue-900">{val}</div>
                                )
                            })
                        }
                        </div>

                       <div class="text-sm break-all ml-6">
                        <div class="font-semibold mb-3 font-normal">Account</div>
                        {data2.map((val,index)=>{
                            return(
                                <div class="my-2 text-blue-900">{val}</div>
                            )
                        })}
                        </div>
                        
                        <div class="text-sm break-all ml-6">
                        <div class="font-semibold mb-3 font-normal">Store</div>
                        {data3.map((val,index)=>{
                            return(<div class="my-2 text-blue-900">{val}</div>)
                        })}
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
        </div>
        <hr/>
        <div class="flex p-5 items-center text-sm">
                    <div class="text-blue-900 text-left">Copyright © 2020 Mymedi. All Rights Reserved</div>
                    <div class="ml-[33%]"><img class=" h-9" src={Payment}/></div>
                </div>
    </div>
  )
}
