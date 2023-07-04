import React from 'react'
import baseUrl from '../../../mongodb/baseUrl'
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';
import CltnUI from './CltnUI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiOutlinePlus} from 'react-icons/ai'
export default function CltnList({setCreate,userCltns,setUserCltns,photo,setModal}) {
    // Build UI for list of collections
    // Add Blurhash
    // Profile editing
    const router=useRouter()
    console.log("The colection",userCltns,"photo is",photo);
    const {token}=parseCookies()

    const addToCltn=async(cltnId)=>{
      
      const req=await fetch(`${baseUrl}/api/account/addToCltn`,
      {
        method:"PUT",
        headers:{
          "Authorization": token ,
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          photoId:photo._id,
          cltnId:cltnId
  
      })

      })
      const res=await req.json()
      if(res.success){
        // setUserCltns(res.response.results)
        let col=userCltns.push(res.response.results)
        setUserCltns(col)
        console.log("The setUserCltsn",res)
        setModal(false)
        // router.push(`/photo/${photo._id}`)
        toast.success("Successfully added to collection", {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
      else{
        toast.error(res.message, {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
          setModal(false)
        // console.log("the photo has been",res)
      }
    }

  return (
    <>
    <ToastContainer/>
    <div className="  w-full flex justify-center pr-3 md:pr-16">
      <div className="w-full space-y-2 md:space-y-4 pt-8 ">

    <div onClick={()=>setCreate(true)} className="bg-white text-center flex justify-center text-xs md:text-base  w-full hover:text-black cursor-pointer hover:border-black font-semibold border-dashed border text-slate-600 border-slate-500 px-1 md:px-4 py-1 md:py-2 rounded-md ">
      <span className='hidden sm:block'>
      Create New Collection
      </span>
      <span className='sm:hidden text-center flex items-center space-x-1'>
<AiOutlinePlus/> <span>Create</span>
      </span>

    </div>
    {
     userCltns && userCltns.map((ctn,index)=>{
            return(
<div key={index} onClick={()=>addToCltn(ctn._id)} className=" w-full">
        <CltnUI ctn={ctn}/>
    </div>
            )
        })
    }
    
    
    </div>
    </div>
        
    </>
  )
}
