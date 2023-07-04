import React from 'react'
import Image from 'next/image'
import {BsArrowRightShort} from 'react-icons/bs'
export default function Trendgal() {
  return (
    <>
    
    <div className="md:flex md:py-12">

<div className="stanzas px-8 space-y-4 md:space-y-8 xl:px-16 py-24">
    <h1 className='font-bold text-3xl py-4 md:text-4xl'>Trends</h1>
    <p className='font-semibold lg:w-5/6 xl:w-3/5 text-slate-700'>Unreveal has invited millions of people to start either they have no premonition, with knowing about the trends that going on.</p>
    <div className="buttons space-x-4 flex ">
    <button className='group flex justify-center items-center space-x-2 bg-black rounded-md py-2 px-3 font-semibold border-2 border-black text-white'><span>Creators everywhere</span><span className='group-hover:translate-x-2 transition-all duration-200 ease-out'><BsArrowRightShort/></span>  </button>
        </div>
</div>
<div className="images py-12 grid grid-cols-2 px-4 space-x-4 space-y-4 md:px-8 lg:px-12">

<Image width={600} height={400} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877658/trend3_kpundi.jpg"} className="w-full rounded-lg shadow-xl  lg:h-72   h-56 object-cover" alt="trends" />
<Image width={600} height={400} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877656/trend1_rvcqfm.jpg"} className="w-full  rounded-lg shadow-xl lg:h-72  opacity-80  h-56 object-cover" alt="trends" />
<Image width={600} height={400} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877658/trend2_ljjppn.jpg"} className="w-full rounded-lg shadow-xl  lg:h-72 opacity-70  h-56 object-cover" alt="trends" />


</div>


    </div>

    </>
  )
}
