import React from 'react'
import Image from 'next/image'

export default function ImagesDesign({dsImgs}) {
  return (
    <>
    
    <h1 className='text-black font-bold text-3xl text-center'>PHOTOS OF OUR <span className='text-indigo-700 '>CONTRIBUTORS</span></h1>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto flex flex-wrap">
    
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <Image width={1000} height={800} alt="gallery" className="w-full object-cover h-full object-center block" src={dsImgs[0].url}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image width={1000} height={800} alt="gallery" className="w-full object-cover h-full object-center block" src={dsImgs[1].url}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <Image width={1000} height={800} alt="gallery" className="w-full h-full object-cover object-center block" src={dsImgs[2].url}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image width={1000} height={800} alt="gallery" className="w-full h-full object-cover object-center block" src={dsImgs[3].url}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image width={1000} height={800} alt="gallery" className="w-full object-cover h-full object-center block" src={dsImgs[4].url}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image width={1000} height={800} alt="gallery" className="w-full object-cover h-full object-center block" src={dsImgs[5].url}/>
        </div>
      </div>
    </div>
  </div>
</section>
  

    </>
  )
}
