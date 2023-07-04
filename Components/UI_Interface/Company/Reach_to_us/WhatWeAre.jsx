import React from 'react'
import {FaRunning} from "react-icons/fa"
import {GiJumpAcross,GiTimeTrap,GiPriceTag} from "react-icons/gi"


export default function WhatWeAre() {
  return (

    <>
{/*Features :--> BOOSTING YOUR SPEED, HIGHLY COMFORTABLE, ULTRA DURABLE, LESS PRICE */}
    <div className='bg-gradient-to-r from-black via-purple-900 to-black ...  w-full py-12'>

<div className="FullPortion lg:flex lg:justify-between w-full lg:space-y-0 lg:px-12 md:space-x-0 lg:space-x-8 space-y-12">

<div className="leftPortion flex justify-center w-full text-white md:px-24 px-8  lg:px-0 ">
  <div className="">
<p className='uppercase font-light mb-1 text-xs lg:mb-2'>Ask Us</p>
<div className="">
<h1 className='uppercase font-semibold text-2xl'>What We Are</h1>
<div className='h-[0.15rem] w-12 bg-blue-600'></div>
</div>
<p className='py-2 lg:py-8'>UNREVEAL is the hope of all visual creators living on this Earth and has born to make their dreams successful, conveniently and effectively.</p>
<div className="flex mt-2">
<div className="bg-blue-600 h-3 w-[0.15rem]"></div>
<div className="bg-blue-600 h-[0.15rem] w-3"></div>
  <button className=' uppercase px-1 py-2 font-semibold '>Creators Everywhere</button> {/*Write any text in this line */}
 <div className="flex items-end"> 
<div className="bg-blue-600 h-[0.15rem] w-3"></div>
<div className="bg-blue-600 h-3 w-[0.15rem]"></div>
</div>
  {/*Design for any Text to show BEST Loooking */}
  </div>
</div>
</div>
<div className="RightPortion grid grid-cols-1 md:grid-cols-2 md:px-12 ">
<div className="">
<div className="card1 px-8 lg:px-4 md:px-4 py-6 text-white">
  <p className=' text-4xl border-2 border-sky-600 w-fit p-2'><FaRunning className=''/></p>
  <h2 className='uppercase text-lg font-semibold pt-2'>Boost your work</h2>
  <p className='text-base font-light mt-1'>Unreveal provides the best quality photos that can be used in your work either it is a project or your website.</p>
</div>
<div className="card2 px-8 lg:px-4 md:px-4 py-6 text-white">
  <p className=' text-4xl border-2 border-sky-600 w-fit p-2'><GiJumpAcross className=''/></p>
  <h2 className='uppercase text-lg font-semibold pt-2'>highly trusted contributors</h2>
  <p className='text-base font-light mt-1'>Unreveal has 1 hundred plus contributors from all around the world and take care about your desires that you expect with Unreveal’s creators.</p>
</div>
</div>
<div className="">
<div className="card3 px-8 lg:px-4 md:px-4 py-6 text-white">
  <p className=' text-4xl border-2 border-sky-600 w-fit p-2'><GiTimeTrap className=''/></p>
  <h2 className='uppercase text-lg font-semibold pt-2'>ultra optimized and quantized</h2>
  <p className=' font-light mt-1'>We have sources and tools to generate a photo that fit your understanding and make sure the photo is the Best one.</p>
</div>
<div className="card4 px-8 lg:px-4 md:px-4 py-6 text-white">
  <p className=' text-4xl border-2 border-sky-600 w-fit p-2'><GiPriceTag className=''/></p>
  <h2 className='uppercase text-lg font-semibold pt-2'>zero cost</h2>
  <p className='text-base font-light mt-1'>We provide all the best quality images for free to all users and let them to use it anywhere without any restrictions.</p>
</div>
</div>

</div>

</div>
        
    </div>

    </>
  )
}
