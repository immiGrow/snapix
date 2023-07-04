import Image from 'next/image'
import React from 'react'

export default function ImageFlow({images}) {
  return (
    <>
    
     <div className="slider">
        <div className="slide-track render-div">
            {
               images && images.map((image,index)=>{
                    return(

<div key={index} className="slide w-full">
    <Image width={200} height={150} src={image.url} className="img w-full h-72 object-center object-cover" alt={image.title} />
</div>
                    )
                })
            }



        </div>
    </div> 


    </>
  )
}

