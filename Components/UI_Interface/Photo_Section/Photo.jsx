import React,{useState,useEffect} from 'react'
import { parseCookies } from 'nookies'
import { BsFillEyeFill } from 'react-icons/bs'
import {AiOutlineAppstoreAdd, AiFillHeart} from 'react-icons/ai'

import Link from 'next/link'
import Image from 'next/image'

import { Blurhash } from "react-blurhash";
import baseUrl from '../../../mongodb/baseUrl'

export default function Photo({image,deviceWidth,deviceHeight}) {
  const imageWidth=image.width
  const imageHeight=image.height
  const aspectRatio=(imageWidth/imageHeight)
  // console.log("the width ",image.width,"height ",image.height,"aspect Ratio",aspectRatio,"the device width according ",deviceWidth/3.36,"then height is what ",1/aspectRatio*(deviceWidth/3.36))
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
  image.onload=()=>{
    console.log("image has loaded",image._id)
  }
  
  })
  const {token}=parseCookies()
  
  const imageStateHolder=()=>{
setLoaded(true)
  }
  const incViews=async()=>{
const req=await  fetch(`${baseUrl}/api/interaction/view`,{
  method:"PUT",
  headers:{
    "Authorization":token,
    "Content-Type": "application/json"
  },
  body:JSON.stringify({
    photoId:image._id

})
}
)
const res=await req.json()
console.log("The views",res)
  }

  return (
    <>
    <div onClick={incViews} className="Photo relative group w-fit">
 <Link href={`/photo/${image._id}`}>
  
 <div className="eachview  relative w-full ">
<div className="image relative w-full  h-full ">
    {/* <img src={view.photo.src} className="w-full h-full  object-cover rounded-md"  alt="" /> */}
    <Image 
 className=" relative group-hover:opacity-90 " 
// className='relative group-hover:opacity-90 opacity-100 w-full rendering-img object-cover'
width={500} height={600}
// placeholder="blur"
// blurDataURL={image.blur_hash}
onLoad={imageStateHolder}
 src={image.url} alt={image.user.username} />
</div>
<div className="write absolute top-0   font-bold text-white  bg-opacity-5 group-hover:bg-opacity-10 transition-opacity duration-200 ease-in bg-black w-full  h-full flex justify-center items-center ">
 { !loaded &&
 <div className="w-full ">
  <Blurhash
  hash={image.blur_hash}
  width={deviceWidth>425?deviceWidth/3.17:deviceWidth/2.14}
  // height={aspectRatio*(deviceWidth/3.36)}
  height={deviceWidth>425?1/aspectRatio*(deviceWidth/3.15):1/aspectRatio*(deviceWidth/2.16)}
  resolutionX={4}
  resolutionY={4}
  className="relative  h-full w-full"
  punch={1}
/> 
</div>
}

</div>
</div>
 
 
 

  </Link>

 <div className="tabDown absolute bottom-0 hidden group-hover:flex  justify-between items-center w-full px-2 pb-1 bg-black text-white bg-opacity-20 hover:cursor-pointer pt-1">
   <Link href={token?`/userphotos/${image.user._id}`:"/user/login"}><div
    // styles={{backgroundImage:`url(${image.blur_hash})`}} 
    className="flex items-center space-x-2 ">
   <Image
   width={50}
   height={40} 
    src={image.user.profile_image || "https://res.cloudinary.com/unreveal/image/upload/v1678877614/profile_agyzhd.png" }
    className="w-8 h-8 rounded-full object-top object-cover bg-white"
    // placeHolderSrc={image.blur_hash}
    
    
    alt={"hello"} />
    <p>{image.user.username}</p>
   </div></Link>
    
    <div className="flex space-x-4 items-center ">

    <span className='flex justify-between items-center text-red-700 space-x-2'><AiFillHeart/><p className='text-sm text-white'>{image.likes.length}</p></span>
    <span className='flex justify-between items-center space-x-2'><BsFillEyeFill/><p className='text-sm'>{image.views}</p></span>
    <span><AiOutlineAppstoreAdd/></span>
    </div>

    
 </div>

</div>
{/* <h1>{image.user.name}</h1> */}
      </>
  )
}
