import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { ReactPhotoCollage } from "react-photo-collage";

export default function RelatedCollections({relctn}) {
    const router=useRouter()
    const incViewCltn=async(ctnId)=>{
        const req=await  fetch(`${baseUrl}/api/interaction/ctnview`,{
          method:"PUT",
          headers:{

            "Content-Type": "application/json"
          },
          body:JSON.stringify({
            photoId:ctnId
        
        })
        }
        )
        const res=await req.json()
        console.log("The views of ctn",res)
        router.push(`/collections/${ctnId}`)
          }

  return (
    <>
    <div className="flex justify-center w-full ">
    <div className="grid grid-cols-1 py-2  md:grid-cols-2 md:gap-x-6 md:gap-y-4 md:px-4 lg:grid-cols-3 lg:gap-x-28 xl:grid-cols-4  text-slate-700 font-semibold ">
        

{
    relctn.map((ctn,index)=>{
        const ctnId=String(ctn._id)
        // console.log("The related cltn is ",ctn)
        const setting = {
            width: '300px',
            height: ['300px', '75px'],
            layout: [1, 3],
            // photos: [
            //   { source: cont1.src },
            //   { source: cont2.src },
            //   { source: cont3.src },
            //   { source: cont4.src },
            //   { source: anim.src },
            //   { source: arc.src },
            // ],
            photos:ctn.cover_images,
            showNumOfRemainingPhotos: true
        };
    

        return(
            <div  key={ctnId} className="w-full hover:cursor-pointer hover:opacity-90 px-4 py-2 md:px-0 md:py-0">
                {/* {
                    ctn.preview_photos.map((previmg,index)=>{
                        return(

                            // <div key={previmg.id} className="">
                            //     <Collected previmg={previmg}/>
                            // </div>
                            <div key={previmg.id} className="flex w-fit">
                                <img src={previmg.urls.small}  className="w-3/12 rounded-md" alt="" />

                            </div>
                        )
                    })
                } */}
                <div className="w-full">

                    <ReactPhotoCollage {...setting} className="" />
                </div>

    {/* <img width={400} height={300} src={img.src} className="w-full h-48 lg:h-60 xl:h-80  object-cover rounded-md" alt={ctn.title} /> */}
    <div onClick={()=>incViewCltn(ctnId)} className="w-full ">

  <h2 className=' text-lg font-bold text-black pt-2 pl-2 w-full'>{ctn.title}</h2>
  <p className='pl-2 font-normal w-full'>{ctn.Images.length} Photos Curated By <span className='hover:underline hover:text-black'>{ctn.curatedBy}</span></p>
    </div>
  {/* <div className="tags grid gap-x-3 gap-y-2 pl-2 py-1 w-fit grid-cols-3 items-center">
{
    ctn.tags.map((tag,index)=>{
        return(
            <div key={index} className=" list-none font-normal text-sm">

<li className='bg-slate-200 px-1'>{tag.title}</li>
            </div>
        )
    })
}
  </div> */}
</div>
        )
    })
}



</div>
    </div>
    
    </>
  )
}
