import Image from 'next/image'
import React from 'react'

export default function CtnView({ctn}) {
  // console.log("The ctn",ctn)
  // Add blurhash to Images ---> ONLY THIS FIRST
  // Fix all the UI related pages and related to APIs
  return (
    <>
  

  
  <div className="relative w-full">
    
<Image width={600} height={200} src={ctn.Images[0].ImageId.url}   className='w-full  relative h-60 opacity-20 object-cover object-center' alt="cover" />
    <div  className="w-full absolute top-8 left-4 z-10 space-y-4 px-4">
    <h2 className='text-4xl font-bold'>{ctn.title}</h2>
    <p className='text-lg font-semibold'>{ctn.description}</p>
    <div className="flex items-center space-x-3">
        {/* <Image width={50} height={50} src={} className="w-12 md:w-16 rounded-full" alt="progika" /> */}
        <p>{ctn.user.name}</p>
    </div>
    </div>

    </div>
    </>
  )
}
