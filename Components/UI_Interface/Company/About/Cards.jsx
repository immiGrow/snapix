import React from 'react'

import Image from 'next/image'
export default function Cards() {
  return (
    <>
    
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6 lg:px-16 md:px-4 py-12">

    <div className="w-full px-8 py-8 md:px-0 md:py-0">
  <Image width={800} height={500} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877600/curate_wyg35o.jpg"} className="w-full h-64  object-cover md:h-72 lg:h-80" alt="curated" />
  <h2 className=' text-lg font-semibold pt-2'>Over more than 3 million curated photos</h2>
  <p className='text-sm  mt-1'>We hand-select every photo and accept only the best, so that no matter what you need—you’ll find exactly what you’re looking for on Unreveal.

</p>
</div>
    <div className="w-full px-8 py-8 md:px-0 md:py-0">
  <Image width={800} height={500} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877586/community_rutatu.jpg"} className="w-full  object-cover h-64 md:h-72 lg:h-80" alt="photo" />
  <h2 className=' text-lg font-semibold pt-2'>A community of 2,36,945 photographers</h2>
  <p className='text-sm  mt-1'>Unreveal is home to a growing community of photographers—from hobbyists, professionals, emerging brands and everyone in between.

</p>
</div>
    <div className="w-full px-8 py-8 md:px-0 md:py-0">
  <Image width={800} height={500} src={"https://res.cloudinary.com/unreveal/image/upload/v1678877597/fuel_kojugm.jpg"} className="w-full h-64  object-cover md:h-72 lg:h-80" alt="fuel" />
  <h2 className=' text-lg font-semibold pt-2'>Fuelling your favourite platforms</h2>
  <p className='text-sm  mt-1'>With partners like BuzzFeed, Squarespace and Trello being powered by our API, the Unreveal library is more widely accessible than ever.

</p>
</div>

    </div>
    
    </>
  )
}
