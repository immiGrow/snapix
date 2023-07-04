import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import img1 from '../../../Images/img1.jpg'
// import img2 from '../../../Images/img2.jpg'
export default function Eachview({view}) {
    // console.log(view)
  return (
    <>
    <div className="">
    <Link href={`/category/${view.text}`}><div className="eachview  relative w-full h-72 lg:h-96 group">
<div className="image relative w-full h-full  ">
    <Image width={1280} height={800} src={view.photo} className="w-full h-full object-center  object-cover rounded-md"  alt={view.path} />
</div>
<div className="write absolute top-0 text-xl font-bold text-white bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-200 ease-in bg-black w-full h-full flex justify-center items-center "><p>{view.text}</p></div>
</div>
</Link>
</div>
    </>
  )
}
