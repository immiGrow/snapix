import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { parseCookies } from 'nookies'

export default function EachCtPhoto({image,heading}) {
  console.log("The image",image)
  const{token}=parseCookies()
  return (
    <>
  
   <div  className="w-full  relative ">
      <div  className=" flex justify-center w-full relative  ">

<div
//  styles={{backgroundImage:`url(${image.blur_hash})`}}
  className="w-full relative ">
  
<Image width={600} height={500} src={image[0].url}   className='w-full relative lg:h-[36rem] h-96 md:h-[32rem] object-cover object-center' alt={heading} />

</div>
    </div>
   
    </div>

    <div  className="w-full top-24 h-2/3 md:top-40 lg:top-56 md:w-5/6 md:ml-12  px-8 lg:px-24   absolute z-10 ">
 <div className=" ">
      <div className=" text-white space-y-16 ">
     <h1 className=' text-2xl md:text-5xl font-bold py-4 capitalize'>{heading}</h1>
     <span className=''>

      <p  className='font-semibold   '>Let the world know about your undending creativity,</p>
      <p  className='font-semibold   '>Powered by creators everywhere,</p>
      <div className="pt-16">

      <Link href={!token?"/user/login":"/photostudio/preupload"}><button className='px-4 py-2 rounded-md text-center bg-white text-slate-700'>
        Submit to <span className='capitalize text-black font-semibold'>{heading}    </span>
      </button></Link>
      </div>
     </span>
    {/* <SearchHeader/> */}
    {/*Image Information Banner */}
    <div className="absolute -z-10   md:w-full w-5/6 ">
      <div className="flex justify-between items-center w-full text-sm">
      <div className="flex items-center space-x-2"> 
        <span className="">Captured By </span>
<Image width={50} height={50} src={image[0].user.profile_image} className="w-12 h-12 rounded-full object-top object-cover" alt={image[0].user.firstName} />
      <span className=''>{image[0].user.username}</span>
      </div>
      </div>
    </div>
      </div>
      </div>
    </div>
    
    </>
  )
}
