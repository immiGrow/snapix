import React from 'react'

export default function CltnUI({ctn}) {
    // console.log("check",ctn.Images[0].ImageId.url)
 
      
  return (
    // <div>{ctn.title}</div>
    <>
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container mx-auto">
   
    <div className="flex flex-wrap w-full cursor-pointer">
      <div className=" w-full">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-10 md:h-12 object-cover object-center rounded-md" src={ctn.cover_images.length>0?ctn.cover_images[0].source:"https://res.cloudinary.com/unreveal/image/upload/v1680340133/pexels-photo-963486_chiloh.jpg"}/>
          <div className="h-10 md:h-12 flex justify-center relative z-10 w-full bg-black bg-opacity-0 opacity-0 hover:bg-opacity-40 hover:opacity-100">
            <div className="">
            <h2 className=" text-xs md:text-sm title-font px-2 text-center font-semibold text-white mb-1">{ctn.title}</h2>
            <div className=" text-xs md:text-sm text-center title-font font-semibold text-white mb-1">
                {ctn.Images.length} Photos
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
