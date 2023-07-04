import React,{useState} from 'react'
import CounterUp from "react-countup"
import ScrollTrigger from 'react-scroll-trigger'
import {IoMdPersonAdd,IoMdPhotos} from "react-icons/io";
import {BsFillEyeFill} from "react-icons/bs";
// import products from "../../Images/products.svg";


export default function CounterUpPage() {

    const [counterOn, setCounterOn] = useState(false)

  return (
    <>
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}> 
{counterOn &&
    <div className='flex justify-end py-4  px-4 space-x-8'>
    {/* <h1 className=''>
        <CounterUp start={0} end={650} duration={3}/>
    </h1> */}
    <div className="">
        {/* <img src={customers.src} className="w-12 h-6 lg:w-28 lg:h-20 sm:w-16 sm:h-8 md:w-20 md:h-12" alt="" /> */}
        <div className="text-2xl md:text-4xl text-center text-slate-700">
            <IoMdPersonAdd/>
        </div>
        <h1 className='font-extrabold text-lg lg:text-3xl text-darkblue '><CounterUp start={0} end={323} duration={3}/>k+</h1>
        <p className='text-sm font-bold uppercase'>Contributors</p>
    </div>
    <div className="2">
        {/* <img src={review.src} className="w-12 h-6 lg:w-28 lg:h-20 sm:w-16 sm:h-8 md:w-20 md:h-12" alt="" /> */}
        <div className="text-2xl md:text-4xl text-center text-slate-700">
            <IoMdPhotos/>
        </div>
        <h1 className='font-extrabold text-lg lg:text-3xl text-darkblue '><CounterUp start={0} end={440} duration={3}/>k+</h1>
        <p className='text-sm font-bold uppercase'>Images</p>
    </div>
    <div className="3">
        {/* <img src={products.src} className="w-12 h-6 lg:w-28 lg:h-20 sm:w-16 sm:h-8 md:w-20 md:h-12" alt="" /> */}
        <div className="text-2xl md:text-4xl text-center text-slate-700">
        <BsFillEyeFill/>
        </div>
        <h1 className='font-extrabold text-lg lg:text-3xl text-darkblue '><CounterUp start={0} end={80} duration={3}/>k+</h1>
        <p className='text-sm font-bold uppercase'>Reviews</p>
    </div>
</div>
}

        </ScrollTrigger>

    </>
  )
}
