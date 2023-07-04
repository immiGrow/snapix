import React,{useState,useEffect} from 'react'
import {AiFillHeart,AiOutlineAppstoreAdd} from 'react-icons/ai'
import {HiFolderDownload} from 'react-icons/hi'
import { createApi } from 'unsplash-js'
import CltnModal from '../Modals/CltnModal';
import baseUrl from '../../../mongodb/baseUrl';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';
import Link from 'next/link';

const unsplash=createApi(
  {
    accessKey:"nK0EaJIVlAaP23yg9g-2vunzoTY1W0-entaxlUQ8fcU"
  }
);

export default function Nav({photo,userCltns,setUserCltns,liked,setLiked,setShowModal}) {

  const router=useRouter()

  const {token}=parseCookies()
// const [liked, setLiked] = useState(false)
  const [modal, setModal] = useState(false)

  const  handleCondit = async (pictureUrl,name) => {
    // console.log(pictureUrl)
    const response = await fetch(pictureUrl);
    response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = name;
        a.click();
    })
    // await setShowThank(true)
  };

  const downloadPhoto=async()=>{
    console.log("Downloading started")
    setShowModal(true)
    const send=await fetch(`${baseUrl}/api/interaction/download`,{
      method:"PUT",
      headers:{

        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        photoId:photo._id
      })
    })
    const recieve=await send.json()
    if(recieve.success){
      await handleCondit(photo.url,photo.title)
      console.log("Photo has downloaded")
    }
    else{
      alert("Error with downloading the photo")
    }

}



  
  const likePhoto=async()=>{
  if (!liked){
    const req=await  fetch(`${baseUrl}/api/interaction/like`,{
      method:"PUT",
      headers:{
        "Authorization":token,
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        photoId:photo._id
    
    })
    }
    )
    const res=await req.json()
    if(res.success){

      console.log("The like",res)
      setLiked(true)
    }
    else{
      alert(res.message)
    }
    // console.log("The like",res)
      }
  else{
    console.log("The photo is already liked")
    setLiked(false)
  }
  }

const dislikePhoto=async()=>{
  if(liked){
    const req=await  fetch(`${baseUrl}/api/interaction/like`,{
      method:"DELETE",
      headers:{
        "Authorization":token,
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        photoId:photo._id
    
    })
    }
    )
    const res=await req.json()
    console.log("The dislike",res)
    setLiked(false)
  }
else{
  console.log("the photo is already disliked")
  setLiked(true)
}
 
}
  

  return (
    <>
    
    <div className="bg-white w-full px-4 py-2 ">

        <div className="flex justify-between items-center w-full">
<div className="flex items-center w-full space-x-2">
<Link href={`/userphotos/${photo.user._id}`}><img src={photo.user.profile_image} className="w-12 hover:opacity-90 h-12 xl:h-16 object-top xl:w-16 rounded-full  object-cover" alt={photo.user.username} /></Link>
<p className='text-slate-700 text-sm md:text-base'>{photo.user.username}</p>
</div>

<div className="flex items-center text-slate-600 space-x-3 text-lg xl:text-2xl md:space-x-6 md:text-xl">
  <div className="">
    {
      liked?
      <div onClick={token?dislikePhoto:()=>router.push("/user/login")} className="cursor-pointer text-red-700"><AiFillHeart/></div>:
      <div onClick={token?likePhoto:()=>router.push("/user/login")} className="cursor-pointer hover:text-red-700"><AiFillHeart/></div>
    }
 </div>
<span onClick={token?()=>setModal(true):()=>router.push("/user/login")} className='text-slate-700 hover:text-black cursor-pointer'>
    <AiOutlineAppstoreAdd/>
</span> 
<button onClick={downloadPhoto}  className='flex bg-slate-200 justify-center items-center space-x-2 border-2 hover:text-slate-700 border-slate-700 text-slate-700 rounded-md px-1'>
<span className='text-base hidden md:block'>Download</span>
<span><HiFolderDownload/></span>
</button>
</div>
        </div>

    </div>
<div className="">
  {modal && <CltnModal setModal={setModal} userCltns={userCltns} setUserCltns={setUserCltns} photo={photo} image={photo.url}/>}
</div>

    </>
  )
}
