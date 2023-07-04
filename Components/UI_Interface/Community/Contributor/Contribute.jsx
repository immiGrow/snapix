import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'
export default function Contribute() {
  return (
    <>
    
    <div className="md:flex md:py-12">

<div className="stanzas px-8 space-y-4 md:space-y-8 xl:px-16 py-24">
    <h1 className='font-bold text-2xl py-4 md:text-4xl'>Contribute today</h1>
    <p className='font-semibold lg:w-5/6 xl:w-3/5 text-slate-700'>Share your images with millions of people around the world. Over 20 thousands photographers has already contributed, YOU ARE THE NEXT,</p>
    <Link href={"/photostudio/preupload"}><div className="buttons space-x-4 py-4 flex ">
    <button className='group flex justify-center items-center space-x-2 bg-black rounded-md py-2 px-3 font-semibold border-2 border-black text-white'><span>Upload your images</span><span className='group-hover:translate-x-2 transition-all duration-800 ease-out'><BsArrowRightShort/></span>  </button>
        </div></Link>
</div>
<div className="images py-12 grid grid-cols-2 px-4 space-x-4 space-y-4 md:px-8 lg:px-12">

<Image width={1000} height={800} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877582/cont3_f9bkbh.jpg"} className="w-full rounded-lg shadow-xl  lg:h-72   h-56 object-cover" alt="contribute" />
<Image width={1000} height={800} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877581/cont1_fezmym.jpg"} className="w-full  rounded-lg shadow-xl lg:h-72  opacity-80  h-56 object-cover" alt="contribute" />
<Image width={1000} height={800} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877580/cont2_jzqei6.jpg"} className="w-full rounded-lg shadow-xl  lg:h-72 opacity-70  h-56 object-cover" alt="contribute" />
<Image width={1000} height={800} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877588/cont4_f59bxf.jpg"} className="w-full  rounded-lg shadow-xl  lg:h-72  px-4 h-56 object-cover" alt="contribute" />


</div>


    </div>

    </>
  )
}
