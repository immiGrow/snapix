import Link from 'next/link'
import React from 'react'
import baseUrl from '../../../mongodb/baseUrl'
import Image from 'next/image'
export default function RelatedPhoto({relPh}) {

    const incViews=async(imageId)=>{
        const req=await  fetch(`${baseUrl}/api/interaction/view`,{
          method:"PUT",
          headers:{
        
            "Content-Type": "application/json"
          },
          body:JSON.stringify({
            photoId:imageId
        
        })
        }
        )
        const res=await req.json()
        console.log("The views",res)
          }
        
// Fix the issue of user login and sign up  and change the ( State of Collection, Likes and Views )         

  return (
    <>
    
    <div className="px-4 flex justify-center w-full">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
    {
        relPh && relPh.map((image)=>{
            const imageId=String(image._id)
            return(
                <>
<div key={imageId} className="">
 <Link href={`/photo/${imageId}`}><Image onClick={incViews(imageId)} width={500} height={300} src={image.url} className="w-full h-44 md:h-72 object-cover object-center hover:opacity-90" alt={image.title} /></Link>   

</div>

                </>
            )
        })
    }
    </div>
    </div>
    </>
  )
}
