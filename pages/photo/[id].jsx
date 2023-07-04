import React,{useState,useEffect} from 'react'

import Nav from '../../Components/UI_Interface/EachPhoto/Nav';
import ImageData from '../../Components/UI_Interface/EachPhoto/ImageData';
import RelatedCollections from '../../Components/UI_Interface/EachPhoto/RelatedCollections';
import Head from 'next/head';


import baseUrl from '../../mongodb/baseUrl';

import { parseCookies } from 'nookies'

import RelatedPhoto from '../../Components/UI_Interface/RelatedPhotos/RelatedPhoto';
import Link from 'next/link';
import ThanksModal from '../../Components/UI_Interface/Modals/ThanksModal';


export default function PhotoId({photo,userId}) {
    // const router = useRouter()
    const [relcltn, setRelCltn] = useState([])
    const [relPhotos, setRelPhotos] = useState([])
    const [userCltns, setUserCltns] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [liked, setLiked] = useState(false)
    const {token}=parseCookies()
    console.log("the photo.title is ",photo.title,"and type of title is ",typeof(photo.title)) 
   

const relCltnsAndPhotos=async()=>{
    // setCltn(searchRelCltns)
    // setRelPhotos(searchRelPhotos)
    const req=await fetch(`${baseUrl}/api/related/relPhotos`,{
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify({
        queryPhotos:photo.title
      })
    })
    const res=await req.json()
    console.log("The relPhotos and relCltns are ",res)
    setRelPhotos(res.response.relPhotos)
    setRelCltn(res.response.relCltns)
  
}
const fetchUserCltns=async()=>{
  const reque=await fetch(`${baseUrl}/api/account/addToCltn`,{
    method:"GET",
    headers:{
      "Authorization":token,
      "Content-Type": "application/json"
    }
  })
  const resp=await reque.json()
  console.log("The user cltns are ",resp)
  setUserCltns(resp.response.results)
}
useEffect(() => {
  if(token){
    fetchUserCltns()

  }
  relCltnsAndPhotos()
})

useEffect(() => {
  // console.log("
  if(photo.likes.includes(userId)){
    setLiked(true)
    console.log("the user is present in like array","the photo.user is ",userId,"with photo",photo)
  }
  else{
    setLiked(false);
    // Recheck the like function and then follow up function
    console.log("the user is not present in like array","the photo.user is ",userId,"with photo",photo)
  }


}, [photo,userId]);
useEffect(() => {
    
  const changer=
    setTimeout(() => {
      setShowModal(false)
    }, 30000);
  
  return()=>clearTimeout(changer)

}, [showModal])

  return (
    <>
    <Head>
        <title>{photo.title} | Unreveal</title>
        <meta name="description" content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. That's is the power of Unreveal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
{showModal &&
  <ThanksModal setShowModal={setShowModal} showModal={showModal} photo={photo}/>}
<div className="py-6 xl:px-24">
    
<Nav photo={photo} userCltns={userCltns} setShowModal={setShowModal} setUserCltns={setUserCltns} liked={liked} setLiked={setLiked} />

<div className="flex justify-center w-full py-4">
<div className="w-5/6">
    <img
    //  width={500} height={600}
     src={photo.url} className="w-full hover:cursor-zoom-in" alt={photo.title} />
</div>
</div>

<ImageData photo={photo}/>
{relcltn.length>0? <><h2 className='font-bold py-2 xl:text-2xl text-slate-700 px-6 text-xl'>Related Collections</h2>
<RelatedCollections relctn={relcltn}/></>:""}
{relPhotos.length>0? <><h2 className='font-bold py-2 xl:text-2xl text-slate-700 px-6 text-xl'>Related Photos</h2>
<RelatedPhoto relPh={relPhotos}/></>:""}
{/*Related tags of photo */}
<h2 className='font-bold pt-4 xl:text-2xl text-slate-700 px-6 text-xl'>Related Tags</h2>
<div className="w-full px-12 flex flex-wrap list-none py-8  space-x-4">
  {
    photo && photo.tags.map((tag,index)=>{
      return(

      <li  key={index} className="">
        <Link href={`/search/${tag}`}><span className="text-slate-600 bg-slate-100 hover:text-black cursor-pointer px-2 py-1">{tag}</span></Link>
      </li>
      )
    })
  }
</div>
</div>
    </>
  )
}
export async function getServerSideProps(ctx){
const {token}=parseCookies(ctx)
const photoId=ctx.query.id

if(token){
const send=await fetch(`${baseUrl}/api/user/getuser`,{
  method:"POST",
  headers: {
    "Authorization":token
  }
})
const recieve=await send.json()
const req=await fetch(`${baseUrl}/api/photostudio/id`,{
  method: "POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({
    id:photoId
  })
})
const res=await req.json()

return{
  props:{
    userId:recieve.userId,
    photo:res.response.results,

  }
}
}
else{
  const req=await fetch(`${baseUrl}/api/photostudio/id`,{
    method: "POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      id:photoId
    })
  })
const res=await req.json()
return{
  props:{

    photo:res.response.results
  }
}
}

}