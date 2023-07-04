import React from 'react'

import { useRouter } from 'next/router'
import { ReactPhotoCollage } from "react-photo-collage";
import Link from 'next/link'
export default function MyCollections({cltn}) {
  // console.log("the collection is",cltn)
const router=useRouter()
  
  
  return (
    <>
   {cltn.length>0? <div className="flex justify-center w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-6 md:gap-y-4 md:px-4 py-2 text-slate-700 font-semibold">
        

{
    cltn.map((ctn,index)=>{
        const ctnId=String(ctn._id)
        console.log("The related cltn is ",ctn)
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
            showNumOfRemainingPhotos: false
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
                <div className="">

                    <ReactPhotoCollage {...setting} className="" />
                </div>

    {/* <img width={400} height={300} src={img.src} className="w-full h-48 lg:h-60 xl:h-80  object-cover rounded-md" alt={ctn.title} /> */}
    <div onClick={()=>router.push(
                {
                    pathname:`/collections/${ctnId}`
                }
            )} className="">

  <h2 className=' text-lg font-bold text-black pt-2 pl-2'>{ctn.title}</h2>
  <p className='pl-2 font-normal'>{ctn.Images.length} Photos Curated By <span className='hover:underline hover:text-black'>{ctn.curatedBy}</span></p>
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
    </div>:
   <main className="grid min-h-full place-items-center bg-white py-6 px-6 sm:py-8 lg:px-8">
   <div className="text-center">
 
     <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">No Collections Found</h1>
     <p className="mt-6 text-base leading-7 text-gray-600">Let&apos;s explore other photographers collections.</p>
     <div className="mt-10 flex items-center justify-center gap-x-6">
       <Link href={"/"}><button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let&apos;s go {" "} &rarr;</button></Link>
     </div>
   </div>
 </main>
    }
    </>
  )
}
