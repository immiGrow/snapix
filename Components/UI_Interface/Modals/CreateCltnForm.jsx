import React,{useState} from 'react'
import baseUrl from '../../../mongodb/baseUrl'
import {parseCookies} from 'nookies';
import {IoIosCreate} from 'react-icons/io'
import {useRouter} from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateCltnForm({setCreate,setUserCltns,userCltns,photo}) {
  const router=useRouter()
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [curatedBy, setCuratedBy] = useState('')
    const {token}=parseCookies()
    const createNewCltn=async(e)=>{
      e.preventDefault()
      const req=await fetch(`${baseUrl}/api/account/addToCltn`,
      {
        method:"POST",
        headers:{
          "Authorization": token ,
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          title,
          description:desc,
          curatedBy
  
      })
      })
      const res=await req.json()
      console.log("The cltns created are ",res)
      if(res.success) {
        setUserCltns([...userCltns,res.cltns])
        setCreate(false)
        router.push(`/photo/${photo._id}`)
        toast.success("Collection has been created", {
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
        toast.error("Failed to create collection", {
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

    }
  return (
    <>
    <ToastContainer/>
        <div className="flex min-h-full items-center justify-center py-0 pr-4 pt-2  sm:pr-6 md:pr-16 lg:pr-20 w-full">
  <div className="w-full  ">
    
    <form onSubmit={createNewCltn} className=" space-y-2 mt-0 md:my-7 text-sm md:text-base md:space-y-6">
      <input type="hidden" name="remember" value="true"/>
      <div className="space-y-8 rounded-md shadow-sm">
        <div>
          <label htmlFor="title" className="sr-only">Title</label>
          <input id="email-address" name="title" type="text" onChange={(e)=>setTitle(e.target.value)} autoComplete="title" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Title"/>
        </div>
      </div>
      <div className="space-y-8 rounded-md shadow-sm">
        {/* <div>
          <label htmlFor="desc" className="sr-only">Description</label>
          <input id="description" name="description" type="text" onChange={(e)=>setDesc(e.target.value)} autoComplete="description" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 h-24 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Description"/>
        </div> */}
          <div className="relative mb-4">
        <label htmlFor="message" className="sr-only">Description</label>
        <textarea id="description" name="description" placeholder='Description' onChange={(e)=>setDesc(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-16  outline-none text-sm text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      </div>
      <div className="space-y-8 rounded-md shadow-sm">
        <div>
          <label htmlFor="text" className="sr-only">Curated By</label>
          <input id="curatedBy" name="title" type="text" onChange={(e)=>setCuratedBy(e.target.value)} autoComplete="text" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Curated by"/>
        </div>
      </div>


      <div className=''>
        
        <button type="submit" className="group relative text-sm flex w-full justify-center rounded-md border border-transparent bg-indigo-600 md:py-2 px-2 py-1 md:px-4 md:text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <span className="px-2 text-lg md:text-xl">
           
           <IoIosCreate/>
         </span>
          Create
        </button>
        
      </div>
    </form>
  </div>
</div>
    </>
  )
}
