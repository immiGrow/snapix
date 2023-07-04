import React,{useState,useEffect} from 'react'
import { parseCookies } from 'nookies'
import baseUrl from '../../mongodb/baseUrl'


import MyCollections from '../../Components/UI_Interface/Account/MyCollection/MyCollections'
import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/router'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import {BsFacebook,BsYoutube,BsInstagram,BsTwitter,BsImages, BsImage} from 'react-icons/bs'
import {SiManageiq,SiWalkman} from 'react-icons/si'
import Head from 'next/head'

// Add the charts ---> 10/3/2023

export default function UserAllPhotosWithProfile({profile,images,cltns,userId}) {
  const router=useRouter()
const [clicked, setClicked] = useState(false)
const [followed, setFollowed] = useState(false)
const {token}=parseCookies()
const followTheUser=async()=>{
  
  const req=await fetch(`${baseUrl}/api/account/followers`,{
   method:"PUT",
   headers:{
       "Content-Type": "application/json",
       "Authorization":token
       
   },
   body:JSON.stringify({
       fUserId:profile._id
   })
  })
  const res=await req.json()
  console.log("The followers ",res)
  setFollowed(true)
 
}
const unfollowTheUser=async()=>{
  
  const req=await fetch(`${baseUrl}/api/account/followers`,{
   method:"DELETE",
   headers:{
       "Content-Type": "application/json",
       "Authorization":token
       
   },
   body:JSON.stringify({
       fUserId:profile._id
   })
  })
  const res=await req.json()
  console.log("The unfollow ",res)
  setFollowed(false)
 
}



useEffect(() => {
  const redirectUser=()=>{
    console.log("The router",router.asPath)
    if(router.asPath===`/userphotos/${userId}`){
     
      router.push({
        pathname:"/account/myImages"
      })
    }
    else{
      console.log("User is not user")
    }
  
  }
  if(profile.followers.includes(userId)){
    setFollowed(true)
  }
  else{
    setFollowed(false); 
  }
redirectUser()
},[profile.followers, userId,router])



  return (

<>


<Head>
        <title>{profile.username} || Unreveal | Creators Everywhere</title>
        <meta
          name="description"
          content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. Photography is not only a hobby but it can also be your carrier."
        />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
    
    <div className="flex justify-center w-full py-4">
<div className="w-4/6 ">
    <div className="flex justify-center w-full">

<img src={profile.profile_image || "https://res.cloudinary.com/unreveal/image/upload/v1678877614/profile_agyzhd.png"} className="w-48 h-48 rounded-full object-cover object-top " alt="profile" />
    </div>
<h2 className='text-4xl font-semibold space-x-2 flex justify-center w-full'><span>{profile.firstName}</span><span>{profile.lastName}</span></h2>
<div className="flex justify-center w-full py-2">
<p className='text-slate-700 w-3/4 text-center'>{profile.about}</p>
</div>

<div className="button flex justify-center w-full py-2 space-x-3">
<button onClick={followTheUser} disabled={followed} className={!followed?'bg-black text-white font-semibold px-4 py-2 border-2 border-black rounded-md flex justify-center items-center space-x-2':'bg-white text-black font-semibold px-4 py-2 border-2 border-black rounded-md flex justify-center items-center space-x-2'}>
    <span><SiManageiq/></span> 
    <span>Follow</span></button>
<button onClick={unfollowTheUser} disabled={!followed} className={followed?'bg-black text-white font-semibold px-4 py-2 border-2 border-black rounded-md flex justify-center items-center space-x-2':'bg-white text-black font-semibold px-4 py-2 border-2 border-black rounded-md flex justify-center items-center space-x-2'}>
    <span><SiWalkman/></span> 
    <span>Unfollow</span></button>
</div>

<div className="flex justify-center items-center space-x-4 text-lg font-semibold pb-4">
    <li className="flex justify-center text-slate-700 items-center space-x-1">
    <span className='text-indigo-700'><BsImage/></span>
    <span>{images.length}+</span>
    </li>
    <li className="flex justify-center text-slate-700 items-center space-x-1">
    <span className='text-indigo-700'><AiOutlineAppstoreAdd/></span>
    <span>{cltns.length}+</span>
    </li>
</div>
<div className="flex justify-center">
  <div className="flex justify-center space-x-4">
  <a href={profile.facebook} target="_blank" rel="noreferrer" ><span className="text-slate-700 hover:text-black cursor-pointer"><BsFacebook/></span></a>
  <a href={profile.instagram} target="_blank" rel="noreferrer" ><span className="text-slate-700 hover:text-black cursor-pointer"><BsInstagram/></span></a>
  <a href={profile.twitter} target="_blank" rel="noreferrer" ><span className="text-slate-700 hover:text-black cursor-pointer"><BsTwitter/></span></a>
  <a href={profile.youtube} target="_blank" rel="noreferrer" ><span className="text-slate-700 hover:text-black cursor-pointer"><BsYoutube/></span></a>
  </div>
</div>
</div>
    </div>
    
    

<header className=" body-font bg-white shadow-md w-full px-2 ">
  <div className=" py-2 w-full ">
    
    <nav className=" flex items-center justify-center text-sm md:text-lg space-x-2 md:space-x-8 font-semibold list-none">
      <li onClick={()=>setClicked(false)} className={clicked?"px-4 md:px-6 py-2 rounded-3xl text-slate-700 hover:text-black cursor-pointer ":"px-4 md:px-6 py-2 rounded-3xl bg-black text-white cursor-pointer "}>Gallery</li>
      <li onClick={()=>setClicked(true)} className={!clicked?"px-4 md:px-6 py-2 rounded-3xl text-slate-700 hover:text-black cursor-pointer ":"px-4 md:px-6 py-2 rounded-3xl bg-black text-white cursor-pointer "}>Collections</li>


      {/* <li className="mr-5 hover:text-gray-900"></li> */}
    </nav>
   
  </div>
</header>
{
    !clicked?
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 w-full px-2 py-4">

{
    images.length>0? images.map((img,index)=>{
        return(
            <>
            <div key={index} className="">
            <Link href={`/photo/${img._id}`}><div className="w-full group">
                <Image width={300} height={500} src={img.url} className="w-full h-44 md:h-72 object-cover group-hover:opacity-90 object-center" alt={img.title} />
            </div></Link>
            </div>
            </>
        )
    })
    :
    <main className="grid min-h-full place-items-center bg-white py-6 px-6 sm:py-8 lg:px-8">
  <div className="text-center">

    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">No Photos Found</h1>
    <p className="mt-6 text-base leading-7 text-gray-600">Let&apos;s explore other photographer&apos;s high resolution photos.</p>
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <Link href={"/"}><button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let&apos;s see {" "} &rarr;</button></Link>
    </div>
  </div>
</main>
}


    </div>
    :
    <MyCollections cltn={cltns}/>
}
</>
  )
}
export async function getServerSideProps(ctx){
   const {token}=parseCookies(ctx)
if(!token){
  const {res}=ctx
  res.writeHeader(302,{
    Location:"/user/login"
  })
  res.end()
}
   if(token){
    const req2=await fetch(`${baseUrl}/api/user/getuser`,{
      method:"POST",
      headers:{
          "Content-Type": "application/json",
          "Authorization":token
          
      }
     })
     const res2=await req2.json()

     const {user}=ctx.query
     console.log("the profil",user)
     const req=await fetch(`${baseUrl}/api/userphotos/user`,{
      method:"PUT",
      headers:{
          "Content-Type": "application/json",
          
      },
      body:JSON.stringify({
          askUserId:user
      })
     })
     const res=await req.json()
     console.log("The whole profile of user is",res)

     return{
      props:{
        userId:res2.userId,
        profile:res.userProfile,
        images:res.allImages,
        cltns:res.allCollections
      }
     }
   }
   else{
    const {user}=ctx.query
    console.log("the profil",user)
    const req=await fetch(`${baseUrl}/api/userphotos/user`,{
     method:"PUT",
     headers:{
         "Content-Type": "application/json",
         
     },
     body:JSON.stringify({
         askUserId:user
     })
    })
    const res=await req.json()
    console.log("The whole profile of user is",res)
     return {
         props:{
             profile:res.userProfile,
             images:res.allImages,
             cltns:res.allCollections

         }
     }
   }
    
    }
