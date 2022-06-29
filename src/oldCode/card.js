import React from 'react'

export default function card(props) {
  return (
    <div class="mr-3">
            <div class=" h-[305px] w-[100%] bg-gray-200 text-gray-400 font-bold text-2xl rounded flex items-center justify-center">
                700x300
            </div>
            <div class="py-3">
                <a class="text-blue-500 text-2xl hover:underline hover:text-blue-900">
                    {props.val2}
                </a>
                <p class="text-gray-400  text-sm ">
                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.
                </p>
            </div>
        </div>
  )
}
