import React from 'react'

import {BsArrowRightShort} from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

export default function Hire() {
  return (
    <>
    
    <div className="md:flex md:py-12 lg:px-16">

<div className="stanzas px-4 space-y-4 md:space-y-8 py-8 lg:px-8 lg:py-24">
    <h1 className='font-bold text-2xl py-4 md:text-4xl'>Join the Unreveal’s team, 
    <br /> from anywhere</h1>
    <p className='font-semibold text-slate-700 w-3/4'>Help us to improve the shape of freely usable images and provide your skills to millions of users - powered by millions of creators around the world.
</p>
    <div className="buttons space-x-4 group w-fit">
    <Link href={"/Company/reach"}><button className='flex w-fit justify-center items-center space-x-2 bg-black rounded-md py-2 px-3 font-semibold border-2 border-black text-white'><span>See Opportunities</span><span className='group-hover:translate-x-2 transition-all duration-400 ease-out'><BsArrowRightShort/></span>  </button></Link>

    </div>
</div>
<div className="images py-12 grid grid-cols-2 px-4 space-x-4 space-y-4">


<Image width={600} height={400} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877651/team3_zrm9jt.jpg"} className="w-full rounded-lg shadow-xl   h-56 object-cover" alt="image" />
<Image width={600} height={400} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877643/team1_mrsj4u.jpg"} className="w-full  rounded-lg shadow-xl opacity-70 h-56 object-cover" alt="image" />
<Image width={600} height={400} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877646/team2_znhdry.jpg"} className="w-full rounded-lg shadow-xl opacity-80  h-56 object-cover" alt="image" />
<Image width={600} height={400} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877650/team4_tivywj.jpg"} className="w-full  rounded-lg shadow-xl  px-4 h-56 object-cover" alt="image" />


</div>


    </div>

    </>
  )
}
