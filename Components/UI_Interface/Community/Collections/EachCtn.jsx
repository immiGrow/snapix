import React from 'react'


import {useRouter} from 'next/router'
import { ReactPhotoCollage } from "react-photo-collage";

export default function EachCtn({ctn}) {
  // console.log("The ctns",ctn[0])
  const router=useRouter()
  // console.log("The ctns image url",ctn.Images[0].ImageId.url)
  // Now start constructing JOIN THE TEAM page ---> 26/02/2023
  const setting = {
    width: '300px',
    height: ['350px', '75px'],
    layout: [1, 3],
    photos:ctn.cover_images,
    showNumOfRemainingPhotos: false
  };
  return (
    <>
    
            <div className="w-full  md:px-0 md:py-0 opacity-100 hover:opacity-90">
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
    {/* <Image width={300} height={200} src={ctn.} className="w-full   h-64 lg:h-80 xl:h-96  object-cover rounded-md" alt={ctn.title} /> */}
    <div className="rounded-md">
{/* <img src={curate.src} alt="cltn" /> */}
<ReactPhotoCollage className="rounded-md" {...setting} />
{/* <ReactCollage width={"300"} height={"350"} photos={ctn.cover_images}/> */}
    </div>
    <div onClick={()=>router.push(`/collections/${ctn._id}`)} className="">
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

    </>

  )
}
