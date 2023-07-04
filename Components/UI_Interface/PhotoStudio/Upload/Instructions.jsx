import Link from 'next/link'
import React from 'react'
// import TextBolder from '../../Files/TextBolder'
import {HiCheckCircle} from 'react-icons/hi'

export default function Instructions() {
  return (
    <>
    
    <section className="text-black body-font">
  <div className="container px-5 pb-24 mx-auto">
    
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  -mx-2">
      <div className="lg:p-2  w-full">
        <div className=" rounded flex space-x-2 p-4 h-full  items-center">
          <HiCheckCircle className="text-green-700 text-lg"/>
          <span className="title-font "><span className='font-semibold'>Original  </span> content that you owns</span>
        </div>
      </div>
      <div className="lg:p-2  w-full">
        <div className=" rounded flex space-x-2 p-4 h-full items-center">
           <HiCheckCircle className="text-green-700 text-lg"/>
          <span className="title-font ">Avoid <span className='font-semibold'>Violence  </span> or Hate</span>
        </div>
      </div>
      <div className="lg:p-2  w-full">
        <div className=" rounded flex space-x-2 p-4 h-full items-center">
           <HiCheckCircle className="text-green-700 text-lg"/>
          <span className="title-font "><span className='font-semibold'>High Quality  </span> Photos</span>
        </div>
      </div>
      <div className="lg:p-2  w-full">
        <div className=" rounded flex space-x-2 p-4 h-full items-center">
           <HiCheckCircle className="text-green-700 text-lg"/>
          <span className="title-font ">Freely <span className='font-semibold'>Useable  </span> Photos</span>
        </div>
      </div>
      <div className="lg:p-2  w-full">
        <div className=" rounded flex space-x-2 p-4 h-full items-center">
           <HiCheckCircle className="text-green-700 text-lg"/>
          <span className="title-font ">Can be <span className='font-semibold'>Downloaded  </span> Easily</span>
        </div>
      </div>
      <Link href={"/photostudio/uploading_guidelines"}><div className="lg:p-2  w-full">
        <div className=" rounded flex space-x-2 p-4 h-full items-center">
           <HiCheckCircle className="text-green-700 text-lg"/>
          <span className="title-font ">Read <span className="hover:cursor-pointer font-semibold border-dashed border-b border-black">Unreveal Guidelines</span></span>
        </div>
      </div></Link>
    </div>

  </div>
</section>
    
    </>
  )
}
