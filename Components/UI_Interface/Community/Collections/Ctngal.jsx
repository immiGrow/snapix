import React from 'react'
import Image from 'next/image'
export default function Ctngal() {
  return (
    <>
    
    <div className="md:flex md:py-12">

<div className="stanzas px-8  space-y-4 md:space-y-8 xl:px-16 py-24">
    <h1 className='font-bold text-3xl py-4 md:text-4xl'>Collections</h1>
    <p className='font-semibold w-full text-slate-700 '>Explore the world with your immeasurable creativity with Unreveal Collections.</p>

</div>
<div className="images py-12 grid grid-cols-2 px-4 space-x-4 space-y-4 md:px-8 lg:px-12">

<Image width={800} height={600} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877601/ctn3_zgi1ky.jpg"} className="w-full rounded-lg shadow-xl bg-slate-700 bg-opacity-10  lg:h-80  h-56 object-cover" alt="collections" />
<Image width={800} height={600} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877679/reach_fjo9v2.jpg"} className="w-full  rounded-lg shadow-xl bg-slate-700 bg-opacity-10 lg:h-80  opacity-80  h-56 object-cover" alt="collections" />
<Image width={800} height={600} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877588/ctn1_xr8ccf.jpg"} className="w-full rounded-lg shadow-xl bg-slate-700 bg-opacity-10  lg:h-80 opacity-70  h-56 object-cover" alt="collections" />


</div>


    </div>

    </>
  )
}
