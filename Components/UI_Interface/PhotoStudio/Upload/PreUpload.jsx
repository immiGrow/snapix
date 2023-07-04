import Link from 'next/link'
import React from 'react'

// Uploading section, Notification and Leadership Then cleaning of wesbite after that deployement. 
export default function PreUpload({images,token}) {
    
  return (
    <>
    <div className="relative overflow-hidden bg-white">
  <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div className="sm:max-w-lg">
        <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Impact on the people with your creativity</h1>
        <p className="mt-4 text-xl text-gray-500">This will lead many people to look up at your creativity by uploading high resolution images.</p>
      </div>
      <div>
        <div className="mt-10">

          <div ariaHidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  {images.length>0 && <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                    <img src={images[0].url} alt={images[0].title} className="h-full w-full object-cover object-center"/>
                  </div>}
                 {images.length>1 && <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src={images[1].url} alt={images[1].title} className="h-full w-full object-cover object-center"/>
                  </div>}
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  {images.length>2 && <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src={images[2].url} alt={images[2].title} className="h-full w-full object-cover object-center"/>
                  </div>}
                 {images.length>3 && <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src={images[3].url} alt={images[3].title} className="h-full w-full object-cover object-center"/>
                  </div>}
                 {images.length>4 && <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src={images[4].url} alt={images[4].title} className="h-full w-full object-cover object-center"/>
                  </div>}
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                 {images.length>5 && <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src={images[5].url} alt={images[5].title} className="h-full w-full object-cover object-center"/>
                  </div>}
                 {images.length>6 && <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src={images[6].url} alt={images[6].title} className="h-full w-full object-cover object-center"/>
                  </div>}
                </div>
              </div>
            </div>
          </div>

          <Link href={!token?"/user/login":"/photostudio/upload"}><div className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">Upload Now</div></Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
