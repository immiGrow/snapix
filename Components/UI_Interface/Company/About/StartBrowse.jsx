import React from 'react'
import { useRouter } from 'next/router'
import { BsArrowRightShort } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
export default function StartBrowse() {
  const router=useRouter()
  return (
    <>
    
    <div className="md:flex md:py-12">

<div className="stanzas px-4 space-y-4 md:space-y-8 md:py-16 lg:py-36 lg:px-16 py-8">
    <h1 className='font-bold text-2xl py-4 md:text-4xl'>Photos for everyone</h1>
    <p className='font-semibold text-slate-700'>Over 3 million free high-resolution images brought to you by the world’s most generous community of photographers.</p>
    <div className="buttons space-x-1 min-[425px]:space-x-2 md:space-x-3 flex flex-wrap text-sm  space-y-2 min-[375px]:space-y-0">
    <button onClick={()=>router.push("/")} className='group flex justify-center items-center space-x-2 bg-black rounded-sm py-2 px-3 font-semibold border-2 border-black text-white'><span>Start Browsing</span><span className='group-hover:translate-x-2 transition-all duration-200 ease-out'><BsArrowRightShort/></span></button>
    <Link href="/photostudio/preupload"><button className='group flex justify-center items-center space-x-2 bg-white rounded-sm py-2 px-3 font-semibold border-2 border-black text-black'><span>Become a contributor</span><span className='group-hover:translate-x-2 transition-all duration-200 ease-out'><BsArrowRightShort/></span></button></Link>

    </div>
</div>
<div className="images py-12 grid grid-cols-2 px-4 space-x-4 space-y-4 lg:px-16">

<Image width={500} height={400} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877605/img3_bklcuv.jpg"} className="w-full  rounded-lg shadow-xl lg:h-72  h-56 object-cover" alt="image" />
<Image width={500} height={400} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877684/str1_avaelc.jpg"} className="w-full   rounded-lg shadow-xl lg:h-72 h-56 object-cover" alt="image" />
<Image width={500} height={400} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877639/str2_itqbxq.jpg"} className="w-full rounded-lg shadow-xl  lg:h-72 h-56 object-cover" alt="image" />
<Image width={500} height={400} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877642/str3_i5igqq.jpg"} className="w-full   rounded-lg shadow-xl lg:h-72 px-4 h-56 object-cover" alt="image" />


</div>


    </div>

    </>
  )
}
