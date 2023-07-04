
import React,{useState} from 'react'

import {BsFacebook,BsYoutube,BsInstagram,BsTwitter} from 'react-icons/bs'
import {RxCross2} from 'react-icons/rx'
import Link from 'next/link'

export default function ThanksModal({photo,setShowModal}) {

    
  return (
  <>

 <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
 
  <div className="fixed inset-0  bg-transparent transition-opacity"></div>

  <div className="fixed inset-0 z-10 pt-8 overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
     
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full md:max-w-xl lg:max-w-2xl">
      
        <div className="bg-slate-100 bg-opacity-80 px-0 pt-4">
        <div onClick={()=>setShowModal(false)} className="flex justify-end pr-3 hover:cursor-pointer">
        <RxCross2/>
      </div>
        <section className="text-slate-700 body-font">
  <div className="container px-1 py-4 mx-auto flex flex-col">
    <div className="lg:w-full mx-auto">
      <div className="rounded-lg lg:h-48 w-full px-4 h-32 lg:px-8 overflow-hidden">
        <img  className="object-cover object-center h-full w-full" src={photo.url} alt={photo.title}/>
      </div>
      <div className="flex flex-col sm:flex-row mt-4 lg:mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-2">
          <div className=" inline-flex items-center justify-center ">
           <img src={photo.user.profile_image} className="w-12 h-12 rounded-full object-cover object-top" alt="User" />
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-1 lg:mt-4 text-gray-900 text-lg">{photo.user.username}</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="text-sm">Give a shoutout to user on social media.</p>
            <div className="flex justify-center space-x-4 pt-2">
  <a href={"www.facebook.com"} target="_blank" rel='noreferrer'><span className="text-slate-700 hover:text-black cursor-pointer"><BsFacebook/></span></a>
  <a href={photo.user.instagram} target="_blank" rel='noreferrer' ><span className="text-slate-700 hover:text-black cursor-pointer"><BsInstagram/></span></a>
  <a href={photo.user.twitter} target="_blank" rel='noreferrer'><span className="text-slate-700 hover:text-black cursor-pointer"><BsTwitter/></span></a>
  <a href={photo.user.youtube} target="_blank" rel='noreferrer'><span className="text-slate-700 hover:text-black cursor-pointer"><BsYoutube/></span></a>
  </div>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-0 pt-0 lg:mt-2 lg:pt-2 sm:mt-0 text-center text-sm lg:text-base sm:text-left">
         
          <Link href={`/userphotos/${photo.user._id}`}><div className="space-y-2">
            <p>Let&apos;s checkout more marvellous photos of the photographer</p>
            <button className='px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-sm text-white font-semibold'>Let&apos;s see {" "}&rarr;</button>
          </div></Link>
        
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    
      </div>
    </div>
  </div>
</div>

  </>
  )
}
